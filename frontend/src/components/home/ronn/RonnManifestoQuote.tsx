'use client';

import { motion } from 'framer-motion';

export default function RonnManifestoQuote() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-[#0A0A0B] text-white py-24 md:py-36 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      <div className="max-w-[1480px] mx-auto">
        
        {/* Top Header Row with Index Tag */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12 md:mb-16">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
            01 / Our Signature
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A1A1AA]">
            BK Manifesto · Spec 2026
          </p>
        </div>

        {/* Center Editorial Quote Content */}
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Eyebrow Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-mono text-[#C5A880] mb-8"
          >
            Built for those who notice the details
          </motion.p>

          {/* Large Monumental Editorial Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-white font-light"
          >
            “Invest the space. Understand usage, anticipate needs, and <em className="font-serif italic font-normal text-[#C5A880]">commit fully</em> to creating high-performance, enduring commercial and retail environments.”
          </motion.blockquote>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 md:mt-12 text-sm sm:text-base text-[#A1A1AA] font-light max-w-2xl mx-auto leading-relaxed"
          >
            From strategic discovery to in-house manufacturing and precision on-site delivery, we bridge the gap between ambitious architecture and flawless turnkey execution.
          </motion.p>

          {/* Micro-spec tag row */}
          <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span>Spatial Strategy</span>
            <span className="text-[#C5A880]">/</span>
            <span>German Precision Milling</span>
            <span className="text-[#C5A880]">/</span>
            <span>Turnkey Handover</span>
          </div>

        </div>

      </div>
    </section>
  );
}
