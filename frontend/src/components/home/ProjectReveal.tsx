'use client';

import type { Project } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectReveal({ projects }: { projects: Project[] }) {
  // We take the first 6 projects to match the 3x2 grid of PalmLiving
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What we build"
          title="Projects Portfolio"
          subtitle="From corporate headquarters to retail flagships — explore the spaces we design, build and furnish."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, i) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="block h-full group">
              <div className="relative aspect-square overflow-hidden bg-card shadow-sm">
                <Image
                  src={project.image}
                  alt={project.alt || `${project.name} Project`}
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium text-white/80 uppercase tracking-widest mb-1">{project.category}</p>
                  <h3 className="font-display text-lg font-light text-white">{project.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
