import type { Project } from '@/lib/data';
import Reveal from './Reveal';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGrid({ items }: { items: Project[] | null }) {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
      {items.map((p, i) => {
        let displayImage = p.image;
        if (p.slug === 'gucci') displayImage = '/imgs/commercial/guccicoverimg.png';
        if (p.slug === 'malabar-gold') displayImage = '/imgs/commercial/malabarcoverimg.png';
        if (p.slug === 'png') displayImage = '/imgs/commercial/pnjcoverimg.png';

        return (
          <Reveal key={p.slug} index={i % 2} as="div">
            <Link href={`/portfolio/${p.slug}`} className="group block h-full">
              <article className="flex h-full flex-col">
              {/* Large Portrait Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <Image
                  src={displayImage}
                  alt={p.alt || `${p.name} — ${p.category}`}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              
              {/* Title and Category Below the Image */}
              <div className="mt-5 flex flex-col items-start gap-1">
                <h3 className="text-xl font-light tracking-wide text-ink group-hover:text-accent transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-sm font-light text-ink-muted">
                  {p.category}
                </p>
              </div>
              </article>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
