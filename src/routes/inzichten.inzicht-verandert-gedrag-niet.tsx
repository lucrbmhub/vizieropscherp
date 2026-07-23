import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/inzichten/inzicht-verandert-gedrag-niet")({
  head: () => ({
    meta: [
      { title: "Waarom inzicht alleen gedrag niet verandert | Vizier op Scherp" },
      { name: "description", content: "Na de training is iedereen enthousiast, drie maanden later is alles bij het oude. Waarom inzicht alleen niet genoeg is, en wat wel beklijft." },
      { property: "og:title", content: "Waarom inzicht alleen gedrag niet verandert, en wat dat betekent voor uw ontwikkelaanpak" },
      { property: "og:description", content: "Na de training is iedereen enthousiast, drie maanden later is alles bij het oude. Waarom inzicht alleen niet genoeg is, en wat wel beklijft." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/inzicht-verandert-gedrag-niet` },
      { property: "og:image", content: `${SITE_URL}/assets/social-share.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/inzicht-verandert-gedrag-niet` }],
    scripts: [{ type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Waarom inzicht alleen gedrag niet verandert, en wat dat betekent voor uw ontwikkelaanpak",
  "description": "Na de training is iedereen enthousiast, drie maanden later is alles bij het oude. Waarom inzicht alleen niet genoeg is, en wat wel beklijft.",
  "inLanguage": "nl",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/inzicht-verandert-gedrag-niet"}
}` }, { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is dan het alternatief voor training?",
      "acceptedAnswer": {"@type": "Answer", "text": "Geen alternatief, maar een aanvulling. Training blijft geschikt voor kennis en gedeelde taal in een team. Voor gedragsverandering is een individuele laag nodig: gesprekken of een coachtraject waarin een medewerker onderzoekt wat hem of haar persoonlijk tegenhoudt, en nieuw gedrag oefent in de eigen praktijk. De combinatie werkt; elk van de twee alleen blijft halverwege steken."}
    },
    {
      "@type": "Question",
      "name": "Hoe meet u het effect van zo’n individueel traject?",
      "acceptedAnswer": {"@type": "Answer", "text": "Niet met een tevredenheidsscore direct na afloop, maar met wat u na enkele maanden ziet: voert de medewerker de gesprekken die eerder werden vermeden, is de energie anders, zijn de terugkerende thema’s uit functioneringsgesprekken verdwenen. Daarnaast ontvangt u procesinformatie over het traject zelf. De inhoud blijft vertrouwelijk; het resultaat is op de werkvloer zichtbaar."}
    },
    {
      "@type": "Question",
      "name": "Voor welke medewerkers is dit geschikt?",
      "acceptedAnswer": {"@type": "Answer", "text": "Voor medewerkers bij wie herhaling zichtbaar is: dezelfde thema’s in opeenvolgende gesprekken, inzicht dat niet tot verandering leidt, of talent dat zichzelf structureel in de weg zit. Het is nadrukkelijk geen laatste redmiddel voor dossiers; juist bij gewaardeerde medewerkers die vastlopen, levert een traject het meest op, voor de persoon en voor de organisatie."}
    }
  ]
}` }, { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Waarom inzicht alleen gedrag niet verandert, en wat dat betekent voor uw ontwikkelaanpak","item":"${SITE_URL}/inzichten/inzicht-verandert-gedrag-niet"}]}` }],
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
    <p class="eyebrow">Voor werkgevers & HR</p>
    <h1>Waarom inzicht alleen gedrag niet verandert, en wat dat betekent voor uw ontwikkelaanpak<span class="slotpunt">.</span></h1>
    <p class="lead">De training was goed, de evaluaties waren positief, de voornemens concreet. Drie maanden later is alles bij het oude.</p>
    <p class="meta">6 min lezen · Patronen herkennen en veranderen</p>
  </div>
</header>

