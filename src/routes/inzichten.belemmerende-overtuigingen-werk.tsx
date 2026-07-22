import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/belemmerende-overtuigingen-werk")({
  head: () => ({
    meta: [
      { title: "De overtuiging die je loopbaan stuurt | Vizier op Scherp" },
      { name: "description", content: "Hard werken hoort, klagen doe je niet, kiezen is verliezen. Overtuigingen die je meekreeg sturen je loopbaan, tot je ze herkent." },
      { property: "og:title", content: "De overtuiging die je loopbaan stuurt, en die je nooit zelf hebt gekozen" },
      { property: "og:description", content: "Hard werken hoort, klagen doe je niet, kiezen is verliezen. Overtuigingen die je meekreeg sturen je loopbaan, tot je ze herkent." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/belemmerende-overtuigingen-werk` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/belemmerende-overtuigingen-werk` }],
    scripts: [{ type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "De overtuiging die je loopbaan stuurt, en die je nooit zelf hebt gekozen",
  "description": "Hard werken hoort, klagen doe je niet, kiezen is verliezen. Overtuigingen die je meekreeg sturen je loopbaan, tot je ze herkent.",
  "inLanguage": "nl",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/belemmerende-overtuigingen-werk"}
}` }, { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe herken ik zo’n overtuiging bij mezelf?",
      "acceptedAnswer": {"@type": "Answer", "text": "Kijk naar de plekken waar je gedrag en je wens al lang niet meer op één lijn liggen: iets willen en het steeds niet doen. Daar zit vrijwel altijd een regel onder. En let op zinnen met "hoort", "moet" of "doe je niet". Overtuigingen vermommen zich als gezond verstand; de toets is of je hetzelfde advies aan een goede vriend zou geven."}
    },
    {
      "@type": "Question",
      "name": "Zijn overtuigingen dan slecht?",
      "acceptedAnswer": {"@type": "Answer", "text": "Nee. Overtuigingen zijn ooit ontstaan omdat ze werkten; ze gaven houvast in de omgeving waarin je ze leerde. Sommige passen nog steeds bij je en mag je koesteren. Het probleem is niet de overtuiging zelf, maar dat hij ongezien meestuurt. Zodra je hem kent, kun je kiezen: houden omdat hij klopt, of loslaten omdat hij knelt."}
    },
    {
      "@type": "Question",
      "name": "Kan ik dit zelf veranderen, zonder coach?",
      "acceptedAnswer": {"@type": "Answer", "text": "Herkennen kun je zeker zelf; dit artikel is daarvoor een begin. Het lastige zit in de blinde vlek: juist omdat een overtuiging als waarheid voelt, zie je hem bij jezelf het slechtst. Een coach hoort de regels in je verhaal die jij allang niet meer opmerkt, en helpt je toetsen wat je ermee wilt. Dat gaat sneller en dieper dan alleen."}
    }
  ]
}` }, { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"De overtuiging die je loopbaan stuurt, en die je nooit zelf hebt gekozen","item":"${SITE_URL}/inzichten/belemmerende-overtuigingen-werk"}]}` }],
  }),
  component: Page,
});

const ARTICLE_CSS = `*{margin:0;padding:0;box-sizing:border-box}
h1, h2, h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:500;letter-spacing:-0.015em;color:var(--petrol);text-wrap:balance}
.article-container{max-width:760px;margin:0 auto;padding:0 32px}
/* Nav */
.nav{position:sticky;top:0;z-index:100;background:rgba(250,246,239,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--rand-licht)}
@media(max-width:900px){
  .hamburger{display:block}
  .nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:var(--papier);flex-direction:column;align-items:flex-start;gap:0;border-bottom:1px solid var(--rand-licht);padding:8px 0}
  .nav-links.open{display:flex}
  .nav-links li{width:100%}
  .nav-links a{display:block;padding:14px 32px}
  .nav-cta{margin:10px 32px;display:inline-block;border-radius:999px}
}
/* Hero */
.hero{background:var(--petrol);padding:88px 0 72px;position:relative;overflow:hidden}
.hero .watermark{position:absolute;right:-160px;top:40px;width:460px;height:460px;border:2px solid rgba(245,239,227,.09);transform:rotate(45deg)}
.hero .watermark::after{content:"";position:absolute;inset:90px;border:2px solid rgba(232,113,74,.16)}
.hero-inner{position:relative;max-width:760px;margin:0 auto;padding:0 32px}
.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;text-transform:uppercase;letter-spacing:.2em;font-weight:600;color:var(--goud)}
.eyebrow::before{content:"";width:7px;height:7px;background:var(--goud);transform:rotate(45deg);flex:none}
.hero h1{font-size:clamp(34px,4.4vw,52px);line-height:1.1;color:var(--linnen);margin:20px 0 18px}
.hero h1 .slotpunt{color:var(--goud)}
/* i-punt: alleen gebruiken als de H1 een losstaande "i" bevat; span.idot om die i heen */
.idot{position:relative;display:inline-block}
.idot::before{content:"";position:absolute;left:50%;top:0;width:.19em;height:.27em;background:var(--petrol);transform:translateX(-50%)}
.idot::after{content:"";position:absolute;left:50%;top:.075em;width:.17em;height:.17em;background:var(--koraal);transform:translateX(-50%) rotate(45deg)}
.hero .lead{font-size:17.5px;color:var(--mint);max-width:58ch}
.hero .meta{margin-top:26px;font-size:13.5px;color:var(--mint-dof)}
/* Article */
.article{padding:80px 0}
.article h2{font-size:clamp(24px,3vw,32px);line-height:1.15;margin:52px 0 18px}
.article p{margin:0 0 20px}
.article .intro{font-size:17.5px;max-width:58ch}
.section-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;text-transform:uppercase;letter-spacing:.2em;font-weight:600;color:var(--goudlabel);margin-top:52px}
.section-eyebrow::before{content:"";width:7px;height:7px;background:var(--koraal);transform:rotate(45deg);flex:none}
.section-eyebrow + h2{margin-top:12px}
/* Checklist */
.ruitlijst{list-style:none;margin:0 0 20px}
.ruitlijst li{position:relative;padding-left:26px;margin-bottom:12px}
.ruitlijst li::before{content:"";position:absolute;left:2px;top:7px;width:8px;height:8px;background:var(--koraal);transform:rotate(45deg)}
/* Open kader (uitgelicht) */
.open-kader{position:relative;border:2px solid var(--petrol);border-radius:16px;padding:30px 32px;margin:40px 0;background:transparent}
.open-kader::before{content:"";position:absolute;top:-2px;right:36px;width:46px;height:2px;background:var(--papier)}
.open-kader::after{content:"";position:absolute;top:-7px;right:52px;width:14px;height:14px;border-radius:50%;background:var(--koraal)}
.open-kader p{margin:0;font-family:'Bricolage Grotesque',sans-serif;font-size:19px;line-height:1.55;color:var(--petrol)}
/* Zorgvuldig-noot */
.noot{background:var(--linnen);border-radius:14px;padding:22px 26px;margin:40px 0;font-size:14.5px;color:var(--body)}
.noot strong{color:var(--petrol)}
/* FAQ */
.faq-sectie{background:var(--linnen);padding:80px 0}
.faq-sectie h2{font-size:clamp(26px,3vw,34px);margin:12px 0 30px}
details{border-bottom:1px solid var(--rand);padding:20px 0}
details summary{font-family:'Bricolage Grotesque',sans-serif;font-weight:500;font-size:18px;color:var(--petrol);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:16px}
details summary::-webkit-details-marker{display:none}
details summary::after{content:"+";font-size:22px;color:var(--koraal);transition:transform .2s;flex:none}
details[open] summary::after{transform:rotate(45deg)}
details p{margin-top:14px;max-width:62ch}
/* Verder lezen */
.verder{padding:80px 0}
.verder h2{font-size:clamp(26px,3vw,34px);margin:12px 0 34px}
.kaarten{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
@media(max-width:900px){.kaarten{grid-template-columns:1fr}}
.anker-kaart{position:relative;background:var(--linnen);border-radius:16px;padding:30px 26px 26px;text-decoration:none;display:block}
.anker-kaart::before{content:"";position:absolute;top:-7px;left:30px;width:12px;height:12px;background:var(--koraal);transform:rotate(45deg);box-shadow:0 0 0 5px var(--linnen)}
.anker-kaart .kaartlabel{font-size:11px;text-transform:uppercase;letter-spacing:.18em;color:var(--goudlabel);font-weight:600;display:block;margin-bottom:10px}
.anker-kaart h3{font-size:19px;line-height:1.3;margin-bottom:10px}
.anker-kaart p{font-size:14.5px;color:var(--body);margin-bottom:14px}
.anker-kaart .lees{color:var(--koraal);font-weight:500;font-size:14.5px}
/* Facet CTA */
.cta-sectie{padding:0 0 96px}
.facet-buiten{background:var(--goud);clip-path:polygon(22px 0,calc(100% - 22px) 0,100% 22px,100% calc(100% - 22px),calc(100% - 22px) 100%,22px 100%,0 calc(100% - 22px),0 22px);padding:2px}
.facet-binnen{background:var(--warm);clip-path:polygon(21px 0,calc(100% - 21px) 0,100% 21px,100% calc(100% - 21px),calc(100% - 21px) 100%,21px 100%,0 calc(100% - 21px),0 21px);padding:52px 48px;text-align:center}
.facet-binnen h2{font-size:clamp(24px,2.8vw,32px);margin-bottom:14px}
.facet-binnen p{color:var(--body-warm);max-width:62ch;margin:0 auto 12px}
.facet-binnen .werkgever{font-size:14.5px;color:var(--body-warm);max-width:62ch;margin:0 auto 26px}
.btn-primair{display:inline-block;background:var(--koraal);color:var(--tekst-koraal);font-weight:500;font-size:15px;padding:15px 26px;border-radius:10px;text-decoration:none}
.btn-primair:hover{filter:brightness(.95)}
@media(max-width:640px){.facet-binnen{padding:40px 24px}}
/* Footer */
footer{background:var(--petrol);padding:64px 0 36px;color:var(--mint)}
@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.footer-grid{grid-template-columns:1fr}}`;

const HTML = `<main id="main">
<header class="hero">
  <div class="watermark" aria-hidden="true"></div>
  <div class="hero-inner">
    <p class="eyebrow">Inzichten · Voor medewerkers</p>
    <h1>De overtuiging die je loopbaan stuurt, en die je nooit zelf hebt gekozen<span class="slotpunt">.</span></h1>
    <p class="lead">Hard werken hoort. Klagen doe je niet. Wat je begint, maak je af. Herken je er eentje?</p>
    <p class="meta">5 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">Over de grote loopbaankeuzes denken we lang na. Maar onder die keuzes ligt een laag waar we zelden naar kijken: de overtuigingen over werk die we ooit meekregen, thuis, op school, in een eerste baan. Ze voelen niet als meningen maar als waarheden, en juist daarom sturen ze zo krachtig mee. Vaak al jaren, zonder dat je het doorhebt.</p>

    <p class="section-eyebrow">Voorbeelden</p>
    <h2>Vier overtuigingen die je misschien herkent</h2>
    <p>Iedereen draagt zijn eigen set mee, maar sommige komen we in de praktijk steeds weer tegen:</p>
    <ul class="ruitlijst">
      <li><strong>"Eerst bewijzen, dan pas vragen."</strong> Je wacht met vragen om ruimte, salaris of een andere rol tot je het onomstotelijk hebt verdiend. Alleen: dat moment komt nooit, want de lat schuift mee.</li>
      <li><strong>"Zekerheid geef je niet op."</strong> Een vast contract, een goed pensioen, dat laat je niet los. Elke gedachte aan iets anders wordt meteen afgekapt als onverantwoord, nog voor je hem hebt onderzocht.</li>
      <li><strong>"Wat je begint, maak je af."</strong> Stoppen voelt als falen. Dus blijf je in een studie, functie of richting waarvan je allang weet dat hij niet meer past, omdat volhouden nu eenmaal een deugd is.</li>
      <li><strong>"Doe maar gewoon."</strong> Ambitie uitspreken voelt als naast je schoenen lopen. Dus praat je je wensen klein, ook tegen jezelf, en verbaas je je erover dat anderen wel die stap zetten.</li>
    </ul>
    <p>Let op wat deze zinnen gemeen hebben: ze klinken allemaal verstandig. Dat is precies hun kracht. Een overtuiging die onzin klinkt, laat je makkelijk los. Een overtuiging die klinkt als gezond verstand, blijft ongezien zijn werk doen.</p>

    <div class="open-kader">
      <p>Een overtuiging voelt niet als een keuze. Dat is precies wat hem zo krachtig maakt.</p>
    </div>

    <p class="section-eyebrow">Herkennen</p>
    <h2>Hoe je ze op het spoor komt</h2>
    <p>Overtuigingen herken je zelden rechtstreeks; je ziet ze aan hun sporen. Twee vragen helpen. De eerste: waar botst mijn gedrag met wat ik eigenlijk wil? Als je al jaren ruimte wilt vragen en het nooit doet, zit daar vrijwel zeker een regel onder. De tweede: zou ik dit advies aan een goede vriend geven? Als je een vriend van harte zou aanraden om die overstap te onderzoeken, terwijl je het jezelf verbiedt, dan hanteer je voor jezelf een andere wet. Die wet is de overtuiging.</p>
    <p>Ook de herkomst kan verhelderen. Veel werkregels stammen uit een tijd of omgeving waarin ze klopten: een gezin waar zekerheid schaars was, een sector waar je fouten werden afgestraft. De regel was toen logisch. De vraag is alleen of hij nu, in jouw leven, nog steeds klopt.</p>

    <p class="section-eyebrow">Wegen</p>
    <h2>Van regel naar keuze</h2>
    <p>Het doel is niet om al je overtuigingen overboord te zetten. Sommige kloppen nog steeds en passen bij wie je bent; afmaken waar je aan begint kan een waarde zijn waar je achter staat. Het doel is dat je ze kunt wegen in plaats van gehoorzamen. Een regel die je bewust omarmt, is een keuze. Dezelfde regel die je nooit hebt bevraagd, is een beperking.</p>
    <p>In een coachtraject is dit vaak het kantelpunt: het moment waarop iemand een zin uitspreekt die al twintig jaar meereist en hem voor het eerst van een afstand bekijkt. Wat daarna volgt, verschilt. Soms een andere stap, soms juist meer rust in de huidige rol, omdat het knagende gevoel eindelijk een naam heeft. Beide zijn winst; het verschil is dat jij voortaan stuurt, en niet de regel.</p>

  </div>
