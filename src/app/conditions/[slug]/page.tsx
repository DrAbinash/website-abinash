import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, ArrowRight, Info } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { FaqBlock } from "@/components/pages/faq-block";
import { RelatedLinks } from "@/components/pages/related-links";
import { CtaBand } from "@/components/pages/cta-band";
import { EmergencyCallout } from "@/components/pages/emergency-callout";
import { HospitalSideCard } from "@/components/pages/hospital-side-card";
import { getSiteSettings } from "@/lib/site-settings";
import { pageMetadata } from "@/lib/seo";
import { conditions, getCondition } from "@/content/conditions";
import { getTreatment } from "@/content/treatments";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) return {};
  const config = await getSiteSettings();
  return pageMetadata(config, {
    path: `/conditions/${condition.slug}`,
    title: condition.searchTitle,
    description: condition.metaDescription,
    keywords: [`${condition.title} treatment Deoghar`, `${condition.title} symptoms`],
  });
}

export default async function ConditionPage({ params }: Params) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();
  const config = await getSiteSettings();
  const path = `/conditions/${condition.slug}`;
  const heading = `${condition.title}: Symptoms & Treatment in ${config.hospital.address.city}`;
  const treatment = getTreatment(condition.relatedTreatment);
  const siblings = conditions
    .filter((c) => c.relatedTreatment === condition.relatedTreatment && c.slug !== condition.slug)
    .slice(0, 5)
    .map((c) => ({ name: c.title, path: `/conditions/${c.slug}` }));
  const related = treatment
    ? [{ name: treatment.title, path: `/treatments/${treatment.slug}` }, ...siblings]
    : siblings;

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={path}
        title={heading}
        description={condition.metaDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
          { name: condition.title, path },
        ]}
        faq={condition.faq}
      />
      <PageHero
        breadcrumbs={[
          { name: "Conditions", path: "/conditions" },
          { name: condition.title, path },
        ]}
        badge="Condition"
        title={heading}
        lead={condition.intro}
        aside={<HospitalSideCard config={config} />}
      />

      <section className="bg-background py-12" aria-labelledby="symptoms-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {condition.emergency.length > 0 && (
            <div className="mb-10">
              <EmergencyCallout config={config} items={condition.emergency} />
            </div>
          )}

          <h2
            id="symptoms-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Symptoms to watch for
          </h2>
          <ul className="mt-5 space-y-3">
            {condition.symptoms.map((symptom) => (
              <li key={symptom} className="flex gap-3 text-pretty leading-relaxed text-muted-foreground">
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden="true" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Diagnosis and treatment
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{condition.treatment}</p>

          {treatment && (
            <Link
              href={`/treatments/${treatment.slug}`}
              className="group mt-8 flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary/50"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                  The treatment page
                </span>
                <span className="mt-1 block text-base font-bold text-foreground">
                  {treatment.title} — what the operation involves and how recovery goes
                </span>
              </span>
              <ArrowRight
                className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          )}

          <h2 className="mt-12 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            What to bring to your consultation
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "All scan films or the CD — CT, MRI, X-ray — not only the written reports",
              "Previous prescriptions and the list of medicines you take now",
              "A note of when the symptoms started and what makes them better or worse",
              "Any other illness: diabetes, blood pressure, heart disease, or blood thinners",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-pretty leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 flex gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              General information only — it is not a diagnosis and it does not replace an
              examination. Many of these symptoms have other, less serious causes. If you are
              worried, call{" "}
              <a
                href={`tel:${config.contact.phoneHref}`}
                className="font-semibold text-primary hover:underline"
              >
                {config.contact.phone}
              </a>{" "}
              during OPD hours, or{" "}
              <a
                href={`tel:${config.contact.emergencyHref}`}
                className="font-semibold text-red-600 hover:underline"
              >
                {config.contact.emergency}
              </a>{" "}
              at any hour for an emergency.
            </span>
          </p>
        </div>
      </section>

      <FaqBlock heading={`Questions about ${condition.title.toLowerCase()}`} faq={condition.faq} />

      <RelatedLinks heading="Related conditions and treatments" items={related} />

      <CtaBand
        config={config}
        title={`Worried about ${condition.title.toLowerCase()}?`}
        text={`Book a consultation with ${config.doctor.name}, call the OPD number, or send your reports on WhatsApp — an honest opinion, with surgery recommended only when it is truly needed.`}
      />
    </PageFrame>
  );
}
