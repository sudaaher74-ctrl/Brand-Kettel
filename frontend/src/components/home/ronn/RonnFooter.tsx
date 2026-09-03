import Link from 'next/link';
import Image from 'next/image';

export default function RonnFooter() {
  return (
    <footer className="relative bg-[#231800] text-[#FFEAD4] pt-20 pb-12 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Studio Presence Strip */}
        <div className="rounded-[24px] bg-[#2D2002] border border-white/10 p-8 sm:p-12 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#DBB6FC] block mb-2">
              Pan-India Presence
            </span>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase">
              Headquartered in Indore · Active in 10+ Metros
            </h3>
            <p className="text-sm text-[#FFEAD4]/60 font-light mt-2">
              Mumbai · Delhi NCR · Hyderabad · Bengaluru · Bareilly · Indore
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="mailto:vini@brandkettle.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFEAD4] text-[#231800] hover:bg-white text-xs uppercase tracking-[0.14em] font-medium transition-colors"
            >
              vini@brandkettle.in
            </a>
            <a
              href="tel:+918959173790"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:border-white text-xs uppercase tracking-[0.14em] font-light transition-colors"
            >
              +91 89591 73790
            </a>
          </div>
        </div>

        {/* 4 Multi-Column Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Brand Kettle BuildSpaces"
                width={170}
                height={56}
                className="h-9 w-auto object-contain"
                style={{ filter: 'invert(1) brightness(1.2)' }}
              />
            </Link>
            <p className="text-sm font-light text-[#FFEAD4]/70 leading-relaxed max-w-sm mb-6">
              A premier Design, Build &amp; Furnish company delivering turnkey corporate interiors, flagship luxury retail stores, jewellery showrooms, and custom millwork nationwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/brandkettle_buildspaces"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#DBB6FC] hover:border-[#DBB6FC] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/brand-kettle-buildspaces"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#DBB6FC] hover:border-[#DBB6FC] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Expertises */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DBB6FC] mb-5">
              Expertises
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FFEAD4]/75">
              <li>
                <Link href="/commercial-fit-outs" className="hover:text-white transition-colors">Commercial Fit-Outs</Link>
              </li>
              <li>
                <Link href="/retail-fit-outs" className="hover:text-white transition-colors">Retail Fit-Outs</Link>
              </li>
              <li>
                <Link href="/jewellery-showrooms" className="hover:text-white transition-colors">Jewellery Showrooms</Link>
              </li>
              <li>
                <Link href="/residential-interiors" className="hover:text-white transition-colors">Residential Interiors</Link>
              </li>
              <li>
                <Link href="/custom-furniture" className="hover:text-white transition-colors">Custom Furniture</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Realizations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DBB6FC] mb-5">
              Realizations
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FFEAD4]/75">
              <li>
                <Link href="/portfolio/gucci" className="hover:text-white transition-colors">Gucci Showroom</Link>
              </li>
              <li>
                <Link href="/portfolio/png" className="hover:text-white transition-colors">PNG Jewellers (27 Days)</Link>
              </li>
              <li>
                <Link href="/portfolio/taksha-hyderabad" className="hover:text-white transition-colors">Taksha Hyderabad</Link>
              </li>
              <li>
                <Link href="/portfolio/havana-lounge-bareilly" className="hover:text-white transition-colors">Havana Lounge</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#DBB6FC] hover:underline">All Realizations →</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio & Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DBB6FC] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FFEAD4]/75">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">Our Process</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Insights</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#FFEAD4]/50">
          <p>© {new Date().getFullYear()} Brand Kettle BuildSpaces Pvt. Ltd. All rights reserved.</p>
          <p className="font-serif italic text-sm text-[#FFEAD4]/70">Investir l&apos;espace · Design · Build · Furnish</p>
        </div>

      </div>
    </footer>
  );
}
