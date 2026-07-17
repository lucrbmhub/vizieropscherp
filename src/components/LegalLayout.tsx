import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="legal-wrap">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
