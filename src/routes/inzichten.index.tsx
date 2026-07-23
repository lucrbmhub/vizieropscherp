import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/inzichten/")({
  head: () => ({
    meta: [
      { title: "Inzichten over werk en loopbaan | Vizier op Scherp" },
      { name: "description", content: "Praktische inzichten voor wie nadenkt over een volgende stap, en voor HR-afdelingen die hun mensen op tijd willen begeleiden." },
      { property: "og:title", content: "Inzichten over werk en loopbaan | Vizier op Scherp" },
      { property: "og:description", content: "Praktische inzichten voor wie nadenkt over een volgende stap, en voor HR-afdelingen die hun mensen op tijd willen begeleiden." },
      { property: "og:url", content: `${SITE_URL}/inzichten` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inzichten` }],
  }),
  component: Page,
});

type Category = "werkgevers" | "sterker" | "richting";
type TabKey = "alle" | Category;

interface Article {
  slug: string;
  title: string;
  desc: string;
  read: string;
  category: Category;
  label: "Voor werkgevers & HR" | "Voor medewerkers";
  featured?: boolean;
  highlight?: boolean; // card--anchor ring-paper
}

// Categorie-labels
const TAB_LABEL: Record<TabKey, string> = {
  alle: "Alle inzichten",
  werkgevers: "Voor werkgevers & HR",
  sterker: "Sterker in je huidige rol",
  richting: "Een nieuwe richting",
};

const TAB_ORDER: TabKey[] = ["alle", "werkgevers", "sterker", "richting"];

// Alle 32 artikelen (volgorde = weergavevolgorde in "Meer inzichten").
// "van-werven-naar-behouden" telt mee in werkgevers (13) maar wordt in het
// uitgelicht-blok getoond, niet in de grid (featured: true).
const ARTICLES: Article[] = [
  { slug: "van-werven-naar-behouden", category: "werkgevers", label: "Voor werkgevers & HR", featured: true,
    title: "Van werven naar behouden: waarom medewerkers vertrekken om stilstand, niet om salaris",
    desc: "Medewerkers verlaten hun werkgever zelden om meer salaris. Gebrek aan ontwikkeling en doorgroei is de voornaamste reden.",
    read: "6 min lezen" },

  // Grid — bestaande volgorde
  { slug: "hetzelfde-gevoel-een-andere-baan", category: "richting", label: "Voor medewerkers", highlight: true,
    title: "Hetzelfde gevoel, een andere baan: waarom een overstap het patroon niet altijd oplost",
    desc: "Weer dezelfde onvrede in een nieuwe baan? Vaak verhuist het patroon mee. Hoe je herkent wat er echt speelt, voordat je opnieuw overstapt.",
    read: "5 min lezen" },
  { slug: "weten-maar-niet-doen", category: "sterker", label: "Voor medewerkers",
    title: "Je weet wat je zou moeten doen. Waarom doe je het dan niet?",
    desc: "Je weet allang wat je wilt veranderen in je werk, maar je doet het niet. Wat er meestal onder die stilstand zit, en wat wel beweging geeft.",
    read: "5 min lezen" },
  { slug: "innerlijke-criticus", category: "sterker", label: "Voor medewerkers",
    title: "Het stemmetje dat zegt dat het nooit genoeg is",
    desc: "Die strenge stem die zegt dat het beter moet? Die verdwijnt niet door harder te werken. Waar hij vandaan komt en hoe je er anders mee omgaat.",
    read: "5 min lezen" },
  { slug: "belemmerende-overtuigingen-werk", category: "sterker", label: "Voor medewerkers",
    title: "De overtuiging die je loopbaan stuurt, en die je nooit zelf hebt gekozen",
    desc: "Hard werken hoort, klagen doe je niet, kiezen is verliezen. Overtuigingen die je meekreeg sturen je loopbaan, tot je ze herkent.",
    read: "5 min lezen" },
  { slug: "grenzen-stellen-op-werk", category: "sterker", label: "Voor medewerkers",
    title: "Altijd degene op wie iedereen kan bouwen: waar dat patroon je brengt",
    desc: "Betrouwbaar zijn is een kracht, tot het een patroon wordt waarin je jezelf steeds overslaat. Hoe dat werkt en waar je kunt beginnen.",
    read: "5 min lezen" },
  { slug: "niet-kunnen-kiezen-loopbaan", category: "richting", label: "Voor medewerkers",
    title: "Niet kunnen kiezen in je loopbaan: waarom meer informatie niet helpt",
    desc: "Nog een test, nog een gesprek, nog een lijstje, en je weet het nog steeds niet. Waarom loopbaankeuzestress zelden een informatieprobleem is.",
    read: "5 min lezen" },
  { slug: "medewerker-zit-vast", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Wanneer een loopbaangesprek niet genoeg is: signalen dat er meer speelt",
    desc: "Soms lost een goed gesprek het niet op: dezelfde onvrede keert terug. Hoe u herkent dat er een patroon speelt, en wanneer doorverwijzen verstandig is.",
    read: "6 min lezen" },
  { slug: "inzicht-verandert-gedrag-niet", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Waarom inzicht alleen gedrag niet verandert, en wat dat betekent voor uw ontwikkelaanpak",
    desc: "Na de training is iedereen enthousiast, drie maanden later is alles bij het oude. Waarom inzicht alleen niet genoeg is, en wat wel beklijft.",
    read: "6 min lezen" },
  { slug: "richting-vinden-in-je-loopbaan", category: "richting", label: "Voor medewerkers",
    title: "Richting vinden in je loopbaan: waarom je niet bij de vacaturesite moet beginnen",
    desc: "Je weet dat je iets anders wilt, maar niet wat. Richting vind je zelden op een vacaturesite, maar door te ontdekken wat je energie geeft en wat je drijft. Praktische handvatten en een oefening om je rode draad terug te vinden.",
    read: "5 min lezen" },
  { slug: "energie-en-motivatie-in-werk", category: "sterker", label: "Voor medewerkers",
    title: "Energie en motivatie in werk: het verschil tussen moe zijn en leeglopen",
    desc: "Geen energie of motivatie meer voor je werk? Ontdek het verschil tussen moe zijn en leeglopen, en wat je eraan kunt doen voordat het groter wordt.",
    read: "5 min lezen" },
  { slug: "solliciteren-en-arbeidsmarkt", category: "richting", label: "Voor medewerkers",
    title: "Solliciteren: waarom meer sollicitaties zelden het antwoord is",
    desc: "Hoor je niets terug op je sollicitaties? Vaak ligt het niet aan jou, maar aan het kanaal. Waarom netwerken en zichtbaarheid meer opleveren dan stapels brieven, met arbeidsmarktcijfers van UWV.",
    read: "5 min lezen" },
  { slug: "duurzame-inzetbaarheid-werkgever", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Duurzame inzetbaarheid: waarom het vitaliteitsprogramma vaak niet werkt, en wat wel",
    desc: "Een vitaliteitsprogramma voor iedereen raakt vaak niet de kern. Met cijfers van TNO en UWV: waarom dat zo is, en wat voor werkgevers in Amsterdam en Haarlem wél werkt.",
    read: "6 min lezen" },
  { slug: "persoonlijke-effectiviteit", category: "sterker", label: "Voor medewerkers",
    title: "Persoonlijke effectiviteit: waarom je grootste zwakte vaak je sterkste kant is",
    desc: "Effectiever worden begint niet bij meer discipline, maar bij weten wat je wilt en waar je goed in bent. Over perfectionisme, keuzes maken en je sterke kanten op het juiste moment inzetten.",
    read: "5 min lezen" },
  { slug: "loopbaangesprek-met-medewerker", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Het loopbaangesprek met uw medewerker: waarom het exitgesprek te laat is",
    desc: "Het beste loopbaangesprek voert u niet bij het exitgesprek, maar als er nog niets aan de hand is. Waarom een onafhankelijk loopbaangesprek talent behoudt en zichtbaar maakt.",
    read: "6 min lezen" },
  { slug: "goede-loopbaancoach-kiezen", category: "richting", label: "Voor medewerkers",
    title: "Een goede loopbaancoach kiezen: waarom de klik belangrijker is dan het cv",
    desc: "Niet de methode of het diploma maakt het verschil, maar de klik. Lees waar je echt op let als je een coach kiest.",
    read: "5 min lezen" },
  { slug: "impostersyndroom-twijfel-als-kracht", category: "sterker", label: "Voor medewerkers",
    title: "Je voelt je een bedrieger? Dat zegt iets goeds over je",
    desc: "Het impostersyndroom treft juist mensen die hun werk serieus nemen. Lees waarom twijfel een kracht kan zijn.",
    read: "5 min lezen" },
  { slug: "skillsgericht-werven", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "De ideale kandidaat bestaat niet, de geschikte wel",
    desc: "Waarom werven op diploma's u talent kost, en hoe skillsgericht kijken uw vijver vergroot en intern talent zichtbaar maakt.",
    read: "6 min lezen" },
  { slug: "kosten-van-een-verkeerde-match", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "De verkeerde match: wat een medewerker op de verkeerde plek u elke dag kost",
    desc: "De duurste medewerker is niet wie vertrekt, maar wie blijft op de verkeerde plek. Lees hoe u een stille mismatch herkent en herstelt.",
    read: "6 min lezen" },
  { slug: "outplacement-of-loopbaancoaching", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Outplacement of loopbaancoaching: wat past wanneer?",
    desc: "Wie outplacement zoekt, is meestal twee gesprekken te laat. Het verschil tussen beide vormen, wanneer welke past, en wat wij bewust wel en niet doen.",
    read: "6 min lezen" },
  { slug: "loopbaanswitch-na-je-40e", category: "richting", label: "Voor medewerkers",
    title: "Een loopbaanswitch na je 40e of 50e: waarom het geen achterstand is",
    desc: "Voel je je te oud voor een switch? Waarom je ervaring je voorsprong is, hoe je met leeftijdsdiscriminatie omgaat, en met welke route het wél lukt.",
    read: "5 min lezen" },
  { slug: "duurzaam-inzetbaar-blijven", category: "sterker", label: "Voor medewerkers",
    title: "Duurzaam inzetbaar blijven in je werk",
    desc: "Hoe blijf je vitaal, vaardig en gemotiveerd in je werk? De vier dingen die het verschil maken, plus een korte zelfcheck.",
    read: "5 min lezen" },
  { slug: "ervaren-talent-als-kans", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "De vijftigplusser als kans: waarom u ervaren talent te vroeg afschrijft",
    desc: "Leeftijdsdiscriminatie is de meest voorkomende vorm van arbeidsmarktdiscriminatie, en het kost u talent dat u in een krappe markt hard nodig heeft.",
    read: "6 min lezen" },
  { slug: "generaties-op-de-werkvloer", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Generaties op de werkvloer: de verschillen zijn kleiner dan de verhalen",
    desc: "Wie op generatie-etiketten stuurt, mist wat iedereen nodig heeft. Waarom levensfase een betere gids is dan het geboortejaar.",
    read: "6 min lezen" },
  { slug: "het-tegenbod", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Het tegenbod: waarom het vertrek meestal alleen uitstelt",
    desc: "Een tegenbod koopt geen loyaliteit maar tijd. Wat u er werkelijk mee koopt, en welk gesprek wel iets oplevert als een goede kracht opzegt.",
    read: "5 min lezen" },
  { slug: "je-eerste-baan", category: "sterker", label: "Voor medewerkers",
    title: "Je eerste baan: overleven of floreren?",
    desc: "Twijfel in je eerste baan is geen bewijs dat je het niet kunt. Het is de overgang zelf, en die kun je leren. Met vijf dingen die je deze week al kunt doen.",
    read: "5 min lezen" },
  { slug: "job-crafting", category: "sterker", label: "Voor medewerkers",
    title: "Job crafting: je baan verbouwen zonder te verhuizen",
    desc: "Een betere baan begint vaker met verbouwen dan met verhuizen. Over de drie knoppen van job crafting en waar je begint.",
    read: "5 min lezen" },
  { slug: "mentale-vermoeidheid-en-eigen-regie", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "Mentale vermoeidheid en eigen regie: wat vier jaar benchmarkdata werkgevers vertelt",
    desc: "De DIX-benchmark 2022-2025 laat zien dat werkend Nederland sterk scoort op kennis en werkplezier, maar kwetsbaar is op mentale vermoeidheid en eigen regie. Wat werkgevers daarmee kunnen, voorbij de mindfulness-app.",
    read: "6 min lezen" },
  { slug: "passie-terugvinden-in-je-werk", category: "sterker", label: "Voor medewerkers",
    title: "De vonk terug na twintig jaar: waarom je je passie niet vindt, maar opbouwt",
    desc: "Je kent je vak, maar mist de creatieve vonk? Volg je passie is vaak het verkeerde advies. Hoe je bevlogenheid terugvindt met je ervaring als grondstof.",
    read: "5 min lezen" },
  { slug: "starters-behouden", category: "werkgevers", label: "Voor werkgevers & HR",
    title: "De helft van de starters is binnen twee jaar weg: wat het eerste jaar vraagt",
    desc: "Het lek zit niet bij de werving maar in de eerste maanden. Over de transitieschok, de frisse blik-valkuil en drie acties die het verschil maken.",
    read: "6 min lezen" },
  { slug: "vastzitten-in-een-goede-baan", category: "richting", label: "Voor medewerkers",
    title: "Vastzitten in een goede baan: de gouden kooi",
    desc: "Goed salaris, prima voorwaarden, en toch elke week minder zin. Waarom een goede baan kan vastzetten, en hoe je de deur weer opent.",
    read: "5 min lezen" },
  { slug: "vier-basisbehoeften-in-werk", category: "sterker", label: "Voor medewerkers",
    title: 'Waarom "leuk werk" niet genoeg is: de vier basisbehoeften in werk',
    desc: "Werkgeluk gaat niet over leuke dingen doen, maar over voldoening. Over de vier knoppen waar werkplezier echt op draait.",
    read: "5 min lezen" },
];

// Sanity-check: hetzelfde-gevoel eerst binnen richting is al zo (staat vooraan in ARTICLES).

const HERO_AND_FEATURED = `<main id="main">

<section class="hero hero--petrol">
  <div class="watermark"></div>
  <div class="container hero-pad">
    <div class="hero-copy" style="max-width:760px;">
      <span class="badge badge--gold">Inzichten</span>
      <h1 class="h-hero">Korte stukken over werk, loopbaan en <span style="white-space:nowrap;">ontw<span class="idot">i</span>kkeling<span class="gold">.</span></span></h1>
      <p class="lead">Praktische inzichten voor werkgevers die hun mensen willen behouden, en voor medewerkers die sterker willen staan in hun werk. Geen lange theorie, wel concrete handvatten.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Uitgelicht</p>
      <h2 class="h-section">Om mee te beginnen</h2>
    </div>
    <a class="grid g2-wide" href="/inzichten/van-werven-naar-behouden" aria-label="Lees het uitgelichte artikel: Van werven naar behouden: waarom medewerkers vertrekken om stilstand, niet om salaris" style="gap:0;border-radius:18px;overflow:hidden;border:2px solid var(--petrol);color:inherit;">
      <div style="background:var(--linnen);padding:44px 48px;">
        <span style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);">Voor werkgevers &amp; HR · 6 min lezen</span>
        <h3 style="margin-top:16px;font-size:clamp(24px,2.6vw,32px);line-height:1.2;">Van werven naar behouden: waarom medewerkers vertrekken om stilstand, niet om salaris</h3>
        <p style="margin-top:16px;max-width:52ch;">Medewerkers verlaten hun werkgever zelden om meer salaris. Gebrek aan ontwikkeling en doorgroei is de voornaamste reden. Wat werkgevers in de regio Amsterdam en Haarlem kunnen doen, onderbouwd met actuele UWV- en CBS-cijfers.</p>
      </div>
      <div style="background:var(--petrol);padding:44px 48px;display:flex;flex-direction:column;gap:16px;justify-content:center;">
        <span style="align-self:flex-start;background:var(--goud);color:var(--on-goud);font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;border-radius:999px;padding:5px 14px;">Uitgelicht</span>
        <p style="color:var(--mint);font-size:15px;line-height:1.65;">Het artikel om mee te beginnen als je nadenkt over behoud van talent in jouw organisatie.</p>
        <span style="font-size:14px;font-weight:500;color:var(--goud);">Lees verder →</span>
      </div>
    </a>
  </div>
</section>`;

const THEMAS_AND_CTA = `<section class="section section--petrol">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow eyebrow--gold">Waar we over schrijven</p>
      <h2 class="h-section">Thema's die terugkomen</h2>
      <p>Onze stukken gaan over de vragen die we dagelijks in de praktijk tegenkomen, bij medewerkers, particulieren en in gesprekken met HR.</p>
    </div>
    <ul class="chips">
      <li class="chip">Patronen herkennen en veranderen</li>
      <li class="chip">Richting vinden in je loopbaan</li>
      <li class="chip">Energie en motivatie in werk</li>
      <li class="chip">Duurzaam inzetbaar blijven</li>
      <li class="chip">Persoonlijke effectiviteit</li>
      <li class="chip">Een coach kiezen</li>
      <li class="chip">Zelfvertrouwen en twijfel</li>
      <li class="chip">Medewerkers begeleiden als HR</li>
      <li class="chip">Skillsgericht werven</li>
      <li class="chip">De juiste match</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="facet">
      <div class="facet-inner">
        <div>
          <h2>Een vraag over een van deze thema's?</h2>
          <p>We denken graag mee, vrijblijvend en zonder verkooppraat.</p>
        </div>
        <a class="btn btn-primary" href="/kennismaken">Plan een kennismakingsgesprek</a>
      </div>
    </div>
  </div>
</section>

</main>`;

// Inline styling voor filterbalk — huisstijl-tokens, geen nieuwe kleuren.
const FILTER_CSS = `
.inz-filter-wrap{margin-bottom:28px}
.inz-tablist{display:flex;gap:10px;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:4px 0 6px}
.inz-tablist::-webkit-scrollbar{display:none}
.inz-tab{flex:0 0 auto;appearance:none;background:transparent;border:1.5px solid var(--petrol);color:var(--petrol);font:inherit;font-size:14.5px;font-weight:500;padding:9px 18px;border-radius:999px;cursor:pointer;transition:background-color .15s ease,color .15s ease,border-color .15s ease;white-space:nowrap}
.inz-tab:hover{background:var(--linnen)}
.inz-tab[aria-selected="true"]{background:var(--petrol);color:var(--linnen);border-color:var(--petrol)}
.inz-tab .inz-count{opacity:.75;margin-left:6px;font-weight:400}
.inz-tab[aria-selected="true"] .inz-count{opacity:.85}
.inz-tab:focus-visible{outline:2px solid var(--koraal);outline-offset:2px}
.inz-panel{transition:opacity .15s ease}
.inz-panel.is-fading{opacity:0}
.inz-empty{padding:32px;background:var(--linnen);border-radius:16px;color:var(--muted);font-size:15px}
@media(max-width:640px){.inz-tab{padding:8px 14px;font-size:14px}}
`;

function labelStyle(label: Article["label"]): React.CSSProperties {
  if (label === "Voor werkgevers & HR") {
    return {
      alignSelf: "flex-start",
      border: "1px solid var(--goud)",
      color: "var(--petrol)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      borderRadius: 999,
      padding: "4px 12px",
    };
  }
  return {
    alignSelf: "flex-start",
    background: "var(--mint)",
    color: "var(--petrol)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: ".04em",
    textTransform: "uppercase",
    borderRadius: 999,
    padding: "4px 12px",
  };
}

function readCategoryFromUrl(): TabKey {
  if (typeof window === "undefined") return "alle";
  const p = new URLSearchParams(window.location.search).get("categorie");
  if (p === "werkgevers" || p === "sterker" || p === "richting") return p;
  return "alle";
}

function InzichtenFilter() {
  const [active, setActive] = useState<TabKey>("alle");
  const [fading, setFading] = useState(false);
  const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    alle: null, werkgevers: null, sterker: null, richting: null,
  });

  // Hydrate from URL after mount (avoids SSR mismatch)
  useEffect(() => {
    setActive(readCategoryFromUrl());
  }, []);

  // Sync URL with replaceState (no history push)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (active === "alle") url.searchParams.delete("categorie");
    else url.searchParams.set("categorie", active);
    const next = url.pathname + (url.search ? url.search : "") + url.hash;
    window.history.replaceState(window.history.state, "", next);
  }, [active]);

  const gridArticles = useMemo(() => ARTICLES.filter((a) => !a.featured), []);

  const counts: Record<TabKey, number> = useMemo(() => {
    const c: Record<TabKey, number> = { alle: ARTICLES.length, werkgevers: 0, sterker: 0, richting: 0 };
    for (const a of ARTICLES) c[a.category]++;
    return c;
  }, []);

  const visibleCount = active === "alle" ? counts.alle : counts[active];

  const changeTab = useCallback((key: TabKey) => {
    if (key === active) return;
    setFading(true);
    window.setTimeout(() => {
      setActive(key);
      setFading(false);
    }, 150);
  }, [active]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const idx = TAB_ORDER.indexOf(active);
    let nextIdx = idx;
    if (e.key === "ArrowRight") nextIdx = (idx + 1) % TAB_ORDER.length;
    else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + TAB_ORDER.length) % TAB_ORDER.length;
    else if (e.key === "Home") nextIdx = 0;
    else if (e.key === "End") nextIdx = TAB_ORDER.length - 1;
    const nextKey = TAB_ORDER[nextIdx];
    changeTab(nextKey);
    tabRefs.current[nextKey]?.focus();
  };

  return (
    <section className="section section--linnen">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Recent</p>
          <h2 className="h-section">Meer inzichten</h2>
        </div>

        <div className="inz-filter-wrap">
          <div role="tablist" aria-label="Filter op categorie" className="inz-tablist">
            {TAB_ORDER.map((key) => (
              <button
                key={key}
                ref={(el) => { tabRefs.current[key] = el; }}
                type="button"
                role="tab"
                id={`inz-tab-${key}`}
                aria-selected={active === key}
                aria-controls="inz-tabpanel"
                tabIndex={active === key ? 0 : -1}
                onClick={() => changeTab(key)}
                onKeyDown={onKeyDown}
                className="inz-tab"
              >
                {TAB_LABEL[key]} <span className="inz-count">({counts[key]})</span>
              </button>
            ))}
          </div>
          <p aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", clipPath: "inset(50%)", whiteSpace: "nowrap" }}>
            {visibleCount} artikelen
          </p>
        </div>

        <div
          id="inz-tabpanel"
          role="tabpanel"
          aria-labelledby={`inz-tab-${active}`}
          className={`inz-panel${fading ? " is-fading" : ""}`}
        >
          {visibleCount === 0 ? (
            <p className="inz-empty">Geen artikelen in deze categorie.</p>
          ) : (
            <div className="grid g3">
              {gridArticles.map((a) => {
                const hidden = active !== "alle" && a.category !== active;
                const className = `card card--paper${a.highlight ? " card--anchor ring-paper" : ""}`;
                return (
                  <a
                    key={a.slug}
                    href={`/inzichten/${a.slug}`}
                    className={className}
                    aria-label={`Lees: ${a.title}`}
                    aria-hidden={hidden || undefined}
                    style={{
                      display: hidden ? "none" : "flex",
                      flexDirection: "column",
                      gap: 12,
                      color: "inherit",
                    }}
                  >
                    <span style={labelStyle(a.label)}>{a.label}</span>
                    <h3 style={{ fontSize: 20, margin: 0 }}>{a.title}</h3>
                    <p style={{ fontSize: 14.5 }}>{a.desc}</p>
                    <span style={{ fontSize: 12.5, color: "var(--muted)" }}>{a.read}</span>
                    <span style={{ marginTop: "auto", fontSize: 14, fontWeight: 500, color: "var(--koraal)" }}>Lees verder →</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FILTER_CSS }} />
      <SiteHeader active="inzichten" />
      <div dangerouslySetInnerHTML={{ __html: HERO_AND_FEATURED }} />
      <InzichtenFilter />
      <div dangerouslySetInnerHTML={{ __html: THEMAS_AND_CTA }} />
      <SiteFooter />
    </>
  );
}
