import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects as fallbackProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Projects — Office, Retail & Turnkey Fit-Outs',
  description:
    'Explore commercial interior projects by Brand Kettle BuildSpaces: corporate office interiors, retail fit-outs, jewellery showrooms and turnkey commercial spaces.',
  keywords: [
    'Commercial Interior Design',
    'Corporate Office Interiors',
    'Retail Interior Design',
    'Commercial Fit-Out Company',
    'Turnkey Interior Solutions',
  ],
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getCommercialProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.segment === 'commercial');
    const data = await res.json();
    const commercial = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.segment === 'commercial');
    return commercial.length > 0 ? commercial : fallbackProjects.filter((p) => p.segment === 'commercial');
  } catch {
    return fallbackProjects.filter((p) => p.segment === 'commercial');
  }
}

export default async function CommercialProjectsPage() {
  const commercial = await getCommercialProjects();

  return (
    <>
      <PageHero
        eyebrow="Commercial projects"
        title="Spaces engineered for performance and brand impact"
        subtitle="Our core expertise — office interiors, retail environments, showrooms and turnkey commercial campuses."
        image="/imgs/commercial/p071_096.jpg"
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
