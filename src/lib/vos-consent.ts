import { applySignals, onConsentChange, readChoice, saveChoices } from "./consent";

export const CONSENT_KEY = "vos-consent";
export const OPEN_COOKIE_SETTINGS = "vos-open-cookie-settings";
export type VosConsent = { statistieken: boolean; advertenties: boolean; datum: string; versie: 1 };
let unsaved: VosConsent | null = null;

export function parseConsent(raw: string | null, now = new Date()): VosConsent | null {
  try {
    const value = JSON.parse(raw ?? "null");
    if (!value || value.versie !== 1 || typeof value.statistieken !== "boolean" || typeof value.advertenties !== "boolean" || typeof value.datum !== "string") return null;
    const saved = new Date(value.datum);
    const expires = new Date(value.datum);
    expires.setUTCMonth(expires.getUTCMonth() + 12);
    if (!Number.isFinite(saved.getTime()) || saved > now || expires <= now) return null;
    return { statistieken: value.statistieken, advertenties: value.advertenties, datum: value.datum, versie: 1 };
  } catch { return null; }
}

export function savedConsent(): VosConsent | null {
  if (unsaved) return parseConsent(JSON.stringify(unsaved));
  try { return parseConsent(localStorage.getItem(CONSENT_KEY)); } catch { return unsaved; }
}

export function privacySignal(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function currentChoices() {
  return { statistieken: readChoice("analytics") === "granted", advertenties: readChoice("advertising") === "granted" };
}

export function saveVosConsent(statistieken: boolean, advertenties: boolean) {
  const gpc = privacySignal();
  const choice: VosConsent = { statistieken: statistieken && !gpc, advertenties: advertenties && !gpc, datum: new Date().toISOString(), versie: 1 };
  unsaved = choice;
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(choice)); unsaved = null; } catch { /* Keuze blijft in deze tab actief. */ }
  saveChoices({ analytics: choice.statistieken ? "granted" : "denied", advertising: choice.advertenties ? "granted" : "denied" });
  const browser = window as Window & { dataLayer?: unknown[] };
  (browser.dataLayer ??= []).push({ event: "vos_consent_update" });
}

export function subscribeConsent(listener: () => void) {
  const unsubscribe = onConsentChange(listener);
  const storage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== CONSENT_KEY) return;
    unsaved = null;
    const saved = savedConsent();
    saveChoices({ analytics: saved?.statistieken ? "granted" : "denied", advertising: saved?.advertenties ? "granted" : "denied" });
  };
  window.addEventListener("storage", storage);
  return () => { unsubscribe(); window.removeEventListener("storage", storage); };
}

export function restoreConsent() {
  const choice = savedConsent();
  if (choice) {
    saveChoices({ analytics: choice.statistieken ? "granted" : "denied", advertising: choice.advertenties ? "granted" : "denied" });
  } else {
    applySignals("analytics", "denied");
    applySignals("advertising", "denied");
  }
}

// Runs before GTM; vos-consent is the site's versioned, twelve-month choice record.
export const VOS_CONSENT_RESTORE = `(function () {
  var saved = null;
  try {
    var value = JSON.parse(localStorage.getItem('vos-consent') || 'null');
    if (value && value.versie === 1 && typeof value.statistieken === 'boolean' && typeof value.advertenties === 'boolean' && typeof value.datum === 'string') {
      var at = new Date(value.datum), expires = new Date(value.datum);
      expires.setUTCMonth(expires.getUTCMonth() + 12);
      if (isFinite(at.getTime()) && at.getTime() <= Date.now() && expires.getTime() > Date.now()) saved = value;
    }
  } catch (e) {}
  var gpc = navigator.globalPrivacyControl === true;
  var analytics = saved && saved.statistieken && !gpc ? 'granted' : 'denied';
  var advertising = saved && saved.advertenties && !gpc ? 'granted' : 'denied';
  gtag('consent', 'update', { analytics_storage: analytics, ad_storage: advertising, ad_user_data: advertising, ad_personalization: advertising });
  try {
    ['analytics', 'advertising'].forEach(function (purpose) {
      if (saved) localStorage.setItem('cookie_consent_' + purpose, JSON.stringify({ choice: purpose === 'analytics' ? analytics : advertising, at: new Date(saved.datum).getTime() }));
      else localStorage.removeItem('cookie_consent_' + purpose);
    });
  } catch (e) {}
})();
gtag('js', new Date());`;