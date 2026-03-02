import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";

export function ProblemSection() {
  return (
    <section className="bg-background" id="problem">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-10">
          <BlurFadeHeading
            as="h2"
            text="Roofing leads get lost when the system is missing."
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          />
          <div className="grid gap-5 text-base text-muted-foreground sm:grid-cols-2">
            <div className="group rounded-2xl border border-border/60 bg-card/70 px-6 py-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Lead loss
              </p>
              <p className="mt-2 text-base text-foreground">
                Leads slip through cracks after the first call.
              </p>
            </div>
            <div className="group rounded-2xl border border-border/60 bg-card/70 px-6 py-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Follow-up
              </p>
              <p className="mt-2 text-base text-foreground">
                Follow-up is manual and inconsistent.
              </p>
            </div>
            <div className="group rounded-2xl border border-border/60 bg-card/70 px-6 py-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Reviews
              </p>
              <p className="mt-2 text-base text-foreground">
                Reviews grow slowly or not at all.
              </p>
            </div>
            <div className="group rounded-2xl border border-border/60 bg-card/70 px-6 py-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Visibility
              </p>
              <p className="mt-2 text-base text-foreground">
                Lost revenue is invisible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
