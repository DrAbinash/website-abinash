"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Highlights } from "@/components/sections/highlights";
import { Services } from "@/components/sections/services";
import { Facilities } from "@/components/sections/facilities";
import { Gallery } from "@/components/sections/gallery";
import { Credentials } from "@/components/sections/credentials";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingCta } from "@/components/sections/floating-cta";
import { ThemeInjector } from "@/components/theme-injector";

export function HomePage() {
  const [primaryColor, setPrimaryColor] = useState<string | undefined>(
    undefined
  );

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
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Highlights />
        <Services />
        <Facilities />
        <Gallery />
        <Credentials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
      <ThemeInjector primaryColor={primaryColor} />
    </div>
  );
}
