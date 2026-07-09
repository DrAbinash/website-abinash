"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Ambulance, ShieldCheck, Star } from "lucide-react";

import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import { BookLink } from "@/components/book-link";

const trustItems = [
  { icon: ShieldCheck, label: "M.Ch. Neurosurgery" },
  { icon: Star, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "24×7 Neurotrauma Cover" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-panel"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8 lg:py-28">
        {/* Left: text */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {siteConfig.hospital.shortName}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {siteConfig.doctor.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-lg font-semibold text-primary sm:text-xl"
          >
            {siteConfig.doctor.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 flex flex-wrap gap-1.5"
          >
            {siteConfig.doctor.qualifications.map((q) => (
              <span
                key={q}
                className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground/80"
              >
                {q}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            {siteConfig.doctor.tagline}. {siteConfig.doctor.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <BookLink>
                <Calendar className="size-4" />
                Book Appointment
              </BookLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#expertise">
                Explore Expertise
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-6"
          >
            {trustItems.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-1.5 text-xs font-medium text-foreground/80 sm:text-sm"
              >
                <t.icon className="size-4 text-primary" />
                {t.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: hero image with floating cards */}
        <div className="relative order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto max-w-md md:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
              <img
                src="/hero-brain.png"
                alt="Illustration of the human brain symbolising neurosurgical care"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] md:aspect-[4/5]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-primary" />
            </div>

            {/* Floating stat card top-left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-4 top-6 hidden rounded-xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-sm sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Ambulance className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Emergency</p>
                  <p className="text-sm font-semibold text-foreground">
                    24×7 Cover
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating stat card bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -right-4 bottom-6 hidden rounded-xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-sm sm:block"
            >
              <p className="text-2xl font-extrabold text-primary">
                2000<span className="text-base align-top">+</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Neuro &amp; Spine Surgeries
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
