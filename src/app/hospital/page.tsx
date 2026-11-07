import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Ambulance,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { FaqBlock } from "@/components/pages/faq-block";
import { CtaBand } from "@/components/pages/cta-band";
import { getSiteSettings } from "@/lib/site-settings";
import { pageMetadata } from "@/lib/seo";
import { hospitalPage } from "@/content/pages";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteSettings();
  return pageMetadata(config, {
    path: hospitalPage.path,
    title: hospitalPage.title,
    description: hospitalPage.metaDescription,
    fullTitle: hospitalPage.fullTitle,
    keywords: [`${config.hospital.shortName} address`, `${config.hospital.shortName} Deoghar`],
  });
}

export default async function HospitalInfoPage() {
  const config = await getSiteSettings();
  const { hospital, contact, timings } = config;
  const heading = `${hospital.name}, ${hospital.address.city}`;

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={hospitalPage.path}
        title={heading}
        description={hospitalPage.metaDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Hospital", path: hospitalPage.path },
        ]}
        faq={hospitalPage.faq}
      />
      <PageHero
        breadcrumbs={[{ name: "Hospital", path: hospitalPage.path }]}
        badge="The Hospital"
        title={heading}
        lead={`${hospital.shortName} provides round-the-clock emergency neurosurgical and spine care for ${hospital.address.city} and the surrounding districts of ${hospital.address.region}.`}
      />

      <section className="bg-background py-14" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="intro-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            {hospital.tagline}
          </h2>
          <div className="mt-5 space-y-4">
            {hospitalPage.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-pretty leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-14" aria-labelledby="facilities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="facilities-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            {config.sections.facilities.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            {config.sections.facilities.subheading}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.facilities.map((facility) => (
              <figure
                key={facility.title}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={facility.image}
                    alt={facility.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <h3 className="text-base font-semibold text-foreground">{facility.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14" aria-labelledby="capability-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="capability-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            What the hospital is equipped for
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hospitalPage.capabilities.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-14" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="visit-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Address, timings and how to reach us
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <iframe
                title={`Map showing the location of ${hospital.shortName}`}
                src={hospital.mapEmbedUrl}
                className="h-72 w-full sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-4">
              <address className="not-italic">
                <div className="rounded-xl border border-border bg-card p-5">
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2.5">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-foreground">
                        {hospital.address.line1}
                        <br />
                        {hospital.address.line2}
                        <br />
                        {hospital.address.line3}
                        <br />
                        {hospital.address.country}
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <a href={`tel:${contact.phoneHref}`} className="font-medium text-foreground hover:text-primary hover:underline">
                        {contact.phone}
                      </a>
                    </li>
                    <li className="flex gap-2.5">
                      <Ambulance className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden="true" />
                      <a href={`tel:${contact.emergencyHref}`} className="font-medium text-foreground hover:text-red-600 hover:underline">
                        {contact.emergency} — 24×7 emergency
                      </a>
                    </li>
                    <li className="flex gap-2.5">
                      <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <a href={`mailto:${contact.email}`} className="break-all font-medium text-foreground hover:text-primary hover:underline">
                        {contact.email}
                      </a>
                    </li>
                  </ul>
                  <a
                    href={hospital.mapLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Get directions in Google Maps
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </address>

              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-foreground">OPD timings</h3>
                </div>
                <ul className="mt-3 divide-y divide-border/60 text-sm">
                  {timings.map((t) => (
                    <li key={t.day} className="flex items-center justify-between py-1.5">
                      <span className="text-muted-foreground">{t.day}</span>
                      <span
                        className={
                          t.hours.toLowerCase().includes("closed")
                            ? "font-medium text-red-600"
                            : "font-medium text-foreground"
                        }
                      >
                        {t.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Emergency and neurotrauma cases are seen at any hour, including nights, Sundays
                  and holidays.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">Areas served</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {hospital.areaServed.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Patients travel here from across the region for emergency neurosurgery that is not
                  available closer home.
                </p>
              </div>

              {hospital.websiteUrl && (
                <a
                  href={hospital.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-primary/40 bg-primary/5 p-5 transition-colors hover:bg-primary/10"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                      Our hospital online
                    </span>
                    <span className="mt-1 block text-base font-bold text-foreground">
                      {hospital.shortName} — hospital website
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      Hospital services, diagnostics and online appointment payment
                    </span>
                  </span>
                  <ExternalLink
                    className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <FaqBlock heading={`Questions about ${hospital.shortName}`} faq={hospitalPage.faq} />

      <CtaBand
        config={config}
        title={`Come and see ${config.doctor.name} at ${hospital.shortName}`}
        text="Book a consultation, call the OPD number, or WhatsApp your reports. For an emergency, call the 24×7 number and come straight in."
      />
    </PageFrame>
  );
}
