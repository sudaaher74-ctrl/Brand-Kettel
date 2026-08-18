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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.psrv-panel');

      panels.forEach((panel) => {
        const textEl = panel.querySelector<HTMLElement>('.psrv-text');
        const imgEl = panel.querySelector<HTMLElement>('.psrv-img');
        const eyebrow = panel.querySelector<HTMLElement>('.psrv-eyebrow');
        const heading = panel.querySelector<HTMLElement>('.psrv-heading');
        const desc = panel.querySelector<HTMLElement>('.psrv-desc');
        const btns = panel.querySelector<HTMLElement>('.psrv-btns');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Image wipe in from right
        tl.fromTo(
          imgEl,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.inOut' },
          0
        );

        // Stagger text elements in
        if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.2);
        if (heading) tl.fromTo(heading, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6 }, 0.35);
        if (desc) tl.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5);
        if (btns) tl.fromTo(btns, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 0.65);

        // Linger phase (panel holds at full opacity)
        tl.to({}, { duration: 0.6 });

        // Exit: fade out text, clip image back out to the right
        if (textEl) tl.to(textEl, { opacity: 0, y: -30, duration: 0.4 }, '+=0');
        tl.to(imgEl, { clipPath: 'inset(0 0% 0 100%)', duration: 0.6, ease: 'power2.inOut' }, '<0.1');
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-background">
      {/* Section header — visible above the pinned panels */}
      <div className="container-px py-24 md:py-32">
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" />
          Our Expertise
        </span>
        <h2 className="mt-6 text-section-lg max-w-2xl">
          Spaces designed for{' '}
          <span className="text-accent italic font-light">every vision.</span>
        </h2>
      </div>

      {/* Pinned project panels */}
      {PROJECTS.map((project) => (
        <div
          key={project.num}
          className="psrv-panel relative h-screen w-full bg-background overflow-hidden"
        >
          {/* Left: Text content */}
          <div className="psrv-text absolute inset-y-0 left-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-[45%]">
            <p className="psrv-eyebrow eyebrow opacity-0">
              <span className="h-px w-6 bg-accent" />
              {project.category}
            </p>

            <h2
              className="psrv-heading mt-6 font-display font-light text-white leading-[1.05] tracking-[0.02em] text-[36px] md:text-[44px] lg:text-[56px] opacity-0"
              style={{ whiteSpace: 'pre-line' }}
            >
              {project.name}
            </h2>

            <p className="psrv-desc mt-6 text-body-main max-w-[380px] opacity-0">
              {project.description}
            </p>

            <div className="psrv-btns mt-10 flex flex-wrap gap-3 opacity-0">
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

          {/* Right: Image panel with clip-path wipe */}
          <div
            className="psrv-img absolute inset-y-0 right-0 w-full md:w-[60%]"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            <Image
              src={project.image}
              alt={project.category}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority={project.num === '01'}
            />
            {/* Left fade so image bleeds into the text area gracefully */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
            {/* Large project number watermark */}
            <div className="absolute bottom-8 right-8 font-display text-[100px] md:text-[140px] font-light text-white/5 leading-none select-none pointer-events-none">
              {project.num}
            </div>
          </div>

          {/* Mobile: subtle background image (no clip on mobile) */}
          <div className="absolute inset-0 md:hidden -z-0">
            <Image
              src={project.image}
              alt={project.category}
              fill
              sizes="100vw"
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>
        </div>
      ))}
    </div>
  );
}
