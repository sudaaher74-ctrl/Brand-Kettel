import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  // A 404 should never be indexed even if something links to it.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-[#0A0A0B] text-white px-5 py-24">
      <div className="text-center max-w-lg">
        <span
          aria-hidden="true"
          className="font-serif italic text-7xl sm:text-8xl font-light text-[#C5A880] block mb-2"
        >
          404
        </span>
        <h1 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-wide text-white">
          Space Not Found
        </h1>
        <p className="mt-4 text-sm text-[#A1A1AA] font-light leading-relaxed">
          The page you are looking for has moved, been renamed, or does not exist. Our completed
          projects and the team are both one click away.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/portfolio"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-300 shadow-xl"
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

        <p className="mt-8 text-xs text-white/40">
          <Link href="/" className="hover:text-[#C5A880] transition-colors">
            Return to homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
