import { useEffect, useRef, useState, type ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Vizier%20op%20Scherp%20Haarlem&query_place_id=ChIJefzwiBnhxUcRX8SiF1qidt4";

export type CityLandingData = {
  citySlug: "haarlem" | "amsterdam";
  hero: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
    primaryCta: { label: string };
    secondaryCta: { label: string; href: string };
    note?: string;
    hrNote?: { text: string; linkLabel: string; href: string };
    image: { src: string; alt: string };
    floatCard?: { label: string; text: string };
  };
  recognise: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: Array<{ label: string; title: string; body: ReactNode }>;
  };
  location: {
    eyebrow: string;
    title: string;
    lead: string;
    cardTitle: string;
    cardText: string;
    rows: Array<{ title: string; text: string }>;
    sideLabel: string;
    sideText: string;
    sideList: string[];
  };
  steps: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: { label: string };
    listLabel: string;
    items: Array<{ num: string; title: string; text: string }>;
  };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: Array<{ num: string; label: string }>;
    quote: string;
    quotePhoto?: { src: string; alt: string };
    cite: string;
  };
  coaches: Array<{ name: string; role: string; label?: string; quote: string; photo: string }>;
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: ReactNode; text: string }>;
  };
  cta: { title: string; text: string; button: { label: string } };
};

function Pictogram({ name }: { name: "gesprek" | "vertrouwelijk" }) {
  return (
    <svg width="44" height="44" viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ display: "block", marginBottom: 16 }}>
      {name === "gesprek" ? (
        <>
          <path d="M38 20 L62 44 L38 68 L14 44 Z" style={{ stroke: "var(--linnen)" }} strokeWidth="6" strokeLinejoin="round" />
          <path d="M62 32 L86 56 L62 80 L38 56 Z" style={{ stroke: "var(--koraal)" }} strokeWidth="6" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M50 18 L82 50 L50 82 L18 50 Z" style={{ stroke: "var(--linnen)" }} strokeWidth="6" strokeLinejoin="round" />
          <path d="M50 36 L64 50 L50 64 L36 50 Z" style={{ stroke: "var(--koraal)" }} strokeWidth="6" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="5" style={{ fill: "var(--goud)" }} />
        </>
      )}
    </svg>
  );
}

