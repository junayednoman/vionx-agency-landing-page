"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 section-surface" aria-hidden="true" />
      <Spotlight
        className="-top-24 left-[-10%] opacity-35 animate-none"
        fill="var(--primary)"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:py-10">
        <header className="flex w-full items-center justify-between">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
          >
            Vionx Digital
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground sm:flex">
            <a
              className="hover:text-foreground"
              href="#system"
              onClick={(event) => handleSmoothScroll(event, "#system")}
            >
              System
            </a>
            <a
              className="hover:text-foreground"
              href="#how-it-works"
              onClick={(event) => handleSmoothScroll(event, "#how-it-works")}
            >
              How it works
            </a>
            <a
              className="hover:text-foreground"
              href="#roi"
              onClick={(event) => handleSmoothScroll(event, "#roi")}
            >
              ROI
            </a>
            <a
              className="hover:text-foreground"
              href="#contact"
              onClick={(event) => handleSmoothScroll(event, "#contact")}
            >
              Book a demo
            </a>
          </nav>
        </header>
        <div className="flex flex-1 items-start pt-40 sm:pt-44">
          <div className="mx-auto w-full max-w-4xl space-y-10 text-center">
            <HoverBorderGradient
              as="div"
              duration={1.5}
              containerClassName="mx-auto"
              className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground"
            >
              Built for local roofing contractors
            </HoverBorderGradient>
            <div className="space-y-6">
              <BlurFadeHeading
                as="h1"
                text="Turn more local leads into booked jobs."
                className="mx-auto max-w-4xl text-[46px] font-semibold leading-[1.02] tracking-tight sm:text-[70px] lg:text-[82px]"
                wordSpacingClassName="mr-4 sm:mr-5"
              />
              <BlurFadeHeading
                as="p"
                text="Capture, follow up, track, and protect every lead without extra office work."
                className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
                wordSpacingClassName="mr-1 sm:mr-1.5"
                delay={0.18}
              />
            </div>
            <div
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.36 }}
                whileHover={{ y: -2, transition: { duration: 0.06 } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.06 } }}
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card"
              >
                Book a demo
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.48 }}
                whileHover={{ y: -2, transition: { duration: 0.06 } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.06 } }}
                className="rounded-xl border border-border bg-layer px-6 py-3 text-sm font-semibold text-foreground shadow-soft"
              >
                See how it works
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
