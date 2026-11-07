import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { FaqBlock } from "@/components/pages/faq-block";
import { RelatedLinks } from "@/components/pages/related-links";
import { CtaBand } from "@/components/pages/cta-band";
import { getSiteSettings } from "@/lib/site-settings";
import { pageMetadata } from "@/lib/seo";
import { getTreatment, treatments } from "@/content/treatments";
import { getCondition } from "@/content/conditions";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  const config = await getSiteSettings();
  return pageMetadata(config, {
    path: `/treatments/${treatment.slug}`,
    title: treatment.searchTitle,
    description: treatment.metaDescription,
    keywords: [
      `${treatment.title} Deoghar`,
      `${treatment.title} Jharkhand`,
      `${treatment.title} near me`,
    ],
  });
}

export default async function TreatmentPage({ params }: Params) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();
  const config = await getSiteSettings();
  const path = `/treatments/${treatment.slug}`;
  const heading = `${treatment.title} in ${config.hospital.address.city}`;
  const related = treatment.relatedConditions
    .map((s) => getCondition(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ name: c.title, path: `/conditions/${c.slug}` }));

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={path}
        title={heading}
        description={treatment.metaDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: treatment.title, path },
        ]}
        faq={treatment.faq}
      />
      <PageHero
        breadcrumbs={[
          { name: "Treatments", path: "/treatments" },
          { name: treatment.title, path },
        ]}
        badge="Treatment"
        title={heading}
        lead={treatment.overview[0]}
      />

      <section className="bg-background py-12" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="overview-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            About this treatment
          </h2>
          <div className="mt-5 space-y-4">
            {treatment.overview.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-pretty leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="mt-12 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            What we do
          </h2>
          <ul className="mt-5 space-y-3">
            {treatment.whatWeDo.map((item) => (
              <li key={item} className="flex gap-3 text-pretty leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Recovery and aftercare
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{treatment.recovery}</p>

          <p className="mt-8 flex gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              This page is general information, not a diagnosis or a promise about results. Your own
              plan is decided after examination and review of your scans. For anything urgent, call{" "}
              <a
                href={`tel:${config.contact.emergencyHref}`}
                className="font-semibold text-primary hover:underline"
              >
                {config.contact.emergency}
              </a>{" "}
              at any hour.
            </span>
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            <Link href="/hospital" className="font-semibold text-primary hover:underline">
              Where this treatment is performed: {config.hospital.name}
            </Link>
          </p>
        </div>
      </section>

      <FaqBlock heading={`Questions patients ask about ${treatment.title.toLowerCase()}`} faq={treatment.faq} />

      <RelatedLinks heading="Related conditions" items={related} />

      <CtaBand
        config={config}
        title={`Discuss ${treatment.title.toLowerCase()} with ${config.doctor.name}`}
        text="Book a consultation, call the OPD number, or send your scan details on WhatsApp and our team will advise you on the next step."
      />
    </PageFrame>
  );
}
