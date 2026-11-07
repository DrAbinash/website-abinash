import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MessageCircle,
  Ambulance,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { FaqBlock } from "@/components/pages/faq-block";
import { Contact } from "@/components/sections/contact";
import { getSiteSettings } from "@/lib/site-settings";
import { getBookingUrl } from "@/lib/settings";
import { pageMetadata } from "@/lib/seo";
import { contactPage } from "@/content/pages";

/**
 * The FAQ below describes what the Book button does, and that depends on the
 * booking URL stored in the database — so this page is rendered per request
 * rather than baked at build time, keeping the text in step with the button.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteSettings();
  return pageMetadata(config, {
    path: contactPage.path,
    title: contactPage.title,
    description: contactPage.metaDescription,
    fullTitle: contactPage.fullTitle,
  });
}

export default async function ContactPage() {
  const config = await getSiteSettings();
  const { hospital, contact, timings } = config;
  const bookingUrl = await getBookingUrl();
  const heading = `Contact & Appointments in ${hospital.address.city}`;
  // The Book button leaves the site by default (the /book redirect), so the
  // online-booking FAQ applies unless the admin pointed it at the in-page form.
  const faq = [
    bookingUrl.trim().startsWith("#")
      ? contactPage.formFaq
      : contactPage.bookingFaq,
    ...contactPage.faq,
  ];
  const whatsappHref = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  const channels = [
    {
      icon: Ambulance,
      title: "Emergency 24×7",
      value: contact.emergency,
      href: `tel:${contact.emergencyHref}`,
      note: "Head & spine injury — call, do not message",
      iconClass: "text-red-600 bg-red-50",
      external: false,
    },
    {
      icon: Phone,
      title: "Phone / OPD",
      value: contact.phone,
      href: `tel:${contact.phoneHref}`,
      note: "Consultation appointments and reports",
      iconClass: "text-primary bg-primary/10",
      external: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: contact.phone,
      href: whatsappHref,
      note: "Send scans and reports for a quick opinion",
      iconClass: "text-primary bg-primary/10",
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      note: "Replies within one working day",
      iconClass: "text-primary bg-primary/10",
      external: false,
    },
  ];

  return (
    <PageFrame>
      <JsonLd
        config={config}
        path={contactPage.path}
        title={heading}
        description={contactPage.metaDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: contactPage.path },
        ]}
        faq={faq}
      />
      <PageHero
        breadcrumbs={[{ name: "Contact", path: contactPage.path }]}
        badge="Get in Touch"
        title={heading}
        lead={`Reach ${config.doctor.name} at ${hospital.shortName}, ${hospital.address.city}. Routine consultations by appointment; emergencies are seen at any hour.`}
      />

      <section className="bg-background py-14" aria-labelledby="channels-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="channels-heading" className="sr-only">
            Ways to contact the clinic
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <div key={channel.title} className="rounded-xl border border-border bg-card p-5">
                <span
                  className={`flex size-10 items-center justify-center rounded-lg ${channel.iconClass}`}
                >
                  <channel.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {channel.title}
                </p>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="block text-base font-bold text-foreground hover:text-primary hover:underline"
                >
                  {channel.value}
                </a>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{channel.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contactPage.guidance.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-secondary/50 p-5">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <section className="border-t border-border bg-background py-14" aria-labelledby="find-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="find-heading"
            className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Find the hospital
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
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
              <div className="rounded-xl border border-border bg-card p-5 text-sm">
                <p className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-foreground">
                    {hospital.address.line1}
                    <br />
                    {hospital.address.line2}
                    <br />
                    {hospital.address.line3}
                  </span>
                </p>
                <a
                  href={hospital.mapLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  Get directions
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
                {hospital.websiteUrl && (
                  <a
                    href={hospital.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 border-t border-border pt-3 text-xs font-medium text-muted-foreground hover:text-primary hover:underline"
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    {hospital.shortName} hospital website
                  </a>
                )}
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqBlock heading="Before you contact us" faq={faq} />
    </PageFrame>
  );
}
