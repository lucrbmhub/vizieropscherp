import { useState, type ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export type CityLandingData = {
  hero: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: { src: string; alt: string };
    floatCard: { label: string; text: string };
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
    cta: { label: string; href: string };
    listLabel: string;
    items: Array<{ num: string; title: string; text: string }>;
  };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: Array<{ num: string; label: string }>;
    cards: Array<{ title: string; text: string }>;
    quote: string;
    cite: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: ReactNode }>;
  };
  cta: { title: string; text: string; button: { label: string; href: string } };
};

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
.city .eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;text-transform:uppercase;letter-spacing:.2em;font-weight:600;color:var(--vos-muted);margin-bottom:18px}
.city .eyebrow::before{content:"";width:7px;height:7px;background:var(--vos-koraal);transform:rotate(45deg);flex:0 0 auto}
.city .section--petrol .eyebrow{color:var(--vos-goud)}
.city .section--petrol .eyebrow::before{background:var(--vos-goud)}
.city .label{font-size:11px;text-transform:uppercase;letter-spacing:.18em;font-weight:600;color:var(--vos-goudlabel);margin-bottom:10px}
.city .section--petrol .label{color:var(--vos-goud)}
.city .idot{position:relative;display:inline-block}
.city .idot::before{content:"";position:absolute;left:50%;top:0;width:.19em;height:.27em;background:var(--vos-paper);transform:translateX(-50%)}
.city .idot::after{content:"";position:absolute;left:50%;top:.075em;width:.17em;height:.17em;background:var(--vos-koraal);transform:translateX(-50%) rotate(45deg)}
.city .slotpunt{color:var(--vos-goud)}
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
.city .hero-media{position:relative;overflow:visible}
.city .hero-media__frame{position:relative;overflow:hidden;aspect-ratio:4/5;clip-path:polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)}
.city .hero-media__frame img{width:100%;height:100%;object-fit:cover}
.city .hero-media__frame::after{content:"";position:absolute;inset:0;background:var(--vos-photo-overlay)}
.city .hero-media__anchor{position:absolute;left:18px;bottom:18px;width:12px;height:12px;background:var(--vos-goud);transform:rotate(45deg);box-shadow:0 0 0 5px var(--vos-petrol);z-index:2}
.city .float-card{position:absolute;left:-18px;bottom:30px;background:var(--vos-warm);border-radius:14px;padding:16px 18px;max-width:236px;box-shadow:var(--vos-float-shadow);z-index:3}
.city .float-card .label{margin-bottom:6px}
.city .float-card p{margin:0;font-size:14.5px;color:var(--vos-body-warm);line-height:1.5}
.city .two{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:34px}
.city .card-anchor{position:relative;background:var(--vos-warm);border-radius:15px;padding:34px 30px 30px}
.city .card-anchor::before{content:"";position:absolute;top:-7px;left:30px;width:12px;height:12px;background:var(--vos-koraal);transform:rotate(45deg);box-shadow:0 0 0 5px var(--vos-warm)}
.city .card-anchor h3{font-size:22px;color:var(--vos-petrol);margin-bottom:10px}
.city .card-anchor p{color:var(--vos-body-warm);margin:0}
.city .card-anchor a{font-weight:500}
.city .feature h2{font-size:clamp(30px,3.4vw,42px);color:var(--vos-linnen);margin-bottom:18px;max-width:20ch}
.city .feature__lead{font-size:17.5px;color:var(--vos-mint);max-width:60ch;margin-bottom:8px}
.city .feature__grid{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:start;margin-top:26px}
.city .dark-card{border:2px solid var(--vos-wm-petrol-line);border-radius:16px;padding:32px 30px}
.city .dark-card h3{font-size:21px;color:var(--vos-linnen);margin-bottom:12px}
.city .dark-card p{color:var(--vos-mint);margin:0 0 .8em}
.city .loc{display:flex;flex-direction:column;gap:10px;margin-top:14px}
.city .loc__row{display:flex;gap:12px;align-items:flex-start}
.city .loc__row::before{content:"";width:8px;height:8px;margin-top:8px;background:var(--vos-koraal);transform:rotate(45deg);flex:0 0 auto}
.city .loc__row strong{color:var(--vos-linnen);font-weight:500}
.city .feature__side p{color:var(--vos-mint)}
.city .ruitlist{list-style:none;margin:20px 0 0;padding:0;display:flex;flex-direction:column;gap:14px}
.city .ruitlist li{position:relative;padding-left:26px;color:var(--vos-body)}
.city .ruitlist li::before{content:"";position:absolute;left:0;top:8px;width:8px;height:8px;background:var(--vos-koraal);transform:rotate(45deg)}
.city .section--petrol .ruitlist li{color:var(--vos-mint)}
.city .steps-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center}
.city .steps-grid h2{font-size:clamp(30px,3.4vw,42px);color:var(--vos-petrol);margin-bottom:16px;max-width:16ch}
.city .trap{display:flex;flex-direction:column;margin-top:6px}
.city .trap__step{position:relative;padding:0 0 26px 40px}
.city .trap__step:last-child{padding-bottom:0}
.city .trap__step::before{content:"";position:absolute;left:5px;top:2px;width:12px;height:12px;background:var(--vos-koraal);transform:rotate(45deg)}
.city .trap__step::after{content:"";position:absolute;left:10px;top:16px;bottom:-2px;width:2px;background:var(--vos-rand)}
.city .trap__step:last-child::after{display:none}
.city .trap__num{font-family:var(--font-display);font-size:13px;letter-spacing:.14em;color:var(--vos-goudlabel);text-transform:uppercase}
.city .trap__step h3{font-size:19px;color:var(--vos-petrol);margin:4px 0}
.city .trap__step p{margin:0;color:var(--vos-body);font-size:15.5px}
.city .why-head{max-width:60ch;margin-bottom:36px}
.city .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-bottom:40px}
.city .stat{border-top:2px solid var(--vos-petrol);padding-top:16px;position:relative}
.city .stat::before{content:"";position:absolute;top:-7px;left:0;width:10px;height:10px;background:var(--vos-koraal);transform:rotate(45deg)}
.city .stat__num{font-family:var(--font-display);font-weight:500;font-size:34px;color:var(--vos-petrol);line-height:1}
.city .stat__label{font-size:14.5px;color:var(--vos-muted);margin-top:8px}
.city .why-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.city .why-card{background:var(--vos-paper);border:1px solid var(--vos-rand);border-radius:15px;padding:28px 26px}
.city .why-card h3{font-size:20px;color:var(--vos-petrol);margin-bottom:8px}
.city .why-card p{margin:0;color:var(--vos-body);font-size:15.5px}
.city .quote{display:grid;grid-template-columns:auto 1fr;gap:22px;max-width:760px;margin:40px auto 0}
.city .quote__rail{width:9px;display:flex;flex-direction:column;align-items:center;padding-top:6px}
.city .quote__rail i{width:9px;height:9px;background:var(--vos-koraal);transform:rotate(45deg)}
.city .quote__rail b{width:2px;flex:1;background:var(--vos-rand);margin:6px 0}
.city .quote__rail s{width:7px;height:7px;border-radius:50%;background:var(--vos-goud)}
.city .quote blockquote{margin:0;font-family:var(--font-display);font-size:19px;line-height:1.55;color:var(--vos-petrol)}
.city .quote cite{display:block;font-style:normal;font-size:14.5px;color:var(--vos-muted);margin-top:12px;font-family:var(--font-body)}
.city .faq{max-width:820px}
.city .faq__item{border-bottom:1px solid var(--vos-rand);padding:6px 0}
.city .faq__question{width:100%;background:none;border:none;text-align:left;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 0;font-family:var(--font-display);font-size:19px;color:var(--vos-petrol);font-weight:500;line-height:1.3}
.city .faq__question .plus{position:relative;width:20px;height:20px;flex:0 0 auto;transition:transform .2s}
.city .faq__question .plus::before,.city .faq__question .plus::after{content:"";position:absolute;background:var(--vos-koraal)}
.city .faq__question .plus::before{left:9px;top:0;width:2px;height:20px}
.city .faq__question .plus::after{top:9px;left:0;height:2px;width:20px}
.city .faq__question[aria-expanded=true] .plus{transform:rotate(45deg)}
.city .faq__answer p{margin:0 0 20px;color:var(--vos-body);max-width:70ch}
.city .cta-wrap{position:relative;padding:2px;background:var(--vos-goud);clip-path:polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)}
.city .cta-inner{background:var(--vos-warm);clip-path:polygon(21px 0, 100% 0, 100% calc(100% - 21px), calc(100% - 21px) 100%, 0 100%, 0 21px);padding:56px 48px;text-align:center}
.city .cta-inner h2{font-size:clamp(28px,3vw,40px);color:var(--vos-petrol);margin-bottom:14px;max-width:20ch;margin-inline:auto}
.city .cta-inner p{color:var(--vos-body-warm);max-width:52ch;margin:0 auto 26px}
@media (max-width:900px){
  .city .hero__grid,.city .feature__grid,.city .two,.city .steps-grid,.city .stats,.city .why-cards{grid-template-columns:1fr}
  .city .hero-media{margin-top:36px}
  .city .float-card{left:12px;bottom:16px}
  .city .stats{grid-template-columns:1fr 1fr;gap:26px}
  .city .section{padding:64px 0}
  .city .container{padding:0 20px}
  .city .cta-inner{padding:40px 24px}
}
@media (prefers-reduced-motion:reduce){.city *{transition:none!important;animation:none!important}}
`;

export default function CityLandingPage({ data }: { data: CityLandingData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <SiteHeader />
      <style>{CSS}</style>
      <div className="city">
        <main id="main">
          <section className="hero section--paper">
            <span className="hero__wm" aria-hidden="true"></span>
            <div className="container hero__grid">
              <div>
                <span className="eyebrow">{data.hero.eyebrow}</span>
                <h1>{data.hero.title}</h1>
                <p className="hero__lead">{data.hero.lead}</p>
                <div className="hero__cta">
                  <a className="btn btn--primary" href={data.hero.primaryCta.href}>{data.hero.primaryCta.label}</a>
                  <a className="btn btn--outline" href={data.hero.secondaryCta.href}>{data.hero.secondaryCta.label}</a>
                </div>
              </div>
              <div className="hero-media">
                <div className="hero-media__frame">
                  <span className="hero-media__anchor" aria-hidden="true"></span>
                  <img src={data.hero.image.src} alt={data.hero.image.alt} width={720} height={900} decoding="async" />
                </div>
                <div className="float-card">
                  <div className="label">{data.hero.floatCard.label}</div>
                  <p>{data.hero.floatCard.text}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--linnen">
            <div className="container">
              <span className="eyebrow">{data.recognise.eyebrow}</span>
              <h2 className="section-title" style={{ maxWidth: "22ch" }}>{data.recognise.title}</h2>
              <p className="section-intro">{data.recognise.intro}</p>
              <div className="two">
                {data.recognise.cards.map((c) => (
                  <div className="card-anchor" key={c.title}>
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
              <span className="eyebrow">{data.location.eyebrow}</span>
              <h2>{data.location.title}</h2>
              <p className="feature__lead">{data.location.lead}</p>
              <div className="feature__grid">
                <div className="dark-card">
                  <h3>{data.location.cardTitle}</h3>
                  <p>{data.location.cardText}</p>
                  <div className="loc">
                    {data.location.rows.map((r) => (
                      <div className="loc__row" key={r.title}>
                        <span><strong>{r.title}</strong><br />{r.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="feature__side">
                  <div className="label">{data.location.sideLabel}</div>
                  <p>{data.location.sideText}</p>
                  <ul className="ruitlist">
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
                    <a className="btn btn--primary" href={data.steps.cta.href}>{data.steps.cta.label}</a>
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
              <div className="stats">
                {data.why.stats.map((s) => (
                  <div className="stat" key={s.num}>
                    <div className="stat__num">{s.num}</div>
                    <div className="stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="why-cards">
                {data.why.cards.map((c) => (
                  <div className="why-card" key={c.title}>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
              <div className="quote">
                <div className="quote__rail" aria-hidden="true"><i></i><b></b><s></s></div>
                <div>
                  <blockquote>{data.why.quote}</blockquote>
                  <cite>{data.why.cite}</cite>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--paper">
            <div className="container">
              <span className="eyebrow">{data.faq.eyebrow}</span>
              <h2 className="section-title" style={{ marginBottom: 30 }}>{data.faq.title}</h2>
              <div className="faq">
                {data.faq.items.map((f, i) => (
                  <FaqItem
                    key={f.q}
                    question={f.q}
                    answer={f.a}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="section section--linnen">
            <div className="container">
              <div className="cta-wrap">
                <div className="cta-inner">
                  <h2>{data.cta.title}</h2>
                  <p>{data.cta.text}</p>
                  <a className="btn btn--primary" href={data.cta.button.href}>{data.cta.button.label}</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="faq__item">
      <button className="faq__question" onClick={onToggle} aria-expanded={isOpen} type="button">
        {question}
        <span className="plus" aria-hidden="true"></span>
      </button>
      <div className="faq__answer" hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
