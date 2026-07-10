'use client';

import { motion } from 'framer-motion';
import { HardHat, Network, RefreshCw, MessageSquare, ArrowUpRight } from 'lucide-react';

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string; 
};

export default function Expertise({ services }: { services: Service[] | null }) {
  if (!services || !Array.isArray(services) || services.length === 0) return null;

  const icons = [HardHat, Network, RefreshCw, MessageSquare];

  return (
    <section className="relative bg-background py-[100px] lg:py-[140px] overflow-hidden">
      <div className="container-px mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold">
            O u r &nbsp; S e r v i c e s
          </span>
        </div>

        {/* Grid Layout matching the design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            // Shift the even columns down (index 1, 3, etc.) on large screens
            const isPushedDown = i % 2 !== 0;
            const Icon = icons[i % icons.length];

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col px-6 lg:px-8 py-10 lg:py-0 border-t lg:border-t-0 border-l border-line hover:bg-white/[0.02] transition-colors duration-500 ${
                  isPushedDown ? "lg:pt-24" : "lg:pb-24"
                }`}
              >
                {/* Icon (Gold Accent) */}
                <div className="mb-6 mt-4 lg:mt-0">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl text-ink mb-8 leading-tight font-display font-light tracking-wide transition-colors duration-300 pr-4">
                  {s.title}
                </h3>
                
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-surface rounded-2xl border border-line">
                  <img
                    src={s.image || `https://placehold.co/800x600/131317/8D7458?text=${s.title.split(" ").join("+")}`}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Description */}
                <div 
                  className="text-sm text-ink-secondary leading-relaxed mb-12 flex-grow prose prose-sm prose-p:text-ink-secondary prose-li:text-ink-secondary"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />

                {/* Arrow Button */}
                <div className="mt-auto pb-4 lg:pb-0">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink-muted group-hover:text-ink group-hover:border-ink transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
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

