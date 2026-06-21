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
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    gallery: [ '/imgs/commercial/ramda encre hotel1.jpg', '/imgs/commercial/ramda encore hotel2.jpg', '/imgs/commercial/ramda encore hotel3.jpg', '/imgs/commercial/p064_079.jpg', '/imgs/commercial/p066_087.jpg'],
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
    image: '/imgs/commercial/Havana lounge1.jpg',
    gallery: ['/imgs/commercial/Havana lounge1.jpg', '/imgs/commercial/havana lounge2.jpg', '/imgs/commercial/havana lounge 3.jpg', '/imgs/commercial/havana lounge4.jpg', '/imgs/commercial/havna lounge5.jpg'],
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
    image: '/imgs/commercial/work co workspace.jpg',
    gallery: ['/imgs/commercial/work co workspace.jpg', '/imgs/commercial/work co workspace1.jpg', '/imgs/commercial/work co work space2.jpg'],
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
    slug: 'nanokirti-pvt',
    name: 'Nanokirti Pvt',
    location: 'India',
    category: 'Corporate Office',
    area: '12,000 sq ft',
    year: '2023',
    image: '/imgs/commercial/nanokirti pvt1.jpg',
    gallery: ['/imgs/commercial/nanokirti pvt1.jpg', '/imgs/commercial/nanokirti pvt2.jpg', '/imgs/commercial/nanokirti pvt3.jpg'],
    blurb: 'A modernized corporate workspace tailored to reflect a forward-thinking culture. Designed with open collaborative zones, acoustic-treated meeting rooms, and ergonomic workstations to ensure productivity and well-being.',
    segment: 'commercial',
  },
  {
    slug: 'lic',
    name: 'LIC',
    location: 'India',
    category: 'Government',
    area: '45,000 sq ft',
    year: '2019',
    image: '/imgs/commercial/lic1.jpg',
    gallery: ['/imgs/commercial/lic1.jpg', '/imgs/commercial/lic2.jpg', '/imgs/commercial/lic3.jpg', '/imgs/commercial/lic4.jpg'],
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
    gallery: ['/imgs/commercial/p098_129.jpg', '/imgs/commercial/p099_130.jpg', '/imgs/commercial/p099_131.jpg'],
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
    image: '/imgs/commercial/GEM jeevan tara.jpg',
    gallery: ['/imgs/commercial/GEM jeevan tara.jpg'],
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
  {
    slug: 'brandkettle',
    name: 'BrandKettle',
    location: 'India',
    category: 'Corporate Office',
    area: '10,000 sq ft',
    year: '2024',
    image: '/imgs/commercial/brandkettle1.jpg',
    gallery: ['/imgs/commercial/brandkettle1.jpg', '/imgs/commercial/brandkettle2.jpg', '/imgs/commercial/brandkettle3.jpg', '/imgs/commercial/brandkettle4.jpg'],
    blurb: 'The modern corporate office of BrandKettle, designed to inspire creativity and collaboration. Featuring an elegant reception, state-of-the-art meeting rooms, and flexible workspaces crafted with precision and our signature design language.',
    segment: 'commercial',
  },
  {
    slug: 'khimji',
    name: 'Khimji',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '4,500 sq ft',
    year: '2023',
    image: '/imgs/commercial/khimji1.jpg',
    gallery: ['/imgs/commercial/khimji1.jpg', '/imgs/commercial/khimji2.jpg'],
    blurb: 'A luxurious jewellery showroom featuring grand display aesthetics, tailored ambient and spotlighting to enhance the brilliance of the pieces, and private consultation areas crafted with premium finishes.',
    segment: 'commercial',
  },
  {
    slug: 'malabar-gold',
    name: 'Malabar Gold',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '8,000 sq ft',
    year: '2024',
    image: '/imgs/commercial/malbargold1.jpg',
    gallery: ['/imgs/commercial/malbargold1.jpg', '/imgs/commercial/malbargold2.jpg', '/imgs/commercial/malbargold3.jpg', '/imgs/commercial/malbargold4.jpg'],
    blurb: 'A magnificent flagship jewellery retail space that pairs opulent design with exceptional security. Detailed joinery, refined showcases, and elegant customer zones elevate the overall buying experience.',
    segment: 'commercial',
  },
  {
    slug: 'png',
    name: 'PNG',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '5,000 sq ft',
    year: '2023',
    image: '/imgs/commercial/png1.jpg',
    gallery: ['/imgs/commercial/png1.jpg', '/imgs/commercial/png2.jpg', '/imgs/commercial/png3.jpg'],
    blurb: 'A timeless jewellery store embodying heritage and modern retail concepts. Custom fixtures, ambient warmth, and a sophisticated material palette define this immersive customer destination.',
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
    image: '/imgs/commercial/work co workspace.jpg',
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
    image: '/imgs/commercial/work co work space2.jpg',
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
    image: '/imgs/commercial/Havana lounge1.jpg',
  }
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
