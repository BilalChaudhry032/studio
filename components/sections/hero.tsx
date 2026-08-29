import { hero } from "@/lib/copy";

export function HeroSection() {
  return (
    <section id="hero" data-canvas-stage="brief" className="relative overflow-hidden px-5 pb-24 pt-16 lg:px-0 lg:pb-32 lg:pt-28">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] lg:items-end">
        <div>
          <p className="eyebrow text-xs text-accent">{hero.kicker}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.94] tracking-[-0.04em]">
            {hero.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-1"
        >
          {hero.primaryCta}
        </a>
        <a
          href="#work"
          className="rounded-full border border-white/20 px-6 py-3 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
        >
          {hero.secondaryCta}
        </a>
          </div>
        </div>
        <div className="border-l border-accent/50 pl-5 lg:mb-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">The brief</p>
          <ul className="mt-5 space-y-4 text-sm text-paper/90">
            {hero.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-white/10 pt-4 text-xs leading-relaxed text-muted">{hero.proof}</p>
        </div>
      </div>
      <p className="mt-12 max-w-xl text-sm italic text-paper/70">{hero.trust}</p>
    </section>
  );
}
