"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/config/site.config";
import { getIcon } from "@/components/icon-map";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-secondary/40 py-20 sm:py-28"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Education &amp; Credentials</p>
          <h2
            id="credentials-heading"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            A Foundation of Rigorous Training
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Years of dedicated surgical and super-specialty training form the
            backbone of safe, evidence-based neurosurgical care.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {siteConfig.education.map((edu, i) => {
              const Icon = getIcon(edu.icon);
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative pl-14 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0"
                >
                  {/* Dot + icon */}
                  <div
                    className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md sm:left-1/2 sm:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <Icon className="size-4" />
                  </div>

                  <div
                    className={
                      isLeft
                        ? "sm:col-start-1 sm:text-right sm:pr-8"
                        : "sm:col-start-2 sm:pl-8"
                    }
                  >
                    <div className="rounded-xl border border-border bg-card p-4">
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                        {edu.degree}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.detail}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
