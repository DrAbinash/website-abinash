/**
 * The public address of this website — used for the canonical URL, Open Graph
 * URL, sitemap and robots.txt. Everything must agree on one address, or Google
 * treats the pages as duplicates of each other and ranks neither.
 *
 * Read at runtime (not `NEXT_PUBLIC_`, which is inlined at build time) so that
 * changing the address needs a container restart, not a full rebuild. If the
 * variable is missing or empty the default below is used, which is the real
 * address of this site — a stale deployment therefore degrades to the correct
 * value instead of pointing search engines at another host.
 */
const DEFAULT_SITE_URL = "https://abinash.caredeoghar.com";

export function getSiteUrl(): string {
  const configured = process.env.SITE_URL?.trim();
  if (!configured) return DEFAULT_SITE_URL;
  return configured.replace(/\/+$/, "");
}

/** Absolute URL for a path on this site, e.g. `absoluteUrl("/about")`. */
export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized === "/" ? "/" : normalized}`;
}
