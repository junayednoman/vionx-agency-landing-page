"use client";

import type { MouseEvent } from "react";

export function FooterSection() {
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
    <footer className="section-surface" id="footer">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-base font-semibold">Vionx Digital</p>
            <p className="text-sm text-muted-foreground">
              Operational infrastructure for steady roofing revenue.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>hello@roofingrevenuesystem.com</p>
              <p>(555) 555-0199</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
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
                onClick={(event) =>
                  handleSmoothScroll(event, "#how-it-works")
                }
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
            </div>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Coverage
            </p>
            <div className="flex flex-col gap-2">
              <p>Serving local roofing contractors across the U.S.</p>
              <p>Built for small to mid-size crews.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-muted-foreground">
          © 2026 Vionx Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
