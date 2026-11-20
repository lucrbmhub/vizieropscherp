import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { SITE_URL, socialImageMeta } from "@/lib/site";

// Talentenscan 1.5. Waar staat wat:
// - inhoud van de pagina (intro, vragen en antwoorden, afsluiting): HTML hieronder;
// - alle uitspraken, uitslagteksten en rekenregels: het object SCAN in public/talentenscan/talentenscan.js;
// - stijl: public/talentenscan/talentenscan.css (alle regels onder .vos, zodat scan en site elkaar niet raken).
// De vragen en antwoorden staan ook in JSONLD (FAQPage): houd ze gelijk aan de HTML.
// Verhoog VERSIE na een wijziging aan script of stijl, zodat browsers de nieuwe bestanden laden.

const PATH = "/inzichten/talentenscan";
const URL = `${SITE_URL}${PATH}`;
const VERSIE = "1.5";
const TITEL = "Talentenscan voor je werk | Vizier op Scherp";
const OG_TITEL = "Talentenscan: wat gaat jou makkelijk af in je werk?";
const OMSCHRIJVING =
  "Gratis talentenscan van Vizier op Scherp. Zie in 10 minuten waar je sterk in bent, wat je energie geeft en welke kanten van jou een kracht zijn.";
const JSONLD =
  '{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://vizieropscherp.nl/inzichten/talentenscan#webpage","url":"https://vizieropscherp.nl/inzichten/talentenscan","name":"Talentenscan: wat gaat jou makkelijk af in je werk?","description":"Gratis talentenscan van Vizier op Scherp. Zie in 10 minuten waar je sterk in bent, wat je energie geeft en welke kanten van jou een kracht zijn.","inLanguage":"nl-NL","isPartOf":{"@type":"WebSite","name":"Vizier op Scherp","url":"https://vizieropscherp.nl/"},"breadcrumb":{"@id":"https://vizieropscherp.nl/inzichten/talentenscan#breadcrumb"},"publisher":{"@id":"https://vizieropscherp.nl/#organization"}},{"@type":"BreadcrumbList","@id":"https://vizieropscherp.nl/inzichten/talentenscan#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vizieropscherp.nl/"},{"@type":"ListItem","position":2,"name":"Inzichten","item":"https://vizieropscherp.nl/inzichten"},{"@type":"ListItem","position":3,"name":"Talentenscan","item":"https://vizieropscherp.nl/inzichten/talentenscan"}]},{"@type":"WebApplication","name":"Talentenscan","url":"https://vizieropscherp.nl/inzichten/talentenscan","applicationCategory":"EducationalApplication","operatingSystem":"Alle","inLanguage":"nl-NL","isAccessibleForFree":true,"publisher":{"@id":"https://vizieropscherp.nl/#organization"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Hoe lang duurt de talentenscan?","acceptedAnswer":{"@type":"Answer","text":"Ongeveer 10 minuten. Je beantwoordt 36 uitspraken, maakt 10 keuzes tussen twee kanten en geeft bij 9 onderwerpen aan wat ze met je energie doen."}},{"@type":"Question","name":"Is dit een test?","acceptedAnswer":{"@type":"Answer","text":"Nee. De scan is een hulpmiddel om over je talenten na te denken. Er is geen goede of foute uitkomst, en het is geen psychologische test."}},{"@type":"Question","name":"Wat gebeurt er met mijn antwoorden?","acceptedAnswer":{"@type":"Answer","text":"Je antwoorden blijven op je eigen apparaat en je hebt geen account nodig. Je voortgang wordt in je browser bewaard, zodat je later verder kunt. We tellen alleen hoeveel mensen de scan starten en afronden, zonder te weten wie. Je drie sterkste gebieden zie je meteen. Voor je hele uitslag en de pdf vragen we je e-mailadres. Je antwoorden sturen we niet mee."}},{"@type":"Question","name":"Wat kan ik met mijn uitslag?","acceptedAnswer":{"@type":"Answer","text":"Gebruik je uitslag als startpunt om over je werk na te denken. Je kunt hem downloaden als pdf of bespreken met een van onze coaches."}}]}]}';

type Talentenscan = { start: () => () => void };
declare global {
  interface Window {
    VosTalentenscan?: Talentenscan;
  }
}