</article>

<section class="faq-sectie" aria-label="Veelgestelde vragen">
  <div class="article-container">
    <p class="section-eyebrow" style="margin-top:0">Veelgestelde vragen</p>
    <h2>Wat mensen hierover vragen</h2>
    <details>
      <summary>Hoe herken ik zo’n overtuiging bij mezelf?</summary>
      <p>Kijk naar de plekken waar je gedrag en je wens al lang niet meer op één lijn liggen: iets willen en het steeds niet doen. Daar zit vrijwel altijd een regel onder. En let op zinnen met "hoort", "moet" of "doe je niet". Overtuigingen vermommen zich als gezond verstand; de toets is of je hetzelfde advies aan een goede vriend zou geven.</p>
    </details>
    <details>
      <summary>Zijn overtuigingen dan slecht?</summary>
      <p>Nee. Overtuigingen zijn ooit ontstaan omdat ze werkten; ze gaven houvast in de omgeving waarin je ze leerde. Sommige passen nog steeds bij je en mag je koesteren. Het probleem is niet de overtuiging zelf, maar dat hij ongezien meestuurt. Zodra je hem kent, kun je kiezen: houden omdat hij klopt, of loslaten omdat hij knelt.</p>
    </details>
    <details>
      <summary>Kan ik dit zelf veranderen, zonder coach?</summary>
      <p>Herkennen kun je zeker zelf; dit artikel is daarvoor een begin. Het lastige zit in de blinde vlek: juist omdat een overtuiging als waarheid voelt, zie je hem bij jezelf het slechtst. Een coach hoort de regels in je verhaal die jij allang niet meer opmerkt, en helpt je toetsen wat je ermee wilt. Dat gaat sneller en dieper dan alleen.</p>
    </details>
  </div>
