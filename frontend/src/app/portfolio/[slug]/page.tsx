import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

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

async function getProject(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(`http://localhost:3001/api/admin/projects/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
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
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-slate-900 mb-6">{project.name}</h1>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            {project.location && <div><span className="font-bold block text-slate-900">Location</span>{project.location}</div>}
            {project.category && <div><span className="font-bold block text-slate-900">Category</span>{project.category}</div>}
            {project.area && <div><span className="font-bold block text-slate-900">Area</span>{project.area} sq ft</div>}
            {project.year && <div><span className="font-bold block text-slate-900">Year</span>{project.year}</div>}
          </div>
        </header>

        {project.image && (
          <div className="mb-16 rounded-2xl overflow-hidden aspect-video relative">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </div>
        )}

        {project.blurb && (
          <div className="max-w-3xl mb-16 text-lg text-slate-700 leading-relaxed">
            {project.blurb.split('\n').map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-video">
                <img src={img} alt={`${project.name} gallery image ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
