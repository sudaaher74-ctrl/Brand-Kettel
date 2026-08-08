import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Design, Build & Interiors Insights',
  description:
    'Insights, case studies and inspiration from the Brand Kettle BuildSpaces team — covering commercial interiors, retail fit-outs, jewellery showrooms and more.',
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center justify-center px-5 text-center">
      {/* Subtle grain */}
      <div className="pointer-events-none absolute inset-0 grain-soft opacity-50" aria-hidden />

      <div className="relative z-10 max-w-2xl">
        <span className="eyebrow justify-center">
          <span className="h-px w-6 bg-accent" />
          Brand Kettle Blog
        </span>

        <h1 className="mt-8 text-section-lg text-ink">
          Insights &amp; Stories — Coming Soon
        </h1>

        <p className="mt-6 text-body-main max-w-lg mx-auto">
          We&apos;re putting together a curated collection of case studies, design
          inspiration and behind-the-scenes stories from our projects across India.
          Check back soon.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/portfolio" className="btn">
            View Our Portfolio
          </Link>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
