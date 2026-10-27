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
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-screen place-items-center bg-[#FAF8F5] text-[#18181B] px-5 py-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="text-center max-w-lg">
        <span
          aria-hidden="true"
          className="font-serif italic text-6xl sm:text-7xl font-light text-[#A07A4F] block mb-3"
        >
          Notice
        </span>
        <h1 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-wide text-[#18181B]">
          Something went wrong
        </h1>
        <p className="mt-4 text-sm text-[#71717A] font-light leading-relaxed">
          An unexpected error stopped this page from loading. Trying again usually fixes it — if it
          does not, call us directly on{' '}
          <a href="tel:+918959173790" className="text-[#A07A4F] hover:text-[#18181B] underline transition-colors">
            +91 89591 73790
          </a>
          .
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/portfolio"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 border border-[#18181B]/20 hover:border-[#18181B] text-[#18181B] font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300"
          >
            View our work
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 border border-[#18181B]/20 hover:border-[#18181B] text-[#18181B] font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
