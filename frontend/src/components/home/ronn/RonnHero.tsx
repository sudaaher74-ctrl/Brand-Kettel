import Link from 'next/link';
import RonnHeroVideo from './RonnHeroVideo';

/**
 * Homepage hero.
 *
 * This is a server component on purpose: the headline, sub-line and both CTAs
 * are in the initial HTML and paint without waiting for hydration. The showreel
 * is isolated in RonnHeroVideo, which loads nothing until it has hydrated and
 * scrolled into view, and never loads on mobile.
 */
export default function RonnHero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0A0A0B] flex items-center justify-center">
      <RonnHeroVideo />

      {/* Headline block — server-rendered, no JS required to paint. */}
      <div className="relative z-20 w-full max-w-[1400px] px-6 sm:px-12 text-center">
        <span className="block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A880] mb-5">
          Design · Build · Furnish
        </span>
        <h1 className="font-display font-light text-[34px] sm:text-[52px] md:text-[68px] leading-[1.05] tracking-tight uppercase text-white">
          Commercial spaces
          <br />
          that <span className="font-serif italic font-normal text-[#C5A880]">inspire growth.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base font-light leading-relaxed text-white/70">
          Turnkey fit-outs for offices, retail flagships and jewellery showrooms — delivered
          bare-shell to handover by one accountable partner, across India.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#C5A880] hover:bg-white text-[#0A0A0B] px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-300 shadow-xl"
          >
            Book a consultation
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-300 backdrop-blur-sm"
          >
            See our work
          </Link>
        </div>
      </div>

      {/* Floating bottom bar: showreel badge + scroll cue. */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 sm:px-12 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-medium">
            Live Showreel
          </span>
          <span className="hidden sm:inline text-[11px] text-white/50 tracking-wider">
            Brand Kettle Fit-Outs
          </span>
        </div>

        <div className="hidden md:flex flex-col items-center gap-1.5 text-center pointer-events-auto animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">Scroll</span>
          <svg
            className="w-4 h-4 text-[#C5A880]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
