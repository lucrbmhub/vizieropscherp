/* Talentenscan 1.5. Alle uitspraken, uitslagteksten en rekenregels staan in het object SCAN hieronder.
   De rekenfunctie berekenUitslag staat los van de schermen. Verhoog na een wijziging VERSIE in src/routes/inzichten.talentenscan.tsx. */
/* =========================================================
   Talentenscan Vizier op Scherp, versie 1.3 (20-11-2026)
   1. SCAN: alle uitspraken, teksten en rekenregels. Pas inhoud alleen hier aan.
   2. Rekenregels: pure functies, ook buiten de browser te testen.
   3. Schermen en uitslag in de browser.
   Bronnen: claude/talentenscan-1-inhoud.md en claude/talentenscan-2-uitslag.md
   ========================================================= */

/* ---------- 1. Inhoud en regels ---------- */
const SCAN = {
  versie: "1.5",
  opslagSleutel: "vos-talentenscan-v1",
  totaalVragen: 55,

  regels: {
    sterkVanafSom: 14,        /* niveau sterk: gemiddelde 3,5 of hoger */
    middenVanafSom: 10,       /* niveau midden: som 10 tot en met 13; laag: som 9 of minder */
    netBuitenMaxVerschil: 2,  /* net buiten de top drie: plek 4 tot en met 7, sterk en hoogstens 2 punten onder nummer drie */
    laagsteAantal: 2,         /* de twee laagste scores (plek 8 en 9) krijgen een eigen blok; plek 4 tot en met 7 geen tekst */
    energieHoogVanaf: 4,      /* energie 4 of 5 is hoog, 1 of 2 laag, 3 neutraal */
    vlakMaxVerschilSom: 2,    /* verschil hoogste en laagste som 2 of minder: vlak profiel */
    vlakHoogVanafSom: 16,     /* vlak en laagste gemiddelde 4,0 of hoger */
    vlakLaagTotSom: 8,        /* vlak en hoogste gemiddelde 2,0 of lager */
    voorzichtigTotSom: 13,    /* niet vlak en hoogste gemiddelde onder 3,5 */
    kiesbaarVanaf: 4,         /* jouw vijf: uitspraken met een 4 of 5 */
    kiesbaarTerugval: 3,      /* minder dan vijf? dan ook de 3's */
    aantalKeuzes: 5,
    perScherm: 6              /* uitspraken per scherm in deel 1 */
  },

  schalen: {
    uitspraak: ["Niet mee eens", "Weinig mee eens", "Half mee eens", "Grotendeels mee eens", "Volledig mee eens"],
    tegenpool: ["A past helemaal bij mij", "A past meer bij mij", "Allebei evenveel", "B past meer bij mij", "B past helemaal bij mij"],
    tegenpoolKort: ["A", "Meer A", "Allebei", "Meer B", "B"],
    energie: ["Kost me veel energie", "Kost me energie", "Neutraal", "Geeft me energie", "Geeft me veel energie"]
  },

  clusters: [
    { code: "DE", naam: "Denken", omschrijving: "begrijpen, analyseren, problemen oplossen",
      uitspraken: {
        DE1: "Ik wil graag weten hoe iets in elkaar zit.",
        DE2: "Bij een probleem zoek ik eerst uit wat de oorzaak is.",
        DE3: "Ik zie snel verbanden die anderen missen.",
        DE4: "Collega's vragen mij om mee te denken als ze ergens niet uitkomen." },
      energie: "Uitzoeken hoe iets werkt en problemen oplossen",
      tekst: "Je wilt begrijpen hoe iets werkt en waarom. Bij een probleem zoek je eerst de oorzaak en je ziet verbanden die anderen missen. Daarom vragen collega's je om mee te denken.",
      doorschieten: "Soms blijf je analyseren terwijl er al gekozen kan worden.",
      vragen: ["Over welke vraag in je werk denk je nu het liefst mee?", "Wanneer weet je genoeg om te beginnen?"],
      laagste: {
        ontwikkelen: "Vraag bij een probleem eerst een paar keer waarom, voordat je een oplossing kiest.",
        slim: "Werk met een vast stappenplan voor problemen die vaker terugkomen.",
        delegeren: "Laat een collega die graag uitzoekt hoe iets zit de analyse doen. Bespreek samen de uitkomst." } },

    { code: "CR", naam: "Creëren", omschrijving: "ideeën, verbeelding, vernieuwen",
      uitspraken: {
        CR1: "Ik bedenk makkelijk nieuwe ideeën.",
        CR2: "Ik zie snel hoe iets anders kan.",
        CR3: "Ik kan me goed voorstellen hoe iets wordt voordat het er is.",
        CR4: "Collega's komen bij mij als ze een frisse blik nodig hebben." },
      energie: "Nieuwe ideeën bedenken en dingen anders aanpakken",
      tekst: "Je bedenkt makkelijk nieuwe ideeën en ziet hoe iets anders kan. Je brengt een frisse blik in situaties die vastzitten. Je ziet al voor je hoe iets wordt voordat het er is.",
      doorschieten: "Soms begin je aan een nieuw idee voordat het vorige af is.",
      vragen: ["Waar is jouw frisse blik nu het meest nodig?", "Welk idee van jou verdient het om echt uitgevoerd te worden?"],
      laagste: {
        ontwikkelen: "Bedenk bij een vraag eerst drie mogelijke oplossingen voordat je kiest.",
        slim: "Kijk hoe anderen iets vergelijkbaars hebben aangepakt en pas dat aan op jouw situatie.",
        delegeren: "Laat het bedenken over aan iemand met veel ideeën. Jij helpt bij het kiezen en uitwerken." } },

    { code: "VE", naam: "Verbinden", omschrijving: "contact, samenbrengen, iedereen mee laten doen",
      uitspraken: {
        VE1: "Ik maak makkelijk contact met nieuwe mensen.",
        VE2: "Als collega's het niet eens zijn, help ik ze om er samen uit te komen.",
        VE3: "Ik zorg dat iedereen in een groep mee kan doen.",
        VE4: "Collega's zien mij als iemand die mensen bij elkaar brengt." },
      energie: "Contact leggen en mensen bij elkaar brengen",
      tekst: "Je brengt mensen bij elkaar en zorgt dat iedereen mee kan doen. Je legt makkelijk contact. Als collega's het niet eens zijn, help je ze om er samen uit te komen.",
      doorschieten: "Soms let je zo op de sfeer dat je je eigen mening inslikt.",
      vragen: ["Welke mensen in je werk zou je met elkaar in contact willen brengen?", "Waar houd je je mening nu voor je om de vrede te bewaren?"],
      laagste: {
        ontwikkelen: "Maak elke week bewust contact met één collega buiten je eigen team.",
        slim: "Neem naar een overleg of borrel twee vaste vragen mee die je aan iedereen kunt stellen.",
        delegeren: "Laat het samenbrengen van mensen over aan een collega die dat graag doet. Sluit zelf aan waar het voor je werk telt." } },

    { code: "ZO", naam: "Zorgen", omschrijving: "aandacht, luisteren, helpen",
      uitspraken: {
        ZO1: "Ik merk snel hoe het met iemand gaat, ook als die er niets over zegt.",
        ZO2: "Ik kan luisteren zonder meteen met een oplossing te komen.",
        ZO3: "Ik help anderen graag verder, ook als dat niet mijn taak is.",
        ZO4: "Mensen vertellen mij makkelijk wat hen bezighoudt." },
      energie: "Er zijn voor anderen en goed luisteren",
      tekst: "Je hebt oog voor hoe het met anderen gaat. Je merkt snel als iemand ergens mee zit en je luistert zonder meteen een oplossing te geven. Mensen vertellen je makkelijk wat hen bezighoudt.",
      doorschieten: "Soms zorg je zo goed voor anderen dat je jezelf vergeet.",
      vragen: ["Bij wie haal jij zelf steun?", "Hoeveel van je energie gaat nu naar anderen?"],
      laagste: {
        ontwikkelen: "Vraag in een gesprek eerst hoe het met de ander gaat. Luister tot het einde voordat je reageert.",
        slim: "Zet een vast moment in je agenda om te vragen hoe het met je collega's gaat.",
        delegeren: "Verwijs iemand die ergens mee zit naar iemand die daar beter in is, zoals een leidinggevende of vertrouwenspersoon." } },

    { code: "OR", naam: "Organiseren", omschrijving: "overzicht, structuur, nauwkeurigheid",
      uitspraken: {
        OR1: "Ik houd makkelijk overzicht, ook als er veel tegelijk gebeurt.",
        OR2: "Kleine fouten vallen mij snel op.",
        OR3: "Ik breng graag structuur aan waar die ontbreekt.",
        OR4: "Als er iets geregeld moet worden, komen collega's bij mij." },
      energie: "Overzicht houden en dingen regelen",
      tekst: "Je houdt overzicht en brengt structuur aan. Je ziet snel waar iets niet klopt. Als er iets geregeld moet worden, komen collega's bij jou.",
      doorschieten: "Soms neem je regelwerk op je dat ook bij een ander kan liggen.",
      vragen: ["Welke taak die jij nu regelt, kan een ander overnemen?", "Waar mist nu overzicht dat jij kunt brengen?"],
      laagste: {
        ontwikkelen: "Begin elke week met tien minuten plannen: wat moet er af, en wanneer?",
        slim: "Gebruik vaste lijsten, sjablonen of een planningstool, zodat je minder hoeft te onthouden.",
        delegeren: "Laat het regelwerk over aan een collega die graag organiseert. Neem in ruil iets over wat jou beter ligt." } },

    { code: "ON", naam: "Ondernemen", omschrijving: "initiatief, uitdaging, zelf een weg vinden",
      uitspraken: {
        ON1: "Ik neem uit mezelf initiatief als er iets moet gebeuren.",
        ON2: "Ik zoek nieuwe uitdagingen op, ook als ik niet zeker weet of het lukt.",
        ON3: "Als ik vastloop, vind ik zelf een weg.",
        ON4: "Als er iets nieuws opgepakt moet worden, kijken collega's naar mij." },
      energie: "Initiatief nemen en nieuwe dingen oppakken",
      tekst: "Je komt uit jezelf in beweging. Je neemt initiatief, zoekt nieuwe uitdagingen op en vindt een weg als je vastloopt. Bij iets nieuws kijken collega's naar jou.",
      doorschieten: "Soms pak je zoveel op dat je te veel tegelijk doet.",
      vragen: ["Welke uitdaging ligt er nu die bij je past?", "Wat laat je liggen om ruimte te maken voor iets nieuws?"],
      laagste: {
        ontwikkelen: "Neem elke maand één klein initiatief dat je zelf kiest.",
        slim: "Vraag om een concrete opdracht met een deadline. Zo kom je makkelijker in beweging.",
        delegeren: "Laat een collega die graag nieuwe dingen oppakt het voortouw nemen. Jij zorgt voor een stevige bijdrage." } },

    { code: "UI", naam: "Uitdrukken", omschrijving: "uitleggen, schrijven, overtuigen",
      uitspraken: {
        UI1: "Ik kan iets ingewikkelds in eenvoudige woorden uitleggen.",
        UI2: "Schrijven gaat me makkelijk af.",
        UI3: "Ik kan anderen meekrijgen in mijn ideeën.",
        UI4: "Als er iets uitgelegd of gepresenteerd moet worden, vragen collega's mij." },
      energie: "Uitleggen, presenteren en schrijven",
      tekst: "Je kunt goed overbrengen wat je bedoelt. Je legt ingewikkelde dingen eenvoudig uit, je schrijft makkelijk en je krijgt anderen mee in je ideeën.",
      doorschieten: "Soms ben je zo aan het woord dat je minder hoort wat anderen vinden.",
      vragen: ["Waar kan jouw uitleg nu het meeste verschil maken?", "Wanneer wil je bewust meer luisteren dan praten?"],
      laagste: {
        ontwikkelen: "Oefen een presentatie vooraf hardop en vraag daarna om één tip.",
        slim: "Zet vooraf je drie belangrijkste punten op een rij en houd die bij de hand.",
        delegeren: "Laat een collega die goed schrijft of presenteert het verhaal brengen. Jij levert de inhoud." } },

    { code: "VO", naam: "Volhouden", omschrijving: "afmaken, terugveren, betrouwbaar zijn",
      uitspraken: {
        VO1: "Ik maak af waar ik aan begin.",
        VO2: "Na een tegenslag pak ik de draad snel weer op.",
        VO3: "Ik kom mijn afspraken na, ook als het druk is.",
        VO4: "Collega's weten dat ze op mij kunnen bouwen." },
      energie: "Doorzetten en je afspraken nakomen",
      tekst: "Je maakt af waar je aan begint. Je komt je afspraken na, ook als het druk is, en na een tegenslag pak je de draad weer op. Collega's weten dat ze op je kunnen bouwen.",
      doorschieten: "Soms ga je door terwijl stoppen of bijsturen verstandiger is.",
      vragen: ["Welke klus verdient jouw doorzettingsvermogen nu het meest?", "Waar zou je eerder willen stoppen of bijsturen?"],
      laagste: {
        ontwikkelen: "Knip een grote klus op in kleine stappen en vink elke stap af.",
        slim: "Spreek een deadline af met iemand anders. Dat geeft je een stok achter de deur.",
        delegeren: "Laat het afronden over aan een collega die graag dingen afmaakt. Jij pakt het begin op." } },

    { code: "ST", naam: "Stevigheid", omschrijving: "eigen oordeel, grenzen, rust onder druk",
      uitspraken: {
        ST1: "Ik vertrouw op mijn eigen oordeel.",
        ST2: "Ik geef duidelijk aan waar mijn grenzen liggen.",
        ST3: "Als de druk oploopt, blijf ik rustig.",
        ST4: "Collega's zien mij als iemand die stevig staat." },
      energie: "Je grenzen aangeven en rustig blijven onder druk",
      tekst: "Je staat stevig, ook als het spannend wordt. Je vertrouwt op je eigen oordeel, je geeft aan waar je grenzen liggen en je blijft rustig als de druk oploopt.",
      doorschieten: "Soms lijk je zo rustig dat anderen niet zien wanneer het jou te veel wordt.",
      vragen: ["In welke situatie wil je je grens eerder aangeven?", "Wie weet het als het jou te veel wordt?"],
      laagste: {
        ontwikkelen: "Bedenk vooraf wat je zegt als iets je te veel wordt, en oefen dat een keer hardop.",
        slim: "Zeg niet meteen ja, maar vraag bedenktijd. Bijvoorbeeld tot morgen.",
        delegeren: "Moet alles tegelijk? Laat je leidinggevende dan kiezen wat voorgaat." } }
  ],

  /* Vaste volgorde in deel 1: nooit twee uit hetzelfde cluster achter elkaar */
  volgorde: ["DE1","OR1","VO4","ST1","ON2","CR2","ZO4","UI3","VE3","ON3","ZO1","UI4",
             "DE2","VO1","CR3","VE4","ST2","OR2","CR4","VO2","OR3","ZO2","ON4","DE3",
             "VE1","ST3","UI1","DE4","ZO3","ON1","UI2","OR4","CR1","VO3","ST4","VE2"],

  tegenpolen: [
    { code: "TP1", titel: "Besluiten nemen",
      a: { tekst: "Ik neem snel een besluit.", talent: "Besluitvaardig", zin: "Je hakt knopen door, ook als nog niet alles bekend is." },
      b: { tekst: "Ik neem de tijd om alles af te wegen voordat ik besluit.", talent: "Weloverwogen", zin: "Je weegt dingen zorgvuldig af, zodat een besluit goed doordacht is." } },
    { code: "TP2", titel: "Samen of alleen",
      a: { tekst: "Ik werk het liefst samen met anderen.", talent: "Samenwerkend", zin: "Je komt het best tot je recht als je samen met anderen aan iets werkt." },
      b: { tekst: "Ik werk het liefst zelfstandig.", talent: "Zelfstandig", zin: "Je werkt goed op eigen kracht en hebt weinig sturing nodig." } },
    { code: "TP3", titel: "Diepte of afwisseling",
      a: { tekst: "Ik werk het liefst geconcentreerd aan één taak.", talent: "Geconcentreerd", zin: "Je kunt je lang op één taak richten en gaat de diepte in." },
      b: { tekst: "Ik wissel het liefst af tussen verschillende taken.", talent: "Wendbaar", zin: "Je schakelt makkelijk tussen taken en houdt van afwisseling." } },
    { code: "TP4", titel: "Zichtbaarheid",
      a: { tekst: "Ik zorg dat anderen weten waar ik mee bezig ben.", talent: "Zichtbaar", zin: "Je zorgt dat anderen weten wat je doet, zodat je werk gezien wordt." },
      b: { tekst: "Ik laat mijn werk liever voor zich spreken.", talent: "Nuchter", zin: "Je hebt weinig behoefte aan aandacht en laat je werk voor zich spreken." } },
    { code: "TP5", titel: "Leren",
      a: { tekst: "Ik begrijp iets het liefst eerst, voordat ik het ga doen.", talent: "Beschouwend", zin: "Je wilt eerst begrijpen hoe iets in elkaar zit voordat je begint." },
      b: { tekst: "Ik leer het liefst door het gewoon te doen.", talent: "Praktijkgericht", zin: "Je leert door te doen en gaat gewoon aan de slag." } },
    { code: "TP6", titel: "Resultaat of weg",
      a: { tekst: "Bij een klus denk ik vooral aan het resultaat.", talent: "Resultaatgericht", zin: "Je houdt het doel voor ogen en zorgt dat er iets af komt." },
      b: { tekst: "Bij een klus let ik vooral op de weg ernaartoe.", talent: "Procesbewust", zin: "Je let op hoe het werk gebeurt en hoe mensen erin meegaan." } },
    { code: "TP7", titel: "Leiding",
      a: { tekst: "In een groep neem ik graag de leiding.", talent: "Richtinggevend", zin: "Je neemt graag de leiding en geeft een groep richting." },
      b: { tekst: "In een groep draag ik het liefst bij zonder de leiding te hebben.", talent: "Bijdragend", zin: "Je zet je volledig in voor de groep, zonder dat je de leiding hoeft te hebben." } },
    { code: "TP8", titel: "Terugkijken",
      a: { tekst: "Als een klus af is, ga ik met energie door naar de volgende.", talent: "Vooruitgericht", zin: "Je kijkt vooruit en gaat met energie door naar wat er komt." },
      b: { tekst: "Als een klus af is, kijk ik eerst terug op wat ik ervan leer.", talent: "Reflectief", zin: "Je kijkt terug op wat je deed en haalt daar lessen uit." } },
    { code: "TP9", titel: "Als iets je niet bevalt",
      a: { tekst: "Als iets me niet bevalt, zeg ik dat meteen.", talent: "Direct", zin: "Je zegt wat je vindt, zodat problemen snel op tafel komen." },
      b: { tekst: "Als iets me niet bevalt, kan ik het ook laten gaan.", talent: "Verdraagzaam", zin: "Je kunt veel hebben van anderen en houdt de verhoudingen goed." } },
    { code: "TP10", titel: "Ambitie",
      a: { tekst: "Ik wil in mijn werk steeds een stap verder komen.", talent: "Ambitieus", zin: "Je wilt groeien en zoekt steeds een volgende stap." },
      b: { tekst: "Ik ben tevreden als mijn werk goed loopt.", talent: "Evenwichtig", zin: "Je weet wanneer iets goed genoeg is en kunt tevreden zijn met wat er is." } }
  ],

  delen: {
    1: { titel: "Uitspraken",
         instructie: ["Lees elke uitspraak en geef aan in hoeverre die bij je past. Denk aan hoe je nu bent in je werk, niet aan hoe je zou willen zijn. Twijfel je? Kies dan wat het eerst in je opkomt.",
                      "Werk je nu niet? Denk dan aan je laatste werk, een stage of vrijwilligerswerk."],
         kort: "Denk aan hoe je nu bent in je werk, niet aan hoe je zou willen zijn.",
         melding: "Beantwoord eerst alle uitspraken op dit scherm." },
    2: { titel: "Tegenpolen",
         instructie: ["Je ziet steeds twee uitspraken, A en B. Beide kanten zijn een kracht. Geef aan welke kant het meest bij je past."],
         melding: "Maak eerst bij elk paar een keuze." },
    3: { titel: "Energie",
         instructie: ["Iets wat je goed kunt, kan je toch energie kosten. Geef per onderwerp aan wat het met je energie doet."],
         melding: "Beantwoord eerst alle vragen op dit scherm." },
    4: { titel: "Jouw vijf",
         instructie: ["Kies de vijf uitspraken die het meest op jou lijken. Je kiest uit de uitspraken waar je een 4 of 5 gaf."],
         instructieTerugval: "Kies de vijf uitspraken die het meest op jou lijken. Je kiest uit de uitspraken waar je een 3, 4 of 5 gaf.",
         instructieAlles: "Dit zijn de uitspraken waar je een 3 of hoger gaf. Ze passen het meest bij jou en staan al aangevinkt.",
         melding: "Kies precies vijf uitspraken.",
         teVeel: "Je kunt er vijf kiezen. Haal eerst een vinkje weg." }
  },

  energieGroepen: [
    { code: "kracht", naam: "Talent dat energie geeft", tekst: "Dit kun je goed en het geeft je energie. Hier zit je kracht. Zoek in je werk naar meer momenten om dit in te zetten." },
    { code: "kost", naam: "Talent dat energie kost", tekst: "Dit kun je goed, maar het kost je energie. Dat kan prima, zolang er genoeg tegenover staat waar je van oplaadt. Let op dat je niet vooral hierom wordt gevraagd." },
    { code: "groei", naam: "Groeikans", tekst: "Dit geeft je energie, maar je ziet het nog niet als je sterkste kant. Juist omdat je er zin in hebt, kun je hier groeien." },
    { code: "inzet", naam: "Kun je, maar kost energie", tekst: "Dit lukt je wel, maar het kost je energie. Je kunt het inzetten als het nodig is. Let erop dat het niet het grootste deel van je werk wordt." },
    { code: "minder", naam: "Minder jouw terrein", tekst: "Dit ligt je minder en het kost je energie. Dat hoeft ook niet. Niemand is overal goed in. Kijk of je dit kunt delen met iemand voor wie het makkelijker gaat." }
  ],

  uitslag: {
    eyebrow: "Talentenscan",
    titel: "Jouw uitslag",
    intro: "Dit is wat je antwoorden laten zien. Lees het als een startpunt, niet als een oordeel.",

    /* In het kort: hoogstens één zin per soort, volgens de regels in berekenUitslag */
    kortKop: "In het kort",
    kort: {
      energieAlle: "Je drie sterkste gebieden, {k}, geven je ook energie. Daar zit je kracht.",
      energieKracht: ["{k} is een sterke kant van je en geeft je energie. Daar zit je kracht.",
                      "{k} zijn sterke kanten van je en geven je energie. Daar zit je kracht."],
      energieKost: ["{c} is een sterke kant van je, maar kost je energie.",
                    "{c} zijn sterke kanten van je, maar kosten je energie."],
      energieBeideKracht: ["{k} geeft je energie.", "{k} geven je energie."],
      energieBeideKost: ["{c} kost je juist energie, ook al is het een sterke kant.",
                         "{c} kosten je juist energie, ook al zijn het sterke kanten."],
      letOp: "Let op hoeveel van je werk daaruit bestaat.",
      vijfAlle: "Alle {m} uitspraken die je koos, komen uit {g}. Je eigen keuze bevestigt je uitslag.",
      vijfMeeste: "{n} van je {m} uitspraken komen uit {g}. Je eigen keuze bevestigt je uitslag.",
      vijfAnders: "De uitspraken die je zelf koos, komen vooral uit andere gebieden dan je top drie. Wat zie jij in jezelf dat de scores minder laten zien?",
      telwoorden: ["nul", "één", "twee", "drie", "vier", "vijf"],
      paren: [
        { a: "ZO", b: "ST",
          plus: "Je zorgt goed voor anderen en je geeft ook aan waar je grenzen liggen. Die combinatie helpt je om het vol te houden.",
          min: "Je zorgt goed voor anderen. Let erop dat je ook je eigen grenzen aangeeft." },
        { a: "DE", b: "ON",
          plus: "Je wilt dingen goed begrijpen en je komt ook in beweging. Zo blijft het niet bij nadenken.",
          min: "Je wilt dingen goed begrijpen. Let erop dat je ook op tijd een keuze maakt en begint." },
        { a: "CR", b: "VO",
          plus: "Je bedenkt makkelijk nieuwe ideeën en je maakt ook af waar je aan begint. Zo blijft het niet bij ideeën.",
          min: "Je bedenkt makkelijk nieuwe ideeën. Let erop dat je ze ook afmaakt, of zoek iemand die je daarbij helpt." }
      ]
    },

    top3: "Je drie sterkste gebieden",
    niveau: { sterk: "Sterk aanwezig", midden: "Redelijk aanwezig", laag: "Minder aanwezig" },
    netBuitenKop: "Net buiten je top drie:",
    netBuiten: ["Ook dit is een sterke kant van je.", "Ook dit zijn sterke kanten van je."],
    rij: "Al je gebieden op een rij",
    rijIntro: "Van je hoogste naar je laagste score.",
    laagsteKop: "Wat je minder makkelijk afgaat",
    laagsteIntro: "Dit zijn je twee laagste scores. Dat zegt niet dat je het niet kunt, wel dat het je meer moeite kost dan de rest. Je kunt het ontwikkelen, slim oplossen of delegeren. Kies wat bij jou en je werk past.",
    laagsteLabels: { ontwikkelen: "Ontwikkelen:", slim: "Slim oplossen:", delegeren: "Delegeren:" },
    energie: "Wat doet het met je energie?",
    polen: "Twee kanten, allebei een kracht",
    polenIntro: "Je duidelijkste keuzes staan bovenaan.",
    beideKop: "Allebei evenveel",
    beideIntro: "Hier passen beide kanten bij je. Je kiest wat de situatie vraagt.",
    vijf: "Jouw vijf uitspraken",
    vijfMinder: "Jouw uitspraken",
    vijfIntro: "Dit zijn de uitspraken waarvan jij zegt: dit ben ik.",
    doorschieten: "Waar het kan doorschieten:",
    nadenken: "Om over na te denken:",
    stapKop: "Je volgende stap",
    stapTekst: "Kies één vraag uit je uitslag om deze week over na te denken. Bespreek hem met een collega of iemand die je goed kent. Wil je er verder mee? Plan dan een kennismaking met een van onze coaches.",
    stapKnop: "Plan een kennismaking",
    stapLink: "/kennismaken",
    stapPrint: "Een kennismaking plan je via vizieropscherp.nl/kennismaken.",
    pdf: "Download je uitslag als pdf",
    /* Poort voor de rest van de uitslag, alleen met data-poort="uitslag" (de site). In het kort en de top
       drie zijn vrij. Daaronder staat deze kaart; de knop opent het formulier van de site (WorkbookGate).
       Na het opslaan stuurt de site de gebeurtenis "vos:ontgrendeld" en toont de scan de hele uitslag.
       De pdf-knop print dan direct. */
    poort: {
      kop: "Je hele uitslag",
      tekst: "Dit is het begin van je uitslag. Laat je e-mailadres achter, dan zie je ook:",
      inhoud: {
        vijf: "De vijf uitspraken die je zelf koos",
        vijfMinder: "De uitspraken die je zelf koos",
        rij: "Al je gebieden op een rij",
        laagste: "Wat je minder makkelijk afgaat, met tips",
        energie: "Wat je energie geeft en wat energie kost",
        polen: "Welke kanten van jou een kracht zijn",
        pdf: "Je uitslag als pdf"
      },
      knop: "Bekijk je hele uitslag",
      noot: "Je antwoorden blijven op je eigen apparaat. Alleen als je het vakje aanvinkt, mailen we je.",
      formulier: {
        bovenregel: "Talentenscan",
        titel: "Je hele uitslag",
        tekst: "Vul je e-mailadres in, dan zie je meteen je hele uitslag. Daarna kun je hem ook als pdf downloaden.",
        vinkje: "Ik vind het goed dat Vizier op Scherp me mailt over mijn uitslag of over coaching. Afmelden kan altijd.",
        knop: "Toon je hele uitslag",
        noot: "Je antwoorden blijven op je eigen apparaat. We bewaren alleen je naam en e-mailadres. Alleen als je het vakje aanvinkt, mailen we je."
      }
    },
    /* Teksten voor het downloadformulier van de site (WorkbookGate), alleen gebruikt met data-pdf="poort" */
    pdfPoort: {
      bovenregel: "Talentenscan",
      titel: "Je uitslag als pdf",
      tekst: "Laat je e-mailadres achter, dan kun je je uitslag meteen downloaden.",
      vinkje: "Ik vind het goed dat Vizier op Scherp me mailt over mijn uitslag of over coaching. Afmelden kan altijd.",
      knop: "Download je uitslag",
      noot: "Je antwoorden blijven op je eigen apparaat. We bewaren alleen je naam en e-mailadres. Alleen als je het vakje aanvinkt, mailen we je."
    },
    opnieuw: "Doe de scan opnieuw",
    disclaimer: "Deze scan is een hulpmiddel om over je talenten na te denken. Het is geen psychologische test.",
    voorzichtig: "Je was voorzichtig met hoge scores. Dit zijn de gebieden die er voor jou het meest uitspringen.",
    vlakKop: "Over je uitslag",
    vlak: {
      hoog: "Je gaf jezelf bijna overal een hoge score. Dat kan kloppen. Alleen zegt je uitslag dan weinig over waar jij het verschil maakt. Kijk daarom vooral naar je vijf uitspraken en naar wat je energie geeft. Of vraag een collega welke drie gebieden het best bij jou passen.",
      midden: "Je koos bijna overal het midden. Misschien vond je het lastig om jezelf te beoordelen, of liggen je talenten breed. Kijk vooral naar je vijf uitspraken en naar de tegenpolen. Je kunt de scan ook nog eens doen en bij twijfel kiezen wat het eerst in je opkomt.",
      laag: "Je gaf jezelf bijna overal een lage score. Dat zegt vaak meer over hoe je nu naar jezelf kijkt dan over wat je kunt. Bij de tegenpolen zie je wel waar jouw kracht ligt. Een gesprek met een coach kan helpen om je talenten scherper te zien."
    },
    beideZin: "Je kunt allebei en je kiest wat de situatie vraagt.",
    neutraalSterkKop: "Sterk en neutraal:",
    neutraalSterk: "Dit kun je goed. Het kost je geen energie en geeft je ook geen extra energie.",
    neutraalKop: "Neutraal:",
    neutraal: "Dit kost je geen energie en geeft je ook geen extra energie.",
    printKop: "Talentenscan · vizieropscherp.nl/inzichten/talentenscan"
  },

  hero: {
    welkomTerug: "Welkom terug. Je was bij vraag {x} van 55. Wil je verder gaan of opnieuw beginnen?",
    welkomLaatste: "Welkom terug. Je was bij de laatste stap. Wil je verder gaan of opnieuw beginnen?",
    verder: "Verder gaan",
    klaar: "Je hebt de scan al ingevuld. Je uitslag staat hieronder.",
    bekijk: "Bekijk je uitslag"
  },

  knoppen: { vorige: "Vorige", volgende: "Volgende", uitslag: "Bekijk je uitslag" }
};

