import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { API_URL, absoluteUrl } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';

type Location = {
  id: string;
  slug: string;
  city: string;
  title: string;
  description: string;
};

async function getLocation(slug: string): Promise<Location | null> {
  try {
    const res = await fetch(`${API_URL}/api/seo/locations/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const location = await getLocation(resolvedParams.city);
  if (!location) return {};
  
  return pageMetadata({
    path: `/locations/${location.slug}`,
    title: `${location.title} | Brand Kettle BuildSpaces`,
    description: location.description,
    socialTitle: `${location.title} — Brand Kettle BuildSpaces`,
    socialDescription: location.description,
    image: '/imgs/commercial/brandkettle1.jpg',
    imageAlt: `Turnkey commercial fit-outs delivered in ${location.city} by Brand Kettle BuildSpaces`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const location = await getLocation(resolvedParams.city);
  if (!location) notFound();

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Brand Kettle BuildSpaces',
    image: absoluteUrl('/logo.png'),
    telephone: '+918959173790',
    url: absoluteUrl(`/locations/${location.slug}`),
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressCountry: 'IN'
    }
  };

  return (
    <article className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Service Region</span>
            <span className="text-[#18181B]/30">·</span>
            <span>{location.city}</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-6">
            {location.title}
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            {location.description} We bring our end-to-end turnkey architectural design, joinery manufacturing, and fit-out capabilities directly to {location.city}.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bg-[#F2EDE4] border border-[#18181B]/15 p-8 sm:p-12 shadow-sm space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block">
              Regional Expertise
            </span>
            <h2 className="font-display font-light text-3xl text-[#18181B] uppercase tracking-tight">
              Why Partner With Us in {location.city}?
            </h2>
            <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
              Brand Kettle BuildSpaces is recognized as the leading turnkey commercial interior contractor serving the <strong className="text-[#18181B] font-medium">{location.city}</strong> business ecosystem. Our milestone discipline, in-house joinery, and direct MEP engineering ensure handovers on time and on budget.
            </p>
            
            <ul className="space-y-3.5 pt-2">
              <li className="flex items-center gap-3 text-sm text-[#18181B] font-light">
                <span className="w-6 h-6 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                Full Turnkey Project Execution &amp; Civil Fit-Out
              </li>
              <li className="flex items-center gap-3 text-sm text-[#18181B] font-light">
                <span className="w-6 h-6 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                In-House Joinery &amp; Bespoke Millwork Fabrication
              </li>
              <li className="flex items-center gap-3 text-sm text-[#18181B] font-light">
                <span className="w-6 h-6 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                Strict Milestone Accountability &amp; Zero Handoff Gaps
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
              >
                Start Your Project in {location.city} →
              </Link>
            </div>
          </div>
          
          <div className="bg-[#121214] text-white border border-[#18181B]/20 p-10 sm:p-14 flex flex-col items-center justify-center min-h-[380px] text-center shadow-xl">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A07A4F] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display font-light text-2xl text-white uppercase mb-2">
              Pan-India Execution Hub
            </h3>
            <p className="text-sm text-white/70 font-light max-w-sm mb-6">
              Active projects and delivery capabilities across {location.city} and neighboring commercial corridors.
            </p>
            <a
              href="tel:+918959173790"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#A07A4F] font-semibold hover:text-white transition-colors"
            >
              Direct Studio Line: +91 89591 73790 →
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
