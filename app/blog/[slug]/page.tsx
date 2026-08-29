import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import { getPost, getPosts } from "@/lib/posts";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const body = post.body;
  const isPortable = Array.isArray(body) && body.length > 0 && typeof body[0] !== "string";

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 lg:px-8">
      <Link href="/blog" className="text-xs uppercase tracking-wider text-muted">
        ← All articles
      </Link>
      <p className="mt-8 text-xs uppercase tracking-wider text-accent">{post.category}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-muted">
        {post.author} · {post.publishedAt.slice(0, 10)}
      </p>
      <p className="mt-6 text-lg text-paper/80">{post.excerpt}</p>
      <div className="prose-studio mt-10 space-y-5 text-base leading-relaxed text-muted">
        {isPortable ? (
          <PortableText value={body as PortableTextBlock[]} />
        ) : Array.isArray(body) ? (
          (body as string[]).map((p) => <p key={p.slice(0, 32)}>{p}</p>)
        ) : null}
      </div>
      <div className="mt-10 flex flex-wrap gap-4 text-xs text-muted">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noreferrer"
        >
          Share
        </a>
        <a href={`mailto:?subject=${encodeURIComponent(post.title)}`}>Email</a>
      </div>
      <div className="mt-16 rounded-2xl border border-white/10 p-6">
        <p className="font-display text-2xl">Want this thinking on your product?</p>
        <Link href="/#contact" className="mt-4 inline-block text-sm text-accent">
          Book a strategy call →
        </Link>
      </div>
    </article>
  );
}
