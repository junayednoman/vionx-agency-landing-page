import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";

export function RoiSection() {
  return (
    <section className="section-surface" id="roi">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-10">
          <div className="space-y-3">
            <BlurFadeHeading
              as="h2"
              text="Simple roofing math. Real revenue impact."
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            />
            <p className="text-sm text-muted-foreground sm:text-base">
              Average roofing jobs often land between $2,000 and $15,000.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card px-6 py-6 shadow-soft">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Add 1 job / month
              </h3>
              <p className="mt-3 text-2xl font-semibold">
                +$2,000 to +$15,000
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Small lift. Big monthly difference.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-6 shadow-soft">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Add 2 jobs / month
              </h3>
              <p className="mt-3 text-2xl font-semibold">
                +$4,000 to +$30,000
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                More booked jobs. Same crew.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-6 shadow-soft">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Add 3 jobs / month
              </h3>
              <p className="mt-3 text-2xl font-semibold">
                +$6,000 to +$45,000
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Consistent gains without overtime chaos.
              </p>
            </div>
          </div>
          <div className="glass rounded-2xl px-6 py-6 shadow-card">
            <p className="text-sm text-muted-foreground">
              Example: A $7,500 average job. Add 2 jobs per month = $15,000
              more revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
