import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { faqPageJsonLd, breadcrumbJsonLd, jsonLdScript } from '@/lib/structuredData';

export const metadata: Metadata = pageMetadata({
  path: '/resources/commercial-interior-faq-hub',
  title: 'Commercial Interior FAQ Hub — 30+ Expert Answers on Fit-Outs in India',
  description: 'Detailed, authoritative answers to commercial interior questions covering turnkey contracting, fit-out costs per sq ft, fast-track timelines, MEP norms, and factory joinery.',
  socialTitle: 'Commercial Interior FAQ Hub — Brand Kettle BuildSpaces',
  socialDescription: 'Expert answers on commercial interior costs, turnkey contracts, fast-track timelines, and factory joinery.',
  image: '/imgs/commercial/brandkettle1.jpg',
  imageAlt: 'Commercial interior FAQ directory by Brand Kettle BuildSpaces',
});

const ALL_FAQS = [
  // Category 1: Turnkey Contracting & Costs
  {
    cat: 'Turnkey Contracting & Costs',
    q: 'What is the true meaning of a turnkey commercial interior contract?',
    a: 'In a turnkey contract, a single contractor assumes complete responsibility for every stage of your project: architectural space planning, civil demolition, false ceilings, MEP engineering, custom factory joinery fabrication, and final testing. The client signs one agreement, deals with one project manager, and receives a move-in-ready space.',
  },
  {
    cat: 'Turnkey Contracting & Costs',
    q: 'What is the average cost per square foot for an office fit-out in India?',
    a: 'In 2026, turnkey corporate office fit-out costs in India range from ₹1,800 to ₹4,500+ per sq ft depending on the tier. Functional modern workplaces average ₹2,000–₹2,800 / sq ft, executive corporate headquarters average ₹3,000–₹3,800 / sq ft, and luxury enterprise boardrooms with imported finishes exceed ₹5,000 / sq ft.',
  },
  {
    cat: 'Turnkey Contracting & Costs',
    q: 'Why does hiring separate vendors for civil, electrical, and furniture often cost more?',
    a: 'Splitting trades introduces overlapping management margins, coordination bottlenecks, and finger-pointing when delays occur. If an electrical conduit conflicts with a carpentry partition, each independent contractor charges dispute-driven change orders. A turnkey contractor absorbs coordination risk under a fixed-fee milestone schedule.',
  },
  {
    cat: 'Turnkey Contracting & Costs',
    q: 'How does milestone-based billing protect the commercial client?',
    a: 'Milestone billing ties financial disbursements strictly to certified physical completion milestones on site (e.g. 20% on civil and drywall completion, 30% on joinery factory delivery). This guarantees that client capital is only released after work passes rigorous quality inspection.',
  },
  {
    cat: 'Turnkey Contracting & Costs',
    q: 'What is the difference between bare-shell and warm-shell commercial handovers?',
    a: 'A bare-shell property is handed over as exposed concrete slabs and structural columns with no flooring, finished walls, or internal electrical conduits. A warm-shell property typically includes pre-installed floor screed, perimeter HVAC water/refrigerant lines, core electrical panels, and common-area plumbing already completed by the landlord.',
  },

  // Category 2: MEP & Civil Engineering
  {
    cat: 'MEP & Civil Engineering',
    q: 'What is 3D MEP clash detection and why is it essential?',
    a: '3D MEP clash detection is the computer-aided modeling of mechanical HVAC ducts, electrical cable trays, fire sprinklers, and plumbing lines inside the ceiling void prior to site work. It identifies spatial collisions in software, preventing expensive demolition and rerouting during on-site construction.',
  },
  {
    cat: 'MEP & Civil Engineering',
    q: 'What are the statutory fire safety requirements for commercial offices in India?',
    a: 'Commercial interiors must comply with Part 4 of the National Building Code (NBC) of India. Key requirements include non-combustible partition materials, automatic fire sprinklers spaced every 9–12 sq meters, illuminated emergency exit signs with independent battery backups, and fire-rated door assemblies along egress corridors.',
  },
  {
    cat: 'MEP & Civil Engineering',
    q: 'What Sound Transmission Class (STC) rating is required for confidential meeting rooms?',
    a: 'Confidential executive boardrooms, HR interview suites, and legal offices require an STC rating of 45 to 50. This is achieved using double-glazed laminated glass partitions, acoustic drop seals on doors, and slab-to-slab acoustic drywall baffles that extend above the false ceiling.',
  },
  {
    cat: 'MEP & Civil Engineering',
    q: 'How do you calculate fresh air ventilation requirements in dense offices?',
    a: 'Modern commercial offices adhere to ASHRAE 62.1 standards, requiring 20 to 30 CFM (cubic feet per minute) of fresh outdoor air per occupant. Proper fresh-air ducting and filtration prevent CO2 buildup, reducing employee afternoon fatigue and improving cognitive alertness.',
  },
  {
    cat: 'MEP & Civil Engineering',
    q: 'What is high-CRI lighting and why is it critical for retail and jewellery stores?',
    a: 'Color Rendering Index (CRI) measures a light source’s ability to reveal true colors accurately compared to natural daylight. Standard lights have a CRI of 70–80, making merchandise look flat. High-CRI luminaires (CRI > 95) are essential in jewellery and luxury retail to reveal true gold warmth and diamond brilliance.',
  },

  // Category 3: Fast-Track Timelines & Prefabrication
  {
    cat: 'Fast-Track Timelines & Prefabrication',
    q: 'How did Brand Kettle complete PNG Jewellers (3,400 sq ft) in Goregaon in just 27 days?',
    a: 'We achieved this through parallel processing: while on-site teams performed civil screeding, demolition, and electrical rough-ins in Goregaon, our Indore factory fabricated all display counters, wall paneling, and vault-adjacent joinery concurrently. When the site was clean, modular installation took under a week.',
  },
  {
    cat: 'Fast-Track Timelines & Prefabrication',
    q: 'What is concurrent prefabrication in commercial fit-outs?',
    a: 'Traditional contractors build furniture on site sequentially after walls are painted, taking 60–90 days. Concurrent prefabrication manufactures all custom architectural millwork, workstations, and metalwork in an off-site factory while on-site civil works occur simultaneously, cutting project duration by 35%–45%.',
  },
  {
    cat: 'Fast-Track Timelines & Prefabrication',
    q: 'How do shopping mall night-shift fit-outs work?',
    a: 'Premier shopping malls mandate that all noisy demolition, core cutting, and material delivery occur during night shifts (typically 11:00 PM to 7:00 AM). Our night crews use dust-containment hoarding, silent tool arrays, and leave the property clean before morning customer opening.',
  },
  {
    cat: 'Fast-Track Timelines & Prefabrication',
    q: 'What is a pre-handover snag list?',
    a: 'A snag list is an itemized inventory of minor aesthetic or mechanical defects (paint touch-ups, door hinge adjustments, electrical polarity checks) identified during final quality audits. Our policy is 100% snag rectification prior to official client key handover.',
  },

  // Category 4: Materials, Furniture & In-House Factory
  {
    cat: 'Materials, Furniture & In-House Factory',
    q: 'Why is in-house factory joinery superior to manual on-site carpentry?',
    a: 'Factory joinery utilizes computerized beam saws, multi-axis CNC routers, and industrial edge-banders that apply hot-melt polyurethane glues at 200°C under heavy pneumatic pressure. This creates water-resistant, laser-straight edges that manual hand-planing and contact adhesive cannot match.',
  },
  {
    cat: 'Materials, Furniture & In-House Factory',
    q: 'What materials are best suited for high-traffic commercial office furniture?',
    a: 'High-traffic commercial furniture should feature E1/E0 grade moisture-resistant engineered cores, 1mm+ high-pressure decorative laminates, 2mm PVC impact edge-banding, and heavy-gauge powder-coated structural steel subframes tested to BIFMA standards.',
  },
  {
    cat: 'Materials, Furniture & In-House Factory',
    q: 'What glass specifications are used for jewellery showroom display counters?',
    a: 'Jewellery counters use extra-clear low-iron laminated security glass (12mm to 19mm thickness with multi-layer PVB interlayers). Low-iron glass eliminates the green tint of standard glass, ensuring diamonds and colored gemstones are seen with absolute clarity.',
  },
  {
    cat: 'Materials, Furniture & In-House Factory',
    q: 'Can clients visit the Brand Kettle factory in Indore before commissioning work?',
    a: 'Yes. We encourage client directors, facility heads, and architects to tour our manufacturing facility in Indore to review machinery, joinery mockups, and material storage firsthand.',
  },

  // Category 5: Pan-India Delivery & Logistics
  {
    cat: 'Pan-India Delivery & Logistics',
    q: 'How does Brand Kettle manage on-site project execution across different Indian cities?',
    a: 'We operate with full-time on-site project engineers, site supervisors, and MEP coordinators permanently stationed on the job site in Mumbai, Delhi NCR, Bareilly, Hyderabad, or Bengaluru, while our Central India factory provides prefabricated millwork with express logistics.',
  },
  {
    cat: 'Pan-India Delivery & Logistics',
    q: 'How is finished custom furniture transported without in-transit damage?',
    a: 'Every factory-prefabricated unit is wrapped in multi-layer protective foam, corner edge-guards, bubble wrap, and crated in heavy-duty wooden palettes. Transport is handled by dedicated freight carriers with end-to-end GPS tracking and transit insurance.',
  },
  {
    cat: 'Pan-India Delivery & Logistics',
    q: 'In which cities has Brand Kettle delivered landmark commercial projects?',
    a: 'Our verified project portfolio includes completed commercial works in Mumbai (PNG Jewellers Goregaon), Delhi (Pret A Manger Select City Walk), Bareilly (Ramada Encore Hotel & Havana Lounge), Faridabad (&Work Co-working), Hyderabad (Taksha Spaces), and Indore (Corporate HQ & Nanokirti).',
  },
];

