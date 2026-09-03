'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function RonnHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white pt-10 md:pt-14 pb-14 md:pb-20 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Top small greeting tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[#C5A880]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            Delighted,
          </span>
        </motion.div>

        {/* Main Grid: Headline Left + Inset Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Giant Architectural Title & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <h1 className="font-display font-light text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] xl:text-[84px] leading-[1.0] tracking-[-0.01em] text-white uppercase">
              We rethink <br className="hidden sm:inline" />
              and craft your <br />
              <span className="font-normal italic font-serif text-[#C5A880]">workspaces</span> &amp; <br />
              interiors.
            </h1>

            <div className="mt-8 md:mt-10 max-w-xl">
              <p className="text-[16px] md:text-[18px] font-light leading-[1.7] text-[#A1A1AA] mb-8">
                Brand Kettle BuildSpaces designs, builds, and furnishes high-performance commercial offices, luxury jewellery showrooms, and retail environments across India — delivered completely turnkey.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/commercial-fit-outs"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A0A0B] hover:bg-[#C5A880] text-sm uppercase tracking-[0.14em] font-medium transition-all duration-300 group shadow-2xl"
                >
                  Focus on our expertise
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 hover:border-white hover:bg-white/5 text-white text-sm uppercase tracking-[0.14em] font-light transition-all duration-300"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Hero Image Frame with floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-[24px] shadow-2xl border border-white/15 bg-[#121216]">
              <Image
                src="/imgs/commercial/gucci-green.png"
                alt="Brand Kettle BuildSpaces flagship commercial interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom badge on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] block mb-0.5">Featured Showcase</span>
                  <p className="text-sm font-light tracking-wide text-white">Gucci Flagship Showroom · 3,500 sq ft</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-[#0A0A0B] flex items-center justify-center font-serif text-sm font-bold shrink-0">
                  ✦
                </span>
              </div>
            </div>

            {/* Decorative architectural geometry stamp */}
            <div className="hidden xl:flex absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#C5A880] text-[#0A0A0B] items-center justify-center p-3 text-center border-4 border-[#0A0A0B] shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Turnkey Fit-Out</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
