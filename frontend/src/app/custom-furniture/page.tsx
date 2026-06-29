import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects as fallbackProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Furniture Manufacturer in Indore | Premium Bespoke Furniture',
  description:
    'Top Custom Furniture Manufacturer in Indore offering Bespoke Furniture, Modular Furniture, and Premium Furniture. We are an expert Office Furniture Manufacturer delivering quality craftsmanship.',
  keywords: [
    'Custom Furniture Manufacturer',
    'Bespoke Furniture',
    'Modular Furniture',
    'Premium Furniture',
    'Office Furniture Manufacturer',
    'Furniture Manufacturer in Indore',
  ],
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getFurnitureProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.category.toLowerCase().includes('office') || p.category.toLowerCase().includes('corporate'));
    const data = await res.json();
    const furniture = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.category.toLowerCase().includes('office') || p.category.toLowerCase().includes('corporate'));
    return furniture.length > 0 ? furniture : fallbackProjects.filter((p) => p.category.toLowerCase().includes('office') || p.category.toLowerCase().includes('corporate'));
  } catch {
    return fallbackProjects.filter((p) => p.category.toLowerCase().includes('office') || p.category.toLowerCase().includes('corporate'));
  }
}

export default async function CustomFurniturePage() {
  const furniture = await getFurnitureProjects();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Furniture Manufacturing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Brand Kettle BuildSpaces',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore'
      }
    },
    areaServed: 'Indore',
    description: 'Expert Custom Furniture Manufacturer and Office Furniture Manufacturer in Indore.'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Custom Furniture"
        title="Bespoke & modular craftsmanship"
        subtitle="Premium Furniture and Modular Furniture tailored for your exact commercial and residential needs."
        image="/imgs/commercial/Havana lounge1.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Craftsmanship"
            title="Bespoke furniture solutions"
          />
          <div className="mt-12">
            <ProjectGrid items={furniture} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Enquire about custom furniture
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