/* ---------- 2. Rekenregels ---------- */
const CLUSTERCODES = SCAN.clusters.map(function (c) { return c.code; });
const TPCODES = SCAN.tegenpolen.map(function (p) { return p.code; });
const NAAM = {};
SCAN.clusters.forEach(function (c) { NAAM[c.code] = c.naam; });

/* Gemiddelde van vier uitspraken met één decimaal, half naar boven: 3,25 wordt 3,3 */
function gemiddelde(som) {
  const tiende = Math.floor((som * 25 + 5) / 10);
  return Math.floor(tiende / 10) + "," + (tiende % 10);
}

/* Niveau van een cluster: sterk (som 14 of meer), midden (10 tot en met 13) of laag (9 of minder) */
function niveauVan(som) {
  const R = SCAN.regels;
  return som >= R.sterkVanafSom ? "sterk" : (som >= R.middenVanafSom ? "midden" : "laag");
}

/* "A", "A en B", "A, B en C" */
function lijst(a) { return a.length < 2 ? (a[0] || "") : a.slice(0, -1).join(", ") + " en " + a[a.length - 1]; }
function namen(codes) { return lijst(codes.map(function (c) { return NAAM[c]; })); }
function hoofdletter(t) { return t.charAt(0).toUpperCase() + t.slice(1); }

