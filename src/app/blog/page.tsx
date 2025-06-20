import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <li className="p-4">
            <h2 className="font-bold">{post.title}</h2>
          </li>
        </Link>
      ))}
    </ul>
  );
}
