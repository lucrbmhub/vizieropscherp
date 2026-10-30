import { useEffect, useRef, useState } from "react";

const IN = 4;
const UIT = 6;

function tijd(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r < 10 ? "0" : ""}${r}`;
}

type Schijf = "" | "is-in" | "is-uit";

export default function AdemCirkel() {
  const [minuten, setMinuten] = useState(3);
  const [loopt, setLoopt] = useState(false);
  const [fase, setFase] = useState("Klaar om te beginnen");
  const [tel, setTel] = useState("");
  const [klok, setKlok] = useState("3:00");
  const [knop, setKnop] = useState("Start de oefening");
  const [schijf, setSchijf] = useState<Schijf>("");

  const timerRef = useRef<number | null>(null);
  const secRef = useRef(0);
  const totaalRef = useRef(180);
  const minutenRef = useRef(3);

  const stop = (melding: string, knopTekst = "Start de oefening") => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setLoopt(false);
    setKnop(knopTekst);
    setTel("");
    setSchijf("");
    setFase(melding);
    setKlok(tijd(minutenRef.current * 60));
  };

  const tik = () => {
    const sec = secRef.current;
    if (sec >= totaalRef.current) {
      stop("Klaar. Merk op wat er veranderd is.", "Opnieuw");
      return;
    }
    const pos = sec % (IN + UIT);
    if (pos === 0) {
      setFase("Adem in");
      setSchijf("is-in");
    }
    if (pos === IN) {
      setFase("Adem uit");
      setSchijf("is-uit");
    }
    setTel(String(pos < IN ? pos + 1 : pos - IN + 1));
    setKlok(tijd(totaalRef.current - sec));
    secRef.current = sec + 1;
  };

  const start = () => {
    if (timerRef.current !== null) return;
    totaalRef.current = minutenRef.current * 60;
    secRef.current = 0;
    setLoopt(true);
    setKnop("Stop");
    tik();
    timerRef.current = window.setInterval(tik, 1000);
  };

  const onKnop = () => {
    if (timerRef.current !== null) stop("Gestopt. Begin opnieuw wanneer je wilt.");
    else start();
  };

  const kies = (m: number) => {
    if (timerRef.current !== null) return;
    minutenRef.current = m;
    setMinuten(m);
    setKlok(tijd(m * 60));
  };

  const stopRef = useRef(stop);
  stopRef.current = stop;

  useEffect(() => {
    const onVis = () => {
      if (document.hidden && timerRef.current !== null) {
        stopRef.current("Gepauzeerd. Begin opnieuw wanneer je wilt.");
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="adem" id="adem">
      <h3>Adem mee met de cirkel</h3>
      <p className="adem-hint">De cirkel groeit vier tellen als je inademt en krimpt zes tellen als je uitademt.</p>
      <div className="adem-veld" aria-hidden="true">
        <span className="adem-ring"></span>
        <span className={schijf ? `adem-schijf ${schijf}` : "adem-schijf"}></span>
        <span className="adem-punt"></span>
      </div>
      <p className="adem-fase" aria-live="polite">{fase}</p>
      <p className="adem-tel" aria-hidden="true">{tel}</p>
      <div className="adem-duur" role="group" aria-label="Duur van de oefening">
        {[3, 5].map((m) => (
          <button
            key={m}
            type="button"
            className="adem-keuze"
            data-min={m}
            aria-pressed={minuten === m ? "true" : "false"}
            disabled={loopt}
            onClick={() => kies(m)}
          >
            {m} min
          </button>
        ))}
      </div>
      <button type="button" className="adem-start" onClick={onKnop}>{knop}</button>
      <p className="adem-tijd"><span className="sr-only">Resterende tijd: </span><span className="adem-klok">{klok}</span></p>
    </div>
  );
}
