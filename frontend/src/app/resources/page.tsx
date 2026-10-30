import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/structuredData';

export const metadata: Metadata = pageMetadata({
  path: '/resources',
  title: 'Commercial Interior Resources, Cost Calculators & Checklists',
  description: 'Free planning tools, fit-out cost estimators, corporate office checklists, and technical FAQs for commercial interior projects in India by Brand Kettle BuildSpaces.',
  socialTitle: 'Commercial Interior Tools & Planning Resources — Brand Kettle',
  socialDescription: 'Estimate office fit-out costs, download planning checklists, and explore commercial interior guides.',
  image: '/imgs/commercial/brandkettle1.jpg',
  imageAlt: 'Commercial interior planning resources by Brand Kettle BuildSpaces',
});

const TOOLS = [
  {
    title: 'Fit-Out Budget Estimator',
    href: '/resources/fit-out-cost-calculator',
    tag: 'Interactive Tool',
    desc: 'Calculate estimated per sq ft costs for corporate offices, retail stores, and jewellery showrooms across major Indian cities.',
  },
  {
    title: 'Office Interior Planning Checklist',
    href: '/resources/office-interior-planning-checklist',
    tag: 'Planning Guide',
    desc: 'A comprehensive 45-point checklist covering lease due diligence, space planning, MEP infrastructure, and contractor selection.',
  },
  {
    title: 'Commercial Interior FAQ Hub',
    href: '/resources/commercial-interior-faq-hub',
    tag: 'Knowledge Base',
    desc: '30+ detailed answers to complex commercial interior questions covering turnkey contracts, night shifts, and material specifications.',
  },
  {
    title: 'Turnkey Fit-Out Process Guide',
    href: '/resources/turnkey-fit-out-process-guide',
    tag: 'Execution Roadmap',
    desc: 'A visual walkthrough of the 6 stages of commercial interior delivery, from bare-shell laser surveys to snag-free handover.',
  },
];

export default function ResourcesPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
  ]);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Tools &amp; Insights</span>
            <span className="text-[#18181B]/30">·</span>
            <span>Commercial Real Estate</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-6">
            Commercial Interior <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Resources &amp; Calculators</span>
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            Practical, transparent planning tools engineered to help founders, project directors, and corporate real estate heads budget and execute turnkey fit-outs across India.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="bg-white border border-[#18181B]/15 p-8 sm:p-12 hover:border-[#A07A4F] transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <span className="px-3 py-1 bg-[#EFE9DF] text-[10px] font-mono uppercase tracking-wider text-[#A07A4F] font-semibold inline-block mb-4">
                  {tool.tag}
                </span>
                <h2 className="font-display font-light text-2xl sm:text-3xl text-[#18181B] uppercase mb-3 group-hover:text-[#A07A4F] transition-colors">
                  {tool.title}
                </h2>
                <p className="text-sm text-[#71717A] font-light leading-relaxed mb-6">
                  {tool.desc}
                </p>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#18181B] font-semibold group-hover:text-[#A07A4F]">
                  Launch Resource →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Advisory Banner */}
        <div className="bg-[#121214] text-white p-8 sm:p-14 border border-[#18181B]/20 text-center max-w-4xl mx-auto">
          <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase mb-3">
            Need a Detailed Project Quotation?
          </h3>
          <p className="text-sm text-white/70 font-light max-w-xl mx-auto mb-8">
            Share your CAD drawings or floor plan with our technical estimating team for a customized, itemized Bill of Quantities (BOQ).
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Request an Itemized BOQ
          </Link>
        </div>
      </div>
    </div>
  );
}

