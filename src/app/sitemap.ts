import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { treatments } from "@/content/treatments";
import { conditions } from "@/content/conditions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();
  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/treatments`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/conditions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hospital`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...treatments.map((t) => ({
      url: `${baseUrl}/treatments/${t.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...conditions.map((c) => ({
      url: `${baseUrl}/conditions/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