<article class="article">
  <div class="article-container">

    <p class="intro">Elke HR-professional kent het patroon. Een team volgt een training over feedback, timemanagement of samenwerking. De dag zelf is waardevol: herkenning, energie, goede voornemens. En dan neemt de waan van de dag het over, en zakt het geleerde weg tot er van de investering weinig meer zichtbaar is. De gebruikelijke conclusie is dat de training niet goed genoeg was, of dat er een opfrisdag nodig is. Meestal klopt geen van beide. Het probleem zit niet in de training, maar in wat een training per definitie niet kan.</p>

    <p class="section-eyebrow">De ontbrekende schakel</p>
    <h2>Wat inzicht mist</h2>
    <p>Een goede training levert inzicht: kennis over wat er anders kan en waarom. Maar gedrag op de werkvloer wordt niet primair gestuurd door kennis. Het hangt vast aan persoonlijke patronen die per medewerker verschillen. De één pakt na de feedbacktraining geen ruimte omdat hij geleerd heeft zich niet op de voorgrond te plaatsen. De ander blijft alles zelf doen omdat delegeren voelt als grip verliezen. Een derde vermijdt het lastige gesprek omdat conflict voor haar altijd verliezen heeft betekend.</p>
    <p>Drie mensen, dezelfde training, drie totaal verschillende redenen waarom het geleerde niet landt. Een groepstraining kan die redenen niet raken; daarvoor is hij te algemeen en de setting te openbaar. Niemand benoemt in een zaal met collega’s wat hem werkelijk tegenhoudt. Het gevolg is voorspelbaar: het inzicht is er, het oude gedrag blijft, en dat ligt aan niemand in die zaal.</p>

    <div class="open-kader">
      <p>Kennis vertelt wat er anders kan. Gedrag verandert pas als iemand ziet wat het oude gedrag in stand houdt.</p>
    </div>

    <p class="section-eyebrow">Wat wel werkt</p>
    <h2>De voorwaarden waaronder ontwikkeling beklijft</h2>
    <p>Uit onze praktijk, en die is hierin weinig verrassend, beklijft ontwikkeling onder vier voorwaarden:</p>
    <ul class="ruitlijst">
      <li><strong>Een individuele vertaalslag.</strong> Van "zo geef je feedback" naar "dit is wat mij persoonlijk tegenhoudt om het te doen". Die tweede zin is waar verandering begint.</li>
      <li><strong>Oefenen in de eigen praktijk.</strong> Niet in een rollenspel, maar in het echte overleg van komende dinsdag, met reflectie erna.</li>
      <li><strong>Opvolging over langere tijd.</strong> Gedrag verandert in weken en maanden, niet in een dag. Iemand die erbij blijft, maakt het verschil tussen een voornemen en een gewoonte.</li>
      <li><strong>Een gesprekspartner zonder belang.</strong> Het werkelijke obstakel benoemt een medewerker niet in de groep en zelden tegen een leidinggevende. Wel tegen iemand die niet meebeslist over zijn beoordeling.</li>
    </ul>

    <p class="section-eyebrow">In de praktijk</p>
    <h2>Wat dit betekent voor uw aanpak</h2>
    <p>De conclusie is niet dat trainingen zinloos zijn. Voor kennis en een gedeelde taal in een team blijven ze waardevol; ze leggen de basis. De conclusie is dat u de verwachting moet splitsen: kennis organiseert u collectief, gedragsverandering individueel. Wie van een training individuele gedragsverandering verwacht, vraagt het instrument iets dat het niet kan leveren, en betaalt vervolgens voor herhaling.</p>
    <p>Praktisch kan die individuele laag verschillende vormen krijgen. Een ronde proactieve loopbaangesprekken maakt zichtbaar wat er bij individuele medewerkers werkelijk speelt, juist de dingen die in een zaal onbenoemd blijven. Voor medewerkers bij wie meer speelt, is een individueel coachtraject de verdieping: daar wordt het persoonlijke patroon onderzocht dat het oude gedrag in stand houdt, en wordt nieuw gedrag in de eigen werkpraktijk opgebouwd. Organisaties die hier structureel mee willen werken, kiezen voor een doorlopende afspraak, zodat de drempel om iemand te verwijzen laag blijft. Maar de kern is onafhankelijk van de vorm: leg de individuele schakel naast uw collectieve aanbod, en de investering in dat aanbod gaat eindelijk renderen.</p>

  </div>
