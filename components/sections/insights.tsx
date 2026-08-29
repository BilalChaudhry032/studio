import Link from "next/link";
import { blogIntro } from "@/lib/copy";
import type { PostListItem } from "@/lib/posts";

export function InsightsSection({ posts }: { posts: PostListItem[] }) {
  return (
    <section id="insights" data-canvas-stage="content" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{blogIntro.kicker}</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">{blogIntro.headline}</h2>
      <p className="mt-3 max-w-xl text-muted">{blogIntro.body}</p>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border-t border-white/10 pt-5"
          >
            <p className="text-xs uppercase tracking-wider text-accent">{post.category}</p>
            <h3 className="mt-1 font-display text-2xl">{post.title}</h3>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="mt-10 inline-block rounded-full border border-white/20 px-5 py-2 text-sm"
      >
        Explore all articles
      </Link>
    </section>
  );
}
