import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { LOCATIONS_DATA, getLocationHub } from '@/lib/locationsData';
import {
  ORGANIZATION_ID,
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScript,
} from '@/lib/structuredData';
import { absoluteUrl } from '@/lib/site';

export function generateStaticParams() {
  return LOCATIONS_DATA.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationHub(resolvedParams.city);
  if (!location) return {};

  return pageMetadata({
    path: `/locations/${location.slug}`,
    title: location.title,
    description: location.description,
    socialTitle: `${location.title} — Brand Kettle BuildSpaces`,
    socialDescription: location.description,
    image: location.heroImage,
    imageAlt: `${location.h1} delivered by Brand Kettle BuildSpaces`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const resolvedParams = await params;
  const location = getLocationHub(resolvedParams.city);
  if (!location) notFound();

  const canonicalPath = `/locations/${location.slug}`;

  // Service Schema targeting the specific city via areaServed
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(canonicalPath)}#service`,
    name: location.h1,
    serviceType: 'Commercial Interior Fit-Out & Turnkey Contracting',
    description: location.description,
    url: absoluteUrl(canonicalPath),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/services' },
    { name: location.city, path: canonicalPath },
  ]);

  return (
    <article className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(location.faqs, canonicalPath))}
      />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Breadcrumb & Overline */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Pan-India Regional Delivery</span>
            <span className="text-[#18181B]/30">·</span>
            <span>{location.region}</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-6">
            {location.h1}
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-3xl mx-auto">
            {location.description}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#EFE9DF] border border-[#18181B]/10 text-xs font-mono uppercase tracking-wider text-[#18181B]">
            <span className="w-2 h-2 rounded-full bg-[#A07A4F] animate-pulse" />
            <span>Local Proof: {location.localProof}</span>
          </div>
        </div>

        {/* 2-Column: Regional Delivery Model & Hub Specs */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-20">
          <div className="bg-[#F2EDE4] border border-[#18181B]/15 p-8 sm:p-12 shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-2">
                Turnkey Engineering Discipline
              </span>
              <h2 className="font-display font-light text-3xl text-[#18181B] uppercase tracking-tight">
                Why Partner With Us in {location.city}?
              </h2>
              <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed mt-4">
                Brand Kettle BuildSpaces executes turnkey commercial projects in <strong className="text-[#18181B] font-medium">{location.city}</strong> through a proven hybrid delivery model: precision millwork and bespoke joinery are prefabricated in our direct Indore factory, while dedicated on-site civil and MEP engineering teams manage installation, testing, and handover on the ground.
              </p>

              <ul className="space-y-3.5 pt-6">
                <li className="flex items-center gap-3 text-sm text-[#18181B] font-light">
                  <span className="w-6 h-6 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  Single-Contract Turnkey Accountability (Civil, MEP, Joinery, FF&E)
                </li>
                <li className="flex items-center gap-3 text-sm text-[#18181B] font-light">
                  <span className="w-6 h-6 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  Concurrent Factory Prefabrication — Handover up to 40% Faster
                </li>
                <li className="flex items-center gap-3 text-sm text-[#18181B] font-light">
                  <span className="w-6 h-6 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  Compliance with Local Mall Regulations &amp; Corporate Tower Norms
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
              >
                Start Your Project in {location.city} →
              </Link>
            </div>
          </div>

          <div className="bg-[#121214] text-white border border-[#18181B]/20 p-8 sm:p-12 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A07A4F] mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-2">
                Pan-India Logistics Pipeline
              </span>
              <h3 className="font-display font-light text-2xl text-white uppercase mb-4">
                Delivering Excellence to {location.city}
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                Our Central India factory in Indore serves as our national manufacturing backbone. Freight connectivity allows us to dispatch finished joinery, modular furniture, and architectural metalwork directly to commercial sites in {location.city} within 24–48 hours, fully protected and ready for rapid installation.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest font-mono">Direct Studio Line</p>
                <a
                  href="tel:+918959173790"
                  className="font-mono text-sm uppercase tracking-wider text-[#A07A4F] font-semibold hover:text-white transition-colors"
                >
                  +91 89591 73790
                </a>
              </div>
              <Link
                href="/portfolio"
                className="text-xs uppercase tracking-wider font-mono text-white/80 hover:text-[#A07A4F] underline underline-offset-4"
              >
                Browse All Realizations →
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Local Projects Grid */}
        {location.featuredProjects.length > 0 && (
          <section className="mb-20">
            <div className="border-b border-[#18181B]/15 pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
                  Proven Execution
                </span>
                <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase">
                  Delivered Projects Serving {location.city}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="font-mono text-xs uppercase tracking-[0.16em] text-[#A07A4F] hover:underline"
              >
                View Full Portfolio →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {location.featuredProjects.map((p) => (
                <div
                  key={p.slug}
                  className="bg-white border border-[#18181B]/15 overflow-hidden group shadow-sm flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full bg-[#18181B]">
                    <Image
                      src={p.image}
                      alt={`${p.name} - ${p.category} delivered by Brand Kettle`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#18181B]/80 text-[#FAF8F5] px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider backdrop-blur-sm">
                      {p.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#A07A4F] text-white px-3 py-1 text-[10px] font-mono uppercase font-semibold">
                      {p.stat}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-light text-2xl text-[#18181B] uppercase mb-2">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#71717A] uppercase font-mono tracking-wider mb-3">
                        Scope: {p.area}
                      </p>
                      <p className="text-sm text-[#71717A] font-light leading-relaxed">
                        {p.blurb}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#18181B] font-semibold hover:text-[#A07A4F] transition-colors"
                      >
                        Read Complete Case Study →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Local Operational Details */}
        <section className="mb-20 bg-[#EFE9DF] border border-[#18181B]/15 p-8 sm:p-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
            Local Operational Expertise
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase mb-8">
            How We Navigate {location.city} Building Guidelines
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {location.localOperations.map((op, idx) => (
              <div key={idx} className="space-y-3">
                <span className="font-mono text-xs text-[#A07A4F] font-semibold">
                  0{idx + 1} /
                </span>
                <h3 className="font-display font-medium text-lg text-[#18181B] uppercase">
                  {op.heading}
                </h3>
                <p className="text-sm text-[#71717A] font-light leading-relaxed">
                  {op.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Localized FAQ Accordion / List */}
        <section className="mb-20">
          <div className="border-b border-[#18181B]/15 pb-4 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
              Commercial Questions
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase">
              Frequently Asked Questions for {location.city} Fit-Outs
            </h2>
          </div>
          <div className="divide-y divide-[#18181B]/15 border-y border-[#18181B]/15">
            {location.faqs.map((faq, i) => (
              <div key={i} className="py-6 sm:py-8 grid sm:grid-cols-3 gap-4">
                <h3 className="font-display font-medium text-lg text-[#18181B] sm:col-span-1">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#71717A] font-light leading-relaxed sm:col-span-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Other City Links */}
        <section className="pt-8 border-t border-[#18181B]/15">
          <p className="font-mono text-xs uppercase tracking-widest text-[#71717A] mb-4">
            Explore Other Commercial Delivery Hubs:
          </p>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS_DATA.filter((l) => l.slug !== location.slug).map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="px-4 py-2 bg-white border border-[#18181B]/15 hover:border-[#A07A4F] text-xs font-mono uppercase tracking-wider text-[#18181B] hover:text-[#A07A4F] transition-all"
              >
                {l.city} Hub →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
