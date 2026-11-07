import type { Metadata } from "next";
import { ClipboardList, Stethoscope, CalendarCheck2 } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { LinkCards } from "@/components/pages/link-cards";
import { HospitalSideCard } from "@/components/pages/hospital-side-card";
import { CtaBand } from "@/components/pages/cta-band";
import { getSiteSettings } from "@/lib/site-settings";
import { pageMetadata } from "@/lib/seo";
import { treatments } from "@/content/treatments";
import { cardSummary } from "@/content/summary";

const PATH = "/treatments";
const TITLE = "Neurosurgery Treatments in Deoghar";
const DESCRIPTION =
  "Brain tumour surgery, spine surgery, 24×7 neurotrauma, stroke and brain haemorrhage care, paediatric neurosurgery and keyhole surgery in Deoghar.";

const STEPS = [
  {
    icon: ClipboardList,
    title: "1. Bring your scans",
    text: "Carry the CT or MRI films (or the CD) and the reports, along with your current prescriptions. The images matter more than the summary.",
  },
  {
    icon: Stethoscope,
    title: "2. Examination and honest advice",
    text: "A full neurological examination and a review of the imaging, then a clear explanation of the options — including when no operation is the right answer.",
  },
  {
    icon: CalendarCheck2,
    title: "3. Treatment and follow-up",
    text: "Surgery at the hospital with neuro-ICU care where needed, or a medical and physiotherapy plan with a scheduled review and repeat imaging.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteSettings();
  return pageMetadata(config, { path: PATH, title: TITLE, description: DESCRIPTION });
}

export default async function TreatmentsPage() {
  const config = await getSiteSettings();
  const cards = treatments.map((t) => ({
    name: t.title,
    path: `${PATH}/${t.slug}`,
    text:
      config.specializations.find((s) => s.title === t.title)?.description ??
      cardSummary(t.overview[0]),
  }));

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Treatments", path: PATH },
        ]}
      />
      <PageHero
        breadcrumbs={[{ name: "Treatments", path: PATH }]}
        badge="Treatments"
        title={"Neurosurgery & Spine Treatments in Deoghar"}
        lead={`Surgical and non-surgical care for the brain, spine and nervous system, provided by ${config.doctor.name}, ${config.doctor.title}, at ${config.hospital.name}. Emergency neurotrauma cover runs 24×7.`}
        aside={<HospitalSideCard config={config} />}
      />

      <section className="bg-background py-14" aria-labelledby="treatments-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="treatments-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            What we treat
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            Each page explains the condition, what the operation involves, and what recovery is
            usually like — so you can arrive at your consultation already knowing the questions to
            ask.
          </p>
          <div className="mt-8">
            <LinkCards items={cards} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-14" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="visit-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            How a consultation works
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.title} className="rounded-xl border border-border bg-card p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        config={config}
        title="Not sure which treatment you need?"
        text="Send a message or call the OPD number with your symptoms and scan details, and our team will guide you on the next step."
      />
    </PageFrame>
  );
}
