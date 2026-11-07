"use client";

import { usePathname } from "next/navigation";
import { useSiteConfig } from "@/components/site-config-context";
import { type SiteConfig } from "@/config/site.config";

/**
 * Nav items whose target section was hidden in /admin → Design & Layout
 * are dropped automatically, so the menu never links to a missing section.
 */
const SECTION_FOR_HREF: Partial<Record<string, keyof SiteConfig["sections"]>> = {
  "#about": "about",
  "#expertise": "expertise",
  "#services": "services",
  "#facilities": "facilities",
  "#credentials": "credentials",
  "#location": "location",
  "#contact": "contact",
};

export function useVisibleNav() {
  const siteConfig = useSiteConfig();
  const pathname = usePathname();
  // Section anchors only exist on the homepage, so on any other page they are
  // turned into absolute links back to that section instead of dead anchors.
  const prefix = pathname === "/" ? "" : "/";
  return siteConfig.nav
    .filter((item) => {
      const section = SECTION_FOR_HREF[item.href];
      if (!section) return true;
      return siteConfig.sections[section]?.visible !== false;
    })
    .map((item) => ({
      ...item,
      href: item.href.startsWith("#") ? `${prefix}${item.href}` : item.href,
    }));
}
