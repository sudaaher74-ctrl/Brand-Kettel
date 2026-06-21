/**
 * Central content source for Brand Kettle BuildSpaces.
 * Swap `image` URLs for Cloudinary delivery URLs in production.
 */

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: string;
  area: string;
  year: string;
  image: string;
  gallery?: string[];
  blurb: string;
  segment: 'commercial' | 'residential';
};



export const projects: Project[] = [
  {
    slug: 'ramada-encore-bareilly',
    name: 'Ramada Encore Hotel',
    location: 'Bareilly',
    category: 'Hospitality',
    area: '25,000 sq ft',
    year: '2023',
    image: '/imgs/commercial/p064_079.jpg',
    gallery: [ '/imgs/commercial/p064_079.jpg', '/imgs/commercial/p064_080.jpg', '/imgs/commercial/p064_081.jpg', '/imgs/commercial/p066_086.jpg', '/imgs/commercial/p066_087.jpg'],
    blurb: 'A new chapter where brand identity meets functionality. We completely transformed the guest experience with bespoke lighting, custom-made furniture, and premium acoustic paneling. Our team worked closely with the hotel management to ensure minimal disruption to operations during the fit-out process.',
    segment: 'commercial',
  },
  {
    slug: 'havana-lounge-bareilly',
    name: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    area: '8,500 sq ft',
    year: '2022',
    image: '/imgs/commercial/p071_096.jpg',
    gallery: ['/imgs/commercial/p071_096.jpg', '/imgs/commercial/p072_097.jpg', '/imgs/commercial/p072_098.jpg', '/imgs/commercial/p072_099.jpg', '/imgs/commercial/p073_101.jpg', '/imgs/commercial/p073_102.jpg'],
    blurb: 'A standout rooftop project highlighting expertise in design thinking. This space features an open-to-sky lounge with custom cabanas, atmospheric lighting, and high-end bar counters. The design seamlessly blends indoor and outdoor environments for a luxurious evening experience.',
    segment: 'commercial',
  },
  {
    slug: 'taksha-hyderabad',
    name: 'Taksha',
    location: 'Hyderabad',
    category: 'Commercial Spaces',
    area: '475 sq yd',
    year: '2023',
    image: '/imgs/residential/p076_107.jpg',
    gallery: ['/imgs/residential/p076_107.jpg', '/imgs/residential/image.png'],
    blurb: 'Blending comfort, functionality and exclusivity with a modern façade. The interior scheme utilizes a warm, neutral palette with rich textural contrasts, maximizing natural light while providing dedicated zones for focused work and collaborative sessions.',
    segment: 'commercial',
  },
  {
    slug: 'and-work-faridabad',
    name: '&Work Co-working Space',
    location: 'Faridabad',
    category: 'Commercial Spaces',
    area: '15,000 sq ft',
    year: '2021',
    image: '/imgs/commercial/p077_108.jpg',
    gallery: ['/imgs/commercial/p077_108.jpg', '/imgs/commercial/p078_109.jpg', '/imgs/commercial/p079_110.jpg'],
    blurb: 'A fun and creative co-working space. We implemented dynamic open-plan seating, soundproof meeting pods, and vibrant break-out areas to foster a collaborative community atmosphere, all delivered within a tight 60-day timeline.',
    segment: 'commercial',
  },
  {
    slug: 'pret-a-manger-delhi',
    name: 'Pret A Manger',
    location: 'Select City Walk, Delhi',
    category: 'Hospitality',
    area: '2,200 sq ft',
    year: '2023',
    image: '/imgs/commercial/p080_111.jpg',
    gallery: ['/imgs/commercial/p080_111.jpg'],
    blurb: 'A vibrant and inviting space bringing the renowned brand to the heart of Delhi. The project required strict adherence to international brand guidelines, featuring their signature display counters, organic wood finishes, and optimized customer flow patterns.',
    segment: 'commercial',
  },
  {
    slug: 'iit-ropar',
    name: 'IIT Ropar',
    location: 'Ropar',
    category: 'Government',
    area: '120,000 sq ft',
    year: '2020',
    image: '/imgs/commercial/p090_121.jpg',
    gallery: ['/imgs/commercial/p090_121.jpg', '/imgs/commercial/p091_122.jpg', '/imgs/commercial/p092_123.jpg'],
    blurb: 'Government & Institutional Project. Delivered large-scale academic blocks, lecture halls, and administrative offices with a focus on durability, low maintenance, and acoustic performance tailored for educational environments.',
    segment: 'commercial',
  },
  {
    slug: 'lic',
    name: 'LIC',
    location: 'India',
    category: 'Government',
    area: '45,000 sq ft',
    year: '2019',
    image: '/imgs/commercial/p094_125.jpg',
    gallery: ['/imgs/commercial/p094_125.jpg', '/imgs/commercial/p095_126.jpg', '/imgs/commercial/p096_127.jpg'],
    blurb: 'Government & Institutional Project. A comprehensive interior overhaul focusing on ergonomic workspaces, efficient file management systems, and a modernized public-facing customer service area.',
    segment: 'commercial',
  },
  {
    slug: 'ieml',
    name: 'IEML',
    location: 'India',
    category: 'Government',
    area: '200,000 sq ft',
    year: '2022',
    image: '/imgs/commercial/p098_129.jpg',
    gallery: ['/imgs/commercial/p098_129.jpg', '/imgs/commercial/p099_130.jpg', '/imgs/commercial/p099_131.jpg', '/imgs/commercial/p099_132.jpg'],
    blurb: 'Government & Institutional Project. Designed and executed massive exhibition halls and convention spaces, requiring highly specialized lighting rigs, modular partitioning systems, and high-traffic flooring solutions.',
    segment: 'commercial',
  },
  {
    slug: 'gem-jeevan-tara',
    name: 'GEM Jeevan Tara',
    location: 'India',
    category: 'Government',
    area: '30,000 sq ft',
    year: '2021',
    image: '/imgs/commercial/p100_133.jpg',
    gallery: ['/imgs/commercial/p100_133.jpg',],
    blurb: 'Government & Institutional Project. A turnkey interior fit-out that modernized heritage spaces while preserving architectural integrity, incorporating smart office technologies and contemporary finishes.',
    segment: 'commercial',
  },
  {
    slug: 'gucci',
    name: 'Gucci',
    location: 'India',
    category: 'Luxury Retail',
    area: '3,500 sq ft',
    year: '2023',
    image: '/imgs/commercial/gucci.png',
    gallery: ['/imgs/commercial/gucci.png', '/imgs/commercial/gucci1.png'],
    blurb: 'First high-end luxury project reflecting the iconic elegance of the brand. Features bespoke marble flooring, brass accents, custom display shelving, and museum-quality lighting to highlight the premium merchandise.',
    segment: 'commercial',
  },
  {
    slug: 'giva',
    name: 'Giva',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '1,200 sq ft',
    year: '2024',
    image: '/imgs/commercial/giaa.png',
    gallery: ['/imgs/commercial/giaa.png', '/imgs/commercial/jwellary.png', '/imgs/commercial/jwellary2.png'],
    blurb: 'Giva store by BrandKettle. Designed to maximize product visibility with specialized LED case lighting, secure display units, and a plush, comfortable consultation area for customers.',
    segment: 'commercial',
  },
];

