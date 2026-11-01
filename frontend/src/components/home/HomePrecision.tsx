export default function HomePrecision() {
  return (
    <section aria-labelledby="precision-title" className="relative overflow-hidden border-y border-[#292820]/10 bg-[#F2EDE4] text-[#25251F]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]" aria-hidden="true">
        <div className="precision-grid absolute inset-0" />
        <div className="absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-[#D8C6AB]/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mb-12 flex items-center gap-4 lg:mb-20">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">03 / Precision, made tangible</span>
          <span className="h-px flex-1 bg-[#25251F]/15" />
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#77756E] sm:inline">Technology × Craft</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div data-motion="stagger" className="relative z-10">
            <p data-motion-item className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
              Executed with technology. Perfected by craftsmanship.
            </p>
            <h2 id="precision-title" data-motion-item className="mt-7 max-w-3xl text-[clamp(3.3rem,8vw,7.3rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Precision is not<br />a machine setting.<br />
              <em className="font-serif font-normal text-[#9A754D]">It is a mindset.</em>
            </h2>
            <div data-motion-item className="mt-10 flex max-w-xl items-start gap-4 border-l border-[#A07A4F]/50 pl-5">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-[#A07A4F]" />
              <p className="font-display text-xl font-light leading-snug text-[#55534D] sm:text-2xl">
                Engineering gives us precision. Eight years of site delivery gives us judgment.
              </p>
            </div>
            <p data-motion-item className="mt-6 max-w-xl text-sm font-light leading-7 text-[#6E6B64] sm:text-base sm:leading-8">
              German manufacturing machinery delivers micron-level accuracy and repeatability, while our seasoned project managers ensure every installation meets the uncompromising visual, functional, and acoustic standards expected by India’s leading enterprises.
            </p>
          </div>

          <div data-motion="rise" className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#A07A4F]/20 sm:-inset-5" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#25251F]/10 bg-[#F8F5EF]/90 p-4 shadow-[0_24px_80px_-44px_rgba(48,40,30,0.35)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#25251F]/10 pb-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F]">Interior elevation</p>
                  <p className="mt-1 text-xs text-[#77756E]">A considered space, down to the last detail</p>
                </div>
                <span className="font-mono text-[9px] text-[#77756E]">BK / 01—08</span>
              </div>

              <svg viewBox="0 0 620 440" role="img" aria-label="Architectural line drawing of a refined interior with a lounge chair, side table, shelving and finish samples" className="mt-3 w-full overflow-visible">
                <defs>
                  <linearGradient id="wallWash" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#E7DED0" stopOpacity=".54" />
                    <stop offset="1" stopColor="#F8F5EF" stopOpacity="0" />
                  </linearGradient>
                  <pattern id="floorLines" width="18" height="18" patternTransform="skewX(-35)" patternUnits="userSpaceOnUse">
                    <path d="M0 0V18" stroke="#9B896E" strokeOpacity=".15" strokeWidth="1" />
                  </pattern>
                </defs>
                <path d="M54 72H560V332H54Z" fill="url(#wallWash)" />
                <path className="precision-draw" d="M54 72H560V332H54Z" fill="none" stroke="#77715F" strokeOpacity=".48" strokeWidth="1.4" />
                <path d="M54 332H560L592 372H26Z" fill="url(#floorLines)" stroke="#77715F" strokeOpacity=".36" strokeWidth="1.2" />
                {/* full-height joinery */}
                <path className="precision-draw precision-draw-delay" d="M88 104H216V311H88ZM88 154H216M88 205H216M88 257H216M151 104V154" fill="none" stroke="#625D50" strokeWidth="1.5" />
                <path d="M101 115H203V144H101Z" fill="#B8A68C" fillOpacity=".28" />
                <path d="M101 165H203V195H101Z" fill="#A9AA96" fillOpacity=".28" />
                <path d="M101 216H203V247H101Z" fill="#C3A782" fillOpacity=".27" />
                {/* framed artwork */}
                <path d="M262 106H401V221H262Z" fill="#E4DCCF" fillOpacity=".7" stroke="#77715F" strokeOpacity=".42" />
                <path d="M278 204L322 139L349 174L367 153L387 204Z" fill="#A5A28C" fillOpacity=".48" />
                <path d="M278 204L322 139L349 174L367 153L387 204" fill="none" stroke="#77715F" strokeOpacity=".62" strokeWidth="1.2" />
                {/* lounge chair and table */}
                <path className="precision-draw precision-draw-late" d="M278 272C278 254 291 244 308 244H349C366 244 379 256 379 272V299H278ZM286 272H371M288 299L280 330M369 299L379 330M288 275V292M369 275V292" fill="#C4B39C" fillOpacity=".33" stroke="#625D50" strokeWidth="1.6" />
                <path d="M419 287H491M427 287L423 326M483 287L488 326M413 326H497" fill="none" stroke="#625D50" strokeWidth="1.5" />
                <ellipse cx="455" cy="286" rx="42" ry="7" fill="#D7C6AD" fillOpacity=".62" stroke="#625D50" strokeWidth="1.4" />
                {/* pendant */}
                <path d="M472 72V118M448 119H496L488 132H456Z" fill="#D4C3AA" fillOpacity=".72" stroke="#625D50" strokeWidth="1.3" />
                <path d="M472 133V170" stroke="#A07A4F" strokeOpacity=".52" strokeDasharray="3 5" />
                {/* measurement lines */}
                <path d="M54 51V37M560 51V37M54 43H560M572 72H588M572 332H588M580 72V332" fill="none" stroke="#A07A4F" strokeOpacity=".7" strokeWidth="1" />
                <path d="M54 43L63 39M54 43L63 47M560 43L551 39M560 43L551 47M580 72L576 81M580 72L584 81M580 332L576 323M580 332L584 323" stroke="#A07A4F" strokeOpacity=".7" strokeWidth="1" />
                <text x="281" y="34" fill="#8A765B" fontSize="10" fontFamily="monospace" letterSpacing="1.3">3,600 MM / FINISHED WALL</text>
                <text x="595" y="211" fill="#8A765B" fontSize="9" fontFamily="monospace" transform="rotate(90 595 211)" letterSpacing="1">2,700 MM</text>
                {/* detail callout */}
                <circle cx="216" cy="205" r="4" fill="#A07A4F" />
                <path d="M216 205L239 229H267" fill="none" stroke="#A07A4F" strokeOpacity=".72" strokeDasharray="3 3" />
                <text x="237" y="242" fill="#8A765B" fontSize="9" fontFamily="monospace" letterSpacing=".8">SHADOW GAP / 8 MM</text>
              </svg>

              <div className="mt-1 flex flex-wrap items-center justify-between gap-4 border-t border-[#25251F]/10 pt-4">
                <div className="flex items-center gap-2.5" aria-label="Interior finish palette">
                  <span className="size-5 rounded-full border border-black/5 bg-[#D4C3AA]" title="Natural oak" />
                  <span className="size-5 rounded-full border border-black/5 bg-[#777967]" title="Muted olive" />
                  <span className="size-5 rounded-full border border-black/5 bg-[#B8B2A6]" title="Limestone" />
                  <span className="ml-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#77756E]">Material study / 03</span>
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#A07A4F]">Measured. Made. Installed.</span>
              </div>
            </div>
            <span aria-hidden="true" className="absolute -bottom-6 -left-2 font-serif text-[5rem] italic leading-none text-[#A07A4F]/15 sm:-left-9 sm:text-[7rem]">01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
