"use client";
import type { MouseEvent } from "react";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  visible,
  ctaLabel = "Book a demo",
  ctaLink = "#contact",
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  visible?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [autoVisible, setAutoVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setAutoVisible(false);
      } else {
        if (direction < 0) {
          setAutoVisible(true);
        } else {
          setAutoVisible(false);
        }
      }
    }
  });

  const isVisible = visible ?? autoVisible;

  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (!targetId.startsWith("#")) return;
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/85 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                onClick={(event) => handleSmoothScroll(event, navItem.link)}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border/70" />

          {/* CTA Button */}
          <a
            href={ctaLink}
            onClick={(event) => handleSmoothScroll(event, ctaLink)}
            className="relative rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-black/10"
          >
            <span>{ctaLabel}</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
