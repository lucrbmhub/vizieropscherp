import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "luc-vizieropscherp/20min";
const CAL_NAMESPACE = "20min";
const CAL_FALLBACK_URL = "https://cal.com/luc-vizieropscherp/20min";

export default function CalEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    (async () => {
      try {
        const cal = await getCalApi({ namespace: CAL_NAMESPACE });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#1F3D3B" },
            dark: { "cal-brand": "#1F3D3B" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        cal("on", {
          action: "linkReady",
          callback: () => {
            if (!cancelled) setReady(true);
          },
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  useEffect(() => {
    if (!inView || ready) return;
    const t = setTimeout(() => {
      if (!ready) setFailed(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [inView, ready]);

  return (
    <div
      ref={containerRef}
      className="vos-cal-embed-wrapper"
      aria-label="Boek een kennismakingsgesprek"
    >
      <div className="vos-cal-embed">
        {inView && !failed && (
          <Cal
            namespace={CAL_NAMESPACE}
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        )}

        {inView && !ready && !failed && (
          <div className="vos-cal-skeleton" role="status" aria-live="polite">
            <span className="vos-cal-skeleton__label">Agenda wordt geladen…</span>
          </div>
        )}

        {failed && (
          <div className="vos-cal-fallback">
            <p>
              De agenda laadt nu even niet. Plan uw gesprek direct in via onderstaande knop,
              of gebruik het formulier hieronder.
            </p>
            <a
              className="btn btn-primary"
              href={CAL_FALLBACK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open de boekingsagenda
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
