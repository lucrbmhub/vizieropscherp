import { createFileRoute } from "@tanstack/react-router";
import CityLandingPage, { type CityLandingData } from "@/components/CityLandingPage";
import { SITE_URL, socialImageMeta } from "@/lib/site";

const TITLE = "Loopbaancoach Amsterdam | Vizier op Scherp";
const DESCRIPTION =
  "Loopbaancoach in Amsterdam voor werk dat beter past. Persoonlijke loopbaancoaching met gecertificeerde coaches, op locatie in Amsterdam-Zuid of online.";
const OG_DESCRIPTION =
  "Vastgelopen in je werk of toe aan een volgende stap? Persoonlijke loopbaancoaching in Amsterdam, op locatie in Amsterdam-Zuid of online.";
const URL = `${SITE_URL}/loopbaancoach-amsterdam`;

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
              parentOrganization: { "@type": "Organization", name: "Vizier op Scherp", url: `${SITE_URL}/` },
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
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Waar vinden de gesprekken in Amsterdam plaats?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Op onze locatie aan het IJsbaanpad 9 in Amsterdam-Zuid, bij het Olympisch Stadion, of online. Wat het beste past bij jouw situatie en agenda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is de locatie goed bereikbaar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja. De locatie ligt in Amsterdam-Zuid bij het Olympisch Stadion. Metrostation Amstelveenseweg is op loopafstand en er is parkeergelegenheid in de buurt. Een gesprek online kan altijd.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kan ik ook terecht als ik buiten Amsterdam woon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "De gesprekken zijn op onze locatie in Amsterdam-Zuid of online. Kom je uit Amstelveen, Diemen, Ouder-Amstel, Zaanstad of Almere, dan zit je bij ons dichtbij. Daarnaast hebben we een locatie in Haarlem.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wat kost een loopbaantraject?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dat hangt af van de vorm. Na een vrijblijvend kennismakingsgesprek ontvang je een helder voorstel met een vaste prijsafspraak. Geen open einde, geen verrassingen achteraf.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kan mijn werkgever het traject betalen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, dat komt vaak voor. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. Meer over kiezen lees je in een goede loopbaancoach kiezen.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const data: CityLandingData = {
  hero: {
    eyebrow: "Loopbaancoach · Amsterdam",
    title: (
      <>
        Loopbaancoaching <span className="idot">i</span>n Amsterdam, helder en concreet
        <span className="slotpunt">.</span>
      </>
    ),
    lead:
      "Even vastgelopen, twijfel over je richting, of toe aan een volgende stap? Bij Vizier op Scherp werk je in Amsterdam met een ervaren, gecertificeerde coach aan wat je verder helpt, in je huidige rol of daarbuiten. Rustig, vertrouwelijk en concreet.",
    primaryCta: { label: "Plan een kennismakingsgesprek", href: "/kennismaken" },
    secondaryCta: { label: "Voor werkgevers en HR", href: "/voor-werkgevers" },
    image: { src: "/assets/coaching-gesprek.jpg", alt: "Loopbaangesprek bij Vizier op Scherp in Amsterdam" },
    floatCard: { label: "In de regio", text: "Twee locaties: Amsterdam-Zuid en Haarlem. Coaching op locatie of online." },
  },
  recognise: {
    eyebrow: "Herken je dit?",
    title: "Sterker in je huidige rol, of verder als je wilt",
    intro:
      "Loopbaancoaching voelt al snel als: de deur uit. Maar vaak verandert een aanpassing in je huidige werk al veel, met een ander perspectief, andere prioriteiten of een frissere blik op wat je doet. Pas als dat helder is, weet je of je wilt blijven of verder wilt.",
    cards: [
      {
        label: "Weer op je plek",
        title: "Sterker in je huidige rol",
        body:
          "Weer energie en plezier, helderder prioriteiten, prettiger samenwerken. Voor als je op de goede plek zit, maar merkt dat het schuurt of dat je vastloopt.",
      },
      {
        label: "Richting en keuze",
        title: "Een nieuwe richting",
        body: (
          <>
            Twijfel ordenen en ontdekken wat past. Een volgende stap zetten omdat het klopt, niet omdat het moet. Lees hoe je{" "}
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
      { title: "Voor mensen uit", text: "Amstelveen, Diemen, Ouder-Amstel, Zaanstad en Almere" },
    ],
    sideLabel: "Ruimte voor je verhaal",
    sideText:
      "Een loopbaanvraag verdient rust en aandacht. Met een coach die de tijd neemt, ontstaat ruimte om te kijken naar wat er echt speelt en wat je wilt. In je eigen stad, dicht bij werk of huis, in jouw tempo.",
    sideList: [
      "Je maakt eerst kennis met je coach, voordat er iets vastligt",
      "Klikt het niet? Dan stellen we iemand anders voor",
      "Begeleiding in jouw tempo, gericht op concrete stappen",
    ],
  },
  steps: {
    eyebrow: "Zo werkt het",
    title: "Wat je kunt verwachten",
    intro:
      "Geen standaardtraject, maar begeleiding die past bij jouw vraag. Je begint vrijblijvend, en beslist pas daarna. We werken stap voor stap, met aandacht voor zowel inzicht als concrete actie.",
    cta: { label: "Plan een kennismakingsgesprek", href: "/kennismaken" },
    listLabel: "In drie stappen",
    items: [
      {
        num: "Stap 1 · Kennismaken",
        title: "Een vrijblijvend gesprek",
        text: "We kijken samen wat er speelt en of het klikt. Pas als het goed voelt voor jou, gaan we verder. Zonder verplichting.",
      },
      {
        num: "Stap 2 · Jouw vraag centraal",
        title: "Samen bepalen wat past",
        text: "We brengen in kaart waar je staat en wat je wilt bereiken. Daar stemmen we de aanpak en het tempo op af.",
      },
      {
        num: "Stap 3 · Aan de slag",
        title: "Concrete stappen zetten",
        text: "Je werkt aan inzicht én actie, tot je weer in beweging bent en zelf verder kunt met wat je hebt ontdekt.",
      },
    ],
  },
  why: {
    eyebrow: "Waarom Vizier op Scherp",
    title: "Een klein netwerk waar je op kunt bouwen",
    intro:
      "Geen grote organisatie met wisselende gezichten, maar een bewust klein netwerk van ervaren coaches. Zo weet je precies wie er tegenover je zit.",
    stats: [
      { num: "1.000+", label: "trajecten begeleid door ons coachnetwerk, in uiteenlopende sectoren" },
      { num: "2", label: "locaties: Amsterdam en Haarlem, plus coaching op locatie of online" },
      { num: "5–10", label: "coaches, bewust klein gehouden en zorgvuldig geselecteerd" },
      { num: "100%", label: "gecertificeerde coaches, aangesloten bij een erkend register" },
    ],
    cards: [
      {
        title: "Eerst kennismaken",
        text: "Je ontmoet je coach voordat er iets vastligt. Een goede klik is voor ons voorwaarde voor resultaat, niet een toevalstreffer.",
      },
      {
        title: "Vertrouwelijk",
        text: "Wat je met je coach bespreekt, blijft tussen jullie. Betaalt je werkgever mee, dan hoort die alleen of het traject loopt, nooit waarover het gaat.",
      },
      {
        title: "Gecertificeerd",
        text: "Onze coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register.",
      },
    ],
    quote:
      "We beginnen altijd met luisteren. Pas als helder is wat er speelt, komen we met een voorstel. Geen standaardtraject, maar wat bij jou past.",
    cite: "De werkwijze van Vizier op Scherp",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Loopbaancoaching in Amsterdam: wat je wilt weten",
    items: [
      {
        q: "Waar vinden de gesprekken in Amsterdam plaats?",
        a: "Op onze locatie aan het IJsbaanpad 9 in Amsterdam-Zuid, bij het Olympisch Stadion, of online. Wat het beste past bij jouw situatie en agenda.",
      },
      {
        q: "Is de locatie goed bereikbaar?",
        a: "Ja. De locatie ligt in Amsterdam-Zuid bij het Olympisch Stadion. Metrostation Amstelveenseweg is op loopafstand en er is parkeergelegenheid in de buurt. Een gesprek online kan altijd.",
      },
      {
        q: "Kan ik ook terecht als ik buiten Amsterdam woon?",
        a: (
          <>
            De gesprekken zijn op onze locatie in Amsterdam-Zuid of online. Kom je uit Amstelveen, Diemen, Ouder-Amstel, Zaanstad of Almere, dan zit je bij ons dichtbij. Daarnaast hebben we{" "}
            <a href="/loopbaancoach-haarlem">een locatie in Haarlem</a>.
          </>
        ),
      },
      {
        q: "Wat kost een loopbaantraject?",
        a: "Dat hangt af van de vorm. Na een vrijblijvend kennismakingsgesprek ontvang je een helder voorstel met een vaste prijsafspraak. Geen open einde, geen verrassingen achteraf.",
      },
      {
        q: "Kan mijn werkgever het traject betalen?",
        a: (
          <>
            Ja, dat komt vaak voor. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. Meer over kiezen lees je in{" "}
            <a href="/inzichten/goede-loopbaancoach-kiezen">een goede loopbaancoach kiezen</a>.
          </>
        ),
      },
    ],
  },
  cta: {
    title: "Benieuwd of het klikt?",
    text:
      "Plan een vrijblijvend kennismakingsgesprek. We luisteren eerst, denken dan mee, en komen met een concreet voorstel dat past bij jouw situatie.",
    button: { label: "Plan een kennismakingsgesprek", href: "/kennismaken" },
  },
};

function Page() {
  return <CityLandingPage data={data} />;
}
