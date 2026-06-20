import type { Project } from '@/lib/data';
import Reveal from './Reveal';
import Image from 'next/image';

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.slug} index={i % 3} as="div">
          <article className="group h-full overflow-hidden rounded-none bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={p.image}
                alt={`${p.name} — ${p.category}`}
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
