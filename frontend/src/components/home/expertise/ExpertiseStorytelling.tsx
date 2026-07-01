'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ExpertiseContent from './ExpertiseContent';
import ExpertiseImages from './ExpertiseImages';

export default function ExpertiseStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific 300vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-background" 
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Images Canvas (60%) */}
        <div className="relative w-full md:w-[60%] h-[50vh] md:h-full bg-surface2">
          {/* Subtle architectural grid background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 z-10"
            style={{
              backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute inset-0 z-0">
            <ExpertiseImages scrollProgress={scrollYProgress} />
          </div>
        </div>

        {/* Right Side: Expertise Content (40%) */}
        <div className="relative w-full md:w-[40%] h-[50vh] md:h-full bg-surface flex items-center shadow-[-20px_0_40px_rgba(0,0,0,0.5)] z-10 border-l border-line">
          
          {/* Section Eyebrow (Our Expertise) */}
          <div className="absolute top-8 md:top-12 left-8 md:left-16 lg:left-24 flex items-center gap-4 z-50">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-sm font-mono uppercase tracking-widest text-accent">Our Expertise</span>
          </div>

          <ExpertiseContent scrollProgress={scrollYProgress} />
        </div>

      </div>
    </section>
  );
}
