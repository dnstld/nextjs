import { getPost } from '@/lib/post';

interface PostProps {
  slug: string;
}

export async function Post({ slug }: PostProps) {
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-600">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      </header>

      <div className="prose prose-lg max-w-none">{post.body}</div>

      {post.tags && post.tags.length > 0 && (
        <footer className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
