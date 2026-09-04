import type { Metadata } from 'next';
import ConsultationForm from '@/components/forms/ConsultationForm';

export const metadata: Metadata = {
  title: 'Contact — Book a Commercial Fit-Out Consultation',
  description:
    'Consult with Brand Kettle BuildSpaces for turnkey commercial fit-outs, luxury retail design, jewellery showrooms, and custom joinery across India.',
};

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
    <div className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>Direct Inquiry &amp; Consultation</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
            Let&apos;s Build <br />
            <span className="font-serif italic font-normal text-[#C5A880]">Your Vision</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl mx-auto">
            Tell us about your space, sector, and timeline. Our turnkey architectural project team will connect within 24 hours.
          </p>
        </div>

        {/* Main Grid: Left Contact & Studios, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct channels + Studios */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Box */}
            <div className="rounded-[24px] bg-[#121216] p-8 border border-white/10 shadow-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium block mb-4">
                Direct Channels
              </span>
              
              <div className="space-y-4">
                <a
                  href="tel:+918959173790"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#C5A880]/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Direct Telephone</span>
                    <span className="text-base font-medium text-white group-hover:text-[#C5A880] transition-colors">+91 89591 73790</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#C5A880] text-[#0A0A0B] flex items-center justify-center font-bold text-xs">
                    📞
                  </span>
                </a>

                <a
                  href="https://wa.me/918959173790?text=Hi%20Brand%20Kettle%2C%20I%20would%20like%20to%20discuss%20a%20turnkey%20commercial%20fit-out%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-medium block">Instant WhatsApp</span>
                    <span className="text-base font-medium text-white group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm">
                    💬
                  </span>
                </a>

                <a
                  href="mailto:vini@brandkettle.in"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#C5A880]/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] block">Official Email</span>
                    <span className="text-base font-medium text-white group-hover:text-[#C5A880] transition-colors">vini@brandkettle.in</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">
                    ✉
                  </span>
                </a>
              </div>
            </div>

            {/* Studio Locations */}
            <div className="rounded-[24px] bg-[#121216] p-8 border border-white/10 shadow-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium block mb-4">
                Pan-India Presence
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STUDIOS.map((s) => (
                  <div key={s.city} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                      <h4 className="font-display text-sm font-semibold uppercase text-white tracking-wide">{s.city}</h4>
                    </div>
                    <span className="text-[11px] text-[#C5A880] block font-light mb-1.5">{s.role}</span>
                    <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">{s.address}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Consultation Form */}
          <div className="lg:col-span-7 rounded-[28px] bg-[#121216] p-8 md:p-12 border border-white/15 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium block mb-2">
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
