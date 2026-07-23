import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/grenzen-stellen-op-werk")({
  head: () => ({
    meta: [
      { title: "Altijd degene op wie iedereen kan bouwen | Vizier op Scherp" },
      { name: "description", content: "Betrouwbaar zijn is een kracht, tot het een patroon wordt waarin je jezelf steeds overslaat. Hoe dat werkt en waar je kunt beginnen." },
      { property: "og:title", content: "Altijd degene op wie iedereen kan bouwen: waar dat patroon je brengt" },
      { property: "og:description", content: "Betrouwbaar zijn is een kracht, tot het een patroon wordt waarin je jezelf steeds overslaat. Hoe dat werkt en waar je kunt beginnen." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/grenzen-stellen-op-werk` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/grenzen-stellen-op-werk` }],
    scripts: [{ type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Altijd degene op wie iedereen kan bouwen: waar dat patroon je brengt",
  "description": "Betrouwbaar zijn is een kracht, tot het een patroon wordt waarin je jezelf steeds overslaat. Hoe dat werkt en waar je kunt beginnen.",
  "inLanguage": "nl",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/grenzen-stellen-op-werk"}
}` }, { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is grenzen stellen niet gewoon een vaardigheid die je kunt leren?",
      "acceptedAnswer": {"@type": "Answer", "text": "De techniek wel, en die ken je waarschijnlijk al: je zegt moeiteloos nee tegen dingen die er niet toe doen. Dat het juist op belangrijke momenten niet lukt, komt doordat het ja daar iets beschermt: je plek, je beeld van jezelf, de relatie. Zolang dat buiten beeld blijft, verliest elke aangeleerde techniek het van de reflex."}
    },
    {
      "@type": "Question",
      "name": "Waarom voelt nee zeggen zo vervelend, zelfs bij redelijke verzoeken?",
      "acceptedAnswer": {"@type": "Answer", "text": "Omdat het bij dit patroon niet als een praktische afweging voelt maar als een oordeel over jezelf. Ergens is helpen verbonden geraakt met erbij horen of van waarde zijn. Een nee voelt dan als tekortschieten, hoe redelijk het ook is. Dat is geen zwakte; het is een aangeleerd verband, en wat aangeleerd is, kan ook anders."}
    },
    {
      "@type": "Question",
      "name": "Wat als mijn team echt op mij leunt en het misgaat zonder mij?",
      "acceptedAnswer": {"@type": "Answer", "text": "Dat kan tijdelijk kloppen, en het is tegelijk een deel van het patroon: het is zo gegroeid omdat jij alles opving. Structureel onmisbaar zijn is geen compliment maar een risico, ook voor je team. Werk dat afhangt van één persoon die nooit nee zegt, is kwetsbaar. Verdelen is uiteindelijk in ieders belang, inclusief dat van jou."}
    }
  ]
}` }, { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Altijd degene op wie iedereen kan bouwen: waar dat patroon je brengt","item":"${SITE_URL}/inzichten/grenzen-stellen-op-werk"}]}` }],
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
    <p class="eyebrow">Sterker in je huidige rol</p>
    <h1>Altijd degene op wie iedereen kan bouwen: waar dat patroon je brengt<span class="slotpunt">.</span></h1>
    <p class="lead">Als er iets geregeld moet worden, kijken ze naar jou. Meestal terecht. En meestal zeg je ja.</p>
    <p class="meta">5 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">In elk team is er iemand op wie je kunt bouwen. Degene die het oppakt als het spannend wordt, die nooit een bal laat vallen, die je altijd even iets kunt vragen. Het is een prachtige eigenschap, en waarschijnlijk heeft hij je veel gebracht: vertrouwen, waardering, verantwoordelijkheid. Maar er zit een kantelpunt in. Ergens wordt de kwaliteit een rol, en de rol een patroon waarin jij structureel als laatste aan de beurt komt.</p>

    <p class="section-eyebrow">Het patroon</p>
    <h2>De kracht en de prijs</h2>
    <p>Het patroon sluipt erin, juist omdat elk los ja redelijk is. Die ene klus erbij, die collega even helpen, die vraag tussendoor: allemaal te overzien. Pas opgeteld zie je wat er gebeurt. Een paar signalen dat de balans is doorgeslagen:</p>
    <ul class="ruitlijst">
      <li><strong>Je agenda vult zich met andermans prioriteiten.</strong> Aan het eind van de week is jouw eigen werk het enige dat is blijven liggen.</li>
      <li><strong>"Even iets vragen" landt standaard bij jou.</strong> Niet omdat het jouw taak is, maar omdat iedereen weet dat jij het regelt.</li>
      <li><strong>Je eigen ontwikkeling schuift al maanden door.</strong> Die opleiding, dat project waar je van groeit: straks, als het rustiger is. Het wordt nooit rustiger.</li>
      <li><strong>Nee zeggen voelt niet als een keuze maar als tekortschieten.</strong> Alleen al de gedachte geeft een knoop in je maag.</li>
    </ul>
    <p>En ergens, zachtjes, groeit er iets van wrok. Op collega's die wel gewoon nee zeggen, op je leidinggevende die het niet ziet, op jezelf. Dat is misschien wel het duurste onderdeel van het patroon: het tast precies het plezier aan waarmee je ooit zo gul begon.</p>

    <div class="open-kader">
      <p>Nee zeggen voelt niet als een keuze maar als tekortschieten. Daar begint het patroon, niet bij je agenda.</p>
    </div>

    <p class="section-eyebrow">Onder de oppervlakte</p>
    <h2>Waarom een cursus assertiviteit niet genoeg is</h2>
    <p>Het standaardadvies bij dit patroon is een vaardigheidstraining: leren nee zeggen, beter prioriteren. Nuttig, maar het werkt zelden blijvend, en de reden is eenvoudig: je weet allang hoe je nee moet zeggen. Je doet het bij dingen die er niet toe doen moeiteloos. Het lukt alleen niet op de plekken waar het ertoe doet, en dat komt omdat het ja iets beschermt.</p>
    <p>Wat precies, verschilt per persoon. Voor de één is het de plek in het team: zolang je onmisbaar bent, hoor je erbij. Voor de ander de angst om teleur te stellen, of de overtuiging dat je waarde samenvalt met wat je voor anderen doet. Zolang dat onaangeraakt blijft, wint het bij elk verzoek van elke aangeleerde techniek. Vandaar dat de eerste stap niet oefenen is, maar begrijpen: wat gebeurt er bij mij in die halve seconde tussen de vraag en mijn ja?</p>

    <p class="section-eyebrow">Beginnen</p>
    <h2>Waar je kunt beginnen</h2>
    <p>Klein en concreet. Kies één terugkerend verzoek en bouw een pauze in: "ik kom er vanmiddag op terug." Geen nee, alleen ruimte. In die ruimte kun je opmerken wat er gebeurt: de aandrang om meteen te redden, de angst voor de reactie. Dat opmerken is het echte werk; het maakt van een reflex weer een keuze.</p>
    <p>En voer het gesprek met je leidinggevende, niet als klacht maar als agendapunt: dit doe ik allemaal, dit blijft daardoor liggen, wat spreken we af? Vaak heeft die geen idee, juist omdat jij het altijd geruisloos oplost. De uitkomst van dit alles hoeft geen andere baan te zijn. Meestal is het een andere rol in dezelfde baan: nog steeds degene op wie je kunt bouwen, maar nu inclusief jezelf.</p>

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
      <summary>Is grenzen stellen niet gewoon een vaardigheid die je kunt leren?</summary>
      <p>De techniek wel, en die ken je waarschijnlijk al: je zegt moeiteloos nee tegen dingen die er niet toe doen. Dat het juist op belangrijke momenten niet lukt, komt doordat het ja daar iets beschermt: je plek, je beeld van jezelf, de relatie. Zolang dat buiten beeld blijft, verliest elke aangeleerde techniek het van de reflex.</p>
    </details>
    <details>
      <summary>Waarom voelt nee zeggen zo vervelend, zelfs bij redelijke verzoeken?</summary>
      <p>Omdat het bij dit patroon niet als een praktische afweging voelt maar als een oordeel over jezelf. Ergens is helpen verbonden geraakt met erbij horen of van waarde zijn. Een nee voelt dan als tekortschieten, hoe redelijk het ook is. Dat is geen zwakte; het is een aangeleerd verband, en wat aangeleerd is, kan ook anders.</p>
    </details>
    <details>
      <summary>Wat als mijn team echt op mij leunt en het misgaat zonder mij?</summary>
      <p>Dat kan tijdelijk kloppen, en het is tegelijk een deel van het patroon: het is zo gegroeid omdat jij alles opving. Structureel onmisbaar zijn is geen compliment maar een risico, ook voor je team. Werk dat afhangt van één persoon die nooit nee zegt, is kwetsbaar. Verdelen is uiteindelijk in ieders belang, inclusief dat van jou.</p>
    </details>
  </div>
</section>

<section class="verder" aria-label="Verder lezen">
  <div class="container">
    <p class="section-eyebrow" style="margin-top:0">Verder lezen</p>
    <h2>Ook interessant voor jou</h2>
    <div class="kaarten">
      <a class="anker-kaart" href="/inzichten/energie-en-motivatie-in-werk">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Het verschil tussen moe zijn en leeglopen</h3>
        <p>Geen energie meer voor je werk? Wat je eraan kunt doen voordat het groter wordt.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/innerlijke-criticus">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Het kritische stemmetje dat zegt dat het nooit genoeg is</h3>
        <p>Waar die strenge stem vandaan komt en hoe je er anders mee leert omgaan.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/weten-maar-niet-doen">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Je weet wat je zou moeten doen</h3>
        <p>Waarom doe je het dan niet? Wat er onder stilstand zit, en wat wel beweging geeft.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Altijd degene die het oplost, en zelden aan de beurt?</h2>
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
