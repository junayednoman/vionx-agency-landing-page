"use client";

import { BadgeCheck, Handshake, ShieldCheck, Wrench } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function TrustBar() {
  return (
    <section className="section-surface" id="trust">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <div className="glass flex flex-col gap-6 rounded-2xl px-6 py-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-foreground">
            Trusted by local crews that need steady, trackable leads.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold text-muted-foreground">
            <HoverBorderGradient
              as="div"
              duration={1.8}
              containerClassName="rounded-full"
              className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              Built for US contractors
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              duration={1.8}
              containerClassName="rounded-full"
              className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2"
            >
              <Handshake className="h-4 w-4 text-primary" />
              No contracts
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              duration={1.8}
              containerClassName="rounded-full"
              className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2"
            >
              <Wrench className="h-4 w-4 text-primary" />
              Simple setup
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              duration={1.8}
              containerClassName="rounded-full"
              className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2"
            >
              <BadgeCheck className="h-4 w-4 text-primary" />
              Cancel anytime
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
