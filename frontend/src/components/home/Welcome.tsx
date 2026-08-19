'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '8+', label: 'Years of Craft' },
  { value: '50+', label: 'Brands Served' },
  { value: '10+', label: 'Cities Across India' },
];

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-36">

      {/* Subtle background image — large project on right */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-0 h-full w-[55%] hidden md:block">
          <Image
            src="/imgs/commercial/gucci-green.png"
            alt=""
            fill
            sizes="55vw"
            className="object-cover opacity-[0.06]"
            aria-hidden
          />
          {/* Fade left so it bleeds into the text */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
        </div>
      </div>

      {/* Top gold line */}
      <div className="container-px mb-16 md:mb-24 relative">
        <div className="gold-line" />
      </div>

      <div className="container-px relative">

        {/* Manifesto grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-16 items-start">

          {/* Left: Index label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex flex-col items-start gap-3 pt-3"
          >
            <span className="font-display text-[72px] font-light leading-none text-accent/20 select-none">01</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink-muted font-light mt-2">Studio</span>
          </motion.div>

          {/* Centre: Big statement headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <h2 className="font-display font-light text-white leading-[1.0] tracking-[0.02em] text-[44px] md:text-[64px] lg:text-[80px]">
              Design.<br />
              Build.<br />
              <span className="text-accent italic">Deliver.</span>
            </h2>
          </motion.div>

          {/* Right: Body copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:max-w-[320px] pt-3"
          >
            <p className="text-body-main mb-6">
              At Brand Kettle BuildSpaces, we bring together design, manufacturing and execution to create spaces built with intent — from retail stores and jewellery showrooms to workplaces and residences.
            </p>
            <p className="text-small text-ink-muted mb-8">
              Everything is born from the love of design. The solid vision, worked with the craftsmanship of those who know how to turn a concept into a piece of artwork.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-light text-accent hover:text-white transition-colors duration-300 group"
            >
              View Our Story
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M17 7H7m10 0v10" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px border border-line/40"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center py-8 px-4 border border-line/20 bg-surface/60"
            >
              <span className="font-display text-[42px] md:text-[52px] font-light leading-none text-white">
                {stat.value}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.3em] font-light text-ink-muted text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom gold line */}
      <div className="container-px mt-16 md:mt-24 relative">
        <div className="gold-line" />
      </div>

    </section>
  );
}
