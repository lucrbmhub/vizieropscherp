import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kennismaken")({
  head: () => ({
    meta: [
      { title: "Kennismaken | Plan een vrijblijvend gesprek | Vizier op Scherp" },
      { name: "description", content: "Bellen, WhatsAppen, mailen of langskomen in Haarlem of Amsterdam. Plan een vrijblijvend kennismakingsgesprek met Vizier op Scherp." },
      { property: "og:title", content: "Kennismaken | Vizier op Scherp" },
      { property: "og:description", content: "Vertel wat er speelt, dan kijken we samen wat helpt. Een eerste gesprek is zo gebeurd." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vizieropscherp.lovable.app/kennismaken" },
    ],
    links: [{ rel: "canonical", href: "https://vizieropscherp.lovable.app/kennismaken" }],
  }),
  component: Page,
});

const HTML_BEFORE = `<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="Vizier op Scherp — naar the homepage">
      <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true"><rect x="8" y="8" width="84" height="84" rx="10" fill="#1F3D3B"></rect><path d="M50 26 L74 50 L50 74 L26 50 Z" fill="none" stroke="#E8714A" stroke-width="6" stroke-linejoin="miter"></path><rect x="44" y="44" width="12" height="12" fill="#F2C879" transform="rotate(45 50 50)"></rect></svg>
      <span>Vizier op Scherp</span>
    </a>
    <nav class="main-nav" aria-label="Hoofdnavigatie">
      <a href="/voor-werkgevers">Voor werkgevers &amp; HR</a>
      <a href="/coaching-voor-mij">Coaching voor mij</a>
      <a href="/uwv-traject">UWV-traject</a>
      <a href="/coaches">Onze coaches</a>
      <a href="/over-ons">Over ons</a>
      <a class="nav-cta" href="/kennismaken">Kennismaken</a>
    </nav>
  </div>
</header>

<main>

<!-- HERO -->
<section class="hero hero--linnen">
  <div class="watermark watermark--light"></div>
  <div class="container hero-pad">
    <div class="hero-copy" style="max-width:760px;">
      <span class="badge badge--dark">Kennismaken</span>
      <h1 class="h-hero">Laten we kennismaken<span class="gold">.</span></h1>
      <p class="lead">Vertel wat er speelt, voor jezelf of in de organisatie. Dan kijken we samen wat helpt. Een eerste gesprek is zo gebeurd, en vaak verrassend verhelderend.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#bericht-form">Laat iets achter</a>
        <a class="btn btn-outline" href="https://wa.me/31611221424" target="_blank" rel="noopener noreferrer">Of WhatsApp ons</a>
      </div>
      <p style="font-size:15px;white-space:pre-line;">Liever mailen of bellen?
<a href="mailto:hallo@vizieropscherp.nl" style="font-weight:500;border-bottom:1px solid var(--koraal);">hallo@vizieropscherp.nl\u00a0
020 214 64 66</a></p>
    </div>
  </div>
</section>

<!-- DE GESPREKKEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">De gesprekken</p>
      <h2 class="h-section">Waar wil je het over hebben?</h2>
      <p>Drie manieren waarop een eerste gesprek eruit kan zien. Kies wat past, of laat het ons weten en we wijzen je de weg.</p>
    </div>
    <div class="grid g3">
      <article class="card card--petrol">
        <span class="label">Voor werkgevers &amp; HR</span>
        <h3>Verkennen wat past</h3>
        <p>Je vertelt what er speelt in de organisatie, wij denken mee over de aanpak: van een gespreksronde tot een coachingpool. Daarna krijg je een concreet voorstel met heldere prijzen.</p>
      </article>
      <article class="card card--goud">
        <span class="label">Voor jezelf</span>
        <h3>Kennismaken met een coach</h3>
        <p>Je vertelt wat er speelt, wij stellen een coach voor die bij je past. Klikt het, dan ga je verder. Klikt het niet, dan zoeken we iemand anders.</p>
      </article>
      <article class="card card--warm">
        <span class="label">Via UWV</span>
        <h3>Rustig je opties verkennen</h3>
        <p>We leggen in gewone taal uit hoe een Werkfit- of Naar Werk-traject werkt. Daarna kijk je wat je wilt, en helpen we met de aanmelding als je dat prettig vindt.</p>
      </article>
    </div>
  </div>
</section>
`;

