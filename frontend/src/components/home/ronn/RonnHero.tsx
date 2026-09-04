'use client';

import { useRef, useEffect, useState } from 'react';

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
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0A0A0B] flex items-center justify-center">
      {/* Background Media - Full Screen Edge-to-Edge like Process page */}
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

        {/* Subtle cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-black/30 pointer-events-none z-10" />
      </div>

      {/* Floating Bottom Bar: Live Showreel Badge (Left) + Scroll Cue (Center) + Sound Toggle (Right) */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 sm:px-12 flex items-center justify-between pointer-events-none">
        {/* Left Badge */}
        <div className="pointer-events-auto flex items-center gap-3 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-medium">
            Live Showreel
          </span>
          <span className="hidden sm:inline text-[11px] text-white/50 tracking-wider">
            Brand Kettle Fit-Outs
          </span>
        </div>

        {/* Center Scroll Indicator */}
        <div className="hidden md:flex flex-col items-center gap-1.5 text-center pointer-events-auto animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
            Scroll
          </span>
          <svg className="w-4 h-4 text-[#C5A880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Right Audio / Mute Toggle */}
        <button
          type="button"
          onClick={toggleMute}
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-[#C5A880] text-white hover:text-[#C5A880] flex items-center justify-center transition-all duration-300 shadow-xl"
          aria-label={isMuted ? 'Unmute showreel' : 'Mute showreel'}
          title={isMuted ? 'Click to unmute sound' : 'Click to mute sound'}
        >
          {isMuted ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
