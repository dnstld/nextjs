import { getPosts } from '@/lib/posts';
import { getRandom } from '@/lib/random';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPosts();
  const random = await getRandom();

  return (
    <section>
      <h1>{random.message}</h1>
      <span>{random.timestamp}</span>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="p-4">
            <Link href={`/blog/${post.id}`}>
              <h2 className="font-bold hover:underline">{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
