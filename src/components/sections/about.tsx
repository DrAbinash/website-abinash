"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

import { useSiteConfig } from "@/components/site-config-context";
import { Button } from "@/components/ui/button";
import { BookLink } from "@/components/book-link";

export function About() {
  const siteConfig = useSiteConfig();
  if (siteConfig.sections.about.visible === false) return null;
  return (
    <section
      id="about"
      className="bg-background py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg">
              <img
                src={siteConfig.doctor.photo}
                alt={`${siteConfig.doctor.name}, ${siteConfig.doctor.title}`}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-xl border border-border bg-background p-4 shadow-lg sm:-right-5">
              <div className="text-2xl font-extrabold text-primary">
                {siteConfig.doctor.yearsOfExperience}+
              </div>
              <p className="text-xs text-muted-foreground">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">{siteConfig.sections.about.badge}</p>
            <h2
              id="about-heading"
              className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              {siteConfig.doctor.name}
            </h2>
            <p className="mt-2 text-lg font-semibold text-primary">
              {siteConfig.doctor.title}
            </p>

            <div className="mt-5 space-y-4 text-muted-foreground">
              {siteConfig.doctor.longBio.map((para, i) => (
                <p key={i} className="text-pretty leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-secondary/50 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                Qualifications &amp; Training
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {siteConfig.doctor.qualifications.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <BookLink>
                  {siteConfig.booking.shortLabel}
                  <ArrowRight className="size-4" />
                </BookLink>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${siteConfig.contact.phoneHref}`}>
                  <Phone className="size-4" />
                  {siteConfig.contact.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
