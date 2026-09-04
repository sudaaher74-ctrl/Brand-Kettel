import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cleanImagePath } from '@/lib/imageUtils';

export const metadata: Metadata = {
  title: 'Blog — Insights on Commercial Interior Design & Fit-Outs',
  description:
    'Practical thinking, project breakdowns, and architecture insights on commercial fit-outs, jewellery showrooms, and turnkey delivery from Brand Kettle BuildSpaces.',
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
    <div className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>Architectural Insights &amp; Journal</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
            Insights From <br />
            <span className="font-serif italic font-normal text-[#C5A880]">The Build Floor</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl mx-auto">
            Practical thinking on commercial interiors, jewellery showroom engineering, fast-track turnkey execution, and material craft.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-20 rounded-[28px] border border-white/10 bg-[#121216] shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] inline-block animate-pulse mb-4" />
            <h3 className="font-display font-light text-2xl text-white uppercase mb-2">New Articles Arriving Soon</h3>
            <p className="text-sm text-[#A1A1AA] font-light max-w-md mx-auto mb-8">
              Our architectural directors are documenting case studies and turnkey execution insights.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl"
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
                className="group block h-full rounded-[24px] bg-[#121216] border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={cleanImagePath(p.coverImage || p.image || '/imgs/commercial/brandkettle1.jpg')}
                      alt={p.imageAlt || p.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-80" />
                    {p.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.14em] font-medium text-[#C5A880]">
                        {p.category}
                      </span>
                    )}
                  </div>

                  <div className="p-7">
                    <span className="text-[11px] font-light text-[#A1A1AA] uppercase tracking-wider block mb-2">
                      {new Date(p.publishedAt || p.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </span>
                    <h2 className="font-display font-light text-xl text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors mb-3">
                      {p.title}
                    </h2>
                    {p.excerpt && (
                      <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed line-clamp-3">
                        {p.excerpt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-xs uppercase tracking-[0.14em] text-[#C5A880] font-medium">
                    Read Article
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#C5A880] group-hover:text-[#0A0A0B] text-white flex items-center justify-center text-xs transition-colors">
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
