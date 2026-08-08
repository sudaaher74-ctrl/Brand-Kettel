'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardHat, Network, RefreshCw, MessageSquare, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export default function Expertise({ services }: { services: Service[] | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!services || services.length === 0) return;

    const ctx = gsap.context(() => {
      // Progress line filling as the section scrolls through view
      gsap.fromTo(
        trackRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const icon = card.querySelector('[data-el="icon"]');
        const image = card.querySelector('[data-el="image"]');
        const title = card.querySelector('[data-el="title"]');
        const index = card.querySelector('[data-el="index"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            end: 'top 55%',
            scrub: 0.6,
          },
        });

        tl.fromTo(card, { opacity: 0, y: 70 }, { opacity: 1, y: 0, ease: 'power3.out' }, 0)
          .fromTo(index, { opacity: 0, x: -12 }, { opacity: 1, x: 0, ease: 'power2.out' }, 0)
          .fromTo(
            icon,
            { opacity: 0, scale: 0.4, rotate: -30 },
            { opacity: 1, scale: 1, rotate: 0, ease: 'back.out(2)' },
            0.05
          )
          .fromTo(title, { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: 'power3.out' }, 0.1);

        // Continuous parallax drift on the image, independent of the reveal
        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -14 },
            {
              yPercent: 14,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  if (!services || !Array.isArray(services) || services.length === 0) return null;

  const icons = [HardHat, Network, RefreshCw, MessageSquare];

  return (
    <section ref={sectionRef} className="relative bg-background py-[100px] lg:py-[140px] overflow-hidden">
      <div className="container-px mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold">
            O u r &nbsp; E x p e r t i e s
          </span>
        </div>

        {/* Scroll progress line */}
        <div className="hidden lg:block h-px w-full bg-line mb-24 overflow-hidden">
          <div ref={trackRef} className="h-full w-full bg-accent origin-left" style={{ transform: 'scaleX(0)' }} />
        </div>

        {/* Grid Layout matching the design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const isPushedDown = i % 2 !== 0;
            const Icon = icons[i % icons.length];

            return (
              <article
                key={s.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`group flex flex-col px-6 lg:px-8 py-10 lg:py-0 border-t lg:border-t-0 border-l border-line hover:bg-white/[0.02] transition-colors duration-500 ${
                  isPushedDown ? "lg:pt-24" : "lg:pb-24"
                }`}
              >
                <div className="flex items-center justify-between mb-6 mt-4 lg:mt-0">
                  <div data-el="icon">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <span
                    data-el="index"
                    className="font-display text-xs text-ink-muted tracking-widest"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  data-el="title"
                  className="text-xl lg:text-2xl text-ink mb-8 leading-tight font-display font-light tracking-wide transition-colors duration-300 pr-4"
                >
                  {s.title}
                </h3>

                <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-surface rounded-2xl border border-line">
                  <img
                    data-el="image"
                    src={s.image || `https://placehold.co/800x600/131317/8D7458?text=${s.title.split(" ").join("+")}`}
                    alt={s.title}
                    className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div
                  className="text-sm text-ink-secondary leading-relaxed mb-12 flex-grow prose prose-sm prose-p:text-ink-secondary prose-li:text-ink-secondary"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />

                <div className="mt-auto pb-4 lg:pb-0">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink-muted group-hover:text-ink group-hover:border-ink transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
