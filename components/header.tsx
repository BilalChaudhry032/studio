"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand, nav } from "@/lib/copy";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-story items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="font-display text-lg tracking-tight transition-colors hover:text-accent">
          {brand.name}
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {nav.map((item) => {
            const isBlog = item.href === "/blog";
            const active = isBlog && pathname.startsWith("/blog");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-paper ${active ? "text-paper" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
        >
          Book a call
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-white/5 px-5 py-2 text-xs text-muted lg:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 hover:text-paper">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
