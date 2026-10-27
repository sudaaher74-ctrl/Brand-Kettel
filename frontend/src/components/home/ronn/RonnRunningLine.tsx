'use client';

import Image from 'next/image';
import Link from 'next/link';

const TICKER_PROJECTS = [
  {
    fig: 'FIG. 01',
    name: 'GUCCI FLAGSHIP',
    location: 'India',
    category: 'Luxury Retail',
    image: '/imgs/commercial/gucci-green.png',
    slug: 'gucci',
    scope: '3,500 SQ FT',
  },
  {
    fig: 'FIG. 02',
    name: 'PNG JEWELLERS',
    location: 'Goregaon, Mumbai',
    category: 'Jewellery Showroom',
    image: '/imgs/commercial/png1.jpg',
    slug: 'png',
    scope: '27 DAYS',
  },
  {
    fig: 'FIG. 03',
    name: 'HAVANA ROOFTOP',
    location: 'Ramada, Bareilly',
    category: 'Hospitality Lounge',
    image: '/imgs/commercial/Havana lounge1.jpg',
    slug: 'havana-lounge-bareilly',
    scope: '8,500 SQ FT',
  },
  {
    fig: 'FIG. 04',
    name: 'TAKSHA SPACES',
    location: 'Hyderabad',
    category: 'Commercial Floor',
    image: '/imgs/commercial/taksha coverimg.png',
    slug: 'taksha-hyderabad',
    scope: '475 SQ YD',
  },
  {
    fig: 'FIG. 05',
    name: 'GIVA JEWELLERY',
    location: 'India',
    category: 'Retail Store',
    image: '/imgs/commercial/giva.png',
    slug: 'giva',
    scope: '1,200 SQ FT',
  },
  {
    fig: 'FIG. 06',
    name: 'RAMADA ENCORE',
    location: 'Bareilly',
    category: 'Hotel & Suites',
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    slug: 'ramada-encore-bareilly',
    scope: '25,000 SQ FT',
  },
  {
    fig: 'FIG. 07',
    name: 'PRET A MANGER',
    location: 'Select City Walk, Delhi',
    category: 'F&B Retail Fit-Out',
    image: '/imgs/commercial/p080_111.jpg',
    slug: 'pret-a-manger-delhi',
    scope: '2,200 SQ FT',
  },
  {
    fig: 'FIG. 08',
    name: '&WORK CAMPUS',
    location: 'Faridabad',
    category: 'Workspace Interior',
    image: '/imgs/commercial/work co workspace.jpg',
    slug: 'and-work-faridabad',
    scope: '15,000 SQ FT',
  },
];

export default function RonnRunningLine() {
  const doubleList = [...TICKER_PROJECTS, ...TICKER_PROJECTS];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-16 md:py-20 border-b border-white/10 select-none">
      {/* Header Bar with Akshat Editorial Index */}
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10 mb-10 flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
            03 / Realizations
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            On The Ground / Delivered
          </span>
        </div>
        
        <Link
          href="/portfolio"
          className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors"
        >
          <span>View All Work</span>
          <span>→</span>
        </Link>
      </div>

      {/* Infinite Horizontal Running Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right gradient fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10" />

        <div className="flex w-fit animate-ronn-marquee hover:[animation-play-state:paused]">
          {doubleList.map((p, idx) => (
            <Link
              key={`${p.slug}-${idx}`}
              href={`/portfolio/${p.slug}`}
              className="group mx-3 flex-shrink-0 w-[300px] sm:w-[340px] bg-[#121216] border border-white/10 hover:border-[#C5A880] transition-all duration-300 block p-3 shadow-lg"
            >
              {/* Image thumbnail with FIG stamp */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-2.5 top-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-[#C5A880] border border-white/10">
                  {p.fig}
                </span>
                <span className="absolute bottom-2.5 right-2.5 bg-[#C5A880] text-[#0A0A0B] px-2 py-0.5 font-mono text-[8px] uppercase font-bold tracking-wider">
                  {p.scope}
                </span>
              </div>

              {/* Title & Location */}
              <div className="mt-3.5 flex items-start justify-between gap-2 px-1 pb-1">
                <div>
                  <h3 className="font-display font-medium text-sm text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-[#A1A1AA] font-light mt-0.5">{p.location}</p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 shrink-0">
                  {p.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ronn-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ronn-marquee {
          animation: ronn-marquee 48s linear infinite;
        }
      `}</style>
    </section>
  );
}
