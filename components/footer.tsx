import Link from "next/link";
import { brand } from "@/lib/copy";

export function Footer() {
  return (
    <footer
      id="site-footer"
      data-canvas-stage="shipped"
      className="border-t border-white/10 px-5 py-16 lg:px-8"
    >
      <div className="mx-auto flex max-w-story flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl">
            {brand.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Built to launch. Designed to grow. A studio for products that perform
            in the real world.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/#work" className="hover:text-paper">
            Work
          </Link>
          <Link href="/blog" className="hover:text-paper">
            Blog
          </Link>
          <Link href="/#contact" className="hover:text-paper">
            Contact
          </Link>
          <Link href="/studio" className="hover:text-paper">
            Studio CMS
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-story text-xs text-muted">
        Placeholder brand. Replace name, contact, and assets when ready.
      </p>
    </footer>
  );
}
