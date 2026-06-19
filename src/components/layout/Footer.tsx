import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">
                BK
              </span>
              <span className="font-display text-lg font-semibold text-ink">
                Brand Kettle BuildSpaces
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              A premium Design, Build &amp; Furnish company delivering commercial interiors, retail
              fit-outs, jewellery showrooms and turnkey commercial projects across India.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
              <li>
                <a href="mailto:hello@brandkettle.com" className="hover:text-accent">
                  hello@brandkettle.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="hover:text-accent">
                  +91 00000 00000
                </a>
              </li>
              <li>Bengaluru · Mumbai · Hyderabad</li>
            </ul>
            <Link href="/contact" className="btn-accent mt-5">
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Brand Kettle BuildSpaces Pvt. Ltd. All rights reserved.</p>
          <p>Design · Build · Furnish</p>
        </div>
      </div>
    </footer>
  );
}
