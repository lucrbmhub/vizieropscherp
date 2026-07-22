import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/niet-kunnen-kiezen-loopbaan")({
  head: () => ({
    meta: [
      { title: "Niet kunnen kiezen in je loopbaan | Vizier op Scherp" },
      { name: "description", content: "Nog een test, nog een gesprek, nog een lijstje, en je weet het nog steeds niet. Waarom loopbaankeuzestress zelden een informatieprobleem is." },
      { property: "og:title", content: "Niet kunnen kiezen in je loopbaan: waarom meer informatie niet helpt" },
      { property: "og:description", content: "Nog een test, nog een gesprek, nog een lijstje, en je weet het nog steeds niet. Waarom loopbaankeuzestress zelden een informatieprobleem is." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/niet-kunnen-kiezen-loopbaan` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/niet-kunnen-kiezen-loopbaan` }],
    scripts: [{ type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Niet kunnen kiezen in je loopbaan: waarom meer informatie niet helpt",
  "description": "Nog een test, nog een gesprek, nog een lijstje, en je weet het nog steeds niet. Waarom loopbaankeuzestress zelden een informatieprobleem is.",
  "inLanguage": "nl",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/niet-kunnen-kiezen-loopbaan"}
}` }, { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe weet ik of ik er klaar voor ben om te kiezen?",
      "acceptedAnswer": {"@type": "Answer", "text": "Wachten op zekerheid is meestal wachten op iets dat niet komt; bij echte loopbaankeuzes hoort twijfel. Een betere toets: weet je wat voor jou het zwaarst weegt? Zolang dat vaag is, voelt geen enkele optie goed. Zodra je waarden helder zijn, hoeft de twijfel niet weg te zijn om toch te kunnen kiezen."}
    },
    {
      "@type": "Question",
      "name": "Wat als ik de verkeerde keuze maak?",
      "acceptedAnswer": {"@type": "Answer", "text": "Die angst is begrijpelijk, maar loopbaankeuzes zijn zelden zo definitief als ze voelen. Vrijwel elke stap is bij te sturen, en van een keuze die anders uitpakt, leer je meer over wat je wilt dan van jaren twijfelen. De echte vraag is wat niet kiezen je kost: die rekening loopt stilletjes op, elke maand opnieuw."}
    },
    {
      "@type": "Question",
      "name": "Helpt een loopbaantest?",
      "acceptedAnswer": {"@type": "Answer", "text": "Als startpunt kan een test woorden geven aan wat je al vaag voelt, en dat is nuttig. Maar een test kiest niet voor je, en bij aanhoudende twijfel zit het probleem zelden in een gebrek aan testuitslagen. Botsen er waarden of speelt er angst voor spijt, dan helpt onderzoeken meer dan meten. Daar kijk je met een coach samen naar."}
    }
  ]
}` }, { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Niet kunnen kiezen in je loopbaan: waarom meer informatie niet helpt","item":"${SITE_URL}/inzichten/niet-kunnen-kiezen-loopbaan"}]}` }],
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
    <h1>Niet kunnen kiezen in je loopbaan: waarom meer informatie niet helpt<span class="slotpunt">.</span></h1>
    <p class="lead">Nog een loopbaantest gedaan, nog twee koffiegesprekken gepland, het lijstje met voors en tegens voor de derde keer herschreven. En je weet het nog steeds niet.</p>
    <p class="meta">5 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">Als kiezen niet lukt, is de logische reactie: meer uitzoeken. Nog een gesprek, nog een test, nog een nachtje slapen. Soms helpt dat. Maar als de twijfel maanden aanhoudt terwijl de stapel informatie groeit, is er iets anders aan de hand. Dan is het geen kennisprobleem meer, en lost meer kennis het dus ook niet op.</p>

    <p class="section-eyebrow">De vergelijkfuik</p>
    <h2>Waarom meer informatie de twijfel voedt</h2>
    <p>Opties vergelijken werkt alleen als je een maat hebt om mee te meten. Zonder die maat wordt elke nieuwe informatie extra ruis: optie A heeft betere voorwaarden, optie B meer vrijheid, optie C een leuker team, en niets ervan geeft de doorslag omdat je niet hebt bepaald wat voor jou het zwaarst weegt. Zo ontstaat de fuik: hoe meer je uitzoekt, hoe meer er te wegen valt, hoe verder de keuze wegdrijft.</p>
    <p>Ondertussen voelt al dat uitzoeken wel productief. Je bent er tenslotte druk mee. Maar niet kiezen is ook een keuze, meestal voor de status quo, alleen dan zonder dat je er ooit bewust ja tegen hebt gezegd. Dat is het sluipende verlies van lang twijfelen: de maanden gaan door, en de keuze die je niet maakt, wordt intussen voor je gemaakt.</p>

    <div class="open-kader">
      <p>Aanhoudende twijfel is zelden een informatieprobleem. Meestal is het een waardenprobleem.</p>
    </div>

    <p class="section-eyebrow">Onder de twijfel</p>
    <h2>Wat er meestal onder zit</h2>
    <p>Wie de twijfel zelf onderzoekt in plaats van de opties, vindt vrijwel altijd een van deze vier:</p>
    <ul class="ruitlijst">
      <li><strong>Twee waarden botsen.</strong> Zekerheid tegenover ontwikkeling, ambitie tegenover tijd voor thuis. De opties zijn niet het probleem; ze staan voor twee dingen die je allebei wilt.</li>
      <li><strong>Angst voor spijt.</strong> Niet de keuze zelf is eng, maar het idee dat je er later op terugkijkt en het jezelf kwalijk neemt.</li>
      <li><strong>De keuze voelt definitief.</strong> Alsof dit de laatste afslag is en elke deur die je sluit, voorgoed dicht blijft. Dat klopt bijna nooit, maar het voelt wel zo.</li>
      <li><strong>Andermans stem weegt stiekem mee.</strong> Wat je partner verstandig vindt, wat je ouders altijd zeiden, wat collega's zouden denken. Onder al die stemmen raakt je eigen voorkeur zoek.</li>
    </ul>
    <p>Herken je er één, dan weet je meteen waarom die extra test niets oploste: tests meten opties, niet waarden, angsten of stemmen van anderen.</p>

    <p class="section-eyebrow">Kiezen</p>
    <h2>Kiezen zonder garantie</h2>
    <p>De perfecte keuze bestaat niet, en wachten tot hij zich aandient, is de langste omweg. Wat wel kan: de volgorde omdraaien. Eerst helder krijgen wat voor jou het zwaarst weegt, en pas daarna de opties langs die maat leggen. Vaak valt de keuze dan verrassend snel, niet omdat de opties veranderden, maar omdat jij een meetlat hebt.</p>
    <p>En verklein de inzet waar het kan. Veel loopbaankeuzes zijn te testen voordat je springt: een dag meelopen, een project in de nieuwe richting, een gesprek met iemand die de stap al maakte. Ook goed om te weten: blijven is een volwaardige uitkomst, mits het een keuze wordt in plaats van een uitstel. Wie na eerlijk wegen besluit te blijven, ervaart dezelfde baan anders dan wie er per ongeluk bleef hangen.</p>

  </div>
</article>

<section class="faq-sectie" aria-label="Veelgestelde vragen">
  <div class="article-container">
    <p class="section-eyebrow" style="margin-top:0">Veelgestelde vragen</p>
    <h2>Wat mensen hierover vragen</h2>
    <details>
      <summary>Hoe weet ik of ik er klaar voor ben om te kiezen?</summary>
      <p>Wachten op zekerheid is meestal wachten op iets dat niet komt; bij echte loopbaankeuzes hoort twijfel. Een betere toets: weet je wat voor jou het zwaarst weegt? Zolang dat vaag is, voelt geen enkele optie goed. Zodra je waarden helder zijn, hoeft de twijfel niet weg te zijn om toch te kunnen kiezen.</p>
    </details>
    <details>
      <summary>Wat als ik de verkeerde keuze maak?</summary>
      <p>Die angst is begrijpelijk, maar loopbaankeuzes zijn zelden zo definitief als ze voelen. Vrijwel elke stap is bij te sturen, en van een keuze die anders uitpakt, leer je meer over wat je wilt dan van jaren twijfelen. De echte vraag is wat niet kiezen je kost: die rekening loopt stilletjes op, elke maand opnieuw.</p>
    </details>
    <details>
      <summary>Helpt een loopbaantest?</summary>
      <p>Als startpunt kan een test woorden geven aan wat je al vaag voelt, en dat is nuttig. Maar een test kiest niet voor je, en bij aanhoudende twijfel zit het probleem zelden in een gebrek aan testuitslagen. Botsen er waarden of speelt er angst voor spijt, dan helpt onderzoeken meer dan meten. Daar kijk je met een coach samen naar.</p>
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
      <a class="anker-kaart" href="/inzichten/belemmerende-overtuigingen-werk">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>De overtuiging die je loopbaan stuurt</h3>
        <p>Overtuigingen die je meekreeg sturen je keuzes, tot je ze herkent.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/richting-vinden-in-je-loopbaan">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Richting vinden in je loopbaan</h3>
        <p>Waarom je niet bij de vacaturesite moet beginnen, maar bij wat je energie geeft en wat je drijft.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Blijf je hangen in het wikken en wegen?</h2>
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
