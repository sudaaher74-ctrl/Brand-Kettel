import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] text-[#18181B] border-t border-[#18181B]/15 pt-20 pb-12 px-5 lg:px-10">
      <div className="mx-auto max-w-[1480px]">
        
        {/* Top Studio Presence Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-[#18181B]/15">
          <div className="max-w-xl">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Brand Kettle BuildSpaces"
                width={180}
                height={50}
                className="h-9 md:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs uppercase tracking-[0.14em] text-[#71717A] leading-relaxed">
              Commercial Fit-Outs · Precision Joinery · Turnkey Interior Execution · Retail Flagships · Corporate Workspaces · Jewellery Showrooms · Pan-India Delivery
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:vini@brandkettle.in"
              className="font-mono text-xs uppercase tracking-[0.18em] border-b border-[#18181B] pb-1 hover:text-[#A07A4F] transition-colors"
            >
              vini@brandkettle.in
            </a>
            <a
              href="tel:+918959173790"
              className="font-mono text-xs uppercase tracking-[0.18em] border-b border-[#18181B] pb-1 hover:text-[#A07A4F] transition-colors"
            >
              +91 89591 73790
            </a>
          </div>
        </div>

        {/* Multi-Column Architectural Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-[#18181B]/15 text-xs">
          
          {/* Column 1: Expertises */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-5">
              01 / Expertises
            </p>
            <ul className="space-y-3 font-light text-[#71717A]">
              <li><Link href="/commercial-fit-outs" className="hover:text-[#18181B] transition-colors">Commercial Fit-Outs</Link></li>
              <li><Link href="/retail-fit-outs" className="hover:text-[#18181B] transition-colors">Retail Fit-Outs</Link></li>
              <li><Link href="/jewellery-showrooms" className="hover:text-[#18181B] transition-colors">Jewellery Showrooms</Link></li>
              <li><Link href="/custom-furniture" className="hover:text-[#18181B] transition-colors">Custom Joinery &amp; Furniture</Link></li>
              <li><Link href="/residential-interiors" className="hover:text-[#18181B] transition-colors">Residential Interiors</Link></li>
              <li><Link href="/library-institutional-furniture" className="hover:text-[#18181B] transition-colors">Institutional Millwork</Link></li>
            </ul>
          </div>

          {/* Column 2: Selected Realizations */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-5">
              02 / Realizations
            </p>
            <ul className="space-y-3 font-light text-[#71717A]">
              <li><Link href="/portfolio/gucci" className="hover:text-[#18181B] transition-colors">Gucci Showroom</Link></li>
              <li><Link href="/portfolio/png" className="hover:text-[#18181B] transition-colors">PNG Jewellers (27 Days)</Link></li>
              <li><Link href="/portfolio/havana-lounge-bareilly" className="hover:text-[#18181B] transition-colors">Havana Lounge</Link></li>
              <li><Link href="/portfolio/and-work-faridabad" className="hover:text-[#18181B] transition-colors">&amp;Work Coworking HQ</Link></li>
              <li><Link href="/portfolio/taksha-hyderabad" className="hover:text-[#18181B] transition-colors">Taksha Hyderabad</Link></li>
              <li><Link href="/portfolio" className="text-[#A07A4F] hover:underline font-mono text-[11px] block pt-1">All Projects →</Link></li>
            </ul>
          </div>

          {/* Column 3: Studio & Company */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-5">
              03 / Studio &amp; Tools
            </p>
            <ul className="space-y-3 font-light text-[#71717A]">
              <li><Link href="/about" className="hover:text-[#18181B] transition-colors">About Brand Kettle</Link></li>
              <li><Link href="/services" className="hover:text-[#18181B] transition-colors">All Services &amp; Disciplines</Link></li>
              <li><Link href="/resources/fit-out-cost-calculator" className="hover:text-[#18181B] transition-colors">Fit-Out Cost Calculator</Link></li>
              <li><Link href="/resources/office-interior-planning-checklist" className="hover:text-[#18181B] transition-colors">Office Planning Checklist</Link></li>
              <li><Link href="/resources/commercial-interior-faq-hub" className="hover:text-[#18181B] transition-colors">Commercial FAQ Hub</Link></li>
              <li><Link href="/blog" className="hover:text-[#18181B] transition-colors">Insights &amp; Guides</Link></li>
              <li><Link href="/contact" className="hover:text-[#18181B] transition-colors">Contact Studio</Link></li>
            </ul>
          </div>

          {/* Column 4: Pan-India Execution Hubs */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-5">
              04 / Execution Hubs
            </p>
            <div className="space-y-2 text-[#71717A] font-light leading-relaxed">
              <p className="font-medium text-[#18181B]">Headquarters &amp; Joinery Facility:</p>
              <p><Link href="/locations/indore" className="hover:text-[#A07A4F] underline">Indore HQ &amp; Direct Factory</Link></p>
              <p className="pt-2 font-medium text-[#18181B]">Active Regional Delivery Hubs:</p>
              <p className="space-x-1.5">
                <Link href="/locations/mumbai" className="hover:text-[#A07A4F] underline">Mumbai</Link> · 
                <Link href="/locations/delhi-ncr" className="hover:text-[#A07A4F] underline">Delhi NCR</Link> · 
                <Link href="/locations/hyderabad" className="hover:text-[#A07A4F] underline">Hyderabad</Link> · 
                <Link href="/locations/bengaluru" className="hover:text-[#A07A4F] underline">Bengaluru</Link> · 
                <Link href="/locations/bareilly" className="hover:text-[#A07A4F] underline">Bareilly</Link> · 
                <Link href="/locations/pune" className="hover:text-[#A07A4F] underline">Pune</Link>
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/918959173790"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#A07A4F] hover:text-[#18181B] transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#71717A] uppercase tracking-[0.14em]">
          <p>© {new Date().getFullYear()} Brand Kettle BuildSpaces Pvt. Ltd. All rights reserved.</p>
          <p className="text-[#A07A4F]">German CNC Precision · Turnkey Fit-Outs · Pan-India</p>
        </div>

      </div>
    </footer>
  );
}