/* Uitspraken waaruit de deelnemer zijn vijf kiest, in scanvolgorde */
function kiesbaar(antw) {
  const R = SCAN.regels;
  let lijst = SCAN.volgorde.filter(function (k) { return (antw[k] || 0) >= R.kiesbaarVanaf; });
  if (lijst.length < R.aantalKeuzes) {
    lijst = SCAN.volgorde.filter(function (k) { return (antw[k] || 0) >= R.kiesbaarTerugval; });
  }
  return lijst;
}

function aantalTeKiezen(antw) {
  return Math.min(SCAN.regels.aantalKeuzes, kiesbaar(antw).length);
}

/* In het kort: hoogstens één zin per soort (energie, jouw vijf, combinatie), alleen als er een top drie is */
function inHetKort(u) {
  const K = SCAN.uitslag.kort;
  const zinnen = [];
  if (!u.top3.length) return zinnen;
  const meer = function (a) { return a.length > 1 ? 1 : 0; };

  /* 1. Energie in je top drie */
  const kracht = u.top3.filter(function (c) { return u.groep[c] === "kracht"; });
  const kost = u.top3.filter(function (c) { return u.groep[c] === "kost"; });
  if (kracht.length === 3) {
    zinnen.push({ regel: "energie-alle", tekst: K.energieAlle.replace("{k}", namen(kracht)) });
  } else if (kracht.length && kost.length) {
    zinnen.push({ regel: "energie-beide", tekst: K.energieBeideKracht[meer(kracht)].replace("{k}", namen(kracht)) + " " +
      K.energieBeideKost[meer(kost)].replace("{c}", namen(kost)) + " " + K.letOp });
  } else if (kracht.length) {
    zinnen.push({ regel: "energie-kracht", tekst: K.energieKracht[meer(kracht)].replace("{k}", namen(kracht)) });
  } else if (kost.length) {
    zinnen.push({ regel: "energie-kost", tekst: K.energieKost[meer(kost)].replace("{c}", namen(kost)) + " " + K.letOp });
  }

  /* 2. Jouw vijf: komt de eigen keuze overeen met de top drie? */
  const m = u.vijf.length;
  const uitTop = u.vijf.filter(function (k) { return u.top3.indexOf(k.slice(0, 2)) > -1; });
  const n = uitTop.length;
  if (m >= 3 && n * 2 > m) {
    const gebieden = u.top3.filter(function (c) { return uitTop.some(function (k) { return k.slice(0, 2) === c; }); });
    const t = n === m ? K.vijfAlle : K.vijfMeeste;
    zinnen.push({ regel: n === m ? "vijf-alle" : "vijf-meeste",
      tekst: hoofdletter(t.replace("{n}", K.telwoorden[n]).replace("{m}", K.telwoorden[m]).replace("{g}", namen(gebieden))) });
  } else if (m >= 3 && n <= 1) {
    zinnen.push({ regel: "vijf-anders", tekst: K.vijfAnders });
  }

  /* 3. Combinatie: het eerste cluster uit de top drie (in de rangorde) met een vast paar,
        als dat cluster sterk is en het andere cluster sterk (plus) of laag (min) */
  for (let i = 0; i < u.top3.length; i++) {
    const c = u.top3[i];
    const paar = K.paren.filter(function (p) { return p.a === c; })[0];
    if (!paar || u.niveau[c] !== "sterk") continue;
    const ander = u.niveau[paar.b];
    if (ander === "sterk" || ander === "laag") {
      const plus = ander === "sterk";
      zinnen.push({ regel: "paar-" + paar.a + "-" + paar.b + (plus ? "-plus" : "-min"), tekst: plus ? paar.plus : paar.min });
      break;
    }
  }
  return zinnen;
}

