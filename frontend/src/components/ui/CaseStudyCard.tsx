'use client';

import type { CaseStudy } from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { cleanImagePath } from '@/lib/imageUtils';

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  const imagesArray = project.images || (project as any).gallery || [(project as any).image].filter(Boolean) || [];
  let mainImage = cleanImagePath(imagesArray[0] || (project as any).image);

  if (project.slug === 'gucci') mainImage = '/imgs/commercial/gucci-green.webp';
  if (project.slug === 'malabar-gold') mainImage = '/imgs/commercial/malabar-gold-cover.webp';
  if (project.slug === 'png') mainImage = '/imgs/commercial/png1.jpg';
  if (project.slug === 'giva') mainImage = '/imgs/commercial/giva.webp';
  if (project.slug === 'taksha-hyderabad') mainImage = '/imgs/commercial/taksha-hyderabad-cover.webp';

  const category = project.category || (project as any).segment || 'Turnkey Fit-Out';
  const location = (project as any).location || '';
  const keyStat = project.keyStat || (project as any).area || '';

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full w-full overflow-hidden relative">
      <article className="relative w-full aspect-[4/3] sm:aspect-square bg-[#F2EDE4] overflow-hidden border border-[#18181B]/15 hover:border-[#18181B]/60 transition-all duration-500 shadow-sm">
        
        {/* Background Image */}
        {mainImage && (
          <Image
            src={mainImage}
            alt={`${project.title} — ${category}`}
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-106"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            priority={index < 2}
          />
        )}
        
        {/* Vignette Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/90 via-[#121214]/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A07A4F]">
            {category}
          </span>
          {keyStat && (
            <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] text-[#18181B] tracking-wider">
              {keyStat}
            </span>
          )}
        </div>
        
        {/* Bottom Details Content */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
          {location && (
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] mb-1 block">
              {location}
            </span>
          )}
          <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#A07A4F] transition-colors duration-300">
            {project.title || (project as any).name}
          </h3>
          
          <div className="mt-3 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-white/70 font-light max-w-[80%] line-clamp-1">
              {project.description}
            </span>
            <span className="w-8 h-8 rounded-full bg-[#FAF8F5] text-[#18181B] group-hover:bg-[#A07A4F] group-hover:text-white flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 shadow-sm">
              →
            </span>
          </div>
        </div>

      </article>
    </Link>
  );
}
