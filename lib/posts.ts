import { fallbackPosts } from "@/lib/copy";
import { postBySlugQuery, postsQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity";

export type PostListItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  cover?: string | null;
  readingMinutes?: number;
};

export type PostDetail = PostListItem & {
  body: string[] | unknown;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

function fallbackList(): PostListItem[] {
  return fallbackPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    author: p.author,
    publishedAt: p.publishedAt,
    readingMinutes: p.readingMinutes,
  }));
}

export async function getPosts(): Promise<PostListItem[]> {
  if (!sanityClient) return fallbackList();
  try {
    const rows = await sanityClient.fetch<PostListItem[]>(postsQuery);
    if (!rows?.length) return fallbackList();
    return rows;
  } catch {
    return fallbackList();
  }
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  const local = fallbackPosts.find((p) => p.slug === slug);
  if (!sanityClient) {
    if (!local) return null;
    return { ...local, body: local.body };
  }
  try {
    const row = await sanityClient.fetch<PostDetail | null>(postBySlugQuery, {
      slug,
    });
    if (row) return row;
  } catch {
    /* use fallback */
  }
  if (!local) return null;
  return { ...local, body: local.body };
}

export async function getLatestPosts(limit = 3) {
  const posts = await getPosts();
  return posts.slice(0, limit);
}
