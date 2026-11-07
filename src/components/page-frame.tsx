"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { FloatingCta } from "@/components/sections/floating-cta";
import { ThemeInjector } from "@/components/theme-injector";

/**
 * Chrome shared by every page below the homepage: header, footer, mobile
 * quick-contact buttons and the saved color theme. The page's own content is
 * server-rendered so Google can read it without running any JavaScript.
 */
export function PageFrame({ children }: { children: React.ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) setPrimaryColor(d.settings.primaryColor);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingCta />
      <ThemeInjector primaryColor={primaryColor} />
    </div>
  );
}
