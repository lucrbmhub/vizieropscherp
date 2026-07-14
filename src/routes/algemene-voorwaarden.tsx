import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

const URL = "https://vizieropscherp.lovable.app/algemene-voorwaarden";
const DESC =
  "De algemene voorwaarden van Vizier op Scherp voor coaching, loopbaanbegeleiding, trainingen en coachingpool-jaarafspraken. Helder en zorgvuldig geformuleerd.";

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Algemene voorwaarden",
      description: DESC,
      url: URL,
      publisher: { "@type": "Organization", name: "Vizier op Scherp" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vizieropscherp.lovable.app/" },
        { "@type": "ListItem", position: 2, name: "Algemene voorwaarden", item: URL },
      ],
    },
  ],
};

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden | Vizier op Scherp" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Algemene voorwaarden | Vizier op Scherp" },
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

function A({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p>
      <strong>{n}</strong> {children}
    </p>
  );
}

function Page() {
  return (
    <LegalLayout>
      <p className="eyebrow">Juridisch</p>
      <h1>
        Algemene voorwaarden<span className="gold">.</span>
      </h1>
      <p className="legal-meta">Versie 1.1, juli 2026</p>

      <h2>Artikel 1. Definities</h2>
      <A n="1.1"><strong>Vizier op Scherp:</strong> de onderneming Vizier op Scherp, gevestigd aan Klein Heiligland 84, 2011 EJ Haarlem, met een tweede locatie aan IJsbaanpad 9, 1076 CV Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 81088701.</A>
      <A n="1.2"><strong>Opdrachtgever:</strong> de organisatie of natuurlijke persoon die aan Vizier op Scherp een opdracht verstrekt.</A>
      <A n="1.3"><strong>Deelnemer:</strong> de natuurlijke persoon die de coaching, loopbaanbegeleiding of het gesprek daadwerkelijk ontvangt. Bij particuliere opdrachten zijn Opdrachtgever en Deelnemer dezelfde persoon.</A>
      <A n="1.4"><strong>Coach:</strong> de zelfstandige professional die is aangesloten bij het netwerk van Vizier op Scherp en die de begeleiding uitvoert.</A>
      <A n="1.5"><strong>Consument:</strong> de Opdrachtgever die een natuurlijke persoon is en niet handelt in de uitoefening van een beroep of bedrijf.</A>
      <A n="1.6"><strong>Overeenkomst:</strong> iedere overeenkomst tussen Vizier op Scherp en Opdrachtgever, waaronder losse coachtrajecten, rondes proactieve loopbaangesprekken, trainingen en coachingpool-jaarafspraken.</A>
      <A n="1.7"><strong>Training:</strong> een training, workshop of andere groepsbijeenkomst die op een overeengekomen datum plaatsvindt.</A>
      <A n="1.8"><strong>Gedragscode:</strong> de Gedragscode van Noloc, de beroepsvereniging voor loopbaanprofessionals en jobcoaches, die Vizier op Scherp als leidraad hanteert voor de beroepsuitoefening binnen haar netwerk.</A>

      <h2>Artikel 2. Toepasselijkheid</h2>
      <A n="2.1">Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen en Overeenkomsten van Vizier op Scherp.</A>
      <A n="2.2">Vizier op Scherp verklaart deze voorwaarden in haar offertes en opdrachtbevestigingen van toepassing en stelt ze daarbij ter beschikking, in elk geval door verzending per e-mail of door verwijzing naar de vindplaats op vizieropscherp.nl. Op verzoek sturen wij ze kosteloos toe.</A>
      <A n="2.3">Afwijkingen van deze voorwaarden gelden alleen als ze schriftelijk zijn overeengekomen. Bij strijdigheid tussen deze voorwaarden en een Overeenkomst gaat de Overeenkomst voor.</A>
      <A n="2.4">De toepasselijkheid van inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen, tenzij schriftelijk anders is overeengekomen.</A>
      <A n="2.5">Voor trajecten die worden uitgevoerd in opdracht van UWV gelden in aanvulling op deze voorwaarden de afspraken en voorwaarden van UWV. Bij strijdigheid gaan de afspraken met UWV voor.</A>

      <h2>Artikel 3. Offertes en totstandkoming</h2>
      <A n="3.1">Offertes van Vizier op Scherp zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Ze zijn gebaseerd op de informatie die Opdrachtgever heeft verstrekt.</A>
      <A n="3.2">Een Overeenkomst komt tot stand door schriftelijke of digitale aanvaarding van de offerte (waaronder per e-mail), door ondertekening van een opdrachtbevestiging, of doordat Vizier op Scherp op verzoek van Opdrachtgever met de uitvoering is begonnen.</A>

      <h2>Artikel 4. Uitvoering van de dienstverlening</h2>
      <A n="4.1">Vizier op Scherp voert de Overeenkomst zorgvuldig en professioneel uit, naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap. Op Vizier op Scherp rust een inspanningsverplichting, geen resultaatsverplichting: de uitkomst van coaching en loopbaanbegeleiding hangt mede af van de inzet van de Deelnemer en van omstandigheden buiten de invloed van Vizier op Scherp.</A>
      <A n="4.2">De aangesloten Coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register, en werken volgens de daarbij behorende beroeps- en gedragscodes.</A>
      <A n="4.3">Vizier op Scherp hanteert daarnaast de Gedragscode als leidraad voor de beroepsuitoefening binnen haar gehele netwerk. Alle Coaches werken volgens de uitgangspunten van deze code, ook wanneer zij zelf niet bij Noloc zijn aangesloten. Waar een Coach is aangesloten bij een beroepsvereniging of kwaliteitsregister, geldt de gedragscode van die vereniging daarnaast rechtstreeks voor die Coach.</A>
      <A n="4.4">Coaching en loopbaanbegeleiding zijn geen (para)medische, psychologische of psychotherapeutische behandeling en vervangen die ook niet. De Deelnemer blijft zelf verantwoordelijk voor zijn of haar keuzes, gezondheid en welzijn. Als de vraag van de Deelnemer buiten de reikwijdte van de dienstverlening valt, verwijst Vizier op Scherp zorgvuldig door.</A>
      <A n="4.5">Vizier op Scherp mag de inhoud en vorm van de begeleiding in overleg aanpassen als dat de kwaliteit of het doel van het traject ten goede komt.</A>

      <h2>Artikel 5. Inzet van coaches</h2>
      <A n="5.1">Vizier op Scherp voert de dienstverlening uit met zelfstandige Coaches uit haar netwerk. Vizier op Scherp blijft daarbij de contractspartij en het aanspreekpunt van Opdrachtgever.</A>
      <A n="5.2">De Deelnemer maakt voorafgaand aan het traject kennis met de voorgestelde Coach. Als de samenwerking tussen Deelnemer en Coach niet goed verloopt, stelt Vizier op Scherp kosteloos een andere Coach voor.</A>
      <A n="5.3">Bij ziekte of uitval van een Coach zorgt Vizier op Scherp in overleg voor passende vervanging of een aangepaste planning.</A>
      <A n="5.4">De toepasselijkheid van de artikelen 7:404 en 7:407 lid 2 van het Burgerlijk Wetboek is uitgesloten.</A>

      <h2>Artikel 6. Verplichtingen van Opdrachtgever en Deelnemer</h2>
      <A n="6.1">Opdrachtgever en Deelnemer verstrekken tijdig de informatie die voor een goede uitvoering van de Overeenkomst nodig is, en melden relevante wijzigingen zo snel mogelijk.</A>
      <A n="6.2">De Deelnemer verschijnt op de geplande afspraken of zegt deze tijdig af volgens artikel 10.</A>
      <A n="6.3">Vinden gesprekken plaats op locatie van Opdrachtgever, dan zorgt Opdrachtgever voor een geschikte, rustige gespreksruimte waarin vertrouwelijk gesproken kan worden.</A>

      <h2>Artikel 7. Vertrouwelijkheid, terugkoppeling en persoonsgegevens</h2>
      <A n="7.1">Partijen gaan vertrouwelijk om met alle informatie die zij in het kader van de Overeenkomst over elkaar verkrijgen.</A>
      <A n="7.2">De inhoud van de gesprekken tussen Deelnemer en Coach is vertrouwelijk. Aan Opdrachtgever wordt uitsluitend op procesniveau teruggekoppeld: deelname, voortgang in algemene zin en afronding. Inhoudelijke informatie wordt alleen gedeeld met voorafgaande, uitdrukkelijke instemming van de Deelnemer.</A>
      <A n="7.3">Rapportages over rondes proactieve loopbaangesprekken zijn geaggregeerd en niet herleidbaar tot individuele deelnemers.</A>
      <A n="7.4">De vertrouwelijkheid geldt niet voor zover een wettelijke plicht tot bekendmaking bestaat, of als er een situatie is waarin de veiligheid van de Deelnemer of van anderen acuut in het geding is. In dat geval handelt de Coach zorgvuldig en volgens de Gedragscode en de beroepscode waaraan hij of zij gebonden is.</A>
      <A n="7.5">Vizier op Scherp is verwerkingsverantwoordelijke voor de persoonsgegevens die in het kader van de Overeenkomst worden verwerkt. De Coaches verwerken persoonsgegevens uitsluitend in opdracht en volgens de instructies van Vizier op Scherp; met elke Coach is daartoe een verwerkersovereenkomst gesloten.</A>
      <A n="7.6">Voor de verwerking van persoonsgegevens geldt de <a href="/privacyverklaring">privacyverklaring</a> van Vizier op Scherp, gepubliceerd op vizieropscherp.nl.</A>

      <h2>Artikel 8. Tarieven</h2>
      <A n="8.1">Alle tarieven zijn exclusief btw, tenzij anders vermeld. Aan Consumenten worden prijzen inclusief btw gecommuniceerd.</A>
      <A n="8.2">Vizier op Scherp mag haar tarieven jaarlijks per 1 januari aanpassen. Voor lopende Overeenkomsten met een vaste prijs geldt de overeengekomen prijs.</A>
      <A n="8.3">Reis- en locatiekosten worden alleen in rekening gebracht als dat vooraf is afgesproken.</A>

      <h2>Artikel 9. Facturering en betaling</h2>
      <A n="9.1">Facturering verloopt via Vizier op Scherp, ook wanneer de begeleiding door een aangesloten Coach wordt uitgevoerd.</A>
      <A n="9.2">De betalingstermijn is 14 dagen na factuurdatum, tenzij anders overeengekomen.</A>
      <A n="9.3">Blijft betaling uit, dan ontvangt Opdrachtgever eerst een betalingsherinnering. Een Consument ontvangt een kosteloze aanmaning met een termijn van 14 dagen voordat incassokosten in rekening worden gebracht. Bij uitblijvende betaling zijn de wettelijke (handels)rente en de wettelijke buitengerechtelijke incassokosten verschuldigd.</A>
      <A n="9.4">Bij aanhoudende wanbetaling mag Vizier op Scherp de dienstverlening opschorten, nadat Opdrachtgever daarop schriftelijk is gewezen en een redelijke termijn heeft gekregen om alsnog te betalen.</A>

      <h2>Artikel 10. Verzetten en annuleren van afspraken en trainingen</h2>
      <A n="10.1">Een geplande individuele afspraak kan tot 48 uur van tevoren kosteloos worden verzet of geannuleerd.</A>
      <A n="10.2">Bij afzegging binnen 48 uur voor de afspraak, of bij niet verschijnen zonder bericht, wordt het volledige tarief van de afspraak in rekening gebracht. Binnen een traject met een vast aantal gesprekken geldt de afspraak dan als genoten.</A>
      <A n="10.3">Voor annulering van een Training door Opdrachtgever geldt de volgende regeling, berekend over de overeengekomen prijs van de Training:</A>
      <ul className="dia-list">
        <li>tot 8 weken voor de geplande datum: kosteloos;</li>
        <li>tussen 8 en 4 weken voor de geplande datum: 50%;</li>
        <li>tussen 4 en 2 weken voor de geplande datum: 75%;</li>
        <li>binnen 2 weken voor de geplande datum: 100%.</li>
      </ul>
      <A n="10.4">Verplaatsing van een Training naar een andere datum geldt niet als annulering wanneer dit in onderling overleg gebeurt; al gemaakte kosten kunnen daarbij worden doorbelast.</A>
      <A n="10.5">Bij overmacht, zoals plotselinge ziekte, zoeken partijen in redelijkheid samen naar een passende oplossing.</A>
      <A n="10.6">Voor afspraken binnen UWV-trajecten gelden daarnaast de afspraken die met UWV zijn gemaakt.</A>

      <h2>Artikel 11. Annulering en tussentijdse beëindiging van opdrachten</h2>
      <A n="11.1">Annuleert Opdrachtgever een Overeenkomst vóór aanvang, dan worden de al gemaakte kosten en de al verrichte voorbereiding in rekening gebracht.</A>
      <A n="11.2">Bij tussentijdse beëindiging is Opdrachtgever de vergoeding verschuldigd voor het al uitgevoerde deel van de Overeenkomst, waaronder de intake en voorbereiding.</A>
      <A n="11.3">Heeft een Consument een pakketprijs vooruitbetaald, dan wordt bij tussentijdse beëindiging het niet-genoten deel naar evenredigheid gerestitueerd, onder aftrek van het al uitgevoerde deel.</A>
      <A n="11.4">De Deelnemer kan de begeleidingsrelatie op ieder moment beëindigen, met inachtneming van de hierover gemaakte afspraken en van dit artikel.</A>
      <A n="11.5">Vizier op Scherp mag de Overeenkomst beëindigen als voortzetting in redelijkheid niet van haar kan worden gevergd, bijvoorbeeld bij het herhaaldelijk niet nakomen van afspraken door Opdrachtgever of Deelnemer, of als het doel van de begeleiding redelijkerwijs niet meer te bereiken is. Vizier op Scherp deelt dat besluit schriftelijk en onderbouwd mee en brengt alleen het al uitgevoerde deel in rekening.</A>

      <h2>Artikel 12. Coachingpool-jaarafspraken</h2>
      <A n="12.1">Voor een coachingpool-jaarafspraak worden looptijd, omvang, prijsafspraken, verlenging en opzegging vastgelegd in de betreffende Overeenkomst. Die afspraken gaan voor op deze voorwaarden.</A>
      <A n="12.2">Deze voorwaarden blijven van toepassing op alles wat in de jaarafspraak niet is geregeld.</A>

      <h2>Artikel 13. Bedenktijd voor Consumenten</h2>
      <A n="13.1">Sluit een Consument de Overeenkomst op afstand (bijvoorbeeld via e-mail, telefoon of de website), dan geldt een wettelijke bedenktijd van 14 dagen na totstandkoming. Binnen die termijn kan de Consument de Overeenkomst zonder opgave van redenen herroepen.</A>
      <A n="13.2">Herroepen kan met een bericht aan <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a> of met het modelformulier voor herroeping dat als bijlage bij deze voorwaarden is opgenomen. Het gebruik van het formulier is niet verplicht; elke ondubbelzinnige verklaring volstaat. Vizier op Scherp bevestigt de ontvangst van een herroeping onverwijld.</A>
      <A n="13.3">Wil de Consument dat de dienstverlening al tijdens de bedenktijd start, dan verzoekt hij daar uitdrukkelijk om. Herroept de Consument daarna alsnog, dan is een evenredige vergoeding verschuldigd voor het deel dat al is geleverd.</A>
      <A n="13.4">Het herroepingsrecht vervalt als de Overeenkomst binnen de bedenktijd volledig is uitgevoerd, met uitdrukkelijke voorafgaande instemming van de Consument en nadat deze heeft verklaard afstand te doen van het herroepingsrecht.</A>
      <A n="13.5">Bij herroeping betaalt Vizier op Scherp reeds ontvangen bedragen, onder aftrek van een eventuele evenredige vergoeding als bedoeld in 13.3, binnen 14 dagen terug.</A>

      <h2>Artikel 14. UWV-trajecten</h2>
      <A n="14.1">Werkfit- en Naar Werk-trajecten worden uitgevoerd in opdracht van UWV. Voor de Deelnemer zijn aan deze trajecten geen kosten verbonden.</A>
      <A n="14.2">Op deze trajecten zijn de voorwaarden, rapportageafspraken en kwaliteitseisen van UWV van toepassing. Deze voorwaarden gelden aanvullend, voor zover ze daarmee niet in strijd zijn.</A>

      <h2>Artikel 15. Intellectueel eigendom</h2>
      <A n="15.1">Alle rechten op materialen van Vizier op Scherp, waaronder werkboeken, leidraden, formats, modellen en rapportages, blijven bij Vizier op Scherp of haar licentiegevers.</A>
      <A n="15.2">Deelnemer en Opdrachtgever mogen deze materialen gebruiken voor het doel waarvoor ze zijn verstrekt. Verspreiding buiten de eigen organisatie of commercieel gebruik is alleen toegestaan met voorafgaande schriftelijke toestemming van Vizier op Scherp.</A>

      <h2>Artikel 16. Aansprakelijkheid</h2>
      <A n="16.1">Vizier op Scherp is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.</A>
      <A n="16.2">Iedere aansprakelijkheid van Vizier op Scherp is beperkt tot het bedrag dat Opdrachtgever voor de betreffende Overeenkomst aan Vizier op Scherp heeft betaald, en bij duurovereenkomsten tot de vergoeding over de laatste drie maanden. Is de aansprakelijkheid gedekt door een verzekering van Vizier op Scherp, dan is de aansprakelijkheid beperkt tot het bedrag dat de verzekeraar in het betreffende geval uitkeert.</A>
      <A n="16.3">De beperkingen in dit artikel gelden niet bij opzet of bewuste roekeloosheid van Vizier op Scherp, en niet voor schade door dood of lichamelijk letsel. Voor Consumenten gelden de beperkingen alleen voor zover de wet dat toestaat.</A>
      <A n="16.4">Vorderingen en verweren die zijn gegrond op de stelling dat Vizier op Scherp is tekortgeschoten, vervallen door verloop van zes maanden na het einde van de Overeenkomst waarop zij betrekking hebben. Voor de Consument is deze termijn twaalf maanden.</A>

      <h2>Artikel 17. Overmacht</h2>
      <A n="17.1">Bij overmacht worden de verplichtingen van Vizier op Scherp opgeschort zolang de overmacht duurt. Onder overmacht valt iedere omstandigheid buiten de invloed van Vizier op Scherp waardoor nakoming redelijkerwijs niet kan worden gevergd, zoals ziekte zonder vervangingsmogelijkheid, storingen bij leveranciers of overheidsmaatregelen.</A>
      <A n="17.2">Duurt de overmacht langer dan 60 dagen, dan mogen beide partijen de Overeenkomst schriftelijk beëindigen voor het nog niet uitgevoerde deel, zonder verplichting tot schadevergoeding. Het al uitgevoerde deel wordt afgerekend.</A>

      <h2>Artikel 18. Klachten</h2>
      <A n="18.1">Partijen streven ernaar ontevredenheid zo snel mogelijk bespreekbaar te maken en samen op te lossen.</A>
      <A n="18.2">Een formele klacht over de dienstverlening of de factuur wordt schriftelijk gemeld via <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a>, zo spoedig mogelijk en uiterlijk binnen 21 dagen nadat het handelen of nalaten waarop de klacht ziet zich voordeed, dan wel binnen 21 dagen nadat dit redelijkerwijs kon worden geconstateerd.</A>
      <A n="18.3">Vizier op Scherp bevestigt de ontvangst van een klacht binnen één week en geeft uiterlijk drie weken daarna een onderbouwde schriftelijke reactie. Klachten worden vertrouwelijk behandeld en geregistreerd.</A>
      <A n="18.4">Acht Vizier op Scherp de klacht terecht, dan doet zij, met inachtneming van wat in artikel 16 en 17 is bepaald, een voorstel voor herstel of compensatie.</A>
      <A n="18.5">Betreft de klacht het handelen van een Coach die is aangesloten bij een beroepsvereniging of kwaliteitsregister, dan kan de klacht na de afhandeling door Vizier op Scherp ook worden voorgelegd aan de klachtinstantie van die vereniging. Voor Coaches die zijn aangesloten bij Noloc is dat de Raad voor Klachtenbehandeling van Noloc; voor Coaches die zijn aangesloten bij NOBCO geldt de klachtenprocedure van die vereniging. Deze regelingen zien op het handelen van de betrokken Coach.</A>
      <A n="18.6">Is de betrokken Coach niet bij een beroepsvereniging of kwaliteitsregister aangesloten, dan toetst Vizier op Scherp de klacht aan dezelfde maatstaf, namelijk de uitgangspunten van de Gedragscode als bedoeld in artikel 4.3.</A>
      <A n="18.7">Een klacht schort de betalingsverplichting niet op, behoudens de wettelijke rechten van de Consument.</A>

      <h2>Artikel 19. Wijziging van deze voorwaarden</h2>
      <A n="19.1">Vizier op Scherp mag deze voorwaarden wijzigen. Op lopende Overeenkomsten blijft de versie van toepassing die gold bij het sluiten van de Overeenkomst, tenzij de wijziging redelijk is en tijdig is aangekondigd. Een Consument mag de Overeenkomst opzeggen als een wijziging voor hem of haar een wezenlijke verzwaring betekent.</A>

      <h2>Artikel 20. Toepasselijk recht en geschillen</h2>
      <A n="20.1">Op alle Overeenkomsten is Nederlands recht van toepassing.</A>
      <A n="20.2">Geschillen worden voorgelegd aan de rechtbank Noord-Holland, locatie Haarlem, tenzij de wet dwingend anders bepaalt. Een Consument mag binnen een maand nadat Vizier op Scherp zich op deze bepaling beroept, kiezen voor de volgens de wet bevoegde rechter.</A>

      <h2>Bijlage: Modelformulier voor herroeping</h2>
      <p className="legal-form-intro">Dit formulier alleen invullen en terugsturen als u de overeenkomst wilt herroepen. Gebruik van dit formulier is niet verplicht; een eigen, ondubbelzinnig bericht volstaat ook.</p>
      <div className="legal-form-actions">
        <button type="button" className="btn btn-outline" onClick={() => typeof window !== "undefined" && window.print()}>Print dit formulier</button>
      </div>
      <div className="legal-form-card">
        <p><strong>Aan:</strong></p>
        <p className="address-block">
          <span>Vizier op Scherp</span>
          <span>Klein Heiligland 84, 2011 EJ Haarlem</span>
          <span><a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a></span>
        </p>
        <p>Ik deel u hierbij mede dat ik onze overeenkomst betreffende de levering van de volgende dienst herroep:</p>
        <div className="legal-form-field"><label>Omschrijving van de dienst</label><div className="legal-form-line" /></div>
        <div className="legal-form-field"><label>Datum waarop de overeenkomst is gesloten</label><div className="legal-form-line" /></div>
        <div className="legal-form-field"><label>Naam consument</label><div className="legal-form-line" /></div>
        <div className="legal-form-field"><label>Adres consument</label><div className="legal-form-line" /></div>
        <div className="legal-form-field"><label>Datum</label><div className="legal-form-line" /></div>
        <div className="legal-form-field"><label>Handtekening consument (alleen als dit formulier op papier wordt ingediend)</label><div className="legal-form-line" /></div>
      </div>

      <div className="legal-facet">
        <div className="legal-facet-inner">
          <h2>Vragen over deze voorwaarden?</h2>
          <p>Mail ons gerust via <a href="mailto:hallo@vizieropscherp.nl">hallo@vizieropscherp.nl</a> of plan een kennismaking.</p>
          <a className="btn btn-outline" href="/kennismaken">Neem contact op</a>
        </div>
      </div>
    </LegalLayout>
  );
}
