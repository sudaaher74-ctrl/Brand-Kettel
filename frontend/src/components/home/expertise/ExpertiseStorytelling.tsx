'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useScroll } from 'framer-motion';
import ExpertiseContent from './ExpertiseContent';

// Lazy load the 3D Scene to prevent SSR issues and optimize initial load
const ExpertiseScene = dynamic(() => import('./ExpertiseScene'), { ssr: false });

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
        
        {/* Left Side: Interactive 3D Canvas (60%) */}
        <div className="relative w-full md:w-[60%] h-[50vh] md:h-full bg-[#FAFAFA]">
          {/* Subtle architectural grid background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute inset-0 z-0">
            <ExpertiseScene scrollProgress={scrollYProgress} />
          </div>
        </div>

        {/* Right Side: Expertise Content (40%) */}
        <div className="relative w-full md:w-[40%] h-[50vh] md:h-full bg-white flex items-center shadow-[-20px_0_40px_rgba(0,0,0,0.03)] z-10 border-l border-line">
          <ExpertiseContent scrollProgress={scrollYProgress} />
        </div>

      </div>
    </section>
  );
}
