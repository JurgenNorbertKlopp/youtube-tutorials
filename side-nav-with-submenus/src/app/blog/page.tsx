import React from 'react';
import Link from 'next/link';
import { getPosts } from '@/sanity/lib/queries';

// Force revalidation in development
export const revalidate = 0;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  imageUrl?: string;
  author?: {
    name: string;
    imageUrl?: string;
  };
  categories?: Array<{
    title: string;
  }>;
}

const BlogPage = async () => {
  let posts: Post[] = [];
  
  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return (
    <>
      <span className="font-bold text-4xl text-dark_purple">Blog</span>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="border-2 border-dark_purple-300 rounded-lg p-6 bg-floral_white-700 hover:shadow-lg transition-shadow"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-dark_purple mb-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-dark_purple-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              
              {post.categories && post.categories.length > 0 && (
                <div className="mb-4">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blush-800 text-blush text-xs px-2 py-1 rounded-full mr-2"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {post.author?.imageUrl && (
                    <img
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  )}
                  <div className="text-sm">
                    {post.author?.name && (
                      <span className="text-dark_purple-300">{post.author.name} • </span>
                    )}
                    <span className="text-dark_purple-400">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="text-blush hover:text-blush-600 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="border-dashed border-2 border-dark_purple-300 w-full h-64 rounded-lg bg-floral_white-700 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-dark_purple mb-2">
                No blog posts yet
              </h3>
              <p className="text-dark_purple-300">
                Posts will appear here once you add them to your Sanity Studio.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
