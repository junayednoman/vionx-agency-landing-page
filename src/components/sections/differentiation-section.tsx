import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";

export function DifferentiationSection() {
  return (
    <section className="section-surface" id="positioning">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-8">
          <BlurFadeHeading
            as="h2"
            text="Not an agency, not lead gen, not a website refresh."
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          />
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            This is operational infrastructure that protects and grows revenue
            across every lead, call, and job.
          </p>
        </div>
      </div>
    </section>
  );
}
