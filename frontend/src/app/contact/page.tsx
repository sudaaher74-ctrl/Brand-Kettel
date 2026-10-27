import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ConsultationForm from '@/components/forms/ConsultationForm';

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'Contact — Book a Commercial Fit-Out Consultation',
  description: 'Consult with Brand Kettle BuildSpaces for turnkey commercial fit-outs, luxury retail design, jewellery showrooms, and custom joinery across India.',
  socialTitle: 'Talk to Brand Kettle BuildSpaces About Your Fit-Out',
  socialDescription: 'Share your space, category and timeline and our team responds within one business day. Indore HQ, projects across India.',
  image: '/imgs/commercial/home1.webp',
  imageAlt: 'Corporate reception fit-out — book a consultation with Brand Kettle BuildSpaces',
});

const STUDIOS = [
  {
    city: 'Indore',
    role: 'Central HQ & Joinery Works',
    address: 'Brand Kettle BuildSpaces, Scheme No. 78, Vijay Nagar, Indore, MP',
  },
  {
    city: 'Mumbai',
    role: 'Western Region Studio',
    address: 'Andheri East & Goregaon Commercial District, Mumbai, MH',
  },
  {
    city: 'Hyderabad',
    role: 'South Region Hub',
    address: 'HITEC City & Jubilee Hills Commercial Zone, Hyderabad, TS',
  },
  {
    city: 'Bengaluru',
    role: 'Innovation & Tech Workspaces',
    address: 'Indiranagar & Koramangala, Bengaluru, KA',
  },
];

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>07</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Direct Inquiry</span>
            <span className="text-[#18181B]/30">—</span>
            <span>Contact Us</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Let&apos;s Build <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Your Vision</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl mx-auto">
            Tell us about your space, sector, and timeline. Our turnkey architectural project team will connect within 24 hours.
          </p>
        </div>

        {/* Main Grid: Left Contact & Studios, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct channels + Studios */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Box in Warm Linen */}
            <div className="bg-[#F2EDE4] p-8 border border-[#18181B]/15 shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-4">
                Direct Channels
              </span>
              
              <div className="space-y-4">
                <a
                  href="tel:+918959173790"
                  className="flex items-center justify-between p-4 bg-white border border-[#18181B]/10 hover:border-[#18181B]/40 hover:bg-[#FAF8F5] transition-all duration-300 group"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#71717A] block">Direct Telephone</span>
                    <span className="text-base font-medium text-[#18181B] group-hover:text-[#A07A4F] transition-colors">+91 89591 73790</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#18181B] text-[#FAF8F5] group-hover:bg-[#A07A4F] group-hover:text-white flex items-center justify-center font-bold text-xs transition-colors">
                    📞
                  </span>
                </a>

                <a
                  href="https://wa.me/918959173790?text=Hi%20Brand%20Kettle%2C%20I%20would%20like%20to%20discuss%20a%20turnkey%20commercial%20fit-out%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300 group"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#25D366] font-semibold block">Instant WhatsApp</span>
                    <span className="text-base font-medium text-[#18181B] group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm">
                    💬
                  </span>
                </a>

                <a
                  href="mailto:vini@brandkettle.in"
                  className="flex items-center justify-between p-4 bg-white border border-[#18181B]/10 hover:border-[#18181B]/40 hover:bg-[#FAF8F5] transition-all duration-300 group"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#71717A] block">Official Email</span>
                    <span className="text-base font-medium text-[#18181B] group-hover:text-[#A07A4F] transition-colors">vini@brandkettle.in</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] text-[#18181B] border border-[#18181B]/15 flex items-center justify-center text-xs">
                    ✉
                  </span>
                </a>
              </div>
            </div>

            {/* Studio Locations in Warm Linen */}
            <div className="bg-[#F2EDE4] p-8 border border-[#18181B]/15 shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-4">
                Pan-India Presence
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STUDIOS.map((s) => (
                  <div key={s.city} className="p-4 bg-white border border-[#18181B]/10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A07A4F]" />
                      <h4 className="font-display text-sm font-semibold uppercase text-[#18181B] tracking-wide">{s.city}</h4>
                    </div>
                    <span className="font-mono text-[10px] text-[#A07A4F] block font-medium mb-1.5">{s.role}</span>
                    <p className="text-xs text-[#71717A] font-light leading-relaxed">{s.address}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Consultation Form in Deep Charcoal Contrast */}
          <div className="lg:col-span-7 bg-[#121214] text-white p-8 md:p-12 border border-[#18181B]/20 shadow-2xl">
            <div className="mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-2">
                Project Inquiry
              </span>
              <h2 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Request a Consultation &amp; BOQ Estimate
              </h2>
            </div>
            <ConsultationForm theme="gold" />
          </div>

        </div>

      </div>
    </div>
  );
}