const CSS = `
.city{--vos-petrol:#1F3D3B;--vos-paper:#FAF6EF;--vos-linnen:#F5EFE3;--vos-warm:#FBF1D7;--vos-goud:#F2C879;--vos-koraal:#E8714A;--vos-koraal-deep:#C85A36;--vos-mint:#D8E5E2;--vos-mint-dof:#BFD0CB;--vos-text-koraal:#3A241A;--vos-body:#4A5550;--vos-body-warm:#5A5442;--vos-muted:#7A7466;--vos-goudlabel:#A8834B;--vos-rand:#E4DCC8;--vos-photo-overlay:linear-gradient(160deg, rgba(31,61,59,.60), rgba(31,61,59,.26) 55%, rgba(232,113,74,.18));--vos-wm-light:rgba(31,61,59,.07);--vos-wm-petrol-line:rgba(245,239,227,.09);--vos-float-shadow:0 18px 40px rgba(31,61,59,.20);--maxw:1200px;--font-display:"Bricolage Grotesque",sans-serif;--font-body:"Instrument Sans",sans-serif;background:var(--vos-paper);color:var(--vos-body);font-family:var(--font-body);font-size:16px;line-height:1.65}
.city *{box-sizing:border-box}
.city h1,.city h2,.city h3{font-family:var(--font-display);font-weight:500;letter-spacing:-.018em;line-height:1.1;text-wrap:balance;margin:0}
.city p{margin:0 0 1em}
.city a{color:var(--vos-koraal);text-decoration:none}
.city a:hover{color:var(--vos-koraal-deep)}
.city img{max-width:100%;display:block}
.city .container{max-width:var(--maxw);margin:0 auto;padding:0 32px}
.city .section{padding:96px 0}
.city .section--paper{background:var(--vos-paper)}
.city .section--linnen{background:var(--vos-linnen)}
.city .section--petrol{background:var(--vos-petrol);color:var(--vos-mint)}
.city .section-title{font-size:clamp(30px,3.4vw,42px);color:var(--vos-petrol)}
.city .section-intro{max-width:58ch;margin-top:16px}
.city .label{font-size:11px;text-transform:uppercase;letter-spacing:.18em;font-weight:600;color:var(--vos-goudlabel);margin-bottom:10px}
.city .section--petrol .label{color:var(--vos-goud)}
.city .idot{position:relative;display:inline-block}
.city .idot::before{content:"";position:absolute;left:50%;top:0;width:.19em;height:.27em;background:var(--vos-paper);transform:translateX(-50%)}
.city .idot::after{content:"";position:absolute;left:50%;top:.075em;width:.17em;height:.17em;background:var(--vos-koraal);transform:translateX(-50%) rotate(45deg)}
.city .slotpunt{color:var(--vos-goud)}
.city .nowrap{white-space:nowrap}
.city .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font-body);font-weight:500;font-size:15px;padding:15px 26px;border-radius:10px;cursor:pointer;transition:.18s;border:none}
.city .btn--primary{background:var(--vos-koraal);color:var(--vos-text-koraal)}
.city .btn--primary:hover{filter:brightness(.95);color:var(--vos-text-koraal)}
.city .btn--outline{background:transparent;border:1.5px solid var(--vos-petrol);color:var(--vos-petrol)}
.city .btn--outline:hover{border-color:var(--vos-koraal);color:var(--vos-petrol)}
.city .hero{position:relative;overflow:hidden;padding:84px 0 96px}
.city .hero__wm{position:absolute;right:-140px;top:60px;width:460px;height:460px;border:2px solid var(--vos-wm-light);transform:rotate(45deg);pointer-events:none}
.city .hero__grid{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center;position:relative}
.city .hero h1{font-size:clamp(42px,5vw,68px);color:var(--vos-petrol);margin-bottom:22px}
.city .hero__lead{font-size:17.5px;max-width:56ch;color:var(--vos-body);margin-bottom:30px}
.city .hero__cta{display:flex;flex-wrap:wrap;gap:14px}
.city .hero__note{font-size:14.5px;color:var(--vos-muted);margin:14px 0 0}
.city .hero__hr-note{font-size:14.5px;color:var(--vos-muted);margin:6px 0 0}
.city .hero__hr-note a{color:var(--vos-koraal);text-decoration:underline}
.city .hero-media{position:relative;overflow:visible}
.city .hero-media__frame{position:relative;overflow:hidden;aspect-ratio:4/5;clip-path:polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)}
.city .hero-media__frame img{width:100%;height:100%;object-fit:cover}
.city .hero-media__frame::after{content:"";position:absolute;inset:0;background:var(--vos-photo-overlay)}
.city .hero-media__anchor{position:absolute;left:18px;bottom:18px;width:12px;height:12px;background:var(--vos-goud);transform:rotate(45deg);box-shadow:0 0 0 5px var(--vos-petrol);z-index:2}
.city .float-card{position:absolute;left:-18px;bottom:30px;background:var(--vos-warm);border-radius:14px;padding:16px 18px;max-width:236px;box-shadow:var(--vos-float-shadow);z-index:3}
.city .float-card .label{margin-bottom:6px}
.city .float-card p{margin:0;font-size:14.5px;color:var(--vos-body-warm);line-height:1.5}
.city .hero .badge{margin-bottom:18px}
.city .dark-card .rows p{margin:0}
.city .quote{max-width:760px;margin:40px auto 0}
.city .two .card h3{font-size:21px;margin-bottom:12px}
.city .two .card .label{display:block;margin-bottom:12px}
.city .two .card p{margin:0}
.city .two{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:34px}
.city .feature h2{font-size:clamp(30px,3.4vw,42px);color:var(--vos-linnen);margin-bottom:18px;max-width:20ch}
.city .feature__lead{font-size:17.5px;color:var(--vos-mint);max-width:60ch;margin-bottom:8px}
.city .feature__grid{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:start;margin-top:26px}
.city .dark-card{border:2px solid var(--vos-wm-petrol-line);border-radius:16px;padding:32px 30px}
.city .dark-card h3{font-size:21px;color:var(--vos-linnen);margin-bottom:12px}
.city .dark-card p{color:var(--vos-mint);margin:0 0 .8em}
.city .feature__side p{color:var(--vos-mint)}
.city .steps-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center}
.city .steps-grid h2{font-size:clamp(30px,3.4vw,42px);color:var(--vos-petrol);margin-bottom:16px;max-width:16ch}
.city .trap{display:flex;flex-direction:column;margin-top:6px}
.city .trap__step{position:relative;padding:0 0 26px 0}
.city .trap__step:last-child{padding-bottom:0}
.city .trap__num{font-family:var(--font-display);font-size:13px;letter-spacing:.14em;color:var(--vos-goudlabel);text-transform:uppercase}
.city .trap__step h3{font-size:19px;color:var(--vos-petrol);margin:4px 0}
.city .trap__step p{margin:0;color:var(--vos-body);font-size:15.5px}
.city .why-head{max-width:60ch;margin-bottom:36px}
.city .why-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.city .why-cards--4{grid-template-columns:repeat(4,minmax(0,1fr))}
.city .coaches-title{font-size:22px;color:var(--vos-petrol);margin-bottom:24px}
.city .why-card{min-width:0;overflow-wrap:anywhere;display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.city .why-card .avatar{margin-bottom:4px}
.city .why-card .avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}
.city .why-card .role{font-size:14px;font-weight:500;color:var(--vos-koraal)}
.city .why-card .li-link{margin-top:auto;font-size:14px}
.city .why-card{background:var(--vos-paper);border:1px solid var(--vos-rand);border-radius:15px;padding:28px 26px}
.city .why-card h3{font-size:20px;color:var(--vos-petrol);margin-bottom:8px}
.city .why-card p{margin:0;color:var(--vos-body);font-size:15.5px}
.city .faq{max-width:820px}
.city .faq__item{border-bottom:1px solid var(--vos-rand);padding:6px 0}
.city .faq__question{width:100%;background:none;border:none;text-align:left;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 0;font-family:var(--font-display);font-size:19px;color:var(--vos-petrol);font-weight:500;line-height:1.3}
.city .faq__question{list-style:none}
.city .faq__question::-webkit-details-marker{display:none}
.city .faq__question::marker{content:""}
.city .faq__question::after{content:none}
.city .faq__question .plus{position:relative;width:20px;height:20px;flex:0 0 auto;transition:transform .2s}
.city .faq__question .plus::before,.city .faq__question .plus::after{content:"";position:absolute;background:var(--vos-koraal)}
.city .faq__question .plus::before{left:9px;top:0;width:2px;height:20px}
.city .faq__question .plus::after{top:9px;left:0;height:2px;width:20px}
.city .faq__item[open] .plus{transform:rotate(45deg)}
.city .faq__answer p{margin:0 0 20px;color:var(--vos-body);max-width:70ch}
.city .cta-wrap{position:relative;padding:2px;background:var(--vos-goud);clip-path:polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)}
.city .cta-inner{background:var(--vos-warm);clip-path:polygon(21px 0, 100% 0, 100% calc(100% - 21px), calc(100% - 21px) 100%, 0 100%, 0 21px);padding:56px 48px;text-align:center}
.city .cta-inner h2{font-size:clamp(28px,3vw,40px);color:var(--vos-petrol);margin-bottom:14px;max-width:20ch;margin-inline:auto}
.city .cta-inner p{color:var(--vos-body-warm);max-width:52ch;margin:0 auto 26px}
.city .mobile-bar{display:none;visibility:hidden}
@media (max-width:900px){
  .city .hero__grid,.city .feature__grid,.city .two,.city .steps-grid,.city .why-cards{grid-template-columns:1fr}
  .city .hero-media{margin-top:36px}
  .city .float-card{left:12px;bottom:16px}
  .city .section{padding:64px 0}
  .city .container{padding:0 20px}
  .city .cta-inner{padding:40px 24px}
  .city .mobile-bar{display:grid;grid-template-columns:1fr 1fr;gap:12px;position:fixed;bottom:0;left:0;right:0;z-index:50;background:var(--vos-paper);border-top:1px solid var(--vos-rand);padding:12px 20px calc(12px + env(safe-area-inset-bottom));opacity:0;transition:opacity .18s}
  .city .mobile-bar--visible{visibility:visible;opacity:1}
  .city .mobile-bar .btn{padding:13px 10px;min-width:0}
}
@media (prefers-reduced-motion:reduce){.city *{transition:none!important;animation:none!important}}
.vos-google-blok--licht .vos-google{display:inline-flex;flex-wrap:wrap;align-items:center;gap:14px 22px}
.vos-google-blok--licht .vos-google-pil{display:inline-flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--line);border-radius:999px;padding:12px 24px 12px 26px;box-shadow:0 1px 2px rgba(22,48,46,.08)}
.vos-google-blok--licht .vos-google-score{font-family:var(--f-display);font-weight:500;font-size:32px;line-height:1;color:var(--petrol);letter-spacing:-0.01em}
.vos-google-blok--licht .vos-google-sterren{display:inline-flex;gap:4px}
.vos-google-blok--licht .vos-google-sterren svg{display:block;width:22px;height:22px;fill:#CFA24E}
.vos-google-blok--licht .vos-google-link{font-size:16px;font-weight:500;color:var(--petrol);border-bottom:1px solid var(--koraal);padding-bottom:2px;transition:color .15s}
.vos-google-blok--licht .vos-google:hover .vos-google-link,.vos-google-blok--licht .vos-google:focus-visible .vos-google-link{color:var(--koraal-deep)}
.vos-google-blok--licht .vos-google:focus-visible{outline:2px solid var(--koraal);outline-offset:6px;border-radius:12px}
.vos-google-blok--licht .vos-google-alle{margin-top:16px;font-size:14.5px}
.vos-google-blok--licht .vos-google-alle a{color:var(--body-c);border-bottom:1px solid var(--line);padding-bottom:1px;transition:color .15s,border-color .15s}
.vos-google-blok--licht .vos-google-alle a:hover{color:var(--koraal-deep);border-bottom-color:var(--koraal)}
`;

