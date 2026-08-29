"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  "brief",
  "discover",
  "define",
  "design",
  "build",
  "scope",
  "collab",
  "content",
  "shipped",
] as const;

function Artboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e12] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-accent/80" />
        <span className="ml-2 font-mono text-[10px] text-muted">product.canvas</span>
      </div>
      <div className="relative h-[calc(100%-2.25rem)] p-4">{children}</div>
    </div>
  );
}

export function ProcessCanvas({ compact = false }: { compact?: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = root.current;
    if (!el) return;

    const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-stage]"));

    if (reduce) {
      layers.forEach((layer) => {
        layer.style.opacity = layer.dataset.stage === "shipped" ? "1" : "0";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(layers, { opacity: 0 });
      gsap.set(layers[0], { opacity: 1 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: "#story",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      layers.forEach((layer, i) => {
        if (i === 0) return;
        const prev = layers[i - 1];
        const at = (i - 1) / (layers.length - 1);
        tl.to(prev, { opacity: 0, duration: 0.12 }, at);
        tl.to(layer, { opacity: 1, duration: 0.12 }, at);
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className={`w-full ${compact ? "h-full" : "h-full min-h-[28rem]"}`}
    >
      <Artboard>
        <div data-stage="brief" className="canvas-layer space-y-3" style={{ opacity: 1 }}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">01 Idea</p>
          <p className="font-display text-xl leading-tight">Blank brief</p>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-2 w-1/2 rounded bg-white/10" />
            <div className="mt-6 grid h-28 place-items-center rounded-xl border border-dashed border-white/20 text-xs text-muted">
              spark · one-line problem
            </div>
          </div>
        </div>

        <div data-stage="discover" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">02 Discover</p>
          <p className="font-display text-xl">Goals & users</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
            {["Jobs to be done", "Risks", "Audience", "Success metric"].map((n) => (
              <div key={n} className="rounded-lg bg-white/5 p-2 text-muted">
                {n}
              </div>
            ))}
          </div>
        </div>

        <div data-stage="define" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">03 Define</p>
          <p className="font-display text-xl">Information architecture</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Home", "Product", "Billing", "App", "Admin", "CMS"].map((n) => (
              <div
                key={n}
                className="rounded-md border border-white/10 py-3 text-center text-[10px] uppercase tracking-wider"
              >
                {n}
              </div>
            ))}
          </div>
        </div>

        <div data-stage="design" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">04 Design</p>
          <p className="font-display text-xl">Wireframe → UI</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="space-y-2 rounded-lg border border-white/15 p-2">
              <div className="h-16 rounded bg-white/10" />
              <div className="h-1.5 w-2/3 rounded bg-white/20" />
              <div className="h-1.5 w-1/2 rounded bg-white/10" />
            </div>
            <div className="space-y-2 rounded-lg bg-accent/10 p-2 ring-1 ring-accent/40">
              <div className="h-16 rounded bg-accent/30" />
              <div className="h-1.5 w-2/3 rounded bg-paper/80" />
              <div className="h-6 w-16 rounded-full bg-accent" />
            </div>
          </div>
        </div>

        <div data-stage="build" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">05 Build</p>
          <p className="font-display text-xl">Components assemble</p>
          <pre className="mt-3 overflow-hidden rounded-lg bg-black/50 p-3 font-mono text-[10px] leading-relaxed text-accent/90">
{`export function App() {
  return (
    <Shell>
      <Hero />
      <Billing />
    </Shell>
  )
}`}
          </pre>
        </div>

        <div data-stage="scope" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">06 Scope</p>
          <p className="font-display text-xl">Starter → Scale</p>
          <div className="mt-4 space-y-2">
            {["Starter  4–10 pages", "Growth  product + API", "Scale  multi-tenant"].map(
              (row, i) => (
                <div
                  key={row}
                  className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-xs"
                  style={{ opacity: 0.45 + i * 0.25 }}
                >
                  {row}
                </div>
              ),
            )}
          </div>
        </div>

        <div data-stage="collab" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">07 Team</p>
          <p className="font-display text-xl">Live collaboration</p>
          <div className="relative mt-6 h-28 rounded-xl bg-white/5">
            <span className="absolute left-4 top-6 rounded-full bg-sky-400 px-2 py-0.5 text-[10px] text-ink">
              Amina
            </span>
            <span className="absolute right-6 top-14 rounded-full bg-accent px-2 py-0.5 text-[10px] text-ink">
              Leo
            </span>
            <span className="absolute bottom-4 left-1/3 text-[11px] text-muted">
              “Tighten this CTA hierarchy”
            </span>
          </div>
        </div>

        <div data-stage="content" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">08 Content</p>
          <p className="font-display text-xl">CMS blocks</p>
          <div className="mt-3 space-y-2">
            {["Hero module", "Article body", "CTA · book a call"].map((b) => (
              <div key={b} className="rounded-md border border-white/10 px-3 py-2 text-xs">
                {b}
              </div>
            ))}
          </div>
        </div>

        <div data-stage="shipped" className="canvas-layer space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">09 Shipped</p>
          <p className="font-display text-xl">Live product</p>
          <div className="mt-3 rounded-xl bg-white/[0.04] p-3">
            <p className="font-mono text-[10px] text-accent">https://you.studio</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="font-display text-lg">+40%</p>
                <p className="text-[10px] text-muted">conversion</p>
              </div>
              <div>
                <p className="font-display text-lg">1.2s</p>
                <p className="text-[10px] text-muted">LCP</p>
              </div>
              <div>
                <p className="font-display text-lg">85+</p>
                <p className="text-[10px] text-muted">Lighthouse</p>
              </div>
            </div>
          </div>
        </div>
      </Artboard>
      <p className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-muted">
        {stages.length} states · scroll to evolve
      </p>
    </div>
  );
}
