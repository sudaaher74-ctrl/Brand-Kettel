'use client';

import { useState } from 'react';
import type { CaseStudy } from '@/lib/projectsData';

// We reuse group-hover styles from the existing site.
// We display the first image in the card. It's possible to do a carousel,
// but to ensure high performance and consistency, we display a single featured photo 
// and a counter of how many photos there are.

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  // A simple state could be added to flip through photos, but for the gallery overview 
  // keeping it simple is often best for performance.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mainImage = project.images[currentImageIndex] || project.images[0];
  const hasMultiple = project.images.length > 1;

  return (
    <article className="group flex h-full flex-col overflow-hidden bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={mainImage}
          alt={`${project.title} — ${project.category}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
        
        {/* Category Label */}
        <span className="absolute left-4 top-4 rounded-sm bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          {project.category}
        </span>
        
        {/* Photo Count or Navigation */}
        {hasMultiple && (
          <div className="absolute bottom-4 right-4 flex space-x-1">
            <span className="rounded-sm bg-black/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              {project.images.length} Photos
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
        {project.location && (
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-muted flex items-center">
             <span className="mr-1 opacity-70">📍</span> {project.location}
          </p>
        )}
        <p className="mt-3 text-sm text-ink/80 flex-1 line-clamp-3">
          {project.description}
        </p>

        {project.keyStat && (
          <div className="mt-5 border-t border-line pt-4">
            <p className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent"></span>
              {project.keyStat}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
