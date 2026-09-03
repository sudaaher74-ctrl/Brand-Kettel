'use client';

import Image from 'next/image';
import Link from 'next/link';

const TICKER_PROJECTS = [
  {
    name: 'GUCCI',
    location: 'India',
    category: 'Luxury Retail',
    image: '/imgs/commercial/gucci-green.png',
    slug: 'gucci',
  },
  {
    name: 'PNG JEWELLERS',
    location: 'Goregaon, Mumbai',
    category: 'Jewellery Showroom · 27 Days',
    image: '/imgs/commercial/png1.jpg',
    slug: 'png',
  },
  {
    name: 'TAKSHA',
    location: 'Hyderabad',
    category: 'Commercial Spaces',
    image: '/imgs/commercial/taksha coverimg.png',
    slug: 'taksha-hyderabad',
  },
  {
    name: 'GIVA',
    location: 'India',
    category: 'Jewellery Retail',
    image: '/imgs/commercial/giva.png',
    slug: 'giva',
  },
  {
    name: 'HAVANA LOUNGE',
    location: 'Bareilly',
    category: 'Hospitality Rooftop',
    image: '/imgs/commercial/Havana lounge1.jpg',
    slug: 'havana-lounge-bareilly',
  },
  {
    name: 'RAMADA ENCORE',
    location: 'Bareilly',
    category: 'Hospitality & Suites',
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    slug: 'ramada-encore-bareilly',
  },
  {
    name: 'PRET A MANGER',
    location: 'Select City Walk, Delhi',
    category: 'F&B Retail Fit-Out',
    image: '/imgs/commercial/p080_111.jpg',
    slug: 'pret-a-manger-delhi',
  },
  {
    name: '&WORK CO-WORKING',
    location: 'Faridabad',
    category: 'Workspace Interior',
    image: '/imgs/commercial/work co workspace.jpg',
    slug: 'and-work-faridabad',
  },
];

export default function RonnRunningLine() {
  const doubleList = [...TICKER_PROJECTS, ...TICKER_PROJECTS];

  return (
    <section className="relative overflow-hidden bg-[#070708] text-white py-10 md:py-14 border-b border-white/10 select-none">
      {/* Header with decorative arrows */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-8 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] flex items-center gap-2">
          <span>↓</span>
          <span>ON THE GROUND / DELIVERED</span>
        </span>
        <span className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white/50">
          <span>Selected Turnkey Projects</span>
          <span>→</span>
        </span>
      </div>

      {/* Infinite Horizontal Running Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right gradient fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070708] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070708] to-transparent z-10" />

        <div className="flex w-fit animate-ronn-marquee hover:[animation-play-state:paused]">
          {doubleList.map((p, idx) => (
            <Link
              key={`${p.slug}-${idx}`}
              href={`/portfolio/${p.slug}`}
              className="group mx-3 flex-shrink-0 w-[280px] sm:w-[320px] rounded-[20px] bg-[#121216] p-3 border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 hover:shadow-2xl block"
            >
              {/* Image thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-black/40">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & City tag */}
              <div className="mt-3.5 flex items-start justify-between gap-2 px-1">
                <div>
                  <h3 className="font-display font-medium text-sm sm:text-base text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-white/50 mt-0.5">{p.location}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-medium shrink-0">
                  {p.category.split('·')[0]}
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
          animation: ronn-marquee 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
