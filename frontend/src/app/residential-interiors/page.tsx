import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { 
  projects as fallbackProjects,
} from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Interiors — Premium Homes & Villas',
  description:
    'Bespoke residential interiors delivered end-to-end. We craft private homes where comfort, craft and detail converge.',
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getResidentialProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.segment === 'residential');
    const data = await res.json();
    const residential = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.segment === 'residential');
    return residential.length > 0 ? residential : fallbackProjects.filter((p) => p.segment === 'residential');
  } catch {
    return fallbackProjects.filter((p) => p.segment === 'residential');
  }
}

export default async function ResidentialPage() {
  const residential = await getResidentialProjects();

  return (
    <>
      <PageHero
        eyebrow="Residential interiors"
        title="Premium homes, crafted with care"
        subtitle="A refined, secondary practice for private clients who value the same execution discipline we bring to commercial work."
        image="/imgs/residential/p076_107.jpg"
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
