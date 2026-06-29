import type { Project } from '@/lib/data';
import Reveal from './Reveal';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.slug} index={i % 3} as="div">
          <Link href={`/portfolio/${p.slug}`} className="block h-full group">
            <article className="h-full flex flex-col overflow-hidden rounded-none bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt || `${p.name} — ${p.category}`}
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-xs font-medium text-white/80">{p.category}</p>
                  <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
                </div>
              </div>
            </article>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
