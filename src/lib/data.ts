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
  blurb: string;
  segment: 'commercial' | 'residential';
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const projects: Project[] = [
  {
    slug: 'axis-corporate-hq',
    name: 'Axis Corporate HQ',
    location: 'Bengaluru, KA',
    category: 'Office Interiors',
    area: '42,000 sq.ft',
    year: '2024',
    image: img('photo-1497366754035-f200968a6e72'),
    blurb: 'A performance-driven corporate headquarters built for focus and collaboration.',
    segment: 'commercial',
  },
  {
    slug: 'lumen-retail-flagship',
    name: 'Lumen Retail Flagship',
    location: 'Mumbai, MH',
    category: 'Retail Fit-Out',
    area: '8,500 sq.ft',
    year: '2024',
    image: img('photo-1441986300917-64674bd600d8'),
    blurb: 'A flagship retail environment engineered for footfall and brand impact.',
    segment: 'commercial',
  },
  {
    slug: 'aurelia-jewellery-house',
    name: 'Aurelia Jewellery House',
    location: 'Hyderabad, TG',
    category: 'Jewellery Showroom',
    area: '6,200 sq.ft',
    year: '2023',
    image: img('photo-1515562141207-7a88fb7ce338'),
    blurb: 'Precision lighting and secure display for a premium jewellery showroom.',
    segment: 'commercial',
  },
  {
    slug: 'meridian-turnkey-campus',
    name: 'Meridian Turnkey Campus',
    location: 'Pune, MH',
    category: 'Commercial Spaces',
    area: '78,000 sq.ft',
    year: '2023',
    image: img('photo-1524758631624-e2822e304c36'),
    blurb: 'End-to-end turnkey delivery of a multi-floor commercial campus.',
    segment: 'commercial',
  },
  {
    slug: 'the-grove-residence',
    name: 'The Grove Residence',
    location: 'Bengaluru, KA',
    category: 'Residential Interiors',
    area: '4,800 sq.ft',
    year: '2024',
    image: img('photo-1600210492486-724fe5c67fb0'),
    blurb: 'A refined private residence balancing warmth, light and material craft.',
    segment: 'residential',
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
    image: img('photo-1497366811353-6870744d04b2'),
  },
  {
    title: 'Retail Stores',
    tag: 'Core',
    description: 'Conversion-focused retail experiences that elevate your brand at every touchpoint.',
    image: img('photo-1567401893414-76b7b1e5a7a5'),
  },
  {
    title: 'Jewellery Showrooms',
    tag: 'Core',
    description: 'Secure, luminous showroom design crafted for high-value display.',
    image: img('photo-1605100804763-247f67b3557e'),
  },
  {
    title: 'Office Fit-Outs',
    tag: 'Core',
    description: 'Fast, precise fit-outs delivered turnkey, from bare shell to handover.',
    image: img('photo-1497215728101-856f4ea42174'),
  },
  {
    title: 'Residential Interiors',
    tag: 'Premium',
    description: 'Bespoke homes where comfort, craft and detail meet.',
    image: img('photo-1616486338812-3dadae4b4ace'),
  },
  {
    title: 'Custom Furniture',
    tag: 'Craft',
    description: 'In-house manufacturing of made-to-measure furniture and joinery.',
    image: img('photo-1538688525198-9b88f6f53126'),
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
