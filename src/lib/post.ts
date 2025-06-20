import { Post } from "@/types/post"

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${slug}`)

    if (!res.ok) {
      throw new Error(`Post not found: ${res.status}`)
    }

    const data = await res.json()
    return data as Post
  } catch (error) {
    console.error(`Failed to fetch post ${slug}:`, error)
    return null
  }
}
