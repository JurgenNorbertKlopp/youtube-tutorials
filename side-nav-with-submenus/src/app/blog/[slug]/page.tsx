import React from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getPost } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  imageUrl?: string;
  body?: any;
  author?: {
    name: string;
    imageUrl?: string;
  };
  categories?: Array<{
    title: string;
  }>;
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const portableTextComponents = {
    block: {
      normal: ({ children }: any) => (
        <p className="mb-4 text-dark_purple leading-relaxed">{children}</p>
      ),
      h1: ({ children }: any) => (
        <h1 className="text-3xl font-bold text-dark_purple mb-6">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-semibold text-dark_purple mb-4">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-semibold text-dark_purple mb-3">{children}</h3>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside mb-4 text-dark_purple">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside mb-4 text-dark_purple">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
      number: ({ children }: any) => <li className="mb-1">{children}</li>,
    },
  };

  return (
    <>
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-blush hover:text-blush-600 transition-colors font-medium"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl">
        <header className="mb-8">
          <h1 className="font-bold text-4xl text-dark_purple mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {post.author?.imageUrl && (
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                {post.author?.name && (
                  <p className="font-medium text-dark_purple">{post.author.name}</p>
                )}
                {post.publishedAt && (
                  <time className="text-dark_purple-400 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
              </div>
            </div>
            
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category: { title: string }, index: number) => (
                  <span
                    key={index}
                    className="bg-blush-800 text-blush text-sm px-3 py-1 rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {post.imageUrl && (
          <div className="mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {post.excerpt && (
          <div className="mb-8 p-6 bg-lavender-800 rounded-lg border-l-4 border-blush">
            <p className="text-lg text-dark_purple italic">
              {post.excerpt}
            </p>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.body ? (
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          ) : (
            <div className="border-dashed border-2 border-dark_purple-300 w-full h-64 rounded-lg bg-floral_white-700 flex items-center justify-center">
              <p className="text-dark_purple-300">
                Content will appear here when you add it in Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPost;