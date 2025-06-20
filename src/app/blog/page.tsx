import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="p-4">
          <Link href={`/blog/${post.id}`}>
            <h2 className="font-bold hover:underline">{post.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
