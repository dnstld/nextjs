import { Post } from "@/types/post"

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://dummyjson.com/posts')

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`)
    }

    const data = await res.json()
    return data.posts as Post[]
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}
