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
      </div>
    </article>
  );
}
