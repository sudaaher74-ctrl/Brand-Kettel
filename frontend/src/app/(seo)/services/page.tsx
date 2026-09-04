import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services as fallbackServices } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Turnkey Services — Design, Build & Furnish',
  description:
    'Commercial interiors, retail stores, jewellery showrooms, office fit-outs, residential interiors and custom furniture — delivered turnkey by Brand Kettle BuildSpaces.',
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getServices() {
  try {
    const res = await fetch(`${API_URL}/api/admin/content?type=services`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackServices;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackServices;
  } catch (error) {
    console.warn(`Failed to fetch services:`, error);
    return fallbackServices;
  }
}

const SERVICE_LINKS: Record<string, string> = {
  'Commercial Fit-Outs': '/commercial-fit-outs',
  'Retail Store Design': '/retail-fit-outs',
  'Jewellery Showrooms': '/jewellery-showrooms',
  'Residential Interiors': '/residential-interiors',
  'Custom Furniture': '/custom-furniture',
  'Institutional Furniture': '/library-institutional-furniture',
};

const SCOPE_PILLARS = [
  { no: '01', title: 'Civil & Structural Fit-Out', desc: 'Demolition, drywalls, ceilings, flooring, masonry, and architectural finishes.' },
  { no: '02', title: 'Factory Joinery & Millwork', desc: 'In-house manufacturing of custom display counters, wall panels, and bespoke furniture.' },
  { no: '03', title: 'HVAC & MEP Engineering', desc: 'Complete electrical loads, ducting, fire safety, plumbing, and automation.' },
  { no: '04', title: 'Architectural Lighting', desc: 'High-CRI retail illumination, ambient mood controls, and task lighting.' },
];

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>End-to-End Capabilities</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
            Design, Build &amp; <br />
            <span className="font-serif italic font-normal text-[#C5A880]">Furnish Under One Roof</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl mx-auto">
            Six disciplined specializations with single-point accountability — from strategic discovery to on-site execution and final handover.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24 md:mb-32">
          {services.map((s: { title: string; image: string; tag: string; description: string }) => {
            const href = SERVICE_LINKS[s.title] || '/contact';
            return (
              <Link
                key={s.title}
                href={href}
                className="group block h-full rounded-[24px] bg-[#121216] border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={s.image}
                      alt={s.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.14em] font-medium text-[#C5A880]">
                      {s.tag}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="font-display font-light text-2xl text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-xs uppercase tracking-[0.14em] text-[#C5A880] font-medium">
                    Explore Discipline
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#C5A880] group-hover:text-[#0A0A0B] text-white flex items-center justify-center text-xs transition-colors">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Turnkey Scope Breakdown */}
        <section className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-2">
              Full Spectrum
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Turnkey Scope of Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCOPE_PILLARS.map((p) => (
              <div
                key={p.no}
                className="rounded-[20px] bg-[#121216] p-7 border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300"
              >
                <span className="font-serif italic text-xs text-[#C5A880] mb-2 block">{p.no}</span>
                <h3 className="font-display text-base font-medium uppercase tracking-wide text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Consultation CTA */}
        <div className="rounded-[28px] bg-[#121216] border border-white/10 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-3">
            Custom Requirements?
          </span>
          <h3 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-4">
            Request an Architectural Consultation
          </h3>
          <p className="text-sm text-[#A1A1AA] font-light max-w-xl mx-auto mb-8">
            Tell us about your project brief, timeline, and location. Our project directors will provide an upfront scope roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl"
            >
              Discuss Your Requirement →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