/* st = { antw: {DE1: 1..5, ...}, tp: {TP1: 1..5, ...}, en: {DE: 1..5, ...}, keuze: [codes] } */
function berekenUitslag(st) {
  const R = SCAN.regels;
  const som = {}, gem = {}, niveau = {};
  CLUSTERCODES.forEach(function (c) {
    som[c] = st.antw[c + "1"] + st.antw[c + "2"] + st.antw[c + "3"] + st.antw[c + "4"];
    gem[c] = gemiddelde(som[c]);
    niveau[c] = niveauVan(som[c]);
  });

  /* Rangorde: som, dan energie, dan de uitspraak over hoe anderen je zien, dan vaste volgorde */
  const rang = CLUSTERCODES.slice().sort(function (a, b) {
    return (som[b] - som[a]) || (st.en[b] - st.en[a]) ||
           (st.antw[b + "4"] - st.antw[a + "4"]) ||
           (CLUSTERCODES.indexOf(a) - CLUSTERCODES.indexOf(b));
  });

  const sommen = CLUSTERCODES.map(function (c) { return som[c]; });
  const hoogste = Math.max.apply(null, sommen);
  const laagste = Math.min.apply(null, sommen);
  let soort, top3;
  if (hoogste - laagste <= R.vlakMaxVerschilSom) {
    soort = laagste >= R.vlakHoogVanafSom ? "vlak-hoog" : (hoogste <= R.vlakLaagTotSom ? "vlak-laag" : "vlak-midden");
    top3 = [];
  } else {
    soort = hoogste <= R.voorzichtigTotSom ? "voorzichtig" : "gewoon";
    top3 = rang.slice(0, 3);
  }

  /* De twee laagste scores: de laatste twee in de rangorde, alleen als er een top drie is */
  const laagsteTwee = top3.length ? rang.slice(rang.length - R.laagsteAantal) : [];

  /* Net buiten de top drie: alleen bij een gewoon profiel, plek 4 tot en met 7,
     sterk en hoogstens 2 punten onder nummer drie */
  const netBuiten = soort === "gewoon" ? rang.slice(3, rang.length - R.laagsteAantal).filter(function (c) {
    return som[c] >= R.sterkVanafSom && som[c] >= som[top3[2]] - R.netBuitenMaxVerschil;
  }) : [];

  /* Energiegroepen: niveau en energie samen */
  const groep = {};
  CLUSTERCODES.forEach(function (c) {
    const e = st.en[c];
    const n = niveau[c];
    if (e === 3) groep[c] = "neutraal";
    else if (e >= R.energieHoogVanaf) groep[c] = n === "sterk" ? "kracht" : "groei";
    else groep[c] = n === "sterk" ? "kost" : (n === "midden" ? "inzet" : "minder");
  });

  const polen = SCAN.tegenpolen.map(function (p) {
    const v = st.tp[p.code];
    const kant = v <= 2 ? "A" : (v >= 4 ? "B" : "beide");
    return {
      code: p.code, waarde: v, kant: kant, sterkte: Math.abs(v - 3),
      naam: kant === "A" ? p.a.talent : (kant === "B" ? p.b.talent : p.a.talent + " en " + p.b.talent.toLowerCase()),
      zin: kant === "A" ? p.a.zin : (kant === "B" ? p.b.zin : SCAN.uitslag.beideZin)
    };
  });
  /* Duidelijkste keuzes eerst (1 of 5, dan 2 of 4), bij gelijke stand de vaste volgorde. "Allebei" apart. */
  const polenUitgesproken = polen.filter(function (p) { return p.kant !== "beide"; }).sort(function (a, b) {
    return (b.sterkte - a.sterkte) || (TPCODES.indexOf(a.code) - TPCODES.indexOf(b.code));
  }).map(function (p) { return p.code; });
  const polenBeide = polen.filter(function (p) { return p.kant === "beide"; }).map(function (p) { return p.code; });

  const vijf = (st.keuze || []).slice().sort(function (a, b) {
    return SCAN.volgorde.indexOf(a) - SCAN.volgorde.indexOf(b);
  });

  const u = { som: som, gem: gem, niveau: niveau, rang: rang, soort: soort, top3: top3, netBuiten: netBuiten, laagsteTwee: laagsteTwee,
              groep: groep, polen: polen, polenUitgesproken: polenUitgesproken, polenBeide: polenBeide,
              kiesbaar: kiesbaar(st.antw), vijf: vijf };
  u.kort = inHetKort(u);
  return u;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SCAN: SCAN, berekenUitslag: berekenUitslag, gemiddelde: gemiddelde, niveauVan: niveauVan,
                     inHetKort: inHetKort, kiesbaar: kiesbaar, aantalTeKiezen: aantalTeKiezen };
}

