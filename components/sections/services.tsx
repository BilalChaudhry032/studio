import { services } from "@/lib/copy";

export function ServicesSection() {
  return (
    <section id="services" data-canvas-stage="define" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Services</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">What we make</h2>
      <div className="mt-12 space-y-6">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[140px_1fr]"
          >
            <p className="font-mono text-xs text-muted">0{i + 1}</p>
            <div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted">{s.body}</p>
              <p className="mt-3 text-xs text-paper/70">
                <span className="text-accent">Tools.</span> {s.tools}
              </p>
              <p className="mt-1 text-xs text-paper/70">
                <span className="text-accent">Best for.</span> {s.bestFor}
              </p>
              <p className="mt-1 text-xs text-paper/70">
                <span className="text-accent">Use cases.</span> {s.uses}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
