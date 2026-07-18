import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/coaching-voor-mij")({
  head: () => ({
    meta: [
      { title: "Coaching voor mij | Loopbaancoaching Amsterdam & Haarlem" },
      { name: "description", content: "Loopbaancoaching voor medewerkers en particulieren in Amsterdam en Haarlem. Je kiest zelf je coach, in jouw tempo, gericht op concrete stappen." },
      { property: "og:title", content: "Coaching voor mij | Vizier op Scherp" },
      { property: "og:description", content: "Doorverwezen of zoek je zelf coaching? Maak vrijblijvend kennis met een coach die bij je past." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/coaching-voor-mij` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/coaching-voor-mij` }],
    scripts: [{ type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Moet ik al weten wat ik wil voordat ik begin?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Nee, juist niet. De meeste mensen beginnen met twijfel of een vaag gevoel dat het anders moet. Samen met je coach breng je eerst rust en overzicht aan, en ontdek je daarna wat je kunt en wilt. De richting komt onderweg.\"}}, {\"@type\": \"Question\", \"name\": \"Wat vertellen jullie mijn werkgever?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Alleen of het traject loopt: aanwezigheid, voortgang in algemene zin en afronding. De inhoud van jullie gesprekken blijft tussen jou en je coach. Die afspraak leggen we bij de start vast, voor jou en voor je werkgever.\"}}, {\"@type\": \"Question\", \"name\": \"Hoe lang duurt een traject?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Dat verschilt per persoon en per vraag. De meeste trajecten lopen enkele maanden, met gesprekken om de twee à drie weken, zodat je tussendoor kunt oefenen met wat je bespreekt. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je af met je coach. Je zit nergens aan vast.\"}}, {\"@type\": \"Question\", \"name\": \"Wat als het niet klikt met mijn coach?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Dan stellen we iemand anders voor. Zonder gedoe en zonder dat je je hoeft te verantwoorden. Daarom begint elk traject met een vrijblijvende kennismaking: een goede klik is de basis van alles wat daarna komt.\"}}, {\"@type\": \"Question\", \"name\": \"Waar vinden de gesprekken plaats?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"In Haarlem, in Amsterdam-Zuid, online, of op een plek die voor jou goed werkt. Dat stem je gewoon af met je coach.\"}}, {\"@type\": \"Question\", \"name\": \"Wat kost een traject?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Vaak betaalt je werkgever. Vraag ernaar bij HR, veel organisaties hebben hier budget voor. Betaal je zelf, dan krijg je vooraf een heldere prijsafspraak, zodat je precies weet waar je aan toe bent.\"}}]}" }],
  }),
  component: Page,
});

