'use client';

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
    <section className="relative overflow-hidden bg-[#F9F8F6] py-[140px]">
      <div className="container-px relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="uppercase tracking-[0.3em] text-[#888888] text-xs font-semibold">
            O u r &nbsp; S e r v i c e s
          </span>
        </div>

        {/* Staggered Grid Layout matching the design exactly */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#EAE9E4]">
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
                className={`group flex flex-col p-8 lg:p-10 border-b lg:border-b-0 border-[#EAE9E4] lg:border-r ${
                  (i + 1) % 3 === 0 ? "lg:border-r-0" : ""
                } ${
                  isEven ? "lg:pt-32" : "lg:pb-32"
                } hover:bg-black/[0.01] transition-colors duration-500`}
              >
                {/* Number & Tag (Red Accent) */}
                <div className="mb-8 flex items-center justify-between">
                   <span className="flex items-center text-[#9B2C3C] transition-colors duration-300 font-serif text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#9B2C3C] transition-colors duration-300">
                    {s.tag}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-[24px] text-[#1A1A1A] mb-8 leading-tight font-medium transition-colors duration-300">
                  {s.title}
                </h3>
                
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-[#EAE9E4] rounded-[20px]">
                  <img
                    src={s.image || `https://placehold.co/800x600/EAE9E4/9B2C3C?text=${s.title.split(" ").join("+")}`}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Description (Renders the text and sub-services in dark text) */}
                <div 
                  className="text-[14px] text-[#666666] mb-12 flex-grow prose prose-sm prose-p:text-[#666666] prose-li:text-[#666666]"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />

                {/* Arrow Button */}
                <div className="mt-auto">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D5D4D0] text-[#888888] group-hover:text-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
