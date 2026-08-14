'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, BadgeCheck, Wallet } from 'lucide-react';
import { whyCards } from '@/lib/data';

const ICONS = [Compass, BadgeCheck, Wallet];

export default function WhyBrandKettle() {
  const items = whyCards.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="container-px">
        {/* Text + compact image */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block h-1.5 w-14 rounded-full bg-accent" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#1a1410] sm:text-4xl md:text-[42px]">
              Why Choose Brand Kettle
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#6b6459]">
              We bring together design, manufacturing and execution — earning the trust of
              developers, business owners and architects across India.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex w-fit items-center border border-[#1a1410]/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#1a1410] transition-colors hover:bg-[#1a1410] hover:text-white"
            >
              Start Now
            </Link>
          </motion.div>

          {/* Right: compact image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto w-full max-w-[280px] sm:max-w-xs"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/imgs/commercial/gucci-green.png"
                alt="Brand Kettle — a signature project"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 z-20 grid h-12 w-12 place-items-center rounded-lg bg-accent text-base font-bold text-[#1a1410] shadow-lg">
              01
            </div>
          </motion.div>
        </div>

        {/* Dashed divider */}
        <div className="mx-auto mt-10 h-px w-10 border-t border-dashed border-[#c9c2b4] sm:mt-12" />

        {/* 3-column highlights */}
        <div className="mt-8 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8">
          {items.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-accent">
                  <Icon className="h-5 w-5 text-[#1a1410]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-[#1a1410]">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-[#6b6459]">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
