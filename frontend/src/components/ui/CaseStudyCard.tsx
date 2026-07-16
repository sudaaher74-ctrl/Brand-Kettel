'use client';

import type { CaseStudy } from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  const imagesArray = project.images || (project as any).gallery || [(project as any).image].filter(Boolean) || [];
  let mainImage = imagesArray[0] || '';

  if (project.slug === 'gucci') mainImage = '/imgs/commercial/gucci-green.png';
  if (project.slug === 'malabar-gold') mainImage = '/imgs/commercial/malabarcoverimg.png';
  if (project.slug === 'png') mainImage = '/imgs/commercial/pnjcoverimg.png';

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full w-full overflow-hidden relative">
      <article className="relative w-full aspect-square bg-surface overflow-hidden">
        
        {/* Background Image */}
        {mainImage && (
          <Image
            src={mainImage}
            alt={`${project.title} — ${project.category}`}
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        
        {/* Dark Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
        
        {/* Text Content (slides up and fades in on hover) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/80 uppercase mb-3">
            {project.category}
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-white">
            {project.title || (project as any).name}
          </h3>
          
          <div className="mt-8 opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0">
            <span className="inline-block border-b border-white/40 pb-1 text-sm text-white hover:border-white transition-colors duration-300">
              Discover Project
            </span>
          </div>
        </div>

      </article>
    </Link>
  );
}
