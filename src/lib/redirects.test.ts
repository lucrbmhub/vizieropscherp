import { test } from "node:test";
import assert from "node:assert/strict";
import { getRedirect } from "./redirects";

test("www root redirects to the canonical host", () => {
  assert.equal(
    getRedirect("https://www.vizieropscherp.nl/", "www.vizieropscherp.nl"),
    "https://vizieropscherp.nl/",
  );
});

test("www legacy contact path redirects to kennismaken on the canonical host", () => {
  assert.equal(
    getRedirect("https://www.vizieropscherp.nl/contact/", "www.vizieropscherp.nl"),
    "https://vizieropscherp.nl/kennismaken",
  );
});

test("a trailing slash is removed", () => {
  assert.equal(
    getRedirect("https://vizieropscherp.nl/over-ons/", "vizieropscherp.nl"),
    "https://vizieropscherp.nl/over-ons",
  );
});

test("a legacy WordPress category path redirects to coaching-voor-mij", () => {
  assert.equal(
    getRedirect("https://vizieropscherp.nl/page_category/loopbaanbegeleiding/", "vizieropscherp.nl"),
    "https://vizieropscherp.nl/coaching-voor-mij",
  );
});

test("old blog posts redirect to inzichten", () => {
  assert.equal(
    getRedirect("https://vizieropscherp.nl/blogs-2/tips-voor-30-ers/", "vizieropscherp.nl"),
    "https://vizieropscherp.nl/inzichten",
  );
});

test("a clean canonical path is not redirected", () => {
  assert.equal(getRedirect("https://vizieropscherp.nl/over-ons", "vizieropscherp.nl"), null);
});

test("the canonical root is not redirected", () => {
  assert.equal(getRedirect("https://vizieropscherp.nl/", "vizieropscherp.nl"), null);
});

test("assets are never redirected", () => {
  assert.equal(
    getRedirect("https://vizieropscherp.nl/assets/De_Loopbaangesprek-leidraad.pdf", "vizieropscherp.nl"),
    null,
  );
});