export const Route = createFileRoute("/inzichten/talentenscan")({
  head: () => ({
    meta: [
      { title: TITEL },
      { name: "description", content: OMSCHRIJVING },
      { property: "og:title", content: OG_TITEL },
      { property: "og:description", content: OMSCHRIJVING },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      ...socialImageMeta,
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: URL },
      { rel: "stylesheet", href: `/talentenscan/talentenscan.css?v=${VERSIE}` },
    ],
    scripts: [{ type: "application/ld+json", children: JSONLD }],
  }),
  component: Page,
});

const HTML =
  '<div class="vos" lang="nl" data-variant="site" data-poort="uitslag">\n<main id="main">\n\n  <section class="section section--papier hero" aria-labelledby="hero-titel">\n    <span class="hero__wm" aria-hidden="true"></span>\n    <div class="container hero__grid">\n      <div>\n        <span class="eyebrow">Talentenscan</span>\n        <h1 id="hero-titel">Wat gaat jou makkelijk af <span class="nowrap"><span class="idot">i</span>n</span> je werk?</h1>\n        <p class="hero__lead">In je werk doe je dingen die je moeite kosten en dingen die bijna vanzelf gaan. In die tweede groep zitten je talenten. Ze zijn zo gewoon voor je dat je ze zelf vaak niet ziet. Deze scan helpt je om ze op een rij te zetten.</p>\n        <p class="hero__tekst">Je krijgt 36 uitspraken, 10 keuzes tussen twee kanten en 9 korte vragen over energie. Daarna zie je meteen je drie sterkste gebieden. Voor je hele uitslag laat je je e-mailadres achter. Invullen duurt ongeveer 10 minuten.</p>\n        <div class="hero__acties" id="hero-start">\n          <button class="knop knop--primair" type="button" data-actie="start">Start de scan</button>\n        </div>\n        <div class="hero__status" id="hero-status" hidden>\n          <p id="hero-status-tekst"></p>\n          <div class="hero__acties">\n            <button class="knop knop--primair" type="button" id="hero-status-knop"></button>\n            <button class="knop knop--secundair" type="button" data-actie="opnieuw">Opnieuw beginnen</button>\n          </div>\n        </div>\n        <p class="hero__noot">Dit is geen test met een goede of foute uitkomst. Je uitslag is een startpunt om over na te denken of om met een coach te bespreken. Je antwoorden blijven op je eigen apparaat.</p>\n      </div>\n      <aside class="krijg-kaart" aria-labelledby="krijg-titel">\n        <h2 id="krijg-titel">Wat je krijgt</h2>\n        <ul class="vos-lijst vos-lijst--check">\n          <li>Je drie sterkste gebieden, met vragen om over na te denken</li>\n          <li>Wat je energie geeft en wat je energie kost</li>\n          <li>Tien talenten uit keuzes tussen twee kanten</li>\n          <li>De vijf uitspraken die het meest op jou lijken</li>\n        </ul>\n        <div class="krijg-kaart__voet"><span class="krijg-kaart__tijd">10 minuten</span><span>Gratis en zonder account</span></div>\n      </aside>\n    </div>\n  </section>\n\n  <section class="section section--linnen" id="scan-sectie" aria-label="De talentenscan" hidden>\n    <div class="container">\n      <div class="scan">\n        <div class="scan-kaart" id="scan-kaart" hidden>\n          <div class="voortgang">\n            <div class="voortgang__tekst"><span id="voortgang-aantal"></span></div>\n            <div class="voortgang__balk" aria-hidden="true"><div class="voortgang__vulling" id="voortgang-vulling"></div></div>\n          </div>\n          <form id="scan-form" novalidate>\n            <div class="scan__kop">\n              <span class="label" id="scherm-label"></span>\n              <h2 id="scherm-titel" tabindex="-1"></h2>\n              <div class="scan__instructie" id="scherm-instructie"></div>\n              <div class="legenda" id="scherm-legenda"></div>\n            </div>\n            <div class="vragen" id="scherm-vragen"></div>\n            <div class="melding" id="scherm-melding" role="alert"></div>\n            <div class="scan__nav">\n              <button class="knop knop--secundair" type="button" id="knop-vorige">Vorige</button>\n              <button class="knop knop--primair" type="submit" id="knop-volgende">Volgende</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class="uitslag" id="uitslag" hidden></div>\n    </div>\n  </section>\n\n  <section class="section section--papier faq-sectie" aria-labelledby="faq-titel">\n    <div class="container">\n      <div class="faq">\n        <span class="eyebrow">Goed om te weten</span>\n        <h2 id="faq-titel">Over de talentenscan</h2>\n        <details>\n          <summary>Hoe lang duurt de talentenscan?<span class="plus" aria-hidden="true"></span></summary>\n          <p>Ongeveer 10 minuten. Je beantwoordt 36 uitspraken, maakt 10 keuzes tussen twee kanten en geeft bij 9 onderwerpen aan wat ze met je energie doen.</p>\n        </details>\n        <details>\n          <summary>Is dit een test?<span class="plus" aria-hidden="true"></span></summary>\n          <p>Nee. De scan is een hulpmiddel om over je talenten na te denken. Er is geen goede of foute uitkomst, en het is geen psychologische test.</p>\n        </details>\n        <details>\n          <summary>Wat gebeurt er met mijn antwoorden?<span class="plus" aria-hidden="true"></span></summary>\n          <p>Je antwoorden blijven op je eigen apparaat en je hebt geen account nodig. Je voortgang wordt in je browser bewaard, zodat je later verder kunt. We tellen alleen hoeveel mensen de scan starten en afronden, zonder te weten wie. Je drie sterkste gebieden zie je meteen. Voor je hele uitslag en de pdf vragen we je e-mailadres. Je antwoorden sturen we niet mee.</p>\n        </details>\n        <details>\n          <summary>Wat kan ik met mijn uitslag?<span class="plus" aria-hidden="true"></span></summary>\n          <p>Gebruik je uitslag als startpunt om over je werk na te denken. Je kunt hem downloaden als pdf of bespreken met een van onze coaches.</p>\n        </details>\n      </div>\n    </div>\n  </section>\n\n  <section class="section section--linnen afsluiting" aria-label="Verder na de scan">\n    <div class="container afsluiting__grid">\n      <div class="facet">\n        <div class="facet__binnen">\n          <h2>Je uitslag bespreken</h2>\n          <p>Een uitslag op een scherm is een begin. In een gesprek met een van onze coaches kijk je wat je talenten betekenen voor je werk en je volgende stap. Soms vergoedt je werkgever loopbaancoaching. Vraag het na bij je leidinggevende of HR.</p>\n          <a class="knop knop--primair" href="/kennismaken">Plan een kennismaking</a>\n        </div>\n      </div>\n      <div class="hr-kaart">\n        <h2>Voor HR en leidinggevenden</h2>\n        <p>Deze scan geeft een eerste beeld. In een gesprek met een van onze coaches gaan medewerkers een stap verder. Ze kijken wat hun talenten betekenen voor hun werk en hun ontwikkeling. Op onze pagina voor werkgevers leest u hoe wij dat aanpakken.</p>\n        <a class="knop knop--donker" href="/voor-werkgevers">Naar de pagina voor werkgevers</a>\n      </div>\n    </div>\n  </section>\n\n</main>\n</div>\n';

