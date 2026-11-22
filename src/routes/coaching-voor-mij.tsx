import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, socialImageMeta } from "@/lib/site";


export const Route = createFileRoute("/coaching-voor-mij")({
  head: () => ({
    meta: [
      { title: "Loopbaancoach en loopbaanbegeleiding voor jezelf | Vizier op Scherp" },
      { name: "description", content: "Loopbaancoaching voor jezelf met een vaste loopbaancoach. Zes gesprekken met talent- en drijfverenassessment, vanaf € 1.650 inclusief btw. De kennismaking is gratis." },
      { property: "og:title", content: "Loopbaancoach en loopbaanbegeleiding voor jezelf | Vizier op Scherp" },
      { name: "twitter:title", content: "Loopbaancoach en loopbaanbegeleiding voor jezelf | Vizier op Scherp" },
      { property: "og:description", content: "Doorverwezen of zoek je zelf coaching? Maak vrijblijvend kennis met een coach die bij je past." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/coaching-voor-mij` },
      ...socialImageMeta,
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/coaching-voor-mij` }],
    scripts: [{ type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Moet ik al weten wat ik wil voordat ik begin?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Nee, juist niet. De meeste mensen beginnen met twijfel of een vaag gevoel dat het anders moet. Samen met je coach breng je eerst rust en overzicht aan, en ontdek je daarna wat je kunt en wilt. De richting komt onderweg.\"}}, {\"@type\": \"Question\", \"name\": \"Wat vertellen jullie mijn werkgever?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Alleen of het traject loopt: aanwezigheid, voortgang in algemene zin en afronding. De inhoud van jullie gesprekken blijft tussen jou en je coach. Die afspraak leggen we bij de start vast, voor jou en voor je werkgever.\"}}, {\"@type\": \"Question\", \"name\": \"Hoe lang duurt een traject?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Dat verschilt per persoon en per vraag. Gemiddeld zes gesprekken, verspreid over drie tot zes maanden. Tussendoor kun je oefenen met wat je bespreekt. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je af met je coach. Je zit nergens aan vast.\"}}, {\"@type\": \"Question\", \"name\": \"Wat als het niet klikt met mijn coach?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Dan stellen we iemand anders voor. Zonder gedoe en zonder dat je je hoeft te verantwoorden. Daarom begint elk traject met een vrijblijvende kennismaking: een goede klik is de basis van alles wat daarna komt.\"}}, {\"@type\": \"Question\", \"name\": \"Waar vinden de gesprekken plaats?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"In Haarlem (Klein Heiligland), in Amsterdam-Zuid (IJsbaanpad) of online. Je kunt dat per gesprek afwisselen.\"}}, {\"@type\": \"Question\", \"name\": \"Wat kost een loopbaancoach?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Betaal je zelf, dan kost een loopbaantraject vanaf € 1.650 inclusief btw. Daarvoor krijg je zes gesprekken met een vaste loopbaancoach, een talent- en drijfverenassessment en een rapportage. Werk je als zzp'er, dan is dat € 1.650 exclusief btw. Betaalt je werkgever, dan maken we een voorstel op maat; vraag ernaar bij HR. Het kennismakingsgesprek is gratis.\"}}, {\"@type\": \"Question\", \"name\": \"Is loopbaancoaching hetzelfde als therapie?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Nee. Loopbaancoaching gaat over je werk en je loopbaan, en is gericht op keuzes en concrete stappen. Zit je thuis met klachten waardoor je niet goed meer kunt werken? Dan is je huisarts of bedrijfsarts de eerste stap.\"}}]}" }],
  }),
  component: Page,
});

const EMPLOYER_EMAIL = `Onderwerp: Aanvraag loopbaantraject

Hoi [naam],

Ik wil graag stilstaan bij mijn ontwikkeling en mijn loopbaan. Daarvoor wil ik een loopbaantraject volgen bij Vizier op Scherp. Het gaat om zes gesprekken met een gecertificeerde loopbaancoach, inclusief een talent- en drijfverenassessment en een rapportage.

Ik denk dat dit mij helpt om [scherper te krijgen waar ik goed in ben / te bepalen welke volgende stap bij mij past]. Kan dit vanuit het opleidings- of ontwikkelbudget? Vizier op Scherp maakt graag een voorstel op maat.

Groet,
[jouw naam]`;

