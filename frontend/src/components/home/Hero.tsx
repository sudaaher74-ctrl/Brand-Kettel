'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      const tl = gsap.timeline();

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-btn',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.scroll-indicator',
          { opacity: 0 },
          { opacity: 0.7, duration: 1, ease: 'power2.out' },
          '-=0.5'
        );

      // Scroll indicator line animation
      gsap.fromTo(
        '.scroll-line',
        { y: -16, opacity: 0 },
        { y: 32, opacity: 1, duration: 1.5, repeat: -1, ease: 'power2.inOut' }
      );

      // Parallax effect on scroll
      gsap.to(videoRef.current, {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content fade out on scroll
      gsap.to(contentRef.current, {
        y: '-10%',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] w-full overflow-hidden bg-[#0F172A]"
    >
      {/* Video Background with Parallax */}
      <div className="absolute inset-0 h-[120%] -top-[10%] w-full" ref={videoRef}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/imgs/commercial/home1.png"
        >
          {/* Placeholder premium architecture video */}
          <source src="https://cdn.coverr.co/videos/coverr-modern-office-space-2615/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 40% Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20 z-10" />

      {/* Hero Content */}
      <div 
        ref={contentRef}
        className="relative z-20 flex h-full w-full items-center justify-center px-4 sm:px-8 lg:px-16"
      >
        <div className="flex w-full max-w-7xl flex-col items-center justify-center text-center">
          
          <div className="hero-eyebrow flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#C8A97E]" />
            <span className="text-xs sm:text-sm md:text-base font-semibold tracking-widest text-[#E5E7EB] uppercase">
              Premium Interior Design
            </span>
            <span className="h-[2px] w-8 bg-[#C8A97E]" />
          </div>

          <h1 className="hero-title max-w-5xl text-5xl font-medium leading-[1.1] tracking-tight text-[#FFFFFF] sm:text-6xl md:text-7xl lg:text-8xl">
            Designing Commercial <br className="hidden md:block" /> Spaces That Inspire
          </h1>

          <p className="hero-subtitle mt-6 max-w-2xl text-lg font-light leading-relaxed text-[#E5E7EB] sm:text-xl">
            Premium Interior Design, Fit-Out & Turnkey Solutions Across Navi Mumbai
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="hero-btn w-full sm:w-auto">
              <MagneticButton>
                <Link
                  href="/portfolio"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[#C8A97E] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#b09265] sm:w-auto"
                >
                  <span className="relative z-10">View Projects</span>
                </Link>
              </MagneticButton>
            </div>
            
            <div className="hero-btn w-full sm:w-auto">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-semibold tracking-wide text-[#FFFFFF] transition-all hover:bg-white/20 sm:w-auto"
                >
                  <span className="relative z-10">Get Consultation</span>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 z-20 -translate-x-1/2 hidden flex-col items-center gap-3 transition-opacity hover:opacity-100 sm:flex">
        <span className="text-[10px] font-medium tracking-[0.2em] text-white uppercase opacity-80">Scroll</span>
        <div className="flex h-12 w-[1px] items-start bg-white/20 overflow-hidden">
          <div className="scroll-line h-4 w-[1px] bg-white" />
        </div>
      </div>
    </section>
  );
}