export default function CityLandingPage({ data }: { data: CityLandingData }) {
  const heroRef = useRef<HTMLElement>(null);
  const slotRef = useRef<HTMLElement>(null);
  const [heroPassed, setHeroPassed] = useState(false);
  const [slotReached, setSlotReached] = useState(true);
  const planLink = (place: "hero" | "stappen" | "slot" | "balk") =>
    `/kennismaken?locatie=${data.citySlug}&knop=${place}#plannen`;

  useEffect(() => {
    const hero = heroRef.current;
    const slot = slotRef.current;
    if (!hero || !slot) return;
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry) setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    const slotObserver = new IntersectionObserver(([entry]) => {
      if (entry) setSlotReached(entry.isIntersecting || entry.boundingClientRect.top <= 0);
    });
    heroObserver.observe(hero);
    slotObserver.observe(slot);
    return () => {
      heroObserver.disconnect();
      slotObserver.disconnect();
    };
  }, []);
  return (
    <>
      <SiteHeader />
      <style>{CSS}</style>
      <div className="city">
        <main id="main">
          <section ref={heroRef} className="hero section--paper">
            <span className="hero__wm" aria-hidden="true"></span>
            <div className="container hero__grid">
              <div>
                <span className="badge badge--dark">{data.hero.eyebrow}</span>
                <h1>{data.hero.title}</h1>
                <p className="hero__lead">{data.hero.lead}</p>
                <div className="hero__cta">
                  <a className="btn btn--primary" href={planLink("hero")}>{data.hero.primaryCta.label}</a>
                  <a className="btn btn--outline" href={data.hero.secondaryCta.href}>{data.hero.secondaryCta.label}</a>
                </div>
                {data.hero.note && <p className="hero__note">{data.hero.note}</p>}
                {data.hero.hrNote && (
                  <p className="hero__hr-note">{data.hero.hrNote.text}{" "}<a href={data.hero.hrNote.href}>{data.hero.hrNote.linkLabel}</a></p>
                )}
              </div>
              <div className="hero-media">
                <div className="hero-media__frame">
                  <span className="hero-media__anchor" aria-hidden="true"></span>
                  <img src={data.hero.image.src} alt={data.hero.image.alt} width={720} height={900} fetchPriority="high" decoding="async" />
                </div>
                {data.hero.floatCard && (
                  <div className="float-card">
                    <div className="label">{data.hero.floatCard.label}</div>
                    <p>{data.hero.floatCard.text}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="section section--linnen">
            <div className="container">
              <span className="eyebrow">{data.recognise.eyebrow}</span>
              <h2 className="section-title" style={{ maxWidth: "22ch" }}>{data.recognise.title}</h2>
              <p className="section-intro">{data.recognise.intro}</p>
              <div className="two">
                {data.recognise.cards.map((c, i) => (
                  <div className={i === 0 ? "card card--open open-linnen" : "card card--paper"} key={c.title}>
                    <div className="label">{c.label}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section--petrol">
            <div className="container feature">
              <span className="eyebrow eyebrow--gold">{data.location.eyebrow}</span>
              <h2>{data.location.title}</h2>
              <p className="feature__lead">{data.location.lead}</p>
              <div className="feature__grid">
                <div className="dark-card">
                  <Pictogram name="gesprek" />
                  <h3>{data.location.cardTitle}</h3>
                  <p>{data.location.cardText}</p>
                  <div className="rows rows--compact">
                    {data.location.rows.map((r) => (
                      <div className="row" key={r.title}>
                        <div className="row-title">{r.title}</div>
                        <p>{r.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="feature__side">
                  <Pictogram name="vertrouwelijk" />
                  <div className="label">{data.location.sideLabel}</div>
                  <p>{data.location.sideText}</p>
                  <ul className="vos-lijst vos-lijst--check vos-lijst--donker" style={{ marginTop: 20 }}>
                    {data.location.sideList.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--paper">
            <div className="container">
              <div className="steps-grid">
                <div>
                  <span className="eyebrow">{data.steps.eyebrow}</span>
                  <h2>{data.steps.title}</h2>
                  <p>{data.steps.intro}</p>
                  <p style={{ marginTop: 24 }}>
                    <a className="btn btn--primary" href={planLink("stappen")}>{data.steps.cta.label}</a>
                  </p>
                </div>
                <div>
                  <div className="label">{data.steps.listLabel}</div>
                  <div className="trap">
                    {data.steps.items.map((s) => (
                      <div className="trap__step" key={s.num}>
                        <div className="trap__num">{s.num}</div>
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--linnen">
            <div className="container">
              <div className="why-head">
                <span className="eyebrow">{data.why.eyebrow}</span>
                <h2 className="section-title">{data.why.title}</h2>
                <p className="section-intro">{data.why.intro}</p>
              </div>
              <div className="card card--petrol" style={{ marginBottom: 40 }}>
                <div className="bigstats bigstats--3">
                {data.why.stats.map((s) => (
                  <div className="bigstat" key={s.num}>
                    <b>{s.num}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
                </div>
              </div>
              <h3 className="coaches-title">Je coach in {data.citySlug === "haarlem" ? "Haarlem" : "Amsterdam"}</h3>
              <div className={`why-cards${data.coaches.length === 4 ? " why-cards--4" : ""}`}>
                {data.coaches.map((coach) => (
                  <article className="why-card" key={coach.name}>
                    <span className="avatar"><img src={coach.photo} alt={coach.name} width={72} height={72} loading="lazy" /></span>
                    <h3>{coach.name}</h3>
                    <span className="role">{coach.role}</span>
                    {coach.label && <span className="tag tag--hl">{coach.label}</span>}
                    <p className="coach-quote">{coach.quote}</p>
                    <a className="li-link" href="/over-ons#coaches">Bekijk het profiel van {coach.name.split(" ")[0]}</a>
                  </article>
                ))}
              </div>
              <div className="grid g2" style={{ gap: 48, alignItems: "center" }}>
                <figure className="quote">
                  <div className="quote-rail" aria-hidden="true"><span className="top"></span><span className="bar"></span><span className="end"></span></div>
                  <div>
                    {data.why.quotePhoto && (
                      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 14 }}>
                        <span className="testimonial-avatar" style={{ display: "block", width: 72, height: 72, borderRadius: "50%", overflow: "hidden", flex: "none", background: "var(--petrol)", position: "relative" }}>
                          <img src={data.why.quotePhoto.src} alt={data.why.quotePhoto.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                          <span style={{ position: "absolute", right: -2, bottom: 2, width: 10, height: 10, background: "var(--goud)", transform: "rotate(45deg)", boxShadow: "0 0 0 4px var(--paper)" }}></span>
                        </span>
                      </div>
                    )}
                    <blockquote>{data.why.quote}</blockquote>
                    <cite>{data.why.cite}</cite>
                  </div>
                </figure>
                <div className="quote vos-google-blok vos-google-blok--licht">
                  <div className="quote-rail" aria-hidden="true"><span className="top"></span><span className="bar"></span><span className="end"></span></div>
                  <div>
                    <a className="vos-google" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" aria-label="Gemiddeld 5,0 van de 5 sterren. Bekijk onze reviews op Google">
                      <span className="vos-google-pil">
                        <span className="vos-google-score">5,0</span>
                        <span className="vos-google-sterren" aria-hidden="true">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <svg key={i} viewBox="0 0 24 24"><path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96z" /></svg>
                          ))}
                        </span>
                      </span>
                      <span className="vos-google-link">Google reviews</span>
                    </a>
                    <p className="vos-google-alle"><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Lees alle reviews op onze Google-bedrijfspagina</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--paper">
            <div className="container">
              <span className="eyebrow">{data.faq.eyebrow}</span>
              <h2 className="section-title" style={{ marginBottom: 30 }}>{data.faq.title}</h2>
              <div className="faq">
                {data.faq.items.map((f) => (
                  <FaqItem
                    key={f.q}
                    question={f.q}
                    answer={f.a}
                  />
                ))}
              </div>
            </div>
          </section>

          <section ref={slotRef} className="section section--linnen">
            <div className="container">
              <div className="cta-wrap">
                <div className="cta-inner">
                  <h2>{data.cta.title}</h2>
                  <p>{data.cta.text}</p>
                  <a className="btn btn--primary" href={planLink("slot")}>{data.cta.button.label}</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className={`mobile-bar${heroPassed && !slotReached ? " mobile-bar--visible" : ""}`}>
          <a className="btn btn--primary" href={planLink("balk")}>Plan een gesprek</a>
          <a className="btn btn--outline" href="tel:+31202146466">Bel ons</a>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  return (
    <details className="faq__item">
      <summary className="faq__question">
        {question}
        <span className="plus" aria-hidden="true"></span>
      </summary>
      <div className="faq__answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}
