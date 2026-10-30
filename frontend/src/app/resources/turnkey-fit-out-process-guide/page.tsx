import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/structuredData';

export const metadata: Metadata = pageMetadata({
  path: '/resources/turnkey-fit-out-process-guide',
  title: 'Turnkey Commercial Fit-Out Process Guide — Bare Shell to Handover',
  description: 'The definitive architectural roadmap for commercial interior delivery in India: Discovery, 3D laser surveying, concurrent factory joinery, MEP, and snag-free handover.',
  socialTitle: 'Turnkey Fit-Out Process Guide — Brand Kettle BuildSpaces',
  socialDescription: 'Discover the 6-stage turnkey commercial fit-out lifecycle from bare shell to handover.',
  image: '/imgs/commercial/brandkettle1.jpg',
  imageAlt: 'Turnkey commercial fit-out execution process by Brand Kettle BuildSpaces',
});

const STAGES = [
  {
    no: '01',
    title: 'Discovery & Precision 3D Laser Surveying',
    timeline: 'Days 1–5',
    image: '/imgs/commercial/brandkettle2.jpg',
    lead: 'Mapping the physical reality of the space before drafting begins.',
    details: [
      '3D Point-Cloud Laser Scanning: Measuring millimeter-exact wall angles, column positions, floor slab deflections, and ceiling soffit clearances.',
      'Infrastructure Audit: Inspecting incoming electrical capacity (KVA), water/drainage points, condenser pipe routes, and fire riser positions.',
      'Lease & Mall Manual Review: Cross-verifying landlord guidelines, night-shift window rules, and building security protocols.',
    ],
  },
  {
    no: '02',
    title: 'Space Planning, Density Modeling & 3D Visualization',
    timeline: 'Days 6–15',
    image: '/imgs/commercial/nanokirti-office-1.jpg',
    lead: 'Engineering circulation, department adjacency, and brand aesthetics.',
    details: [
      'Headcount & Circulation Optimization: Planning ergonomic workstation neighborhoods, collaborative team breakout zones, and confidential meeting suites.',
      'Photorealistic 3D Material Visualizations: Rendering exact natural daylight angles, acoustic ceiling textures, and custom millwork finishes.',
      'Value Engineering: Selecting durable, high-traffic commercial materials that match aesthetic vision while protecting CAPEX budgets.',
    ],
  },
  {
    no: '03',
    title: 'Detailed MEP Engineering & Statutory Approvals',
    timeline: 'Days 16–22',
    image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
    lead: 'Clash-free engineering and complete landlord documentation.',
    details: [
      '3D MEP Clash Detection: Resolving mechanical ductwork, electrical cable tray, and fire sprinkler line collisions in CAD before site work starts.',
      'Landlord & Mall Submittals: Submitting detailed architectural drawing packages, electrical single-line diagrams (SLD), and insurance policies.',
      'Final Itemized BOQ Lock: Freezing scope and milestone billing to eliminate unexpected change orders during execution.',
    ],
  },
  {
    no: '04',
    title: 'Concurrent Factory Joinery & Millwork Prefabrication',
    timeline: 'Days 23–45 (Parallel Phase)',
    image: '/imgs/commercial/brandkettle1.jpg',
    lead: 'Manufacturing furniture off-site while civil works progress on-site.',
    details: [
      'Central Factory Production: Manufacturing reception desks, modular workstations, and display vitrines in our precision Indore manufacturing facility.',
      'Industrial PUR Edge-Banding & CNC Cutting: Ensuring laser-straight joints, moisture resistance, and commercial durability.',
      'Protective Crating & Express Freight: Packaging finished joinery in heavy-duty wooden crates and dispatching via GPS-tracked freight directly to site.',
    ],
  },
  {
    no: '05',
    title: 'On-Site Civil Works, MEP Rough-Ins & Modular Assembly',
    timeline: 'Days 23–50 (On-Site Phase)',
    image: '/imgs/commercial/png1.jpg',
    lead: 'Direct on-site engineering supervision and fast-track assembly.',
    details: [
      'Civil Construction & Ceilings: Core screeding, acoustic drywall framing, gypsum/metal ceiling grids, and floor tile/carpet installation.',
      'Electrical & HVAC Commissioning: Pulling low-smoke zero-halogen (FRLS) wiring, terminating DB panels, and testing VRF duct airflow.',
      'Modular Joinery Erection: Assembling factory-prefabricated furniture on site in days with zero sawdust, noise, or paint damage.',
    ],
  },
  {
    no: '06',
    title: 'Multi-Stage Snagging, Testing & Handover',
    timeline: 'Final 5 Days',
    image: '/imgs/commercial/gucci-green.webp',
    lead: 'Delivering a certified, fully functional, move-in-ready space.',
    details: [
      'Thermal Imaging & Pressure Testing: Scanning electrical DB panels under live load and pressure-testing fire sprinklers.',
      '100% Snag Rectification: Inspecting every hinge, silicone joint, and paint surface before client walkthrough.',
      'As-Built Drawings & O&M Manuals: Handing over complete laminated CAD drawings, equipment warranties, and key turnover.',
    ],
  },
];

