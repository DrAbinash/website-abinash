import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    // Photos uploaded through /admin are served from /api/uploads/, so that
    // path is re-allowed: without it Google could not fetch the doctor's own
    // photo or the share image after he replaces them.
    rules: [
      { userAgent: "*", allow: ["/", "/api/uploads/"], disallow: ["/api/", "/admin"] },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
