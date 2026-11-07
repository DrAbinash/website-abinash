"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useSiteConfig } from "@/components/site-config-context";
import { getIcon } from "@/components/icon-map";
import { treatmentHref, useSlugMap } from "@/components/slug-map-context";

export function Expertise() {
  const siteConfig = useSiteConfig();
  const slugMap = useSlugMap();
  const section = siteConfig.sections.expertise;
  if (section.visible === false) return null;
  return (
    <section
      id="expertise"
      className="bg-secondary/40 py-20 sm:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{section.badge}</p>
          <h2
            id="expertise-heading"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            {section.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.specializations.map((spec, i) => {
            const Icon = getIcon(spec.icon);
            const hasPage = slugMap.treatments.some((t) => t.title === spec.title);
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <Link
                  href={treatmentHref(slugMap, spec.title)}
                  className="block h-full"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {spec.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {spec.description}
                  </p>
                  {hasPage && (
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Every operation explained in detail — all treatments
            <ArrowRight className="size-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
