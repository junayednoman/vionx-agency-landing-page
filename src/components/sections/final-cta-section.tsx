export function FinalCtaSection() {
  return (
    <section className="bg-background" id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="glass flex flex-col items-start justify-between gap-6 rounded-3xl px-8 py-10 shadow-card sm:flex-row sm:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Strengthen your roofing revenue operations.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Book a short demo and see the system built for contractors.
            </p>
          </div>
          <button className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:translate-y-[-1px]">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}
