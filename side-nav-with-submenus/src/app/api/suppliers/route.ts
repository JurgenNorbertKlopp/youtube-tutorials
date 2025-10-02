import { NextResponse } from 'next/server';
import { getSuppliers } from '@/sanity/lib/queries';

export async function GET() {
  try {
    const suppliers = await getSuppliers();
    console.log('API route - fetched suppliers:', suppliers.length, 'suppliers');
    console.log('API route - suppliers data:', JSON.stringify(suppliers, null, 2));
    
    // Also fetch raw supplier data to see if there are any filtering issues
    const { client } = await import('@/sanity/lib/client');
    const rawSuppliers = await client.fetch(`*[_type == "supplier"]`);
    console.log('API route - raw suppliers count:', rawSuppliers.length);
    console.log('API route - raw suppliers:', JSON.stringify(rawSuppliers, null, 2));
    
    return NextResponse.json(suppliers);
  } catch (error) {
    console.error('Error fetching suppliers:', error);
    return NextResponse.json([], { status: 500 });
  }
}