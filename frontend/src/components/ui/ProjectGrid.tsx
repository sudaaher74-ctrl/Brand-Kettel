import type { Project } from '@/lib/data';
import Reveal from './Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { cleanImagePath } from '@/lib/imageUtils';

export default function ProjectGrid({ items }: { items: Project[] | null }) {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
      {items.map((p, i) => {
        let displayImage = cleanImagePath(p.image);
        if (p.slug === 'gucci') displayImage = '/imgs/commercial/gucci-green.webp';
        if (p.slug === 'malabar-gold') displayImage = '/imgs/commercial/malabar-gold-cover.webp';
        if (p.slug === 'png') displayImage = '/imgs/commercial/png1.jpg';

        return (
          <Reveal key={p.slug} index={i % 2} as="div">
            <Link href={`/portfolio/${p.slug}`} className="group block h-full">
              <article className="relative w-full aspect-[4/3] sm:aspect-square bg-[#F2EDE4] overflow-hidden border border-[#18181B]/15 hover:border-[#18181B]/60 transition-all duration-500 shadow-sm">
                {/* Image */}
                <Image
                  src={displayImage}
                  alt={p.alt || `${p.name} — ${p.category}`}
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-106"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Dark Vignette Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/90 via-[#121214]/30 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A07A4F]">
                    {p.category}
                  </span>
                  {p.area && (
                    <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] text-[#18181B] tracking-wider">
                      {p.area} sq ft
                    </span>
                  )}
                </div>

                {/* Bottom Details Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  {p.location && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] mb-1 block">
                      {p.location}
                    </span>
                  )}
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#A07A4F] transition-colors duration-300">
                    {p.name}
                  </h3>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-white/70 font-light">
                      View Turnkey Case Study
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#FAF8F5] text-[#18181B] group-hover:bg-[#A07A4F] group-hover:text-white flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 shadow-sm">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
