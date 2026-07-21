import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

const COACHES_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", name: "Zelah Dorrestijn", jobTitle: "Loopbaancoach", worksFor: { "@type": "Organization", name: "Vizier op Scherp" } },
    { "@type": "Person", name: "Lianne Both", jobTitle: "Loopbaancoach", worksFor: { "@type": "Organization", name: "Vizier op Scherp" } },
    { "@type": "Person", name: "Maaike Pannekoek-Hänschen", jobTitle: "Loopbaancoach", worksFor: { "@type": "Organization", name: "Vizier op Scherp" } },
    { "@type": "Person", name: "Floor van den Berg", jobTitle: "Loopbaancoach", worksFor: { "@type": "Organization", name: "Vizier op Scherp" } },
    { "@type": "Person", name: "Luc Buurman", jobTitle: "Loopbaancoach", worksFor: { "@type": "Organization", name: "Vizier op Scherp" } },
  ],
};

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons | Vizier op Scherp" },
      { name: "description", content: "Vizier op Scherp is een regionaal netwerk voor loopbaancoaching in Amsterdam en Haarlem. Maak kennis met ons verhaal, onze aanpak en onze vijf coaches." },
      { property: "og:title", content: "Over Vizier op Scherp" },
      { property: "og:description", content: "Kwaliteit door focus. Eenvoud door organisatie. Eén aanspreekpunt, heldere afspraken en een klein team van vijf coaches." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/over-ons` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/over-ons` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(COACHES_JSONLD) },
    ],
  }),
  component: Page,
});

