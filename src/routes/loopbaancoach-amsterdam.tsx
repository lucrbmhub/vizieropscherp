import { createFileRoute } from "@tanstack/react-router";
import CityLandingPage, { type CityLandingData } from "@/components/CityLandingPage";
import { SITE_URL, socialImageMeta } from "@/lib/site";

const TITLE = "Loopbaancoach Amsterdam, gratis kennismaken | Vizier op Scherp";
const DESCRIPTION =
  "Loopbaancoach in Amsterdam-Zuid of online. Loopbaanadvies en begeleiding door gecertificeerde coaches. Start met een gratis gesprek van twintig minuten.";
const OG_DESCRIPTION =
  "Vastgelopen in je werk of toe aan een volgende stap? Persoonlijke loopbaancoaching in Amsterdam, op locatie in Amsterdam-Zuid of online.";
const URL = `${SITE_URL}/loopbaancoach-amsterdam`;

const data: CityLandingData = {
  citySlug: "amsterdam",
  hero: {
    eyebrow: "Loopbaancoach · Amsterdam",
    title: (
      <>
        Loopbaancoach <span className="nowrap"><span className="idot">i</span>n</span> Amsterdam: kiezen voor werk dat bij je past
        <span className="slotpunt">.</span>
      </>
    ),
    lead:
      "Vastgelopen, toe aan iets nieuws, of biedt je werkgever een loopbaantraject aan? In Amsterdam-Zuid, vlakbij het Olympisch Stadion, of online praat je met een ervaren, gecertificeerde loopbaancoach. Samen bepaal je je volgende stap: sterker worden in je huidige rol of een andere richting kiezen.",
    primaryCta: { label: "Plan een kennismakingsgesprek" },
    secondaryCta: { label: "Bel 020 214 64 66", href: "tel:+31202146466" },
    note: "Twintig minuten, gratis en vrijblijvend.\u00a0",
    hrNote: { text: "Zoekt u als werkgever een coach voor een medewerker?", linkLabel: "Bekijk hoe wij met organisaties werken", href: "/voor-werkgevers" },
    image: { src: "/assets/coaching-gesprek.jpg", alt: "Loopbaangesprek bij Vizier op Scherp in Amsterdam" },
  },
  recognise: {
    eyebrow: "Twee richtingen",
    title: "Sterker in je huidige rol, of verder als je wilt",
    intro:
      "Bij loopbaancoaching denken veel mensen meteen aan vertrekken. In de praktijk verandert een aanpassing in je huidige werk vaak al veel, met een ander perspectief, andere prioriteiten of een frissere blik op wat je doet. Pas als dat helder is, weet je of je wilt blijven of verder wilt.",
    cards: [
      {
        label: "Weer op je plek",
        title: "Sterker in je huidige rol",
        body:
          "Weer energie en plezier, helderdere prioriteiten, prettiger samenwerken. Voor als je op de goede plek zit, maar merkt dat het schuurt of dat je vastloopt.",
      },
      {
        label: "Richting en keuze",
        title: "Een nieuwe richting",
        body: (
          <>
            Twijfel ordenen en ontdekken wat bij je past. Daarna zet je een volgende stap, in je eigen tempo. Lees hoe je{" "}
            <a href="/inzichten/richting-vinden-in-je-loopbaan">richting vindt in je loopbaan</a>.
          </>
        ),
      },
    ],
  },
  location: {
    eyebrow: "In Amsterdam",
    title: "Coaching in Amsterdam-Zuid",
    lead:
      "Onze Amsterdamse locatie ligt aan het IJsbaanpad, in Amsterdam-Zuid bij het Olympisch Stadion. Goed bereikbaar met auto en openbaar vervoer; metrostation Amstelveenseweg ligt op loopafstand. Je gesprekken zijn hier of, als je dat prettiger vindt, online.",
    cardTitle: "Waar en hoe we werken",
    cardText:
      "Je gesprekken vinden plaats op onze locatie in Amsterdam-Zuid of online, wat het beste past bij jouw situatie en agenda. Mensen uit heel Groot-Amsterdam en daarbuiten komen daarvoor naar Amsterdam-Zuid.",
    rows: [
      { title: "Locatie Amsterdam", text: "IJsbaanpad 9, 1076 CV Amsterdam-Zuid" },
      { title: "Ook in Haarlem", text: "Klein Heiligland 84, 2011 EJ Haarlem" },
      { title: "Bereikbaar", text: "Op loopafstand van metrostation Amstelveenseweg" },
    ],
    sideLabel: "Ruimte voor je verhaal",
    sideText:
      "Een loopbaanvraag verdient rust en aandacht. Met een coach die de tijd neemt, ontstaat ruimte om te kijken naar wat er echt speelt en wat je wilt. In je eigen stad, dicht bij werk of huis, in jouw tempo.",
    sideList: [
      "Je maakt eerst kennis met je coach, voordat er iets vastligt",
      "Klikt het niet? Dan stellen we iemand anders voor",
      "Begeleiding in jouw tempo, op locatie of online",
    ],
  },
  steps: {
    eyebrow: "Zo werkt het",
    title: "Wat je kunt verwachten",
    intro:
      "Hoeveel gesprekken je nodig hebt, hangt af van je vraag. Gemiddeld zijn het er zes, verspreid over drie tot zes maanden. Je begint vrijblijvend en beslist pas daarna.",
    cta: { label: "Plan een kennismakingsgesprek" },
    listLabel: "In vier stappen",
    items: [
      {
        num: "Stap 1 · Overzicht",
        title: "Helder krijgen waar je staat",
        text: "Je vertelt wat er speelt, in je werk en daarbuiten. Samen ordenen jullie je vraag, zodat duidelijk wordt waar het om gaat.",
      },
      {
        num: "Stap 2 · Inzicht",
        title: "Zicht op wat je kunt en wilt",
        text: "Je onderzoekt je talenten, je waarden en waar je energie van krijgt. Ook kijk je naar wat je tegenhoudt, zoals overtuigingen of gewoontes die je in de weg zitten.",
      },
      {
        num: "Stap 3 · Richting",
        title: "Een keuze die bij je past",
        text: "Met dat inzicht bepaal je je richting: blijven en je werk anders inrichten, of een stap buiten je huidige baan. Je neemt de tijd voor die keuze, zodat hij van jou is.",
      },
      {
        num: "Stap 4 · Actie",
        title: "In beweging komen",
        text: "Je zet concrete stappen: een gesprek met je leidinggevende, ander gedrag uitproberen, netwerken of solliciteren. Je rondt af als je zelf verder kunt.",
      },
    ],
  },
  why: {
    eyebrow: "Waarom Vizier op Scherp",
    title: "Een klein netwerk waar je op kunt bouwen",
    intro:
      "We werken met een vast, bewust klein netwerk van ervaren coaches. Je maakt altijd eerst kennis met je coach, zodat je weet wie er tegenover je zit.",
    stats: [
      { num: "1.000+", label: "trajecten begeleid door ons coachnetwerk, in uiteenlopende sectoren" },
      { num: "Sinds 2016", label: "begeleiden we mensen bij hun loopbaanvragen" },
      { num: "20 min", label: "gratis kennismaking, telefonisch of op locatie, voordat er iets vastligt" },
    ],
    quote:
      "“Al jaren was ik toe aan iets anders. Maar wat? … Ik wilde werk wat energie geeft en heb het gevonden. Er zit weer muziek in mijn werkleven.”",
    cite: "Chris Hartman",
  },
  coaches: [
    {
      name: "Zelah Dorrestijn",
      role: "Loopbaancoach & trainer",
      quote: "“Neem je volgende stap vanuit gevoel en het kennen van je behoeften.”",
      photo: "/assets/zelah.jpg",
    },
    {
      name: "Luc Buurman",
      role: "Loopbaancoach, trainer & eigenaar",
      label: "Noloc RL",
      quote: "“Krijg scherp waar je talenten liggen en wat je belangrijk vindt. Dan kun je gerichte keuzes maken.”",
      photo: "/assets/luc.jpg",
    },
    {
      name: "Lianne Both",
      role: "Loopbaancoach, trainer & psycholoog",
      label: "Psycholoog",
      quote: "“Kom in beweging en ontdek waar je blij van wordt.”",
      photo: "/assets/lianne.jpg",
    },
  ],
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Loopbaancoaching in Amsterdam: wat je wilt weten",
    items: [
      {
        q: "Waar vinden de gesprekken in Amsterdam plaats?",
        a: "Op onze locatie aan het IJsbaanpad 9 in Amsterdam-Zuid, bij het Olympisch Stadion, of online. Wat het beste past bij jouw situatie en agenda.",
        text: "Op onze locatie aan het IJsbaanpad 9 in Amsterdam-Zuid, bij het Olympisch Stadion, of online. Wat het beste past bij jouw situatie en agenda.",
      },
      {
        q: "Is de locatie goed bereikbaar?",
        a: "Ja. De locatie ligt in Amsterdam-Zuid bij het Olympisch Stadion, op loopafstand van metrostation Amstelveenseweg. Met de auto parkeer je betaald bij Sporthallen Zuid of op straat. Een gesprek online kan altijd.",
        text: "Ja. De locatie ligt in Amsterdam-Zuid bij het Olympisch Stadion, op loopafstand van metrostation Amstelveenseweg. Met de auto parkeer je betaald bij Sporthallen Zuid of op straat. Een gesprek online kan altijd.",
      },
      {
        q: "Kan ik ook terecht als ik buiten Amsterdam woon?",
        a: (
          <>
            De gesprekken zijn op onze locatie in Amsterdam-Zuid of online. Kom je uit Amstelveen, Diemen, Ouder-Amstel, Zaanstad of Almere, dan zit je bij ons dichtbij. Daarnaast hebben we{" "}
            <a href="/loopbaancoach-haarlem">een locatie in Haarlem</a>.
          </>
        ),
        text: "De gesprekken zijn op onze locatie in Amsterdam-Zuid of online. Kom je uit Amstelveen, Diemen, Ouder-Amstel, Zaanstad of Almere, dan zit je bij ons dichtbij. Daarnaast hebben we een locatie in Haarlem.",
      },
      {
        q: "Wat kost een loopbaantraject?",
        a: "Na de kennismaking krijg je een voorstel met een vaste prijs voor het hele traject. Hoe hoog die is, hangt af van je vraag en het aantal gesprekken. Gemiddeld zijn dat er zes. Je weet dus vooraf waar je aan toe bent, en achteraf komen er geen kosten bij.",
        text: "Na de kennismaking krijg je een voorstel met een vaste prijs voor het hele traject. Hoe hoog die is, hangt af van je vraag en het aantal gesprekken. Gemiddeld zijn dat er zes. Je weet dus vooraf waar je aan toe bent, en achteraf komen er geen kosten bij.",
      },
      {
        q: "Kan mijn werkgever het traject betalen?",
        a: "Ja, dat komt vaak voor. We zetten het voorstel dan op naam van je werkgever en denken mee over hoe je het aankaart. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. Je werkgever hoort alleen of het traject loopt, nooit waarover het gaat.",
        text: "Ja, dat komt vaak voor. We zetten het voorstel dan op naam van je werkgever en denken mee over hoe je het aankaart. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. Je werkgever hoort alleen of het traject loopt, nooit waarover het gaat.",
      },
      {
        q: "Wat is het verschil tussen een loopbaancoach, loopbaanadviseur en carrièrecoach?",
        a: "In de praktijk bedoelen mensen hetzelfde: iemand die je helpt bij vragen over je werk en je volgende stap. Loopbaanadvies en loopbaanbegeleiding zijn andere woorden voor wat wij loopbaancoaching noemen. Onze coaches in Amsterdam denken met je mee, begeleiden je en helpen je kiezen.",
        text: "In de praktijk bedoelen mensen hetzelfde: iemand die je helpt bij vragen over je werk en je volgende stap. Loopbaanadvies en loopbaanbegeleiding zijn andere woorden voor wat wij loopbaancoaching noemen. Onze coaches in Amsterdam denken met je mee, begeleiden je en helpen je kiezen.",
      },
      {
        q: "Zoek je een jobcoach in Amsterdam?",
        a: (<>Een jobcoach begeleidt je op de werkplek, vaak via UWV of de gemeente. Dat is iets anders dan loopbaancoaching. Als je een jobcoach zoekt verwijzen we je graag door.</>),
        text: "Een jobcoach begeleidt je op de werkplek, vaak via UWV of de gemeente. Dat is iets anders dan loopbaancoaching. Als je een jobcoach zoekt verwijzen we je graag door.",
      },
    ],
  },
  cta: {
    title: "Benieuwd of het klikt?",
    text:
      "Plan een kennismaking van twintig minuten. Daarna krijg je een voorstel: een coach die bij je past en een vaste prijs voor het hele traject.",
    button: { label: "Plan een kennismakingsgesprek" },
  },
};

