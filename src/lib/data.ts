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

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const projects: Project[] = [
  {
    slug: 'malabar-gold-diamonds',
    name: 'Malabar Gold & Diamonds',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Breakthrough project blending creativity and precision to create a lasting impression.',
    segment: 'commercial',
  },
  {
    slug: 'indriya-delhi-flagship',
    name: 'Indriya by Novel Jewels',
    location: 'Karol Bagh, New Delhi',
    category: 'Retail Fit-Out',
    area: '15,000 sq ft',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Flawlessly finished in 60 days, meeting the fixed launch date.',
    segment: 'commercial',
  },
  {
    slug: 'khimji-jewellers',
    name: 'Khimji Jewellers',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Adopting and delivering interior standards set by a legacy dating back to 1936.',
    segment: 'commercial',
  },
  {
    slug: 'png-jewellers-mumbai',
    name: 'PNG Jewellers',
    location: 'Goregaon, Mumbai',
    category: 'Jewellery Showroom',
    area: '3,400 sq ft',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Transformed into a luxurious retail destination in just 27 days.',
    segment: 'commercial',
  },
  {
    slug: 'kalyan-candere',
    name: 'Kalyan Candere',
    location: 'Gaur City Mall',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'A milestone collaboration, handed over before schedule.',
    segment: 'commercial',
  },
  {
    slug: 'pmj-jewellers',
    name: 'PMJ Jewellers',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'A standout partnership crafting a luxurious jewellery shopping experience.',
    segment: 'commercial',
  },
  {
    slug: 'kisna-bangalore',
    name: 'Kisna Diamond & Gold Jewellery',
    location: 'Jaya Nagar, Bangalore',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Elegant, functional design that enhances the jewellery shopping experience.',
    segment: 'commercial',
  },
  {
    slug: 'giva',
    name: 'Giva',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Giva store by BrandKettle.',
    segment: 'commercial',
  },
  {
    slug: 'gucci',
    name: 'Gucci',
    location: 'India',
    category: 'Luxury Retail',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'First high-end luxury project reflecting the iconic elegance of the brand.',
    segment: 'commercial',
  },
  {
    slug: 'pushpanjali-jewels-noida',
    name: 'Pushpanjali Jewels',
    location: 'Noida',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Crafted to reflect timeless elegance and modern luxury.',
    segment: 'commercial',
  },
  {
    slug: 'nike-flagship',
    name: 'Nike',
    location: 'India',
    category: 'Retail Fit-Out',
    area: '7,997 sq ft',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Two stories of electrifying interiors designed to inspire athletes.',
    segment: 'commercial',
  },
  {
    slug: 'marks-spencer',
    name: 'Marks & Spencer',
    location: 'India',
    category: 'Retail Fit-Out',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: [img('photo-1497366754035-f200968a6e72')],
    blurb: 'Store designing and construction completed on time.',
    segment: 'commercial',
  },
  {
    slug: 'tira',
    name: 'Tira',
    location: 'India',
    category: 'Retail Fit-Out',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p061_076.jpg'],
    blurb: 'Tira store by BrandKettle.',
    segment: 'commercial',
  },
  {
    slug: 'ramada-encore-bareilly',
    name: 'Ramada Encore Hotel',
    location: 'Bareilly',
    category: 'Hospitality',
    area: '',
    year: '',
    image: '/imgs/p062_077.jpg',
    gallery: ['/imgs/p062_077.jpg', '/imgs/p063_078.jpg', '/imgs/p064_079.jpg', '/imgs/p064_080.jpg', '/imgs/p064_081.jpg', '/imgs/p065_082.jpg', '/imgs/p065_084 copy.jpg', '/imgs/p065_084.jpg', '/imgs/p066_085.jpg', '/imgs/p066_086.jpg', '/imgs/p066_087.jpg'],
    blurb: 'A new chapter where brand identity meets functionality.',
    segment: 'commercial',
  },
  {
    slug: 'radisson-blu-greater-noida',
    name: 'Radisson Blu Hotel',
    location: 'Greater Noida',
    category: 'Hospitality',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p068_089.jpg', '/imgs/p068_090.jpg', '/imgs/p069_091.jpg', '/imgs/p069_092.jpg', '/imgs/p069_093.jpg', '/imgs/p070_094.jpg', '/imgs/p070_095.jpg'],
    blurb: 'Elevating guest experience while honouring global standards.',
    segment: 'commercial',
  },
  {
    slug: 'havana-lounge-bareilly',
    name: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    area: '',
    year: '',
    image: '/imgs/p071_096.jpg',
    gallery: ['/imgs/p071_096.jpg', '/imgs/p072_097.jpg', '/imgs/p072_098.jpg', '/imgs/p072_099.jpg', '/imgs/p073_100.jpg', '/imgs/p073_101.jpg', '/imgs/p073_102.jpg'],
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
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p076_107.jpg'],
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
    image: '/imgs/p077_108.jpg',
    gallery: ['/imgs/p077_108.jpg', '/imgs/p078_109.jpg', '/imgs/p079_110.jpg'],
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
    image: '/imgs/p080_111.jpg',
    gallery: ['/imgs/p080_111.jpg'],
    blurb: 'A vibrant and inviting space bringing the renowned brand to the heart of Delhi.',
    segment: 'commercial',
  },
  {
    slug: 'nipccd',
    name: 'NIPCCD by NBCC',
    location: 'India',
    category: 'Government',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p082_113.jpg', '/imgs/p083_114.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  },
  {
    slug: 'cgewho',
    name: 'CGEWHO',
    location: 'India',
    category: 'Government',
    area: '',
    year: '',
    image: '/imgs/p085_116.jpg',
    gallery: ['/imgs/p085_116.jpg', '/imgs/p086_117.jpg', '/imgs/p087_118.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  },
  {
    slug: 'iit-ropar',
    name: 'IIT Ropar',
    location: 'Ropar',
    category: 'Government',
    area: '',
    year: '',
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p090_121.jpg', '/imgs/p091_122.jpg', '/imgs/p092_123.jpg'],
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
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p094_125.jpg', '/imgs/p095_126.jpg', '/imgs/p096_127.jpg'],
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
    image: img('photo-1497366754035-f200968a6e72'),
    gallery: ['/imgs/p098_129.jpg', '/imgs/p099_130.jpg', '/imgs/p099_131.jpg', '/imgs/p099_132.jpg'],
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
    image: '/imgs/p100_133.jpg',
    gallery: ['/imgs/p100_133.jpg', '/imgs/p101_134.jpg', '/imgs/p102_135.jpg'],
    blurb: 'Government & Institutional Project.',
    segment: 'commercial',
  }
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
