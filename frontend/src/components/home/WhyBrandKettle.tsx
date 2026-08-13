'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Compass, BadgeCheck, Wallet, Users } from 'lucide-react';
import { whyCards } from '@/lib/data';

const ICONS = [Compass, BadgeCheck, Wallet, Users];

export default function WhyBrandKettle() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-20 md:py-28">
      <div className="container-px relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20 items-start">

          {/* Left: heading + copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-sm font-medium text-[#8a8378]">/ Why Brand Kettle?</span>

            <h2 className="mt-4 font-display text-[44px] sm:text-[52px] font-bold leading-[1.05] text-[#1a1410]">
              The Brand Kettle
              <br />
              Difference
            </h2>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#6b6459]">
              For over a decade, we&apos;ve been a proud design &amp; build partner, earning and
              maintaining the trust of developers, business owners and architects across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <a
                href="tel:+918959173799"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#8D7458]"
              >
                <span className="underline decoration-[#8D7458]/40 underline-offset-4">Call Now</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#8D7458]"
              >
                <span className="underline decoration-[#8D7458]/40 underline-offset-4">Book Free Estimate</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right: 2x2 icon list with dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-[#e5e0d8]">
            {[0, 1].map((col) => (
              <div key={col} className="divide-y divide-[#e5e0d8] sm:px-10 first:pl-0">
                {[whyCards[col * 2], whyCards[col * 2 + 1]].map((c, row) => {
                  if (!c) return null;
                  const Icon = ICONS[col * 2 + row];
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, delay: (col * 2 + row) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-5 py-7 first:pt-0 last:pb-0"
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#8D7458]/10">
                        <Icon className="h-5 w-5 text-[#8D7458]" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-[17px] font-bold text-[#1a1410]">{c.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#6b6459]">{c.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
