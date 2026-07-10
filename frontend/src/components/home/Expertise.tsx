'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string; 
};

export default function Expertise({ services }: { services: Service[] | null }) {
  if (!services || !Array.isArray(services) || services.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-background py-[140px]">
      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Our expertise"
          title="Our Core Interior Solutions"
          subtitle="End-to-end interior solutions tailored to your space, your brand, and your lifestyle."
        />

        {/* Staggered Grid Layout matching the design */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-line">
          {services.map((s, i) => {
            // Shift the middle column down (index 1, 4, etc.)
            const isEven = i % 2 !== 0;

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col p-8 lg:p-10 border-b lg:border-b-0 border-line lg:border-r ${
                  (i + 1) % 3 === 0 ? "lg:border-r-0" : ""
                } ${
                  isEven ? "lg:pt-32" : "lg:pb-32"
                } hover:bg-white/[0.02] transition-colors duration-500`}
              >
                {/* Number & Tag */}
                <div className="mb-8 flex items-center justify-between">
                   <span className="flex items-center justify-center w-12 h-12 rounded-full border border-line text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-300 font-serif text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-ink-muted group-hover:text-accent transition-colors duration-300">
                    {s.tag}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-[24px] text-ink mb-8 leading-tight font-medium group-hover:text-accent transition-colors duration-300">
                  {s.title}
                </h3>
                
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-surface rounded-[20px] border border-line">
                  <img
                    src={s.image || `https://placehold.co/800x600/1E1E1E/C7A87D?text=${s.title.split(" ").join("+")}`}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                
                {/* Description (Renders the text and sub-services) */}
                <div 
                  className="text-small text-ink-secondary mb-12 flex-grow prose prose-sm prose-invert"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />

                {/* Arrow Button */}
                <div className="mt-auto">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink-muted group-hover:text-accent group-hover:border-accent transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
