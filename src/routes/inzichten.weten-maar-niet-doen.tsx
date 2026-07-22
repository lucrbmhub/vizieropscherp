import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/weten-maar-niet-doen")({
  head: () => ({
    meta: [
      { title: "Je weet wat je moet doen. Waarom doe je het niet? | Vizier op Scherp" },
      { name: "description", content: "Je weet allang wat je wilt veranderen in je werk, maar je doet het niet. Wat er meestal onder die stilstand zit, en wat wel beweging geeft." },
      { property: "og:title", content: "Je weet wat je zou moeten doen. Waarom doe je het dan niet?" },
      { property: "og:description", content: "Je weet allang wat je wilt veranderen in je werk, maar je doet het niet. Wat er meestal onder die stilstand zit, en wat wel beweging geeft." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/weten-maar-niet-doen` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/weten-maar-niet-doen` }],
    scripts: [{ type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Je weet wat je zou moeten doen. Waarom doe je het dan niet?",
  "description": "Je weet allang wat je wilt veranderen in je werk, maar je doet het niet. Wat er meestal onder die stilstand zit, en wat wel beweging geeft.",
  "inLanguage": "nl",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/weten-maar-niet-doen"}
}` }, { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is dit gewoon uitstelgedrag?",
      "acceptedAnswer": {"@type": "Answer", "text": "Het lijkt erop, maar er is een verschil. Uitstelgedrag gaat meestal over taken die je niet leuk vindt. Dit gaat over een stap die je juist belangrijk vindt en die toch niet komt. Dan speelt er vrijwel altijd iets onder de oppervlakte: iets dat je beschermt of niet wilt verliezen. Dat vraagt om onderzoek, niet om een strakkere planning."}
    },
    {
      "@type": "Question",
      "name": "Waarom lukt het anderen wel?",
      "acceptedAnswer": {"@type": "Answer", "text": "Dat weet je niet zeker; je ziet bij anderen alleen de buitenkant. Maar belangrijker: wat iemand anders tegenhoudt of juist niet, zegt niets over jou. Ieder mens bewaakt iets anders. De vergelijking met anderen maakt de kloof vooral groter, terwijl de vraag wat er bij jou onder zit je verder brengt."}
    },
    {
      "@type": "Question",
      "name": "Wat als ik het al jaren uitstel?",
      "acceptedAnswer": {"@type": "Answer", "text": "Dan is er blijkbaar iets sterks dat je op je plek houdt, en dat is de moeite van het onderzoeken waard. Jaren uitstel betekent niet dat het te laat is; het betekent dat gewoon doen voor jou niet de goede route is. Met een coach kijk je eerst wat de stilstand beschermt, en dan pas welke stap erbij past."}
    }
  ]
}` }, { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Je weet wat je zou moeten doen. Waarom doe je het dan niet?","item":"${SITE_URL}/inzichten/weten-maar-niet-doen"}]}` }],
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
    <h1>Je weet wat je zou moeten doen. Waarom doe je het dan niet?</h1>
    <p class="lead">Het gesprek aangaan, die opleiding starten, eindelijk iets zeggen over je rol. Je weet het al maanden. En toch gebeurt het niet.</p>
    <p class="meta">5 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">Iedereen kent de kloof tussen weten en doen. Bij kleine dingen is hij onschuldig: de sportschool, de belastingaangifte. Maar bij je loopbaan kan die kloof jaren duren. Je weet precies welk gesprek je zou moeten voeren of welke stap je zou moeten zetten, en elke maand dat het niet gebeurt, wordt het zwaarder. Niet omdat je lui bent. Daar ligt het vrijwel nooit aan.</p>

    <p class="section-eyebrow">De kloof</p>
    <h2>Waarom "gewoon doen" niet werkt</h2>
    <p>Het advies dat je van je omgeving krijgt, is meestal een variant van hetzelfde: gewoon doen. Gewoon dat gesprek plannen, gewoon solliciteren, gewoon beginnen. Goedbedoeld, maar het mist het punt. Als het een kwestie van discipline was, had je het allang gedaan. Je regelt tenslotte de rest van je leven ook: deadlines, huishouden, afspraken. Dit ene ding blijft liggen, en juist dat is informatie.</p>
    <p>Stilstand op een punt dat belangrijk voor je is, is zelden een gebrek aan wilskracht. Meestal bewaakt de stilstand iets. Een paar voorbeelden van wat er onder kan zitten:</p>
    <ul class="ruitlijst">
      <li><strong>Je beschermt iets.</strong> Je zekerheid, je opgebouwde positie, of het beeld dat collega's van je hebben. De stap zetten betekent dat op het spel zetten.</li>
      <li><strong>Je wilt iets niet verliezen.</strong> Het team waar je op gesteld bent, de routine die houvast geeft, de versie van jezelf die alles onder controle heeft.</li>
      <li><strong>Je wilt ergens niet aan.</strong> Het gesprek dat pijnlijk kan worden, de kans op een nee, of de conclusie die je misschien moet trekken als je echt gaat kijken.</li>
    </ul>
    <p>Zolang dat onbenoemd blijft, wint de stilstand het van elk voornemen. Niet omdat je zwak bent, maar omdat een deel van jou een goede reden heeft om niet in beweging te komen. Dat deel verdient eerst aandacht, geen strengere planning.</p>

    <div class="open-kader">
      <p>Stilstand is zelden een gebrek aan wilskracht. Meestal bewaakt hij iets dat je nog niet hebt uitgesproken.</p>
    </div>

    <p class="section-eyebrow">Beweging</p>
    <h2>Wat wel beweging geeft</h2>
    <p>De uitweg begint niet met harder duwen, maar met een andere vraag. Niet: waarom doe ik het niet. Wel: wat zou ik kwijtraken als ik het wel deed? Die vraag klinkt vreemd, want de stap is toch juist wat je wilt. Maar wie hem eerlijk beantwoordt, vindt bijna altijd iets. En zodra dat op tafel ligt, kun je er iets mee: soms blijkt de angst kleiner dan gedacht, soms blijkt hij terecht en vraagt de stap om een andere vorm.</p>
    <p>Daarna helpt klein beginnen. Niet meteen de ontslagbrief of het grote gesprek, maar een verkennende koffie, een eerste zin tegen je leidinggevende, een middag waarin je op papier zet wat je eigenlijk wilt. Beweging voedt beweging.</p>
    <p>En houd de uitkomst open. Soms is de conclusie na al dat wikken helemaal niet dat je moet vertrekken, maar dat je blijft en je werk anders inricht: een ander takenpakket, een uitgesproken wens, een grens die je eerder niet stelde. Sterker worden waar je zit is een even goede afloop als een nieuwe stap.</p>

    <p class="section-eyebrow">Samen kijken</p>
    <h2>Waar coaching het verschil maakt</h2>
    <p>Dit soort knopen ontwar je lastig alleen, juist omdat je er zelf middenin staat. Een coach stelt de vragen waar je in je eentje omheen loopt, helpt benoemen wat de stilstand beschermt en houdt je erbij als het oefenen spannend wordt. Je hoeft vooraf niet te weten wat je wilt; dat je al zo lang weet wat er zou moeten gebeuren, is meer dan genoeg om mee te beginnen.</p>

  </div>
</article>

<section class="faq-sectie" aria-label="Veelgestelde vragen">
  <div class="article-container">
    <p class="section-eyebrow" style="margin-top:0">Veelgestelde vragen</p>
    <h2>Wat mensen hierover vragen</h2>
    <details>
      <summary>Is dit gewoon uitstelgedrag?</summary>
      <p>Het lijkt erop, maar er is een verschil. Uitstelgedrag gaat meestal over taken die je niet leuk vindt. Dit gaat over een stap die je juist belangrijk vindt en die toch niet komt. Dan speelt er vrijwel altijd iets onder de oppervlakte: iets dat je beschermt of niet wilt verliezen. Dat vraagt om onderzoek, niet om een strakkere planning.</p>
    </details>
    <details>
      <summary>Waarom lukt het anderen wel?</summary>
      <p>Dat weet je niet zeker; je ziet bij anderen alleen de buitenkant. Maar belangrijker: wat iemand anders tegenhoudt of juist niet, zegt niets over jou. Ieder mens bewaakt iets anders. De vergelijking met anderen maakt de kloof vooral groter, terwijl de vraag wat er bij jou onder zit je verder brengt.</p>
    </details>
    <details>
      <summary>Wat als ik het al jaren uitstel?</summary>
      <p>Dan is er blijkbaar iets sterks dat je op je plek houdt, en dat is de moeite van het onderzoeken waard. Jaren uitstel betekent niet dat het te laat is; het betekent dat gewoon doen voor jou niet de goede route is. Met een coach kijk je eerst wat de stilstand beschermt, en dan pas welke stap erbij past.</p>
    </details>
  </div>
</section>

<section class="verder" aria-label="Verder lezen">
  <div class="container">
    <p class="section-eyebrow" style="margin-top:0">Verder lezen</p>
    <h2>Ook interessant voor jou</h2>
    <div class="kaarten">
      <a class="anker-kaart" href="/inzichten/hetzelfde-gevoel-een-andere-baan">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Hetzelfde gevoel, een andere baan</h3>
        <p>Weer dezelfde onvrede in een nieuwe baan? Vaak verhuist het patroon mee. Hoe je herkent wat er echt speelt.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/niet-kunnen-kiezen-loopbaan">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>Niet kunnen kiezen in je loopbaan</h3>
        <p>Nog een test, nog een lijstje, en je weet het nog steeds niet. Waarom keuzestress zelden een informatieprobleem is.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/belemmerende-overtuigingen-werk">
        <span class="kaartlabel">Voor medewerkers</span>
        <h3>De overtuiging die je loopbaan stuurt</h3>
        <p>Overtuigingen die je meekreeg sturen je keuzes, tot je ze herkent.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Weet je het al langer, maar kom je niet in beweging?</h2>
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
