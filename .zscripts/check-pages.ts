import { treatments } from "../src/content/treatments.ts";
import { conditions } from "../src/content/conditions.ts";

const BASE = process.env.BASE ?? "http://localhost:3100";
const routes = [
  "/",
  "/about",
  "/hospital",
  "/contact",
  "/treatments",
  ...treatments.map((t) => `/treatments/${t.slug}`),
  "/conditions",
  ...conditions.map((c) => `/conditions/${c.slug}`),
];

const pick = (html, re) => (html.match(re) ?? [])[1] ?? "";
const decode = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x2F;", "/")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
let bad = 0;

for (const route of routes) {
  const started = Date.now();
  let res;
  try {
    res = await fetch(BASE + route, { redirect: "manual" });
  } catch (error) {
    console.log(`ERR  ${route} -> ${error.message}`);
    bad += 1;
    continue;
  }
  const html = await res.text();
  const title = decode(pick(html, /<title[^>]*>([^<]*)<\/title>/));
  const desc = decode(pick(html, /<meta name="description" content="([^"]*)"/));
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const ogUrl = pick(html, /<meta property="og:url" content="([^"]*)"/);
  const h1 = decode(pick(html, /<h1[^>]*>(.*?)<\/h1>/s).replace(/<[^>]+>/g, "").trim());
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let graphTypes = [];
  let ldError = "";
  for (const block of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(block);
      graphTypes.push(...(parsed["@graph"] ?? []).map((n) => n["@type"]));
    } catch (error) {
      ldError = error.message;
    }
  }
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
  const words = text.split(" ").filter(Boolean).length;
  const problems = [];
  if (res.status !== 200) problems.push(`status ${res.status}`);
  if (title.length > 60) problems.push(`title ${title.length}`);
  if (!title) problems.push("no title");
  if (desc.length > 160) problems.push(`desc ${desc.length}`);
  if (!desc) problems.push("no description");
  const expectedPath = route;
  for (const [name, value] of [["canonical", canonical], ["og:url", ogUrl]]) {
    let url;
    try {
      url = new URL(value);
    } catch {
      problems.push(`${name} not a URL: ${value}`);
      continue;
    }
    if (url.host !== "abinash.caredeoghar.com") problems.push(`${name} host ${url.host}`);
    if (url.pathname !== expectedPath) problems.push(`${name} path ${url.pathname} != ${expectedPath}`);
  }
  if (!h1) problems.push("no h1");
  if (!graphTypes.includes("WebPage")) problems.push("no WebPage node");
  if (!graphTypes.includes("Physician")) problems.push("no Physician node");
  if (!graphTypes.includes("Hospital")) problems.push("no Hospital node");
  if (ldError) problems.push(`ld+json ${ldError}`);
  if (words < 400) problems.push(`thin ${words} words`);
  if (problems.length) bad += 1;
  const flag = problems.length ? "FAIL" : "ok  ";
  console.log(
    `${flag} ${route.padEnd(42)} ${String(res.status).padStart(3)} t=${String(title.length).padStart(2)} d=${String(desc.length).padStart(3)} words=${String(words).padStart(4)} ld=[${[...new Set(graphTypes)].join(",")}] ${Date.now() - started}ms${problems.length ? "  << " + problems.join("; ") : ""}`
  );
  console.log(`       title: ${title}`);
  console.log(`       h1:    ${h1}`);
}

console.log(`\n${routes.length} routes, ${bad} problem(s)`);
if (bad) process.exit(1);
