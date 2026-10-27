import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = pageMetadata({
  path: '/services',
  title: 'Turnkey Commercial Interior Services — Brand Kettle BuildSpaces',
  description: 'Explore our full spectrum of turnkey commercial interior services: corporate fit-outs, luxury retail environments, jewellery showrooms, and bespoke joinery.',
  socialTitle: 'Services & Disciplines — Brand Kettle BuildSpaces',
  socialDescription: 'End-to-end commercial architecture, engineering, in-house joinery and on-site fit-out execution delivered across India.',
  image: '/imgs/commercial/gucci.webp',
  imageAlt: 'Turnkey interior execution by Brand Kettle BuildSpaces',
});

const SERVICE_LINKS: Record<string, string> = {
  'Commercial Fit-Outs': '/commercial-fit-outs',
  'Retail Fit-Outs': '/retail-fit-outs',
  'Jewellery Showrooms': '/jewellery-showrooms',
  'Custom Furniture': '/custom-furniture',
  'Residential Interiors': '/residential-interiors',
};

const DEFAULT_SERVICES = [
  {
    title: 'Commercial Fit-Outs',
    image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
    tag: 'Corporate & Campuses',
    description: 'High-performance offices, collaborative workspaces, and enterprise fit-outs engineered for productivity and brand identity.',
  },
  {
    title: 'Retail Fit-Outs',
    image: '/imgs/commercial/gucci.webp',
    tag: 'Luxury Flagships',
    description: 'Turnkey luxury retail environments engineered for flawless brand expression, high footfall, and rapid retail rollouts.',
  },
  {
    title: 'Jewellery Showrooms',
    image: '/imgs/commercial/png1.jpg',
    tag: 'High-Security Retail',
    description: 'Specialized jewellery retail fit-outs combining high-CRI illumination, secure display joinery, and fast-track delivery.',
  },
  {
    title: 'Custom Furniture',
    image: '/imgs/commercial/brandkettle1.jpg',
    tag: 'Factory Joinery',
    description: 'Precision architectural woodwork, modular workstations, and bespoke furniture manufactured in our direct factory facilities.',
  },
  {
    title: 'Residential Interiors',
    image: '/imgs/commercial/taksha-hyderabad-cover.webp',
    tag: 'Bespoke Living',
    description: 'High-end luxury residences, penthouses, and private estates executed with meticulous joinery and turnkey precision.',
  },
];

const SCOPE_PILLARS = [
  { no: '01', title: 'Civil & Structural Fit-Out', desc: 'Demolition, drywalls, ceilings, flooring, masonry, and architectural finishes.' },
  { no: '02', title: 'Factory Joinery & Millwork', desc: 'In-house manufacturing of custom display counters, wall panels, and bespoke furniture.' },
  { no: '03', title: 'HVAC & MEP Engineering', desc: 'Complete electrical loads, ducting, fire safety, plumbing, and automation.' },
  { no: '04', title: 'Architectural Lighting', desc: 'High-CRI retail illumination, ambient mood controls, and task lighting.' },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>03</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Disciplines</span>
            <span className="text-[#18181B]/30">—</span>
            <span>End-to-End Capabilities</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Design, Build &amp; <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Furnish Under One Roof</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl mx-auto">
            Disciplined specializations with single-point accountability — from strategic discovery to on-site execution and final handover.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20 md:mb-28">
          {DEFAULT_SERVICES.map((s) => {
            const href = SERVICE_LINKS[s.title] || '/contact';
            return (
              <Link
                key={s.title}
                href={href}
                className="group block h-full bg-[#F2EDE4] border border-[#18181B]/15 hover:border-[#18181B]/50 transition-all duration-300 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                    <Image
                      src={s.image}
                      alt={s.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/60 via-transparent to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A07A4F]">
                      {s.tag}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="font-display font-light text-2xl text-[#18181B] uppercase tracking-wide group-hover:text-[#A07A4F] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#71717A] font-light leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-3 flex items-center justify-between border-t border-[#18181B]/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold">
                    Explore Discipline
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#18181B] group-hover:bg-[#18181B] group-hover:text-[#FAF8F5] border border-[#18181B]/10 flex items-center justify-center text-xs font-bold transition-colors">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Turnkey Scope Breakdown */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
              Full Spectrum
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight">
              Turnkey Scope of Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCOPE_PILLARS.map((p) => (
              <div
                key={p.no}
                className="bg-[#F2EDE4] p-7 border border-[#18181B]/15 hover:border-[#18181B]/50 transition-all duration-300 shadow-sm"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-2 block">{p.no}</span>
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-[#18181B] mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-[#71717A] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Consultation CTA in Deep Charcoal Contrast */}
        <div className="bg-[#121214] text-white border border-[#18181B]/20 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-3">
            Custom Requirements?
          </span>
          <h3 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-4">
            Request an Architectural Consultation
          </h3>
          <p className="text-sm text-white/70 font-light max-w-xl mx-auto mb-8">
            Tell us about your project brief, timeline, and location. Our project directors will provide an upfront scope roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] text-[#18181B] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
            >
              Discuss Your Requirement →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
