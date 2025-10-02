import { client } from '@/sanity/lib/client';

// Helper function to fetch all posts
export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "imageUrl": mainImage.asset->url,
      author->{
        name,
        "imageUrl": image.asset->url
      },
      categories[]->{
        title
      }
    }
  `);
}

// Helper function to fetch a single post by slug
export async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "imageUrl": mainImage.asset->url,
      author->{
        name,
        "imageUrl": image.asset->url
      },
      categories[]->{
        title
      }
    }
  `, { slug });
}

// Helper function to fetch all suppliers
export async function getSuppliers() {
  return client.fetch(`*[_type == "supplier"] | order(name asc) {
    _id,
    _type,
    description,
    name,
    slug,
    website
  }`);
}

// Helper function to fetch a single supplier by slug
export async function getSupplier(slug: string) {
  return client.fetch(`
    *[_type == "supplier" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      website,
      content,
      "logoUrl": logo.asset->url,
      "imageUrl": mainImage.asset->url
    }
  `, { slug });
}