</section>

<section class="verder" aria-label="Verder lezen">
  <div class="container">
    <p class="section-eyebrow" style="margin-top:0">Verder lezen</p>
    <h2>Ook interessant voor jou</h2>
    <div class="kaarten">
      <a class="anker-kaart" href="/inzichten/weten-maar-niet-doen">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Je weet wat je zou moeten doen</h3>
        <p>Waarom doe je het dan niet? Wat er onder stilstand zit, en wat wel beweging geeft.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/richting-vinden-in-je-loopbaan">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Richting vinden in je loopbaan</h3>
        <p>Waarom je niet bij de vacaturesite moet beginnen, maar bij wat je energie geeft en wat je drijft.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/innerlijke-criticus">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Het kritische stemmetje dat zegt dat het nooit genoeg is</h3>
        <p>Waar die strenge stem vandaan komt en hoe je er anders mee leert omgaan.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Benieuwd welke regels bij jou meesturen?</h2>
        <p>Een eerste gesprek is vrijblijvend en verplicht je tot niets. Je vertelt wat er speelt, wij stellen een coach voor die bij je past, en daarna beslis jij.</p>
        <p class="werkgever">Goed om te weten: veel werkgevers vergoeden een loopbaantraject vanuit het ontwikkelbudget. Vraag ernaar bij HR, we denken graag mee over hoe je dat aankaart.</p>
        <a class="btn-primair" href="/kennismaken">Plan een vrijblijvende kennismaking</a>
      </div>
    </div>
  </div>
</section>

</main>`;

function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ARTICLE_CSS }} />
      <SiteHeader active="inzichten" />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <SiteFooter />
    </>
  );
}
