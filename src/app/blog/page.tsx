import { getPosts } from '@/lib/posts';
import { getRandom } from '@/lib/random';
import { RevalidateButton } from '@/ui/RevalidateButton';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPosts();
  const random = await getRandom();

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">revalidate</h1>
        <h1>{random.message}</h1>
        <span>{random.timestamp}</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">revalidateTag</h1>
        <h1>{random.message}</h1>
        <span>{random.timestamp}</span>

        <RevalidateButton />
      </div>
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
