import React from 'react';
import Link from 'next/link';
import { getSuppliers } from '@/sanity/lib/queries';

interface Supplier {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  logoUrl?: string;
  imageUrl?: string;
  industry?: string;
  website?: string;
  featured?: boolean;
}

const SuppliersPage = async () => {
  let suppliers: Supplier[] = [];
  
  try {
    suppliers = await getSuppliers();
  } catch (error) {
    console.error('Error fetching suppliers:', error);
  }

  return (
    <>
      <span className="font-bold text-4xl text-dark_purple">Suppliers</span>

      {suppliers.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {suppliers.map((supplier) => (
            <div
              key={supplier._id}
              className="border-2 border-dark_purple-300 rounded-lg p-6 bg-floral_white-700 hover:shadow-lg transition-shadow"
            >
              {supplier.logoUrl && (
                <img
                  src={supplier.logoUrl}
                  alt={`${supplier.name} logo`}
                  className="w-16 h-16 object-contain mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-dark_purple mb-2">
                {supplier.name}
              </h2>
              {supplier.description && (
                <p className="text-dark_purple-300 mb-4 line-clamp-3">
                  {supplier.description}
                </p>
              )}
              <Link
                href={`/suppliers/${supplier.slug.current}`}
                className="text-blush hover:text-blush-600 font-medium transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="border-dashed border-2 border-dark_purple-300 w-full h-64 rounded-lg bg-floral_white-700 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-dark_purple mb-2">
                No suppliers yet
              </h3>
              <p className="text-dark_purple-300 mb-4">
                Supplier information will appear here once you add them to your Sanity Studio.
              </p>
              <div className="space-y-2">
                <Link
                  href="/suppliers/sungrow"
                  className="block text-blush hover:text-blush-600 transition-colors"
                >
                  View Sungrow →
                </Link>
                <Link
                  href="/suppliers/tesla"
                  className="block text-blush hover:text-blush-600 transition-colors"
                >
                  View Tesla →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuppliersPage;
