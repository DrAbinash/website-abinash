"use client";

import { useEffect } from "react";
import { resolveTheme, buildThemeCss } from "@/lib/themes";

/**
 * Injects the active color theme's CSS variables into the document head,
 * overriding the defaults. Reads the theme name from SiteSettings.primaryColor.
 */
export function ThemeInjector({ primaryColor }: { primaryColor?: string }) {
  useEffect(() => {
    const theme = resolveTheme(primaryColor);
    const css = buildThemeCss(theme);
    let el = document.getElementById(
      "abinash-theme-vars"
    ) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = "abinash-theme-vars";
      document.head.appendChild(el);
    }
    el.textContent = css;
    try {
      localStorage.setItem("abinash-theme", theme);
    } catch {
      /* ignore */
    }
  }, [primaryColor]);

  return null;
}
