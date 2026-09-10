import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { serviceJsonLd, jsonLdScript } from '@/lib/structuredData';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { 
  projects as fallbackProjects,
} from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  path: '/residential-interiors',
  title: 'Residential Interior Designers in Indore | Luxury Home Interiors',
  description: 'Award-winning Residential Interior Designers in Indore specializing in Luxury Home Interiors, Premium Home Interiors, and Turnkey Home Interiors. We craft private homes where comfort and craft converge.',
  socialTitle: 'Luxury Home Interiors, Executed Like a Commercial Project',
  socialDescription: 'A secondary practice for private clients who want the same detailing discipline and timeline certainty we bring to commercial work.',
  image: '/imgs/commercial/experties1.jpeg',
  imageAlt: 'Luxury residential living room interior by Brand Kettle BuildSpaces',
});

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getResidentialProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.segment === 'residential');
    const data = await res.json();
    const residential = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.segment === 'residential');
    return residential.length > 0 ? residential : fallbackProjects.filter((p) => p.segment === 'residential');
  } catch (error) {
    console.warn(`Failed to fetch residential projects:`, error);
    return fallbackProjects.filter((p) => p.segment === 'residential');
  }
}

export default async function ResidentialPage() {
  const residential = await getResidentialProjects();

  const serviceSchema = serviceJsonLd({
    name: 'Luxury Residential Interiors',
    serviceType: 'Residential Interior Design',
    description: 'Turnkey luxury home interiors for private clients, executed with the same detailing discipline, procurement and programme control we apply to commercial projects.',
    path: '/residential-interiors',
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <PageHero
        eyebrow="Residential interiors"
        title="Premium homes, crafted with care"
        subtitle="A refined, secondary practice for private clients who value the same execution discipline we bring to commercial work."
        image="/imgs/commercial/home1.png"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Selected homes" title="Where comfort meets craft" />
          <div className="mt-12">
            <ProjectGrid items={residential} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Plan your home interior
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