export const Route = createFileRoute("/loopbaancoach-amsterdam")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:url", content: URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: OG_DESCRIPTION },
      ...socialImageMeta,
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#amsterdam`,
              name: "Vizier op Scherp, Loopbaancoaching Amsterdam",
              description:
                "Loopbaancoaching in Amsterdam: een klein netwerk van gecertificeerde coaches, op locatie in Amsterdam-Zuid of online.",
              url: URL,
              image: `${SITE_URL}/assets/social-share.jpg`,
              telephone: "+31202146466",
              areaServed: [
                { "@type": "City", name: "Amsterdam" },
                { "@type": "City", name: "Amstelveen" },
                { "@type": "City", name: "Diemen" },
                { "@type": "City", name: "Ouder-Amstel" },
                { "@type": "City", name: "Zaanstad" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "IJsbaanpad 9",
                postalCode: "1076 CV",
                addressLocality: "Amsterdam",
                addressCountry: "NL",
              },
              geo: { "@type": "GeoCoordinates", latitude: 52.3428, longitude: 4.8555 },
              sameAs: ["https://www.linkedin.com/company/10002759/"],
              parentOrganization: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Loopbaancoach Amsterdam", item: URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: data.faq.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.text },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Page,
});


function Page() {
  return <CityLandingPage data={data} />;
}
