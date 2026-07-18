import { useState } from "react";

type Active =
  | "voor-werkgevers"
  | "coaching-voor-mij"
  | "uwv-traject"
  | "over-ons"
  | "inzichten"
  | "kennismaken"
  | "";

const LINKS: Array<{ href: string; label: string; key: Active; cta?: boolean }> = [
  { href: "/voor-werkgevers", label: "Voor werkgevers & HR", key: "voor-werkgevers" },
  { href: "/coaching-voor-mij", label: "Coaching voor mij", key: "coaching-voor-mij" },
  { href: "/uwv-traject", label: "UWV-traject", key: "uwv-traject" },
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
            <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true">
              <rect x="8" y="8" width="84" height="84" rx="10" fill="#1F3D3B" />
              <path d="M50 26 L74 50 L50 74 L26 50 Z" fill="none" stroke="#E8714A" strokeWidth="6" strokeLinejoin="miter" />
              <rect x="44" y="44" width="12" height="12" fill="#F2C879" transform="rotate(45 50 50)" />
            </svg>
            <span>Vizier op Scherp</span>
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
