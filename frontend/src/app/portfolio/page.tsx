import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import FilterableProjectGallery from '@/components/ui/FilterableProjectGallery';
import { caseStudies as fallbackProjects } from '@/lib/projectsData';
import { sanitizeProject } from '@/lib/imageUtils';

export const metadata: Metadata = pageMetadata({
  path: '/portfolio',
  title: 'Portfolio — Turnkey Architectural Realizations',
  description: 'Explore our completed commercial offices, flagship luxury retail, jewellery showrooms and hospitality fit-outs across India.',
  socialTitle: 'Brand Kettle BuildSpaces Portfolio — Delivered Projects',
  socialDescription: 'Gucci, PNG Jewellers, Giva, Ramada Encore, Pret A Manger and more: offices, retail flagships, showrooms and hospitality interiors.',
  image: '/imgs/commercial/taksha-1.webp',
  imageAlt: 'Taksha premium builder floor interior delivered by Brand Kettle BuildSpaces',
});

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
  const rawProjects = await getProjects();
  const projects = rawProjects.map((p: any) => sanitizeProject(p));

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
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Architectural Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>02</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Realizations</span>
            <span className="text-[#18181B]/30">—</span>
            <span>Selected Works</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[54px] md:text-[68px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Spaces Crafted to an <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Exact Standard</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl">
            From flagship luxury retail and prestigious jewellery showrooms to high-performance corporate workspaces across India — executed completely turnkey.
          </p>
        </div>

        {/* Filterable Project Gallery */}
        <FilterableProjectGallery projects={projects} />
      </div>
    </div>
  );
}
