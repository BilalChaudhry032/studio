"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories } from "@/lib/copy";
import type { PostListItem } from "@/lib/posts";

export function BlogIndex({ posts }: { posts: PostListItem[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const items = useMemo(() => {
    const query = q.trim().toLowerCase();
    return posts.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query);
      return okCat && okQ;
    });
  }, [posts, q, cat]);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat("All")}
          className={`rounded-full px-3 py-1 text-xs ${
            cat === "All" ? "bg-accent text-ink" : "border border-white/10 text-muted"
          }`}
        >
          All
        </button>
        {blogCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-3 py-1 text-xs ${
              cat === c ? "bg-accent text-ink" : "border border-white/10 text-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search articles"
        className="mt-6 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none ring-accent focus:ring-1"
      />
      <ul className="mt-14 space-y-10">
        {items.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs uppercase tracking-wider text-accent">{post.category}</p>
              <h2 className="mt-1 font-display text-3xl group-hover:text-accent">{post.title}</h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              <p className="mt-3 text-xs text-muted">
                {post.author} · {post.publishedAt.slice(0, 10)}
                {post.readingMinutes ? ` · ${post.readingMinutes} min` : ""}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {items.length === 0 ? (
        <p className="mt-10 text-sm text-muted">No articles in this filter.</p>
      ) : null}
    </>
  );
}
