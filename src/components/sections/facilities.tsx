"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { useSiteConfig } from "@/components/site-config-context";

export function Facilities() {
  const siteConfig = useSiteConfig();
  const section = siteConfig.sections.facilities;
  if (section.visible === false) return null;
  return (
    <section
      id="facilities"
      className="bg-background py-20 sm:py-28"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{section.badge}</p>
          <h2
            id="facilities-heading"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            {section.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-foreground">
                  {facility.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
