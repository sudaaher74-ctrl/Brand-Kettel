import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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
    const res = await fetch(`http://localhost:3001/api/seo/locations/${slug}`, { next: { revalidate: 60 } });
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
  
  return {
    title: `${location.title} | Brand Kettle BuildSpaces`,
    description: location.description,
  };
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
    image: 'https://brandkettle.com/logo.png',
    telephone: '+918959173790',
    url: `https://brandkettle.com/locations/${location.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressCountry: 'IN'
    }
  };

  return (
    <article className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-4">
            <span>✦</span>
            <span>Service Region · {location.city}</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6">
            {location.title}
          </h1>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed max-w-2xl mx-auto">
            {location.description} We bring our end-to-end turnkey architectural design, joinery manufacturing, and fit-out capabilities directly to {location.city}.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-[28px] bg-[#121216] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium block">
              Regional Expertise
            </span>
            <h2 className="font-display font-light text-3xl text-white uppercase tracking-tight">
              Why Partner With Us in {location.city}?
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed">
              Brand Kettle BuildSpaces is recognized as the leading turnkey commercial interior contractor serving the <strong className="text-white font-medium">{location.city}</strong> business ecosystem. Our milestone discipline, in-house joinery, and direct MEP engineering ensure handovers on time and on budget.
            </p>
            
            <ul className="space-y-3.5 pt-2">
              <li className="flex items-center gap-3 text-sm text-[#D4D4D8] font-light">
                <span className="w-6 h-6 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                Full Turnkey Project Execution &amp; Civil Fit-Out
              </li>
              <li className="flex items-center gap-3 text-sm text-[#D4D4D8] font-light">
                <span className="w-6 h-6 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                In-House Joinery &amp; Bespoke Millwork Fabrication
              </li>
              <li className="flex items-center gap-3 text-sm text-[#D4D4D8] font-light">
                <span className="w-6 h-6 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                Strict Milestone Accountability &amp; Zero Handoff Gaps
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl"
              >
                Start Your Project in {location.city} →
              </Link>
            </div>
          </div>
          
          <div className="rounded-[28px] bg-[#121216] border border-white/10 p-10 sm:p-14 flex flex-col items-center justify-center min-h-[380px] text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display font-light text-2xl text-white uppercase mb-2">
              Pan-India Execution Hub
            </h3>
            <p className="text-sm text-[#A1A1AA] font-light max-w-sm mb-6">
              Active projects and delivery capabilities across {location.city} and neighboring commercial corridors.
            </p>
            <a
              href="tel:+918959173790"
              className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium hover:text-white transition-colors"
            >
              Direct Studio Line: +91 89591 73790 →
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
