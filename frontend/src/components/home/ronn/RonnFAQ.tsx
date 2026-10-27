'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    num: '01',
    q: 'What types of commercial spaces do you specialize in?',
    a: 'We specialize in turnkey commercial fit-outs including corporate offices, co-working hubs, high-end jewellery showrooms, luxury retail flagships, and boutique hospitality spaces. From bare-shell civil work to bespoke joinery and handover, we handle every stage.',
  },
  {
    num: '02',
    q: 'Do you manage all site execution in-house or outsource?',
    a: 'Our core strength is end-to-end single-point accountability. We manage our own architectural and spatial planning teams, an in-house joinery and furniture fabrication factory with German machinery, and dedicated on-site project managers. You deal with one reliable partner throughout.',
  },
  {
    num: '03',
    q: 'How do you deliver complex fast-track projects like PNG Jewellers in 27 days?',
    a: 'Fast-track execution relies on parallel processing: while on-site civil and MEP rough-ins are underway, all custom millwork, display counters, and joinery are prefabricated concurrently at our manufacturing facility. When the site is ready, installation is completed with clockwork precision.',
  },
  {
    num: '04',
    q: 'Can you fabricate bespoke furniture according to strict global brand guidelines?',
    a: 'Yes. We have fabricated bespoke fixtures and retail displays for world-renowned brands including Gucci, PNG Jewellers, and Giva. Our factory works with specialized metals, high-pressure laminates, solid wood, acoustic panels, and precision glass.',
  },
  {
    num: '05',
    q: 'Do you operate pan-India?',
    a: 'Yes. Headquartered with roots in Central India, we actively deliver turnkey commercial and retail projects in Mumbai, Delhi NCR, Hyderabad, Bengaluru, Bareilly, Indore, and tier-1/tier-2 hubs across India.',
  },
];

export default function RonnFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-24 md:py-36 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      <div className="max-w-[1480px] mx-auto">
        
        {/* Section Header Grid */}
        <div className="mb-16 md:mb-20 grid gap-8 lg:grid-cols-12 items-end border-b border-white/10 pb-8">
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
              07 / FAQ
            </p>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-[0.92] font-light tracking-tight text-white uppercase">
              Frequently Asked <br />
              <span className="font-serif italic font-normal text-[#C5A880] lowercase">questions.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 max-w-md lg:text-right">
            <p className="text-sm leading-relaxed text-[#A1A1AA] font-light">
              Clear answers regarding our turnkey commercial process, fast-track timelines, and in-house joinery manufacturing.
            </p>
          </div>
        </div>

        {/* Clean Architectural Accordion List */}
        <div className="max-w-5xl mx-auto border-t border-white/10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="border-b border-white/10 transition-colors hover:bg-white/[0.015]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-7 sm:py-8 flex items-center justify-between gap-6 select-none focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#C5A880] mt-0.5 sm:mt-0 font-medium">
                      {faq.num}
                    </span>
                    <span className="font-display font-light text-xl sm:text-2xl text-white tracking-wide leading-snug group-hover:text-[#C5A880] transition-colors">
                      {faq.q}
                    </span>
                  </div>

                  <span className="size-8 rounded-full border border-white/15 flex items-center justify-center font-mono text-xs text-white/70 group-hover:border-[#C5A880] group-hover:text-[#C5A880] shrink-0 transition-colors">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pl-8 sm:pl-12 pb-8 pr-4 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
