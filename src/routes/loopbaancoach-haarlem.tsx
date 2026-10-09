import { createFileRoute } from "@tanstack/react-router";
import CityLandingPage, { type CityLandingData } from "@/components/CityLandingPage";
import { SITE_URL, socialImageMeta } from "@/lib/site";

const TITLE = "Loopbaancoach Haarlem, gratis kennismaken | Vizier op Scherp";
const DESCRIPTION =
  "Loopbaancoach in het centrum van Haarlem of online. Start met een gratis gesprek van twintig minuten en maak daarna kennis met je coach.";
const OG_DESCRIPTION =
  "Vastgelopen in je werk of toe aan een volgende stap? Persoonlijke loopbaancoaching in Haarlem, op locatie in het centrum of online.";
const URL = `${SITE_URL}/loopbaancoach-haarlem`;

const data: CityLandingData = {
  citySlug: "haarlem",
  hero: {
    eyebrow: "Loopbaancoach · Haarlem",
    title: (
      <>
        Loopbaancoach <span className="nowrap"><span className="idot">i</span>n</span> Haarlem: weer weten wat je wilt in je werk
        <span className="slotpunt">.</span>
      </>
    ),
    lead:
      "Twijfel je over je werk, zit je vast, of biedt je werkgever een loopbaantraject aan? In het centrum van Haarlem of online praat je met een ervaren, gecertificeerde loopbaancoach. Samen zoek je uit of je wilt groeien in je huidige rol of dat je iets anders wilt.",
    primaryCta: { label: "Plan een kennismakingsgesprek" },
    secondaryCta: { label: "Bel 020 214 64 66", href: "tel:+31202146466" },
    note: "Twintig minuten, gratis en vrijblijvend. Telefonisch of op een van onze locaties.",
    hrNote: { text: "Zoekt u als werkgever een coach voor een medewerker?", linkLabel: "Bekijk hoe wij met organisaties werken", href: "/voor-werkgevers" },
    image: { src: "/assets/coaching-gesprek.jpg", alt: "Loopbaangesprek bij Vizier op Scherp in Haarlem" },
  },
  recognise: {
    eyebrow: "Twee richtingen",
    title: "Sterker in je huidige rol, of verder als je wilt",
    intro:
      "Loopbaancoaching klinkt al snel als de deur uit. Vaak blijkt dat een aanpassing in je huidige werk al veel verandert: een ander perspectief, andere prioriteiten of een frissere kijk op wat je doet. Pas als dat helder is, weet je of je wilt blijven of verder wilt.",
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
    eyebrow: "In Haarlem",
    title: "Coaching in het centrum van Haarlem",
    lead:
      "Onze Haarlemse locatie ligt aan het Klein Heiligland, in het centrum en op loopafstand van station Haarlem. Een rustige plek voor een goed gesprek, dicht bij huis of werk. Je gesprekken zijn hier of, als je dat prettiger vindt, online.",
    cardTitle: "Waar en hoe we werken",
    cardText:
      "Je gesprekken vinden plaats op onze locatie in Haarlem of online, wat het beste past bij jouw situatie en agenda. Mensen uit heel Kennemerland en daarbuiten komen daarvoor naar Haarlem.",
    rows: [
      { title: "Locatie Haarlem", text: "Klein Heiligland 84, 2011 EJ Haarlem" },
      { title: "Ook in Amsterdam", text: "IJsbaanpad 9, 1076 CV Amsterdam-Zuid" },
      { title: "Bereikbaar", text: "In het centrum, op loopafstand van station Haarlem" },
    ],
    sideLabel: "Dichtbij en vertrouwd",
    sideText:
      "Een loopbaanvraag bespreek je liever niet ver van huis. Op een rustige plek in je eigen stad, met een coach die de tijd neemt, komt er ruimte om te kijken naar wat er echt speelt. Zonder haast, in jouw tempo.",
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
      "Hoeveel gesprekken je nodig hebt, hangt af van je vraag. De meeste trajecten duren een paar maanden, met een gesprek om de twee à drie weken. Je begint vrijblijvend en beslist pas daarna.",
    cta: { label: "Plan een kennismakingsgesprek" },
    listLabel: "In drie stappen",
    items: [
      {
        num: "Stap 1 · Kennismaken",
        title: "Een vrijblijvend gesprek",
        text: "In twintig minuten kijken we samen wat er speelt en wat je zoekt. Daarna stellen we een coach voor die bij je past.",
      },
      {
        num: "Stap 2 · Je coach",
        title: "Eerst kennismaken, dan kiezen",
        text: "Je maakt kennis met je coach. Samen bepalen jullie wat je wilt bereiken en hoe jullie daaraan werken.",
      },
      {
        num: "Stap 3 · Aan de slag",
        title: "In beweging komen",
        text: "Je oefent wat je wilt veranderen: een gesprek met je leidinggevende, een netwerkafspraak of een sollicitatie. Je rondt af als je zelf verder kunt.",
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
    cards: [
      {
        title: "Eerst kennismaken",
        text: "Je ontmoet je coach voordat er iets vastligt. Een goede klik is de basis van een traject dat werkt.",
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
      "“Ik besloot te kiezen voor mezelf en het te doen. In het gesprek met mijn Vizier op Scherp loopbaancoach werd al snel duidelijk dat dit een 1e goede stap was. Kiezen voor mezelf.”",
    cite: "Romy Rutten, Officemanager",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Loopbaancoaching in Haarlem: wat je wilt weten",
    items: [
      {
        q: "Waar vinden de gesprekken in Haarlem plaats?",
        a: "Op onze locatie aan het Klein Heiligland 84 in het centrum van Haarlem, of online. Wat het beste past bij jouw situatie en agenda.",
        text: "Op onze locatie aan het Klein Heiligland 84 in het centrum van Haarlem, of online. Wat het beste past bij jouw situatie en agenda.",
      },
      {
        q: "Kan ik ook terecht als ik buiten Haarlem woon?",
        a: (
          <>
            De gesprekken zijn op onze locatie in Haarlem of online. Kom je uit Heemstede, Bloemendaal, Haarlemmermeer of Velsen, dan zit je in Haarlem dichtbij. Daarnaast hebben we{" "}
            <a href="/loopbaancoach-amsterdam">een locatie in Amsterdam-Zuid</a>.
          </>
        ),
        text: "De gesprekken zijn op onze locatie in Haarlem of online. Kom je uit Heemstede, Bloemendaal, Haarlemmermeer of Velsen, dan zit je in Haarlem dichtbij. Daarnaast hebben we een locatie in Amsterdam-Zuid.",
      },
      {
        q: "Wat kost een loopbaantraject?",
        a: "Na de kennismaking krijg je een voorstel met een vaste prijs voor het hele traject. Hoe hoog die is, hangt af van je vraag en het aantal gesprekken dat je nodig hebt. Je weet dus vooraf waar je aan toe bent, en achteraf komen er geen kosten bij.",
        text: "Na de kennismaking krijg je een voorstel met een vaste prijs voor het hele traject. Hoe hoog die is, hangt af van je vraag en het aantal gesprekken dat je nodig hebt. Je weet dus vooraf waar je aan toe bent, en achteraf komen er geen kosten bij.",
      },
      {
        q: "Kan mijn werkgever het traject betalen?",
        a: "Ja, dat komt vaak voor. We zetten het voorstel dan op naam van je werkgever en denken mee over hoe je het aankaart. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. Je werkgever hoort alleen of het traject loopt, nooit waarover het gaat.",
        text: "Ja, dat komt vaak voor. We zetten het voorstel dan op naam van je werkgever en denken mee over hoe je het aankaart. Ook als je werkgever betaalt, blijft de inhoud van de gesprekken tussen jou en je coach. Je werkgever hoort alleen of het traject loopt, nooit waarover het gaat.",
      },
      {
        q: "Hoe kies ik een coach?",
        a: (
          <>
            Je maakt eerst kennis met je coach voordat er iets vastligt. Klikt het niet, dan stellen we iemand anders voor. Meer hierover lees je in{" "}
            <a href="/inzichten/goede-loopbaancoach-kiezen">een goede loopbaancoach kiezen</a>.
          </>
        ),
        text: "Je maakt eerst kennis met je coach voordat er iets vastligt. Klikt het niet, dan stellen we iemand anders voor. Meer hierover lees je in een goede loopbaancoach kiezen.",
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
              parentOrganization: { "@id": `${SITE_URL}/#organization` },
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
