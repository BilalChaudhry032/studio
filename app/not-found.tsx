import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl">This page is not in the build.</h1>
      <Link href="/" className="mt-8 inline-block text-sm text-accent">
        Back to the studio →
      </Link>
    </main>
  );
}
