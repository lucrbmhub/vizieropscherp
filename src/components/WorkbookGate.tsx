import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogPortal, DialogOverlay, DialogClose } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { supabase } from "@/integrations/supabase/client";

type Target = {
  href: string;
  slug: string;
  title: string;
};

const schema = z.object({
  name: z.string().trim().max(120).optional(),
  email: z
    .string()
    .trim()
    .min(3)
    .max(320)
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/i, "Vul een geldig e-mailadres in"),
  consent: z.boolean(),
});

const STORAGE_KEY = "vos_workbook_email";

function triggerDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  a.rel = "noopener";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function WorkbookGate() {
  const [target, setTarget] = useState<Target | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hpWebsite, setHpWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const emailInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setEmail(stored);
    } catch {}
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(
        "a[data-workbook]",
      ) as HTMLAnchorElement | null;
      if (!el) return;
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
        return;
      e.preventDefault();
      setTarget({
        href: el.href,
        slug: el.dataset.workbook ?? "",
        title: el.dataset.workbookTitle ?? "werkboek",
      });
      setError(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!target) return null;

  const filename = target.href.split("/").pop() ?? "werkboek.pdf";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ name, email, consent });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Controleer je gegevens");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/submit-form", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          form: "workbook",
          name: parsed.data.name || null,
          email: parsed.data.email,
          workbook_slug: target.slug,
          consent: parsed.data.consent,
          hp_website: hpWebsite,
        }),
      });
      if (res.status === 429) {
        setError(
          "Er zijn te veel aanvragen vanaf dit adres. Probeer het over een paar minuten opnieuw of mail hallo@vizieropscherp.nl.",
        );
        return;
      }
      if (!res.ok) throw new Error("submit_failed");
      try {
        localStorage.setItem(STORAGE_KEY, parsed.data.email);
      } catch {}
      triggerDownload(target.href, filename);
      setTarget(null);
    } catch (err) {
      console.error(err);
      setError(
        "Er ging iets mis. Probeer het nog eens of mail hallo@vizieropscherp.nl.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog
      open={!!target}
      onOpenChange={(open) => {
        if (!open) setTarget(null);
      }}
    >
      <DialogPortal>
        <DialogOverlay
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(31,61,59,.55)",
          }}
        />
        <DialogPrimitive.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            setTimeout(() => emailInput.current?.focus(), 0);
          }}
          aria-labelledby="wb-title"
          aria-describedby={undefined}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10000,
            background: "#FAF6EF",
            borderRadius: "16px",
            maxWidth: "480px",
            width: "calc(100% - 40px)",
            padding: "36px 32px 30px",
            boxShadow: "0 20px 60px rgba(31,61,59,.28)",
            fontFamily: "'Instrument Sans', sans-serif",
            color: "#4A5550",
          }}
        >
          <DialogClose asChild>
            <button
              type="button"
              aria-label="Sluiten"
              style={{
                position: "absolute",
                top: "14px",
                right: "16px",
                background: "transparent",
                border: 0,
                fontSize: "24px",
                lineHeight: 1,
                color: "#7A7466",
                cursor: "pointer",
                padding: "6px 10px",
              }}
            >
              ×
            </button>
          </DialogClose>
          <p
            style={{
              fontSize: "12.5px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#A8834B",
              margin: "0 0 10px",
            }}
          >
            Werkboek
          </p>
          <DialogPrimitive.Title
            id="wb-title"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 500,
              fontSize: "26px",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "#1F3D3B",
              margin: "0 0 10px",
            }}
          >
            {target.title}
          </DialogPrimitive.Title>
          <p style={{ fontSize: "15px", margin: "0 0 22px", lineHeight: 1.55 }}>
            Laat je e-mailadres achter, dan kun je het werkboek meteen
            downloaden.
          </p>
          <form onSubmit={submit} noValidate>
            {/* Honeypot — visually hidden, off-screen */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                top: "auto",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="wb-website">Website (niet invullen)</label>
              <input
                id="wb-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={hpWebsite}
                onChange={(e) => setHpWebsite(e.target.value)}
              />
            </div>
            <label
              htmlFor="wb-name"
              style={{
                display: "block",
                fontSize: "13.5px",
                fontWeight: 500,
                color: "#1F3D3B",
                marginBottom: "6px",
              }}
            >
              Je naam (optioneel)
            </label>
            <input
              id="wb-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={120}
              autoComplete="name"
              style={inputStyle}
            />
            <label
              htmlFor="wb-email"
              style={{
                display: "block",
                fontSize: "13.5px",
                fontWeight: 500,
                color: "#1F3D3B",
                margin: "14px 0 6px",
              }}
            >
              E-mailadres
            </label>
            <input
              id="wb-email"
              ref={emailInput}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={320}
              autoComplete="email"
              style={inputStyle}
            />
            <label
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                margin: "16px 0 4px",
                fontSize: "13.5px",
                lineHeight: 1.45,
                color: "#5A5442",
              }}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: "3px" }}
              />
              <span>
                Ik vind het goed dat Vizier op Scherp mij eventueel een keer
                mailt met een tip of vervolg. Uitschrijven kan altijd.
              </span>
            </label>
            {error && (
              <p
                role="alert"
                style={{
                  color: "#B4432A",
                  fontSize: "13.5px",
                  margin: "12px 0 0",
                }}
              >
                {error}
              </p>
            )}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? "Even geduld…" : "Download het werkboek"}
              </button>
              <DialogClose asChild>
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: 0,
                    color: "#7A7466",
                    fontSize: "14.5px",
                    cursor: "pointer",
                    padding: "10px 8px",
                  }}
                >
                  Annuleren
                </button>
              </DialogClose>
            </div>
            <p
              style={{
                fontSize: "12.5px",
                color: "#7A7466",
                margin: "14px 0 0",
                lineHeight: 1.5,
              }}
            >
              We gebruiken je gegevens alleen om je het werkboek te sturen en om
              eventueel contact op te nemen.
            </p>
          </form>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  fontSize: "15px",
  fontFamily: "'Instrument Sans', sans-serif",
  color: "#1F3D3B",
  background: "#fff",
  border: "1.5px solid #E4DCC8",
  borderRadius: "10px",
  outline: "none",
  boxSizing: "border-box",
};
