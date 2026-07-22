import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/medewerker-zit-vast")({
  head: () => ({
    meta: [
      { title: "Wanneer een loopbaangesprek niet genoeg is | Vizier op Scherp" },
      { name: "description", content: "Soms lost een goed gesprek het niet op: dezelfde onvrede keert terug. Hoe u herkent dat er een patroon speelt, en wanneer doorverwijzen verstandig is." },
      { property: "og:title", content: "Wanneer een loopbaangesprek niet genoeg is: signalen dat er meer speelt" },
      { property: "og:description", content: "Soms lost een goed gesprek het niet op: dezelfde onvrede keert terug. Hoe u herkent dat er een patroon speelt, en wanneer doorverwijzen verstandig is." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/medewerker-zit-vast` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/medewerker-zit-vast` }],
    scripts: [{ type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Wanneer een loopbaangesprek niet genoeg is: signalen dat er meer speelt",
  "description": "Soms lost een goed gesprek het niet op: dezelfde onvrede keert terug. Hoe u herkent dat er een patroon speelt, en wanneer doorverwijzen verstandig is.",
  "inLanguage": "nl",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/medewerker-zit-vast"}
}` }, { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat koppelen jullie terug aan de werkgever?",
      "acceptedAnswer": {"@type": "Answer", "text": "Terugkoppeling gebeurt op procesniveau: of het traject loopt, aanwezigheid, voortgang in algemene zin en de afronding. De inhoud van de gesprekken blijft tussen de medewerker en de coach. Die afspraak leggen we bij de start schriftelijk vast, zodat beide kanten precies weten wat wel en niet wordt gedeeld. Juist die duidelijkheid maakt dat medewerkers vrijuit kunnen spreken."}
    },
    {
      "@type": "Question",
      "name": "Wat als de medewerker niet wil?",
      "acceptedAnswer": {"@type": "Answer", "text": "Dan gebeurt er niets; coaching zonder eigen motivatie levert weinig op. Wat u wel kunt doen: het aanbod laten staan zonder druk. Vaak is een verwijzing die eerst wordt afgeslagen, maanden later alsnog welkom. Een vrijblijvende kennismaking verlaagt de drempel: de medewerker beslist zelf, na één gesprek, of dit iets is."}
    },
    {
      "@type": "Question",
      "name": "Is dit geen therapie?",
      "acceptedAnswer": {"@type": "Answer", "text": "Nee. Onze coaching gaat over iemands werk en loopbaan: patronen die daar in de weg zitten, keuzes die niet gemaakt worden, energie die weglekt. Bij signalen van gezondheidsklachten hoort de route via de bedrijfsarts of huisarts, en dat benoemen wij ook richting de medewerker. Waar nodig kunnen coaching en zorg naast elkaar bestaan, ieder met een eigen rol."}
    }
  ]
}` }, { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Wanneer een loopbaangesprek niet genoeg is: signalen dat er meer speelt","item":"${SITE_URL}/inzichten/medewerker-zit-vast"}]}` }],
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
    <p class="eyebrow">Inzichten · Voor werkgevers & HR</p>
    <h1>Wanneer een loopbaangesprek niet genoeg is: signalen dat er meer speelt<span class="slotpunt">.</span></h1>
    <p class="lead">U voert het goede gesprek, er komt lucht, er worden afspraken gemaakt. En drie maanden later zit u tegenover dezelfde onvrede.</p>
    <p class="meta">6 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">De meeste loopbaanvragen van medewerkers zijn met een goed gesprek en een praktische afspraak prima te bedienen: een ander takenpakket, een opleiding, een helder ontwikkelpad. Maar soms merkt u dat gesprekken wel plaatsvinden en niets veranderen. Dezelfde thema’s keren terug, in andere woorden. Dat is doorgaans geen kwestie van onwil, bij niemand aan tafel. Het is een teken dat er iets speelt dat een functioneringsgesprek niet kan dragen.</p>

    <p class="section-eyebrow">Herkennen</p>
    <h2>Vier signalen dat er meer speelt dan de functie</h2>
    <p>Honderd procent zekerheid bestaat hier niet, maar deze vier signalen zien wij in de praktijk het vaakst terug bij medewerkers die baat hadden bij een individueel traject:</p>
    <ul class="ruitlijst">
      <li><strong>Dezelfde frictie in opeenvolgende rollen.</strong> De medewerker liep in de vorige functie, of bij de vorige werkgever, op vrijwel hetzelfde punt vast. De omstandigheden verschilden; het knelpunt niet.</li>
      <li><strong>Inzicht zonder verandering.</strong> De gesprekken zijn open en constructief, de medewerker herkent alles wat besproken wordt, en het gedrag blijft gelijk. Weten en doen zijn losgekoppeld.</li>
      <li><strong>Het echte onderwerp wordt vermeden.</strong> U voelt dat er iets onder zit dat niet op tafel komt, hoe veilig u het gesprek ook maakt. Er wordt om de kern heen gepraat.</li>
      <li><strong>De omgeving heeft zich al aangepast.</strong> Collega’s organiseren het werk inmiddels om de situatie heen. Dat is vaak het stilste en duidelijkste signaal: het team compenseert wat niet wordt besproken.</li>
    </ul>

    <p class="section-eyebrow">Rolzuiverheid</p>
    <h2>Waarom u dit gesprek niet zelf moet willen voeren</h2>
    <p>De reflex van een betrokken leidinggevende of HR-professional is dan: dieper doorvragen, meer gesprekken plannen. Begrijpelijk, en toch is dat zelden verstandig. Niet vanwege een gebrek aan gespreksvaardigheid, maar vanwege de positie. U beoordeelt deze medewerker ook, beslist mee over diens rol en toekomst. Hoe goed de relatie ook is: een medewerker die twijfelt over zichzelf of over de eigen plek, houdt in dat gesprek altijd iets achter. Dat is geen wantrouwen, dat is verstandig gedrag richting iemand met belang bij de uitkomst.</p>
    <p>De rol die wél bij u past, is die van signaalgever: benoemen wat u ziet, zonder duiding, en de ruimte bieden om er met iemand anders naar te kijken. Dat onderscheid, signaleren wel, begeleiden niet, houdt uw relatie zuiver en geeft de medewerker een plek waar het achterhouden niet nodig is.</p>

    <div class="open-kader">
      <p>Een leidinggevende kan het signaal geven. Het gesprek zelf vraagt om iemand zonder belang bij de uitkomst.</p>
    </div>

    <p class="section-eyebrow">Werkwijze</p>
    <h2>Hoe doorverwijzen bij ons werkt</h2>
    <p>Een verwijzing begint met een kennismaking, zonder verplichting voor de medewerker. Op basis van de intake stellen wij een coach voor die past bij de persoon en de vraag; klikt het niet, dan stellen we iemand anders voor. De inhoud van de gesprekken blijft vertrouwelijk: u ontvangt terugkoppeling op procesniveau, over aanwezigheid, voortgang in algemene zin en afronding, nooit over de inhoud. Die afspraak leggen we vooraf vast, voor beide kanten.</p>
    <p>Over de uitkomst zijn we graag vooraf eerlijk: die kan twee kanten op. Soms vindt een medewerker binnen de huidige rol nieuwe grond, met meer energie en een gezondere werkverhouding als resultaat. Soms wordt helder dat een andere stap beter past, en wordt die stap zorgvuldig gezet in plaats van gestapeld uitgesteld. Beide uitkomsten zijn in ons werk winst voor de organisatie: een medewerker die blijft omdat het weer klopt, of een vertrek zonder slepend traject. Wat verdwijnt, is de derde variant, en dat is meestal de duurste: jaren van terugkerende gesprekken zonder beweging.</p>

  </div>
</article>

<section class="faq-sectie" aria-label="Veelgestelde vragen">
  <div class="article-container">
    <p class="section-eyebrow" style="margin-top:0">Veelgestelde vragen</p>
    <h2>Wat opdrachtgevers hierover vragen</h2>
    <details>
      <summary>Wat koppelen jullie terug aan de werkgever?</summary>
      <p>Terugkoppeling gebeurt op procesniveau: of het traject loopt, aanwezigheid, voortgang in algemene zin en de afronding. De inhoud van de gesprekken blijft tussen de medewerker en de coach. Die afspraak leggen we bij de start schriftelijk vast, zodat beide kanten precies weten wat wel en niet wordt gedeeld. Juist die duidelijkheid maakt dat medewerkers vrijuit kunnen spreken.</p>
    </details>
    <details>
      <summary>Wat als de medewerker niet wil?</summary>
      <p>Dan gebeurt er niets; coaching zonder eigen motivatie levert weinig op. Wat u wel kunt doen: het aanbod laten staan zonder druk. Vaak is een verwijzing die eerst wordt afgeslagen, maanden later alsnog welkom. Een vrijblijvende kennismaking verlaagt de drempel: de medewerker beslist zelf, na één gesprek, of dit iets is.</p>
    </details>
    <details>
      <summary>Is dit geen therapie?</summary>
      <p>Nee. Onze coaching gaat over iemands werk en loopbaan: patronen die daar in de weg zitten, keuzes die niet gemaakt worden, energie die weglekt. Bij signalen van gezondheidsklachten hoort de route via de bedrijfsarts of huisarts, en dat benoemen wij ook richting de medewerker. Waar nodig kunnen coaching en zorg naast elkaar bestaan, ieder met een eigen rol.</p>
    </details>
  </div>
</section>

<section class="verder" aria-label="Verder lezen">
  <div class="container">
    <p class="section-eyebrow" style="margin-top:0">Verder lezen</p>
    <h2>Ook interessant voor u</h2>
    <div class="kaarten">
      <a class="anker-kaart" href="/inzichten/inzicht-verandert-gedrag-niet">
        <span class="kaartlabel">Voor werkgevers & HR</span>
        <h3>Waarom inzicht alleen gedrag niet verandert</h3>
        <p>Na de training is iedereen enthousiast, drie maanden later is alles bij het oude. Wat wel beklijft.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/hetzelfde-gevoel-een-andere-baan">
        <span class="kaartlabel">Om te delen met uw medewerker</span>
        <h3>Hetzelfde gevoel, een andere baan</h3>
        <p>Waarom een overstap het patroon niet altijd oplost. Een artikel om door te sturen.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/vastzitten-in-een-goede-baan">
        <span class="kaartlabel">Om te delen met uw medewerker</span>
        <h3>Vastzitten in een goede baan: de gouden kooi</h3>
        <p>Herkenbaar voor medewerkers die op papier niets te klagen hebben. Een artikel om door te sturen.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Herkent u dit bij een van uw medewerkers?</h2>
        <p>In een gesprek van twintig minuten denken we vrijblijvend met u mee: wat u ziet, wat een passende route is en hoe u het aankaart.</p>
        <p class="werkgever">Veel opdrachtgevers beginnen met een losse verwijzing of een ronde proactieve loopbaangesprekken; een doorlopende jaarafspraak is daarna een logisch vervolg.</p>
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
