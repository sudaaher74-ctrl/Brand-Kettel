'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'What types of commercial spaces do you specialize in?',
    a: 'We specialize in turnkey commercial fit-outs including corporate offices, co-working hubs, high-end jewellery showrooms, luxury retail flagships, and boutique hospitality spaces. From bare-shell civil work to bespoke joinery and handover, we handle every stage.',
  },
  {
    q: 'Do you manage all site execution in-house or outsource?',
    a: 'Our strength is end-to-end single-point accountability. We manage our own architectural and spatial planning teams, in-house joinery and furniture fabrication factory, and dedicated site project managers. You deal with one reliable partner throughout.',
  },
  {
    q: 'How do you deliver complex fast-track projects like PNG Jewellers in 27 days?',
    a: 'Fast-track execution relies on parallel processing: while on-site civil and MEP rough-ins are underway, all custom millwork, display counters, and joinery are prefabricated concurrently at our manufacturing facility. When the site is ready, installation is completed with clockwork precision.',
  },
  {
    q: 'Can you fabricate bespoke furniture according to strict global brand guidelines?',
    a: 'Yes. We have fabricated bespoke fixtures and retail displays for world-renowned brands including Gucci, PNG Jewellers, and Giva. Our factory works with specialized metals, high-pressure laminates, solid wood, acoustic panels, and precision glass.',
  },
  {
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
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-20 md:py-32 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A880] block mb-3">
            Clarity &amp; Transparency
          </span>
          <h2 className="font-display font-light text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] tracking-tight uppercase text-white">
            Frequently Asked <br />
            <span className="font-serif italic font-normal text-[#C5A880]">Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-[20px] bg-[#121216] border border-white/10 hover:border-[#C5A880]/40 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 select-none focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-lg sm:text-xl text-white tracking-wide uppercase leading-snug group-hover:text-[#C5A880] transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#181820] text-white flex items-center justify-center font-bold text-sm shrink-0 border border-white/10 transition-transform duration-300">
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
                      <div className="px-6 pb-8 sm:px-8 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed border-t border-white/10 pt-4">
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
