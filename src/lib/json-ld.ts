import type { EditableSiteConfig } from "@/lib/site-settings";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

type Json = Record<string, unknown>;

export type Crumb = { name: string; path: string };
export type FaqItem = { question: string; answer: string };

const SCHEMA_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * "9:00 AM – 5:00 PM" -> a 24-hour pair. Returns null for "Closed (Emergency
 * Only)" or any wording without two clock times, so an edit in /admin can
 * never produce an invalid opening-hours entry.
 */
function parseOpeningHours(hours: string): { opens: string; closes: string } | null {
  const found = [...hours.matchAll(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)/gi)];
  if (found.length < 2) return null;
  const to24 = (match: RegExpMatchArray): string => {
    let hour = Number(match[1]) % 12;
    if (match[3].toLowerCase() === "pm") hour += 12;
    return `${String(hour).padStart(2, "0")}:${match[2] ?? "00"}`;
  };
  return { opens: to24(found[0]), closes: to24(found[1]) };
}

function openingHours(config: EditableSiteConfig): Json[] {
  return config.timings.flatMap((timing) => {
    const day = SCHEMA_DAYS.find(
      (d) => d.toLowerCase() === timing.day.trim().toLowerCase()
    );
    const hours = parseOpeningHours(timing.hours);
    if (!day || !hours) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: hours.opens,
        closes: hours.closes,
      },
    ];
  });
}

function filled(...values: (string | undefined)[]): string[] {
  return values.map((v) => (v ?? "").trim()).filter(Boolean);
}

/**
 * The entity graph Google reads: the doctor, the hospital he works at, the
 * website, and the page being served. Every node is reachable by `@id` so the
 * doctor and the hospital are understood as one connected entity rather than
 * two unrelated things — which is what makes the knowledge panel possible.
 */
export function buildJsonLd(
  config: EditableSiteConfig,
  options: {
    path: string;
    title: string;
    description: string;
    breadcrumbs?: Crumb[];
    faq?: FaqItem[];
  }
): Json {
  const siteUrl = getSiteUrl();
  const pageUrl = absoluteUrl(options.path);
  const physicianId = `${siteUrl}/#physician`;
  const hospitalId = `${siteUrl}/#hospital`;
  const websiteId = `${siteUrl}/#website`;

  const { address } = config.hospital;
  const { social, seo } = config;
  const services = config.specializations.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.title,
    description: s.description,
  }));

  const physician: Json = {
    "@type": "Physician",
    "@id": physicianId,
    name: config.doctor.name,
    url: pageUrl,
    image: absoluteUrl(config.doctor.photo),
    jobTitle: config.doctor.title,
    description: config.doctor.shortBio,
    medicalSpecialty: ["NeurologicSurgery"],
    availableService: services,
    hasCredential: config.education.map((e) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: e.degree,
      description: e.detail,
    })),
    hospitalAffiliation: { "@id": hospitalId },
    worksFor: { "@id": hospitalId },
    address: {
      "@type": "PostalAddress",
      streetAddress: filled(address.line1, address.line2).join(", "),
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
    telephone: config.contact.phone,
    email: config.contact.email,
    sameAs: filled(seo.googleBusinessProfileUrl, social.facebook, social.instagram, social.youtube, social.linkedin, social.twitter),
  };

  const latitude = address.latitude.trim();
  const longitude = address.longitude.trim();

  const hospital: Json = {
    "@type": "Hospital",
    "@id": hospitalId,
    name: config.hospital.name,
    alternateName: config.hospital.shortName,
    description: config.hospital.tagline,
    url: filled(config.hospital.websiteUrl)[0] ?? siteUrl,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl(config.facilities[0]?.image ?? config.doctor.photo),
    address: {
      "@type": "PostalAddress",
      streetAddress: filled(address.line1, address.line2).join(", "),
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
    telephone: config.contact.phone,
    email: config.contact.email,
    medicalSpecialty: ["NeurologicSurgery"],
    availableService: services,
    openingHoursSpecification: openingHours(config),
    areaServed: config.hospital.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    sameAs: filled(config.hospital.websiteUrl, seo.googleBusinessProfileUrl),
  };

  if (latitude && longitude) {
    hospital.geo = { "@type": "GeoCoordinates", latitude, longitude };
    physician.geo = { "@type": "GeoCoordinates", latitude, longitude };
  }

  const graph: Json[] = [
    physician,
    hospital,
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: `${config.doctor.name} — ${config.doctor.title}`,
      description: options.description,
      inLanguage: "en-IN",
      publisher: { "@id": hospitalId },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: options.title,
      description: options.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      about: { "@id": physicianId },
      primaryImageOfPage: absoluteUrl(seo.ogImage),
    },
  ];

  const crumbs = options.breadcrumbs ?? [];
  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  const faq = options.faq ?? [];
  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
