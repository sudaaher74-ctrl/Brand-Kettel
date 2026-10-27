import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { cleanImagePath } from '@/lib/imageUtils';

export const metadata: Metadata = pageMetadata({
  path: '/blog',
  title: 'Blog — Insights on Commercial Interior Design & Fit-Outs',
  description: 'Practical thinking, project breakdowns, and architecture insights on commercial fit-outs, jewellery showrooms, and turnkey delivery from Brand Kettle BuildSpaces.',
  socialTitle: 'Insights on Commercial Interiors & Fit-Out Delivery',
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
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>06</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Journal &amp; Insights</span>
            <span className="text-[#18181B]/30">—</span>
            <span>Blog</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Insights From <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">The Build Floor</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl mx-auto">
            Practical thinking on commercial interiors, jewellery showroom engineering, fast-track turnkey execution, and material craft.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-20 px-8 bg-[#F2EDE4] border border-[#18181B]/15 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A07A4F] inline-block animate-pulse mb-4" />
            <h3 className="font-display font-light text-2xl text-[#18181B] uppercase mb-2">New Articles Arriving Soon</h3>
            <p className="text-sm text-[#71717A] font-light max-w-md mx-auto mb-8">
              Our architectural directors are documenting case studies and turnkey execution insights.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
            >
              Explore Completed Projects →
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.id || p.slug}
                href={`/blog/${p.slug}`}
                className="group block h-full bg-[#F2EDE4] border border-[#18181B]/15 hover:border-[#18181B]/50 transition-all duration-300 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                    <Image
                      src={cleanImagePath(p.coverImage || p.image || '/imgs/commercial/brandkettle1.jpg')}
                      alt={p.imageAlt || p.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/60 via-transparent to-transparent opacity-60" />
                    {p.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A07A4F]">
                        {p.category}
                      </span>
                    )}
                  </div>

                  <div className="p-7">
                    <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider block mb-2">
                      {new Date(p.publishedAt || p.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </span>
                    <h2 className="font-display font-light text-xl text-[#18181B] uppercase tracking-wide group-hover:text-[#A07A4F] transition-colors mb-3">
                      {p.title}
                    </h2>
                    {p.excerpt && (
                      <p className="text-xs sm:text-sm text-[#71717A] font-light leading-relaxed line-clamp-3">
                        {p.excerpt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-7 pb-7 pt-3 flex items-center justify-between border-t border-[#18181B]/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold">
                    Read Article
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#18181B] group-hover:bg-[#18181B] group-hover:text-[#FAF8F5] border border-[#18181B]/10 flex items-center justify-center text-xs font-bold transition-colors">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
