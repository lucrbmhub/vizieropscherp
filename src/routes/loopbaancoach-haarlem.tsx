import { createFileRoute } from "@tanstack/react-router";
import CityLandingPage, { type CityLandingData } from "@/components/CityLandingPage";
import { SITE_URL, socialImageMeta } from "@/lib/site";

const TITLE = "Loopbaancoach Haarlem | Vizier op Scherp";
const DESCRIPTION =
  "Loopbaancoach in Haarlem voor werk dat beter past. Persoonlijke loopbaancoaching met gecertificeerde coaches, op locatie in het centrum of online.";
const OG_DESCRIPTION =
  "Vastgelopen in je werk of toe aan een volgende stap? Persoonlijke loopbaancoaching in Haarlem, op locatie in het centrum of online.";
const URL = `${SITE_URL}/loopbaancoach-haarlem`;

export const Route = createFileRoute("/loopbaancoach-haarlem")({
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
              "@id": `${SITE_URL}/#haarlem`,
              name: "Vizier op Scherp, Loopbaancoaching Haarlem",
              description:
                "Loopbaancoaching in Haarlem: een klein netwerk van gecertificeerde coaches, op locatie in het centrum van Haarlem of online.",
              url: URL,
              image: `${SITE_URL}/assets/social-share.jpg`,
              telephone: "+31202146466",
              areaServed: [
                { "@type": "City", name: "Haarlem" },
                { "@type": "City", name: "Heemstede" },
                { "@type": "City", name: "Bloemendaal" },
                { "@type": "City", name: "Haarlemmermeer" },
                { "@type": "City", name: "Velsen" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Klein Heiligland 84",
                postalCode: "2011 EJ",
                addressLocality: "Haarlem",
                addressCountry: "NL",
              },
              geo: { "@type": "GeoCoordinates", latitude: 52.3776, longitude: 4.6349 },
              sameAs: ["https://www.linkedin.com/company/10002759/"],
              parentOrganization: { "@type": "Organization", name: "Vizier op Scherp", url: `${SITE_URL}/` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Loopbaancoach Haarlem", item: URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Waar vinden de loopbaangesprekken in Haarlem plaats?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Op onze locatie aan het Klein Heiligland 84 in het centrum van Haarlem, of online. Wat het beste past bij jouw situatie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kan ik ook terecht als ik buiten Haarlem woon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "De gesprekken zijn op onze locatie in Haarlem of online. Kom je uit Heemstede, Bloemendaal, Haarlemmermeer of Velsen, dan zit je in Haarlem dichtbij. Daarnaast hebben we een locatie in Amsterdam-Zuid.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wat kost een loopbaantraject bij Vizier op Scherp?",
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
                    text: "Ja, dat komt vaak voor. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. De werkgever hoort alleen of het traject loopt, nooit waarover het gaat.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Hoe kies ik een coach?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Je maakt eerst kennis met je coach voordat er iets vastligt. Klikt het niet, dan stellen we iemand anders voor. Een goede klik is voor ons voorwaarde voor resultaat.",
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
    eyebrow: "Loopbaancoaching · Haarlem",
    title: (
      <>
        Loopbaancoaching <span className="idot">i</span>n Haarlem, dichtbij en concreet
        <span className="slotpunt">.</span>
      </>
    ),
    lead:
      "Even vastgelopen, twijfel over je richting, of toe aan een volgende stap? Bij Vizier op Scherp werk je in Haarlem met een ervaren, gecertificeerde coach aan wat je verder helpt, in je huidige rol of daarbuiten. Rustig, vertrouwelijk en concreet.",
    primaryCta: { label: "Plan een kennismakingsgesprek", href: "/kennismaken" },
    secondaryCta: { label: "Voor werkgevers en HR", href: "/voor-werkgevers" },
    image: { src: "/assets/coaching-gesprek.jpg", alt: "Loopbaangesprek bij Vizier op Scherp in Haarlem" },
    floatCard: { label: "In de regio", text: "Twee locaties: Haarlem en Amsterdam. Coaching op locatie of online." },
  },
  recognise: {
    eyebrow: "Herken je dit?",
    title: "Sterker in je huidige rol, of verder als je wilt",
    intro:
      "Loopbaancoaching voelt vaak als de deur uit. Maar vaak blijkt dat een aanpassing in je huidige werk al veel verandert: een ander perspectief, andere prioriteiten of een frissere kijk op wat je doet. Pas als dat helder is, weet je of je wilt blijven of verder wilt.",
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
    eyebrow: "In Haarlem",
    title: "Coaching in het hart van Haarlem",
    lead:
      "Onze Haarlemse locatie ligt aan het Klein Heiligland, op loopafstand van het centrum en het station. Een rustige plek voor een goed gesprek, dicht bij huis of werk. Je gesprekken zijn hier of, als je dat prettiger vindt, online.",
    cardTitle: "Waar en hoe we werken",
    cardText:
      "Je gesprekken vinden plaats op onze locatie in Haarlem of online, wat het beste past bij jouw situatie en agenda. Mensen uit heel Kennemerland en daarbuiten komen daarvoor naar Haarlem.",
    rows: [
      { title: "Locatie Haarlem", text: "Klein Heiligland 84, 2011 EJ Haarlem" },
      { title: "Ook in Amsterdam", text: "IJsbaanpad 9, 1076 CV Amsterdam-Zuid" },
      { title: "Voor mensen uit", text: "Haarlem, Heemstede, Bloemendaal, Haarlemmermeer en Velsen" },
    ],
    sideLabel: "Dichtbij en vertrouwd",
    sideText:
      "Een loopbaanvraag bespreek je liever niet ver van huis. Op een rustige plek in je eigen stad, met een coach die de tijd neemt, komt er ruimte om te kijken naar wat er echt speelt. Zonder haast, in jouw tempo.",
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
      { num: "2", label: "locaties: Haarlem en Amsterdam, plus coaching op locatie of online" },
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
    title: "Loopbaancoaching in Haarlem: wat je wilt weten",
    items: [
      {
        q: "Waar vinden de gesprekken in Haarlem plaats?",
        a: "Op onze locatie aan het Klein Heiligland 84 in het centrum van Haarlem, of online. Wat het beste past bij jouw situatie en agenda.",
      },
      {
        q: "Kan ik ook terecht als ik buiten Haarlem woon?",
        a: "De gesprekken zijn op onze locatie in Haarlem of online. Kom je uit Heemstede, Bloemendaal, Haarlemmermeer of Velsen, dan zit je in Haarlem dichtbij. Daarnaast hebben we een locatie in Amsterdam-Zuid.",
      },
      {
        q: "Wat kost een loopbaantraject?",
        a: "Dat hangt af van de vorm. Na een vrijblijvend kennismakingsgesprek ontvang je een helder voorstel met een vaste prijsafspraak. Geen open einde, geen verrassingen achteraf.",
      },
      {
        q: "Kan mijn werkgever het traject betalen?",
        a: "Ja, dat komt vaak voor. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. De werkgever hoort alleen of het traject loopt, nooit waarover het gaat.",
      },
      {
        q: "Hoe kies ik een coach?",
        a: (
          <>
            Je maakt eerst kennis met je coach voordat er iets vastligt. Klikt het niet, dan stellen we iemand anders voor. Meer hierover lees je in{" "}
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
