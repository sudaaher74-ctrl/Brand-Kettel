'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Adjust this value (in seconds) to skip the sketch part at the beginning
  const SKIPPED_SECONDS = 3;

  // Handle switching from Video 1 (at 8 seconds) to Video 2
  const handleTimeUpdate1 = () => {
    if (activeVideo === 1 && video1Ref.current && video1Ref.current.currentTime >= 8) {
      setActiveVideo(2);
      if (video2Ref.current) {
        video2Ref.current.currentTime = 0;
        video2Ref.current.play().catch(() => {});
      }
    }
  };

  // Handle switching from Video 2 (when it ends) back to Video 1
  const handleVideo2Ended = () => {
    setActiveVideo(1);
    if (video1Ref.current) {
      video1Ref.current.currentTime = SKIPPED_SECONDS;
      video1Ref.current.play().catch(() => {});
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
        
        {/* Video 1 */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          onLoadedData={handleVideo1Loaded}
          onTimeUpdate={handleTimeUpdate1}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <source src="/imgs/homepage.mp4" type="video/mp4" />
        </video>

        {/* Video 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          onEnded={handleVideo2Ended}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <source src="/imgs/commercial/vedio.mp4" type="video/mp4" />
        </video>
        
      </div>

      {/* Subtle Overlay to blend with the next section */}
      <div className="absolute inset-0 bg-background/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
    </section>
  );
}
