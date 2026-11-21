import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../routes/coaching-voor-mij.tsx", import.meta.url), "utf8");
const encodedSchema = source.match(/children: ("(?:[^"\\]|\\.)*")/)?.[1];
if (!encodedSchema) throw new Error("FAQ schema missing");
const schema = JSON.parse(JSON.parse(encodedSchema)) as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] };
const priceAnswer = schema.mainEntity.find((item) => item.name === "Wat kost een loopbaancoach?")?.acceptedAnswer.text;
if (!priceAnswer) throw new Error("Price answer missing");
const prices = Array.from(priceAnswer.matchAll(/€\s*([\d.]+)\s+(inclusief|exclusief) btw/g), (match) => ({ amount: Number(match[1]?.replaceAll(".", "")), tax: match[2] }));

test("the personal trajectory starts at 1650 euros including VAT", () => {
  assert.deepEqual(prices.find((price) => price.tax === "inclusief"), { amount: 1650, tax: "inclusief" });
});

test("the freelancer trajectory starts at 1650 euros excluding VAT", () => {
  assert.deepEqual(prices.find((price) => price.tax === "exclusief"), { amount: 1650, tax: "exclusief" });
});

test("the introduction on this page lasts 30 minutes", () => {
  const heroDuration = Number(source.match(/kennismaking van (\d+) minuten/)?.[1]);
  const ctaDuration = Number(source.match(/Het is gratis en duurt (\d+) minuten/)?.[1]);
  assert.equal(heroDuration, 30);
  assert.equal(ctaDuration, 30);
});

test("the personal offer includes six sessions", () => {
  const words: Record<string, number> = { zes: 6 };
  const count = priceAnswer.match(/Daarvoor krijg je (\w+) gesprekken/)?.[1];
  assert.equal(count ? words[count] : undefined, 6);
});