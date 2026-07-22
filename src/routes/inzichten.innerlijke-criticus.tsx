import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/innerlijke-criticus")({
  head: () => ({
    meta: [
      { title: "Het stemmetje dat zegt dat het nooit genoeg is | Vizier op Scherp" },
      { name: "description", content: "Die strenge stem die zegt dat het beter moet? Die verdwijnt niet door harder te werken. Waar hij vandaan komt en hoe je er anders mee omgaat." },
      { property: "og:title", content: "Het kritische stemmetje dat zegt dat het nooit genoeg is" },
      { property: "og:description", content: "Die strenge stem die zegt dat het beter moet? Die verdwijnt niet door harder te werken. Waar hij vandaan komt en hoe je er anders mee omgaat." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/innerlijke-criticus` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/innerlijke-criticus` }],
    scripts: [{ type: "application/ld+json", children: `{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Het kritische stemmetje dat zegt dat het nooit genoeg is","description":"Die strenge stem die zegt dat het beter moet? Die verdwijnt niet door harder te werken. Waar hij vandaan komt en hoe je er anders mee omgaat.","inLanguage":"nl","datePublished":"2026-07-18","dateModified":"2026-07-18","author":{"@type":"Organization","name":"Vizier op Scherp","url":"${SITE_URL}"},"publisher":{"@type":"Organization","name":"Vizier op Scherp","url":"${SITE_URL}"},"mainEntityOfPage":{"@type":"WebPage","@id":"${SITE_URL}/inzichten/innerlijke-criticus"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Het kritische stemmetje dat zegt dat het nooit genoeg is","item":"${SITE_URL}/inzichten/innerlijke-criticus"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is streng voor jezelf zijn niet juist goed?","acceptedAnswer":{"@type":"Answer","text":"Een gezonde lat is waardevol: die hoort bij vakmanschap. Het verschil zit in de toon en de rekening. Een gezonde lat zegt wat beter kan en is klaar. De innerlijke criticus rekent af, telt successen niet mee en verbindt je waarde als mens aan je prestatie. Dat tweede maakt werk zwaarder zonder het beter te maken."}},{"@type":"Question","name":"Gaat die stem ooit helemaal weg?","acceptedAnswer":{"@type":"Answer","text":"Waarschijnlijk niet, en dat hoeft ook niet. Het doel is niet stilte, maar een andere verhouding: de stem horen, herkennen en zelf bepalen wat je ermee doet. De meeste mensen merken dat de stem zachter en minder frequent wordt zodra ze er niet meer automatisch naar handelen. Hij verliest zijn macht, niet per se zijn stem."}},{"@type":"Question","name":"Wanneer is professionele hulp passender dan coaching?","acceptedAnswer":{"@type":"Answer","text":"Als de strengheid samengaat met aanhoudende somberheid, uitputting of angst die ook buiten je werk doorloopt, bespreek dat dan eerst met je huisarts. Coaching werkt aan je verhouding tot werk en aan patronen daarin; bij klachten die je hele leven raken, verdien je zorg die daarbij past. Die twee kunnen elkaar daarna prima aanvullen."}}]}]}` }],
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
    <h1>Het kritische stemmetje dat zegt dat het nooit genoeg is<span class="slotpunt">.</span></h1>
    <p class="lead">Je haalt een mooi resultaat binnen en nog voor iemand iets heeft gezegd, hoor je het al: had beter gekund.</p>
    <p class="meta">5 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">Bijna iedereen kent een strenge stem van binnen. Bij sommige mensen fluistert hij af en toe, bij anderen praat hij de hele werkdag mee. Hij wijst op de fout in een verder goede presentatie, rekent complimenten niet mee en schuift de lat net iets hoger zodra je hem raakt. Het vervelende is: die stem drijft je én sloopt je, tegelijk.</p>

    <p class="section-eyebrow">Herkennen</p>
    <h2>Hoe die stem zich laat horen</h2>
    <p>De innerlijke criticus is meestal niet luid. Hij klinkt redelijk, als een collega die "gewoon eerlijk" is. Daarom valt hij zo weinig op, terwijl hij wel degelijk je werkdag kleurt. Een paar manieren waarop je hem herkent:</p>
    <ul class="ruitlijst">
      <li><strong>Complimenten glijden van je af.</strong> Positieve feedback voelt overdreven of toevallig, terwijl één kritische opmerking dagen blijft hangen.</li>
      <li><strong>Rust moet verdiend worden.</strong> Pas na overwerken of een vol afgevinkte lijst mag je even niets, en zelfs dan knaagt het.</li>
      <li><strong>Fouten spelen zich terug.</strong> Dat ene ongelukkige antwoord in een overleg speel je die avond nog drie keer af.</li>
      <li><strong>De lat schuift mee.</strong> Elk behaald doel wordt meteen het nieuwe minimum. Aankomen bestaat niet.</li>
    </ul>

    <p class="section-eyebrow">Functie</p>
    <h2>Waar hij ooit voor diende</h2>
    <p>De verleiding is groot om die stem als vijand te zien. Maar wie eerlijk terugkijkt, ziet meestal iets anders: de strengheid heeft je gebracht waar je nu bent. Ergens onderweg heb je geleerd dat scherp zijn op jezelf loont. Het leverde resultaten op, waardering, misschien een carrière. De stem is geen defect; hij is een strategie die lang heeft gewerkt.</p>
    <p>Dat verklaart ook waarom hij zo hardnekkig is. Een deel van jou is er oprecht van overtuigd dat het zonder die strengheid misgaat: dat je verslapt, door de mand valt, dingen laat versloffen. Zolang die overtuiging onaangetast blijft, voelt milder worden als een risico in plaats van een opluchting.</p>

    <div class="open-kader">
      <p>De stem die zegt dat het nooit genoeg is, heeft je ver gebracht. Dat is precies waarom hij zo moeilijk te negeren is.</p>
    </div>

    <p class="section-eyebrow">Oefenen</p>
    <h2>Anders leren omgaan met de stem</h2>
    <p>Het doel is niet de stem uitzetten. Dat lukt niet, en wie het probeert, merkt dat hij juist harder gaat praten. Wat wel werkt, is de verhouding veranderen: de stem horen zonder hem automatisch te gehoorzamen.</p>
    <p>Dat begint met herkennen. Alleen al opmerken "daar is hij weer" schept afstand tussen jou en het oordeel. Daarna kun je toetsen: klopt dit, of is dit de standaardreactie? Zou ik dit tegen een collega zeggen die hetzelfde had gedaan? Vrijwel niemand hanteert voor anderen de maat die de criticus voor jou hanteert, en dat verschil is leerzaam.</p>
    <p>Uiteindelijk gaat het om een mildere maat vinden die wél realistisch is. Niet de lat afschaffen, maar hem laten passen bij wat het werk vraagt in plaats van bij wat de angst eist. Mensen die dat leren, merken meestal dat de kwaliteit van hun werk gelijk blijft en dat werken lichter wordt. De strengheid bleek niet de motor te zijn; die was jij zelf al die tijd.</p>

    <div class="noot">
      <strong>Zorgvuldig:</strong> merk je dat vermoeidheid, somberheid of spanning aanhouden, ook buiten je werk? Neem dat serieus en bespreek het met je huisarts. Coaching is waardevol, maar geen vervanging van zorg als die nodig is.
    </div>

  </div>
</article>

<section class="faq-sectie" aria-label="Veelgestelde vragen">
  <div class="article-container">
    <p class="section-eyebrow" style="margin-top:0">Veelgestelde vragen</p>
    <h2>Wat mensen hierover vragen</h2>
    <details>
      <summary>Is streng voor jezelf zijn niet juist goed?</summary>
      <p>Een gezonde lat is waardevol: die hoort bij vakmanschap. Het verschil zit in de toon en de rekening. Een gezonde lat zegt wat beter kan en is klaar. De innerlijke criticus rekent af, telt successen niet mee en verbindt je waarde als mens aan je prestatie. Dat tweede maakt werk zwaarder zonder het beter te maken.</p>
    </details>
    <details>
      <summary>Gaat die stem ooit helemaal weg?</summary>
      <p>Waarschijnlijk niet, en dat hoeft ook niet. Het doel is niet stilte, maar een andere verhouding: de stem horen, herkennen en zelf bepalen wat je ermee doet. De meeste mensen merken dat de stem zachter en minder frequent wordt zodra ze er niet meer automatisch naar handelen. Hij verliest zijn macht, niet per se zijn stem.</p>
    </details>
    <details>
      <summary>Wanneer is professionele hulp passender dan coaching?</summary>
      <p>Als de strengheid samengaat met aanhoudende somberheid, uitputting of angst die ook buiten je werk doorloopt, bespreek dat dan eerst met je huisarts. Coaching werkt aan je verhouding tot werk en aan patronen daarin; bij klachten die je hele leven raken, verdien je zorg die daarbij past. Die twee kunnen elkaar daarna prima aanvullen.</p>
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
      <a class="anker-kaart" href="/inzichten/vastzitten-in-een-goede-baan">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Vastzitten in een goede baan: de gouden kooi</h3>
        <p>Goed salaris, prima voorwaarden, en toch elke week minder zin. Waarom een goede baan kan vastzetten.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/grenzen-stellen-op-werk">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Altijd degene op wie iedereen kan bouwen</h3>
        <p>Betrouwbaar zijn is een kracht, tot het een patroon wordt waarin je jezelf steeds overslaat.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Klinkt die stem je bekend in de oren?</h2>
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
