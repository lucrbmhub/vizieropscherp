import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { needsAnswer } from "@/lib/consent";
import { currentChoices, OPEN_COOKIE_SETTINGS, privacySignal, restoreConsent, savedConsent, saveVosConsent, subscribeConsent } from "@/lib/vos-consent";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [statistieken, setStatistieken] = useState(false);
  const [advertenties, setAdvertenties] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    restoreConsent();
    setGpc(privacySignal());
    // The site deliberately asks worldwide and uses a twelve-month choice for both purposes.
    void needsAnswer(["analytics", "advertising"]);
    setOpen(!savedConsent() && !privacySignal());
    const reopen = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const choices = currentChoices();
      setStatistieken(choices.statistieken);
      setAdvertenties(choices.advertenties);
      setGpc(privacySignal());
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    const unsubscribe = subscribeConsent(() => {
      const choices = currentChoices();
      setStatistieken(choices.statistieken);
      setAdvertenties(choices.advertenties);
      setOpen(!savedConsent() && !privacySignal());
    });
    return () => { window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen); unsubscribe(); };
  }, []);

  useEffect(() => { if (open) panel.current?.focus(); }, [open]);

  const save = (analytics: boolean, advertising: boolean) => {
    saveVosConsent(analytics, advertising);
    setOpen(false);
    returnFocus.current?.focus();
  };

  if (!open) return null;
  return (
    <div ref={panel} className="vos-cookie" role="dialog" aria-modal="false" aria-label="Cookie-instellingen" tabIndex={-1}>
      <h2>Cookies op deze website</h2>
      <p>Met jouw toestemming meten we hoe onze website wordt gebruikt, zodat we hem kunnen verbeteren. Je kiest zelf. Je keuze pas je altijd aan via Cookie-instellingen onderaan elke pagina.</p>
      <p>We tellen bezoeken zonder cookies. Als je toestemming geeft, meten we ook klikken.</p>
      <a className="vos-cookie-privacy" href="/privacyverklaring#cookies">Lees meer in onze privacyverklaring</a>
      {settings && (
        <div id="vos-cookie-purposes" className="vos-cookie-settings">
          <p><strong>Noodzakelijk:</strong> altijd aan, nodig om de site te laten werken.</p>
          {gpc && <p>Het privacysignaal van je browser geldt. Statistieken en advertenties staan uit.</p>}
          <div className="vos-cookie-row">
            <label htmlFor="vos-cookie-analytics"><strong>Statistieken</strong><span>Anonieme inzichten in hoe bezoekers de site gebruiken.</span><small>Aangeboden door Lovable en Google Analytics.</small></label>
            <Switch id="vos-cookie-analytics" className="vos-cookie-switch" checked={!gpc && statistieken} onCheckedChange={setStatistieken} disabled={gpc} />
          </div>
          <div className="vos-cookie-row">
            <label htmlFor="vos-cookie-advertising"><strong>Advertenties</strong><span>Meten of onze advertenties werken.</span><small>Aangeboden door Google Ads.</small></label>
            <Switch id="vos-cookie-advertising" className="vos-cookie-switch" checked={!gpc && advertenties} onCheckedChange={setAdvertenties} disabled={gpc} />
          </div>
          <Button className="btn btn-outline vos-cookie-button" variant="ghost" onClick={() => save(statistieken, advertenties)}>Keuze opslaan</Button>
        </div>
      )}
      <div className="vos-cookie-actions">
        <Button className="btn btn-outline vos-cookie-button" variant="ghost" onClick={() => save(true, true)}>Alles accepteren</Button>
        <Button className="btn btn-outline vos-cookie-button" variant="ghost" onClick={() => save(false, false)}>Alleen noodzakelijk</Button>
        <Button className="btn btn-outline vos-cookie-button" variant="ghost" aria-expanded={settings} aria-controls="vos-cookie-purposes" onClick={() => setSettings(!settings)}>Instellingen</Button>
      </div>
    </div>
  );
}