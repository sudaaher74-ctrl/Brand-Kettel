import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-[#0A0A0B] text-white px-5 py-24">
      <div className="text-center max-w-md">
        <span className="font-serif italic text-7xl sm:text-8xl font-light text-[#C5A880] block mb-2">404</span>
        <h1 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-wide text-white">Space Not Found</h1>
        <p className="mt-4 text-sm text-[#A1A1AA] font-light leading-relaxed">
          The architectural page you are looking for has moved, been renamed, or does not exist.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl"
          >
            Return to Homepage →
          </Link>
        </div>
      </div>
    </section>
  );
}
