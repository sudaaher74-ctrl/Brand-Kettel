export type LocationHub = {
  slug: string;
  city: string;
  region: string;
  title: string;
  h1: string;
  description: string;
  heroImage: string;
  localProof: string;
  featuredProjects: {
    name: string;
    slug: string;
    category: string;
    area: string;
    stat: string;
    blurb: string;
    image: string;
  }[];
  localOperations: {
    heading: string;
    text: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
};

export const LOCATIONS_DATA: LocationHub[] = [
  {
    slug: 'mumbai',
    city: 'Mumbai',
    region: 'Western Commercial & Luxury Retail Hub',
    title: 'Commercial Interior & Retail Fit-Out Contractors in Mumbai',
    h1: 'Turnkey Commercial Fit-Outs & Luxury Retail in Mumbai',
    description:
      'Brand Kettle delivers fast-track commercial interiors, jewellery showrooms, and retail flagships across Mumbai. Proven delivery includes PNG Jewellers Goregaon (3,400 sq ft in 27 days).',
    heroImage: '/imgs/commercial/png1.jpg',
    localProof:
      'Delivered PNG Jewellers Goregaon (3,400 sq ft) in an unprecedented 27-day turnaround from bare shell to customer opening.',
    featuredProjects: [
      {
        name: 'PNG Jewellers',
        slug: 'png',
        category: 'Jewellery Showroom',
        area: '3,400 sq ft',
        stat: '27-Day Handover',
        blurb:
          'Turnkey fit-out in Goregaon featuring high-CRI display counters, reinforced security millwork, and full MEP coordination completed in 27 days.',
        image: '/imgs/commercial/png1.jpg',
      },
      {
        name: 'Gucci Luxury Retail',
        slug: 'gucci',
        category: 'Luxury Retail',
        area: '3,500 sq ft',
        stat: 'Global Brand Benchmark',
        blurb:
          'Precision retail fixture installation and millwork executed to exacting international brand standards.',
        image: '/imgs/commercial/gucci-green.webp',
      },
    ],
    localOperations: [
      {
        heading: 'Mall Night-Shift & After-Hours Working Windows',
        text: 'Mumbai commercial complexes (Phoenix Palladium, Oberoi Mall, Inorbit, Jio World Plaza) enforce strict night-shift working windows (11:00 PM to 7:00 AM) with zero daytime noise tolerance. We coordinate security passes, dust-containment hoarding, and silent night installations without delaying milestone dates.',
      },
      {
        heading: 'Commercial Society & Landlord NOC Protocol',
        text: 'From structural core-cutting permissions to BMS integration and fire-hydrant pressure tests, our project engineers liaise directly with building management teams to secure all necessary statutory approvals before starting on-site work.',
      },
      {
        heading: 'The Indore Factory-to-Mumbai Logistics Pipeline',
        text: 'All bespoke millwork, cash counters, and architectural wall paneling are prefabricated at our Central India manufacturing facility in Indore and transported via express logistics directly to Mumbai sites for clean, fast modular assembly.',
      },
    ],
    faqs: [
      {
        q: 'How did Brand Kettle achieve a 27-day handover for PNG Jewellers in Mumbai?',
        a: 'We ran parallel processing: while on-site civil demolition, screeding, and electrical conduit rough-ins occurred in Goregaon, our Indore factory fabricated all display counters, wall paneling, and security joinery simultaneously. Once the site was clean, modular installation took under a week.',
      },
      {
        q: 'Do you manage commercial fit-outs in South Mumbai and BKC?',
        a: 'Yes. We execute corporate workplaces, private finance suites, and flagship stores across BKC, Lower Parel, Nariman Point, Andheri, and Goregaon.',
      },
      {
        q: 'Can you work within strict Mumbai mall fit-out guidelines?',
        a: 'Yes. We are thoroughly experienced with mall fit-out criteria including insurance coverage (CAR Policy), fire sprinkler branch relocation, and night-time debris disposal.',
      },
    ],
  },
  {
    slug: 'delhi-ncr',
    city: 'Delhi NCR',
    region: 'Northern Corporate & High-Street Retail Hub',
    title: 'Turnkey Commercial Fit-Out & Office Interior Contractors in Delhi NCR',
    h1: 'Commercial Office & Retail Interior Fit-Outs in Delhi NCR',
    description:
      'Turnkey office interiors, co-working spaces, and food & beverage retail fit-outs in Delhi, Gurgaon, and Faridabad by Brand Kettle BuildSpaces. Realized projects: Pret A Manger & &Work.',
    heroImage: '/imgs/commercial/p080_111.jpg',
    localProof:
      'Delivered Pret A Manger at Select City Walk (Delhi) and the 15,000 sq ft &Work Co-working campus in Faridabad.',
    featuredProjects: [
      {
        name: 'Pret A Manger',
        slug: 'pret-a-manger-delhi',
        category: 'Hospitality Retail',
        area: '2,200 sq ft',
        stat: 'Select City Walk Handover',
        blurb:
          'High-traffic food & beverage retail fit-out adhering to global UK brand specifications and heavy electrical-kitchen coordination.',
        image: '/imgs/commercial/p080_111.jpg',
      },
      {
        name: '&Work Co-Working Space',
        slug: 'and-work-faridabad',
        category: 'Co-Working Campus',
        area: '15,000 sq ft',
        stat: '15,000 sq ft Built',
        blurb:
          'A vibrant corporate co-working hub featuring private team cabins, phone booths, open hot-desks, and custom lounge millwork.',
        image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
      },
    ],
    localOperations: [
      {
        heading: 'Select City Walk & DLF Mall Compliance',
        text: 'Executing commercial work in premier NCR malls requires strict adherence to fire safety, kitchen exhaust scrubbing, and aesthetic façade norms. Our team handles complete coordination with mall tenant delivery managers.',
      },
      {
        heading: 'Corporate Cyber Park Acoustic & MEP Norms',
        text: 'For tech hubs and enterprise corporate floors across DLF Cyber City, Golf Course Extension, and Noida Sector 62, we design to international acoustic ratings (STC 45+) and ASHRAE ventilation standards.',
      },
      {
        heading: 'Central Logistics Direct to Delhi NCR',
        text: 'With direct National Highway connectivity from our Indore factory to Delhi NCR, all prefabricated joinery, workstations, and metalwork reach Delhi job sites within 24–36 hours of dispatch.',
      },
    ],
    faqs: [
      {
        q: 'What types of commercial projects do you deliver in Delhi NCR?',
        a: 'We specialize in corporate head offices, co-working hubs, high-street retail boutiques, and F&B hospitality flagships across Delhi, Gurgaon, Noida, and Faridabad.',
      },
      {
        q: 'Can you work to international corporate brand standards in NCR?',
        a: 'Yes. Our delivery of Pret A Manger at Select City Walk and luxury retail projects demonstrate our ability to meet stringent international architectural specifications.',
      },
    ],
  },
  {
    slug: 'bareilly',
    city: 'Bareilly',
    region: 'Uttar Pradesh Hospitality & Commercial Corridor',
    title: 'Hospitality & Commercial Fit-Out Contractors in Bareilly',
    h1: 'Turnkey Luxury Hospitality & Commercial Interiors in Bareilly',
    description:
      'Brand Kettle delivered the 25,000 sq ft Ramada Encore Hotel and the landmark 8,500 sq ft Havana Lounge rooftop in Bareilly. Comprehensive design-build commercial contracting.',
    heroImage: '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
    localProof:
      'Executed 33,500+ sq ft across Ramada Encore Hotel and Havana Lounge rooftop — Bareilly’s premier hospitality destinations.',
    featuredProjects: [
      {
        name: 'Ramada Encore Hotel',
        slug: 'ramada-encore-bareilly',
        category: 'Hospitality',
        area: '25,000 sq ft',
        stat: 'Multi-Floor Hotel Fit-Out',
        blurb:
          'End-to-end turnkey execution of hotel lobby, guest corridors, luxury suites, and banquet infrastructure.',
        image: '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
      },
      {
        name: 'Havana Lounge',
        slug: 'havana-lounge-bareilly',
        category: 'Rooftop Lounge',
        area: '8,500 sq ft',
        stat: 'Panoramic Rooftop Venue',
        blurb:
          'High-end rooftop dining and lounge combining weather-resistant outdoor millwork, mood lighting, and acoustic isolation.',
        image: '/imgs/commercial/havana-lounge-bareilly-1.jpg',
      },
    ],
    localOperations: [
      {
        heading: 'Full-Scale Hotel Turnkey Capabilities in Tier-2 Cities',
        text: 'Executing 25,000+ sq ft hospitality interiors outside major metros requires robust supply chain mastery. Brand Kettle deploys its own specialized site engineering supervisors, eliminating dependence on local contractor guesswork.',
      },
      {
        heading: 'Custom Hospitality Joinery & FF&E',
        text: 'Every guest room headboard, wardrobe, restaurant banquette, and bar counter was manufactured in our in-house factory, ensuring five-star luxury finish and commercial longevity.',
      },
    ],
    faqs: [
      {
        q: 'Do you take on full hotel turnkey interior projects?',
        a: 'Yes. We manage structural civil modifications, MEP, guest rooms, public lobbies, all-day dining, and banquet halls under a single point of accountability.',
      },
      {
        q: 'How do you guarantee quality in regional UP cities?',
        a: 'We bring our full-time project management teams, precision factory-built millwork, and trusted MEP specialists directly to the site.',
      },
    ],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    region: 'Deccan Commercial & Contemporary Tech Corridor',
    title: 'Commercial Interior & High-End Fit-Out Contractors in Hyderabad',
    h1: 'Commercial Office & Contemporary Spaces in Hyderabad',
    description:
      'Turnkey commercial interiors and contemporary architectural builder floors in Hyderabad by Brand Kettle BuildSpaces. Realized benchmark: Taksha Hyderabad.',
    heroImage: '/imgs/commercial/taksha-hyderabad-cover.webp',
    localProof:
      'Delivered the 475 sq yd contemporary Taksha builder floor and commercial space, setting new benchmarks for modern finishes in Hyderabad.',
    featuredProjects: [
      {
        name: 'Taksha Spaces',
        slug: 'taksha-hyderabad',
        category: 'Commercial & Contemporary',
        area: '475 sq yd',
        stat: 'Architectural Benchmark',
        blurb:
          'Modern façade, luxury interior detailing, and bespoke joinery crafted for refined urban living and executive commercial use.',
        image: '/imgs/commercial/taksha-hyderabad-cover.webp',
      },
    ],
    localOperations: [
      {
        heading: 'Serving Hyderabad’s High-Growth Business Hubs',
        text: 'We deliver commercial fit-outs and executive suites across Hitec City, Financial District, Gachibowli, Madhapur, and Jubilee Hills.',
      },
      {
        heading: 'Engineered Precision for Tech Headquarters',
        text: 'Hyderabad tech enterprises demand high-speed structured cabling, server room precision air conditioning, and flexible modular workstations.',
      },
    ],
    faqs: [
      {
        q: 'Do you execute corporate interiors in Hyderabad Financial District?',
        a: 'Yes. We deliver turnkey corporate offices, executive suites, and retail showrooms across Hyderabad’s premier commercial corridors.',
      },
    ],
  },
  {
    slug: 'indore',
    city: 'Indore',
    region: 'Central India Headquarters & Direct Manufacturing Base',
    title: 'Commercial Fit-Out Company & Custom Joinery Manufacturer in Indore',
    h1: 'Commercial Fit-Out Company & Factory Joinery in Indore',
    description:
      'Brand Kettle BuildSpaces is headquartered in Vijay Nagar, Indore, with an in-house joinery and furniture factory delivering turnkey commercial projects pan-India.',
    heroImage: '/imgs/commercial/brandkettle1.jpg',
    localProof:
      'Company Headquarters, Vijay Nagar Design Studio, and direct manufacturing factory powering commercial rollouts across India.',
    featuredProjects: [
      {
        name: 'Nanokirti Pvt',
        slug: 'nanokirti-pvt',
        category: 'Corporate Office',
        area: '12,000 sq ft',
        stat: '12,000 sq ft Corporate HQ',
        blurb:
          'Modernized enterprise workplace featuring open collaboration pods, acoustic executive boardrooms, and ergonomic benching.',
        image: '/imgs/commercial/nanokirti-office-1.jpg',
      },
      {
        name: 'GEM Jeevan Tara',
        slug: 'gem-jeevan-tara',
        category: 'Institutional & Commercial',
        area: 'Multi-Floor',
        stat: 'Turnkey Institutional',
        blurb:
          'High-durability commercial joinery, administrative suites, and public access spaces built for continuous daily traffic.',
        image: '/imgs/commercial/gem-jeevan-tara-1.jpg',
      },
    ],
    localOperations: [
      {
        heading: 'Central Manufacturing & Rapid Prototyping',
        text: 'Clients visiting our Indore headquarters can inspect full-scale mockup counters, material libraries, and watch their millwork being crafted in our factory.',
      },
      {
        heading: 'Turnkey Commercial Leadership in MP',
        text: 'We provide end-to-end design-build services for IT parks, commercial towers, healthcare clinics, and jewellery showrooms across Indore, Bhopal, and Ujjain.',
      },
    ],
    faqs: [
      {
        q: 'Can clients tour the Brand Kettle furniture factory in Indore?',
        a: 'Yes. We welcome prospective clients and architects to tour our manufacturing facility in Indore to review our machinery, wood finishes, and quality control processes.',
      },
      {
        q: 'Where is your corporate office located in Indore?',
        a: 'Our registered office is at Scheme No. 78, Vijay Nagar, Indore, Madhya Pradesh 452010.',
      },
    ],
  },
  {
    slug: 'bengaluru',
    city: 'Bengaluru',
    region: 'Southern Innovation & Workplace Tech Corridor',
    title: 'Turnkey Commercial Fit-Out & Office Interior Contractors in Bengaluru',
    h1: 'High-Performance Office Fit-Outs & Retail in Bengaluru',
    description:
      'Turnkey office interiors, R&D labs, and retail store fit-outs across Bengaluru tech parks. Single-contract design-build delivery from Brand Kettle BuildSpaces.',
    heroImage: '/imgs/commercial/and-work-faridabad-coworking-3.jpg',
    localProof:
      'Delivering precision modular workstations, acoustic zoning, and turnkey fit-outs for fast-scaling enterprise teams across Whitefield and Outer Ring Road.',
    featuredProjects: [
      {
        name: 'Enterprise Workplace Benchmark',
        slug: 'nanokirti-pvt',
        category: 'Corporate Office',
        area: '12,000 sq ft',
        stat: 'Scalable Corporate Model',
        blurb:
          'Acoustic-treated collaborative zones, private executive booths, and high-density power-integrated workstations.',
        image: '/imgs/commercial/nanokirti-office-1.jpg',
      },
    ],
    localOperations: [
      {
        heading: 'Tech Park Tenant Coordination (ORR, Whitefield, Electronic City)',
        text: 'Bengaluru IT parks have strict building guidelines regarding fire sprinkler grids, smoke dampers, and green building LEED certifications. Our engineers coordinate directly with tech park facilities.',
      },
    ],
    faqs: [
      {
        q: 'How does Brand Kettle manage site execution in Bengaluru from Indore?',
        a: 'We operate with full-time on-site project engineers stationed in Bengaluru while all custom furniture and millwork is prefabricated in our Indore factory and shipped directly to the site for fast assembly.',
      },
    ],
  },
  {
    slug: 'pune',
    city: 'Pune',
    region: 'Maharashtra Corporate & Engineering Corridor',
    title: 'Commercial Interior Fit-Out & Corporate Office Contractors in Pune',
    h1: 'Commercial Office Interiors & Retail Fit-Outs in Pune',
    description:
      'Turnkey office fit-outs, automotive retail, and commercial joinery in Pune (Hinjawadi, Kharadi, Magarpatta) by Brand Kettle BuildSpaces.',
    heroImage: '/imgs/commercial/and-work-faridabad-coworking-2.jpg',
    localProof:
      'High-speed execution model delivering corporate workplaces, retail spaces, and precision joinery across Pune’s major tech corridors.',
    featuredProjects: [
      {
        name: 'PNG Jewellers Western Corridor',
        slug: 'png',
        category: 'Jewellery Showroom',
        area: '3,400 sq ft',
        stat: 'Regional Retail Benchmark',
        blurb:
          'High-security display engineering and rapid 27-day handover model deployed across the Western Maharashtra retail market.',
        image: '/imgs/commercial/png1.jpg',
      },
    ],
    localOperations: [
      {
        heading: 'Serving Kharadi, Hinjawadi & Baner IT Corridors',
        text: 'From bare-shell corporate campuses to boutique corporate regional offices, we provide single-source accountability for civil works, MEP, and modular furniture.',
      },
    ],
    faqs: [
      {
        q: 'Can you handle office fit-outs in Hinjawadi IT Park?',
        a: 'Yes. We deliver turnkey workspace fit-outs compliant with MIDC and SEZ regulations across Pune.',
      },
    ],
  },
  {
    slug: 'gurugram',
    city: 'Gurugram',
    region: 'Cyber City & Corporate Headquarters Hub',
    title: 'Corporate Office Fit-Out & Commercial Interior Contractors in Gurugram',
    h1: 'Corporate Office Fit-Outs & Luxury Flagships in Gurugram',
    description:
      'Leading turnkey office fit-out contractor for Gurugram (Cyber City, Golf Course Road, Sohna Road). Ergonomic workplaces and luxury retail interiors by Brand Kettle.',
    heroImage: '/imgs/commercial/brandkettle1.jpg',
    localProof:
      'Proven expertise delivering fast-track commercial spaces and high-traffic retail flagships across the NCR corporate corridor.',
    featuredProjects: [
      {
        name: '&Work Workspace Campus',
        slug: 'and-work-faridabad',
        category: 'Workspace Interior',
        area: '15,000 sq ft',
        stat: '15,000 sq ft Hub',
        blurb:
          'Turnkey co-working and enterprise interior fit-out featuring acoustic ceilings, custom millwork, and dedicated private cabins.',
        image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
      },
    ],
    localOperations: [
      {
        heading: 'Grade-A Commercial Tower Compliance in Gurugram',
        text: 'Executing work in Horizon Centre, Cyber Hub, and Golf Course Road Grade-A towers demands rigorous MEP submittals, strict safety audits, and silent work execution.',
      },
    ],
    faqs: [
      {
        q: 'What is your typical turnaround time for a 10,000 sq ft office in Gurugram?',
        a: 'Using our concurrent factory prefabrication approach, a 10,000 sq ft turnkey office is typically completed and handed over in 45 to 60 days.',
      },
    ],
  },
];

export function getLocationHub(slug: string): LocationHub | undefined {
  return LOCATIONS_DATA.find((l) => l.slug === slug);
}

