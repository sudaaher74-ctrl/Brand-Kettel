'use client';

import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-surface py-[120px] flex flex-col items-center">
      
      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 sm:mb-16"
      >
        <svg 
          className="w-6 h-6 text-ink-muted" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <div className="container-px text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink mb-10 tracking-[1px]"
        >
          Welcome to Brand Kettle
        </motion.h2>

        {/* First Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed max-w-4xl mb-8 font-light"
        >
          At Brand Kettle BuildSpaces, we bring together design, manufacturing and execution to create spaces that are built with intent. From retail stores and jewellery showrooms to workplaces and residences, we work closely with our clients to turn ideas into spaces that feel effortless, function beautifully and are made to last.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed max-w-3xl font-light"
        >
          Everything&apos;s born from the love of design. The solid vision, worked with the craftsmanship of those who know how to turn a concept into a piece of artwork.
        </motion.p>

      </div>
    </section>
  );
}
