'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Detail stays in the console / server logs; the visitor sees none of it.
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-screen place-items-center bg-[#0A0A0B] text-white px-5 py-24">
      <div className="text-center max-w-lg">
        <span
          aria-hidden="true"
          className="font-serif italic text-6xl sm:text-7xl font-light text-[#C5A880] block mb-3"
        >
          Oh.
        </span>
        <h1 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-wide text-white">
          Something went wrong
        </h1>
        <p className="mt-4 text-sm text-[#A1A1AA] font-light leading-relaxed">
          An unexpected error stopped this page from loading. Trying again usually fixes it — if it
          does not, call us on{' '}
          <a href="tel:+918959173790" className="text-[#C5A880] hover:text-white transition-colors">
            +91 89591 73790
          </a>
          .
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-300 shadow-xl"
          >
            Try again
          </button>
          <Link
            href="/portfolio"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-full border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-300"
          >
            View our work
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-full border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-300"
          >
            Talk to us
          </Link>
        </div>

        {error.digest && (
          // Useful when a visitor reports a problem; meaningless to an attacker.
          <p className="mt-8 text-[11px] text-white/30 font-mono">Reference: {error.digest}</p>
        )}
      </div>
    </section>
  );
}
