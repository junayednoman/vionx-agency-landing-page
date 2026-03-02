import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";

export function HowItWorksSection() {
  return (
    <section className="bg-background" id="how-it-works">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-10">
          <BlurFadeHeading
            as="h2"
            text="How it works."
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card px-6 py-6 shadow-soft">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                We set up your system.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your pipeline is ready without dragging your team into it.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-6 shadow-soft">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Leads and calls get captured.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every inquiry lands in one place, already tracked.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-6 shadow-soft">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                You book more jobs with less work.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear follow-up means fewer missed deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
