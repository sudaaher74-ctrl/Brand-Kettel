import { notFound } from 'next/navigation';
import Image from 'next/image';
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
    <article className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Side: Information */}
          <div className="flex flex-col">
            <header className="mb-8">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-8">{project.name}</h1>
              <div className="flex flex-col gap-4 text-sm text-white">
                {project.location && <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Location</span><span>{project.location}</span></div>}
                {project.category && <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Category</span><span>{project.category}</span></div>}
                {project.area && <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Area</span><span>{project.area} sq ft</span></div>}
                {project.year && <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Year</span><span>{project.year}</span></div>}
              </div>
            </header>

            {project.blurb && (
              <div className="text-lg text-white leading-relaxed">
                {project.blurb.split('\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Main Image */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] xl:aspect-square relative w-full lg:sticky lg:top-32">
              <Image src={project.image} alt={project.name} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          )}
        </div>

        {/* Downside: All Images */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
            {project.gallery.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] relative">
                <Image src={img} alt={`${project.name} gallery image ${i + 1}`} className="object-cover hover:scale-105 transition-transform duration-500" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        )}

        {/* Consultation Form Section */}
        <div className="max-w-3xl mx-auto bg-surface rounded-3xl p-8 md:p-12 border border-line">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl text-ink mb-4">Inspired by this space?</h2>
            <p className="text-ink-muted">Let&apos;s discuss how we can create something similar for your brand. Fill out the form below and our team will get in touch.</p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </article>
  );
}
