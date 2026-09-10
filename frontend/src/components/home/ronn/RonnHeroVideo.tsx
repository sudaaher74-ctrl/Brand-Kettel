'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SKIPPED_SECONDS = 3;
const POSTER = '/imgs/hero-poster.webp';

/**
 * The hero showreel.
 *
 * Split out of RonnHero so the heading and CTA stay in server-rendered markup
 * and paint without waiting on any of this.
 *
 * Loading rules, in order of how much they cost an Indian mobile visitor:
 *  - Nothing is fetched until the component has hydrated AND the hero is
 *    actually in the viewport (preload="none" plus an IntersectionObserver).
 *  - On phones and on prefers-reduced-motion the video never loads at all;
 *    the poster image is the whole experience. Autoplaying ~1.5 MB of video on
 *    a mobile connection is the single most expensive thing this page could do.
 *  - The poster is a purpose-built 1280x720 WebP (~50 KB), not the 1.5 MB PNG
 *    project photo that used to sit on the LCP path.
 */
export default function RonnHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!wantsMotion || !isDesktop) return;

    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Start playback only once the element exists and has buffered something.
  useEffect(() => {
    if (!shouldLoad) return;
    const video = video1Ref.current;
    if (!video) return;
    video.load();
  }, [shouldLoad]);

  const handleVideo1Loaded = useCallback(() => {
    const video = video1Ref.current;
    if (!video) return;
    // Skip the opening sketch sequence.
    video.currentTime = SKIPPED_SECONDS;
    void video.play().catch(() => {});
  }, []);

  const handleTimeUpdate1 = useCallback(() => {
    if (activeVideo !== 1) return;
    const video = video1Ref.current;
    if (video && video.currentTime >= 8) {
      setActiveVideo(2);
      const next = video2Ref.current;
      if (next) {
        next.currentTime = 0;
        void next.play().catch(() => {});
      }
    }
  }, [activeVideo]);

  const handleVideo2Ended = useCallback(() => {
    setActiveVideo(1);
    const video = video1Ref.current;
    if (video) {
      video.currentTime = SKIPPED_SECONDS;
      void video.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (video1Ref.current) video1Ref.current.muted = nextMuted;
    if (video2Ref.current) video2Ref.current.muted = nextMuted;
  };

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 z-0">
        {/*
          The poster is a plain <img> rather than next/image: it is the LCP
          candidate and a static, already-optimised WebP, so going through the
          optimizer would only add a redirect and a cache miss on first paint.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER}
          alt="Luxury retail fit-out delivered by Brand Kettle BuildSpaces"
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />

        {shouldLoad && (
          <>
            <video
              ref={video1Ref}
              muted={isMuted}
              playsInline
              preload="none"
              poster={POSTER}
              onLoadedData={handleVideo1Loaded}
              onTimeUpdate={handleTimeUpdate1}
              aria-hidden="true"
              className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <source src="/imgs/homepage.mp4" type="video/mp4" />
            </video>

            <video
              ref={video2Ref}
              muted={isMuted}
              playsInline
              preload="none"
              onEnded={handleVideo2Ended}
              aria-hidden="true"
              className={`hidden md:block absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <source src="/imgs/commercial/vedio.mp4" type="video/mp4" />
            </video>
          </>
        )}

        {/* Cinematic gradient + a scrim dark enough to keep the headline legible. */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-black/60 pointer-events-none" />
      </div>

      {/* Sound toggle is only meaningful once a video is actually playing. */}
      {shouldLoad && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-8 right-6 sm:right-12 z-20 pointer-events-auto hidden md:flex w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-[#C5A880] text-white hover:text-[#C5A880] items-center justify-center transition-all duration-300 shadow-xl"
          aria-label={isMuted ? 'Unmute showreel' : 'Mute showreel'}
        >
          {isMuted ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