const HTML = `<main id="main">

<!-- HERO -->
<section class="hero hero--linnen">
  <div class="watermark watermark--light"></div>
  <div class="container hero-pad">
    <div class="hero-copy" style="max-width:820px;">
      <span class="badge badge--dark">Over ons</span>
      <h1 class="h-hero"><span style="white-space:nowrap;">Profess<span class="idot">i</span>oneel</span> voor HR en menselijk voor de medewerker<span class="gold">.</span></h1>
      <p class="lead">Die ene zin is onze lat, voor elke coach, elk traject en elke afspraak die we maken. Vizier op Scherp is een regionaal netwerk voor loopbaancoaching in Amsterdam, Haarlem en omgeving: klein genoeg om iedereen persoonlijk te kennen, georganiseerd genoeg om werkgevers volledig te ontzorgen.</p>
      <p style="margin-top:20px;font-size:14.5px;"><a href="#coaches" style="border-bottom:1px solid var(--koraal);">Direct naar onze coaches &darr;</a></p>
    </div>
  </div>
</section>

<!-- ONS VERHAAL -->
<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <p class="eyebrow">Ons verhaal</p>
        <h2 class="h-section">Van persoonlijke praktijk naar netwerkbureau</h2>
      </div>
      <div style="display:flex;flex-direction:column;gap:20px;max-width:68ch;">
        <p>Vizier op Scherp is in 2016 gestart door onze oprichter Twan Fenger. Een persoonlijke coachpraktijk, gebouwd op een warme en ontwikkelgerichte visie op loopbaanbegeleiding: zorgvuldig luisteren, aandacht voor zelfkennis, en begeleiding met een duidelijke methodische opbouw.</p>
        <p>In de loop van de jaren is daar iets bijgekomen: de vraag van werkgevers. Organisaties die hun medewerkers goed willen begeleiden bij loopbaanvragen, motivatie en duurzame inzetbaarheid, maar daar zelf de tijd, capaciteit of neutrale positie niet voor hebben. Voor hen zijn we uitgegroeid tot wat we nu zijn: <strong style="font-weight:500;color:var(--ink);">een regionaal netwerkbureau dat loopbaancoaching organiseert voor werkgevers en hun medewerkers.</strong></p>
        <p>In 2026 heeft Luc Buurman het bedrijf van Twan overgenomen. Wat in deze groei en ontwikkelingen bewust is gebleven: de persoonlijke aanpak, echte kennismakingen, betrokken coaches en kwalitatieve begeleiding.</p>
      </div>
    </div>
  </div>
</section>

<!-- WAAR WE IN GELOVEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Waar we in geloven</p>
      <h2 class="h-section">Op tijd ondersteunen werkt beter dan repareren</h2>
      <p>Werk verandert snel. Organisaties hebben te maken met krapte, werkdruk en professionals die richting zoeken. Wij geloven dat organisaties sterker worden wanneer zij hun mensen op tijd goed begeleiden, niet pas wanneer iemand uitvalt of vertrekt, maar juist eerder: bij twijfel, groei, verandering of nieuwe verantwoordelijkheden.</p>
    </div>
    <div class="grid g3">
      <article class="card card--goud">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M38 20 L62 44 L38 68 L14 44 Z" stroke="#4A3413" stroke-width="6" stroke-linejoin="round"></path><path d="M62 32 L86 56 L62 80 L38 56 Z" stroke="#E8714A" stroke-width="6" stroke-linejoin="round"></path></svg>
        <h3>Persoonlijke aandacht</h3>
        <p>We zien de mens achter de vraag. Elke begeleiding sluit aan bij tempo, situatie en wat iemand werkelijk nodig heeft, niet bij een standaardprogramma.</p>
      </article>
      <article class="card card--petrol">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M50 18 L82 50 L50 82 L18 50 Z" stroke="#F5EFE3" stroke-width="6" stroke-linejoin="round"></path><path d="M50 36 L64 50 L50 64 L36 50 Z" stroke="#E8714A" stroke-width="6" stroke-linejoin="round"></path><circle cx="50" cy="50" r="5" fill="#F2C879"></circle></svg>
        <h3>Professionele betrouwbaarheid</h3>
        <p>Heldere afspraken, zorgvuldige processen, discretie en doen wat we beloven. Zeker richting werkgevers moet kwaliteit niet alleen gevoeld worden, maar ook georganiseerd zijn.</p>
      </article>
      <article class="card card--warm">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M20 78 H44 V56 H64 V34 H80" stroke="#1F3D3B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 60 L41 69 L32 78 L23 69 Z" fill="#F2C879"></path><circle cx="80" cy="24" r="6.5" fill="#F2C879"></circle></svg>
        <h3>Concrete beweging</h3>
        <p>Coaching moet niet alleen inzicht geven, maar ook leiden tot stappen in de praktijk: een gesprek, een keuze, een sollicitatie, ander gedrag. Daar sturen we op.</p>
      </article>
    </div>
  </div>
</section>

<!-- ONZE COACHES -->
<section id="coaches" class="section" style="scroll-margin-top:90px;">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Onze coaches</p>
      <h2 class="h-section">Met wie je kunt kennismaken</h2>
      <p>Elke coach heeft eigen accenten en een eigen verhaal. Bij de matching kijken we naar jouw vraag, jouw situatie, en naar wie daar als mens bij past.</p>
    </div>
    <div class="grid g2" style="gap:32px;">

      <article class="card card--line coach" style="background:var(--linnen);">
        <span class="avatar"><img src="/assets/zelah.jpg" alt="Zelah Dorrestijn" loading="lazy" /></span>
        <div style="flex:1;">
          <h3>Zelah Dorrestijn</h3>
          <span class="role">Loopbaancoach, therapeut &amp; trainer</span>
          <p class="coach-quote">&ldquo;Neem je volgende stap vanuit gevoel en het kennen van je behoeften.&rdquo;</p>
          <p class="bio">Psychosociaal therapeut met een achtergrond in sociaal ondernemerschap, de creatieve industrie en het hoger onderwijs. Zelah helpt je je zelfinzicht en zelfvertrouwen te vergroten, zodat je je ontwikkeling vormgeeft op een manier die bij je past. Open, positief en analytisch. Werkt vanuit een eigen praktijk in het centrum van Amsterdam.</p>
          <div class="tags">
            <span class="tag tag--hl">RBCZ-geregistreerd</span>
            <span class="tag">ACT Coaching</span>
            <span class="tag">Onderwijs &amp; zorg</span>
            <span class="tag">Zakelijke dienstverlening</span>
          </div>
          <a class="li-link" href="https://www.linkedin.com/in/zelah-dorrestijn/" rel="noopener noreferrer" target="_blank">LinkedIn &rarr;</a>
        </div>
      </article>

      <article class="card card--line coach" style="background:var(--linnen);">
        <span class="avatar"><img src="/assets/lianne.jpg" alt="Lianne Both" loading="lazy" /></span>
        <div style="flex:1;">
          <h3>Lianne Both</h3>
          <span class="role">Loopbaancoach, trainer &amp; psycholoog</span>
          <p class="coach-quote">&ldquo;Kom in beweging en ontdek waar je blij van wordt.&rdquo;</p>
          <p class="bio">Psycholoog en yogadocent. Lianne helpt je om van binnenuit te voelen wat je nodig hebt, zodat je keuzes maakt vanuit wat echt bij je past, en niet vanuit wat je omgeving verwacht. Ze werkt aan het evenwicht tussen denken, doen en voelen.</p>
          <div class="tags">
            <span class="tag tag--hl">Psycholoog</span>
            <span class="tag">Persoonlijk leiderschap</span>
            <span class="tag">Vitaliteit</span>
            <span class="tag">Zorg</span>
            <span class="tag">Teamcoaching</span>
          </div>
          <a class="li-link" href="https://www.linkedin.com/in/lianneboth/" rel="noopener noreferrer" target="_blank">LinkedIn &rarr;</a>
        </div>
      </article>

      <article class="card card--line coach" style="background:var(--linnen);">
        <span class="avatar"><img src="/assets/maaike.jpg" alt="Maaike Pannekoek" loading="lazy" /></span>
        <div style="flex:1;">
          <h3>Maaike Pannekoek-Hänschen</h3>
          <span class="role">Loopbaancoach &amp; organisatieadviseur</span>
          <p class="coach-quote">&ldquo;Ik geloof dat er voor ieder mens een juiste plek is.&rdquo;</p>
          <p class="bio">Maaike liep zelf ooit vast in een baan die niet bij haar paste, en weet hoe het is om de vraag te stellen: wat wil ik nou eigenlijk? Ze werkt veel met mensen in onderwijs en zorg, met jonge ouders en met leidinggevenden. Rustig, betrokken en altijd gericht op een concrete volgende stap.</p>
          <div class="tags">
            <span class="tag">Onderwijs &amp; zorg</span>
            <span class="tag">Jonge ouders</span>
            <span class="tag">Leidinggevenden</span>
          </div>
          <a class="li-link" href="https://www.linkedin.com/in/maaike-pannekoek-h%C3%A4nschen-6093b094/" rel="noopener noreferrer" target="_blank">LinkedIn &rarr;</a>
        </div>
      </article>

      <article class="card card--line coach" style="background:var(--linnen);">
        <span class="avatar"><img src="/assets/floor.jpg" alt="Floor van den Berg" loading="lazy" /></span>
        <div style="flex:1;">
          <h3>Floor van den Berg</h3>
          <span class="role">Loopbaancoach &amp; trainer</span>
          <p class="coach-quote">&ldquo;Inzicht is pas waardevol als het leidt tot beweging.&rdquo;</p>
          <p class="bio">Floor kijkt altijd breed: naar de samenhang tussen werk, leven en je loopbaanvraag. Ze viel acht jaar geleden zelf uit op haar werk omdat het niet meer klopte, en maakte daar een ander pad van. Ze brengt structuur aan in je verhaal, maakt patronen zichtbaar en vertaalt ze naar concrete stappen. Achtergrond in Positieve Gezondheid, NLP en het sociaal domein.</p>
          <div class="tags">
            <span class="tag tag--hl">NOBCO</span>
            <span class="tag">Positieve Gezondheid</span>
            <span class="tag">NLP</span>
            <span class="tag">Onderwijs &amp; sociaal domein</span>
          </div>
          <a class="li-link" href="https://www.linkedin.com/in/floor-van-den-berg" rel="noopener noreferrer" target="_blank">LinkedIn &rarr;</a>
        </div>
      </article>

      <article class="card card--line coach" style="background:var(--linnen);">
        <span class="avatar"><img src="/assets/luc.jpg" alt="Luc Buurman" loading="lazy" /></span>
        <div style="flex:1;">
          <h3>Luc Buurman</h3>
          <span class="role">Loopbaancoach, trainer &amp; eigenaar</span>
          <p class="coach-quote">&ldquo;Krijg scherp waar je talenten liggen en wat je belangrijk vindt. Dan kun je gerichte keuzes maken.&rdquo;</p>
          <p class="bio">Luc kent vanuit zijn achtergrond als recruitment consultant de werkgeverskant van binnenuit. Hij begeleidt vooral eind-twintigers, dertigers en jonge professionals die richting zoeken en scherper willen weten waar ze voor staan. Open, nuchter, zo luchtig als mogelijk en zo serieus als nodig.</p>
          <div class="tags">
            <span class="tag tag--hl">Noloc RL</span>
            <span class="tag">Zakelijke dienstverlening</span>
            <span class="tag">Onderwijs &amp; zorg</span>
            <span class="tag">Intervisiebegeleiding</span>
          </div>
          <a class="li-link" href="https://www.linkedin.com/in/lbuurman/" rel="noopener noreferrer" target="_blank">LinkedIn &rarr;</a>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- NETWERK / KWALITEIT (petrol) -->
<section class="section section--petrol">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow eyebrow--gold">Eén netwerk, één manier van werken</p>
      <h2 class="h-section">Verschillende mensen, dezelfde zorg en kwaliteit</h2>
      <p>Iedere coach heeft een eigen stijl, maar de werkwijze blijft herkenbaar. Wie je coach ook is. Binnen het netwerk houden we de kwaliteit samen hoog.</p>
    </div>
    <div class="bigstats bigstats--3">
      <div class="bigstat"><b>Gecertificeerde coaches</b><span>met een brede opleidingsachtergrond en unieke specialisaties</span></div>
      <div class="bigstat"><b>Intervisie</b><span>We scherpen elkaar met regelmatige intervisie en blijven zo leren van de praktijk.</span></div>
      <div class="bigstat"><b>Evaluatie</b><span>Elk traject sluiten we af met een evaluatie, zodat we de kwaliteit blijven verbeteren.</span></div>
    </div>
  </div>
</section>

<!-- DE MATCH -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Hoe de match werkt</p>
      <h2 class="h-section">Eerst kennismaken, dan pas kiezen</h2>
    </div>
    <div class="grid g2">
      <div class="card card--paper">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M38 30 L50 18 L62 30" stroke="#1F3D3B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M70 38 L82 50 L70 62" stroke="#1F3D3B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M62 70 L50 82 L38 70" stroke="#1F3D3B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 62 L18 50 L30 38" stroke="#1F3D3B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M50 39 L61 50 L50 61 L39 50 Z" fill="#E8714A"></path><circle cx="50" cy="50" r="4.5" fill="#F2C879"></circle></svg>
        <h3>Zo komen we tot een goede match</h3>
        <p>Na de intake stellen wij een coach voor die past bij je vraag, je situatie en je persoonlijkheid. Je maakt eerst vrijblijvend kennis. Pas daarna beslis je of je met deze coach verder wilt.</p>
        <p>Een goede klik is geen luxe, maar de basis van een traject dat werkt.</p>
      </div>
      <div class="card card--paper">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style="margin-bottom:16px;"><path d="M38 20 L62 44 L38 68 L14 44 Z" stroke="#1F3D3B" stroke-width="6" stroke-linejoin="round"></path><path d="M62 32 L86 56 L62 80 L38 56 Z" stroke="#E8714A" stroke-width="6" stroke-linejoin="round"></path></svg>
        <h3>En als het niet klikt?</h3>
        <p>Dan stellen we iemand anders voor. Zonder gedoe en zonder dat je je hoeft te verantwoorden. Je zit nergens aan vast voordat de kennismaking goed voelt.</p>
        <p>Liever zelf een voorkeur aangeven? Dat kan; vertel het ons gewoon bij de aanmelding.</p>
      </div>
    </div>
  </div>
</section>

<!-- HET NETWERK / CERTIFICERING -->
<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <p class="eyebrow">Het netwerk</p>
        <h2 class="h-section">Bewust klein, zorgvuldig samengesteld</h2>
      </div>
      <div style="display:flex;flex-direction:column;gap:20px;max-width:68ch;">
        <p>Vizier op Scherp werkt met een netwerk van zelfstandige coaches: nu vijf, en bewust nooit meer dan tien. Dat is geen beperking maar een keuze: zo kennen we elke coach persoonlijk, blijft de kwaliteit hoog en weet u als opdrachtgever precies wie er bij uw medewerkers aan tafel zit.</p>
        <p>Onze coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register. Ze hebben achtergronden in coaching, psychologie, HR, recruitment en maatschappelijk werk. Samen begeleidden zij meer dan duizend trajecten rond loopbaan, coaching, werkfitheid en professionele groei, in onder meer onderwijs, zorg, overheid en zakelijke dienstverlening. Binnen het netwerk borgen we kwaliteit met intervisie en evalueren we elk traject.</p>
        <div class="ph" style="height:340px;border-radius:0 0 14px 14px;background-image:url(/assets/team-vizier-op-scherp.png);background-size:cover;background-position:center;">
          <span class="ph-anchor"></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WAAR WE WERKEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Waar we werken</p>
      <h2 class="h-section">Twee locaties, één regio</h2>
    </div>
    <div class="grid g2">
      <div class="card card--paper card--anchor ring-paper">
        <h3>Haarlem</h3>
        <p style="color:var(--ink);">Klein Heiligland 84<br>2011 EJ Haarlem</p>
        <p style="margin-top:12px;">Een rustige plek in het centrum van Haarlem voor kennismakingen en coachgesprekken.</p>
      </div>
      <div class="card card--paper">
        <h3>Amsterdam</h3>
        <p style="color:var(--ink);">IJsbaanpad 9<br>1076 CV Amsterdam</p>
        <p style="margin-top:12px;">Goed bereikbare locatie in Amsterdam-Zuid.</p>
      </div>
    </div>
    <p style="margin-top:40px;max-width:72ch;">Ons werkgebied: Amsterdam, Haarlem en omgeving: waaronder Amstelveen, Hoofddorp, Zaanstad, Almere, Diemen, Hilversum, Heemstede en de omliggende gemeenten.</p>
  </div>
</section>

<!-- EN VERDER -->
<section class="section" style="padding-bottom:0;">
  <div class="container">
    <div class="card--open" style="padding:36px 40px;max-width:820px;">
      <h2 style="font-size:24px;margin-bottom:10px;">En verder</h2>
      <p>Naast loopbaancoaching voor werkgevers begeleiden we mensen met een UWV-traject (<a href="/uwv-traject" style="border-bottom:1px solid var(--koraal);">Werkfit Maken en Naar Werk</a>) en voeren we enkele lopende programma's uit op het gebied van <a href="/leiderschap" style="border-bottom:1px solid var(--koraal);">leiderschap en talentontwikkeling</a>. Particulieren met een loopbaanvraag zijn eveneens welkom.</p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section">
  <div class="container">
    <div class="facet">
      <div class="facet-inner">
        <div>
          <h2>Eens kennismaken?</h2>
          <p>Een vrijblijvend gesprek van een half uur, persoonlijk of online. We luisteren naar uw vraag en denken mee, ook als u nog niet precies weet wat u zoekt.</p>
        </div>
        <a class="btn btn-primary" href="/kennismaken">Plan een kennismakingsgesprek</a>
      </div>
    </div>
  </div>
</section>

</main>
`;

function Page() {
  return (
    <>
      <SiteHeader active="over-ons" />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <SiteFooter />
    </>
  );
}
