import { pricing, pricingFaqs, pricingNote } from "@/lib/copy";

export function PricingSection() {
  return (
    <section id="pricing" data-canvas-stage="scope" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Pricing</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">Three ways to start</h2>
      <p className="mt-3 max-w-xl text-sm text-muted">
        All plans include product strategy, UI/UX, and development support.
      </p>
      <div className="mt-12 grid gap-4">
        {pricing.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              "featured" in plan && plan.featured
                ? "border-accent/50 bg-accent/5"
                : "border-white/10"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.subtitle}</p>
              </div>
              <p className="font-display text-xl">{plan.price}</p>
            </div>
            <p className="mt-2 text-xs uppercase tracking-wider text-accent">{plan.timeline}</p>
            <p className="mt-2 text-sm text-muted">{plan.bestFor}</p>
            <ul className="mt-5 space-y-2 text-sm text-paper/85">
              {plan.items.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block text-sm font-semibold text-accent"
            >
              Book a consultation →
            </a>
          </article>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted">{pricingNote}</p>
      <div className="mt-12 space-y-6">
        <h3 className="font-display text-xl">FAQs</h3>
        {pricingFaqs.map((f) => (
          <div key={f.q}>
            <p className="text-sm font-medium">{f.q}</p>
            <p className="mt-1 text-sm text-muted">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
