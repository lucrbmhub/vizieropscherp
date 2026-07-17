import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";
import { SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/privacyverklaring`;
const DESC =
  "Lees hoe Vizier op Scherp omgaat met persoonsgegevens van deelnemers, opdrachtgevers en websitebezoekers. Helder, zorgvuldig en volgens de AVG.";

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Privacyverklaring",
      description: DESC,
      url: URL,
      publisher: { "@type": "Organization", name: "Vizier op Scherp" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Privacyverklaring", item: URL },
      ],
    },
  ],
};

export const Route = createFileRoute("/privacyverklaring")({
  head: () => ({
    meta: [
      { title: "Privacyverklaring | Vizier op Scherp" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Privacyverklaring | Vizier op Scherp" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalLayout>
      <p className="eyebrow">Juridisch</p>
      <h1>
        Pr<span className="idot" style={{ ["--idot-bg" as never]: "var(--paper)" } as CSSProperties}>i</span>vacyverklaring<span className="gold">.</span>
      </h1>
      <p className="legal-meta">Versie 1.1, juli 2026</p>

      <p>
        Vizier op Scherp organiseert loopbaancoaching voor werkgevers en hun medewerkers, voor particulieren en voor mensen die via UWV een traject volgen. Daarbij verwerken wij persoonsgegevens. In deze verklaring lees je welke gegevens dat zijn, waarvoor we ze gebruiken, waar ze vandaan komen, met wie we ze delen en welke rechten je hebt. We schrijven in de je-vorm; de verklaring geldt vanzelfsprekend ook voor zakelijke contactpersonen.
      </p>

      <h2>1. Wie zijn wij</h2>
      <p>
        Vizier op Scherp is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring (de &ldquo;verwerkingsverantwoordelijke&rdquo; in de zin van de AVG).
      </p>
      <p className="address-block">
        <span><strong>Vizier op Scherp</strong></span>
        <span>Klein Heiligland 84, 2011 EJ Haarlem</span>
        <span>IJsbaanpad 9, 1076 CV Amsterdam</span>
        <span>KvK 81088701</span>
        <span>E-mail: <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a></span>
        <span>Telefoon: <a href="tel:+31202146466">020 214 64 66</a></span>
      </p>
      <p>
        Wij hebben geen Functionaris Gegevensbescherming aangesteld en zijn daartoe ook niet verplicht. Vragen over privacy kun je stellen via <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>.
      </p>

      <h2>2. Van wie verwerken wij gegevens</h2>
      <p>Wij verwerken persoonsgegevens van:</p>
      <ul className="dia-list">
        <li>bezoekers van onze website;</li>
        <li>mensen die contact met ons opnemen via het formulier, e-mail, telefoon of WhatsApp;</li>
        <li>deelnemers aan coaching en loopbaanbegeleiding (particulier of via een werkgever);</li>
        <li>contactpersonen bij opdrachtgevers;</li>
        <li>mensen die via UWV een Werkfit- of Naar Werk-traject volgen;</li>
        <li>coaches en professionals die zich bij ons netwerk (willen) aansluiten.</li>
      </ul>

      <h2>3. Welke gegevens wij verwerken, waarvoor en op welke grondslag</h2>

      <h3>Als je contact met ons opneemt</h3>
      <p><strong>Gegevens:</strong> je naam, e-mailadres, telefoonnummer (als je dat geeft), in welke hoedanigheid je contact opneemt (voor jezelf, namens een medewerker, voor een organisatie of via UWV) en de inhoud van je bericht.</p>
      <p><strong>Doel:</strong> je vraag beantwoorden, een kennismakingsgesprek plannen en het contact opvolgen.</p>
      <p><strong>Grondslag:</strong> ons gerechtvaardigd belang om te reageren op jouw verzoek en, als het contact tot een overeenkomst leidt, de voorbereiding van die overeenkomst.</p>
      <p><strong>Bewaartermijn:</strong> maximaal 12 maanden na het laatste contact. Leidt het contact tot een traject of opdracht, dan bewaren we de gegevens als onderdeel van dat dossier.</p>
      <p>Neem je contact op via WhatsApp, dan verloopt dat bericht via de dienst van WhatsApp (Meta). Op dat berichtenverkeer is ook het privacybeleid van WhatsApp van toepassing.</p>

      <h3>Als je deelneemt aan een coachtraject</h3>
      <p><strong>Gegevens:</strong> je naam en contactgegevens, informatie over je werk en loopbaan (zoals je functie, werkgever en cv), de informatie uit de intake, de doelen en werkafspraken van het traject, de aantekeningen die je coach maakt voor jouw begeleiding, en de evaluatie na afloop.</p>
      <p><strong>Doel:</strong> het uitvoeren van je traject: intake, matching met een passende coach, begeleiding, evaluatie en afronding. Daarnaast gebruiken we gegevens voor kwaliteitsbewaking binnen ons netwerk en voor de administratie en facturatie.</p>
      <p><strong>Grondslag:</strong> de uitvoering van de overeenkomst. Willen we een citaat uit jouw evaluatie gebruiken, dan vragen we daarvoor altijd eerst je toestemming.</p>
      <p><strong>Bewaartermijn:</strong> het inhoudelijke dossier bewaren we tot twee jaar na afronding van het traject; daarna wordt het verwijderd of geanonimiseerd. Administratieve gegevens zoals offertes en facturen bewaren we zeven jaar vanwege de wettelijke bewaarplicht.</p>

      <h3>Als je contactpersoon bent bij een opdrachtgever</h3>
      <p><strong>Gegevens:</strong> je naam, functie, zakelijke contactgegevens en onze correspondentie en afspraken.</p>
      <p><strong>Doel:</strong> het uitvoeren en beheren van de opdracht, relatiebeheer en facturatie.</p>
      <p><strong>Grondslag:</strong> de uitvoering van de overeenkomst met jouw organisatie en ons gerechtvaardigd belang bij een goede zakelijke relatie.</p>
      <p><strong>Bewaartermijn:</strong> gedurende de zakelijke relatie en tot twee jaar daarna; facturen en offertes zeven jaar vanwege de wettelijke bewaarplicht.</p>

      <h3>Als je via UWV een traject volgt</h3>
      <p><strong>Gegevens:</strong> de gegevens die UWV met ons deelt of die je zelf met ons deelt, voor zover die nodig zijn voor je traject, en de voortgangsinformatie die wij aan UWV rapporteren.</p>
      <p><strong>Doel:</strong> het uitvoeren van je Werkfit- of Naar Werk-traject en het rapporteren aan UWV volgens de afspraken die bij deze trajecten horen.</p>
      <p><strong>Grondslag:</strong> de uitvoering van de overeenkomst en de voorwaarden die UWV aan deze trajecten stelt.</p>
      <p><strong>Bewaartermijn:</strong> volgens de termijnen die met UWV zijn afgesproken; administratieve gegevens zeven jaar.</p>
      <p>Je coach legt je bij de start van het traject precies uit welke informatie wel en niet met UWV wordt gedeeld, en blijft daarover met je in gesprek.</p>

      <h3>Als je een werkboek of leidraad downloadt</h3>
      <p><strong>Gegevens:</strong> je naam en e-mailadres.</p>
      <p><strong>Doel:</strong> het toesturen van het gevraagde document en, alleen als je daarvoor kiest, het af en toe toesturen van relevante inhoud over werk en loopbaan.</p>
      <p><strong>Grondslag:</strong> jouw toestemming. Afmelden kan altijd via de link in elke e-mail of door een bericht aan <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>.</p>
      <p><strong>Bewaartermijn:</strong> tot je je afmeldt.</p>

      <h3>Als je onze website bezoekt</h3>
      <p>Onze website gebruikt alleen functionele en technisch noodzakelijke cookies. Zie hierover paragraaf 10.</p>

      <h2>4. Waar je gegevens vandaan komen</h2>
      <p>De meeste gegevens krijgen we rechtstreeks van jou: via het contactformulier, in een gesprek, per e-mail of telefoon, of tijdens je traject.</p>
      <p>Soms krijgen we gegevens van iemand anders:</p>
      <ul className="dia-list">
        <li><strong>Van je werkgever of opdrachtgever</strong>, als die jouw traject regelt en betaalt. Het gaat dan om je naam, contactgegevens, functie en de aanleiding voor het traject in algemene zin.</li>
        <li><strong>Van UWV</strong>, als je via UWV een Werkfit- of Naar Werk-traject volgt. Het gaat dan om de gegevens die UWV nodig acht voor de opdracht, zoals je contactgegevens en de opdrachtomschrijving.</li>
      </ul>
      <p>In beide gevallen leggen we bij de start van het traject uit welke informatie we hebben ontvangen en wat we ermee doen. Wij verzamelen geen persoonsgegevens uit openbare bronnen om er profielen mee op te bouwen.</p>

      <h2>5. Moet je je gegevens geven?</h2>
      <p>Je bent nooit verplicht ons gegevens te geven, maar sommige gegevens hebben we simpelweg nodig:</p>
      <ul className="dia-list">
        <li><strong>Voor een coachtraject</strong> hebben we je naam, contactgegevens en de informatie uit de intake nodig. Zonder die gegevens kunnen we geen coach matchen en het traject niet uitvoeren.</li>
        <li><strong>Voor een offerte of factuur</strong> hebben we de zakelijke gegevens van je organisatie nodig. Zonder die gegevens kunnen we geen overeenkomst sluiten of factureren.</li>
        <li><strong>Voor een UWV-traject</strong> hebben we de gegevens nodig die UWV voor de uitvoering en rapportage vraagt.</li>
        <li><strong>Voor een werkboek, leidraad of onze e-mails</strong> is het geven van je gegevens vrijwillig. Geef je ze niet, dan kunnen we je het document niet toesturen, maar verder heeft dat geen gevolgen.</li>
      </ul>
      <p>Wat je in de gesprekken zelf deelt, bepaal je altijd zelf.</p>

      <h2>6. Bijzondere persoonsgegevens</h2>
      <p>In coaching kan gezondheid ter sprake komen, bijvoorbeeld bij terugkeer na een periode van ziekte of in een UWV-traject. Wij verwerken zulke gevoelige gegevens alleen als jij ze zelf deelt en alleen voor zover dat nodig is voor je begeleiding. Waar de wet dat vraagt, doen we dit op basis van jouw uitdrukkelijke toestemming. Je coach legt alleen vast wat voor het traject nodig is.</p>

      <h2>7. Terugkoppeling aan je werkgever</h2>
      <p>Betaalt je werkgever jouw traject, dan koppelen wij uitsluitend op procesniveau terug: of het traject is gestart, of het loopt en wanneer het is afgerond. De inhoud van je gesprekken delen wij nooit met je werkgever. Deze afspraak leggen we bij de start van het traject expliciet vast, met jou en met je werkgever.</p>
      <p>Bij een ronde proactieve loopbaangesprekken ontvangt de werkgever een geaggregeerde rapportage over terugkerende thema&rsquo;s. Die rapportage is niet herleidbaar tot individuele deelnemers.</p>

      <h2>8. Met wie delen wij gegevens</h2>
      <ul className="dia-list">
        <li><strong>De coach die jou begeleidt.</strong> Onze coaches zijn zelfstandige professionals die jouw begeleiding in opdracht van Vizier op Scherp uitvoeren. Zij verwerken je gegevens uitsluitend voor jouw traject en volgens onze instructies; met elke coach sluiten wij daarvoor een verwerkersovereenkomst. Daarnaast werkt ons hele netwerk volgens de uitgangspunten van de Gedragscode van Noloc, ook wanneer een coach zelf niet bij Noloc is aangesloten. Vertrouwelijkheid is daarin een kernpunt.</li>
        <li><strong>UWV</strong>, alleen als je een UWV-traject volgt, en alleen de voortgangsinformatie die daarvoor nodig is.</li>
        <li><strong>Leveranciers die ons ondersteunen</strong>, zoals onze e-mail- en documentomgeving (Google Workspace), onze websitehost en formulierverwerking, onze boekingsagenda en onze boekhouder. Met partijen die in onze opdracht persoonsgegevens verwerken sluiten wij verwerkersovereenkomsten.</li>
      </ul>
      <p>Wij verkopen nooit persoonsgegevens en delen ze niet met derden voor reclamedoeleinden.</p>

      <h2>9. Doorgifte buiten de Europese Economische Ruimte</h2>
      <p>Sommige van onze leveranciers, zoals Google, verwerken gegevens deels buiten de Europese Economische Ruimte. Dat gebeurt alleen met passende waarborgen, zoals een adequaatheidsbesluit van de Europese Commissie (bijvoorbeeld het EU-VS Data Privacy Framework) of de Europese standaardcontractbepalingen.</p>

      <h2>10. Cookies</h2>
      <p>Onze website gebruikt alleen functionele en technisch noodzakelijke cookies om de site goed te laten werken. Wij gebruiken geen tracking- of marketingcookies en geen advertentienetwerken. Gaan wij in de toekomst websitestatistieken bijhouden, dan doen we dat privacyvriendelijk of vragen we daarvoor eerst je toestemming, en passen we deze verklaring aan.</p>

      <h2>11. Geautomatiseerde besluitvorming</h2>
      <p>Wij nemen geen besluiten over jou op basis van geautomatiseerde verwerking of profilering.</p>

      <h2>12. Beveiliging</h2>
      <p>Wij nemen passende technische en organisatorische maatregelen om je gegevens te beschermen. Denk aan beveiligde verbindingen (https), toegangsbeveiliging en tweestapsverificatie op onze systemen, duidelijke afspraken met coaches en leveranciers, en het beperken van toegang tot degenen die de gegevens nodig hebben. Wij houden een register bij van onze verwerkingen. Bij een (vermoeden van een) datalek handelen wij zorgvuldig en melden wij dit waar nodig bij de Autoriteit Persoonsgegevens en bij jou.</p>

      <h2>13. Overzicht bewaartermijnen</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr><th>Gegevens</th><th>Bewaartermijn</th></tr>
          </thead>
          <tbody>
            <tr><td>Contactaanvragen zonder vervolg</td><td>Maximaal 12 maanden na laatste contact</td></tr>
            <tr><td>Inhoudelijk coachdossier</td><td>Tot 2 jaar na afronding van het traject</td></tr>
            <tr><td>UWV-trajectgegevens</td><td>Volgens de afspraken met UWV</td></tr>
            <tr><td>Offertes, facturen en administratie</td><td>7 jaar (wettelijke bewaarplicht)</td></tr>
            <tr><td>Gegevens voor downloads en updates</td><td>Tot afmelding</td></tr>
          </tbody>
        </table>
      </div>

      <h2>14. Jouw rechten</h2>
      <p>Je hebt het recht om:</p>
      <ul className="dia-list">
        <li>je gegevens in te zien;</li>
        <li>onjuiste gegevens te laten corrigeren;</li>
        <li>je gegevens te laten verwijderen;</li>
        <li>de verwerking te laten beperken;</li>
        <li>je gegevens overgedragen te krijgen (dataportabiliteit);</li>
        <li>bezwaar te maken tegen een verwerking;</li>
        <li>een gegeven toestemming op elk moment in te trekken.</li>
      </ul>
      <p>Stuur je verzoek naar <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>. We reageren binnen een maand. Om zeker te weten dat we met de juiste persoon spreken, kunnen we vragen om aanvullende informatie ter identificatie; we vragen nooit meer dan daarvoor nodig is. Sommige gegevens moeten wij wettelijk bewaren, zoals facturen. In dat geval leggen we uit wat wel en niet mogelijk is.</p>

      <h2>15. Klacht</h2>
      <p>Heb je een klacht over hoe wij met je gegevens omgaan? Laat het ons weten via <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>; we zoeken graag samen naar een oplossing. Komen we er niet uit, dan heb je het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (<a href="https://autoriteitpersoonsgegevens.nl" rel="noopener">autoriteitpersoonsgegevens.nl</a>).</p>

      <h2>16. Wijzigingen</h2>
      <p>Wij kunnen deze privacyverklaring aanpassen, bijvoorbeeld bij nieuwe diensten of gewijzigde regelgeving. De meest recente versie staat altijd op onze website. Deze versie is vastgesteld in juli 2026.</p>

      <div className="legal-facet">
        <div className="legal-facet-inner">
          <h2>Vragen over je gegevens?</h2>
          <p>Mail ons gerust via <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a> of plan een kennismaking.</p>
          <a className="btn btn-outline" href="/kennismaken">Neem contact op</a>
        </div>
      </div>
    </LegalLayout>
  );
}
