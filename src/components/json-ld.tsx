import { buildJsonLd, type Crumb, type FaqItem } from "@/lib/json-ld";
import type { EditableSiteConfig } from "@/lib/site-settings";

/**
 * Renders this page's structured data. It lives in the page rather than the
 * root layout because the WebPage, BreadcrumbList and FAQPage nodes describe
 * the page being served — a single graph in the layout would label every
 * treatment and condition page as the homepage.
 */
export function JsonLd({
  config,
  path,
  title,
  description,
  breadcrumbs,
  faq,
}: {
  config: EditableSiteConfig;
  path: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  faq?: FaqItem[];
}) {
  const data = buildJsonLd(config, { path, title, description, breadcrumbs, faq });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
