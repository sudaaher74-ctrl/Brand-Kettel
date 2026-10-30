import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/servicesData';
import { INDUSTRIES } from '@/lib/landingContent';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/structuredData';

export const metadata: Metadata = pageMetadata({
  path: '/services',
  title: 'Turnkey Commercial Interior Services & Fit-Out Capabilities',
  description: 'Explore our full spectrum of turnkey commercial interior services: corporate office fit-outs, luxury retail environments, jewellery showrooms, and bespoke factory joinery across India.',
  socialTitle: 'Commercial Interior Services & Disciplines — Brand Kettle BuildSpaces',
  socialDescription: 'End-to-end commercial architecture, engineering, in-house joinery and on-site fit-out execution delivered across India.',
  image: '/imgs/commercial/gucci.webp',
  imageAlt: 'Turnkey interior execution by Brand Kettle BuildSpaces',
});

const CORE_PILLARS = [
  {
    title: 'Commercial & Office Fit-Outs',
    href: '/commercial-fit-outs',
    image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
    tag: 'Corporate & Campuses',
    description: 'High-performance corporate offices, tech campuses, and enterprise fit-outs engineered for productivity and brand identity.',
  },
  {
    title: 'Retail Store Interiors',
    href: '/retail-fit-outs',
    image: '/imgs/commercial/gucci.webp',
    tag: 'Luxury Flagships',
    description: 'Turnkey luxury retail environments engineered for flawless brand expression, high footfall, and rapid multi-store rollouts.',
  },
  {
    title: 'Jewellery Showrooms',
    href: '/jewellery-showrooms',
    image: '/imgs/commercial/png1.jpg',
    tag: 'High-Security Retail',
    description: 'Specialized jewellery retail fit-outs combining high-CRI illumination, secure display joinery, and fast-track 27-day handovers.',
  },
  {
    title: 'Custom Furniture & Joinery',
    href: '/custom-furniture',
    image: '/imgs/commercial/brandkettle1.jpg',
    tag: 'In-House Factory',
    description: 'Precision architectural woodwork, modular workstations, and bespoke furniture manufactured in our direct factory facilities.',
  },
  {
    title: 'Residential Interiors',
    href: '/residential-interiors',
    image: '/imgs/commercial/home1.webp',
    tag: 'Bespoke Living',
    description: 'High-end luxury residences, penthouses, and private estates executed with meticulous joinery and turnkey precision.',
  },
  {
    title: 'Institutional & Library Millwork',
    href: '/library-institutional-furniture',
    image: '/imgs/commercial/gem-jeevan-tara-1.jpg',
    tag: 'Institutional Durability',
    description: 'Durable, high-traffic commercial joinery, campus library systems, and public administration facilities.',
  },
];

export default function ServicesDirectoryPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]);

  return (
    <article className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Capabilities &amp; Disciplines</span>
            <span className="text-[#18181B]/30">·</span>
            <span>Turnkey Delivery</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-6">
            Design, Build &amp;{' '}
            <span className="font-serif italic font-normal text-[#A07A4F]">Furnish Under One Roof</span>
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            From empty bare shell to fully furnished and operational commercial environments. We provide complete single-point accountability for civil works, MEP engineering, factory-built millwork, and on-site handover.
          </p>
        </div>

        {/* 6 Core Pillars */}
        <section className="mb-24">
          <div className="border-b border-[#18181B]/15 pb-4 mb-10 flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
                Primary Service Lines
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase">
                Core Turnkey Capabilities
              </h2>
            </div>
            <Link href="/portfolio" className="font-mono text-xs uppercase tracking-wider text-[#A07A4F] hover:underline">
              See Delivered Work →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_PILLARS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-[#18181B]/15 overflow-hidden flex flex-col justify-between hover:border-[#A07A4F] transition-all shadow-sm"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#18181B]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#18181B]/80 text-[#FAF8F5] px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider backdrop-blur-sm">
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-light text-2xl text-[#18181B] uppercase mb-2 group-hover:text-[#A07A4F] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#71717A] font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A07A4F] font-semibold">
                    Explore Details &amp; Projects →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 9 Specialized Engineering & Management Services */}
        <section className="mb-24 bg-[#EFE9DF] border border-[#18181B]/15 p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
              Specialized Engineering &amp; Contracting Disciplines
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase mb-4">
              Detailed Scope Packages
            </h2>
            <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
              Tailored commercial interior contracts covering specific phases or complete lifecycle management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-[#18181B]/15 p-6 hover:border-[#A07A4F] transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-medium text-lg text-[#18181B] uppercase mb-2 group-hover:text-[#A07A4F] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-[#71717A] font-light leading-relaxed line-clamp-3 mb-4">
                    {s.description}
                  </p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#A07A4F] font-semibold">
                  Read Scope &amp; Deliverables →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 10 Industry Verticals Grid */}
        <section className="mb-20">
          <div className="border-b border-[#18181B]/15 pb-4 mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
              Commercial Sectors Served
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase">
              Industry Verticals We Engineer For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="p-5 bg-white border border-[#18181B]/15 hover:border-[#A07A4F] transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#A07A4F] font-semibold block mb-1">
                    Sector
                  </span>
                  <h3 className="font-display font-light text-base text-[#18181B] uppercase group-hover:text-[#A07A4F] transition-colors mb-2">
                    {ind.name}
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase text-[#71717A] group-hover:text-[#18181B]">
                  View Sector →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Consultation Call to Action */}
        <section className="bg-[#121214] text-white p-10 sm:p-14 text-center">
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-4">
            Planning a Commercial Fit-Out in India?
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light max-w-xl mx-auto mb-8">
            Consult directly with our technical estimating and architectural teams for preliminary feasibility, space planning, and itemized BOQ budgeting.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Request a Technical Consultation
          </Link>
        </section>
      </div>
    </article>
  );
}
