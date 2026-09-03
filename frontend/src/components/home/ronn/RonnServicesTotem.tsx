'use client';

import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    title: 'STRATEGY & WORKSPACE PLANNING',
    description:
      'Before calculating square footage, we evaluate your organizational goals and daily usage. We analyze circulation, team dynamics, and business projections to create an objective, data-backed space layout.',
    deliverables: ['Spatial efficiency audit', 'Zoning & circulation plans', 'Budget & milestone roadmap', 'Feasibility assessment'],
    image: '/imgs/commercial/work co workspace.jpg',
    href: '/commercial-fit-outs',
  },
  {
    num: '02',
    title: 'ARCHITECTURE & INTERIOR DESIGN',
    description:
      'Your physical space defines who you are. We craft environments that marry elevated brand aesthetics with functional precision — tailored lighting, bespoke textures, and acoustic treatments without losing sight of budget.',
    deliverables: ['Photorealistic 3D renders', 'Lighting & acoustic design', 'Material curation & moodboards', 'Detailed technical drawings'],
    image: '/imgs/commercial/gucci-green.png',
    href: '/retail-fit-outs',
  },
  {
    num: '03',
    title: 'TURNKEY FIT-OUT & CIVIL EXECUTION',
    description:
      'From the first line of estimation to ribbon-cutting, we oversee the entire job site. MEP engineering, HVAC, fire-fighting, drywall, and finishes. Committed deadlines, strict safety codes, and guaranteed quality.',
    deliverables: ['End-to-end site management', 'HVAC, MEP & statutory compliance', 'Snag-free quality audits', 'On-time turnkey handover'],
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    href: '/process',
  },
  {
    num: '04',
    title: 'CUSTOM FURNITURE & BESPOKE JOINERY',
    description:
      'In-house factory manufacturing gives us unmatched quality control and agility. We fabricate bespoke display cases for jewellery showrooms, modular workstations for corporate campuses, and custom hospitality joinery.',
    deliverables: ['In-house millwork & joinery', 'Modular workstations & storage', 'Luxury retail display counters', 'High-durability commercial finishes'],
    image: '/imgs/commercial/jwellary.png',
    href: '/custom-furniture',
  },
];

export default function RonnServicesTotem() {
  return (
    <section className="relative bg-[#0A0A0B] text-white py-20 md:py-32 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A880] block mb-3">
              Full Spectrum Capability
            </span>
            <h2 className="font-display font-light text-[36px] sm:text-[48px] md:text-[64px] leading-[1.05] tracking-tight text-white uppercase">
              Our End-to-End <br />
              <span className="font-serif italic text-[#C5A880]">Accompaniment.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-light leading-relaxed">
            Four interconnected disciplines operating under one accountable team to guarantee quality from concept to delivery.
          </p>
        </div>

        {/* Stacked Service Panels (Totem style) */}
        <div className="space-y-12">
          {SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="sticky top-24 rounded-[28px] bg-[#121216] border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500 hover:border-[#C5A880]/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#C5A880] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        Phase {srv.num}
                      </span>
                      <span className="text-xs text-white/50 uppercase tracking-widest font-light">Turnkey Discipline</span>
                    </div>

                    <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide leading-tight mb-5">
                      {srv.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed mb-8">
                      {srv.description}
                    </p>

                    {/* Deliverables tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {srv.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs text-white/80 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#0A0A0B] hover:bg-[#C5A880] text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 group shadow-lg"
                    >
                      <span>Explore this discipline</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>

                {/* Right Architectural Image */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-black/50 border border-white/10">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