</article>

<section class="faq-sectie" aria-label="Veelgestelde vragen">
  <div class="article-container">
    <p class="section-eyebrow" style="margin-top:0">Veelgestelde vragen</p>
    <h2>Wat opdrachtgevers hierover vragen</h2>
    <details>
      <summary>Wat is dan het alternatief voor training?</summary>
      <p>Geen alternatief, maar een aanvulling. Training blijft geschikt voor kennis en gedeelde taal in een team. Voor gedragsverandering is een individuele laag nodig: gesprekken of een coachtraject waarin een medewerker onderzoekt wat hem of haar persoonlijk tegenhoudt, en nieuw gedrag oefent in de eigen praktijk. De combinatie werkt; elk van de twee alleen blijft halverwege steken.</p>
    </details>
    <details>
      <summary>Hoe meet u het effect van zo’n individueel traject?</summary>
      <p>Niet met een tevredenheidsscore direct na afloop, maar met wat u na enkele maanden ziet: voert de medewerker de gesprekken die eerder werden vermeden, is de energie anders, zijn de terugkerende thema’s uit functioneringsgesprekken verdwenen. Daarnaast ontvangt u procesinformatie over het traject zelf. De inhoud blijft vertrouwelijk; het resultaat is op de werkvloer zichtbaar.</p>
    </details>
    <details>
      <summary>Voor welke medewerkers is dit geschikt?</summary>
      <p>Voor medewerkers bij wie herhaling zichtbaar is: dezelfde thema’s in opeenvolgende gesprekken, inzicht dat niet tot verandering leidt, of talent dat zichzelf structureel in de weg zit. Het is nadrukkelijk geen laatste redmiddel voor dossiers; juist bij gewaardeerde medewerkers die vastlopen, levert een traject het meest op, voor de persoon en voor de organisatie.</p>
    </details>
  </div>
</section>

<section class="verder" aria-label="Verder lezen">
  <div class="container">
    <p class="section-eyebrow" style="margin-top:0">Verder lezen</p>
    <h2>Ook interessant voor u</h2>
    <div class="kaarten">
      <a class="anker-kaart" href="/inzichten/medewerker-zit-vast">
        <span class="kaartlabel">Voor werkgevers & HR</span>
        <h3>Wanneer een loopbaangesprek niet genoeg is</h3>
        <p>Vier signalen dat er bij een medewerker meer speelt dan de functie, en wanneer doorverwijzen verstandig is.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/weten-maar-niet-doen">
        <span class="kaartlabel">Om te delen met uw medewerker</span>
        <h3>Je weet wat je zou moeten doen</h3>
        <p>Over de kloof tussen inzicht en gedrag, geschreven voor medewerkers. Een artikel om door te sturen.</p>
        <span class="lees">Lees verder →</span>
      </a>
      <a class="anker-kaart" href="/inzichten/energie-en-motivatie-in-werk">
        <span class="kaartlabel">Om te delen met uw medewerker</span>
        <h3>Het verschil tussen moe zijn en leeglopen</h3>
        <p>Herkenbaar voor medewerkers bij wie de energie wegzakt. Een artikel om door te sturen.</p>
        <span class="lees">Lees verder →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-sectie" aria-label="Kennismaken">
  <div class="container">
    <div class="facet-buiten">
      <div class="facet-binnen">
        <h2>Eens doorpraten over wat bij uw mensen blijft liggen?</h2>
        <p>In een gesprek van twintig minuten denken we vrijblijvend met u mee over de individuele laag naast uw bestaande ontwikkelaanbod.</p>
        <p class="werkgever">Veel opdrachtgevers beginnen met een ronde proactieve loopbaangesprekken; losse trajecten en een doorlopende jaarafspraak zijn daarna een logisch vervolg.</p>
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
