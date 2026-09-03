'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FEATURED_HERO = {
  name: 'GUCCI SHOWROOM',
  category: 'Luxury Retail',
  location: 'India',
  area: '3,500 sq ft',
  year: '2023',
  image: '/imgs/commercial/gucci-green.png',
  slug: 'gucci',
  blurb: 'A benchmark in luxury retail craftsmanship. Every custom fixture, ambient illumination, and bespoke millwork reflects the exacting standards of the iconic house.',
};

const SUB_PROJECTS = [
  {
    name: 'PNG JEWELLERS',
    category: 'Jewellery Showroom',
    location: 'Goregaon, Mumbai',
    area: '3,400 sq ft',
    timeline: 'Delivered in 27 Days',
    image: '/imgs/commercial/png1.jpg',
    slug: 'png',
  },
  {
    name: 'HAVANA LOUNGE',
    category: 'Hospitality Rooftop',
    location: 'Ramada Hotel, Bareilly',
    area: '8,500 sq ft',
    timeline: 'Complete Fit-Out',
    image: '/imgs/commercial/Havana lounge1.jpg',
    slug: 'havana-lounge-bareilly',
  },
  {
    name: 'TAKSHA BUILDER FLOOR',
    category: 'Commercial Spaces',
    location: 'Hyderabad',
    area: '475 sq yd',
    timeline: 'Turnkey Luxury',
    image: '/imgs/commercial/taksha coverimg.png',
    slug: 'taksha-hyderabad',
  },
  {
    name: 'GIVA JEWELLERY',
    category: 'Retail Store',
    location: 'India',
    area: '1,200 sq ft',
    timeline: 'Fast-Track Fit-Out',
    image: '/imgs/commercial/giva.png',
    slug: 'giva',
  },
];

export default function RonnProjects() {
  return (
    <section className="relative overflow-hidden bg-[#070708] text-white py-20 md:py-32 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A880] block mb-2">
              Selected Work
            </span>
            <h2 className="font-display font-light text-[36px] sm:text-[48px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
              Our <br />
              <span className="font-serif italic font-normal text-[#C5A880]">Realizations.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors"
          >
            <span>View All Realizations</span>
            <span>→</span>
          </Link>
        </div>

        {/* 1. Large Hero Feature Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 rounded-[28px] bg-[#121216] overflow-hidden border border-white/15 shadow-2xl group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image side */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[360px] lg:min-h-[500px] overflow-hidden bg-black/60">
              <Image
                src={FEATURED_HERO.image}
                alt={FEATURED_HERO.name}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            {/* Info side */}
            <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between bg-[#121216]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-black">
                    {FEATURED_HERO.category}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{FEATURED_HERO.location}</span>
                </div>

                <h3 className="font-display font-medium text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4 group-hover:text-[#C5A880] transition-colors">
                  {FEATURED_HERO.name}
                </h3>

                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed mb-6">
                  {FEATURED_HERO.blurb}
                </p>

                <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-white/80">
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-white/50">Area</span>
                    <span className="text-white">{FEATURED_HERO.area}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-white/50">Scope</span>
                    <span className="text-white">Full Turnkey Fit-Out</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={`/portfolio/${FEATURED_HERO.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors"
                >
                  <span>Discover Project</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Grid of 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SUB_PROJECTS.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] bg-[#121216] overflow-hidden border border-white/10 hover:border-[#C5A880]/50 shadow-xl group flex flex-col justify-between transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display font-medium text-xl text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white/50 mt-1">
                    {item.location} · <span className="text-[#C5A880] font-medium">{item.timeline}</span>
                  </p>
                </div>

                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black text-xs transition-all duration-300 shrink-0 text-white"
                  aria-label={`View ${item.name}`}
                >
                  →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-[#C5A880] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-2xl"
          >
            <span>Explore all portfolio projects</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
