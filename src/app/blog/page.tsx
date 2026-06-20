import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Blog — Insights on Commercial Interior Design',
  description:
    'Insights on commercial interior design, office fit-outs, retail environments and turnkey project delivery from Brand Kettle BuildSpaces.',
};

const posts = [
  {
    title: 'What a turnkey commercial fit-out really includes',
    excerpt: 'From bare shell to move-in ready — the scope, stages and decisions that shape a turnkey project.',
    category: 'Commercial',
    date: 'Jun 2026',
    image: '/imgs/p061_076.jpg',
  },
  {
    title: 'Designing office interiors for hybrid teams',
    excerpt: 'How workplace design is adapting to flexible attendance, focus work and collaboration.',
    category: 'Office',
    date: 'May 2026',
    image: '/imgs/p061_076.jpg',
  },
  {
    title: 'Lighting strategies for jewellery showrooms',
    excerpt: 'Why precision lighting is the single most important decision in showroom design.',
    category: 'Retail',
    date: 'Apr 2026',
    image: '/imgs/p061_076.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the build floor"
        subtitle="Practical thinking on commercial interiors, fit-outs and turnkey delivery."
        image="/imgs/p061_076.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Latest" title="Articles & insights" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} index={i % 3}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
                      <span>{p.category}</span>
                      <span className="text-ink-muted/60">·</span>
                      <span className="text-ink-muted">{p.date}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
