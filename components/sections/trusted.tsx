import { trustedBy } from "@/lib/copy";

export function TrustedSection() {
  return (
    <section id="trusted" className="border-y border-white/10 px-5 py-8 lg:px-0">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow text-xs text-muted">Selected partners</p>
        <span className="font-mono text-[10px] text-muted">01 / 06</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-lg text-paper/55 sm:grid-cols-3">
        {trustedBy.map((name) => (
          <span key={name} className="font-display tracking-tight transition-colors hover:text-accent">
            {name}
          </span>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted">A few teams we have helped move from idea to shipped.</p>
    </section>
  );
}
