import { beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { runInNewContext } from "node:vm";
import { CONSENT_DEFAULTS } from "./consent-bootstrap";
import { parseConsent, saveVosConsent, VOS_CONSENT_RESTORE } from "./vos-consent";

let store: Map<string, string>;
let calls: unknown[][];
let layer: unknown[];

beforeEach(() => {
  store = new Map(); calls = []; layer = [];
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: (key: string) => store.get(key) ?? null, setItem: (key: string, value: string) => store.set(key, value), removeItem: (key: string) => store.delete(key) } });
  Object.defineProperty(globalThis, "navigator", { configurable: true, value: { globalPrivacyControl: false } });
  const browser = Object.assign(new EventTarget(), { gtag: (...args: unknown[]) => calls.push(args), dataLayer: layer });
  Object.defineProperty(globalThis, "window", { configurable: true, value: browser });
});

test("a choice expires exactly twelve months after its date", () => {
  const raw = JSON.stringify({ statistieken: true, advertenties: false, datum: "2026-11-21T07:44:00.000Z", versie: 1 });
  assert.equal(parseConsent(raw, new Date("2027-11-21T07:43:59.999Z"))?.statistieken, true);
  assert.equal(parseConsent(raw, new Date("2027-11-21T07:44:00.000Z")), null);
});

test("malformed, wrong-version and future choices are not valid consent", () => {
  for (const raw of ["broken", JSON.stringify({ statistieken: "yes", advertenties: false, datum: "2026-11-20", versie: 1 }), JSON.stringify({ statistieken: true, advertenties: true, datum: "2026-11-20", versie: 2 }), JSON.stringify({ statistieken: true, advertenties: true, datum: "2028-11-20", versie: 1 })]) {
    assert.equal(parseConsent(raw, new Date("2026-11-21")), null);
  }
});

test("accept all grants both purposes and records the requested event and versioned choice", () => {
  saveVosConsent(true, true);
  assert.partialDeepStrictEqual(JSON.parse(store.get("vos-consent") ?? "null"), { statistieken: true, advertenties: true, versie: 1 });
  assert.ok(calls.some((call) => JSON.stringify(call) === JSON.stringify(["consent", "update", { analytics_storage: "granted" }])));
  assert.ok(calls.some((call) => JSON.stringify(call) === JSON.stringify(["consent", "update", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted" }])));
  assert.deepEqual(layer, [{ event: "vos_consent_update" }]);
});

test("necessary only withdraws both purposes immediately", () => {
  saveVosConsent(true, true);
  calls = [];
  saveVosConsent(false, false);
  assert.partialDeepStrictEqual(JSON.parse(store.get("vos-consent") ?? "null"), { statistieken: false, advertenties: false });
  assert.ok(calls.some((call) => JSON.stringify(call) === JSON.stringify(["consent", "update", { analytics_storage: "denied" }])));
  assert.ok(calls.some((call) => JSON.stringify(call) === JSON.stringify(["consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }])));
});

test("statistics permission never grants advertising", () => {
  saveVosConsent(true, false);
  assert.ok(calls.some((call) => JSON.stringify(call) === JSON.stringify(["consent", "update", { analytics_storage: "granted" }])));
  assert.ok(calls.some((call) => JSON.stringify(call) === JSON.stringify(["consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }])));
});

test("Global Privacy Control overrides acceptance", () => {
  Object.defineProperty(globalThis, "navigator", { configurable: true, value: { globalPrivacyControl: true } });
  saveVosConsent(true, true);
  assert.partialDeepStrictEqual(JSON.parse(store.get("vos-consent") ?? "null"), { statistieken: false, advertenties: false });
});

test("head bootstrap restores the saved choice before Google initialisation", () => {
  const saved = { statistieken: true, advertenties: false, datum: new Date().toISOString(), versie: 1 };
  store.set("vos-consent", JSON.stringify(saved));
  const context = { dataLayer: [] as unknown[], window: { dataLayer: [] as unknown[] }, navigator: { globalPrivacyControl: false }, localStorage, Date };
  context.window.dataLayer = context.dataLayer;
  runInNewContext(`${CONSENT_DEFAULTS}\n${VOS_CONSENT_RESTORE}`, context);
  const commands: unknown[][] = JSON.parse(JSON.stringify(context.window.dataLayer.map((entry) => Array.from(entry as ArrayLike<unknown>))));
  assert.deepEqual(commands.at(-2), ["consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }]);
  assert.equal(commands.at(-1)?.[0], "js");
});