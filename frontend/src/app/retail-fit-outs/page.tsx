import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects as fallbackProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Fit-Out Company in Indore | Retail Store Interior Design',
  description:
    'Brand Kettle BuildSpaces is the premier Retail Fit-Out Company in Indore. We are expert Retail Interior Contractors delivering Turnkey Shop Fit-Outs and Retail Store Interior Design.',
  keywords: [
    'Retail Fit-Out Company',
    'Retail Interior Contractors',
    'Shop Fit-Out Company',
    'Retail Store Interior Design',
    'Retail Fit-Out Company in Indore',
  ],
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getRetailProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.category.toLowerCase().includes('retail') || p.category.toLowerCase().includes('hospitality'));
    const data = await res.json();
    const retail = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.category.toLowerCase().includes('retail') || p.category.toLowerCase().includes('hospitality'));
    return retail.length > 0 ? retail : fallbackProjects.filter((p) => p.category.toLowerCase().includes('retail') || p.category.toLowerCase().includes('hospitality'));
  } catch (error) {
    console.warn(`Failed to fetch retail projects:`, error);
    return fallbackProjects.filter((p) => p.category.toLowerCase().includes('retail') || p.category.toLowerCase().includes('hospitality'));
  }
}

export default async function RetailFitOutsPage() {
  const retail = await getRetailProjects();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Retail Fit-Outs',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Brand Kettle BuildSpaces',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore'
      }
    },
    areaServed: 'Indore',
    description: 'Expert Retail Interior Contractors and Retail Fit-Out Company in Indore.'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Retail Fit-Outs"
        title="Conversion-focused retail experiences"
        subtitle="Elevating your brand at every touchpoint with expert Retail Store Interior Design and Shop Fit-Outs."
        image="/imgs/commercial/p080_111.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Selected retail work"
            title="Retail interiors, delivered turnkey"
          />
          <div className="mt-12">
            <ProjectGrid items={retail} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Start a retail project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
