import { treatments } from "../src/content/treatments.ts";
import { conditions, conditionGroups } from "../src/content/conditions.ts";
import { aboutPage, hospitalPage, contactPage } from "../src/content/pages.ts";
import { siteConfig } from "../src/config/site.config.ts";

const DESC_LIMIT = 155;
const suffix = ` | ${siteConfig.doctor.name}`;
let problems = 0;
const fail = (msg: string) => {
  problems += 1;
  console.log(`FAIL ${msg}`);
};

const specTitles = new Set(siteConfig.specializations.map((s) => s.title));
const condTitles = new Set(siteConfig.conditions);
const treatSlugs = new Set(treatments.map((t) => t.slug));
const condSlugs = new Set(conditions.map((c) => c.slug));

for (const t of treatments) {
  if (t.metaDescription.length > DESC_LIMIT)
    fail(`${t.slug} description ${t.metaDescription.length} > ${DESC_LIMIT}`);
  if ((t.searchTitle + suffix).length > 60)
    fail(`${t.slug} title tag "${t.searchTitle + suffix}" = ${(t.searchTitle + suffix).length} chars`);
  if (!specTitles.has(t.title)) fail(`${t.slug} title "${t.title}" is not a homepage specialization`);
  if (!t.slug.includes("-")) fail(`${t.slug} slug has no hyphen`);
  for (const rel of t.relatedConditions) if (!condSlugs.has(rel)) fail(`${t.slug} related condition ${rel} missing`);
  if (t.overview.length < 2) fail(`${t.slug} thin overview (${t.overview.length} paragraphs)`);
  if (t.whatWeDo.length < 4) fail(`${t.slug} thin whatWeDo (${t.whatWeDo.length})`);
  if (t.faq.length < 2) fail(`${t.slug} fewer than 2 FAQs`);
  const words = [...t.overview, t.recovery, ...t.whatWeDo, ...t.faq.flatMap((f) => [f.question, f.answer])].join(" ").split(/\s+/).length;
  console.log(`ok  /treatments/${t.slug}  desc=${t.metaDescription.length} titleTag=${(t.searchTitle + suffix).length} words≈${words} faq=${t.faq.length}`);
}

for (const c of conditions) {
  if (c.metaDescription.length > DESC_LIMIT)
    fail(`${c.slug} description ${c.metaDescription.length} > ${DESC_LIMIT}`);
  if ((c.searchTitle + suffix).length > 60)
    fail(`${c.slug} title tag "${c.searchTitle + suffix}" = ${(c.searchTitle + suffix).length} chars`);
  if (!condTitles.has(c.title)) fail(`${c.slug} title "${c.title}" is not a homepage condition`);
  if (!treatSlugs.has(c.relatedTreatment)) fail(`${c.slug} related treatment ${c.relatedTreatment} missing`);
  if (c.symptoms.length < 4) fail(`${c.slug} thin symptoms (${c.symptoms.length})`);
  if (c.faq.length < 2) fail(`${c.slug} fewer than 2 FAQs`);
  const words = [c.intro, c.treatment, ...c.symptoms, ...c.emergency, ...c.faq.flatMap((f) => [f.question, f.answer])].join(" ").split(/\s+/).length;
  console.log(`ok  /conditions/${c.slug}  desc=${c.metaDescription.length} titleTag=${(c.searchTitle + suffix).length} words≈${words} faq=${c.faq.length} emergency=${c.emergency.length > 0}`);
}

const dupT = treatments.length - treatSlugs.size;
const dupC = conditions.length - condSlugs.size;
if (dupT) fail(`${dupT} duplicate treatment slugs`);
if (dupC) fail(`${dupC} duplicate condition slugs`);
for (const name of condTitles) if (!conditions.some((c) => c.title === name)) fail(`homepage condition "${name}" has no page`);
for (const s of specTitles) if (!treatments.some((t) => t.title === s)) fail(`homepage specialization "${s}" has no page`);

const grouped = conditionGroups.flatMap((g) => g.slugs);
if (new Set(grouped).size !== grouped.length) fail("a slug appears in two condition groups");
for (const slug of grouped) if (!condSlugs.has(slug)) fail(`condition group references unknown slug ${slug}`);
for (const c of conditions) if (!grouped.includes(c.slug)) fail(`condition ${c.slug} is missing from conditionGroups`);

for (const page of [aboutPage, hospitalPage, contactPage]) {
  if (page.metaDescription.length > DESC_LIMIT)
    fail(`${page.path} description ${page.metaDescription.length} > ${DESC_LIMIT}`);
  const tag = page.fullTitle ? page.title : page.title + suffix;
  if (tag.length > 60) fail(`${page.path} title tag "${tag}" = ${tag.length} chars`);
  if (page.faq.length < 1) fail(`${page.path} has no FAQs`);
  console.log(`ok  ${page.path}  desc=${page.metaDescription.length} titleTag=${tag.length} faq=${page.faq.length}`);
}

console.log(`\n${treatments.length} treatments, ${conditions.length} conditions, ${problems} problem(s)`);
if (problems > 0) process.exit(1);