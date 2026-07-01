'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useScroll } from 'framer-motion';
import Overlay from './Overlay';

// Lazy load the 3D Scene to prevent SSR issues and optimize initial load
const Scene = dynamic(() => import('./Scene'), { ssr: false });

export default function BlueprintExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific 600vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#FAFAFA]" 
      style={{ height: '600vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The 3D WebGL Canvas */}
        <div className="absolute inset-0 z-0">
          <Scene scrollProgress={scrollYProgress} />
        </div>
        
        {/* The HTML Overlay for GSAP-driven text reveals */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Overlay scrollProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
