'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Compass, BadgeCheck, Wallet } from 'lucide-react';
import { whyCards } from '@/lib/data';

const ICONS = [Compass, BadgeCheck, Wallet];

export default function WhyBrandKettle() {
  const items = whyCards.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-px">
        {/* Visual: image + overlapping accent panel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Decorative bar */}
          <div className="absolute -top-6 left-[12%] h-6 w-40 rounded-t-md bg-accent sm:w-52" aria-hidden />

          {/* Nav arrows */}
          <span className="absolute left-0 top-1/2 z-20 hidden -translate-x-4 -translate-y-1/2 sm:block">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#e5e0d8] text-[#8a8378]">
              <ChevronLeft className="h-5 w-5" />
            </span>
          </span>
          <span className="absolute right-0 top-1/2 z-20 hidden translate-x-4 -translate-y-1/2 sm:block">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#e5e0d8] text-[#8a8378]">
              <ChevronRight className="h-5 w-5" />
            </span>
          </span>

          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-[6%] h-[88%] w-[60%] overflow-hidden rounded-2xl sm:w-[58%]"
            >
              <Image
                src="/imgs/commercial/gucci-green.png"
                alt="Brand Kettle — a signature project"
                fill
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-cover"
              />
            </motion.div>

            {/* "01" badge */}
            <div className="absolute bottom-0 left-[6%] z-20 grid h-16 w-16 -translate-y-2 place-items-center rounded-xl bg-accent text-xl font-bold text-[#1a1410] shadow-lg sm:h-20 sm:w-20 sm:text-2xl">
              01
            </div>

            {/* Accent panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-[82%] w-[58%] flex-col justify-center rounded-2xl bg-accent p-6 sm:w-[55%] sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold leading-tight text-[#1a1410] sm:text-3xl md:text-4xl">
                Why Choose Brand Kettle
              </h2>
              <p className="mt-4 hidden max-w-[38ch] text-[15px] leading-relaxed text-[#1a1410]/70 sm:block">
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
          </div>
        </div>

        {/* Dashed divider */}
        <div className="mx-auto mt-20 h-px w-10 border-t border-dashed border-[#c9c2b4] sm:mt-24" />

        {/* 3-column highlights */}
        <div className="mt-10 grid grid-cols-1 gap-12 text-center sm:grid-cols-3 sm:gap-8">
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
                <div className="grid h-16 w-16 place-items-center rounded-full bg-accent">
                  <Icon className="h-6 w-6 text-[#1a1410]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-[#1a1410]">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-[#6b6459]">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
