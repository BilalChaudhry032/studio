import { HomePage } from "@/components/home-page";
import { getLatestPosts } from "@/lib/posts";

export const revalidate = 60;

export default async function Page() {
  const posts = await getLatestPosts(3);
  return <HomePage posts={posts} />;
}
