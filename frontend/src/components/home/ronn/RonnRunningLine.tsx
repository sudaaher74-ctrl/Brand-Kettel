'use client';

import Image from 'next/image';
import Link from 'next/link';

const TICKER_PROJECTS = [
  {
    name: 'GUCCI',
    location: 'India',
    category: 'Luxury Retail',
    image: '/imgs/commercial/gucci-green.webp',
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
    image: '/imgs/commercial/taksha-hyderabad-cover.webp',
    slug: 'taksha-hyderabad',
  },
  {
    name: 'GIVA',
    location: 'India',
    category: 'Jewellery Retail',
    image: '/imgs/commercial/giva.webp',
    slug: 'giva',
  },
  {
    name: 'HAVANA LOUNGE',
    location: 'Bareilly',
    category: 'Hospitality Rooftop',
    image: '/imgs/commercial/havana-lounge-bareilly-1.jpg',
    slug: 'havana-lounge-bareilly',
  },
  {
    name: 'RAMADA ENCORE',
    location: 'Bareilly',
    category: 'Hospitality & Suites',
    image: '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
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
    image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
    slug: 'and-work-faridabad',
  },
];

/**
 * One marquee card. `clone` marks the duplicated track: a CSS marquee needs a
 * second copy of the strip to loop seamlessly, but that copy must not be a
 * second set of links for a screen reader or the keyboard, and its images must
 * never compete with the first track for bandwidth.
 */
function TickerCard({ project, clone }: { project: (typeof TICKER_PROJECTS)[number]; clone?: boolean }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      tabIndex={clone ? -1 : undefined}
      aria-hidden={clone || undefined}
      className="group mx-3 flex-shrink-0 w-[280px] sm:w-[320px] rounded-[20px] bg-[#121216] p-3 border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 hover:shadow-2xl block"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-black/40">
        <Image
          src={project.image}
          alt={clone ? '' : project.name}
          fill
          // Cards are a fixed 280/320px wide, so never request more than that.
          sizes="(max-width: 640px) 280px, 320px"
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-2 px-1">
        <div>
          <h3 className="font-display font-medium text-sm sm:text-base text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-white/50 mt-0.5">{project.location}</p>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-medium shrink-0">
          {project.category.split('\u00b7')[0]}
        </span>
      </div>
    </Link>
  );
}

export default function RonnRunningLine() {
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

        <div className="flex w-fit animate-ronn-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {/* Real track: the eight projects, once. */}
          <div className="flex">
            {TICKER_PROJECTS.map((p) => (
              <TickerCard key={p.slug} project={p} />
            ))}
          </div>
          {/*
            Seam filler. Identical markup so the -50% translate lands exactly on
            the start of the real track, but hidden from assistive technology
            and out of the tab order, so eight projects are announced, not
            sixteen. Both tracks share image URLs, so the duplicate costs no
            extra network requests.
          */}
          <div className="flex" aria-hidden="true">
            {TICKER_PROJECTS.map((p) => (
              <TickerCard key={`clone-${p.slug}`} project={p} clone />
            ))}
          </div>
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
