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
        if (p.slug === 'gucci') displayImage = '/imgs/commercial/gucci-green.png';
        if (p.slug === 'malabar-gold') displayImage = '/imgs/commercial/malabarcoverimg.png';
        if (p.slug === 'png') displayImage = '/imgs/commercial/png1.jpg';

        return (
          <Reveal key={p.slug} index={i % 2} as="div">
            <Link href={`/portfolio/${p.slug}`} className="group block h-full">
              <article className="relative w-full aspect-[4/3] sm:aspect-square bg-[#121216] rounded-[24px] overflow-hidden border border-white/10 hover:border-[#C5A880]/60 transition-all duration-500 shadow-xl">
                {/* Image */}
                <Image
                  src={displayImage}
                  alt={p.alt || `${p.name} — ${p.category}`}
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-108"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.14em] font-medium text-[#C5A880]">
                    {p.category}
                  </span>
                  {p.area && (
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/80 font-light">
                      {p.area} sq ft
                    </span>
                  )}
                </div>

                {/* Bottom Details Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  {p.location && (
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-1 font-medium block">
                      {p.location}
                    </span>
                  )}
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors duration-300">
                    {p.name}
                  </h3>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-white/60 font-light">
                      View Turnkey Case Study
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C5A880] group-hover:text-[#0A0A0B] text-white flex items-center justify-center text-xs transition-all duration-300 shrink-0">
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
