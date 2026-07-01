'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bgImages = [
  '/imgs/commercial/jwellary.png',
  '/imgs/commercial/gucci.png',
  '/imgs/commercial/home1.png',
  '/imgs/commercial/brandkettle4.jpg'
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

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

      // Background Slideshow Animation (Video-like Ken Burns effect)
      const slides = gsap.utils.toArray('.bg-slide') as HTMLElement[];
      
      if (slides.length > 1) {
        // Initialize all slides
        gsap.set(slides, { opacity: 0, scale: 1, zIndex: 1 });
        gsap.set(slides[0] as HTMLElement, { opacity: 1, zIndex: 2 });
        
        const slideTl = gsap.timeline({ repeat: -1 });
        
        slides.forEach((slide: HTMLElement, i) => {
          const nextIndex = (i + 1) % slides.length;
          const nextSlide = slides[nextIndex] as HTMLElement;
          
          slideTl
            // Pan and scale the current slide slowly
            .to(slide, {
              scale: 1.15,
              duration: 5,
              ease: 'none',
            })
            // Prepare next slide to be on top and fade it in
            .set(nextSlide, { zIndex: 3 })
            .to(nextSlide, {
              opacity: 1,
              duration: 1.5,
              ease: 'power2.inOut',
            }, '-=1.5')
            // Reset the old slide once the crossfade is done
            .set(slide, {
              opacity: 0,
              scale: 1,
              zIndex: 1
            })
            // Update nextSlide to be the new active background layer
            .set(nextSlide, { zIndex: 2 });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] w-full overflow-hidden bg-[#0F172A]"
    >
      {/* Animated Image Slideshow Background with Parallax */}
      <div className="absolute inset-0 h-[120%] -top-[10%] w-full" ref={videoWrapperRef}>
        {bgImages.map((src, index) => (
          <div 
            key={src} 
            className="bg-slide absolute inset-0 h-full w-full will-change-transform"
            style={{ zIndex: index === 0 ? 2 : 1 }}
          >
            <Image
              src={src}
              alt={`Brand Kettle Commercial Project ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Subtle Overlay to blend with the next section */}
      <div className="absolute inset-0 bg-[#0F172A]/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
    </section>
  );
}
