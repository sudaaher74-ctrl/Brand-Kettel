'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Cinematic, restrained homepage motion inspired by the Pinterest reference. */
export default function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = root.current;
    if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      host.querySelectorAll<HTMLElement>('[data-motion="rise"]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        );
      });

      host.querySelectorAll<HTMLElement>('[data-motion="stagger"]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-motion-item]');
        if (!items.length) return;
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 82%', once: true },
          },
        );
      });

      host.querySelectorAll<HTMLElement>('[data-motion="image-reveal"]').forEach((frame) => {
        const image = frame.querySelector<HTMLElement>('[data-motion-image]');
        gsap.fromTo(
          frame,
          { clipPath: 'inset(12% 8% 12% 8%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.25,
            ease: 'power3.inOut',
            scrollTrigger: { trigger: frame, start: 'top 88%', once: true },
          },
        );
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.13 },
            {
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: { trigger: frame, start: 'top 88%', once: true },
            },
          );
        }
      });

      const hero = host.querySelector<HTMLElement>('[data-motion="hero"]');
      const heroCopy = hero?.querySelectorAll<HTMLElement>('[data-hero-copy]');
      if (hero && heroCopy?.length) {
        gsap.fromTo(
          heroCopy,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out', delay: 0.12 },
        );
      }

      const heroImage = host.querySelector<HTMLElement>('[data-motion="hero-image"]');
      if (heroImage) {
        gsap.fromTo(
          heroImage,
          { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
          { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.35, ease: 'power3.inOut', delay: 0.18 },
        );
        const parallaxLayer = heroImage.querySelector<HTMLElement>('[data-motion-parallax]');
        if (parallaxLayer) {
          gsap.to(parallaxLayer, {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: heroImage, start: 'top top', end: 'bottom top', scrub: true },
          });
        }
      }
    }, host);

    return () => context.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
