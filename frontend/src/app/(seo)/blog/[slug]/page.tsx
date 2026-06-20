import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  publishedAt: string;
};

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`http://localhost:3001/api/admin/blog/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Brand Kettle Blog`,
    description: post.excerpt || `Read about ${post.title} on the Brand Kettle BuildSpaces blog.`,
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

  // Basic Markdown-like parser for the content (splitting by newlines for paragraphs)
  const contentParagraphs = (post.content || '').split('\n\n').filter(Boolean);

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
    <article className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">{post.title}</h1>
          {post.publishedAt && (
            <time className="text-slate-500 text-sm font-medium tracking-wide uppercase">
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}
        </header>

        {post.image && (
          <div className="mb-12 rounded-2xl overflow-hidden aspect-[21/9] relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none">
          {contentParagraphs.map((para, i) => {
            // Super simple markdown-ish bolding
            const formattedPara = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            return <p key={i} className="mb-6 leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: formattedPara }} />;
          })}
        </div>
      </div>
    </article>
  );
}
