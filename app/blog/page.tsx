import type { Metadata } from "next";
import Link from "next/link";
import { BlogIndex } from "@/components/blog-index";
import { blogIntro } from "@/lib/copy";
import { getPosts } from "@/lib/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights",
  description: blogIntro.body,
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{blogIntro.kicker}</p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl">{blogIntro.headline}</h1>
      <p className="mt-4 text-muted">{blogIntro.body}</p>
      <BlogIndex posts={posts} />
      <div className="mt-20 rounded-2xl border border-white/10 p-6">
        <h2 className="font-display text-2xl">Get insights in your inbox</h2>
        <p className="mt-2 text-sm text-muted">
          Weekly notes on product strategy, design, and growth.
        </p>
        <Link href="/#contact" className="mt-4 inline-block text-sm text-accent">
          Subscribe via contact →
        </Link>
      </div>
    </main>
  );
}
