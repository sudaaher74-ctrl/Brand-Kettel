import type { Project } from '@/lib/data';
import Reveal from './Reveal';

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.slug} index={i % 3} as="div">
          <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={`${p.name} — ${p.category}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                {p.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{p.blurb}</p>
              <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center">
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-ink-muted">Location</dt>
                  <dd className="text-xs font-semibold text-ink">{p.location}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-ink-muted">Area</dt>
                  <dd className="text-xs font-semibold text-ink">{p.area}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-ink-muted">Year</dt>
                  <dd className="text-xs font-semibold text-ink">{p.year}</dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
