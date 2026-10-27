import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import { cleanImagePath } from '@/lib/imageUtils';

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
  
  const description =
    post.metaDescription || post.excerpt || `Read about ${post.title} on the Brand Kettle BuildSpaces blog.`;

  return pageMetadata({
    path: `/blog/${post.slug}`,
    title: post.metaTitle || `${post.title} | Brand Kettle Blog`,
    description,
    socialTitle: post.title,
    socialDescription: description,
    image: post.image || '/imgs/commercial/experties2.jpeg',
    imageAlt: post.imageAlt || `${post.title} — Brand Kettle BuildSpaces`,
    type: 'article',
  });
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
    <article className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#A07A4F] hover:text-[#18181B] transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          {post.publishedAt && (
            <time className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-3">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}
          <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl text-[#18181B] uppercase tracking-tight leading-[1.08]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-[#71717A] max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.image && (
          <div className="mb-14 overflow-hidden aspect-[21/9] relative border border-[#18181B]/15 bg-[#F2EDE4] shadow-md">
            <Image src={cleanImagePath(post.image)} alt={post.imageAlt || post.title} className="object-cover" fill sizes="(max-width: 896px) 100vw, 896px" priority />
          </div>
        )}

        {/* Content — supports HTML from the editor */}
        <div
          className="prose prose-neutral prose-lg max-w-none
            prose-headings:font-display prose-headings:font-light prose-headings:text-[#18181B] prose-headings:uppercase
            prose-p:text-[#18181B]/80 prose-p:font-light prose-p:leading-relaxed
            prose-a:text-[#A07A4F] prose-a:underline hover:text-[#18181B]
            prose-strong:text-[#18181B] prose-strong:font-semibold
            prose-blockquote:border-[#A07A4F] prose-blockquote:text-[#18181B] prose-blockquote:font-serif prose-blockquote:italic
            prose-img:border prose-img:border-[#18181B]/15"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />

        {/* Bottom Consultation Banner in Deep Charcoal (Homepage Contrast Banner) */}
        <div className="mt-20 bg-[#121214] text-white border border-[#18181B]/20 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-1">Turnkey Consultation</span>
            <h3 className="font-display font-light text-2xl text-white uppercase">Inspired by this article?</h3>
            <p className="mt-1 text-sm text-white/70 font-light">Discuss your upcoming commercial, retail, or showroom project.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] text-[#18181B] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm shrink-0"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </article>
  );
}
