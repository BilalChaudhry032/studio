import { about, team } from "@/lib/copy";

export function TeamSection() {
  return (
    <section id="team" data-canvas-stage="collab" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{about.kicker}</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">{about.headline}</h2>
      <p className="mt-5 max-w-2xl text-muted">{about.body}</p>
      <p className="mt-4 max-w-2xl text-sm text-paper/80">{about.mission}</p>
      <p className="mt-3 max-w-2xl text-sm text-muted">{about.vision}</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {about.values.map((v) => (
          <article key={v.title} className="rounded-xl border border-white/10 p-4">
            <h3 className="text-sm uppercase tracking-wider text-accent">{v.title}</h3>
            <p className="mt-2 text-sm text-muted">{v.body}</p>
          </article>
        ))}
      </div>
      <h3 className="mt-16 font-display text-2xl">The team</h3>
      <p className="mt-2 text-sm text-muted">Placeholder profiles until real photos and bios land.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {team.map((m) => (
          <article key={m.name} className="flex gap-4">
            <div className="size-16 shrink-0 rounded-full bg-gradient-to-br from-white/20 to-accent/30" />
            <div>
              <h4 className="font-display text-lg">{m.name}</h4>
              <p className="text-xs uppercase tracking-wider text-accent">{m.role}</p>
              <p className="mt-2 text-sm text-muted">{m.bio}</p>
              <a href={m.social} className="mt-2 inline-block text-xs text-paper/70">
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
