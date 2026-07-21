import { useEffect, useRef, useState } from "react";

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
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    lastY.current = window.scrollY;
    const DREMPEL = 6;
    const BOVENKANT = 80;

    const update = () => {
      const y = window.scrollY;
      const mobile = window.matchMedia("(max-width: 900px)").matches;
      if (!mobile || openRef.current || y < BOVENKANT) {
        setHidden(false);
      } else if (Math.abs(y - lastY.current) > DREMPEL) {
        setHidden(y > lastY.current);
      }
      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .site-header{transition:transform .28s ease;will-change:transform}
        .site-header.site-header--hidden{transform:translateY(-100%)}
        @media (min-width:901px){.site-header.site-header--hidden{transform:none}}
        @media (prefers-reduced-motion:reduce){.site-header{transition:none}}
      `}</style>
      <a className="skip" href="#main">Direct naar inhoud</a>
      <header className={`site-header${hidden && !open ? " site-header--hidden" : ""}`}>
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
