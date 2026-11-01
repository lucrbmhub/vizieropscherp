import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "luc-vizieropscherp/20min";
const CAL_NAMESPACE = "20min";
const CAL_FALLBACK_URL = "https://cal.com/luc-vizieropscherp/20min";

export default function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // Mount pas als het blok in beeld komt (voorkomt auto-scroll bij laden).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#1F3D3B" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "linkReady",
        callback: () => {
          if (!cancelled) setReady(true);
        },
      });
    })();
    const timer = window.setTimeout(() => {
      if (!cancelled) setFailed((f) => f || true);
    }, 8000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [inView]);

  const showFallback = failed && !ready;

  return (
    <div ref={containerRef} className="vos-cal" aria-label="Boek een kennismakingsgesprek">
      {showFallback ? (
        <div className="vos-cal-fallback">
          <p>Plan je gesprek direct in via onderstaande knop, of gebruik het formulier hieronder.</p>
          <a className="btn btn-primary" href={CAL_FALLBACK_URL} target="_blank" rel="noopener noreferrer">
            Plan een gesprek
          </a>
        </div>
      ) : (
        <>
          {!ready && (
            <div className="vos-cal-skeleton" role="status" aria-live="polite">
              <span className="vos-cal-skeleton__label">Agenda wordt geladen…</span>
            </div>
          )}
          {inView && (
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={CAL_LINK}
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          )}
        </>
      )}
    </div>
  );
}
