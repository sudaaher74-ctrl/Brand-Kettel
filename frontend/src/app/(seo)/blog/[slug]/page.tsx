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
    <article className="pt-28 sm:pt-36 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-nav text-accent hover:text-ink transition-colors mb-8"
        >
          <span className="transition-transform hover:-translate-x-1">←</span>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          {post.publishedAt && (
            <time className="text-[11px] font-light uppercase tracking-[0.2em] text-accent">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-ink leading-[1.1]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-6 text-lg font-light leading-relaxed text-ink-secondary max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.image && (
          <div className="mb-12 overflow-hidden aspect-[21/9] relative">
            <Image src={post.image} alt={post.imageAlt || post.title} className="object-cover" fill sizes="100vw" priority />
          </div>
        )}

        {/* Content — supports HTML from the TipTap editor */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-display prose-headings:font-light prose-headings:tracking-[0.5px] prose-headings:text-ink
            prose-p:text-ink-secondary prose-p:font-light prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-ink prose-strong:font-medium
            prose-blockquote:border-accent prose-blockquote:text-ink-secondary
            prose-img:rounded-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />

        {/* CTA */}
        <div className="mt-16 border-t border-line pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl text-ink">Inspired by what you read?</h3>
            <p className="mt-1 text-sm text-ink-secondary">Let&apos;s discuss your project.</p>
          </div>
          <Link href="/contact" className="btn-accent">
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  );
}

