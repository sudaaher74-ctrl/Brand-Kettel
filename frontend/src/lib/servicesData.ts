export type ServiceDetail = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  scopeOfWork: {
    no: string;
    title: string;
    desc: string;
  }[];
  businessBenefits: {
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  relatedProjects: {
    name: string;
    slug: string;
    category: string;
    image: string;
  }[];
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'turnkey-interior-solutions',
    name: 'Turnkey Interior Solutions',
    title: 'Turnkey Commercial Interior Solutions & Contracting Across India',
    description:
      'Single-point accountability from bare-shell civil modifications to MEP, custom factory joinery, and final handover. Delivered nationwide by Brand Kettle BuildSpaces.',
    heroImage: '/imgs/commercial/brandkettle1.jpg',
    scopeOfWork: [
      { no: '01', title: 'Bare-Shell Civil & Structural Works', desc: 'Core masonry, floor screeding, acoustic drywalls, and specialized ceiling grids.' },
      { no: '02', title: 'Integrated MEP & Automation', desc: 'Complete high-voltage electrical, VRF/chilled water HVAC ducting, fire alarms, and network cabling.' },
      { no: '03', title: 'In-House Factory Joinery', desc: 'Prefabricated architectural millwork, reception desks, executive suites, and display fixtures.' },
      { no: '04', title: 'Snag-Free Handover Protocol', desc: 'Multi-stage quality audits, testing certifications, and documented move-in readiness.' },
    ],
    businessBenefits: [
      { title: 'Single Point of Contact', desc: 'Eliminate finger-pointing between architects, civil contractors, and furniture suppliers.' },
      { title: 'Guaranteed Timelines & Budgets', desc: 'Fixed-cost milestone contracts with zero unexpected cost overruns.' },
      { title: 'National Delivery Reach', desc: 'Centralized precision fabrication with on-site deployment in tier-1 and tier-2 metros.' },
    ],
    faqs: [
      { q: 'What is the definition of turnkey commercial interior contracting?', a: 'Turnkey contracting means the client hands over an empty bare-shell property and receives a fully functional, furnished, tested, and move-in-ready commercial interior under a single contract.' },
      { q: 'How does turnkey save cost compared to hiring separate vendors?', a: 'Turnkey contracting eliminates overlapping margins, reduces coordination delays, prevents costly site rework, and leverages factory-direct material purchasing.' },
    ],
    relatedProjects: [
      { name: 'PNG Jewellers', slug: 'png', category: 'Jewellery Showroom', image: '/imgs/commercial/png1.jpg' },
      { name: 'Ramada Encore Hotel', slug: 'ramada-encore-bareilly', category: 'Hospitality', image: '/imgs/commercial/ramada-encore-bareilly-hotel.jpg' },
    ],
  },
  {
    slug: 'office-interior-design',
    name: 'Office Interior Design & Space Planning',
    title: 'Corporate Office Interior Design & Space Planning Company',
    description:
      'Human-centric, productivity-engineered workspace layouts that balance collaboration, acoustic focus, and brand identity.',
    heroImage: '/imgs/commercial/nanokirti-office-1.jpg',
    scopeOfWork: [
      { no: '01', title: 'Departmental Headcount & Circulation Modeling', desc: 'Optimizing spatial efficiency to reduce wasted corridor space while maintaining open circulation.' },
      { no: '02', title: '3D Photorealistic Architectural Visualization', desc: 'Interactive visual previews of materials, lighting angles, and texture palates.' },
      { no: '03', title: 'Acoustic & Biophilic Integration', desc: 'Strategic placement of acoustic baffles, quiet pods, and natural daylighting.' },
    ],
    businessBenefits: [
      { title: 'Employee Productivity Gains', desc: 'Ergonomic seating and balanced lighting reduce workplace fatigue.' },
      { title: 'Optimized Square Footage', desc: 'Fit 20% more functional utility into your leased office area.' },
    ],
    faqs: [
      { q: 'How do you calculate required office space per employee?', a: 'Modern corporate offices typically allocate between 60 and 85 sq ft per employee, factoring in workstations, collaborative booths, meeting rooms, and amenities.' },
    ],
    relatedProjects: [
      { name: 'Nanokirti Pvt Corporate HQ', slug: 'nanokirti-pvt', category: 'Corporate Office', image: '/imgs/commercial/nanokirti-office-1.jpg' },
      { name: '&Work Co-Working Campus', slug: 'and-work-faridabad', category: 'Workspace Interior', image: '/imgs/commercial/and-work-faridabad-coworking.jpg' },
    ],
  },
  {
    slug: 'commercial-design-and-build',
    name: 'Commercial Design & Build Services',
    title: 'Commercial Design & Build General Contractors in India',
    description:
      'Integrated architecture and construction engineering under one team. Faster approvals, zero handoff gaps, and streamlined execution.',
    heroImage: '/imgs/commercial/experties1.jpeg',
    scopeOfWork: [
      { no: '01', title: 'Concept to Detailed Engineering Drawings', desc: 'Architectural, civil, electrical, plumbing, and structural CAD packages.' },
      { no: '02', title: 'Procurement & Factory Production', desc: 'Direct raw material sourcing and prefabrication in our proprietary facility.' },
      { no: '03', title: 'On-Site General Contracting', desc: 'Full-time site engineers ensuring construction safety and milestone compliance.' },
    ],
    businessBenefits: [
      { title: '30–40% Faster Delivery', desc: 'Design and construction phases overlap rather than running sequentially.' },
      { title: 'Value Engineering', desc: 'Cost optimization built into design drawings before site execution begins.' },
    ],
    faqs: [
      { q: 'How does Design & Build differ from traditional Design-Bid-Build?', a: 'In traditional models, an architect designs and multiple contractors bid, creating disputes when construction begins. Design & Build unites designers and builders under one roof for complete accountability.' },
    ],
    relatedProjects: [
      { name: 'Taksha Spaces', slug: 'taksha-hyderabad', category: 'Commercial Spaces', image: '/imgs/commercial/taksha-hyderabad-cover.webp' },
    ],
  },
  {
    slug: 'corporate-office-fit-outs',
    name: 'Corporate Office Fit-Outs',
    title: 'Corporate Office Fit-Out Contractors & Workplace Interiors',
    description:
      'Scalable office fit-outs for enterprise headquarters, technology campuses, and fast-growing startups across India.',
    heroImage: '/imgs/commercial/nanokirti-office-1.jpg',
    scopeOfWork: [
      { no: '01', title: 'Executive Boardrooms & Video Conferencing Suites', desc: 'Acoustic wall paneling, motorized AV integration, and conference tables.' },
      { no: '02', title: 'High-Density Workstation Benching', desc: 'Cable-managed modular desks with integrated privacy screens.' },
      { no: '03', title: 'Cafeteria, Townhall & Wellness Zones', desc: 'Multi-functional community spaces for all-hands meetings and staff relaxation.' },
    ],
    businessBenefits: [
      { title: 'Attract Top Talent', desc: 'A sophisticated, modern workplace inspires high performance and pride.' },
      { title: 'Scalable Growth', desc: 'Modular furniture systems easily reconfigure as team sizes expand.' },
    ],
    faqs: [
      { q: 'Can you phase an office fit-out to keep existing operations running?', a: 'Yes. We frequently execute phased weekend and night-shift renovations to minimize team disruption.' },
    ],
    relatedProjects: [
      { name: 'Nanokirti Pvt', slug: 'nanokirti-pvt', category: 'Corporate Office', image: '/imgs/commercial/nanokirti-office-1.jpg' },
    ],
  },
  {
    slug: 'luxury-retail-fit-outs',
    name: 'Luxury Retail Fit-Outs',
    title: 'Luxury Retail Store Interior Fit-Out Contractors',
    description:
      'Impeccable retail store environments for luxury fashion, footwear, and lifestyle brands adhering to exacting global brand books.',
    heroImage: '/imgs/commercial/gucci.webp',
    scopeOfWork: [
      { no: '01', title: 'Precision Metalwork & Bespoke Glass Fixtures', desc: 'PVD brass, brushed stainless steel, and ultra-clear laminated glass vitrines.' },
      { no: '02', title: 'Museum-Grade Accent Lighting', desc: 'Custom luminaires with tight beam spreads and 98+ CRI rendering.' },
      { no: '03', title: 'Fine Architectural Veneers & Lacquers', desc: 'High-gloss Italian lacquers, fluted wall boiserie, and seamless stone cladding.' },
    ],
    businessBenefits: [
      { title: 'Elevated Perceived Brand Value', desc: 'Flawless finishes command premium luxury product pricing.' },
      { title: 'Global Brand Audits Passed', desc: 'Proven track record passing international luxury brand compliance inspections.' },
    ],
    faqs: [
      { q: 'Which luxury retail brands have you worked with?', a: 'We have executed high-end retail projects for Gucci and leading jewellery retail houses.' },
    ],
    relatedProjects: [
      { name: 'Gucci Luxury Retail', slug: 'gucci', category: 'Luxury Retail', image: '/imgs/commercial/gucci-green.webp' },
    ],
  },
  {
    slug: 'mall-retail-fit-outs',
    name: 'Mall Retail Fit-Outs & Landlord Approvals',
    title: 'Shopping Mall Retail Store Fit-Out Contractors',
    description:
      'Specialized retail store construction inside premier shopping malls. Strict compliance with night work, hoarding, and tenant delivery guidelines.',
    heroImage: '/imgs/commercial/p080_111.jpg',
    scopeOfWork: [
      { no: '01', title: 'Mall Tenant Delivery Approvals & CAD Submissions', desc: 'Coordinating shopfront elevations, fire sprinkler taps, and structural loads.' },
      { no: '02', title: 'Night-Shift Debris & Material Logistics', desc: 'Operating within 11:00 PM to 7:00 AM freight elevator allocations.' },
      { no: '03', title: 'Fire Alarm & Emergency Lighting Integration', desc: 'Interface with central mall BMS and smoke extraction systems.' },
    ],
    businessBenefits: [
      { title: 'Zero Mall Opening Penalties', desc: 'Never miss mall grand opening deadlines and avoid contractual delay fines.' },
      { title: 'Smooth Handover Audits', desc: 'First-time approval on mall operations safety and hygiene walk-throughs.' },
    ],
    faqs: [
      { q: 'How do you handle mall night-time working restrictions?', a: 'We deploy specialized night-shift crews equipped with low-noise tools and coordinate clean morning site handovers before mall public hours.' },
    ],
    relatedProjects: [
      { name: 'Pret A Manger Select City Walk', slug: 'pret-a-manger-delhi', category: 'Hospitality Retail', image: '/imgs/commercial/p080_111.jpg' },
      { name: 'PNG Jewellers Goregaon', slug: 'png', category: 'Jewellery Showroom', image: '/imgs/commercial/png1.jpg' },
    ],
  },
  {
    slug: 'mep-engineering-consulting',
    name: 'Commercial MEP & HVAC Coordination',
    title: 'Commercial MEP Engineering & HVAC Fit-Out Contractors',
    description:
      'Integrated electrical load planning, HVAC airflow ducting, public health engineering, and automated fire protection for commercial spaces.',
    heroImage: '/imgs/commercial/brandkettle2.jpg',
    scopeOfWork: [
      { no: '01', title: 'HVAC Heat-Load & CFM Airflow Calculation', desc: 'Sizing VRF, cassette, and centralized chiller ductwork for uniform cooling.' },
      { no: '02', title: 'Electrical Load Balancing & UPS Backups', desc: 'Dual-source power, phase balancing, and server-room dedicated circuits.' },
      { no: '03', title: 'Life Safety & Sprinkler Hydraulics', desc: 'Compliant with National Building Code (NBC) and local fire brigade NOC norms.' },
    ],
    businessBenefits: [
      { title: 'Energy Efficiency', desc: 'Optimized HVAC layouts lower monthly enterprise electricity bills by up to 25%.' },
      { title: 'Life Safety Assurance', desc: 'Complete protection against electrical fires and code violations.' },
    ],
    faqs: [
      { q: 'Why is MEP coordination critical before civil work begins?', a: 'HVAC ductwork, electrical trays, and plumbing lines occupy the ceiling void. Without 3D clash-detection, conflicts cause massive delays and rework on-site.' },
    ],
    relatedProjects: [
      { name: 'Ramada Encore Hotel', slug: 'ramada-encore-bareilly', category: 'Hospitality', image: '/imgs/commercial/ramada-encore-bareilly-hotel.jpg' },
    ],
  },
  {
    slug: 'commercial-renovation-refurbishment',
    name: 'Commercial Renovation & Refurbishment',
    title: 'Office & Retail Space Renovation & Refurbishment Contractors',
    description:
      'Transforming outdated commercial properties into high-performance, modern business spaces with minimal operational interruption.',
    heroImage: '/imgs/commercial/havana-lounge-bareilly-1.jpg',
    scopeOfWork: [
      { no: '01', title: 'Selective Demolition & Asset Preservation', desc: 'Safely dismantling old partitions while salvaging reusable MEP infrastructure.' },
      { no: '02', title: 'Structural & Ceiling Modernization', desc: 'Replacing dated grid ceilings with sleek open-plenum or acoustic suspended designs.' },
      { no: '03', title: 'Façade & Shopfront Rejuvenation', desc: 'Contemporary glass glazing, aluminum composite panels, and LED signage.' },
    ],
    businessBenefits: [
      { title: 'Extend Building Lifespan', desc: 'Revitalize aging commercial properties to attract higher-tier tenants or shoppers.' },
      { title: 'Modernized Energy Footprint', desc: 'Upgrade to low-power LED systems and modern inverter HVAC units.' },
    ],
    faqs: [
      { q: 'Can you renovate our office while employees work from home?', a: 'Yes. We set up fast-track 30-day renovation sprints, allowing companies to return to a completely transformed space.' },
    ],
    relatedProjects: [
      { name: 'Havana Lounge Rooftop', slug: 'havana-lounge-bareilly', category: 'Hospitality Lounge', image: '/imgs/commercial/havana-lounge-bareilly-1.jpg' },
    ],
  },
  {
    slug: 'interior-project-management',
    name: 'Interior Project Management & Site Audits',
    title: 'Turnkey Interior Project Management & Quality Audits',
    description:
      'Professional project management consultancy ensuring strict milestone tracking, material verification, BOQ cost control, and zero snag handovers.',
    heroImage: '/imgs/commercial/brandkettle1.jpg',
    scopeOfWork: [
      { no: '01', title: 'Detailed Gantt Chart & Milestone Tracking', desc: 'Daily site progress monitoring against planned critical path timelines.' },
      { no: '02', title: 'Multi-Stage Material Quality Testing', desc: 'Verifying ply grades, laminate thickness, copper wire certifications, and paint finishes.' },
      { no: '03', title: 'Comprehensive Snagging Audit', desc: 'Rectifying minor aesthetic or functional defects prior to formal client handover.' },
    ],
    businessBenefits: [
      { title: 'Predictable Handover Dates', desc: 'Rigorous management prevents deadline creep and project abandonment.' },
      { title: 'Transparent Financials', desc: 'Real-time billing verification against certified physical site milestones.' },
    ],
    faqs: [
      { q: 'How do you report progress during project execution?', a: 'We provide weekly photo/video progress reports, milestone percentage updates, and 24/7 access to your assigned Project Director.' },
    ],
    relatedProjects: [
      { name: 'PNG Jewellers 27-Day Handover', slug: 'png', category: 'Jewellery Showroom', image: '/imgs/commercial/png1.jpg' },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