export default function TurnkeyFitOutProcessGuidePage() {
  const canonicalPath = '/resources/turnkey-fit-out-process-guide';

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Process Guide', path: canonicalPath },
  ]);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#A07A4F] hover:text-[#18181B] transition-colors"
          >
            ← Back to Resources
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Engineering Methodology</span>
            <span className="text-[#18181B]/30">·</span>
            <span>Bare Shell to Handover</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-6">
            The Turnkey Fit-Out <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Execution Roadmap</span>
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            How Brand Kettle BuildSpaces delivers complex commercial, retail, and corporate interior projects on time and on budget through disciplined parallel processing.
          </p>
        </div>

        {/* 6 Stages Timeline Vertical Sequence */}
        <div className="max-w-5xl mx-auto space-y-16 mb-24">
          {STAGES.map((stage) => (
            <div
              key={stage.no}
              className="bg-white border border-[#18181B]/15 overflow-hidden shadow-sm grid md:grid-cols-12 items-stretch"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:col-span-5 bg-[#18181B]">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#18181B]/90 text-[#FAF8F5] px-3 py-1 font-mono text-xs font-semibold">
                  STAGE {stage.no}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#A07A4F] text-white px-3 py-1 font-mono text-xs font-semibold">
                  {stage.timeline}
                </div>
              </div>

              <div className="p-8 sm:p-10 md:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="font-display font-light text-2xl sm:text-3xl text-[#18181B] uppercase mb-2">
                    {stage.title}
                  </h2>
                  <p className="text-sm font-medium text-[#A07A4F] font-mono uppercase tracking-wider mb-4">
                    {stage.lead}
                  </p>
                  <ul className="space-y-3">
                    {stage.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-sm text-[#71717A] font-light leading-relaxed flex items-start gap-2.5">
                        <span className="text-[#A07A4F] font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#18181B]/10 flex items-center justify-between text-xs font-mono uppercase text-[#71717A]">
                  <span>Single-Point Accountability</span>
                  <span className="text-[#A07A4F] font-semibold">Zero Handoff Gaps</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Proof Showcase Strip */}
        <div className="max-w-5xl mx-auto bg-[#EFE9DF] border border-[#18181B]/15 p-8 sm:p-12 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
              Field Execution Benchmark
            </span>
            <h3 className="font-display font-light text-3xl text-[#18181B] uppercase mb-3">
              The 27-Day Handover Record
            </h3>
            <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
              When PNG Jewellers needed a 3,400 sq ft showroom in Goregaon, Mumbai, delivered without missing festival customer opening dates, our parallel prefabrication model completed the entire space from bare shell to final handover in just 27 days.
            </p>
          </div>
          <Link
            href="/portfolio/png"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
          >
            Read PNG Jewellers Case Study →
          </Link>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-[#121214] text-white p-8 sm:p-14 text-center">
          <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase mb-3">
            Ready to Begin Stage 01?
          </h3>
          <p className="text-sm text-white/70 font-light max-w-xl mx-auto mb-8">
            Contact Brand Kettle BuildSpaces today for site inspection, space feasibility modeling, and an itemized turnkey quotation.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Schedule Discovery Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

