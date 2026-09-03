'use client';

import { motion } from 'framer-motion';

export default function RonnManifestoQuote() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-24 md:py-36 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-8"
        >
          <span>✦</span>
          <span>Our Signature</span>
          <span>✦</span>
        </motion.div>

        {/* Large Editorial Manifesto Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic text-[28px] sm:text-[40px] md:text-[50px] lg:text-[58px] leading-[1.25] text-white font-normal"
        >
          <span className="text-[#C5A880] font-sans mr-2">&ldquo;</span>
          Invest the space. Understand usage, anticipate needs, and commit fully to creating high-performance, enduring commercial and retail environments.
          <span className="text-[#C5A880] font-sans ml-2">&rdquo;</span>
        </motion.blockquote>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 md:mt-12 text-sm sm:text-base text-[#A1A1AA] font-light max-w-2xl mx-auto leading-relaxed"
        >
          From strategic discovery to in-house manufacturing and precision on-site delivery, we bridge the gap between ambitious architecture and flawless execution.
        </motion.p>

      </div>
    </section>
  );
}
