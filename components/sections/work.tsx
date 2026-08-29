"use client";

import { useMemo, useState } from "react";
import { work, workFilters } from "@/lib/copy";

export function WorkSection() {
  const [filter, setFilter] = useState<(typeof workFilters)[number]>("All");
  const items = useMemo(
    () => (filter === "All" ? work : work.filter((w) => w.category === filter)),
    [filter],
  );

  return (
    <section id="work" data-canvas-stage="design" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Work</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">Selected case studies</h2>
      <p className="mt-3 max-w-xl text-sm text-muted">
        Problem → solution → process → UI → results → stack. Metrics are illustrative until
        real projects are supplied.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {workFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider ${
              filter === f ? "bg-accent text-ink" : "border border-white/15 text-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-4">
        {items.map((item) => (
          <article
            key={item.slug}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-accent/40"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <span className="text-xs uppercase tracking-wider text-accent">{item.category}</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              <span className="text-paper">Problem.</span> {item.problem}
            </p>
            <p className="mt-2 text-sm text-muted">
              <span className="text-paper">Solution.</span> {item.solution}
            </p>
            <p className="mt-2 text-sm text-paper/90">
              <span className="text-accent">Impact.</span> {item.result}
            </p>
            <p className="mt-4 font-mono text-[11px] text-muted">{item.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