export default function CommercialFaqHubPage() {
  const canonicalPath = '/resources/commercial-interior-faq-hub';

  const faqSchemaList = ALL_FAQS.map((f) => ({ q: f.q, a: f.a }));

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'FAQ Hub', path: canonicalPath },
  ]);

  const categories = Array.from(new Set(ALL_FAQS.map((f) => f.cat)));

  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(faqSchemaList, canonicalPath))}
      />

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Knowledge Directory</span>
            <span className="text-[#18181B]/30">·</span>
            <span>Commercial Fit-Out FAQs</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-4">
            Commercial Interior FAQ Hub
          </h1>
          <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
            Clear, authoritative answers to complex commercial interior questions covering turnkey delivery, per sq ft pricing, MEP engineering, and factory prefabrication.
          </p>
        </div>

        {/* FAQs Grouped by Category */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          {categories.map((cat) => (
            <section key={cat} className="space-y-6">
              <div className="border-b border-[#18181B]/15 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-1">
                  Category
                </span>
                <h2 className="font-display font-light text-2xl sm:text-3xl text-[#18181B] uppercase">
                  {cat}
                </h2>
              </div>

              <div className="space-y-6">
                {ALL_FAQS.filter((f) => f.cat === cat).map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#18181B]/15 p-6 sm:p-8 shadow-sm space-y-3"
                  >
                    <h3 className="font-display font-medium text-lg sm:text-xl text-[#18181B] leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="max-w-4xl mx-auto bg-[#121214] text-white p-8 sm:p-14 text-center">
          <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase mb-3">
            Have a Specific Project Question?
          </h3>
          <p className="text-sm text-white/70 font-light max-w-xl mx-auto mb-8">
            Consult directly with our project directors and commercial estimators for clarity on feasibility, BOQ pricing, or fast-track timelines.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Speak to a Project Specialist
          </Link>
        </div>
      </div>
    </div>
  );
}

