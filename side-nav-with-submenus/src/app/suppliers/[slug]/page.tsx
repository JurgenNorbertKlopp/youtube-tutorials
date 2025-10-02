import React from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getSupplier } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';

interface SupplierPageProps {
  params: {
    slug: string;
  };
}

interface Supplier {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  logoUrl?: string;
  imageUrl?: string;
  website?: string;
  industry?: string;
  content?: any;
  founded?: number;
  headquarters?: string;
  featured?: boolean;
}

const SupplierPage = async ({ params }: SupplierPageProps) => {
  const supplier = await getSupplier(params.slug);

  if (!supplier) {
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
          href="/suppliers"
          className="text-blush hover:text-blush-600 transition-colors font-medium"
        >
          ← Back to Suppliers
        </Link>
      </div>

      <article className="max-w-4xl">
        <header className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              {supplier.logoUrl && (
                <img
                  src={supplier.logoUrl}
                  alt={`${supplier.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              )}
              <div>
                <h1 className="font-bold text-4xl text-dark_purple mb-2">
                  {supplier.name}
                </h1>
                {supplier.industry && (
                  <span className="bg-blush-800 text-blush text-sm px-3 py-1 rounded-full">
                    {supplier.industry.replace('-', ' ').toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            
            {supplier.featured && (
              <span className="bg-chili_red-800 text-chili_red text-sm px-3 py-1 rounded-full">
                Featured Supplier
              </span>
            )}
          </div>

          {supplier.description && (
            <div className="mb-6 p-6 bg-lavender-800 rounded-lg border-l-4 border-blush">
              <p className="text-lg text-dark_purple">
                {supplier.description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {supplier.founded && (
              <div className="text-center p-4 bg-floral_white-700 rounded-lg">
                <div className="text-2xl font-bold text-dark_purple">{supplier.founded}</div>
                <div className="text-sm text-dark_purple-300">Founded</div>
              </div>
            )}
            {supplier.headquarters && (
              <div className="text-center p-4 bg-floral_white-700 rounded-lg">
                <div className="text-lg font-semibold text-dark_purple">{supplier.headquarters}</div>
                <div className="text-sm text-dark_purple-300">Headquarters</div>
              </div>
            )}
            {supplier.website && (
              <div className="text-center p-4 bg-floral_white-700 rounded-lg">
                <a
                  href={supplier.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blush hover:text-blush-600 transition-colors font-medium"
                >
                  Visit Website →
                </a>
                <div className="text-sm text-dark_purple-300">Official Site</div>
              </div>
            )}
          </div>
        </header>

        {supplier.imageUrl && (
          <div className="mb-8">
            <img
              src={supplier.imageUrl}
              alt={supplier.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {supplier.content ? (
            <PortableText 
              value={supplier.content} 
              components={portableTextComponents}
            />
          ) : (
            <div className="border-dashed border-2 border-dark_purple-300 w-full h-64 rounded-lg bg-floral_white-700 flex items-center justify-center">
              <p className="text-dark_purple-300">
                Detailed content will appear here when you add it in Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default SupplierPage;