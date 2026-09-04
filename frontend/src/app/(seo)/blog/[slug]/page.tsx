import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  metaTitle: string;
  metaDescription: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_URL}/api/admin/blog/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const post = await res.json();
    if (!post || !post.published) return null;
    return post;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: post.metaTitle || `${post.title} | Brand Kettle Blog`,
    description: post.metaDescription || post.excerpt || `Read about ${post.title} on the Brand Kettle BuildSpaces blog.`,
    openGraph: {
      type: 'article',
      images: post.image ? [{ url: post.image }] : [],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);
  if (!post) notFound();

  // Article Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.image ? [post.image] : [],
    datePublished: post.publishedAt || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Brand Kettle BuildSpaces'
    }
  };

  return (
    <article className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] hover:text-white transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          {post.publishedAt && (
            <time className="text-xs font-light uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}
          <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.08]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-[#A1A1AA] max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.image && (
          <div className="mb-14 rounded-[24px] overflow-hidden aspect-[21/9] relative border border-white/10 bg-[#121216]">
            <Image src={post.image} alt={post.imageAlt || post.title} className="object-cover" fill sizes="100vw" priority />
          </div>
        )}

        {/* Content — supports HTML from the editor */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:font-light prose-headings:text-white prose-headings:uppercase
            prose-p:text-[#D4D4D8] prose-p:font-light prose-p:leading-relaxed
            prose-a:text-[#C5A880] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-medium
            prose-blockquote:border-[#C5A880] prose-blockquote:text-[#D4D4D8] prose-blockquote:font-serif prose-blockquote:italic
            prose-img:rounded-2xl prose-img:border prose-img:border-white/10"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />

        {/* Bottom Consultation Banner */}
        <div className="mt-20 rounded-[24px] bg-[#121216] border border-white/10 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">Turnkey Consultation</span>
            <h3 className="font-display font-light text-2xl text-white uppercase">Inspired by this article?</h3>
            <p className="mt-1 text-sm text-[#A1A1AA] font-light">Discuss your upcoming commercial, retail, or showroom project.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl shrink-0"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </article>
  );
}
