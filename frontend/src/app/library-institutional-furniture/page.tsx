import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects as fallbackProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Library Furniture Manufacturer | Educational & Institutional Furniture',
  description:
    'Brand Kettle BuildSpaces is a leading Library Furniture Manufacturer. We provide high-quality Educational Furniture, School & College Furniture, and Institutional Furniture.',
  keywords: [
    'Library Furniture Manufacturer',
    'Educational Furniture',
    'School & College Furniture',
    'Institutional Furniture',
  ],
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getInstitutionalProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.category.toLowerCase().includes('government') || p.category.toLowerCase().includes('institutional'));
    const data = await res.json();
    const inst = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.category.toLowerCase().includes('government') || p.category.toLowerCase().includes('institutional'));
    return inst.length > 0 ? inst : fallbackProjects.filter((p) => p.category.toLowerCase().includes('government') || p.category.toLowerCase().includes('institutional'));
  } catch {
    return fallbackProjects.filter((p) => p.category.toLowerCase().includes('government') || p.category.toLowerCase().includes('institutional'));
  }
}

export default async function LibraryInstitutionalFurniturePage() {
  const instProjects = await getInstitutionalProjects();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Institutional Furniture Manufacturing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Brand Kettle BuildSpaces'
    },
    description: 'Specialized Library Furniture Manufacturer providing Educational Furniture and School & College Furniture.'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Institutional Furniture"
        title="Durable educational & institutional solutions"
        subtitle="Expertly crafted Library Furniture, School & College Furniture built for longevity."
        image="/imgs/commercial/GEM jeevan tara.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Institutional Work"
            title="Projects for government & education"
          />
          <div className="mt-12">
            <ProjectGrid items={instProjects} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Discuss your institutional needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
