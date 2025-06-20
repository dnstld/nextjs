import { Post } from '@/ui/Post';
import { Suspense } from 'react';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      <Suspense
        fallback={<h1 className="text-3xl font-bold mb-4">Loading post...</h1>}
      >
        <Post slug={slug} />
      </Suspense>
    </div>
  );
}
