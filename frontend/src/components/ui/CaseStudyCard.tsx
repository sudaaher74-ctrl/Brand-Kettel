'use client';

import type { CaseStudy } from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { cleanImagePath } from '@/lib/imageUtils';

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  const imagesArray = project.images || (project as any).gallery || [(project as any).image].filter(Boolean) || [];
  let mainImage = cleanImagePath(imagesArray[0] || (project as any).image);

  if (project.slug === 'gucci') mainImage = '/imgs/commercial/gucci-green.png';
  if (project.slug === 'malabar-gold') mainImage = '/imgs/commercial/malabarcoverimg.png';
  if (project.slug === 'png') mainImage = '/imgs/commercial/png1.jpg';
  if (project.slug === 'giva') mainImage = '/imgs/commercial/giva.png';
  if (project.slug === 'taksha-hyderabad') mainImage = '/imgs/commercial/taksha coverimg.png';

  const category = project.category || (project as any).segment || 'Turnkey Fit-Out';
  const location = (project as any).location || '';
  const keyStat = project.keyStat || (project as any).area || '';

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full w-full overflow-hidden relative">
      <article className="relative w-full aspect-[4/3] sm:aspect-square bg-[#121216] rounded-[24px] overflow-hidden border border-white/10 hover:border-[#C5A880]/60 transition-all duration-500 shadow-xl">
        
        {/* Background Image */}
        {mainImage && (
          <Image
            src={mainImage}
            alt={`${project.title} — ${category}`}
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-108"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        
        {/* Static Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-[0.14em] font-medium text-[#C5A880]">
            {category}
          </span>
          {keyStat && (
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/80 font-light">
              {keyStat}
            </span>
          )}
        </div>
        
        {/* Bottom Details Content */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
          {location && (
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-1 font-medium block">
              {location}
            </span>
          )}
          <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors duration-300">
            {project.title || (project as any).name}
          </h3>
          
          <div className="mt-4 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-white/60 font-light max-w-[80%] line-clamp-1">
              {project.description}
            </span>
            <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C5A880] group-hover:text-[#0A0A0B] text-white flex items-center justify-center text-xs transition-all duration-300 shrink-0">
              →
            </span>
          </div>
        </div>

      </article>
    </Link>
  );
}
