import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogPortal, DialogOverlay, DialogClose } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { supabase } from "@/integrations/supabase/client";

// Een download kan eigen teksten en een eigen actie meegeven via data-attributen op de link:
// data-workbook-eyebrow, -intro, -consent, -knop, -noot en -actie. Acties:
// - "download" (standaard): het bestand uit href downloaden;
// - "print": de printfunctie openen;
// - "ontgrendel": de pagina laten weten dat het formulier is ingevuld, met de DOM-gebeurtenis
//   "vos:ontgrendeld" en detail.slug. De talentenscan toont dan de uitslag.
// Zonder die attributen gelden de werkboekteksten.
type Action = "download" | "print" | "ontgrendel";
type Target = {
  href: string;
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  consentText: string;
  buttonLabel: string;
  note: string;
  action: Action;
};

const DEFAULTS = {
  eyebrow: "Werkboek",
  intro: "Laat je e-mailadres achter, dan kun je het werkboek meteen downloaden.",
  consentText:
    "Ik vind het goed dat Vizier op Scherp mij eventueel een keer mailt met een tip of vervolg. Uitschrijven kan altijd.",
  buttonLabel: "Download het werkboek",
  note: "We bewaren je e-mailadres om bij te houden wie het werkboek downloadt. Alleen als je het vakje aanvinkt, mailen we je.",
};

// Per apparaat onthouden welke downloads al zijn ontgrendeld: een volgende klik opent de download
// direct, zonder nieuwe rij in workbook_leads en zonder nieuwe melding.
const UNLOCK_KEY = "vos_downloads_ontgrendeld";

function readUnlocked(): string[] {
  try {
    const list = JSON.parse(localStorage.getItem(UNLOCK_KEY) ?? "[]");
    return Array.isArray(list) ? list.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function markUnlocked(slug: string) {
  try {
    const list = readUnlocked();
    if (!list.includes(slug)) list.push(slug);
    localStorage.setItem(UNLOCK_KEY, JSON.stringify(list));
  } catch {
    // Geen opslag beschikbaar (bijvoorbeeld privévenster): dan volgt bij een volgende klik opnieuw het formulier.
  }
}

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

function runAction(t: Target) {
  if (t.action === "print") {
    // Even wachten tot de dialoog dicht is, zodat die niet in de pdf belandt.
    window.setTimeout(() => window.print(), 150);
  } else if (t.action === "ontgrendel") {
    // Even wachten tot de dialoog dicht is, zodat de pagina de focus naar de uitslag kan zetten.
    window.setTimeout(() => {
      document.dispatchEvent(new CustomEvent("vos:ontgrendeld", { detail: { slug: t.slug } }));
    }, 150);
  } else {
    triggerDownload(t.href, t.href.split("/").pop() ?? "werkboek.pdf");
  }
}

function readAction(value: string | undefined): Action {
  return value === "print" || value === "ontgrendel" ? value : "download";
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
      const d = el.dataset;
      const next: Target = {
        href: el.href,
        slug: d.workbook ?? "",
        title: d.workbookTitle ?? "werkboek",
        eyebrow: d.workbookEyebrow ?? DEFAULTS.eyebrow,
        intro: d.workbookIntro ?? DEFAULTS.intro,
        consentText: d.workbookConsent ?? DEFAULTS.consentText,
        buttonLabel: d.workbookKnop ?? DEFAULTS.buttonLabel,
        note: d.workbookNoot ?? DEFAULTS.note,
        action: readAction(d.workbookActie),
      };
      if (next.slug && readUnlocked().includes(next.slug)) {
        runAction(next);
        return;
      }
      setTarget(next);
      setError(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!target) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ name, email, consent });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Controleer je gegevens");
      return;
    }
    // Honeypot: bots die het verborgen veld invullen krijgen een "geslaagde"
    // download, maar er wordt niets opgeslagen.
    if (hpWebsite.trim().length > 0) {
      setTarget(null);
      runAction(target);
      return;
    }
    setSubmitting(true);
    try {
      const { error: dbError } = await supabase.from("workbook_leads").insert({
        email: parsed.data.email,
        name: parsed.data.name || null,
        workbook_slug: target.slug,
        consent: parsed.data.consent,
        user_agent:
          typeof navigator !== "undefined"
            ? navigator.userAgent.slice(0, 500)
            : null,
      });
      if (dbError) throw dbError;
      try {
        localStorage.setItem(STORAGE_KEY, parsed.data.email);
      } catch {}
      markUnlocked(target.slug);
      setTarget(null);
      runAction(target);
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
            {target.eyebrow}
          </p>
          {/* Geen eigen id: Radix koppelt de titel zelf aan de dialoog (aria-labelledby). */}
          <DialogPrimitive.Title
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
            {target.intro}
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
              <span>{target.consentText}</span>
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
                {submitting ? "Even geduld…" : target.buttonLabel}
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
              {target.note} Meer in onze{" "}
              <a href="/privacyverklaring" style={{ color: "inherit", textDecoration: "underline" }}>
                privacyverklaring
              </a>
              .
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