function Page() {
  useEffect(() => {
    // Script laden en de scan starten. Bij het verlaten van de pagina ruimt stop() de luisteraars op,
    // zodat er bij terugkeren geen dubbele klikken of tellingen ontstaan.
    let stop: (() => void) | undefined;
    let actief = true;
    const start = () => {
      if (actief && window.VosTalentenscan) stop = window.VosTalentenscan.start();
    };
    if (window.VosTalentenscan) {
      start();
    } else {
      let script = document.querySelector<HTMLScriptElement>("script[data-talentenscan]");
      if (!script) {
        script = document.createElement("script");
        script.src = `/talentenscan/talentenscan.js?v=${VERSIE}`;
        script.dataset.talentenscan = VERSIE;
        document.body.appendChild(script);
      }
      script.addEventListener("load", start, { once: true });
    }

    // Anonieme telling: alleen "gestart" of "afgerond", zonder antwoorden of andere gegevens.
    const tel = (e: Event) => {
      const gebeurtenis = (e as CustomEvent<{ gebeurtenis?: string }>).detail?.gebeurtenis;
      if (gebeurtenis === "gestart" || gebeurtenis === "afgerond") {
        void supabase
          .from("talentenscan_tellingen")
          .insert({ gebeurtenis })
          .then(
            () => undefined,
            () => undefined,
          );
      }
    };
    document.addEventListener("talentenscan", tel);

    return () => {
      actief = false;
      stop?.();
      document.removeEventListener("talentenscan", tel);
    };
  }, []);

  return (
    <>
      <SiteHeader active="inzichten" />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <SiteFooter />
    </>
  );
}
