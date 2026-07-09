"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/config/site.config";
import { getIcon } from "@/components/icon-map";

export function Highlights() {
  return (
    <section
      id="highlights"
      className="bg-background py-20 sm:py-28"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Why Choose Us</p>
          <h2
            id="highlights-heading"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Care That Puts Patients First
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Every decision is guided by safety, precision, and the patient&apos;s
            long-term wellbeing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.highlights.map((h, i) => {
            const Icon = getIcon(h.icon);
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
