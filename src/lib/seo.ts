import type { Metadata } from "next";
import type { EditableSiteConfig } from "@/lib/site-settings";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

/** Google shows roughly 60 characters of a title and 155 of a description. */
const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

/** Shorten on a word boundary so the snippet never ends mid-word. */
function clip(text: string, limit: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : limit - 1).trimEnd()}…`;
}

export function homeTitle(config: EditableSiteConfig): string {
  if (config.seo.homeTitle.trim()) return clip(config.seo.homeTitle, TITLE_LIMIT);
  return clip(
    `${config.seo.primaryKeyword} | ${config.doctor.name} — Brain & Spine`,
    TITLE_LIMIT
  );
}

export function homeDescription(config: EditableSiteConfig): string {
  if (config.seo.homeDescription.trim()) {
    return clip(config.seo.homeDescription, DESCRIPTION_LIMIT);
  }
  return clip(
    `${config.doctor.title} — brain tumour, spine and 24×7 head-injury care at ` +
      `${config.hospital.shortName}, ${config.hospital.address.city}. ` +
      `Call ${config.contact.phone}.`,
    DESCRIPTION_LIMIT
  );
}

/**
 * Title pattern for every page below the homepage. Each page supplies its own
 * topic and city; the doctor's name is appended so the snippet is recognisable.
 */
export function pageTitleTemplate(config: EditableSiteConfig): string {
  return `%s | ${config.doctor.name}`;
}

/**
 * The full metadata block for one page: title, description, canonical, and
 * the share card. Every field is set here rather than inherited from the root
 * layout, so a page can never end up pointing its canonical or og:url at the
 * homepage.
 *
 * `fullTitle` is for the homepage, whose title already contains the doctor's
 * name and must not have the template applied a second time.
 */
export function pageMetadata(
  config: EditableSiteConfig,
  options: {
    path: string;
    title: string;
    description: string;
    keywords?: string[];
    fullTitle?: boolean;
  }
): Metadata {
  const shareImage = absoluteUrl(config.seo.ogImage);
  const url = absoluteUrl(options.path);
  return {
    title: options.fullTitle ? { absolute: options.title } : options.title,
    description: options.description,
    keywords: [...config.seo.keywords, ...(options.keywords ?? [])],
    alternates: { canonical: options.path },
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      type: "website",
      siteName: config.hospital.name,
      locale: "en_IN",
      images: [{ url: shareImage, width: 1200, height: 630, alt: options.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [shareImage],
    },
    robots: { index: true, follow: true },
  };
}

export { clip as clipSnippet, TITLE_LIMIT, DESCRIPTION_LIMIT };
