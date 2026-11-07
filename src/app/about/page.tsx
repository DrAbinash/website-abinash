import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { FaqBlock } from "@/components/pages/faq-block";
import { LinkCards } from "@/components/pages/link-cards";
import { CtaBand } from "@/components/pages/cta-band";
import { getSiteSettings } from "@/lib/site-settings";
import { pageMetadata } from "@/lib/seo";
import { aboutPage } from "@/content/pages";
import { treatments } from "@/content/treatments";
import { cardSummary } from "@/content/summary";
import { getIcon } from "@/components/icon-map";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteSettings();
  return pageMetadata(config, {
    path: aboutPage.path,
    title: aboutPage.title,
    description: aboutPage.metaDescription,
    fullTitle: aboutPage.fullTitle,
  });
}

export default async function AboutPage() {
  const config = await getSiteSettings();
  const { doctor, hospital } = config;
  const heading = `About ${doctor.name} — ${doctor.title} in ${hospital.address.city}`;
  const treatmentCards = treatments.map((t) => ({
    name: t.title,
    path: `/treatments/${t.slug}`,
    text:
      config.specializations.find((s) => s.title === t.title)?.description ?? cardSummary(t.overview[0]),
  }));

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={aboutPage.path}
        title={heading}
        description={aboutPage.metaDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: aboutPage.path },
        ]}
        faq={aboutPage.faq}
      />
      <PageHero
        breadcrumbs={[{ name: "About", path: aboutPage.path }]}
        badge="About the Doctor"
        title={heading}
        lead={doctor.shortBio}
      />

      <section className="bg-background py-14" aria-labelledby="profile-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:gap-14 lg:px-8">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={doctor.photo}
                alt={`${doctor.name}, ${doctor.title}`}
                width={640}
                height={800}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <dl className="mt-5 space-y-3 rounded-xl border border-border bg-card p-5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Qualifications
                </dt>
                <dd className="mt-1 text-foreground">{doctor.qualifications.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Experience
                </dt>
                <dd className="mt-1 text-foreground">
                  {doctor.yearsOfExperience}+ years in neurosurgery
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Practices at
                </dt>
                <dd className="mt-1 flex gap-1.5 text-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <Link href="/hospital" className="font-medium hover:text-primary hover:underline">
                      {hospital.name}
                    </Link>
                    <br />
                    <span className="text-muted-foreground">{hospital.address.line1}, {hospital.address.city}</span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-2">
            <h2
              id="profile-heading"
              className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              {doctor.tagline}
            </h2>
            <div className="mt-5 space-y-4">
              {doctor.longBio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-12 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              How this practice works
            </h2>
            <ul className="mt-5 space-y-3">
              {aboutPage.approach.map((item) => (
                <li key={item.slice(0, 40)} className="flex gap-3 text-pretty leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Education and credentials
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {config.education.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={item.degree} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.degree}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-14" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">
            Practice in numbers
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-5 text-center">
                <dd className="text-3xl font-extrabold text-primary">
                  {stat.value}
                  {stat.suffix}
                </dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-background py-14" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="why-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            {config.sections.highlights.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            {config.sections.highlights.subheading}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.highlights.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-14" aria-labelledby="treatments-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                id="treatments-heading"
                className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
              >
                Treatments offered
              </h2>
              <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
                Details of each operation, what recovery involves, and the questions patients ask.
              </p>
            </div>
            <Link
              href="/treatments"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              All treatments
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <LinkCards items={treatmentCards} />
          </div>
        </div>
      </section>

      <FaqBlock heading={`Questions about ${doctor.name}`} faq={aboutPage.faq} />

      <CtaBand
        config={config}
        title={`Book a consultation with ${doctor.name}`}
        text="Bring your scan films and reports. You will get a clear explanation of the options and an honest recommendation."
      />
    </PageFrame>
  );
}
