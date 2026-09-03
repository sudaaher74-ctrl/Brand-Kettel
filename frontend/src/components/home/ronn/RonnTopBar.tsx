import Link from 'next/link';

export default function RonnTopBar() {
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#050505] text-[#D4D4D8] text-xs font-light tracking-[0.08em] py-2.5 px-4 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] inline-block animate-pulse shrink-0 shadow-[0_0_8px_#C5A880]" />
          <span className="font-normal text-white">Brand Kettle Projects expands to BuildSpaces</span>
          <span className="hidden sm:inline text-white/50">— Pan-India Turnkey Commercial &amp; Retail Fit-Outs</span>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#C5A880] hover:text-white transition-colors duration-200 shrink-0"
        >
          Discover
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </aside>
  );
}
