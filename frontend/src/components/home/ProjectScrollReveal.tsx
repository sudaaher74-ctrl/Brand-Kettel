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
    name: 'Commercial\nFit-Outs',
    description:
      'Precision-designed commercial environments that drive performance, reinforce brand identity, and create lasting impressions for every visitor.',
    image: '/imgs/commercial/gucci-green.png',
    exploreHref: '/commercial-fit-outs',
    contactHref: '/contact',
  },
  {
    num: '02',
    category: 'Jewellery Showrooms',
    name: 'Jewellery\nShowrooms',
    description:
      'Luxury retail environments built to showcase your collection with drama and precision — spaces that make every piece feel like the centrepiece.',
    image: '/imgs/commercial/jwellary.png',
    exploreHref: '/jewellery-showrooms',
    contactHref: '/contact',
  },
  {
    num: '03',
    category: 'Residential Interiors',
    name: 'Residential\nInteriors',
    description:
      'Living spaces crafted with warmth, flow, and your lifestyle at the centre — where every room is a reflection of who you are.',
    image: '/imgs/commercial/home1.png',
    exploreHref: '/residential-interiors',
    contactHref: '/contact',
  },
];

export default function ProjectScrollReveal() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.stacked-panel');
      const totalPanels = panels.length;

      // Pin the stack container for (n-1) full viewport heights
      ScrollTrigger.create({
        trigger: stackRef.current,
        start: 'top top',
        end: () => `+=${(totalPanels - 1) * window.innerHeight}`,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      });

      // Each panel (except the first) starts below viewport and slides up
      panels.forEach((panel, i) => {
        if (i === 0) return;

        gsap.set(panel, { yPercent: 100 });

        gsap.to(panel, {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: stackRef.current,
            start: () => `top+=${(i - 1) * window.innerHeight} top`,
            end: () => `top+=${i * window.innerHeight} top`,
            scrub: 1,
          },
        });
      });

      // Fade out the "Our Expertise" overlay as the second panel slides in
      const expertiseOverlay = document.querySelector('.psrv-expertise-overlay');
      if (expertiseOverlay) {
        gsap.to(expertiseOverlay, {
          opacity: 0,
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: stackRef.current,
            start: 'top top',
            end: () => `+=${window.innerHeight * 0.4}`,
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-background">
      {/* Stack container — overflow-hidden clips sliding panels */}
      <div
        ref={stackRef}
        className="relative w-full overflow-hidden"
        style={{ height: '100vh' }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={project.num}
            className="stacked-panel absolute inset-0 w-full h-full"
            style={{ zIndex: i + 1 }}
          >
            {/* Full-bleed background image */}
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.category}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* "Our Expertise" header — only on first panel, fades out on scroll */}
            {i === 0 && (
              <div className="psrv-expertise-overlay absolute top-10 left-8 md:left-16 lg:left-24 z-20">
                <span className="eyebrow">
                  <span className="h-px w-6 bg-accent" />
                  Our Expertise
                </span>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] font-light text-white/30">
                  Spaces designed for <span className="text-accent/70">every vision</span>
                </p>
              </div>
            )}

            {/* Text content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                {project.category}
              </p>

              <h2
                className="mt-6 font-display font-light text-white leading-[1.05] tracking-[0.02em] text-[36px] md:text-[48px] lg:text-[60px]"
                style={{ whiteSpace: 'pre-line' }}
              >
                {project.name}
              </h2>

              <p className="mt-6 text-body-main max-w-[400px]">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={project.exploreHref}
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-light text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Explore Solutions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
                <Link
                  href={project.contactHref}
                  className="inline-flex items-center gap-2 border border-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-light text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Large number watermark */}
            <div className="absolute bottom-8 right-8 font-display text-[120px] md:text-[160px] font-light text-white/5 leading-none select-none pointer-events-none">
              {project.num}
            </div>

            {/* Next panel preview hint */}
            {i < PROJECTS.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center px-8 md:px-16">
                <p className="text-[10px] uppercase tracking-[0.35em] font-light text-white/25">
                  Next: {PROJECTS[i + 1].category}
                </p>
              </div>
            )}

            {/* Vertical scroll indicator — right edge */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 pointer-events-none">
              <span
                style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
                className="text-[10px] uppercase font-light text-white/25 tracking-[0.3em] select-none"
              >
                Scroll Down
              </span>
              <span className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
