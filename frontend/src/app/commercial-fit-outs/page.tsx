import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { serviceJsonLd, jsonLdScript } from '@/lib/structuredData';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects as fallbackProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  path: '/commercial-fit-outs',
  title: 'Commercial Fit-Out Company in Indore | Office & Corporate Interiors',
  description: 'Leading Commercial Fit-Out Company in Indore providing turnkey Commercial Interior Contractors, Office Fit-Out Company services, and Corporate Interior Solutions for dynamic workspaces.',
  socialTitle: 'Turnkey Commercial & Office Fit-Outs',
  socialDescription: 'Bare-shell to handover for corporate offices and co-working hubs — civil, MEP, joinery and furniture under one contract.',
  image: '/imgs/commercial/brandkettle1.jpg',
  imageAlt: 'Completed corporate office reception fit-out by Brand Kettle BuildSpaces',
});

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getCommercialProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.segment === 'commercial');
    const data = await res.json();
    const commercial = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.segment === 'commercial');
    return commercial.length > 0 ? commercial : fallbackProjects.filter((p) => p.segment === 'commercial');
  } catch (error) {
    console.warn(`Failed to fetch commercial projects:`, error);
    return fallbackProjects.filter((p) => p.segment === 'commercial');
  }
}

export default async function CommercialProjectsPage() {
  let commercial = await getCommercialProjects();

  const orderedSlugs = [
    'gucci',
    'taksha-hyderabad',
    'malabar-gold',
    'png',
    'giva',
    'havana-lounge-bareilly',
    'pret-a-manger-delhi',
    'ramada-encore-bareilly',
    'nanokirti-pvt',
    'and-work-faridabad',
  ];

  commercial.sort((a: any, b: any) => {
    const indexA = orderedSlugs.indexOf(a.slug);
    const indexB = orderedSlugs.indexOf(b.slug);
    
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });

  const serviceSchema = serviceJsonLd({
    name: 'Commercial & Office Fit-Outs',
    serviceType: 'Commercial Fit-Outs',
    description: 'Turnkey commercial interior contracting and office fit-outs: civil and structural works, MEP, architectural lighting, factory joinery and furniture, delivered bare-shell to handover under one contract.',
    path: '/commercial-fit-outs',
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <PageHero
        eyebrow="Commercial projects"
        title="Spaces engineered for performance and brand impact"
        subtitle="Our core expertise — office interiors, retail environments, showrooms and turnkey commercial campuses."
        image="/imgs/commercial/Havana lounge1.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Selected work"
            title="Commercial interiors, delivered turnkey"
          />
          <div className="mt-12">
            <ProjectGrid items={commercial} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Start a commercial project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
