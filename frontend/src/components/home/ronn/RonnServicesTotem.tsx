'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    code: 'PHASE / 01',
    title: 'Strategy & Workspace Planning',
    description:
      'Before calculating square footage, we evaluate your business goals and operational flow. We analyze team circulation, acoustic needs, and growth projections to develop an objective, data-backed space plan.',
    deliverables: ['Spatial efficiency audit', 'Zoning & circulation plans', 'Budget & milestone roadmap', 'Feasibility assessment'],
    image: '/imgs/commercial/work co workspace.jpg',
    href: '/commercial-fit-outs',
  },
  {
    num: '02',
    code: 'PHASE / 02',
    title: 'Architecture & Interior Design',
    description:
      'Your physical space defines your brand authority. We craft environments that marry elevated brand aesthetics with functional precision — tailored lighting, bespoke textures, and acoustic treatments without losing sight of budget.',
    deliverables: ['Photorealistic 3D renders', 'Lighting & acoustic design', 'Material curation & moodboards', 'Detailed technical drawings'],
    image: '/imgs/commercial/gucci-green.png',
    href: '/retail-fit-outs',
  },
  {
    num: '03',
    code: 'PHASE / 03',
    title: 'Turnkey Fit-Out & Civil Execution',
    description:
      'From the first line of estimation to ribbon-cutting, we oversee the entire job site. MEP engineering, HVAC, firefighting, drywall, and luxury finishes — committed to fixed deadlines and snag-free handovers.',
    deliverables: ['End-to-end site management', 'HVAC, MEP & statutory compliance', 'Snag-free quality audits', 'On-time turnkey handover'],
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    href: '/process',
  },
  {
    num: '04',
    code: 'PHASE / 04',
    title: 'Custom Furniture & Bespoke Joinery',
    description:
      'In-house factory manufacturing gives us unmatched quality control and agility. We fabricate bespoke display cases for jewellery showrooms, modular workstations for corporate campuses, and custom hospitality joinery.',
    deliverables: ['In-house millwork & joinery', 'Modular workstations & storage', 'Luxury retail display counters', 'Commercial-grade finishes'],
    image: '/imgs/commercial/jwellary.png',
    href: '/custom-furniture',
  },
];

export default function RonnServicesTotem() {
  return (
    <section className="relative bg-[#0A0A0B] text-white py-24 md:py-36 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      <div className="max-w-[1480px] mx-auto">
        
        {/* Section Header Grid */}
        <div className="mb-16 md:mb-24 grid gap-8 lg:grid-cols-12 items-end border-b border-white/10 pb-8">
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
              04 / Disciplines
            </p>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-[0.92] font-light tracking-tight text-white uppercase">
              Our End-to-End <br />
              <span className="font-serif italic font-normal text-[#C5A880] lowercase">accompaniment.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 max-w-md lg:text-right">
            <p className="text-sm leading-relaxed text-[#A1A1AA] font-light">
              Four interconnected disciplines operating under one accountable team to guarantee engineering excellence from concept to ribbon-cutting.
            </p>
          </div>
        </div>

        {/* Stacked Service Panels (Totem style with Akshat architectural framing) */}
        <div className="space-y-12">
          {SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="sticky top-24 bg-[#121216] border border-white/15 p-7 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500 hover:border-[#C5A880]/60 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Index row */}
                    <div className="flex items-center gap-4 mb-5 pb-4 border-b border-white/10">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                        {srv.code}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="font-mono text-[9px] text-white/50 uppercase tracking-[0.18em]">
                        Turnkey Discipline
                      </span>
                    </div>

                    <h3 className="font-display font-light text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-5 group-hover:text-[#C5A880] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed mb-8">
                      {srv.description}
                    </p>

                    {/* Deliverables tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {srv.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-white/80 font-light">
                          <span className="w-1.5 h-1.5 bg-[#C5A880] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#0A0A0B] text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300"
                    >
                      <span>Explore this discipline</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Architectural Image */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50 border border-white/10">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-[#C5A880] border border-white/10">
                      FIG. {srv.num} · SPEC
                    </span>
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
