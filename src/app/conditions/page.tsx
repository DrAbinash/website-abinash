import type { Metadata } from "next";
import { Ambulance } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { LinkCards } from "@/components/pages/link-cards";
import { HospitalSideCard } from "@/components/pages/hospital-side-card";
import { CtaBand } from "@/components/pages/cta-band";
import { getSiteSettings } from "@/lib/site-settings";
import { pageMetadata } from "@/lib/seo";
import { conditionGroups, getCondition } from "@/content/conditions";
import { cardSummary } from "@/content/summary";

const PATH = "/conditions";
const TITLE = "Conditions We Treat in Deoghar";
const DESCRIPTION =
  "Brain tumours, slipped disc, spinal stenosis, head injury, stroke, hydrocephalus and more — symptoms, treatment and when it is an emergency.";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteSettings();
  return pageMetadata(config, { path: PATH, title: TITLE, description: DESCRIPTION });
}

export default async function ConditionsPage() {
  const config = await getSiteSettings();

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: PATH },
        ]}
      />
      <PageHero
        breadcrumbs={[{ name: "Conditions", path: PATH }]}
        badge="Conditions We Treat"
        title={"Brain, Spine & Nerve Conditions in Deoghar"}
        lead={`Plain-language information on the conditions treated by ${config.doctor.name}, ${config.doctor.title} — what to look for, how each is diagnosed, and which symptoms need an ambulance rather than an appointment.`}
        aside={<HospitalSideCard config={config} />}
      />

      <div className="border-b border-border bg-red-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="flex items-start gap-2.5 text-sm font-medium text-red-900 sm:items-center">
            <Ambulance className="mt-0.5 size-5 shrink-0 text-red-600 sm:mt-0" aria-hidden="true" />
            Head injury, sudden weakness, loss of consciousness or a severe sudden headache are
            emergencies — do not wait for an OPD appointment.
          </p>
          <a
            href={`tel:${config.contact.emergencyHref}`}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-red-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Call 24×7: {config.contact.emergency}
          </a>
        </div>
      </div>

      {conditionGroups.map((group) => (
        <section
          key={group.name}
          className="border-b border-border bg-background py-12 last:border-b-0"
          aria-labelledby={`group-${group.name.replace(/\W+/g, "-").toLowerCase()}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id={`group-${group.name.replace(/\W+/g, "-").toLowerCase()}`}
              className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              {group.name}
            </h2>
            <div className="mt-6">
              <LinkCards
                items={group.slugs
                  .map((slug) => getCondition(slug))
                  .filter((c): c is NonNullable<typeof c> => Boolean(c))
                  .map((c) => ({
                    name: c.title,
                    path: `${PATH}/${c.slug}`,
                    text: cardSummary(c.intro),
                  }))}
              />
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        config={config}
        title="Cannot find your condition listed?"
        text={`These are the problems seen most often in this region, not the full list. Send us your symptoms and scan reports and ${config.doctor.name}'s team will advise you.`}
      />
    </PageFrame>
  );
}