const HTML = `<main id="main">

<!-- HERO (licht & warm) -->
<section class="hero hero--linnen">
  <div class="watermark watermark--light"></div>
  <div class="container hero-pad">
    <div class="hero-copy" style="max-width:760px;">
      <span class="badge badge--dark">Voor medewerkers en particulieren</span>
      <h1 class="h-hero">Even <span style="white-space:nowrap;">n<span class="idot">i</span>et</span> weten welke kant je op wilt, daar begint het vaak<span class="gold">.</span></h1>
      <p class="lead">Misschien ben je doorverwezen door je werkgever. Misschien loop je er zelf al een tijdje mee rond. Hoe je hier ook komt: je hoeft het allemaal nog niet precies te weten of uit te leggen. Een loopbaantraject begint gewoon met een goed gesprek, en met een coach die bij je past.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/kennismaken">Maak vrijblijvend kennis</a>
        <a class="btn btn-outline" href="/over-ons#coaches">Bekijk eerst onze coaches</a>
      </div>
    </div>
  </div>
</section>

<!-- HERKEN JE DIT -->
<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <p class="eyebrow">Herken je dit?</p>
        <h2 class="h-section">Vijf momenten waarop coaching helpt</h2>
        <p class="pull" style="margin-top:32px;font-size:20px;">Wat deze momenten gemeen hebben: je hoeft het niet alleen uit te zoeken. <span class="mark-gold">Samen kijken werkt beter.</span></p>
      </div>
      <div class="rows">
        <div class="row">
          <div class="row-title">Het zondagavondgevoel</div>
          <p>Je werk is op papier prima, maar de energie is weg. Elke week voelt als dezelfde week. Je weet alleen niet of het aan de baan ligt, aan de organisatie, of aan iets anders.</p>
        </div>
        <div class="row">
          <div class="row-title">Doorgroeien of iets heel anders?</div>
          <p>Er liggen kansen, maar je twijfelt: is dit echt de richting die je wilt? Een volgende stap zetten zonder te weten waarom, voelt niet goed.</p>
        </div>
        <div class="row">
          <div class="row-title">Nieuwe rol, oude aanpak</div>
          <p>Je hebt de stap gemaakt waar je naartoe werkte: meer verantwoordelijkheid, misschien voor het eerst een team. Maar wat je altijd goed deed, werkt in deze rol ineens niet vanzelf. Knopen doorhakken, loslaten wat je vroeger zelf oppakte, oude collega's aansturen. De rol krijgen bleek makkelijker dan de rol worden.</p>
        </div>
        <div class="row">
          <div class="row-title">Terug na een zware periode</div>
          <p>Na ziekte, mantelzorg of een moeilijke tijd wil je weer opbouwen, maar je oude tempo en je oude rol passen misschien niet meer.</p>
        </div>
        <div class="row">
          <div class="row-title">Doorverwezen, en nu?</div>
          <p>Je werkgever biedt je een coachtraject aan. Fijn, maar ook spannend. Wat kun je verwachten, en wat gebeurt er met wat je vertelt?</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- DOORVERWEZEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="grid g2-wide" style="align-items:center;gap:56px;">
      <div>
        <p class="eyebrow">Doorverwezen door je werkgever?</p>
        <h2 class="h-section">Dan kies jij alsnog zelf.</h2>
        <p style="margin-top:16px;">Veel werkgevers geven je een lijstje met bureaus. Wat je daarvan moet weten: jij bepaalt met wie je in zee gaat, en zo hoort het ook. Bij ons werkt dat zo:</p>
        <ul class="list-core" style="margin:20px 0 28px;">
          <li><span class="core"></span><span>Je maakt eerst kennis met je coach, voordat er iets vastligt</span></li>
          <li><span class="core"></span><span>Klikt het niet? Dan stellen we iemand anders voor</span></li>
          <li><span class="core"></span><span>Geen anonieme database: echte mensen, met een eigen verhaal en aanpak</span></li>
          <li><span class="core"></span><span>Begeleiding in jouw tempo, gericht op concrete stappen</span></li>
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
      <p>Elk traject is anders, want elk mens is anders. Maar de opbouw is herkenbaar. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je af met je coach.</p>
    </div>
    <div class="steps steps--4">
      <div class="step">
        <span class="num">01</span>
        <h3>Rust en overzicht</h3>
        <p>Eerst even landen. Wat speelt er, in je hoofd en in je lijf? Waar zit de onrust precies? Je hoeft nog niets op te lossen, alleen helder krijgen waar je staat.</p>
      </div>
      <div class="step">
        <span class="num">02</span>
        <h3>Zicht op wat je kunt en wilt</h3>
        <p>Je onderzoekt je talenten, je waarden en waar je energie van krijgt. Vaak weet je meer dan je denkt. Het is alleen nog nooit op een rij gezet.</p>
      </div>
      <div class="step">
        <span class="num">03</span>
        <h3>Richting kiezen</h3>
        <p>Met dat inzicht bepaal je je richting: in je huidige werk, in een andere rol, of ergens anders. Geen overhaaste keuzes, wel een keuze die van jou is.</p>
      </div>
      <div class="step">
        <span class="num">04</span>
        <h3>Concrete stappen zetten</h3>
        <p>Gesprekken voeren, solliciteren, netwerken, ander gedrag oefenen. Je coach blijft erbij tot je stappen in de praktijk staan, niet alleen op papier.</p>
      </div>
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
          <div style="display:flex;justify-content:flex-start;margin-bottom:14px;"><span class="testimonial-avatar" style="display:block;width:72px;height:72px;border-radius:50%;overflow:hidden;flex:none;background:var(--petrol);position:relative;"><img src="/assets/romy.jpeg" alt="Romy Rutten" style="width:100%;height:100%;object-fit:cover;display:block;" /><span style="position:absolute;right:-2px;bottom:2px;width:10px;height:10px;background:var(--goud);transform:rotate(45deg);box-shadow:0 0 0 4px var(--linnen);"></span></span></div><blockquote>&ldquo;Voordat ik 'ja' zei tegen een traject bij Vizier op Scherp moest ik eerst vrij regelen van werk. Ik besloot te kiezen voor mezelf en het te doen. In het gesprek met mijn Vizier op Scherp-coach werd al snel duidelijk dat dit een 1e goede stap was. Kiezen voor mezelf. Het traject opende mijn ogen en gaf mij richting. Ik kan goed zorgen voor anderen. Nu stel ik mezelf elke dag de vraag: en wat wil ik.&rdquo;</blockquote>
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
        <p style="font-size:15px;">Je vertelt wat er speelt, wij stellen een coach voor die bij je past. Daarna beslis jij.</p>
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
        <p>Gesprekken vinden plaats in Haarlem (Klein Heiligland), in Amsterdam-Zuid (IJsbaanpad), online, of op een plek die voor jou goed werkt. Je spreekt af in een tempo dat bij je past, coaching is geen sprint.</p>
      </div>
      <div class="card card--paper">
        <h3>Wie betaalt het traject?</h3>
        <p>Vaak je werkgever. Veel organisaties hebben budget voor ontwikkeling en duurzame inzetbaarheid. Vraag ernaar bij HR; we denken graag mee over hoe je dat aankaart.</p>
        <p>Betaal je zelf? Ook dan ben je welkom. Je krijgt vooraf een heldere prijsafspraak, zodat je precies weet waar je aan toe bent.</p>
      </div>
      <div class="card card--paper">
        <h3>Kwaliteit</h3>
        <p>Onze coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register.</p>
      </div>
    </div>
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
        <div class="answer">Dat verschilt per persoon en per vraag. De meeste trajecten lopen enkele maanden, met gesprekken om de twee à drie weken, zodat je tussendoor kunt oefenen met wat je bespreekt. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je af met je coach. Je zit nergens aan vast.</div>
      </details>
      <details>
        <summary>Wat als het niet klikt met mijn coach?</summary>
        <div class="answer">Dan stellen we iemand anders voor. Zonder gedoe en zonder dat je je hoeft te verantwoorden. Daarom begint elk traject met een vrijblijvende kennismaking: een goede klik is de basis van alles wat daarna komt.</div>
      </details>
      <details>
        <summary>Waar vinden de gesprekken plaats?</summary>
        <div class="answer">In Haarlem, in Amsterdam-Zuid, online, of op een plek die voor jou goed werkt. Dat stem je gewoon af met je coach.</div>
      </details>
      <details>
        <summary>Wat kost een traject?</summary>
        <div class="answer">Vaak betaalt je werkgever. Vraag ernaar bij HR, veel organisaties hebben hier budget voor. Betaal je zelf, dan krijg je vooraf een heldere prijsafspraak, zodat je precies weet waar je aan toe bent.</div>
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

function Page() {
  return (
    <>
      <SiteHeader active="coaching-voor-mij" />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <SiteFooter />
    </>
  );
}