export type Service = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

export const services: Service[] = [
  {
    title: 'Commercial Interiors',
    tag: 'Core',
    description: 'Workplaces, headquarters and corporate environments designed for performance.',
    image: '/imgs/commercial/p077_108.jpg',
  },
  {
    title: 'Retail Stores',
    tag: 'Core',
    description: 'Conversion-focused retail experiences that elevate your brand at every touchpoint.',
    image: '/imgs/commercial/p080_111.jpg',
  },
  {
    title: 'Jewellery Showrooms',
    tag: 'Core',
    description: 'Secure, luminous showroom design crafted for high-value display.',
    image: '/imgs/commercial/jwellary.png',
  },
  {
    title: 'Office Fit-Outs',
    tag: 'Core',
    description: 'Fast, precise fit-outs delivered turnkey, from bare shell to handover.',
    image: '/imgs/commercial/p079_110.jpg',
  },
  {
    title: 'Residential Interiors',
    tag: 'Premium',
    description: 'Bespoke homes where comfort, craft and detail meet.',
    image: '/imgs/residential/p076_107.jpg',
  },
  {
    title: 'Custom Furniture',
    tag: 'Craft',
    description: 'In-house manufacturing of made-to-measure furniture and joinery.',
    image: '/imgs/commercial/p071_096.jpg',
  },
];

export const whyCards = [
  { title: 'Design + Execution', body: 'One accountable team from concept through construction.' },
  { title: 'Dedicated Project Team', body: 'A named project lead and crew on every engagement.' },
  { title: 'Transparent Process', body: 'Clear scope, costing and milestones — no surprises.' },
  { title: 'Premium Materials', body: 'Specified, sourced and verified for longevity.' },
  { title: 'Quality Assurance', body: 'Multi-stage QA checks before every handover.' },
  { title: 'Timely Delivery', body: 'Schedules we plan around and deliver against.' },
];

export const processSteps = [
  { no: '01', title: 'Discovery', body: 'We map your brand, brief, budget and timeline.' },
  { no: '02', title: 'Design', body: 'Concept, 3D visualisation and material direction.' },
  { no: '03', title: 'Planning', body: 'Detailed drawings, BOQ and execution schedule.' },
  { no: '04', title: 'Execution', body: 'On-site build managed by a dedicated team.' },
  { no: '05', title: 'Quality Check', body: 'Multi-stage inspection and snag resolution.' },
  { no: '06', title: 'Handover', body: 'A move-in-ready space, delivered on time.' },
];

export const testimonials = [
  {
    quote:
      'Brand Kettle delivered our 40,000 sq.ft headquarters ahead of schedule. The execution discipline was exceptional.',
    name: 'Rohan Mehta',
    role: 'COO, Axis Group',
  },
  {
    quote:
      'Our flagship store footfall rose noticeably after the fit-out. They understood retail, not just design.',
    name: 'Priya Nair',
    role: 'Retail Head, Lumen',
  },
  {
    quote:
      'A genuinely transparent process. We always knew the cost, the stage and the next milestone.',
    name: 'Karan Shah',
    role: 'Director, Meridian Developers',
  },
];

export const expertiseCategories = [
  'Office Interiors',
  'Retail Fit-Outs',
  'Jewellery Showrooms',
  'Commercial Spaces',
  'Residential Interiors',
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
];

export const servicesDropdown = [
  {
    href: '/commercial-projects',
    label: 'Commercial',
    description: 'Offices, retail fit-outs & showrooms',
    icon: '◉',
  },
  {
    href: '/residential-interiors',
    label: 'Residential',
    description: 'Bespoke homes & private interiors',
    icon: '◎',
  },
];
