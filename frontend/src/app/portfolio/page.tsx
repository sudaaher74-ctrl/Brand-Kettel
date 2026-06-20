import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FilterableProjectGallery from '@/components/ui/FilterableProjectGallery';
import { caseStudies as fallbackProjects } from '@/lib/projectsData';

export const metadata: Metadata = {
  title: 'Portfolio — Our Work',
  description:
    'Explore our completed projects across retail, commercial and residential interior sectors.',
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <section className="bg-background py-8 sm:py-12">
      <div className="container-px">
        <FilterableProjectGallery projects={projects} />
      </div>
    </section>
  );
}
