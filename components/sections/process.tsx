import { process as method } from "@/lib/copy";

export function ProcessSection() {
  return (
    <section id="process" data-canvas-stage="build" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{method.kicker}</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">{method.headline}</h2>
      <p className="mt-4 max-w-2xl text-muted">{method.body}</p>
      <ol className="mt-12 space-y-8">
        {method.steps.map((step, i) => (
          <li key={step.id} className="grid gap-2 md:grid-cols-[4rem_1fr]">
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <div>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
