import { createFileRoute } from "@tanstack/react-router";
import { createHash } from "crypto";
import { z } from "zod";

const WORKBOOK_SLUGS = [
  "richting-scherp",
  "werken-vinden-via-mensen",
  "aan-het-roer",
  "loopbaangesprek-leidraad",
] as const;

const ROLES = ["Werkgever / HR", "Medewerker", "Particulier", "Via UWV", "Anders"] as const;

const baseFields = {
  hp_website: z.string().max(500).optional(), // honeypot
};

const contactSchema = z.object({
  form: z.literal("contact"),
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().min(3).max(320).regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/i),
  phone: z.string().trim().max(30).optional().nullable(),
  role: z.string().trim().max(100),
  message: z.string().trim().max(5000).optional().nullable(),
  ...baseFields,
});

const workbookSchema = z.object({
  form: z.literal("workbook"),
  name: z.string().trim().max(120).optional().nullable(),
  email: z.string().trim().min(3).max(320).regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/i),
  workbook_slug: z.enum(WORKBOOK_SLUGS),
  consent: z.boolean(),
  ...baseFields,
});

const bodySchema = z.discriminatedUnion("form", [contactSchema, workbookSchema]);

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function hashIp(ip: string): string {
  const salt = process.env.RATE_LIMIT_SALT ?? "vos-rate-limit-v1";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function log(payload: Record<string, unknown>) {
  console.log(
    JSON.stringify({ ts: new Date().toISOString(), source: "submit-form", ...payload }),
  );
}

export const Route = createFileRoute("/api/public/submit-form")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "content-type",
          },
        }),
      POST: async ({ request }) => {
        const ip = getClientIp(request);
        const ipHash = hashIp(ip);

        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          log({ event: "reject", reason: "invalid_json", ipHash });
          return Response.json({ ok: false, reason: "invalid_json" }, { status: 400 });
        }

        const parsed = bodySchema.safeParse(raw);
        if (!parsed.success) {
          log({
            event: "reject",
            reason: "validation",
            ipHash,
            issues: parsed.error.issues.map((i) => i.path.join(".") + ":" + i.code),
          });
          return Response.json({ ok: false, reason: "validation" }, { status: 400 });
        }
        const data = parsed.data;

        // Honeypot: if filled, pretend success but drop.
        if (data.hp_website && data.hp_website.trim().length > 0) {
          log({ event: "honeypot", form: data.form, ipHash });
          return Response.json({ ok: true });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        // Rate limit
        const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
        const { count, error: rlErr } = await supabaseAdmin
          .from("form_rate_limits")
          .select("id", { count: "exact", head: true })
          .eq("ip_hash", ipHash)
          .gte("created_at", windowStart);
        if (rlErr) {
          log({ event: "error", stage: "rate_limit_check", ipHash, err: rlErr.message });
          return Response.json({ ok: false, reason: "server_error" }, { status: 500 });
        }
        if ((count ?? 0) >= RATE_LIMIT_MAX) {
          log({ event: "reject", reason: "rate_limited", form: data.form, ipHash, count });
          return Response.json({ ok: false, reason: "rate_limited" }, { status: 429 });
        }

        // Log attempt
        const { error: rlInsertErr } = await supabaseAdmin
          .from("form_rate_limits")
          .insert({ ip_hash: ipHash, form_type: data.form });
        if (rlInsertErr) {
          log({ event: "warn", stage: "rate_limit_insert", err: rlInsertErr.message });
        }

        const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

        if (data.form === "contact") {
          const { error } = await supabaseAdmin.from("contact_aanvragen").insert({
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            role: data.role,
            message: data.message || null,
            user_agent: userAgent,
          });
          if (error) {
            log({ event: "error", stage: "insert_contact", ipHash, err: error.message });
            return Response.json({ ok: false, reason: "server_error" }, { status: 500 });
          }
          log({ event: "accept", form: "contact", ipHash });
          return Response.json({ ok: true });
        }

        // workbook
        const { error } = await supabaseAdmin.from("workbook_leads").insert({
          email: data.email,
          name: data.name || null,
          workbook_slug: data.workbook_slug,
          consent: data.consent,
          user_agent: userAgent,
        });
        if (error) {
          log({ event: "error", stage: "insert_workbook", ipHash, err: error.message });
          return Response.json({ ok: false, reason: "server_error" }, { status: 500 });
        }
        log({ event: "accept", form: "workbook", slug: data.workbook_slug, ipHash });
        return Response.json({ ok: true });
      },
    },
  },
});
