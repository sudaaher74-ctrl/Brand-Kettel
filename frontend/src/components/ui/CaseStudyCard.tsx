'use client';

import type { CaseStudy } from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  const imagesArray = project.images || (project as any).gallery || [(project as any).image].filter(Boolean) || [];
  const mainImage = imagesArray[0] || '';

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col">
        {/* Large Portrait Image Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
          {mainImage && (
            <Image
              src={mainImage}
              alt={`${project.title} — ${project.category}`}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          )}
        </div>
        
        {/* Title and Category Below the Image */}
        <div className="mt-5 flex flex-col items-start gap-1">
          <h3 className="text-xl font-light tracking-wide text-ink group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm font-light text-ink-muted">
            {project.category}
          </p>
        </div>
      </article>
    </Link>
  );
}
