import type { EditableSiteConfig } from "@/lib/site-settings";

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

export { clip as clipSnippet, TITLE_LIMIT, DESCRIPTION_LIMIT };
