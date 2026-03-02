import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";

export function ObjectionsSection() {
  return (
    <section className="bg-background" id="objections">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-10">
          <BlurFadeHeading
            as="h2"
            text="This is infrastructure, not marketing."
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                “We already have a website.”
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Great. This makes it convert and trackable.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                “We already get calls.”
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                This makes those calls count and close.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                “We don’t need marketing.”
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                It’s not marketing. It’s lead control.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                “We’re too busy to change systems.”
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We handle setup. Your crew keeps working.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
