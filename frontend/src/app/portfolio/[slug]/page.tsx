import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects as fallbackProjects } from '@/lib/data';
import ConsultationForm from '@/components/forms/ConsultationForm';

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

async function getProject(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      const fallback = fallbackProjects.find(p => p.slug === slug);
      return fallback ? mapToProject(fallback) : null;
    }
    return res.json();
  } catch (error) {
    console.warn(`Failed to fetch project ${slug}:`, error);
    const fallback = fallbackProjects.find(p => p.slug === slug);
    return fallback ? mapToProject(fallback) : null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);
  if (!project) return {};
  
  return {
    title: `${project.name} | Commercial Interior Project`,
    description: project.blurb || `View our complete commercial interior fit-out project for ${project.name} in ${project.location}.`,
    openGraph: {
      images: project.image ? [{ url: project.image }] : [],
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);
  if (!project) notFound();

  return (
    <article className="bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Top Split: Project Info + Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left: Project Story & Specs */}
          <div className="lg:col-span-6 flex flex-col">
            <header className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-2">
                {project.category || 'Turnkey Commercial'}
              </span>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-8">
                {project.name}
              </h1>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-[#121216] border border-white/10">
                {project.location && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block mb-1">Location</span>
                    <span className="text-sm font-medium text-white">{project.location}</span>
                  </div>
                )}
                {project.category && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block mb-1">Sector</span>
                    <span className="text-sm font-medium text-white">{project.category}</span>
                  </div>
                )}
                {project.area && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block mb-1">Scale</span>
                    <span className="text-sm font-medium text-white">{project.area} sq ft</span>
                  </div>
                )}
                {project.year && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block mb-1">Completion</span>
                    <span className="text-sm font-medium text-white">{project.year}</span>
                  </div>
                )}
              </div>
            </header>

            {project.blurb && (
              <div className="text-base sm:text-lg text-[#D4D4D8] font-light leading-relaxed space-y-4">
                {project.blurb.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>

          {/* Right: Sticky Hero Photo Frame */}
          {project.image && (
            <div className="lg:col-span-6 rounded-[24px] overflow-hidden aspect-[4/3] lg:aspect-[4/5] relative w-full border border-white/15 shadow-2xl lg:sticky lg:top-32 bg-[#121216]">
              <Image
                src={project.image}
                alt={project.name}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-24">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium mb-6">
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-[20px] overflow-hidden aspect-[4/3] relative border border-white/10 bg-[#121216] group">
                  <Image
                    src={img}
                    alt={`${project.name} detail view ${i + 1}`}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultation CTA Card in Dark Obsidian */}
        <div className="max-w-4xl mx-auto bg-[#121216] rounded-[28px] p-8 md:p-14 border border-white/15 shadow-2xl">
          <div className="mb-8 text-center max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-2">
              Start Your Vision
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-3">
              Inspired by this space?
            </h2>
            <p className="text-sm text-[#A1A1AA] font-light">
              Discuss your commercial, retail, or workspace requirements with our turnkey interior specialists.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </article>
  );
}