/* ---------- 3. Schermen en uitslag ---------- */
/* Start de scan op de pagina en geeft een functie terug die de luisteraars op de pagina weer opruimt.
   De losse versie start zichzelf (data-start="auto"). Op de site start en stopt de pagina de scan,
   zodat er bij wisselen van pagina geen dubbele luisteraars ontstaan. */
function startTalentenscan() {
  "use strict";
  const R = SCAN.regels;
  const $ = function (s) { return document.querySelector(s); };
  const wortel = document.querySelector(".vos");
  const CLUSTER = {};
  const UITSPRAAK = {};
  SCAN.clusters.forEach(function (c) {
    CLUSTER[c.code] = c;
    Object.keys(c.uitspraken).forEach(function (k) { UITSPRAAK[k] = c.uitspraken[k]; });
  });
  const TP = {};
  SCAN.tegenpolen.forEach(function (p) { TP[p.code] = p; });

  /* Schermen: deel 1 in blokken van zes, deel 2 in twee blokken, deel 3 en 4 elk één */
  const SCHERMEN = [];
  for (let i = 0; i < SCAN.volgorde.length; i += R.perScherm) {
    SCHERMEN.push({ deel: 1, items: SCAN.volgorde.slice(i, i + R.perScherm) });
  }
  SCHERMEN.push({ deel: 2, items: TPCODES.slice(0, 5) });
  SCHERMEN.push({ deel: 2, items: TPCODES.slice(5) });
  SCHERMEN.push({ deel: 3, items: CLUSTERCODES.slice() });
  SCHERMEN.push({ deel: 4, items: [] });

  function leeg() { return { antw: {}, tp: {}, en: {}, keuze: [], scherm: 0, klaar: false, ontgrendeld: false }; }
  let st = leeg();

  /* ---- Poort voor de uitslag (alleen op de site, data-poort="uitslag") ----
     Koppeling met het formulier van de site (WorkbookGate): dezelfde slug, dezelfde opslagsleutel
     voor ontgrendelde downloads en dezelfde gebeurtenis. */
  const POORT = { slug: "talentenscan", sleutel: "vos_downloads_ontgrendeld", gebeurtenis: "vos:ontgrendeld" };
  const poortActief = !!wortel && wortel.getAttribute("data-poort") === "uitslag";
  function ontgrendeld() {
    if (!poortActief || st.ontgrendeld) return true;
    try {
      const lijst = JSON.parse(localStorage.getItem(POORT.sleutel) || "[]");
      return Array.isArray(lijst) && lijst.indexOf(POORT.slug) > -1;
    } catch (e) { return false; }
  }
  function poortDicht() { return !ontgrendeld(); }

  /* ---- Opslag in de browser (mag ontbreken of falen) ---- */
  function geldig(v) { return Number.isInteger(v) && v >= 1 && v <= 5; }
  function schoon(d) {
    const s = leeg();
    if (!d || typeof d !== "object") return null;
    SCAN.volgorde.forEach(function (k) { if (d.antw && geldig(d.antw[k])) s.antw[k] = d.antw[k]; });
    TPCODES.forEach(function (k) { if (d.tp && geldig(d.tp[k])) s.tp[k] = d.tp[k]; });
    CLUSTERCODES.forEach(function (k) { if (d.en && geldig(d.en[k])) s.en[k] = d.en[k]; });
    if (Array.isArray(d.keuze)) s.keuze = d.keuze.filter(function (k) { return SCAN.volgorde.indexOf(k) > -1; });
    if (Number.isInteger(d.scherm) && d.scherm >= 0 && d.scherm < SCHERMEN.length) s.scherm = d.scherm;
    s.klaar = d.klaar === true;
    s.ontgrendeld = d.ontgrendeld === true;
    return s;
  }
  function bewaar() { try { localStorage.setItem(SCAN.opslagSleutel, JSON.stringify(st)); } catch (e) { /* geen opslag beschikbaar */ } }
  function laad() { try { const r = localStorage.getItem(SCAN.opslagSleutel); return r ? schoon(JSON.parse(r)) : null; } catch (e) { return null; } }
  function wis() { try { localStorage.removeItem(SCAN.opslagSleutel); } catch (e) { /* niets te wissen */ } }

  function aantalBeantwoord(s) { return Object.keys(s.antw).length + Object.keys(s.tp).length + Object.keys(s.en).length; }
  function compleet(s) {
    return Object.keys(s.antw).length === 36 && Object.keys(s.tp).length === 10 &&
           Object.keys(s.en).length === 9 && s.keuze.length === aantalTeKiezen(s.antw);
  }

  /* ---- Hulpjes ---- */
  function el(tag, attrs) {
    const n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      const v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") n.className = v;
      else n.setAttribute(k, v === true ? "" : v);
    });
    for (let i = 2; i < arguments.length; i++) {
      const kid = arguments[i];
      if (kid === null || kid === undefined || kid === false) continue;
      if (Array.isArray(kid)) kid.forEach(function (x) { if (x) n.append(x); });
      else n.append(kid);
    }
    return n;
  }
  /* Telling zonder antwoorden: de site kan hier zijn statistieken aan koppelen */
  function meld(gebeurtenis) {
    try { document.dispatchEvent(new CustomEvent("talentenscan", { detail: { gebeurtenis: gebeurtenis } })); } catch (e) { /* geen telling */ }
  }
  const rustig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function naar(node) { node.scrollIntoView({ behavior: rustig ? "auto" : "smooth", block: "start" }); }

  /* ---- Elementen ---- */
  const sectie = $("#scan-sectie");
  const kaart = $("#scan-kaart");
  const form = $("#scan-form");
  const vragen = $("#scherm-vragen");
  const melding = $("#scherm-melding");
  const knopVorige = $("#knop-vorige");
  const knopVolgende = $("#knop-volgende");
  const uitslag = $("#uitslag");


  /* ---- Opties (keuzerondjes) ---- */
  function opties(naam, waarde, zichtbaar, voorlezen, extra) {
    const wrap = el("div", { class: "opties" + (extra ? " " + extra : "") });
    for (let v = 1; v <= 5; v++) {
      const id = naam + "-" + v;
      const input = el("input", { type: "radio", name: naam, id: id, value: String(v) });
      if (waarde === v) input.checked = true;
      wrap.append(el("div", { class: "optie" }, input,
        el("label", { for: id }, el("span", { "aria-hidden": "true" }, zichtbaar[v - 1]), el("span", { class: "sr" }, voorlezen[v - 1]))));
    }
    return wrap;
  }

  /* ---- Scherm tekenen ---- */
  function eersteVanDeel(n) { return n === 0 || SCHERMEN[n - 1].deel !== SCHERMEN[n].deel; }

  function tekenScherm() {
    const n = st.scherm;
    const s = SCHERMEN[n];
    const deel = SCAN.delen[s.deel];
    $("#scherm-label").textContent = "Deel " + s.deel + " van 4";
    $("#scherm-titel").textContent = deel.titel;
    const instr = $("#scherm-instructie");
    const leg = $("#scherm-legenda");
    instr.textContent = "";
    leg.textContent = "";
    vragen.textContent = "";
    melding.textContent = "";

    if (s.deel === 1) {
      if (eersteVanDeel(n)) {
        deel.instructie.forEach(function (t) { instr.append(el("p", null, t)); });
        leg.append(el("span", null, "Zo werkt de schaal:"),
          el("ul", null, SCAN.schalen.uitspraak.map(function (t, i) { return el("li", null, el("b", null, String(i + 1)), " " + t); })));
      } else {
        instr.append(el("p", null, deel.kort));
      }
      s.items.forEach(function (code) {
        const nr = SCAN.volgorde.indexOf(code) + 1;
        vragen.append(el("fieldset", { class: "vraag", "data-code": code },
          el("legend", null, el("span", { class: "vraag__nr" }, "Uitspraak " + nr + " van 36"), UITSPRAAK[code]),
          opties(code, st.antw[code], ["1", "2", "3", "4", "5"],
            SCAN.schalen.uitspraak.map(function (t, i) { return (i + 1) + ", " + t.toLowerCase(); })),
          el("div", { class: "opties__einden", "aria-hidden": "true" },
            el("span", null, SCAN.schalen.uitspraak[0]), el("span", null, SCAN.schalen.uitspraak[4]))));
      });
    }

    if (s.deel === 2) {
      if (eersteVanDeel(n)) deel.instructie.forEach(function (t) { instr.append(el("p", null, t)); });
      s.items.forEach(function (code) {
        const p = TP[code];
        const nr = TPCODES.indexOf(code) + 1;
        vragen.append(el("fieldset", { class: "vraag", "data-code": code },
          el("legend", null,
            el("span", { class: "vraag__nr" }, "Keuze " + nr + " van 10"),
            el("span", { class: "paar__kanten" },
              el("span", { class: "paar__kant" }, el("span", { class: "paar__letter", "aria-hidden": "true" }, "A"), el("span", null, el("span", { class: "sr" }, "A: "), p.a.tekst)),
              el("span", { class: "paar__kant" }, el("span", { class: "paar__letter", "aria-hidden": "true" }, "B"), el("span", null, el("span", { class: "sr" }, "B: "), p.b.tekst)))),
          opties(code, st.tp[code], SCAN.schalen.tegenpoolKort, SCAN.schalen.tegenpool, "opties--tekst")));
      });
    }

    if (s.deel === 3) {
      deel.instructie.forEach(function (t) { instr.append(el("p", null, t)); });
      leg.append(el("span", null, "Zo werkt de schaal:"),
        el("ul", null, SCAN.schalen.energie.map(function (t, i) { return el("li", null, el("b", null, String(i + 1)), " " + t); })));
      s.items.forEach(function (code, i) {
        vragen.append(el("fieldset", { class: "vraag", "data-code": code },
          el("legend", null, el("span", { class: "vraag__nr" }, "Onderwerp " + (i + 1) + " van 9"), CLUSTER[code].energie),
          opties("en-" + code, st.en[code], ["1", "2", "3", "4", "5"],
            SCAN.schalen.energie.map(function (t, j) { return (j + 1) + ", " + t.toLowerCase(); })),
          el("div", { class: "opties__einden", "aria-hidden": "true" },
            el("span", null, SCAN.schalen.energie[0]), el("span", null, SCAN.schalen.energie[4]))));
      });
    }

    if (s.deel === 4) {
      const kb = kiesbaar(st.antw);
      const nodig = Math.min(R.aantalKeuzes, kb.length);
      const vanaf4 = SCAN.volgorde.filter(function (k) { return st.antw[k] >= R.kiesbaarVanaf; }).length >= R.aantalKeuzes;
      st.keuze = st.keuze.filter(function (k) { return kb.indexOf(k) > -1; });
      if (nodig < R.aantalKeuzes) st.keuze = kb.slice();
      bewaar();
      instr.append(el("p", null, nodig < R.aantalKeuzes ? deel.instructieAlles : (vanaf4 ? deel.instructie[0] : deel.instructieTerugval)));
      const fs = el("fieldset", { class: "vraag", "data-code": "vijf" }, el("legend", { class: "sr" }, "Jouw vijf uitspraken"));
      const box = el("div", { class: "keuzes" });
      kb.forEach(function (code) {
        const input = el("input", { type: "checkbox", name: "vijf", value: code, id: "vijf-" + code });
        if (st.keuze.indexOf(code) > -1) input.checked = true;
        box.append(el("label", { class: "keuze", for: "vijf-" + code }, input, el("span", null, UITSPRAAK[code])));
      });
      fs.append(box, el("p", { class: "keuze-teller", id: "keuze-teller", "aria-live": "polite" }));
      vragen.append(fs);
      werkTellerBij();
    }

    knopVorige.hidden = n === 0;
    knopVolgende.textContent = (s.deel === 4 || (s.deel === 3 && aantalTeKiezen(st.antw) === 0)) ? SCAN.knoppen.uitslag : SCAN.knoppen.volgende;
    werkVoortgangBij();
  }

  function werkTellerBij() {
    const t = $("#keuze-teller");
    if (t) t.textContent = st.keuze.length + " van " + aantalTeKiezen(st.antw) + " gekozen";
  }

  function werkVoortgangBij() {
    const aantal = aantalBeantwoord(st);
    $("#voortgang-aantal").textContent = aantal + " van " + SCAN.totaalVragen + " vragen beantwoord";
    $("#voortgang-vulling").style.width = (aantal / SCAN.totaalVragen * 100) + "%";
    if (SCHERMEN[st.scherm].deel === 3 || SCHERMEN[st.scherm].deel === 4) {
      knopVolgende.textContent = (SCHERMEN[st.scherm].deel === 4 || aantalTeKiezen(st.antw) === 0) ? SCAN.knoppen.uitslag : SCAN.knoppen.volgende;
    }
  }

  function antwoordVan(deel, code) {
    return deel === 1 ? st.antw[code] : (deel === 2 ? st.tp[code] : st.en[code]);
  }

  /* ---- Navigatie in de scan ---- */
  function toonScan() {
    sectie.hidden = false;
    kaart.hidden = false;
    uitslag.hidden = true;
    tekenScherm();
  }
  function focusScherm() {
    naar(kaart);
    $("#scherm-titel").focus({ preventScroll: true });
  }
  function gaNaar(n) {
    st.scherm = n;
    bewaar();
    tekenScherm();
    focusScherm();
  }

  function volgende() {
    const s = SCHERMEN[st.scherm];
    if (s.deel === 4) {
      const nodig = aantalTeKiezen(st.antw);
      if (st.keuze.length !== nodig) {
        melding.textContent = SCAN.delen[4].melding + " Je hebt er nu " + st.keuze.length + " gekozen.";
        return;
      }
      return afronden();
    }
    const open = s.items.filter(function (code) { return antwoordVan(s.deel, code) === undefined; });
    if (open.length) {
      open.forEach(function (code) {
        const fs = vragen.querySelector('[data-code="' + code + '"]');
        if (!fs.classList.contains("vraag--open")) {
          fs.classList.add("vraag--open");
          fs.append(el("span", { class: "vraag__open" }, "Nog niet beantwoord"));
        }
      });
      melding.textContent = SCAN.delen[s.deel].melding;
      const eerste = vragen.querySelector('[data-code="' + open[0] + '"] input');
      if (eerste) eerste.focus();
      return;
    }
    if (s.deel === 3 && aantalTeKiezen(st.antw) === 0) {
      st.keuze = [];
      return afronden();
    }
    gaNaar(st.scherm + 1);
  }

  form.addEventListener("submit", function (e) { e.preventDefault(); volgende(); });
  knopVorige.addEventListener("click", function () { if (st.scherm > 0) gaNaar(st.scherm - 1); });

  form.addEventListener("change", function (e) {
    const t = e.target;
    const s = SCHERMEN[st.scherm];
    if (t.type === "radio") {
      const fs = t.closest(".vraag");
      const code = fs.getAttribute("data-code");
      const v = Number(t.value);
      if (s.deel === 1) st.antw[code] = v;
      else if (s.deel === 2) st.tp[code] = v;
      else if (s.deel === 3) st.en[code] = v;
      fs.classList.remove("vraag--open");
      const notitie = fs.querySelector(".vraag__open");
      if (notitie) notitie.remove();
      if (!vragen.querySelector(".vraag--open")) melding.textContent = "";
      if (s.deel === 1) st.keuze = st.keuze.filter(function (k) { return st.antw[k] >= R.kiesbaarTerugval; });
      bewaar();
      werkVoortgangBij();
    } else if (t.type === "checkbox") {
      const nodig = aantalTeKiezen(st.antw);
      if (t.checked && st.keuze.length >= nodig) {
        t.checked = false;
        melding.textContent = SCAN.delen[4].teVeel;
        return;
      }
      st.keuze = Array.prototype.map.call(vragen.querySelectorAll('input[name="vijf"]:checked'), function (i) { return i.value; });
      melding.textContent = "";
      bewaar();
      werkTellerBij();
    }
  });

  /* ---- Uitslag ---- */
  /* Uitleg bij een gebied in de top drie. Sterk: tekst, doorschieten en twee vragen.
     Midden of laag: tekst en twee vragen, zonder doorschiet-zin. */
  function uitleg(code, niveau) {
    const c = CLUSTER[code];
    const U = SCAN.uitslag;
    return [
      el("p", null, c.tekst),
      niveau === "sterk" ? el("p", null, el("span", { class: "tussenkop" }, U.doorschieten), c.doorschieten) : null,
      el("div", null, el("span", { class: "tussenkop" }, U.nadenken),
        el("ul", { class: "vos-lijst" }, c.vragen.map(function (v) { return el("li", null, v); })))
    ];
  }

  /* Pdf-knop. Op de site (data-pdf="poort") opent hij eerst het downloadformulier van de site
     (WorkbookGate), dat na het opslaan de printfunctie start. In de losse versie print hij direct. */
  function pdfKnop() {
    const U = SCAN.uitslag;
    if (wortel && wortel.getAttribute("data-pdf") === "poort") {
      const P = U.pdfPoort;
      return el("a", { class: "knop knop--secundair alleen-site", href: "#uitslag",
        "data-workbook": "talentenscan", "data-workbook-title": P.titel, "data-workbook-eyebrow": P.bovenregel,
        "data-workbook-intro": P.tekst, "data-workbook-consent": P.vinkje, "data-workbook-knop": P.knop,
        "data-workbook-noot": P.noot, "data-workbook-actie": "print" }, U.pdf);
    }
    return el("button", { class: "knop knop--secundair alleen-site", type: "button", "data-actie": "pdf" }, U.pdf);
  }

  function tekenUitslag() {
    const u = berekenUitslag(st);
    const U = SCAN.uitslag;
    const POOL = {};
    u.polen.forEach(function (p) { POOL[p.code] = p; });
    uitslag.textContent = "";
    uitslag.setAttribute("data-soort", u.soort);

    const logo = document.querySelector(".brand img");
    uitslag.append(el("div", { class: "print-kop", "aria-hidden": "true" },
      el("img", { src: logo ? logo.getAttribute("src") : "", alt: "" }), el("span", null, U.printKop)));

    uitslag.append(el("div", { class: "uitslag__kop" },
      el("span", { class: "eyebrow" }, U.eyebrow),
      el("h2", { id: "uitslag-titel", tabindex: "-1" }, U.titel),
      el("p", { class: "lead" }, U.intro)));

    /* 1. In het kort */
    if (u.kort.length) {
      uitslag.append(el("section", { class: "blok kort", "aria-labelledby": "u-kort", "data-test": "kort" },
        el("h3", { id: "u-kort" }, U.kortKop),
        el("ul", { class: "vos-lijst" }, u.kort.map(function (z) { return el("li", { "data-regel": z.regel }, z.tekst); }))));
    }

    /* 2. Top drie, of een bericht bij een vlak profiel */
    if (u.top3.length) {
      const voorzichtig = u.soort === "voorzichtig";
      const blok = el("section", { class: "blok", "aria-labelledby": "u-top3", "data-test": "top3" }, el("h3", { id: "u-top3" }, U.top3));
      if (voorzichtig) blok.append(el("p", { class: "notitie", "data-test": "voorzichtig" }, U.voorzichtig));
      const grid = el("div", { class: "top3" });
      u.top3.forEach(function (code, i) {
        /* Bij een voorzichtig profiel telt de onderlinge volgorde: gewone tekst, zonder niveauwoord */
        const tekst = voorzichtig ? "midden" : u.niveau[code];
        grid.append(el("article", { class: "gebied" + (i === 0 ? " gebied--anker" : ""), "data-code": code, "data-tekst": tekst },
          el("span", { class: "label" }, "Nummer " + (i + 1)),
          el("h4", null, CLUSTER[code].naam),
          voorzichtig ? null : el("p", { class: "gebied__niveau", "data-niveau": u.niveau[code] }, U.niveau[u.niveau[code]]),
          uitleg(code, tekst)));
      });
      blok.append(grid);
      if (u.netBuiten.length) {
        blok.append(el("p", { class: "net-buiten", "data-test": "net-buiten", "data-codes": u.netBuiten.join(",") },
          el("b", null, U.netBuitenKop), " " + namen(u.netBuiten) + ". " + U.netBuiten[u.netBuiten.length > 1 ? 1 : 0]));
      }
      uitslag.append(blok);
    } else {
      const sleutel = u.soort.replace("vlak-", "");
      uitslag.append(el("section", { class: "blok", "aria-labelledby": "u-vlak" },
        el("div", { class: "notitie", "data-test": "vlak", "data-vlak": sleutel },
          el("h3", { id: "u-vlak" }, U.vlakKop), el("p", null, U.vlak[sleutel]))));
    }

    /* Op de site met poort is de uitslag tot hier vrij. De rest volgt na het formulier. */
    if (poortDicht()) {
      uitslag.append(poortKaart(u));
      uitslag.append(el("p", { class: "disclaimer" }, U.disclaimer));
      return;
    }
    /* Het eerste blok hierna is het vervolg: daar gaat de pagina heen na het ontgrendelen */
    const eersteVervolg = uitslag.children.length;

    /* 3. Jouw vijf */
    if (u.vijf.length) {
      uitslag.append(el("section", { class: "blok", "aria-labelledby": "u-vijf" },
        el("h3", { id: "u-vijf" }, u.vijf.length === R.aantalKeuzes ? U.vijf : U.vijfMinder),
        el("p", { class: "blok__intro" }, U.vijfIntro),
        el("div", { class: "vijf" }, el("ul", { class: "vos-lijst", "data-test": "vijf" },
          u.vijf.map(function (c) { return el("li", { "data-code": c }, UITSPRAAK[c]); })))));
    }

    /* 4. Alle gebieden als balken, in de rangorde. Geen tekst: die staat bij de top drie en de twee laagste. */
    const balken = el("div", { class: "balken", "data-test": "balken" },
      el("div", { class: "as", "aria-hidden": "true" }, el("span"),
        el("span", { class: "as__schaal" }, ["1", "2", "3", "4", "5"].map(function (x) { return el("span", null, x); })),
        el("span")));
    u.rang.forEach(function (code) {
      const top = u.top3.indexOf(code) > -1;
      const breedte = ((u.som[code] - 4) / 16 * 100) + "%";
      balken.append(el("div", { class: "balk-rij", "data-code": code, "data-niveau": u.niveau[code] },
        el("div", { class: "balk" + (top ? " balk--top" : "") },
          el("span", { class: "balk__naam" }, el("b", null, CLUSTER[code].naam), el("small", null, CLUSTER[code].omschrijving)),
          el("span", { class: "balk__spoor", "aria-hidden": "true" }, el("span", { class: "balk__vulling", style: "display:block; width:" + breedte })),
          el("span", { class: "balk__waarde" }, el("span", { class: "sr" }, "gemiddeld "), u.gem[code]))));
    });
    uitslag.append(el("section", { class: "blok", "aria-labelledby": "u-rij" },
      el("h3", { id: "u-rij" }, U.rij), el("p", { class: "blok__intro" }, U.rijIntro), balken));

    /* 5. Wat je minder makkelijk afgaat: de twee laagste scores, met drie manieren per gebied */
    if (u.laagsteTwee.length) {
      uitslag.append(el("section", { class: "blok", "aria-labelledby": "u-laagste", "data-test": "laagste" },
        el("h3", { id: "u-laagste" }, U.laagsteKop),
        el("p", { class: "blok__intro" }, U.laagsteIntro),
        el("div", { class: "laagste" }, u.laagsteTwee.map(function (code) {
          const t = CLUSTER[code].laagste;
          return el("article", { class: "gebied", "data-code": code },
            el("h4", null, CLUSTER[code].naam),
            el("p", { class: "gebied__omschrijving" }, CLUSTER[code].omschrijving),
            el("ul", { class: "manieren" }, ["ontwikkelen", "slim", "delegeren"].map(function (k) {
              return el("li", { "data-optie": k }, el("span", { class: "tussenkop" }, U.laagsteLabels[k]), t[k]);
            })));
        }))));
    }

    /* 6. Energie */
    const energie = el("div", { class: "energie" });
    SCAN.energieGroepen.forEach(function (g) {
      const leden = u.rang.filter(function (c) { return u.groep[c] === g.code; });
      if (!leden.length) return;
      energie.append(el("article", { class: "energie-kaart" + (g.code === "kracht" ? " energie-kaart--kracht" : ""), "data-groep": g.code },
        el("h4", null, g.naam),
        el("ul", { class: "chips" }, leden.map(function (c) { return el("li", { class: "chip", "data-code": c }, CLUSTER[c].naam); })),
        el("p", null, g.tekst)));
    });
    const eBlok = el("section", { class: "blok", "aria-labelledby": "u-energie" }, el("h3", { id: "u-energie" }, U.energie), energie);
    const neutraal = u.rang.filter(function (c) { return u.groep[c] === "neutraal"; });
    const neutraalSterk = neutraal.filter(function (c) { return u.niveau[c] === "sterk"; });
    const neutraalRest = neutraal.filter(function (c) { return u.niveau[c] !== "sterk"; });
    if (neutraalSterk.length) {
      eBlok.append(el("p", { class: "neutraal", "data-test": "neutraal-sterk", "data-codes": neutraalSterk.join(",") },
        el("b", null, U.neutraalSterkKop), " " + namen(neutraalSterk) + ". " + U.neutraalSterk));
    }
    if (neutraalRest.length) {
      eBlok.append(el("p", { class: "neutraal", "data-test": "neutraal", "data-codes": neutraalRest.join(",") },
        el("b", null, U.neutraalKop), " " + namen(neutraalRest) + ". " + U.neutraal));
    }
    uitslag.append(eBlok);

    /* 7. Tegenpolen: duidelijkste keuzes eerst, "allebei" gebundeld */
    const pBlok = el("section", { class: "blok", "aria-labelledby": "u-polen" }, el("h3", { id: "u-polen" }, U.polen));
    if (u.polenUitgesproken.length) {
      if (u.polenUitgesproken.length > 1) pBlok.append(el("p", { class: "blok__intro" }, U.polenIntro));
      const polen = el("ul", { class: "polen" });
      u.polenUitgesproken.forEach(function (code) {
        const p = POOL[code];
        const tp = TP[code];
        const stippen = el("span", { class: "stippen" });
        for (let v = 1; v <= 5; v++) stippen.append(el("span", { class: "stip" + (v === p.waarde ? " stip--aan" : "") }));
        polen.append(el("li", { class: "pool", "data-code": code, "data-kant": p.kant },
          el("h4", null, p.naam),
          el("p", null, p.zin),
          el("div", { class: "pool__schaal" },
            el("span", { class: p.kant === "A" ? "gekozen" : null }, tp.a.talent),
            el("span", { "aria-hidden": "true" }, stippen),
            el("span", { class: p.kant === "B" ? "gekozen" : null }, tp.b.talent)),
          el("span", { class: "sr" }, "Je koos: " + SCAN.schalen.tegenpool[p.waarde - 1] + ".")));
      });
      pBlok.append(polen);
    }
    if (u.polenBeide.length) {
      pBlok.append(el("div", { class: "beide", "data-test": "beide" },
        el("h4", null, U.beideKop),
        el("p", null, U.beideIntro),
        el("ul", { class: "chips" }, u.polenBeide.map(function (code) {
          return el("li", { class: "chip", "data-code": code }, POOL[code].naam);
        }))));
    }
    uitslag.append(pBlok);

    /* 8. Je volgende stap, met de knop voor een kennismaking direct onder de uitslag */
    uitslag.append(el("section", { class: "blok stap", "aria-labelledby": "u-stap", "data-test": "stap" },
      el("h3", { id: "u-stap" }, U.stapKop),
      el("p", null, U.stapTekst),
      el("div", { class: "uitslag__acties" },
        el("a", { class: "knop knop--primair", href: U.stapLink }, U.stapKnop),
        pdfKnop(),
        el("button", { class: "knop knop--tekst", type: "button", "data-actie": "opnieuw" }, U.opnieuw)),
      el("p", { class: "print-alleen" }, U.stapPrint)));
    uitslag.append(el("p", { class: "disclaimer" }, U.disclaimer));

    const vervolg = uitslag.children[eersteVervolg];
    if (vervolg) {
      vervolg.setAttribute("data-vervolg", "");
      vervolg.style.scrollMarginTop = "calc(var(--nav-h) + 20px)";
    }
  }

  /* Kaart onder de top drie, zolang de rest van de uitslag dicht is. De knop opent het formulier van de site. */
  function poortKaart(u) {
    const P = SCAN.uitslag.poort;
    const F = P.formulier;
    const I = P.inhoud;
    const inhoud = [];
    if (u.vijf.length) inhoud.push(u.vijf.length === R.aantalKeuzes ? I.vijf : I.vijfMinder);
    inhoud.push(I.rij);
    if (u.laagsteTwee.length) inhoud.push(I.laagste);
    inhoud.push(I.energie, I.polen, I.pdf);
    return el("section", { class: "blok stap", "aria-labelledby": "u-poort", "data-test": "poort" },
      el("h3", { id: "u-poort" }, P.kop),
      el("p", null, P.tekst),
      el("ul", { class: "vos-lijst vos-lijst--check" }, inhoud.map(function (t) { return el("li", null, t); })),
      el("div", { class: "uitslag__acties" },
        el("a", { class: "knop knop--primair", href: "#uitslag", "data-workbook": POORT.slug,
          "data-workbook-title": F.titel, "data-workbook-eyebrow": F.bovenregel, "data-workbook-intro": F.tekst,
          "data-workbook-consent": F.vinkje, "data-workbook-knop": F.knop, "data-workbook-noot": F.noot,
          "data-workbook-actie": "ontgrendel" }, P.knop),
        el("button", { class: "knop knop--tekst", type: "button", "data-actie": "opnieuw" }, SCAN.uitslag.opnieuw)),
      el("p", { class: "disclaimer" }, P.noot));
  }

  function toonUitslag(focus) {
    tekenUitslag();
    sectie.hidden = false;
    kaart.hidden = true;
    uitslag.hidden = false;
    if (focus) {
      naar(uitslag);
      $("#uitslag-titel").focus({ preventScroll: true });
    }
  }

  /* Na de scan, en bij terugkomst met een afgeronde scan */
  function toonAfgerond(focus) {
    heroStatus("klaar");
    toonUitslag(focus);
  }

  function afronden() {
    st.klaar = true;
    bewaar();
    meld("afgerond");
    toonAfgerond(true);
  }

  /* Het formulier van de site meldt dat de uitslag is ontgrendeld: hele uitslag tekenen en
     naar het eerste deel gaan dat net zichtbaar werd */
  function opOntgrendeld(e) {
    if (!poortActief || !e.detail || e.detail.slug !== POORT.slug) return;
    st.ontgrendeld = true;
    bewaar();
    /* Alleen opnieuw tekenen als de poortkaart nu in beeld is. Kijk niet naar poortDicht(): het formulier
       heeft de download dan al als ontgrendeld opgeslagen. */
    if (uitslag.hidden || !uitslag.querySelector('[data-test="poort"]')) return;
    toonUitslag(false);
    const vervolg = uitslag.querySelector("[data-vervolg]");
    if (vervolg) {
      const kop = vervolg.querySelector("h3");
      naar(vervolg);
      if (kop) { kop.setAttribute("tabindex", "-1"); kop.focus({ preventScroll: true }); }
    }
  }
  document.addEventListener(POORT.gebeurtenis, opOntgrendeld);

  /* ---- Startscherm ---- */
  function heroStatus(soort) {
    const start = $("#hero-start");
    const box = $("#hero-status");
    if (!soort) { start.hidden = false; box.hidden = true; return; }
    const knop = $("#hero-status-knop");
    if (soort === "verder") {
      const aantal = aantalBeantwoord(st);
      $("#hero-status-tekst").textContent = aantal < SCAN.totaalVragen ? SCAN.hero.welkomTerug.replace("{x}", aantal + 1) : SCAN.hero.welkomLaatste;
      knop.textContent = SCAN.hero.verder;
      knop.setAttribute("data-actie", "verder");
    } else {
      $("#hero-status-tekst").textContent = SCAN.hero.klaar;
      knop.textContent = SCAN.hero.bekijk;
      knop.setAttribute("data-actie", "bekijk");
    }
    start.hidden = true;
    box.hidden = false;
  }

  function opKlik(e) {
    const knop = e.target.closest("[data-actie]");
    if (!knop || !wortel || !wortel.contains(knop)) return;
    const actie = knop.getAttribute("data-actie");
    if (actie === "start") { st = leeg(); bewaar(); meld("gestart"); toonScan(); focusScherm(); }
    else if (actie === "verder") { heroStatus(null); toonScan(); focusScherm(); }
    else if (actie === "bekijk") { naar(uitslag); $("#uitslag-titel").focus({ preventScroll: true }); }
    else if (actie === "opnieuw") { wis(); st = leeg(); meld("gestart"); heroStatus(null); toonScan(); focusScherm(); }
    else if (actie === "pdf") { window.print(); }
  }
  document.addEventListener("click", opKlik);

  /* ---- Menu op mobiel (alleen in de losse versie; op de site zorgt de gedeelde nav daarvoor) ---- */
  const toggle = wortel ? wortel.querySelector(".nav__toggle") : null;
  const links = wortel ? wortel.querySelector("#navlinks") : null;
  function zetMenu(open) {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
  }
  function opToets(e) {
    if (e.key === "Escape" && links.classList.contains("open")) { zetMenu(false); toggle.focus(); }
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () { zetMenu(!links.classList.contains("open")); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) zetMenu(false); });
    document.addEventListener("keydown", opToets);
  }

  /* ---- Begin ---- */
  const opgeslagen = laad();
  if (opgeslagen && opgeslagen.klaar && compleet(opgeslagen)) {
    st = opgeslagen;
    toonAfgerond(false);
  } else if (opgeslagen && aantalBeantwoord(opgeslagen) > 0) {
    st = opgeslagen;
    st.klaar = false;
    heroStatus("verder");
  }

  return function stopTalentenscan() {
    document.removeEventListener("click", opKlik);
    document.removeEventListener(POORT.gebeurtenis, opOntgrendeld);
    if (toggle && links) document.removeEventListener("keydown", opToets);
  };
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  window.VosTalentenscan = { start: startTalentenscan };
  if (document.querySelector('.vos[data-start="auto"]')) startTalentenscan();
}
