import React from 'react';
import Link from 'next/link';
import ClientIcon from '@/components/client-icon';
import { getPosts, getSuppliers } from '@/sanity/lib/queries';

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

interface Supplier {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  website?: string;
}

// Customizable settings - easily change these
const homePageSettings = {
  // Change this URL to your desired background image
  backgroundImage: "https://images.unsplash.com/photo-1497436072909-f5e4be769fb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80", // Modern office/business background
  
  // Welcome paragraph - customize this text
  welcomeText: "Welcome to BESS, where innovation meets excellence. We're dedicated to delivering cutting-edge solutions that power the future of energy storage and sustainable technology. Our commitment to quality and performance sets us apart as the industry leader.",
  
  // Additional intro text
  introText: "Discover how our best-in-class solutions can transform your energy storage needs and drive your business forward.",
  
  // Call-to-action button text
  ctaText: "Explore Suppliers"
};

export default async function Home() {
  let posts: Post[] = [];
  let suppliers: Supplier[] = [];
  
  try {
    const allPosts = await getPosts();
    // Get only the latest 3 posts
    posts = allPosts.slice(0, 3);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  try {
    suppliers = await getSuppliers();
  } catch (error) {
    console.error('Error fetching suppliers:', error);
  }
  return (
    <>
      {/* Hero Section with Background */}
      <div 
        className="relative -mx-8 -mt-2 md:-mx-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 11, 25, 0.8), rgba(28, 11, 25, 0.6)), url(/LOGO_BB2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          {/* Hero Content */}
          <div className="text-center px-8 max-w-6xl mx-auto relative z-10">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="text-floral_white">BESS</span>
              <span className="text-purple-700">'t</span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-lavender to-floral_white bg-clip-text text-transparent">
                IN CLASS
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-amber-200 mb-12 max-w-3xl mx-auto font-light drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
              A detailed comparison of the top containerised BESS solutions available to the European markets
            </p>
            
            {/* CTA Buttons */}
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
                <a href="#about" className="flex-1">
                  <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                    <span>About</span>
                    <ClientIcon icon="lucide:arrow-down" className="inline-block ml-2" />
                  </button>
                </a>
                <a href="#blog" className="flex-1">
                  <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                    <span>Blog</span>
                    <ClientIcon icon="lucide:arrow-down" className="inline-block ml-2" />
                  </button>
                </a>
                <a href="#suppliers" className="flex-1">
                  <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                    <span>Suppliers</span>
                    <ClientIcon icon="lucide:arrow-down" className="inline-block ml-2" />
                  </button>
                </a>
                <Link href="/contact" className="flex-1">
                  <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                    <span>Contact</span>
                    <ClientIcon icon="lucide:arrow-right" className="inline-block ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-blush opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-16 h-16 bg-lavender opacity-30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-12 h-12 bg-floral_white opacity-25 rounded-full animate-ping"></div>
        </section>
      </div>

      {/* Purple Divider Line */}
      <div className="relative -mx-8 md:-mx-24">
        <div className="h-1 bg-gradient-to-r from-transparent via-dark_purple to-transparent"></div>
      </div>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 -mx-8 -mb-4 md:-mx-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 11, 25, 0.8), rgba(28, 11, 25, 0.6)), url(/LOGO_BB2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>About</h2>
              <p className="text-lg text-amber-200 max-w-3xl mx-auto drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
                Your trusted source for comprehensive containerised battery energy storage system comparisons and insights.
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Two Side-by-Side Information Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Info Section - No Picture */}
                <div className="bg-floral_white rounded-2xl p-8 shadow-lg border border-lavender-300">
                  <h3 className="text-2xl font-bold text-dark_purple mb-4">
                    Our Mission
                  </h3>
                  <p className="text-dark_purple-700 leading-relaxed mb-4">
                    To provide comprehensive, unbiased comparisons of containerised battery energy storage systems across the European market. We analyze technical specifications, performance metrics, and real-world applications to help you make informed decisions.
                  </p>
                  <p className="text-dark_purple-700 leading-relaxed">
                    Our platform serves as a bridge between cutting-edge technology and practical implementation, ensuring you have access to the most relevant and up-to-date information in the rapidly evolving energy storage landscape.
                  </p>
                </div>

                {/* Right Info Section - David Profile with Picture */}
                <div className="bg-floral_white rounded-2xl p-8 shadow-lg border border-lavender-300">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Photo */}
                    <div className="flex justify-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blush shadow-xl">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                          alt="David Guinea"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Bio */}
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-dark_purple mb-2">
                        David Guinea
                      </h3>
                      <p className="text-blush font-semibold mb-4 text-lg">
                        Energy Storage Expert
                      </p>
                      <p className="text-dark_purple-700 leading-relaxed">
                        With over a decade of experience in energy storage systems, I've dedicated my career to advancing battery technology and sustainable energy solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="text-center p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                  <a href="#blog" className="flex-1">
                    <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                      <span>Blog</span>
                      <ClientIcon icon="lucide:arrow-down" className="inline-block" />
                    </button>
                  </a>
                  <Link href="/suppliers" className="flex-1">
                    <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                      <span>Suppliers</span>
                      <ClientIcon icon="lucide:arrow-right" className="inline-block" />
                    </button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                      <span>Contact</span>
                      <ClientIcon icon="lucide:arrow-right" className="inline-block" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Purple Divider Line */}
      <div className="relative -mx-8 md:-mx-24">
        <div className="h-1 bg-gradient-to-r from-transparent via-dark_purple to-transparent"></div>
      </div>

      {/* Blog Section */}
      <section 
        id="blog" 
        className="py-20 -mx-8 -mb-4 md:-mx-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 11, 25, 0.8), rgba(28, 11, 25, 0.6)), url(/LOGO_BB2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>Blog</h2>
            <p className="text-lg text-amber-200 max-w-3xl mx-auto drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
              Latest insights and updates from the world of energy storage systems.
            </p>
          </div>

          {/* Blog Content */}
          <div className="mb-12">
            {posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post._id}
                    className="border-2 border-lavender rounded-lg p-6 bg-floral_white hover:shadow-lg transition-shadow"
                  >
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-blush to-chili_red rounded-lg mb-4 flex items-center justify-center">
                        <ClientIcon icon="lucide:file-text" className="text-white text-4xl" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-dark_purple mb-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-dark_purple-700 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-4">
                        {post.categories.map((category, index) => (
                          <span
                            key={index}
                            className="inline-block bg-blush-200 text-blush text-xs px-2 py-1 rounded-full mr-2"
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
                        className="text-blush hover:text-chili_red font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="border-dashed border-2 border-lavender rounded-lg bg-floral_white bg-opacity-90 p-8">
                  <ClientIcon icon="lucide:file-text" className="text-dark_purple text-6xl mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-dark_purple mb-2">
                    No blog posts yet
                  </h3>
                  <p className="text-dark_purple-700">
                    Latest blog posts will appear here once you add them to your Sanity Studio.
                  </p>
                  <Link href="/blog" className="inline-block mt-4">
                    <button className="bg-blush hover:bg-chili_red text-white font-bold py-2 px-4 rounded transition-colors">
                      Visit Blog Page
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* See Older Posts Button */}
          <div className="text-center mb-12">
            <Link href="/blog" className="text-white hover:text-amber-200 text-lg font-medium underline hover:no-underline transition-all duration-300">
              See Older Posts
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="text-center p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Link href="/suppliers" className="flex-1">
                <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                  <span>Suppliers</span>
                  <ClientIcon icon="lucide:arrow-right" className="inline-block" />
                </button>
              </Link>
              <Link href="/contact" className="flex-1">
                <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                  <span>Contact</span>
                  <ClientIcon icon="lucide:arrow-right" className="inline-block" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Divider Line */}
      <div className="relative -mx-8 md:-mx-24">
        <div className="h-1 bg-gradient-to-r from-transparent via-dark_purple to-transparent"></div>
      </div>

      {/* Suppliers Section */}
      <section 
        id="suppliers" 
        className="py-20 -mx-8 -mb-4 md:-mx-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 11, 25, 0.8), rgba(28, 11, 25, 0.6)), url(/LOGO_BB2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>Suppliers</h2>
            <p className="text-lg text-amber-200 max-w-3xl mx-auto drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
              Explore our comprehensive database of containerised battery energy storage system suppliers.
            </p>
          </div>

          {/* Suppliers Carousel */}
          <div className="mb-12">
            {suppliers.length > 0 ? (
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 pb-4" style={{width: 'max-content'}}>
                  {suppliers.map((supplier) => (
                    <div
                      key={supplier._id}
                      className="border-2 border-lavender rounded-lg p-6 bg-floral_white hover:shadow-lg transition-shadow flex-shrink-0 w-80"
                    >
                      <h3 className="text-xl font-semibold text-dark_purple mb-2">
                        {supplier.name}
                      </h3>
                      {supplier.description && (
                        <p className="text-dark_purple-700 mb-4 line-clamp-3">
                          {supplier.description}
                        </p>
                      )}
                      {supplier.website && (
                        <p className="text-sm text-dark_purple-400 mb-4">
                          {supplier.website}
                        </p>
                      )}
                      <Link
                        href={`/suppliers/${supplier.slug.current}`}
                        className="text-blush hover:text-chili_red font-medium transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="border-dashed border-2 border-lavender rounded-lg bg-floral_white bg-opacity-90 p-8">
                  <ClientIcon icon="lucide:building" className="text-dark_purple text-6xl mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-dark_purple mb-2">
                    No suppliers yet
                  </h3>
                  <p className="text-dark_purple-700">
                    Supplier information will appear here once you add them to your Sanity Studio.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* See All Suppliers Link */}
          <div className="text-center mb-12">
            <Link href="/suppliers" className="text-white hover:text-amber-200 text-lg font-medium underline hover:no-underline transition-all duration-300">
              See All Suppliers
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="text-center p-8">
            <div className="flex justify-center">
              <Link href="/contact" className="flex-1 max-w-xs">
                <button className="w-full bg-blush hover:bg-chili_red text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-between items-center">
                  <span>Contact</span>
                  <ClientIcon icon="lucide:arrow-right" className="inline-block" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
