export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="footer-brand" href="/" aria-label="Vizier op Scherp — naar de homepage">
              <img src="/assets/vizier-logo-creme.png" alt="Vizier op Scherp" style={{ height: 30, width: "auto", display: "block" }} />
            </a>
            <p>Regionaal netwerk voor loopbaancoaching, voor werkgevers en hun medewerkers in Amsterdam, Haarlem en omgeving. Persoonlijk, professioneel en gericht op concrete stappen in werk.</p>
          </div>
          <div>
            <h2>Doelgroepen</h2>
            <a href="/voor-werkgevers">Voor werkgevers &amp; HR</a>
            <a href="/coaching-voor-mij">Coaching voor mij</a>
            <a href="/uwv-traject">UWV-traject</a>
            <a href="/leiderschap">Leiderschap &amp; talentontwikkeling</a>
          </div>
          <div>
            <h2>Bureau</h2>
            <a href="/over-ons#coaches">Onze coaches</a>
            <a href="/over-ons">Over ons</a>
            <a href="/kennismaken">Kennismaken</a>
            <a className="gold-link" href="/inzichten">Inzichten</a>
          </div>
          <div>
            <h2>Contact</h2>
            <address><strong>Haarlem</strong>Klein Heiligland 84, 2011 EJ Haarlem</address>
            <address><strong>Amsterdam</strong>IJsbaanpad 9, 1076 CV Amsterdam</address>
            <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>
            <a href="tel:+31202146466">020 214 64 66</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2016 - 2026 Vizier op Scherp · KVK 81088701 · BTW NL003529887B45</span>
          <a href="/privacyverklaring">Privacyverklaring</a>
          <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
          <a href="https://www.linkedin.com/company/10002759/" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
