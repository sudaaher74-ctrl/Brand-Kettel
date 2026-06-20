'use client';

import { useState } from 'react';
import type { CaseStudy } from '@/lib/projectsData';
import Image from 'next/image';

// We reuse group-hover styles from the existing site.
// We display the first image in the card. It's possible to do a carousel,
// but to ensure high performance and consistency, we display a single featured photo 
// and a counter of how many photos there are.

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  // A simple state could be added to flip through photos, but for the gallery overview 
  // keeping it simple is often best for performance.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesArray = project.images || (project as any).gallery || [(project as any).image].filter(Boolean) || [];
  const mainImage = imagesArray[currentImageIndex] || imagesArray[0] || '';
  const hasMultiple = imagesArray.length > 1;

  return (
    <article className="group flex h-full flex-col overflow-hidden bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {mainImage && (
        <Image
          src={mainImage}
          alt={`${project.title} — ${project.category}`}
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        )}
      </div>
    </article>
  );
}
