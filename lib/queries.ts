export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "category": category->title,
  "author": author->name,
  "cover": cover.asset->url,
  seoTitle,
  seoDescription
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  body,
  "category": category->title,
  "author": author->name,
  "cover": cover.asset->url,
  seoTitle,
  seoDescription
}`;
