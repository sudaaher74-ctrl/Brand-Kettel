import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { BLOG_ARTICLES, getBlogArticle } from '@/lib/blogData';
import {
  ORGANIZATION_ID,
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScript,
} from '@/lib/structuredData';
import { absoluteUrl } from '@/lib/site';

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getBlogArticle(resolvedParams.slug);
  if (!article) return {};

  return pageMetadata({
    path: `/blog/${article.slug}`,
    title: `${article.title} | Brand Kettle Insights`,
    description: article.excerpt,
    socialTitle: article.title,
    socialDescription: article.excerpt,
    image: article.coverImage,
    imageAlt: article.imageAlt,
    type: 'article',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = getBlogArticle(resolvedParams.slug);
  if (!article) notFound();

  const canonicalPath = `/blog/${article.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(canonicalPath)}#article`,
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.coverImage),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Brand Kettle Technical Editorial Team',
      url: absoluteUrl('/about'),
    },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(canonicalPath),
    },
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: article.title, path: canonicalPath },
  ]);

  return (
    <article className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      {article.faqs && article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(article.faqs, canonicalPath))}
        />
      )}

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#A07A4F] hover:text-[#18181B] transition-colors"
          >
            ← Back to Insights &amp; Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12 text-center">
          <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-[#A07A4F] mb-4">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
          </div>
          <h1 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#18181B] uppercase tracking-tight leading-[1.15] mb-6">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            {article.excerpt}
          </p>
        </header>

        {/* Hero Visual Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative aspect-[21/9] w-full bg-[#18181B] border border-[#18181B]/15 overflow-hidden shadow-lg">
            <Image
              src={article.coverImage}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Body + Sticky Table of Contents Layout */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-12">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-display font-light text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#18181B]/85 font-light leading-relaxed">
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* Article FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="pt-10 border-t border-[#18181B]/15 bg-[#F2EDE4] p-8 sm:p-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
                  Frequently Asked Questions
                </span>
                <h3 className="font-display font-light text-2xl text-[#18181B] uppercase mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-6">
                  {article.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="space-y-2">
                      <h4 className="font-display font-medium text-base text-[#18181B]">
                        {faq.q}
                      </h4>
                      <p className="text-sm text-[#71717A] font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contextual Commercial Links */}
            {(article.relatedService || article.relatedProject) && (
              <div className="p-6 bg-[#EFE9DF] border border-[#18181B]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A07A4F] font-semibold block mb-1">
                    Related Commercial Discipline
                  </span>
                  <p className="text-sm text-[#18181B] font-medium">
                    Explore our turnkey delivery capabilities in this sector.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.relatedService && (
                    <Link
                      href={article.relatedService.href}
                      className="px-4 py-2 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      {article.relatedService.name} →
                    </Link>
                  )}
                  {article.relatedProject && (
                    <Link
                      href={article.relatedProject.href}
                      className="px-4 py-2 bg-white border border-[#18181B]/20 hover:border-[#A07A4F] text-xs font-mono uppercase tracking-wider text-[#18181B] transition-colors"
                    >
                      {article.relatedProject.name} →
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar: Table of Contents & Quick Consultation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="bg-white border border-[#18181B]/15 p-6 shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold block mb-3">
                In This Guide
              </span>
              <ul className="space-y-2.5 text-xs text-[#71717A]">
                {article.tableOfContents.map((toc, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-[#A07A4F] font-mono">0{tIdx + 1}.</span>
                    <span>{toc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#121214] text-white p-6 sm:p-8 shadow-xl space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold block">
                Turnkey Advisory
              </span>
              <h3 className="font-display font-light text-xl text-white uppercase">
                Planning a commercial interior project?
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Connect with our technical estimating team for space feasibility, budget models, and preliminary project scheduling.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full py-3 text-center bg-[#A07A4F] text-white hover:bg-white hover:text-[#18181B] font-mono text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
