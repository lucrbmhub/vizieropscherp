import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, socialImageMeta } from "@/lib/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loopbaancoaching | Amsterdam & Haarlem | Vizier op Scherp" },
      { name: "description", content: "Persoonlijke loopbaancoaching in Amsterdam en Haarlem. Voor mensen die richting zoeken in hun werk en voor werkgevers en HR. Gratis kennismaking van 30 minuten." },
      { property: "og:title", content: "Loopbaancoaching in Amsterdam & Haarlem | Vizier op Scherp" },
      { property: "og:description", content: "Persoonlijke loopbaancoaching, goed geregeld. Een klein netwerk van gecertificeerde coaches in Amsterdam en Haarlem, voor mensen en organisaties." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      ...socialImageMeta,
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vizier op Scherp",
          url: `${SITE_URL}/`,
          email: "hallo@vizieropscherp.nl",
          telephone: "+31202146466",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Klein Heiligland 84",
              postalCode: "2011 EJ",
              addressLocality: "Haarlem",
              addressCountry: "NL",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "IJsbaanpad 9",
              postalCode: "1076 CV",
              addressLocality: "Amsterdam",
              addressCountry: "NL",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const HTML = `<main id="main" class="vos-home">
<style>
@media (min-width:1061px){.vos-home .hero-media{align-self:end}.vos-home .vos-zelf.overlap-pad{padding-top:120px!important}}
.vos-home .vos-zelf-panel{padding:52px;border-radius:18px}
.vos-home .vos-zelf h2{font-size:clamp(28px,3vw,38px);line-height:1.14}
.vos-home .vos-zelf-intro{margin-top:16px;max-width:56ch}
.vos-home .vos-zelf .vos-lijst{margin:22px 0 30px}
.vos-home .vos-zelf .vos-lijst li{color:var(--ink)}
.vos-home .vos-wg-onder{margin-top:36px;display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px}
.vos-home .vos-wg-onder p{font-size:14.5px;color:var(--muted);max-width:58ch}
.vos-home .vos-wg-onder p a{color:var(--petrol);font-weight:500;border-bottom:1px solid var(--koraal)}
.vos-home .vos-wg-onder p a:hover{color:var(--koraal-deep)}
.vos-home .facet-inner.vos-cta2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;align-items:stretch;padding:0}
.vos-home .vos-cta2-col{display:flex;flex-direction:column;align-items:flex-start;padding:48px 52px}
.vos-home .vos-cta2-col+.vos-cta2-col{border-left:1px solid rgba(168,131,75,.35)}
.vos-home .vos-cta2 .eyebrow{margin-bottom:12px}
.vos-home .vos-cta2-col p{margin:10px 0 26px}
.vos-home .vos-cta2-col .btn{margin-top:auto;white-space:normal;text-align:center}
@media (max-width:860px){.vos-home .facet-inner.vos-cta2{grid-template-columns:1fr}.vos-home .vos-cta2-col{padding:36px 28px}.vos-home .vos-cta2-col+.vos-cta2-col{border-left:0;border-top:1px solid rgba(168,131,75,.35)}}
@media (max-width:620px){.vos-home .vos-zelf-panel{padding:30px 22px}}
</style>

<!-- HERO: gedeelde voordeur -->
<section class="hero hero--petrol">
  <div class="watermark"></div>
  <div class="container hero-pad">
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="badge">Loopbaancoach · Amsterdam, Haarlem en omgeving</span>
        <h1 class="h-hero"><span style="white-space:nowrap;">Persoonl<span class="idot">i</span>jke</span><br>loopbaan&shy;coaching. <span class="gold">Goed geregeld.</span></h1>
        <p class="lead">Een klein netwerk van gecertificeerde loopbaancoaches in Amsterdam en Haarlem. Voor mensen die richting zoeken in hun werk, en voor werkgevers die loopbaancoaching goed willen regelen.</p>
        <div class="btn-row">
          <a class="btn" style="background:var(--goud);color:var(--on-goud)" href="/coaching-voor-mij">Ik zoek coaching voor mezelf</a>
          <a class="btn btn-outline-light" href="/voor-werkgevers">Ik zoek coaching voor medewerkers</a>
        </div>
      </div>
      <div class="hero-media">
        <div style="position:relative;height:440px;border-radius:18px;overflow:hidden;clip-path:polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%);"><img src="/assets/coaching-gesprek.jpg" alt="Coachgesprek bij Vizier op Scherp" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>
      </div>
    </div>
  </div>
</section>

<!-- VOOR JEZELF -->
<section class="section overlap-pad vos-zelf">
  <div class="container">
    <div class="card--open vos-zelf-panel">
      <div class="grid g2-wide" style="align-items:center;gap:48px;">
        <div>
          <p class="eyebrow">Voor jezelf</p>
          <h2>Richting vinden in je werk, met een coach die bij je past</h2>
          <p class="vos-zelf-intro">Je twijfelt over je baan, je wilt iets anders of je weet dat er meer in zit. Samen met je coach breng je dat in kaart en zet je concrete stappen. Je komt op eigen initiatief of via je werkgever.</p>
          <ul class="vos-lijst vos-lijst--check">
            <li>Eerst een gratis kennismaking van 30 minuten met je coach</li>
            <li>Klikt het niet? Dan stellen we iemand anders voor</li>
            <li>Zes gesprekken, met een talent- en drijfverenassessment</li>
            <li>Vaak vergoed door je werkgever</li>
          </ul>
          <div class="btn-row">
            <a class="btn btn-primary" href="/kennismaken">Plan een gratis kennismaking</a>
            <a class="btn btn-outline" href="/coaching-voor-mij">Zo werkt coaching voor jezelf</a>
          </div>
        </div>
        <div class="card card--warm">
          <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M50 18 L82 50 L50 82 L18 50 Z" stroke="#1F3D3B" stroke-width="6" stroke-linejoin="round"></path><path d="M50 36 L64 50 L50 64 L36 50 Z" stroke="#E8714A" stroke-width="6" stroke-linejoin="round"></path><circle cx="50" cy="50" r="5" fill="#F2C879"></circle></svg>
          <h3>Wat je bespreekt, blijft vertrouwelijk</h3>
          <p>Ook als je werkgever het traject betaalt, blijft de inhoud tussen jou en je coach. Je werkgever hoort alleen óf het loopt, nooit waarover het gaat.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VOOR WERKGEVERS EN HR -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Voor werkgevers en HR</p>
      <h2 class="h-section">Eén vaste partner voor loopbaancoaching</h2>
      <p>Loopbaancoaching voor uw medewerkers, per traject of structureel geregeld. Met één aanspreekpunt, vaste coaches en heldere afspraken over proces, prijs en privacy.</p>
    </div>
    <div class="grid g3">
      <article class="card card--warm card--anchor ring-warm" style="display:flex;flex-direction:column;">
        <span class="label">Stap 1 · Laagdrempelig kennismaken</span>
        <h3>Proactieve loopbaangesprekken</h3>
        <p>Een ronde gesprekken met een groep medewerkers over energie, motivatie en ontwikkelbehoefte.</p>
        <span class="foot" style="margin-top:auto;padding-top:20px;">Voor organisaties die willen beginnen</span>
      </article>
      <article class="card card--petrol" style="display:flex;flex-direction:column;">
        <span class="label">Stap 2 · Per medewerker</span>
        <h3>Individuele coachtrajecten</h3>
        <p>Loopbaancoaching voor een medewerker die u doorverwijst. Eén traject, één heldere prijsafspraak, één vast aanspreekpunt.</p>
        <span class="foot" style="margin-top:auto;padding-top:20px;">Voor concrete, actuele loopbaanvragen</span>
      </article>
      <article class="card card--goud" style="display:flex;flex-direction:column;">
        <span class="label">Stap 3 · Structureel geregeld</span>
        <h3>Coachingpool als jaarafspraak</h3>
        <p>Eén jaarlijkse overeenkomst, medewerkers stromen het hele jaar door in. Voorspelbaar in kosten, georganiseerd in proces.</p>
        <span class="foot" style="margin-top:auto;padding-top:20px;">Voor organisaties die het goed willen regelen</span>
      </article>
    </div>
    <p style="margin-top:28px;display:flex;align-items:center;gap:14px;font-size:14.5px;color:var(--muted);max-width:64ch;"><span style="flex:none;width:48px;height:2px;background:var(--goud);"></span>Veel van onze opdrachtgevers beginnen met een gespreksronde en groeien door naar een jaarafspraak, in hun eigen tempo.</p>
    <div class="vos-wg-onder">
      <a class="btn btn-dark" href="/voor-werkgevers">Bekijk het aanbod voor werkgevers</a>
      <p>Nog niet zover? <a href="/assets/De_Loopbaangesprek-leidraad.pdf" data-workbook="loopbaangesprek-leidraad" data-workbook-title="Loopbaangesprek-leidraad">Download de loopbaangesprek-leidraad</a>: een praktische gids voor het goede gesprek met uw medewerkers.</p>
    </div>
  </div>
</section>

<!-- TWEE RICHTINGEN -->
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Twee richtingen</p>
      <h2 class="h-section">Sterker in je huidige rol, en verder als je wilt</h2>
      <p>Loopbaancoaching wordt vaak gelezen als 'de deur uit'. In een groot deel van onze trajecten blijkt juist dat een aanpassing in de huidige situatie al veel verandert: een ander perspectief, ander gedrag, een passender takenpakket of een frissere kijk op het werk.</p>
    </div>
    <div class="grid g2">
      <article class="card card--open">
        <h3>Sterker in je huidige rol</h3>
        <p>Weer energie en plezier, heldere prioriteiten, effectiever samenwerken. Voor wie op zijn plek zit en daar beter wil functioneren en zichzelf wil blijven ontwikkelen.</p>
      </article>
      <article class="card card--anchor ring-paper">
        <h3>Een nieuwe richting</h3>
        <p>Twijfel ordenen, ontdekken wat past en een volgende stap zetten. Intern waar het kan, extern waar dat beter is.</p>
      </article>
    </div>
  </div>
</section>

<!-- BEWIJS -->
<section class="section section--petrol">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow eyebrow--gold">Waarom Vizier op Scherp</p>
      <h2 class="h-section">Een klein netwerk met bewezen ervaring</h2>
      <p>Geen grote organisatie met wisselende gezichten, maar een bewust klein netwerk. Zo is vooraf duidelijk wie er aan tafel zit.</p>
    </div>
    <div class="bigstats" style="margin-bottom:56px;">
      <div class="bigstat"><b>1.000+</b><span>trajecten begeleid door ons coachnetwerk, in onder meer onderwijs, zorg, overheid en zakelijke dienstverlening</span></div>
      <div class="bigstat"><b>5-10</b><span>coaches. Bewust klein gehouden, zorgvuldig geselecteerd</span></div>
      <div class="bigstat"><b>100%</b><span>gecertificeerde coaches, met achtergronden in coaching, psychologie, HR en recruitment</span></div>
      <div class="bigstat"><b>2 locaties</b><span>Coaching in Haarlem, Amsterdam en online</span></div>
    </div>
    <div class="grid g2" style="gap:48px;">
      <figure class="quote" style="margin:0;">
        <div class="quote-rail"><span class="top"></span><span class="bar"></span><span class="end"></span></div>
        <div>
          <div style="display:flex;align-items:center;gap:18px;justify-content:flex-start;margin-bottom:14px;"><span class="testimonial-avatar" style="display:block;width:72px;height:72px;border-radius:50%;overflow:hidden;flex:none;background:var(--petrol);position:relative;"><img src="/assets/wouter.jpg" alt="Wouter van der Meij" style="width:100%;height:100%;object-fit:cover;display:block;" /><span style="position:absolute;right:-2px;bottom:2px;width:10px;height:10px;background:var(--goud);transform:rotate(45deg);box-shadow:0 0 0 4px var(--petrol);"></span></span><span style="display:inline-flex;align-items:center;background:#ffffff;border-radius:12px;padding:9px 14px;flex:none;"><img src="/assets/quatronic-logo.png" alt="Quatronic" style="display:block;width:auto;height:26px;object-fit:contain;" /></span></div>
          <blockquote>&ldquo;Wij werken al ruim 4 jaar met Vizier op Scherp voor de persoonlijke- en loopbaanontwikkeling van onze medewerkers. De samenwerking is professioneel, warm en afspraken worden nagekomen. Onze medewerkers zijn hoogopgeleide technology consultants tussen de 25-40 jaar, die zich niet zomaar iets laten vertellen. De coaches en trainers van Vizier op Scherp zijn kwalitatief sterk, leveren echt maatwerk, en door de flexibele aanpak weten ze goed aan te sluiten bij onze medewerkers en organisatiebehoeften. We geven de samenwerking een 9 en kunnen ze van harte aanbevelen.&rdquo;</blockquote>
          <cite>Wouter van der Meij, partner bij Quatronic</cite>
        </div>
      </figure>
      <figure class="quote" style="margin:0;">
        <div class="quote-rail"><span class="top"></span><span class="bar"></span><span class="end"></span></div>
        <div>
          <blockquote>&ldquo;Het traject heeft me geholpen om rustig te kijken naar wat ik echt wilde. Geen druk, wel concrete stappen. Ik heb nu een rol die beter past bij wat ik kan en wil.&rdquo;</blockquote>
          <cite>Anouk V., Beleidsadviseur, publieke sector</cite>
        </div>
      </figure>
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Het team</p>
      <h2 class="h-section">Ons coachnetwerk</h2>
    </div>
    <div class="grid g4">
      <div class="card coach-mini card--line"><span class="avatar"><img src="/assets/zelah.jpg" alt="Loopbaancoach Zelah Dorrestijn" loading="lazy" /></span><h3>Zelah</h3><span>Coaching · therapeut, ACT, zelfinzicht</span></div>
      <div class="card coach-mini card--line"><span class="avatar"><img src="/assets/maaike.jpg" alt="Loopbaancoach Maaike Pannekoek-Hänschen" loading="lazy" /></span><h3>Maaike</h3><span>Coaching · onderwijs, zorg, leidinggevenden</span></div>
      <div class="card coach-mini card--line"><span class="avatar"><img src="/assets/lianne.jpg" alt="Loopbaancoach Lianne Both" loading="lazy" /></span><h3>Lianne</h3><span>Coaching · persoonlijk leiderschap, loopbaan</span></div>
      <div class="card coach-mini card--line"><span class="avatar"><img src="/assets/floor.jpg" alt="Loopbaancoach Floor van den Berg" loading="lazy" /></span><h3>Floor</h3><span>Loopbaancoaching · Positieve Gezondheid</span></div>
      <div class="card coach-mini card--line"><span class="avatar"><img src="/assets/luc.jpg" alt="Loopbaancoach Luc Buurman" loading="lazy" /></span><h3>Luc</h3><span>Loopbaancoaching · richting, young professionals</span></div>
    </div>
    <div style="margin-top:36px;display:flex;flex-wrap:wrap;gap:24px;align-items:center;">
      <a class="btn btn-outline" href="/over-ons#coaches">Bekijk alle coachprofielen</a>
      <p style="font-size:14.5px;color:var(--muted);max-width:52ch;">Elke coach heeft een eigen profiel met verhaal, aanpak en achtergrond.</p>
    </div>
  </div>
</section>

<!-- WERKGEBIED -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head" style="margin-bottom:0;">
      <p class="eyebrow">Werkgebied</p>
      <h2 class="h-section">Loopbaancoaching in Amsterdam, Haarlem en omgeving</h2>
      <p>Wij werken voor mensen en organisaties in de hele regio, vanuit onze locaties in Haarlem en Amsterdam-Zuid. Coaching vindt plaats op een van onze locaties of online, wat het beste past.</p>
      <p>Lees meer over <a href="/loopbaancoach-haarlem" style="border-bottom:1px solid var(--koraal);">loopbaancoaching in Haarlem</a> en <a href="/loopbaancoach-amsterdam" style="border-bottom:1px solid var(--koraal);">loopbaancoaching in Amsterdam</a>.</p>
      <p style="margin-top:20px;">Ons werkgebied omvat onder meer <strong style="color:var(--ink);font-weight:500;">Amsterdam, Haarlem, Amstelveen, Hoofddorp, Zaanstad, Almere, Diemen, Hilversum, Heemstede, Aalsmeer, Uithoorn en Purmerend</strong>, plus de omliggende gemeenten.</p>
    </div>
  </div>
</section>

<!-- SLOTBLOK: twee deuren -->
<section class="section">
  <div class="container">
    <div class="facet">
      <div class="facet-inner vos-cta2">
        <div class="vos-cta2-col">
          <div class="eyebrow">Voor jezelf</div>
          <h2>Kennismaken met je coach</h2>
          <p>Een gratis gesprek van 30 minuten met de coach die bij je past. Daarna beslis je pas of je verder wilt.</p>
          <a class="btn btn-primary" href="/kennismaken">Plan een gratis kennismaking</a>
        </div>
        <div class="vos-cta2-col">
          <div class="eyebrow">Voor organisaties</div>
          <h2>Benieuwd wat dit voor uw organisatie kan betekenen?</h2>
          <p>Plan een vrijblijvend kennismakingsgesprek. We luisteren eerst, denken dan mee, en komen met een concreet voorstel dat past bij uw situatie en budget.</p>
          <a class="btn btn-dark" href="/kennismaken">Plan een kennismakingsgesprek</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KEURMERKEN -->
<section class="section tight" style="padding-bottom:80px;">
  <div class="container">
    <p style="text-align:center;font-size:15px;color:var(--muted);max-width:60ch;margin:0 auto 28px;">Coaches in ons netwerk zijn aangesloten bij erkende beroepsregisters, waaronder:</p>
    <div class="seals" style="align-items:center;justify-content:center;gap:56px;">
      <div class="seal" style="display:flex;flex-direction:column;align-items:center;gap:14px;"><img src="/assets/keurmerk-nobco.png" alt="Logo NOBCO, Nederlandse orde van beroepscoaches" style="height:96px;width:auto;display:block;" /></div>
      <div class="seal" style="display:flex;flex-direction:column;align-items:center;gap:14px;"><img src="/assets/keurmerk-noloc.png" alt="Logo Noloc, Register Loopbaanprofessional" style="height:96px;width:auto;display:block;" /></div>
    </div>
  </div>
</section>

</main>
`;

function Index() {
  return (
    <>
      <SiteHeader />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <SiteFooter />
    </>
  );
}
