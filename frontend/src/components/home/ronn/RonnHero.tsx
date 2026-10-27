'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function RonnHero() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isMuted, setIsMuted] = useState(true);

  // Skip the initial sketch sequence for immediate architectural impact
  const SKIPPED_SECONDS = 3;

  useEffect(() => {
    // Initial play logic
    if (window.innerWidth < 768) {
      if (mobileVideoRef.current) mobileVideoRef.current.play().catch(() => {});
    } else {
      if (video1Ref.current) {
        video1Ref.current.currentTime = SKIPPED_SECONDS;
        video1Ref.current.play().catch(() => {});
      }
    }
  }, []);

  const handleTimeUpdate1 = () => {
    if (activeVideo === 1 && video1Ref.current && video1Ref.current.currentTime >= 8) {
      setActiveVideo(2);
      if (video2Ref.current) {
        video2Ref.current.currentTime = 0;
        video2Ref.current.play().catch(() => {});
      }
    }
  };

  const handleVideo2Ended = () => {
    setActiveVideo(1);
    if (video1Ref.current) {
      video1Ref.current.currentTime = SKIPPED_SECONDS;
      video1Ref.current.play().catch(() => {});
    }
  };

  const handleVideo1Loaded = () => {
    if (video1Ref.current) {
      video1Ref.current.currentTime = SKIPPED_SECONDS;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (video1Ref.current) video1Ref.current.muted = nextMuted;
    if (video2Ref.current) video2Ref.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  return (
    <section className="relative min-h-[780px] h-screen w-full overflow-hidden bg-[#0A0A0B] text-white flex flex-col justify-between">
      {/* Background Media - Full Screen Edge-to-Edge with video rotation */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Video (Hidden on Desktop) */}
        <video
          ref={mobileVideoRef}
          loop
          muted={isMuted}
          playsInline
          autoPlay
          preload="auto"
          poster="/imgs/commercial/gucci-green.png"
          className="h-full w-full object-cover md:hidden"
        >
          <source src="/imgs/commercial/mobileview.MP4" type="video/mp4" />
        </video>

        {/* Desktop Video 1 (Hidden on Mobile) */}
        <video
          ref={video1Ref}
          autoPlay
          muted={isMuted}
          playsInline
          preload="auto"
          onLoadedData={handleVideo1Loaded}
          onTimeUpdate={handleTimeUpdate1}
          poster="/imgs/commercial/gucci-green.png"
          className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <source src="/imgs/homepage.mp4" type="video/mp4" />
        </video>

        {/* Desktop Video 2 (Hidden on Mobile) */}
        <video
          ref={video2Ref}
          muted={isMuted}
          playsInline
          preload="metadata"
          onEnded={handleVideo2Ended}
          className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <source src="/imgs/commercial/vedio.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays (Toned to allow video clarity while keeping text razor-sharp) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-black/60 pointer-events-none z-10" />
      </div>

      {/* Giant Architectural Watermark (Akshat Reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[15%] overflow-hidden text-center font-display text-[20vw] lg:text-[24vw] font-black leading-none text-white/[0.035] select-none tracking-tight z-10"
      >
        BUILDSPACES
      </div>

      {/* Hero Foreground Content - Editorial Architectural Layout */}
      <div className="relative z-20 mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 pt-32 sm:pt-36 flex-1 flex flex-col justify-end pb-28 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left: Editorial Headline & Eyebrow */}
          <div className="lg:col-span-8 max-w-3xl">
            <p className="max-w-md border-l-2 border-[#C5A880] pl-4 text-[10px] font-semibold uppercase leading-5 tracking-[0.24em] text-[#C5A880]">
              Commercial Fit-Outs · Precision Manufacturing · Turnkey Execution
            </p>

            <h1 className="mt-6 text-5xl leading-[0.88] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white drop-shadow-sm">
              Spaces,<br />
              <em className="font-serif italic font-normal text-[#C5A880]">crafted</em> to an<br />
              exact standard.
            </h1>

            <p className="mt-6 max-w-xl text-sm sm:text-base leading-7 text-[#D4D4D8] font-light">
              Where sophisticated commercial architecture meets German precision engineering — turnkey environments for flagship luxury retail, corporate headquarters, and landmark hospitality across India.
            </p>
          </div>

          {/* Right: Detail Specification & Floating Explore Badge */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-6">
            {/* Technical Detail Card */}
            <div className="hidden sm:block text-left lg:text-right font-mono text-[10px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md p-4 border border-white/10">
              <p className="font-semibold text-white">Engineered for commerce</p>
              <p className="mt-1 text-[#A1A1AA]">Accuracy / Tolerance / Finish</p>
              <p className="mt-1 text-[#C5A880]">120+ Spaces Delivered Pan-India</p>
            </div>

            {/* Circular Floating Explore Stamp (Akshat Signature) */}
            <a
              href="#manifesto"
              aria-label="Scroll to manifesto"
              className="group size-24 sm:size-28 rounded-full flex flex-col items-center justify-center text-[10px] uppercase font-bold tracking-[0.2em] bg-[#C5A880] text-[#0A0A0B] shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <span>Explore</span>
              <ArrowDown className="size-4 mt-1 transition-transform group-hover:translate-y-1 text-[#0A0A0B]" />
            </a>
          </div>

        </div>
      </div>

      {/* Floating Bottom Bar: Live Showreel Badge (Left) + Scroll Cue (Center) + Sound Toggle (Right) */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#0A0A0B]/80 backdrop-blur-md px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between text-white">
        {/* Left Badge */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
            Live Showreel
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-white/50 tracking-wider">
            · Brand Kettle Turnkey Fit-Outs
          </span>
        </div>

        {/* Center Scroll Indicator */}
        <a
          href="#manifesto"
          className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C5A880] animate-bounce" />
        </a>

        {/* Right Audio / Mute Toggle */}
        <button
          type="button"
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-[#C5A880] text-white hover:text-[#C5A880] flex items-center justify-center transition-all duration-300"
          aria-label={isMuted ? 'Unmute showreel' : 'Mute showreel'}
          title={isMuted ? 'Click to unmute sound' : 'Click to mute sound'}
        >
          {isMuted ? (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
