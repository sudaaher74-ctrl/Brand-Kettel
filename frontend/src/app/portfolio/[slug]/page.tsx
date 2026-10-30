import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/structuredData';
import { projects as fallbackProjects } from '@/lib/data';
import ConsultationForm from '@/components/forms/ConsultationForm';
import ProjectDetailMedia from '@/components/ui/ProjectDetailMedia';
import { sanitizeProject } from '@/lib/imageUtils';

type Project = {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: string;
  area: string;
  year: string;
  segment: string;
  image: string;
  gallery: string[];
  blurb: string;
};

function mapToProject(p: typeof fallbackProjects[0]): Project {
  return {
    id: p.slug,
    slug: p.slug,
    name: p.name,
    location: p.location || '',
    category: p.category || '',
    area: p.area || '',
    year: p.year || '',
    segment: p.segment || '',
    image: p.image || '',
    gallery: p.gallery || [],
    blurb: p.blurb || ''
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export function generateStaticParams() {
  return fallbackProjects.map((p) => ({ slug: p.slug }));
}

async function getProject(slug: string): Promise<Project | null> {
  let project: Project | null = null;
  try {
    const res = await fetch(`${API_URL}/api/admin/projects/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      const fallback = fallbackProjects.find(p => p.slug === slug);
      project = fallback ? mapToProject(fallback) : null;
    } else {
      project = await res.json();
    }
  } catch (error) {
    console.warn(`Failed to fetch project ${slug}:`, error);
    const fallback = fallbackProjects.find(p => p.slug === slug);
    project = fallback ? mapToProject(fallback) : null;
  }
  return project ? sanitizeProject(project) : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);
  if (!project) return {};
  
  const where = project.location ? ` in ${project.location}` : '';
  const description =
    project.blurb ||
    `View our complete commercial interior fit-out project for ${project.name}${where}.`;
  const social = `${project.name}${where} — ${project.category || 'Turnkey Fit-Out'} by Brand Kettle`;
  const image = project.image || '/imgs/commercial/gucci.webp';

  return pageMetadata({
    path: `/portfolio/${project.slug}`,
    title: `${project.name} | Commercial Interior Project`,
    description,
    socialTitle: social,
    socialDescription: description,
    image,
    imageAlt: `${project.name}${where} — interior fit-out delivered by Brand Kettle BuildSpaces`,
    type: 'article',
  });
}

function getCityLink(loc?: string): { name: string; href: string } | null {
  if (!loc) return null;
  const l = loc.toLowerCase();
  if (l.includes('mumbai') || l.includes('goregaon')) return { name: 'Mumbai Commercial Hub', href: '/locations/mumbai' };
  if (l.includes('delhi') || l.includes('faridabad')) return { name: 'Delhi NCR Commercial Hub', href: '/locations/delhi-ncr' };
  if (l.includes('bareilly')) return { name: 'Bareilly Regional Hub', href: '/locations/bareilly' };
  if (l.includes('hyderabad')) return { name: 'Hyderabad Commercial Hub', href: '/locations/hyderabad' };
  if (l.includes('indore')) return { name: 'Indore Direct Factory & HQ', href: '/locations/indore' };
  return null;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);
  if (!project) notFound();

  const cityLink = getCityLink(project.location);

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: project.name, path: `/portfolio/${project.slug}` },
  ]);

  return (
    <article className="bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#A07A4F] hover:text-[#18181B] transition-colors"
          >
            ← Back to Realizations
          </Link>
        </div>

        {/* Interactive Media Section (Story, Specs, Sticky Hero, and Gallery Grid with Lightbox) */}
        <ProjectDetailMedia
          projectName={project.name}
          heroImage={project.image}
          gallery={project.gallery || []}
        >
          <header className="mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
              {project.category || 'Turnkey Commercial'}
            </span>
            <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#18181B] uppercase tracking-tight mb-8">
              {project.name}
            </h1>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-[#F2EDE4] border border-[#18181B]/15">
              {project.location && (
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#71717A] block mb-1">Location</span>
                  {cityLink ? (
                    <Link href={cityLink.href} className="text-sm font-medium text-[#18181B] hover:text-[#A07A4F] underline underline-offset-4">
                      {project.location} ({cityLink.name} →)
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-[#18181B]">{project.location}</span>
                  )}
                </div>
              )}
              {project.category && (
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#71717A] block mb-1">Sector</span>
                  <span className="text-sm font-medium text-[#18181B]">{project.category}</span>
                </div>
              )}
              {project.area && (
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#71717A] block mb-1">Scale</span>
                  <span className="text-sm font-medium text-[#18181B]">{project.area.includes('sq') ? project.area : `${project.area} sq ft`}</span>
                </div>
              )}
              {project.year && (
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#71717A] block mb-1">Completion</span>
                  <span className="text-sm font-medium text-[#18181B]">{project.year}</span>
                </div>
              )}
            </div>
          </header>

          {project.blurb && (
            <div className="text-base sm:text-lg text-[#18181B]/80 font-light leading-relaxed space-y-6">
              {project.blurb.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="pt-6 border-t border-[#18181B]/10 space-y-4">
                <h3 className="font-display font-medium text-xl text-[#18181B] uppercase">Turnkey Execution &amp; Scope Summary</h3>
                <p className="text-sm text-[#71717A] font-light leading-relaxed">
                  Brand Kettle BuildSpaces acted as the turnkey design-build and interior contracting partner for {project.name}. Our scope encompassed civil modifications, MEP integration, specialized architectural lighting, and precision millwork prefabricated concurrently in our Central India manufacturing facility to ensure exact handover on schedule.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-[#EFE9DF] text-xs font-mono uppercase tracking-wider text-[#18181B]">Turnkey Fit-Out</span>
                  <span className="px-3 py-1 bg-[#EFE9DF] text-xs font-mono uppercase tracking-wider text-[#18181B]">In-House Joinery</span>
                  <span className="px-3 py-1 bg-[#EFE9DF] text-xs font-mono uppercase tracking-wider text-[#18181B]">MEP Engineering</span>
                  <span className="px-3 py-1 bg-[#EFE9DF] text-xs font-mono uppercase tracking-wider text-[#18181B]">Milestone Guarantee</span>
                </div>
              </div>
            </div>
          )}
        </ProjectDetailMedia>

        {/* Consultation CTA Card in Deep Charcoal (Home Page Contrast Banner) */}
        <div className="max-w-4xl mx-auto bg-[#121214] text-white p-8 md:p-14 border border-[#18181B]/20 shadow-2xl mt-20">
          <div className="mb-8 text-center max-w-xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-2">
              Start Your Vision
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-3">
              Inspired by this space?
            </h2>
            <p className="text-sm text-white/70 font-light">
              Discuss your commercial, retail, or workspace requirements with our turnkey interior specialists.
            </p>
          </div>
          <ConsultationForm theme="gold" />
        </div>
      </div>
    </article>
  );
}
