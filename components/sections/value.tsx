import { apart, audience, value, whyUs } from "@/lib/copy";

export function ValueSection() {
  return (
    <section id="value" data-canvas-stage="discover" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{value.kicker}</p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-5xl">{value.headline}</h2>
      <p className="mt-5 max-w-2xl text-muted">{value.body}</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {value.pillars.map((p) => (
          <article key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-display text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 max-w-2xl">
        <h3 className="font-display text-2xl">{whyUs.headline}</h3>
        <p className="mt-3 text-muted">{whyUs.body}</p>
        <ul className="mt-6 space-y-2 text-sm">
          {whyUs.points.map((p) => (
            <li key={p}>— {p}</li>
          ))}
        </ul>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {apart.map((item) => (
          <article key={item.title}>
            <h3 className="text-sm uppercase tracking-[0.18em] text-accent">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-12 max-w-2xl text-sm text-muted">{audience}</p>
    </section>
  );
}
