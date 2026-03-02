import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";

export function SystemSection() {
  return (
    <section className="section-surface" id="system">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-10">
          <BlurFadeHeading
            as="h2"
            text="One system that protects and grows every lead."
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="glass rounded-2xl px-6 py-6 shadow-card">
              <h3 className="text-lg font-semibold">Lead Capture Engine</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Turn every inquiry into a clean, qualified lead.
              </p>
            </div>
            <div className="glass rounded-2xl px-6 py-6 shadow-card">
              <h3 className="text-lg font-semibold">
                Automated Follow-Up System
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Keep prospects moving until the job is booked.
              </p>
            </div>
            <div className="glass rounded-2xl px-6 py-6 shadow-card">
              <h3 className="text-lg font-semibold">Review Growth Engine</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Build steady reviews that win the next call.
              </p>
            </div>
            <div className="glass rounded-2xl px-6 py-6 shadow-card">
              <h3 className="text-lg font-semibold">
                Revenue Tracking Dashboard
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                See what closes, what stalls, and what costs you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
