'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function RonnHero() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isMuted, setIsMuted] = useState(true);

  // Skip the initial sketch sequence for immediate architectural impact
  const SKIPPED_SECONDS = 3;

  useEffect(() => {
    // Start playback
    if (video1Ref.current) {
      video1Ref.current.currentTime = SKIPPED_SECONDS;
      video1Ref.current.play().catch(() => {});
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

  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white pt-10 md:pt-14 pb-14 md:pb-20 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Top small greeting tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[#C5A880]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            Delighted,
          </span>
        </motion.div>

        {/* Main Grid: Headline Left + Video Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Giant Architectural Title & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <h1 className="font-display font-light text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] xl:text-[84px] leading-[1.0] tracking-[-0.01em] text-white uppercase">
              We rethink <br className="hidden sm:inline" />
              and craft your <br />
              <span className="font-normal italic font-serif text-[#C5A880]">workspaces</span> &amp; <br />
              interiors.
            </h1>

            <div className="mt-8 md:mt-10 max-w-xl">
              <p className="text-[16px] md:text-[18px] font-light leading-[1.7] text-[#A1A1AA] mb-8">
                Brand Kettle BuildSpaces designs, builds, and furnishes high-performance commercial offices, luxury jewellery showrooms, and retail environments across India — delivered completely turnkey.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/commercial-fit-outs"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A0A0B] hover:bg-[#C5A880] text-sm uppercase tracking-[0.14em] font-medium transition-all duration-300 group shadow-2xl"
                >
                  Focus on our expertise
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 hover:border-white hover:bg-white/5 text-white text-sm uppercase tracking-[0.14em] font-light transition-all duration-300"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Hero Video Frame with live showreel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-[24px] shadow-2xl border border-white/15 bg-[#121216]">
              {/* Video 1 (/imgs/homepage.mp4) */}
              <video
                ref={video1Ref}
                autoPlay
                muted={isMuted}
                playsInline
                preload="metadata"
                onLoadedData={handleVideo1Loaded}
                onTimeUpdate={handleTimeUpdate1}
                poster="/imgs/commercial/gucci-green.png"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <source src="/imgs/homepage.mp4" type="video/mp4" />
              </video>

              {/* Video 2 (/imgs/commercial/vedio.mp4) */}
              <video
                ref={video2Ref}
                muted={isMuted}
                playsInline
                preload="none"
                onEnded={handleVideo2Ended}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <source src="/imgs/commercial/vedio.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-20" />
              
              {/* Bottom badge on video */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/10 flex items-center justify-between z-30">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] block mb-0.5">Live Showreel</span>
                  <p className="text-sm font-light tracking-wide text-white">Brand Kettle Turnkey Fit-Outs</p>
                </div>

                {/* Interactive Audio / Mute toggle */}
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-[#C5A880] text-[#0A0A0B] flex items-center justify-center font-bold text-sm shrink-0 hover:scale-105 hover:bg-white transition-all duration-300 shadow-md"
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
            </div>

            {/* Decorative architectural geometry stamp */}
            <div className="hidden xl:flex absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#C5A880] text-[#0A0A0B] items-center justify-center p-3 text-center border-4 border-[#0A0A0B] shadow-2xl z-30">
              <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Turnkey Fit-Out</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
