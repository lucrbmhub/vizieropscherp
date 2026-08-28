import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, articleSocialMeta } from "@/lib/site";

export const Route = createFileRoute("/inzichten/waardering-die-aankomt")({
  head: () => ({
    meta: [
      { title: "Waarom uw waardering niet altijd aankomt | Vizier op Scherp" },
      { name: "description", content: "Waardering uitspreken werkt, en toch glijdt een compliment soms van een medewerker af. Waarom lof afketst, en hoe u als werkgever erkenning geeft die wél blijft hangen." },
      { property: "og:title", content: "Waarom uw waardering niet altijd aankomt" },
      { property: "og:description", content: "Waardering uitspreken werkt, en toch glijdt een compliment soms van een medewerker af. Waarom lof afketst, en hoe u erkenning geeft die wél blijft hangen." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/inzichten/waardering-die-aankomt` },
      ...articleSocialMeta("waardering-die-aankomt", "Waarom uw waardering niet altijd aankomt"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten/waardering-die-aankomt` }],
    scripts: [
      { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Waarom uw waardering niet altijd aankomt",
  "description": "Waardering uitspreken werkt, en toch glijdt een compliment soms van een medewerker af. Waarom lof afketst, en hoe u als werkgever erkenning geeft die wél blijft hangen.",
  "inLanguage": "nl-NL",
  "datePublished": "2026-08-28",
  "dateModified": "2026-08-28",
  "image": "${SITE_URL}/assets/og/waardering-die-aankomt.png",
  "author": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "publisher": {"@type": "Organization", "name": "Vizier op Scherp", "url": "${SITE_URL}"},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${SITE_URL}/inzichten/waardering-die-aankomt"}
}` },
      { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is het niet kunnen aannemen van een compliment een teken van een probleem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meestal niet. Onderzoek laat zien dat lof wegwuiven een breed en normaal verschijnsel is, niet iets wat voorbehouden is aan mensen met een laag zelfbeeld. Het zegt iets over hoe wij ons zelfbeeld beschermen, niet over iemands functioneren."
      }
    },
    {
      "@type": "Question",
      "name": "Werkt een formeel waarderingsprogramma dan wel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een programma hebben is niet hetzelfde als effectief waarderen. Onderzoek koppelt vooral tijdige, specifieke en gemeende erkenning aan behoud en betrokkenheid, niet het bestaan van een systeem op zich. De kwaliteit van het moment weegt zwaarder dan de vorm."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe vaak moet ik als werkgever waardering uitspreken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Belangrijker dan een frequentie is consistentie. Waardering die regelmatig en gemeend terugkeert, doet meer dan een grote gelegenheid één keer per jaar. Het gaat om een gewoonte, niet om een gebeurtenis."
      }
    },
    {
      "@type": "Question",
      "name": "Wat als een medewerker echt niet lijkt te kunnen aannemen dat hij goed werk levert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dan zit het waarschijnlijk dieper dan een enkel gesprek kan oplossen. Een vertrouwelijk loopbaangesprek met een externe coach kan helpen om weer zicht te krijgen op iemands kwaliteiten en richting."
      }
    }
  ]
}` },
      { type: "application/ld+json", children: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"${SITE_URL}/inzichten"},{"@type":"ListItem","position":3,"name":"Waarom uw waardering niet altijd aankomt","item":"${SITE_URL}/inzichten/waardering-die-aankomt"}]}` },
    ],
  }),
  component: Page,
});

const ARTICLE_CSS = `:root{
    /* Kleurtokens (Stijlgids v2, enige plek waar hexes leven) */
    --petrol:#1F3D3B; --petrol-deep:#16302E;
    --paper:#FAF6EF; --linnen:#F5EFE3; --warm:#FBF1D7;
    --goud:#F2C879; --koraal:#E8714A; --koraal-deep:#C85A36;
    --tekst-op-koraal:#3A241A; --tekst-op-koraal-sub:#57352A;
    --tekst-op-goud:#4A3413; --tekst-op-goud-sub:#5A4420;
    --mint:#D8E5E2; --mint-dof:#BFD0CB;
    --body-licht:#4A5550; --body-warm:#5A5442;
    --gedempt:#7A7466; --gedempt-2:#9A9284;
    --goudlabel:#A8834B;
    --rand:#E4DCC8; --rand-2:#EDE5D4;
    --footer-meta:#8FA6A0;

    --maxw:1200px;
    --font-display:'Bricolage Grotesque',system-ui,sans-serif;
    --font-body:'Instrument Sans',system-ui,sans-serif;
  }
  h1,h2,h3{
    font-family:var(--font-display);
    font-weight:500;
    letter-spacing:-0.018em;
    line-height:1.1;
    text-wrap:balance;
    margin:0;
  }

  .container{max-width:var(--maxw);margin:0 auto;padding:0 32px}
  .section{padding:96px 0}
  .section--petrol{background:var(--petrol);color:var(--mint)}
  .section--linnen{background:var(--linnen)}
  .section--paper{background:var(--paper)}

  .eyebrow{
    display:inline-flex;align-items:center;gap:10px;
    border:1px solid var(--rand);border-radius:999px;
    padding:7px 16px 7px 14px;
    font-size:12.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;
    color:var(--koraal-deep);background:transparent;
  }
  .eyebrow::before{content:"";width:7px;height:7px;background:var(--koraal);transform:rotate(45deg);flex-shrink:0}
  .eyebrow--op-petrol{border-color:rgba(245,239,227,.22);color:var(--goud)}
  .eyebrow--op-petrol::before{background:var(--goud)}

  .label{
    font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
    color:var(--goudlabel);margin:0 0 10px;
  }
  .label--op-petrol{color:var(--goud)}

  .hero{position:relative;overflow:hidden;background:var(--petrol);color:var(--mint);padding:104px 0 96px}
  .hero .container{position:relative;z-index:2;max-width:920px}
  .hero h1{
    color:var(--linnen);
    font-size:clamp(42px,5vw,66px);
    line-height:1.06;letter-spacing:-0.02em;
    margin:22px 0 24px;
  }
  .hero .lead{
    font-size:19px;line-height:1.6;color:var(--mint);max-width:60ch;margin:0 0 22px;
  }
  .hero-meta{
    font-size:13.5px;letter-spacing:.02em;color:var(--mint-dof);
    display:flex;gap:14px;align-items:center;flex-wrap:wrap;
  }
  .hero-meta span{display:inline-flex;align-items:center;gap:10px}
  .hero-meta span::before{content:"";width:6px;height:6px;background:var(--goud);transform:rotate(45deg)}
  .terug{
    display:block;width:fit-content;margin:0 0 18px;
    font-size:13.5px;color:var(--mint-dof);transition:color .15s ease;
  }
  .terug:hover{color:var(--goud)}
  .hero-watermerk{
    position:absolute;right:-140px;top:50%;transform:translateY(-50%) rotate(45deg);
    width:460px;height:460px;border:2px solid rgba(245,239,227,.09);z-index:1;pointer-events:none;
  }
  .hero-watermerk::after{
    content:"";position:absolute;inset:70px;border:2px solid rgba(232,113,74,.16);
  }

  /* i-punt + gouden slotpunt */
  .idot{position:relative;display:inline-block}
  .idot::before{content:"";position:absolute;left:50%;top:0;width:.19em;height:.28em;background:var(--idot-bg,var(--petrol));transform:translateX(-50%)}
  .idot::after{content:"";position:absolute;left:50%;top:.06em;width:.17em;height:.17em;background:var(--koraal);transform:translateX(-50%) rotate(45deg)}
  .slotpunt{color:var(--goud)}

  .section h2{
    font-size:clamp(30px,3.4vw,42px);line-height:1.12;margin:18px 0 22px;color:var(--petrol);
  }
  .section--petrol h2{color:var(--linnen)}
  .lead-intro{font-size:17.5px;line-height:1.6;max-width:58ch;color:var(--body-licht)}
  .section--petrol .lead-intro,.section--petrol p{color:var(--mint)}
  .prose{max-width:64ch}
  .prose p{margin:0 0 1.15em}
  .prose p:last-child{margin-bottom:0}
  .section--petrol .prose{color:var(--mint)}

  .pull{
    display:grid;grid-template-columns:28px 1fr;gap:22px;align-items:start;
    margin:38px 0 8px;max-width:60ch;
  }
  .pull-rail{position:relative;height:100%;display:flex;flex-direction:column;align-items:center}
  .pull-rail .ruit{width:9px;height:9px;background:var(--koraal);transform:rotate(45deg)}
  .pull-rail .lijn{width:2px;flex:1;background:rgba(216,229,226,.4);margin:6px 0}
  .pull-rail .stip{width:7px;height:7px;border-radius:50%;background:var(--goud)}
  .pull-tekst{
    font-family:var(--font-display);font-weight:400;font-size:22px;line-height:1.45;
    color:var(--linnen);letter-spacing:-0.01em;
  }

  .featured-stat{
    margin:44px auto 0;max-width:760px;text-align:center;
    padding:40px 32px;border:2px solid rgba(245,239,227,.14);border-radius:16px;
  }
  .featured-stat .cijfer{
    font-family:var(--font-display);font-weight:500;font-size:clamp(40px,6vw,60px);
    color:var(--goud);line-height:1;letter-spacing:-0.02em;
  }
  .featured-stat .toelichting{
    margin:16px auto 0;max-width:46ch;color:var(--mint);font-size:16px;
  }

  .steps{list-style:none;margin:40px 0 0;padding:0;counter-reset:step;max-width:760px}
  .steps li{
    display:grid;grid-template-columns:64px 1fr;gap:26px;
    padding-bottom:30px;position:relative;
  }
  .steps li:not(:last-child)::before{
    content:"";position:absolute;left:19px;top:40px;bottom:0;width:2px;background:var(--rand);
  }
  .steps .node{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:10px}
  .steps .nummer{
    font-family:var(--font-display);font-weight:500;font-size:20px;color:var(--goudlabel);line-height:1;
  }
  .steps .ruit{width:12px;height:12px;background:var(--koraal);transform:rotate(45deg);margin-left:4px}
  .steps h3{font-size:21px;color:var(--petrol);margin:0 0 8px;line-height:1.2}
  .steps p{margin:0;color:var(--body-licht);font-size:15.5px}

  .open-kader{
    position:relative;border:2px solid var(--petrol);border-radius:16px;
    padding:34px 36px;margin:36px 0 0;max-width:720px;background:transparent;
  }
  .open-kader::before{
    content:"";position:absolute;top:-2px;right:34px;width:46px;height:6px;
    background:var(--linnen);
  }
  .open-kader::after{
    content:"";position:absolute;top:-7px;right:52px;width:14px;height:14px;border-radius:50%;background:var(--koraal);
  }
  .open-kader p{margin:0;color:var(--body-licht)}
  .open-kader .label{margin-bottom:8px}

  .faq{max-width:760px}
  .faq details{border-bottom:1px solid var(--rand);padding:6px 0}
  .faq summary{
    list-style:none;cursor:pointer;padding:20px 44px 20px 0;position:relative;
    font-family:var(--font-display);font-weight:500;font-size:20px;color:var(--petrol);line-height:1.25;
  }
  .faq summary::-webkit-details-marker{display:none}
  .faq summary::after{
    content:"";position:absolute;right:6px;top:26px;width:15px;height:15px;
    background:
      linear-gradient(var(--koraal),var(--koraal)) center/15px 2px no-repeat,
      linear-gradient(var(--koraal),var(--koraal)) center/2px 15px no-repeat;
    transition:transform .22s ease;
  }
  .faq details[open] summary::after{transform:rotate(45deg)}
  .faq .antwoord{padding:0 44px 22px 0;color:var(--body-licht);max-width:64ch}
  .faq .antwoord p{margin:0}

  .cta-wrap{max-width:880px;margin:0 auto}
  .facet-cta{
    background:var(--goud);
    clip-path:polygon(22px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 22px 100%, 0 calc(100% - 22px), 0 22px);
    padding:2px;
  }
  .facet-cta-inner{
    background:var(--warm);
    clip-path:polygon(22px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 22px 100%, 0 calc(100% - 22px), 0 22px);
    padding:52px 48px;text-align:center;
  }
  .facet-cta-inner h2{color:var(--tekst-op-goud);margin:14px 0 14px}
  .facet-cta-inner p{color:var(--tekst-op-goud-sub);max-width:52ch;margin:0 auto 26px}
  .facet-cta-inner .label{color:var(--tekst-op-goud-sub)}
  .btn{
    display:inline-block;background:var(--koraal);color:var(--tekst-op-koraal);
    font-weight:500;font-size:15px;padding:15px 30px;border-radius:10px;transition:filter .15s ease;
  }
  .btn:hover{filter:brightness(.95);color:var(--tekst-op-koraal)}

  @media (max-width:860px){
    .section{padding:64px 0}
    .hero{padding:72px 0 64px}
  }
  @media (max-width:520px){
    .container{padding:0 20px}
    .steps li{grid-template-columns:52px 1fr;gap:18px}
    .steps li:not(:last-child)::before{left:15px}
    .facet-cta-inner{padding:40px 26px}
    .pull{grid-template-columns:22px 1fr;gap:16px}
  }

  @media (prefers-reduced-motion:reduce){
    *,*::before,*::after{animation-duration:.001ms!important;transition-duration:.001ms!important;scroll-behavior:auto!important}
  }`;

const HTML = `<main id="hoofd">

<!-- ================= HERO ================= -->
<section class="hero" style="--idot-bg:var(--petrol)">
  <div class="hero-watermerk" aria-hidden="true"></div>
  <div class="container">
    <a href="/inzichten" class="terug">&larr; Inzichten</a>
    <span class="eyebrow eyebrow--op-petrol">Voor werkgevers & HR</span>
    <h1>Waarom uw waarder<span class="idot">i</span>ng niet altijd aankomt<span class="slotpunt">.</span></h1>
    <p class="lead">U ziet goed werk en u benoemt het. En toch lijkt het compliment soms van de medewerker af te glijden, alsof het niet helemaal binnenkomt. Dat is geen onwil en meestal ook geen valse bescheidenheid. Er speelt iets onder de oppervlakte dat bepaalt of waardering blijft hangen of niet.</p>
    <div class="hero-meta">
      <span>Leestijd 6 minuten</span>
      <span>Voor werkgevers</span>
    </div>
  </div>
</section>

<!-- ================= DE KLOOF ================= -->
<section class="section section--paper">
  <div class="container">
    <span class="eyebrow">De kloof</span>
    <h2>Geven is niet hetzelfde als aankomen</h2>
    <div class="prose">
      <p>Dat waardering ertoe doet, is inmiddels goed onderbouwd. Medewerkers die zich gezien voelen, blijven langer, zijn betrokkener en presteren beter. Onderzoekers van de Universiteit van Oxford vonden dat tevreden medewerkers meetbaar productiever zijn dan ontevreden collega's.</p>
      <p>En toch zit er een kloof tussen wat werkgevers geven en wat medewerkers ervaren. Onderzoek van Gallup en Workhuman signaleert dat leidinggevenden erkenning de afgelopen jaren juist belangrijker zijn gaan vinden, terwijl medewerkers dat verschil lang niet altijd merken. De waardering wordt uitgesproken. Ze komt alleen niet altijd aan.</p>
    </div>
  </div>
</section>

<!-- ================= HET MECHANISME ================= -->
<section class="section section--petrol">
  <div class="container">
    <span class="eyebrow eyebrow--op-petrol">Het mechanisme</span>
    <h2>Waarom een compliment kan afketsen</h2>
    <div class="prose">
      <p>De verklaring ligt niet bij de gever, maar bij hoe wij informatie over onszelf verwerken. Mensen willen dat anderen hen zien zoals zij zichzelf zien. De psycholoog William Swann liet zien dat dit verlangen naar een consistent zelfbeeld sterk is, ook wanneer dat zelfbeeld ongunstig uitvalt. Wie van zichzelf vindt dat hij maar matig presteert, ervaart een oprecht compliment dan niet als bevestiging, maar als iets dat wringt. Het klopt niet met het eigen beeld, en de snelste manier om die wrijving weg te nemen is de lof afhouden: het viel wel mee, het was het team, gewoon mijn werk.</p>
      <p>Daar komen nog twee dingen bij. Voor sommige mensen voelt een compliment als een lat die omhooggaat: als ik dit aanneem, moet ik het voortaan blijven waarmaken. En voor anderen is jezelf wegcijferen simpelweg de aangeleerde reactie op lof, iets wat van huis uit of vanuit de omgeving is meegegeven. In alle drie de gevallen ligt de oorzaak niet in uw woorden, maar in wat de ontvanger ermee doet.</p>
    </div>

    <div class="pull">
      <div class="pull-rail" aria-hidden="true">
        <div class="ruit"></div><div class="lijn"></div><div class="stip"></div>
      </div>
      <p class="pull-tekst">Een compliment dat botst met het zelfbeeld voelt niet als steun, maar als iets dat gecorrigeerd moet worden.</p>
    </div>

    <div class="featured-stat">
      <div class="cijfer">2 op de 3</div>
      <p class="toelichting">Naar schatting wuift een ruime meerderheid van de mensen een oprecht compliment weg in plaats van het aan te nemen.</p>
    </div>
  </div>
</section>

<!-- ================= WAT DIT BETEKENT ================= -->
<section class="section section--linnen">
  <div class="container">
    <span class="eyebrow">Wat dit betekent</span>
    <h2>Niet minder waarderen, maar gerichter</h2>
    <div class="prose">
      <p>De conclusie is nadrukkelijk niet dat waardering geen zin heeft. Positieve emoties verruimen het denken en bouwen veerkracht op, zoals de psycholoog Barbara Fredrickson liet zien. Wie een compliment wegwuift, gooit dat effect weg. Het is dus de moeite waard om waardering zo te geven dat ze wél blijft hangen.</p>
      <p>Dat vraagt minder om vaker goed gedaan zeggen, en meer om precisie: benoemen wat iemand deed, waarom het ertoe deed, en dat op een manier die moeilijk weg te wuiven is.</p>
    </div>
  </div>
</section>

<!-- ================= IN DE PRAKTIJK ================= -->
<section class="section section--paper">
  <div class="container">
    <span class="eyebrow">In de praktijk</span>
    <h2>Zo geeft u waardering die aankomt</h2>
    <p class="lead-intro">Vijf principes uit onderzoek naar effectieve erkenning, vertaald naar de dagelijkse praktijk.</p>

    <ol class="steps">
      <li>
        <div class="node"><span class="nummer">01</span><span class="ruit" aria-hidden="true"></span></div>
        <div>
          <h3>Maak het concreet</h3>
          <p>Goed gedaan glijdt eraf; een compliment dat het specifieke gedrag benoemt, blijft hangen. Zeg wat u zag: welke keuze, welke aanpak, welk moment. Hoe concreter, hoe moeilijker weg te wuiven.</p>
        </div>
      </li>
      <li>
        <div class="node"><span class="nummer">02</span><span class="ruit" aria-hidden="true"></span></div>
        <div>
          <h3>Benoem het effect</h3>
          <p>Koppel het gedrag aan wat het opleverde voor de klant, het team of het resultaat. Zo weet de medewerker niet alleen dát het goed was, maar ook waaróm het ertoe deed.</p>
        </div>
      </li>
      <li>
        <div class="node"><span class="nummer">03</span><span class="ruit" aria-hidden="true"></span></div>
        <div>
          <h3>Waardeer ook de aanpak</h3>
          <p>Wie alleen resultaten prijst, leert mensen op veilig te spelen. Erken ook de inzet, het oordeel en de zorgvuldigheid onderweg, juist als het resultaat nog niet binnen is.</p>
        </div>
      </li>
      <li>
        <div class="node"><span class="nummer">04</span><span class="ruit" aria-hidden="true"></span></div>
        <div>
          <h3>Geef het op tijd en apart</h3>
          <p>Waardering verliest kracht als ze weken later komt, of als ze wordt weggestopt vlak vóór een punt van kritiek. Die maar wist het compliment uit. Houd de twee gescheiden: waardering nu, verbeterpunt op een ander moment.</p>
        </div>
      </li>
      <li>
        <div class="node"><span class="nummer">05</span><span class="ruit" aria-hidden="true"></span></div>
        <div>
          <h3>Herhaal het</h3>
          <p>Een zelfbeeld verandert niet na één compliment, maar door herhaalde ervaring. Consequente, gemeende waardering doet op termijn wat een losse opmerking niet kan: ze verschuift langzaam hoe iemand naar het eigen werk kijkt.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<!-- ================= WANNEER HET DIEPER ZIT ================= -->
<section class="section section--linnen">
  <div class="container">
    <span class="eyebrow">Wanneer het dieper zit</span>
    <h2>Als waardering structureel niet binnenkomt</h2>
    <div class="prose">
      <p>Soms ligt het niet aan een enkel moment. Er zijn medewerkers die, hoe zorgvuldig u het ook brengt, hun eigen waarde structureel niet kunnen zien. Dat is zelden een kwestie van de juiste bewoording; het zit dieper, in hoe iemand naar zichzelf en de eigen loopbaan kijkt. In die gevallen helpt een gesprek buiten de waan van de dag: een rustig, vertrouwelijk loopbaangesprek waarin iemand weer zicht krijgt op wat hij kan en wil. Niet als correctie, maar als ruimte om stil te staan.</p>
    </div>

    <div class="open-kader">
      <p class="label">Voor werkgevers</p>
      <p>Een korte ronde proactieve loopbaangesprekken laat medewerkers ervaren dat er echt naar hen gekeken wordt, en geeft u zicht op wat er speelt onder de oppervlakte. Het is een laagdrempelige manier om te investeren in mensen die u wilt behouden.</p>
    </div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="section section--paper">
  <div class="container">
    <span class="eyebrow">Veelgestelde vragen</span>
    <h2>Vragen over waardering en erkenning</h2>
    <div class="faq" style="margin-top:32px">
      <details>
        <summary>Is het niet kunnen aannemen van een compliment een teken van een probleem?</summary>
        <div class="antwoord"><p>Meestal niet. Onderzoek laat zien dat lof wegwuiven een breed en normaal verschijnsel is, niet iets wat voorbehouden is aan mensen met een laag zelfbeeld. Het zegt iets over hoe wij ons zelfbeeld beschermen, niet over iemands functioneren.</p></div>
      </details>
      <details>
        <summary>Werkt een formeel waarderingsprogramma dan wel?</summary>
        <div class="antwoord"><p>Een programma hebben is niet hetzelfde als effectief waarderen. Onderzoek koppelt vooral tijdige, specifieke en gemeende erkenning aan behoud en betrokkenheid, niet het bestaan van een systeem op zich. De kwaliteit van het moment weegt zwaarder dan de vorm.</p></div>
      </details>
      <details>
        <summary>Hoe vaak moet ik als werkgever waardering uitspreken?</summary>
        <div class="antwoord"><p>Belangrijker dan een frequentie is consistentie. Waardering die regelmatig en gemeend terugkeert, doet meer dan een grote gelegenheid één keer per jaar. Het gaat om een gewoonte, niet om een gebeurtenis.</p></div>
      </details>
      <details>
        <summary>Wat als een medewerker echt niet lijkt te kunnen aannemen dat hij goed werk levert?</summary>
        <div class="antwoord"><p>Dan zit het waarschijnlijk dieper dan een enkel gesprek kan oplossen. Een vertrouwelijk loopbaangesprek met een externe coach kan helpen om weer zicht te krijgen op iemands kwaliteiten en richting.</p></div>
      </details>
    </div>
  </div>
</section>

<!-- ================= CTA ================= -->
<section class="section section--paper" style="padding-top:0">
  <div class="cta-wrap">
    <div class="facet-cta">
      <div class="facet-cta-inner">
        <p class="label">Kennismaken</p>
        <h2>Investeer in mensen die u wilt behouden</h2>
        <p>Wilt u weten hoe proactieve loopbaangesprekken binnen uw organisatie kunnen werken? We denken graag vrijblijvend met u mee.</p>
        <a class="btn" href="/kennismaken">Plan een kennismaking</a>
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
