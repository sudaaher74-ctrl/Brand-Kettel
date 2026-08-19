'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(videoWrapperRef.current, {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade out headline as user scrolls away
      gsap.to(headlineRef.current, {
        opacity: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '30% top',
          scrub: true,
        },
      });
    }, containerRef);

    // Initial play logic to save bandwidth
    const playCorrectVideo = () => {
      if (window.innerWidth < 768) {
        if (mobileVideoRef.current) mobileVideoRef.current.play().catch(() => {});
      } else {
        if (video1Ref.current) video1Ref.current.play().catch(() => {});
      }
    };
    playCorrectVideo();

    return () => ctx.revert();
  }, []);

  // Adjust this value (in seconds) to skip the sketch part at the beginning
  const SKIPPED_SECONDS = 3;

  // Handle switching from Video 1 (at 8 seconds) to Video 2
  const handleTimeUpdate1 = () => {
    if (window.innerWidth >= 768 && activeVideo === 1 && video1Ref.current && video1Ref.current.currentTime >= 8) {
      setActiveVideo(2);
      if (video2Ref.current) {
        video2Ref.current.currentTime = 0;
        video2Ref.current.play().catch(() => {});
      }
    }
  };

  // Handle switching from Video 2 (when it ends) back to Video 1
  const handleVideo2Ended = () => {
    if (window.innerWidth >= 768) {
      setActiveVideo(1);
      if (video1Ref.current) {
        video1Ref.current.currentTime = SKIPPED_SECONDS;
        video1Ref.current.play().catch(() => {});
      }
    }
  };

  // Set the start time when the video first loads
  const handleVideo1Loaded = () => {
    if (video1Ref.current) {
      video1Ref.current.currentTime = SKIPPED_SECONDS;
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Video Background with Parallax */}
      <div className="absolute inset-0 h-[120%] -top-[10%] w-full" ref={videoWrapperRef}>
        
        {/* Mobile Video (Hidden on Desktop) */}
        <video
          ref={mobileVideoRef}
          preload="none"
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        >
          <source src="/imgs/commercial/mobileview.MP4" type="video/mp4" />
        </video>

        {/* Desktop Video 1 (Hidden on Mobile) */}
        <video
          ref={video1Ref}
          preload="none"
          muted
          playsInline
          onLoadedData={handleVideo1Loaded}
          onTimeUpdate={handleTimeUpdate1}
          className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <source src="/imgs/homepage.mp4" type="video/mp4" />
        </video>

        {/* Desktop Video 2 (Hidden on Mobile) */}
        <video
          ref={video2Ref}
          preload="none"
          muted
          playsInline
          onEnded={handleVideo2Ended}
          className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <source src="/imgs/commercial/vedio.mp4" type="video/mp4" />
        </video>
        
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/10 z-10 pointer-events-none" />
      {/* Strong bottom fade — blends hero into the next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg) 0%, var(--bg) 5%, color-mix(in srgb, var(--bg) 60%, transparent) 25%, transparent 55%)' }} />
      {/* Top vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Vertical SCROLL DOWN — left */}
      <div className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3 pointer-events-none">
        <span
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
          className="text-[10px] uppercase font-light text-white/40 tracking-[0.3em] rotate-180 select-none"
        >
          Scroll Down
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-white/0 to-white/30" />
      </div>

      {/* Vertical SCROLL DOWN — right */}
      <div className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3 pointer-events-none">
        <span className="h-16 w-px bg-gradient-to-b from-white/0 to-white/30" />
        <span
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
          className="text-[10px] uppercase font-light text-white/40 tracking-[0.3em] select-none"
        >
          Scroll Down
        </span>
      </div>

      {/* Hero Headline + CTA — z-20 so it sits above overlays */}
      <div
        ref={headlineRef}
        className="absolute inset-x-0 top-0 z-20 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <span className="eyebrow justify-center text-white/70 mb-8">
          <span className="h-px w-6 bg-accent" />
          Commercial Fit-Out &amp; Interior Design
        </span>

        <h1 className="font-display font-light tracking-[0.03em] leading-[1.05] text-white text-[40px] md:text-[58px] lg:text-[72px] max-w-4xl">
          Spaces That Feel
          <br />
          <span className="text-accent italic font-light">Like Dreams.</span>
        </h1>

        <p className="text-subtitle mt-8 max-w-xl text-white/60">
          Premium design, build &amp; furnish solutions for offices, retail stores,
          jewellery showrooms and hospitality across India.
        </p>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/portfolio" className="btn">
            View Our Work
          </Link>
          <Link href="/contact" className="btn">
            Start a Project
          </Link>
        </div>

        {/* Bottom scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

