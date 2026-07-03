import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface2">
      {/* Gold shimmer top line */}
      <div className="gold-line" />

      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm font-semibold text-white">
                BK
              </span>
              <span className="font-display text-lg font-light tracking-[1px] text-ink">
                Brand Kettle BuildSpaces
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-ink-secondary">
              A premium Design, Build &amp; Furnish company delivering commercial interiors, retail
              fit-outs, jewellery showrooms and turnkey commercial projects across India.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-accent uppercase tracking-[0.2em]">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-light text-ink-secondary transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-accent uppercase tracking-[0.2em]">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm font-light text-ink-secondary">
              <li>
                <a href="mailto:vini@brandkettle.in" className="hover:text-accent transition-colors">
                  vini@brandkettle.in
                </a>
              </li>
              <li>
                <a href="tel:+9189591737990" className="hover:text-accent transition-colors">
                  +91 89591737990
                </a>
              </li>
              <li>Bengaluru · Mumbai · Hyderabad</li>
            </ul>
            <Link href="/contact" className="btn-accent mt-5 inline-block">
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 gold-line" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs font-light text-ink-secondary sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Brand Kettle BuildSpaces Pvt. Ltd. All rights reserved.</p>
          <p>Design · Build · Furnish</p>
        </div>
      </div>
    </footer>
  );
}
