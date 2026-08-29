import { results, testimonials } from "@/lib/copy";

export function ResultsSection() {
  return (
    <section id="results" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Results</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">The work, measured</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {results.map((r) => (
          <article key={r.label} className="border-t border-accent/40 pt-4">
            <p className="font-display text-5xl">{r.stat}</p>
            <p className="mt-2 text-sm uppercase tracking-wider">{r.label}</p>
            <p className="mt-2 text-sm text-muted">{r.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 space-y-8">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="max-w-2xl">
            <p className="font-display text-2xl leading-snug">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-muted">
              {t.name}, {t.company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
