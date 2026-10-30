import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_ARTICLES } from '@/lib/blogData';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/structuredData';

export const metadata: Metadata = pageMetadata({
  path: '/blog',
  title: 'Commercial Interior Insights, Costs & Guides — Brand Kettle',
  description: 'Practical guides, cost breakdowns, and technical insights on commercial fit-outs, jewellery showroom lighting, and fast-track turnkey execution from Brand Kettle BuildSpaces.',
  socialTitle: 'Commercial Interior Insights & Engineering Guides — Brand Kettle',
  socialDescription: 'Project breakdowns, material notes and delivery lessons from live turnkey fit-outs across India.',
  image: '/imgs/commercial/experties2.jpeg',
  imageAlt: 'Commercial interior detail from a Brand Kettle BuildSpaces project',
});

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  readTime: string;
  publishedAt: string;
};

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_URL}/api/admin/blog`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackList();
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return fallbackList();
    const dynamic = data.filter((p: any) => p.published).map((p: any) => ({
      id: p.id || p.slug,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt || '',
      category: p.category || 'Insights',
      coverImage: p.coverImage || p.image || '/imgs/commercial/experties2.jpeg',
      readTime: '6 min read',
      publishedAt: p.publishedAt || p.createdAt || '2026-09-01',
    }));
    return [...dynamic, ...fallbackList()];
  } catch {
    return fallbackList();
  }
}

function fallbackList(): BlogPost[] {
  return BLOG_ARTICLES.map((a) => ({
    id: a.slug,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    coverImage: a.coverImage,
    readTime: a.readTime,
    publishedAt: a.publishedAt,
  }));
}

export default async function BlogPage() {
  const posts = await getPosts();

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]);

  const categories = [
    'All Insights',
    'Costs & Budgeting',
    'Technical & Engineering',
    'Execution & Timelines',
    'Design & Trends',
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Commercial Knowledge Base</span>
            <span className="text-[#18181B]/30">·</span>
            <span>30 Comprehensive Guides</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Insights From <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">The Build Floor</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl mx-auto">
            Practical thinking on commercial interiors, corporate fit-out budgeting, jewellery showroom illumination, MEP coordination, and fast-track turnkey execution.
          </p>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[#EFE9DF] text-[11px] font-mono uppercase tracking-wider text-[#18181B] border border-[#18181B]/10"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Featured First Article */}
        {posts[0] && (
          <div className="mb-16">
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group block bg-[#121214] text-white border border-[#18181B]/20 overflow-hidden shadow-2xl grid lg:grid-cols-12 items-center"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:col-span-7 bg-black">
                <Image
                  src={posts[0].coverImage}
                  alt={posts[0].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#A07A4F] text-white px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold">
                  Featured Pillar Guide
                </div>
              </div>
              <div className="p-8 sm:p-12 lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#A07A4F]">
                  <span>{posts[0].category}</span>
                  <span>·</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <h2 className="font-display font-light text-2xl sm:text-3xl text-white uppercase group-hover:text-[#A07A4F] transition-colors leading-snug">
                  {posts[0].title}
                </h2>
                <p className="text-sm text-white/70 font-light leading-relaxed line-clamp-3">
                  {posts[0].excerpt}
                </p>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A07A4F] font-semibold">
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((p) => (
            <Link
              key={p.id || p.slug}
              href={`/blog/${p.slug}`}
              className="group block bg-white border border-[#18181B]/15 hover:border-[#A07A4F] transition-all duration-300 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#18181B]/80 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-[#FAF8F5]">
                    {p.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono text-[#18181B]">
                    {p.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A07A4F] mb-2">
                    {p.publishedAt}
                  </div>
                  <h3 className="font-display font-light text-xl text-[#18181B] uppercase leading-snug mb-3 group-hover:text-[#A07A4F] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#71717A] font-light leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A07A4F] font-semibold group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
