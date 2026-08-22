'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    num: '01',
    category: 'Commercial Fit-Outs',
    name: 'COMMERCIAL\nFIT-OUTS',
    description:
      'Precision-designed commercial environments that drive performance, reinforce brand identity, and create lasting impressions for every visitor.',
    image: '/imgs/commercial/gucci-green.png',
    exploreHref: '/commercial-fit-outs',
    contactHref: '/contact',
  },
  {
    num: '02',
    category: 'Jewellery Showrooms',
    name: 'JEWELLERY\nSHOWROOMS',
    description:
      'Luxury retail environments built to showcase your collection with drama and precision — spaces that make every piece feel like the centrepiece.',
    image: '/imgs/commercial/jwellary.png',
    exploreHref: '/jewellery-showrooms',
    contactHref: '/contact',
  },
  {
    num: '03',
    category: 'Residential Interiors',
    name: 'RESIDENTIAL\nINTERIORS',
    description:
      'Living spaces crafted with warmth, flow, and your lifestyle at the centre — where every room is a reflection of who you are.',
];

const ROMAN_NUMERALS = ['I', 'II', 'III'];

export default function ProjectScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.psrv-card');
      const textContainers = gsap.utils.toArray<HTMLElement>('.psrv-text');
      
      const total = cards.length;
      if (total === 0) return;

      // Configuration
      const cardWidthVW = 30; // 30vw width for carousel items
      const cardSpacingVW = 40; // 40vw distance between card centers
      
      // Initial Setup
      gsap.set(cards, {
        width: `${cardWidthVW}vw`,
        height: '60vh',
        xPercent: -50,
        yPercent: -50,
        top: '50%',
        left: '50%',
        x: (i) => `${i * cardSpacingVW}vw`,
        zIndex: 1
      });

      gsap.set(textContainers, {
        opacity: 0,
        y: 30
      });

      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${total * 300}vh`, // Increased distance to slow down scrolling speed
          pin: true,
          scrub: 2, // Added more inertia for smoother scroll
          onUpdate: (self) => {
            // Calculate progress and update the roman numeral
            // The timeline spans from 0 to 1
            const currentIndex = Math.min(
              Math.floor(self.progress * total),
              total - 1
            );
            if (progressRef.current) {
              progressRef.current.innerText = ROMAN_NUMERALS[currentIndex] || `${currentIndex + 1}`;
            }
          }
        }
      });

      // Animation sequence
      for (let i = 0; i < total; i++) {
        
        // 1. Slide track if not first item
        if (i > 0) {
          tl.to(cards, {
            x: (index) => `${(index - i) * cardSpacingVW}vw`,
            duration: 1,
            ease: "power2.inOut"
          }, "+=0.2");
        }

        // 2. Expand current item to fullscreen
        tl.add(() => {
          // Adjust z-indexes when moving forwards
          cards.forEach(c => gsap.set(c, { zIndex: 1 }));
          gsap.set(cards[i], { zIndex: 10 });
        }, "-=0.1"); // Set zIndex right before expansion

        tl.to(cards[i], {
          width: '100vw',
          height: '100vh',
          duration: 1,
          ease: "power2.inOut"
        });

        // 3. Show text content
        tl.to(textContainers[i], {
          opacity: 1,
          y: 0,
          duration: 0.5
        }, "-=0.5");

        // 4. Hold
        tl.to({}, { duration: 1.5 });

        // 5. If not last item, hide text and shrink back down
        if (i < total - 1) {
          tl.to(textContainers[i], {
            opacity: 0,
            y: -30,
            duration: 0.5
          });

          tl.to(cards[i], {
            width: `${cardWidthVW}vw`,
            height: '60vh',
            duration: 1,
            ease: "power2.inOut"
          }, "-=0.2");
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black w-full h-screen overflow-hidden">
      
      <div ref={trackRef} className="absolute inset-0">
        {PROJECTS.map((project, i) => (
          <div
            key={project.num}
            className="psrv-card absolute overflow-hidden bg-zinc-900"
          >
            <Image
              src={project.image}
              alt={project.category}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
              priority={i === 0}
            />
            {/* Gradient overlay to ensure text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="psrv-text absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 pointer-events-none">
              <div className="w-full">
                
                <span className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] font-light text-white/70 mb-4 block">
                  {project.category}
                </span>

                <h2
                  className="font-display font-light text-white leading-[1.1] tracking-[0.02em] text-[40px] md:text-[70px] lg:text-[100px]"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {project.name}
                </h2>

                <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-8 items-start justify-between border-t border-white/20 pt-8 max-w-3xl">
                  <div className="max-w-md">
                    <h3 className="text-[12px] uppercase tracking-[0.2em] font-medium text-white mb-3">
                      Overview
                    </h3>
                    <p className="text-sm md:text-base font-light text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="pointer-events-auto shrink-0">
                    <Link
                      href={project.exploreHref}
                      className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-light text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Explore
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6 z-50 pointer-events-none">
        <span ref={progressRef} className="font-display text-xl md:text-2xl font-light text-white w-8 text-center">
          I
        </span>
        <span className="w-16 md:w-24 h-[1px] bg-white/40"></span>
        <span className="font-display text-xl md:text-2xl font-light text-white/40 w-8 text-center">
          III
        </span>
      </div>
      
    </div>
  );
}