const HTML = `<main id="main">

<!-- HERO (licht & warm) -->
<section class="hero hero--linnen">
  <div class="watermark watermark--light"></div>
  <div class="container hero-pad">
    <div class="hero-copy" style="max-width:760px;">
      <span class="badge badge--dark">LOOPBAANCOACHING VOOR MEDEWERKERS EN PARTICULIEREN</span>
      <h1 class="h-hero">Even <span style="white-space:nowrap;">n<span class="idot">i</span>et</span> weten welke kant je op wilt, daar begint het vaak<span class="gold">.</span></h1>
      <p class="lead">Misschien ben je doorverwezen door je werkgever. Misschien loop je er zelf al een tijdje mee rond. Hoe je hier ook komt: je hoeft het allemaal nog niet precies te weten of uit te leggen. Een loopbaantraject begint gewoon met een goed gesprek, en met een loopbaancoach die bij je past.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/kennismaken">Maak vrijblijvend kennis</a>
        <a class="btn btn-outline" href="/over-ons#coaches">Bekijk eerst onze coaches</a>
      </div>
      <p class="text-sm mt-4">Gratis kennismaking · Een coachtraject vaak vergoed door je werkgever</p>
    </div>
  </div>
</section>

<!-- HERKEN JE DIT -->
<section class="section vos-herken">
  <style>
    .vos-herken .vos-herken-head{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:32px;align-items:end;margin-bottom:32px}
    .vos-herken .h-section{max-width:17ch;letter-spacing:0}
    .vos-herken .vos-herken-intro{font-size:17.5px;color:var(--petrol);max-width:44ch}
    .vos-herken .vos-herken-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;grid-auto-rows:1fr}
    .vos-herken .vos-herken-card{display:flex;flex-direction:column;min-width:0;color:var(--body-c);border:0;box-shadow:none}
    .vos-herken .vos-herken-card h3{font-size:20px;color:var(--petrol);line-height:1.25;letter-spacing:0}
    .vos-herken .vos-herken-card p{font-size:14.5px;color:var(--body-c)}
    .vos-herken .vos-herken-cta{margin-top:28px;font-size:16px;color:var(--petrol);font-weight:500}
    .vos-herken .vos-herken-cta a{color:var(--koraal);font-weight:500}
    .vos-herken .vos-herken-cta a:hover{color:var(--koraal-deep)}
    @media(max-width:860px){.vos-herken .vos-herken-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:620px){.vos-herken .vos-herken-head{grid-template-columns:minmax(0,1fr);gap:24px}.vos-herken .vos-herken-grid{grid-template-columns:minmax(0,1fr);grid-auto-rows:auto}}
  </style>
  <div class="container">
    <div class="vos-herken-head">
      <div>
        <p class="eyebrow">Herken je dit?</p>
        <h2 class="h-section">Op papier klopt het. Toch voelt het niet goed.</h2>
      </div>
      <p class="vos-herken-intro">Bijna iedereen loopt een keer vast in zijn werk. De meeste mensen wachten te lang voordat ze er iets mee doen. Je hoeft niet te wachten tot het knelt.</p>
    </div>
    <div class="grid vos-herken-grid">
      <div class="card vos-herken-card">
        <span class="label">Ontwikkeling</span>
        <h3>Ik weet dat er meer in zit</h3>
        <p>Je doet je werk goed, maar je talenten blijven liggen.</p>
      </div>
      <div class="card vos-herken-card">
        <span class="label">Overstappen</span>
        <h3>Toe aan een carrièreswitch?</h3>
        <p>Er liggen kansen, maar je twijfelt welke kant je op wilt.</p>
      </div>
      <div class="card vos-herken-card">
        <span class="label">Twijfel</span>
        <h3>Blijven of ontslag nemen?</h3>
        <p>Zekerheid houdt je vast, maar het werk past niet meer.</p>
      </div>
      <div class="card vos-herken-card">
        <span class="label">Werkplezier</span>
        <h3>Het zondagavondgevoel</h3>
        <p>Op papier prima, maar de zin is weg.</p>
      </div>
      <div class="card vos-herken-card">
        <span class="label">Grenzen</span>
        <h3>Altijd aan, nooit klaar</h3>
        <p>Je bent er voor iedereen, behalve voor jezelf.</p>
      </div>
      <div class="card vos-herken-card">
        <span class="label">Starten</span>
        <h3>Net begonnen, en nu al twijfel</h3>
        <p>Je dacht dat dit het zou zijn. Toch twijfel je over de richting.</p>
      </div>
    </div>
    <p class="vos-herken-cta">Herken je jezelf? <a href="/kennismaken">Plan een gratis kennismaking →</a></p>
  </div>
</section>

<!-- DOORVERWEZEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="grid g2-wide" style="align-items:center;gap:56px;">
      <div>
        <p class="eyebrow">Doorverwezen door je werkgever?</p>
        <h2 class="h-section">Dan kies jij alsnog zelf.</h2>
        <p style="margin-top:16px;">Veel werkgevers geven je een lijstje met loopbaanbureaus. Wat je daarvan moet weten: jij bepaalt met wie je in zee gaat, en zo hoort het ook. Bij ons werkt dat zo:</p>
        <ul class="vos-lijst vos-lijst--check" style="margin:20px 0 28px;">
          <li>Je maakt eerst kennis met je loopbaancoach, voordat er iets vastligt</li>
          <li>Klikt het niet? Dan stellen we iemand anders voor</li>
          <li>Geen anonieme database: echte mensen, met een eigen verhaal en aanpak</li>
          <li>Begeleiding in jouw tempo, gericht op concrete stappen</li>
        </ul>
        <a class="btn btn-outline" href="/over-ons#coaches">Leer onze coaches kennen</a>
      </div>
      <aside class="card card--warm">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M50 18 L82 50 L50 82 L18 50 Z" stroke="#1F3D3B" stroke-width="6" stroke-linejoin="round"></path><path d="M50 36 L64 50 L50 64 L36 50 Z" stroke="#E8714A" stroke-width="6" stroke-linejoin="round"></path><circle cx="50" cy="50" r="5" fill="#F2C879"></circle></svg>
        <h3>Wat je bespreekt, blijft vertrouwelijk</h3>
        <p>Ook als je werkgever het traject betaalt, blijft de inhoud tussen jou en je coach. Je werkgever hoort alleen of het loopt, nooit waarover het gaat.</p>
      </aside>
    </div>
  </div>
</section>

<!-- VIER FASEN -->
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Hoe een traject eruitziet</p>
      <h2 class="h-section">Van onrust naar concrete stappen, in vier fasen</h2>
      <p>Elk traject is anders, want elk mens is anders. Maar de opbouw is herkenbaar. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je af met je loopbaancoach.</p>
    </div>
    <div class="steps steps--4">
      <div class="step">
        <span class="num">1</span>
        <h3>Overzicht</h3>
        <p>Eerst even landen. Wat speelt er, in je hoofd en in je lijf? Waar zit de onrust precies? Je hoeft nog niets op te lossen, alleen helder krijgen waar je staat.</p>
      </div>
      <div class="step">
        <span class="num">2</span>
        <h3>Inzicht</h3>
        <p>Je onderzoekt je talenten, je waarden en waar je energie van krijgt. Vaak weet je meer dan je denkt. Het is alleen nog nooit op een rij gezet.</p>
      </div>
      <div class="step">
        <span class="num">3</span>
        <h3>Richting</h3>
        <p>Met dat inzicht bepaal je je richting: in je huidige werk, in een andere rol, of ergens anders. Geen overhaaste keuzes, wel een keuze die van jou is.</p>
      </div>
      <div class="step">
        <span class="num">4</span>
        <h3>Actie</h3>
        <p>Gesprekken voeren, solliciteren, netwerken, ander gedrag oefenen. Je coach blijft erbij tot je stappen in de praktijk staan, niet alleen op papier.</p>
      </div>
    </div>
  </div>
</section>

<!-- WAT JE ERAAN OVERHOUDT -->
<section class="section section--petrol">
  <div class="container">
    <div class="grid g2-wide">
      <div>
        <p class="eyebrow eyebrow--gold">Wat je eraan overhoudt</p>
        <h2 class="h-section">Een besluit en een plan dat goed voelt</h2>
        <ul class="vos-lijst vos-lijst--check vos-lijst--donker text-[var(--mint)] mt-6">
          <li>Zes gesprekken met een ervaren loopbaancoach</li>
          <li>Een talent- en drijfverenassessment met persoonlijk rapport</li>
          <li>Meer rust, balans en voldoening</li>
          <li>Helderheid over wat bij je past, en een plan om daar te komen</li>
        </ul>
      </div>
      <aside class="card card--petrol border border-[var(--mint-dof)]">
        <h3>Er zijn twee goede uitkomsten</h3>
        <p>We sturen niet op vertrekken. Soms blijkt je huidige werk goed te passen, als je er iets aan verandert.</p>
        <div class="grid g2 mt-6">
          <div>
            <h3>Blijven</h3>
            <p>Met een andere rol, andere grenzen of een andere kijk op je werk.</p>
          </div>
          <div>
            <h3>Gaan</h3>
            <p>Naar werk dat beter past, met een plan om daar te komen.</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="section section--linnen">
  <div class="container">
    <div class="grid g2" style="gap:48px;">
      <!-- Testimonial wordt later vervangen door een blijf-en-ontwikkel-verhaal -->
      <figure class="quote" style="margin:0;">
        <div class="quote-rail"><span class="top"></span><span class="bar"></span><span class="end"></span></div>
        <div>
          <div style="display:flex;justify-content:flex-start;margin-bottom:14px;"><span class="testimonial-avatar" style="display:block;width:72px;height:72px;border-radius:50%;overflow:hidden;flex:none;background:var(--petrol);position:relative;"><img src="/assets/romy.jpeg" alt="Romy Rutten" style="width:100%;height:100%;object-fit:cover;display:block;" /><span style="position:absolute;right:-2px;bottom:2px;width:10px;height:10px;background:var(--goud);transform:rotate(45deg);box-shadow:0 0 0 4px var(--linnen);"></span></span></div><blockquote>&ldquo;Voordat ik 'ja' zei tegen een traject bij Vizier op Scherp moest ik eerst vrij regelen van werk. Ik besloot te kiezen voor mezelf en het te doen. In het gesprek met mijn Vizier op Scherp loopbaancoach werd al snel duidelijk dat dit een 1e goede stap was. Kiezen voor mezelf. Het traject opende mijn ogen en gaf mij richting. Ik kan goed zorgen voor anderen. Nu stel ik mezelf elke dag de vraag: en wat wil ik.&rdquo;</blockquote>
          <cite>Romy Rutten, Officemanager&nbsp;</cite>
        </div>
      </figure>
      <figure class="quote" style="margin:0;">
        <div class="quote-rail"><span class="top"></span><span class="bar"></span><span class="end"></span></div>
        <div>
          <div style="display:flex;justify-content:flex-start;margin-bottom:14px;"><span class="testimonial-avatar" style="display:block;width:72px;height:72px;border-radius:50%;overflow:hidden;flex:none;background:var(--petrol);position:relative;"><img src="/assets/chris.jpeg" alt="Chris Hartman" style="width:100%;height:100%;object-fit:cover;display:block;" /><span style="position:absolute;right:-2px;bottom:2px;width:10px;height:10px;background:var(--goud);transform:rotate(45deg);box-shadow:0 0 0 4px var(--linnen);"></span></span></div><blockquote>&ldquo;Al jaren was ik toe aan iets anders. Maar wat? Na een fijne kennismaking met Vizier op Scherp heb ik besloten een volledig traject af te nemen. Terwijl mijn oude werk nog doorliep, heb ik in 6 maanden tijd stappen gezet met mijn coach en mijn ideale (werk)leven gecreëerd. Ik werk nu als zzp coach voor naasten van mensen met een (eet)stoornis. Super blij met deze investering. Ik wilde werk wat energie geeft en heb het gevonden. Er zit weer muziek in mijn werkleven.&rdquo;</blockquote>
          <cite>Chris Hartman, Coach&nbsp;</cite>
        </div>
      </figure>
    </div>
  </div>
</section>

<!-- TUSSEN-CTA -->
<section class="section">
  <div class="container">
    <div class="card--open" style="padding:36px 40px;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;">
      <div style="max-width:640px;">
        <h2 style="font-size:22px;margin-bottom:8px;">Een eerste gesprek verplicht je tot niets</h2>
        <p style="font-size:15px;">Het is gratis en vrijblijvend. Je vertelt wat er speelt, wij stellen een coach voor die bij je past. Daarna beslis jij.</p>
      </div>
      <a class="btn btn-outline" href="/kennismaken">Plan een vrijblijvende kennismaking</a>
    </div>
  </div>
</section>

<!-- PRAKTISCH -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Praktisch</p>
      <h2 class="h-section">Goed om te weten</h2>
    </div>
    <div class="grid g3">
      <div class="card card--paper card--anchor ring-paper">
        <h3>Waar en hoe</h3>
        <p>Gesprekken vinden plaats in <a href="/loopbaancoach-haarlem">Haarlem</a> (Klein Heiligland), in <a href="/loopbaancoach-amsterdam">Amsterdam-Zuid</a> (IJsbaanpad) of online. Je spreekt af in een tempo dat bij je past, coaching is geen sprint.</p>
      </div>
      <div class="card card--paper">
        <h3>Wat kost het?</h3>
        <p>Betaal je zelf, dan kost een loopbaantraject vanaf € 1.650 inclusief btw: zes gesprekken, een talent- en drijfverenassessment en een rapportage. Werk je als zzp'er, dan is dat € 1.650 exclusief btw.</p>
        <p>Betaalt je werkgever, dan maken we een voorstel op maat. Dat komt vaak voor: veel organisaties hebben een ontwikkelbudget, en in veel cao's staat geld voor loopbaanontwikkeling. Gebruik de voorbeeldmail hieronder.</p>
      </div>
      <div class="card card--paper">
        <h3>Kwaliteit</h3>
        <p>Onze coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register.</p>
      </div>
    </div>
    <div class="mt-10">
      <h3 class="mb-4">Vraag het je werkgever</h3>
      <div class="card card--petrol">
        <p class="whitespace-pre-wrap select-text">${EMPLOYER_EMAIL}</p>
      </div>
      <div class="mt-4" data-copy-employer-mail></div>
    </div>
    <p class="mt-6">Wat je in de gesprekken vertelt, blijft tussen jou en je coach. Je werkgever hoort alleen of het traject loopt.</p>
  </div>
</section>

<!-- WERKBOEKEN -->
<section class="section tight">
  <div class="container">
    <div class="facet">
      <div class="facet-inner" style="display:block;">
        <p class="eyebrow" style="margin-bottom:10px;">Gratis aan de slag</p>
        <h2 class="h-section" style="font-size:clamp(26px,2.8vw,34px);">Drie werkboeken om zelf te beginnen</h2>
        <p style="margin-top:10px;max-width:64ch;">Drie werkboeken die je meteen zelf kunt invullen, zonder kosten en zonder verplichting.</p>
        <div class="grid g3" style="margin-top:32px;">
          <div class="card card--paper" style="display:flex;flex-direction:column;">
            <h3 style="font-size:19px;">Je richting scherp krijgen</h3>
            <p style="font-size:14.5px;margin-bottom:24px;">Kom je er niet uit wat je nu echt wilt? In vijf korte oefeningen ontdek je waar je energie zit, wat je kunt en welke richting bij je past.</p>
            <a href="/assets/Je_richting_scherp_krijgen.pdf" data-workbook="richting-scherp" data-workbook-title="Richting scherp krijgen" class="btn btn-primary" style="margin-top:auto;">Download het werkboek</a>
          </div>
          <div class="card card--paper" style="display:flex;flex-direction:column;">
            <h3 style="font-size:19px;">Vind werk via mensen, niet via vacatures</h3>
            <p style="font-size:14.5px;margin-bottom:24px;">Blijf je solliciteren zonder resultaat? Dit doe-werkboek helpt je werk te vinden via je netwerk, met kleine, haalbare stappen.</p>
            <a href="/assets/Werken_vinden_via_mensen.pdf" data-workbook="werken-vinden-via-mensen" data-workbook-title="Werken vinden via mensen" class="btn btn-primary" style="margin-top:auto;">Download het werkboek</a>
          </div>
          <div class="card card--paper" style="display:flex;flex-direction:column;">
            <h3 style="font-size:19px;">Aan het roer van je werk</h3>
            <p style="font-size:14.5px;margin-bottom:24px;">Wil je meer grip op je werk en je ontwikkeling? Vijf oefeningen om de regie te pakken over je tijd, je energie en je groei.</p>
            <a href="/assets/Aan_het_roer_van_je_werk.pdf" data-workbook="aan-het-roer" data-workbook-title="Aan het roer van je werk" class="btn btn-primary" style="margin-top:auto;">Download het werkboek</a>
          </div>
        </div>
        <p class="mt-6">Liever eerst zelf ontdekken waar je sterk in bent? Doe de <a href="/inzichten/talentenscan">gratis talentenscan</a>.</p>
      </div>
    </div>
  </div>
</section>

<!-- INZICHTEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Verder lezen</p>
      <h2 class="h-section">Herken je jezelf hierin? Lees verder</h2>
    </div>
    <div class="grid g3">
      <a class="card card--paper card--anchor ring-paper" href="/inzichten/vastzitten-in-een-goede-baan" style="display:flex;flex-direction:column;text-decoration:none;color:inherit;">
        <span style="display:inline-block;align-self:flex-start;background:var(--mint);color:var(--petrol);font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:5px 10px;border-radius:999px;margin-bottom:14px;">Voor medewerkers</span>
        <h3 style="font-size:19px;">Vastzitten in een goede baan: de gouden kooi</h3>
        <p style="font-size:14.5px;">Goed salaris, prima voorwaarden, en toch elke week minder zin. Waarom een goede baan kan vastzetten, en hoe je de deur weer opent.</p>
        <span style="margin-top:auto;padding-top:16px;color:var(--koraal);font-weight:500;">Lees verder →</span>
      </a>
      <a class="card card--paper" href="/inzichten/richting-vinden-in-je-loopbaan" style="display:flex;flex-direction:column;text-decoration:none;color:inherit;">
        <span style="display:inline-block;align-self:flex-start;background:var(--mint);color:var(--petrol);font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:5px 10px;border-radius:999px;margin-bottom:14px;">Voor medewerkers</span>
        <h3 style="font-size:19px;">Richting vinden in je loopbaan: waarom je niet bij de vacaturesite moet beginnen</h3>
        <p style="font-size:14.5px;">Je weet dat je iets anders wilt, maar niet wat. Richting vind je zelden op een vacaturesite, maar door te ontdekken wat je energie geeft en wat je drijft. Praktische handvatten en een oefening om je rode draad terug te vinden.</p>
        <span style="margin-top:auto;padding-top:16px;color:var(--koraal);font-weight:500;">Lees verder →</span>
      </a>
      <a class="card card--paper" href="/inzichten/hetzelfde-gevoel-een-andere-baan" style="display:flex;flex-direction:column;text-decoration:none;color:inherit;">
        <span style="display:inline-block;align-self:flex-start;background:var(--mint);color:var(--petrol);font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:5px 10px;border-radius:999px;margin-bottom:14px;">Voor medewerkers</span>
        <h3 style="font-size:19px;">Hetzelfde gevoel, een andere baan: waarom een overstap het patroon niet altijd oplost</h3>
        <p style="font-size:14.5px;">Weer dezelfde onvrede in een nieuwe baan? Vaak verhuist het patroon mee. Hoe je herkent wat er echt speelt, voordat je opnieuw overstapt.</p>
        <span style="margin-top:auto;padding-top:16px;color:var(--koraal);font-weight:500;">Lees verder →</span>
      </a>
    </div>
    <p style="margin-top:32px;"><a href="/inzichten" style="color:var(--koraal);font-weight:500;">Bekijk alle Inzichten →</a></p>
  </div>
</section>

<!-- FAQ -->
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Veelgestelde vragen</p>
      <h2 class="h-section">Wat mensen ons vooraf vragen</h2>
    </div>
    <div class="faq">
      <details>
        <summary>Moet ik al weten wat ik wil voordat ik begin?</summary>
        <div class="answer">Nee, juist niet. De meeste mensen beginnen met twijfel of een vaag gevoel dat het anders moet. Samen met je coach breng je eerst rust en overzicht aan, en ontdek je daarna wat je kunt en wilt. De richting komt onderweg.</div>
      </details>
      <details>
        <summary>Wat vertellen jullie mijn werkgever?</summary>
        <div class="answer">Alleen of het traject loopt: aanwezigheid, voortgang in algemene zin en afronding. De inhoud van jullie gesprekken blijft tussen jou en je coach. Die afspraak leggen we bij de start vast, voor jou en voor je werkgever.</div>
      </details>
      <details>
        <summary>Hoe lang duurt een traject?</summary>
        <div class="answer">Dat verschilt per persoon en per vraag. Gemiddeld zes gesprekken, verspreid over drie tot zes maanden. Tussendoor kun je oefenen met wat je bespreekt. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je af met je coach. Je zit nergens aan vast.</div>
      </details>
      <details>
        <summary>Wat als het niet klikt met mijn coach?</summary>
        <div class="answer">Dan stellen we iemand anders voor. Zonder gedoe en zonder dat je je hoeft te verantwoorden. Daarom begint elk traject met een vrijblijvende kennismaking: een goede klik is de basis van alles wat daarna komt.</div>
      </details>
      <details>
        <summary>Waar vinden de gesprekken plaats?</summary>
        <div class="answer">In Haarlem (Klein Heiligland), in Amsterdam-Zuid (IJsbaanpad) of online. Je kunt dat per gesprek afwisselen.</div>
      </details>
      <details>
        <summary>Wat kost een loopbaancoach?</summary>
        <div class="answer">Betaal je zelf, dan kost een loopbaantraject vanaf € 1.650 inclusief btw. Daarvoor krijg je zes gesprekken met een vaste loopbaancoach, een talent- en drijfverenassessment en een rapportage. Werk je als zzp'er, dan is dat € 1.650 exclusief btw. Betaalt je werkgever, dan maken we een voorstel op maat; vraag ernaar bij HR. Het kennismakingsgesprek is gratis.</div>
      </details>
      <details>
        <summary>Is loopbaancoaching hetzelfde als therapie?</summary>
        <div class="answer">Nee. Loopbaancoaching gaat over je werk en je loopbaan, en is gericht op keuzes en concrete stappen. Zit je thuis met klachten waardoor je niet goed meer kunt werken? Dan is je huisarts of bedrijfsarts de eerste stap.</div>
      </details>
    </div>
  </div>
</section>

<!-- UWV BANNER -->
<section class="section section--linnen" style="padding-top:64px;padding-bottom:64px;">
  <div class="container">
    <div class="card--open open-linnen" style="padding:36px 40px;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;">
      <div style="max-width:640px;">
        <h2 style="font-size:22px;margin-bottom:8px;">Kom je via UWV?</h2>
        <p style="font-size:15px;">Wij begeleiden ook mensen bij UWV Werkfit en Naar Werk trajecten. Persoonlijk, in je eigen tempo en zonder ingewikkelde taal. Hier lees je hoe dat werkt en wie je daarbij begeleidt.</p>
      </div>
      <a class="btn btn-outline" href="/uwv-traject">Lees over UWV-trajecten</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section">
  <div class="container">
    <div class="facet">
      <div class="facet-inner">
        <div>
          <h2>Gewoon eens kennismaken?</h2>
          <p>Een eerste gesprek is vrijblijvend en verplicht je tot niets. Je vertelt wat er speelt, wij vertellen hoe we werken, en daarna beslis jij.</p>
        </div>
        <a class="btn btn-primary" href="/kennismaken">Plan een kennismaking</a>
      </div>
    </div>
  </div>
</section>

</main>

`;

function CopyEmployerMail() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMPLOYER_EMAIL);
      setCopied(true);
      setError(false);
    } catch {
      setCopied(false);
      setError(true);
    }
  };
  return (
    <>
      <Button variant="ghost" className="btn btn-outline h-auto" onClick={copy}>
        {copied ? "Gekopieerd" : "Kopieer de mail"}
      </Button>
      <p role="status" aria-live="polite" className={error ? "mt-3" : "sr-only"}>
        {error ? "Kopiëren lukte niet. Selecteer de tekst en kopieer hem zelf." : copied ? "Gekopieerd" : ""}
      </p>
    </>
  );
}

function Page() {
  const content = useRef<HTMLDivElement>(null);
  const pageContent = useMemo(() => <div ref={content} dangerouslySetInnerHTML={{ __html: HTML }} />, []);
  const [copyTarget, setCopyTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setCopyTarget(content.current?.querySelector<HTMLElement>("[data-copy-employer-mail]") ?? null);
  }, []);
  return (
    <>
      <SiteHeader active="coaching-voor-mij" />
      {pageContent}
      {copyTarget && createPortal(<CopyEmployerMail />, copyTarget)}
      <SiteFooter />
    </>
  );
}