const HTML_AFTER = `<!-- FORMULIER -->
<section class="section" id="bericht-form">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Of laat iets achter</p>
      <h2 class="h-section">Laat iets achter</h2>
      <p>Je naam, je mailadres en waar je het over wilt hebben. De rest bespreken we wel.</p>
    </div>
    <form class="form" novalidate>
      <div class="field">
        <label for="name">Je naam</label>
        <input id="name" name="name" type="text" required maxlength="200" autocomplete="name">
      </div>
      <div class="field">
        <label for="email">Je e-mailadres</label>
        <input id="email" name="email" type="email" required maxlength="320" autocomplete="email">
      </div>
      <div class="field">
        <label for="phone">Telefoon (als je liever gebeld wordt)</label>
        <input id="phone" name="phone" type="tel" maxlength="30" autocomplete="tel">
      </div>
      <div class="field">
        <label for="role">Je komt</label>
        <select id="role" name="role">
          <option value="Voor jezelf" selected>Voor jezelf</option>
          <option value="Namens een medewerker">Namens een medewerker</option>
          <option value="Voor je organisatie">Voor je organisatie</option>
          <option value="Via UWV">Via UWV</option>
          <option value="Anders">Anders</option>
        </select>
        <p class="hint">Zo zorgen we dat de juiste persoon contact met je opneemt.</p>
      </div>
      <div class="field">
        <label for="message">Waar wil je het over hebben?</label>
        <textarea id="message" name="message" rows="6" maxlength="5000" placeholder="Een paar zinnen is genoeg."></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Versturen</button>
        <p class="hint" style="margin-top:14px;">We gaan netjes om met je gegevens en gebruiken ze alleen om contact op te nemen. Lees meer in onze <a href="/privacyverklaring" style="border-bottom:1px solid var(--koraal);">privacyverklaring</a>.</p>
      </div>
    </form>
  </div>
</section>

</main>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="footer-brand" href="/" aria-label="Vizier op Scherp — naar the homepage">
          <svg width="30" height="30" viewBox="0 0 100 100" aria-hidden="true"><rect x="8" y="8" width="84" height="84" rx="10" fill="#F5EFE3"></rect><path d="M50 26 L74 50 L50 74 L26 50 Z" fill="none" stroke="#1F3D3B" stroke-width="6" stroke-linejoin="miter"></path><rect x="44" y="44" width="12" height="12" fill="#E8714A" transform="rotate(45 50 50)"></rect></svg>
          <span>Vizier op Scherp</span>
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
        <a href="/coaches">Onze coaches</a>
        <a href="/over-ons">Over ons</a>
        <a href="/kennismaken">Kennismaken</a>
        <a class="gold-link" href="/inzichten">Inzichten</a>
      </div>
      <div>
        <h2>Contact</h2>
        <address><strong>Haarlem</strong>Klein Heiligland 84, 2011 EJ Haarlem</address>
        <address><strong>Amsterdam</strong>IJsbaanpad 9, 1076 CV Amsterdam</address>
        <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>
        <a href="tel:+31202146466">020 214 64 66</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2016 - 2026 Vizier op Scherp · KVK 81088701 · BTW NL003529887B45</span>
      <a href="/privacyverklaring">Privacyverklaring</a>
      <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
      <a href="https://www.linkedin.com/company/10002759/" rel="noopener">LinkedIn</a>
    </div>
  </div>
</footer>`;

import CalEmbed from "@/components/CalEmbed";

function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML_BEFORE }} />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Direct inplannen</p>
            <h2 className="h-section">Kies een moment dat u uitkomt.</h2>
            <p>Twintig minuten, vrijblijvend. U kiest de tijd; we bellen of spreken af op een van onze locaties.</p>
          </div>
          <CalEmbed />
          <div className="dia-divider" style={{ margin: "44px 0 8px" }} aria-hidden="true"><span /></div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--petrol)", opacity: 0.7, margin: 0 }}>of</p>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: HTML_AFTER }} />
    </>
  );
}
