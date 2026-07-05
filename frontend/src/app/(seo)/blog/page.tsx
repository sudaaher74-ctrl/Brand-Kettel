import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog — Insights on Commercial Interior Design',
  description:
    'Insights on commercial interior design, office fit-outs, retail environments and turnkey project delivery from Brand Kettle BuildSpaces.',
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  coverImage: string;
  published: boolean;
  publishedAt: string;
  createdAt: string;
};

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_URL}/api/admin/blog`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((p: BlogPost) => p.published)
      .sort((a: BlogPost, b: BlogPost) =>
        new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime()
      );
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

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

          {posts.length === 0 ? (
            <Reveal>
              <div className="mt-12 text-center py-20 border border-line rounded-xl bg-card">
                <p className="text-ink-muted text-lg">No blog posts yet.</p>
                <p className="text-ink-muted text-sm mt-2">Check back soon for design insights and project stories.</p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.id || p.slug} index={i % 3}>
                  <Link href={`/blog/${p.slug}`} className="group block h-full overflow-hidden rounded-3xl bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.coverImage || p.image || '/imgs/commercial/p073_101.jpg'}
                        alt={p.imageAlt || p.title}
                        className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
                        {p.category && <span>{p.category}</span>}
                        {p.category && <span className="text-ink-muted/60">·</span>}
                        <span className="text-ink-muted">
                          {new Date(p.publishedAt || p.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-accent transition-colors">{p.title}</h3>
                      {p.excerpt && (
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">{p.excerpt}</p>
                      )}
                      <span className="mt-4 inline-flex items-center gap-2 text-nav text-accent">
                        Read more
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

