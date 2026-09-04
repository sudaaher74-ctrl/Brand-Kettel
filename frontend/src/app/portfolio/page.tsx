import type { Metadata } from 'next';
import FilterableProjectGallery from '@/components/ui/FilterableProjectGallery';
import { caseStudies as fallbackProjects } from '@/lib/projectsData';

export const metadata: Metadata = {
  title: 'Portfolio — Turnkey Architectural Realizations',
  description:
    'Explore our completed commercial offices, flagship luxury retail, jewellery showrooms and hospitality fit-outs across India.',
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackProjects;
  } catch (error) {
    console.warn(`Failed to fetch portfolio projects:`, error);
    return fallbackProjects;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  const orderedSlugs = ['gucci', 'taksha-hyderabad', 'png', 'giva', 'ramada-encore-bareilly'];
  projects.sort((a: any, b: any) => {
    const indexA = orderedSlugs.indexOf(a.slug);
    const indexB = orderedSlugs.indexOf(b.slug);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });

  return (
    <div className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Architectural Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>Selected Realizations</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
            Spaces That Define <br />
            <span className="font-serif italic font-normal text-[#C5A880]">Excellence</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl mx-auto">
            From flagship retail and prestigious jewellery showrooms to high-performance corporate workspaces across India — executed completely turnkey.
          </p>
        </div>

        {/* Filterable Project Gallery */}
        <FilterableProjectGallery projects={projects} />
      </div>
    </div>
  );
}
