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
    area: '',
    year: '',
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    gallery: [ '/imgs/commercial/ramda encre hotel1.jpg', '/imgs/commercial/ramda encore hotel2.jpg', '/imgs/commercial/ramda encore hotel3.jpg'],
    blurb: 'A new chapter where brand identity meets functionality.',
    segment: 'commercial',
  },
  {
    slug: 'havana-lounge-bareilly',
    name: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    area: '',
    year: '',
    image: '/imgs/commercial/Havana lounge1.jpg',
    gallery: ['/imgs/commercial/Havana lounge1.jpg', '/imgs/commercial/havana lounge2.jpg', '/imgs/commercial/havana lounge 3.jpg', '/imgs/commercial/havana lounge4.jpg', '/imgs/commercial/havna lounge5.jpg'],
    blurb: 'A standout rooftop project highlighting expertise in design thinking.',
    segment: 'commercial',
  },
  {
    slug: 'taksha-hyderabad',
    name: 'Taksha',
    location: 'Hyderabad',
    category: 'Commercial Spaces',
    area: '475 sq yd',
    year: '',
    image: '/imgs/commercial/taksha.png',
    gallery: ['/imgs/commercial/taksha.png', '/imgs/commercial/taksha1.png', '/imgs/commercial/taksha3.png', '/imgs/commercial/taksha4.png'],
    blurb: 'Blending comfort, functionality and exclusivity with a modern façade.',
    segment: 'commercial',
  },
  {
    slug: 'and-work-faridabad',
    name: '&Work Co-working Space',
    location: 'Faridabad',
    category: 'Commercial Spaces',
    area: '',
    year: '',
    image: '/imgs/commercial/work co workspace.jpg',
    gallery: ['/imgs/commercial/work co workspace.jpg', '/imgs/commercial/work co workspace1.jpg', '/imgs/commercial/work co work space2.jpg'],
    blurb: 'A fun and creative co-working space.',
    segment: 'commercial',
  },
  {
    slug: 'pret-a-manger-delhi',
    name: 'Pret A Manger',
    location: 'Select City Walk, Delhi',
    category: 'Hospitality',
    area: '',
    year: '',
    image: '/imgs/commercial/p080_111.jpg',
    gallery: ['/imgs/commercial/p080_111.jpg'],
    blurb: 'A vibrant and inviting space bringing the renowned brand to the heart of Delhi.',
    segment: 'commercial',
  },
  {
    slug: 'iit-ropar',
    name: 'IIT Ropar',
    location: 'Ropar',
    category: 'Government',
    area: '',
    year: '',
    image: '/imgs/commercial/nanokirti pvt1.jpg',
    gallery: ['/imgs/commercial/nanokirti pvt1.jpg', '/imgs/commercial/nanokirti pvt2.jpg', '/imgs/commercial/nanokirti pvt3.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  },
  {
    slug: 'lic',
    name: 'LIC',
    location: 'India',
    category: 'Government',
    area: '',
    year: '',
    image: '/imgs/commercial/lic1.jpg',
    gallery: ['/imgs/commercial/lic1.jpg', '/imgs/commercial/lic2.jpg', '/imgs/commercial/lic3.jpg', '/imgs/commercial/lic4.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  },
  {
    slug: 'ieml',
    name: 'IEML',
    location: 'India',
    category: 'Government',
    area: '',
    year: '',
    image: '/imgs/commercial/p098_129.jpg',
    gallery: ['/imgs/commercial/p098_129.jpg', '/imgs/commercial/p099_130.jpg', '/imgs/commercial/p099_131.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  },
  {
    slug: 'gem-jeevan-tara',
    name: 'GEM Jeevan Tara',
    location: 'India',
    category: 'Government',
    area: '',
    year: '',
    image: '/imgs/commercial/GEM jeevan tara.jpg',
    gallery: ['/imgs/commercial/GEM jeevan tara.jpg', '/imgs/commercial/gevantara2.jpg', '/imgs/commercial/geven tara 3.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  },
  {
    slug: 'gucci',
    name: 'Gucci',
    location: 'India',
    category: 'Luxury Retail',
    area: '',
    year: '',
    image: '/imgs/commercial/gucci.png',
    gallery: ['/imgs/commercial/gucci.png', '/imgs/commercial/gucci1.png'],
    blurb: "First high-end luxury project reflecting the iconic elegance of the brand.",
    segment: 'commercial',
  },
  {
    slug: 'giva',
    name: 'Giva',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: '/imgs/commercial/giaa.png',
    gallery: ['/imgs/commercial/giaa.png', '/imgs/commercial/jwellary.png', '/imgs/commercial/jwellary2.png'],
    blurb: 'Giva store by BrandKettle.',
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
