import { useState } from "react";

type Active =
  | "voor-werkgevers"
  | "coaching-voor-mij"
  | "over-ons"
  | "inzichten"
  | "kennismaken"
  | "";

const LINKS: Array<{ href: string; label: string; key: Active; cta?: boolean }> = [
  { href: "/voor-werkgevers", label: "Voor werkgevers & HR", key: "voor-werkgevers" },
  { href: "/coaching-voor-mij", label: "Coaching voor mij", key: "coaching-voor-mij" },
  { href: "/over-ons", label: "Over ons", key: "over-ons" },
  { href: "/inzichten", label: "Inzichten", key: "inzichten" },
  { href: "/kennismaken", label: "Kennismaken", key: "kennismaken", cta: true },
];

export default function SiteHeader({ active = "" as Active }: { active?: Active }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip" href="#main">Direct naar inhoud</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="Vizier op Scherp — naar de homepage">
            <img src="/assets/vizier-logo-petrol.png" alt="Vizier op Scherp" style={{ height: 34, width: "auto", display: "block" }} />
          </a>
          <nav className={`main-nav${open ? " open" : ""}`} aria-label="Hoofdnavigatie">
            {LINKS.map((l) => {
              const classes = [
                l.cta ? "nav-cta" : "",
                active === l.key ? "active" : "",
              ].filter(Boolean).join(" ");
              return (
                <a key={l.href} href={l.href} className={classes || undefined}>
                  {l.label}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
