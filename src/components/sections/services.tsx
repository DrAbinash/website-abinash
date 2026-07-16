"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { useSiteConfig } from "@/components/site-config-context";
import { BookLink } from "@/components/book-link";

export function Services() {
  const siteConfig = useSiteConfig();
  const section = siteConfig.sections.services;
  if (section.visible === false) return null;
  return (
    <section
      id="services"
      className="bg-secondary/40 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{section.badge}</p>
          <h2
            id="services-heading"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            {section.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.conditions.map((condition, i) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/40"
            >
              <CheckCircle2 className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {condition}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-xl bg-primary px-6 py-6 text-center text-primary-foreground sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-base font-semibold">{section.ctaTitle}</p>
            <p className="text-sm text-primary-foreground/80">{section.ctaText}</p>
          </div>
          <BookLink className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-background px-5 text-sm font-semibold text-primary transition-colors hover:bg-background/90">
            {siteConfig.booking.shortLabel}
          </BookLink>
        </motion.div>
      </div>
    </section>
  );
}
