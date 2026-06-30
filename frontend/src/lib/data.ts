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
  alt?: string;
};



export const projects: Project[] = [
  {
    slug: 'gucci',
    name: 'Gucci',
    location: 'India',
    category: 'Luxury Retail',
    area: '3,500 sq ft',
    year: '2023',
    image: '/imgs/commercial/gucci.png',
    gallery: ['/imgs/commercial/gucci.png', '/imgs/commercial/gucci1.png'],
    blurb: "BrandKettle's first high-end luxury project. After the successful execution of Gucci's premium showroom, the owners personally appreciated the craftsmanship and attention to detail. Every detail — from custom finishes to ambient lighting — reflects the iconic elegance of the Gucci brand.",
    segment: 'commercial',
    alt: 'Retail Interior Contractors - Gucci Luxury Retail Store',
  },
  {
    slug: 'malabar-gold',
    name: 'Malabar Gold & Diamonds',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '8,000 sq ft',
    year: '2024',
    image: '/imgs/commercial/malbargold1.jpg',
    gallery: ['/imgs/commercial/malbargold1.jpg', '/imgs/commercial/malbargold2.jpg', '/imgs/commercial/malbargold3.jpg', '/imgs/commercial/malbargold4.jpg'],
    blurb: "BrandKettle's collaboration with Malabar marked a breakthrough in luxury retail — elevating Malabar's presence and reinforcing BrandKettle's reputation as a trusted high-end retail partner, blending creativity and precision. Includes the iconic meeting between Veekkas k Jha and M.P. Ahammed, Chairman of the Malabar Group.\n\n\"If you're looking for a fit-out team that truly understands the power of brand identity… BRANDKETTLE is the one-stop solution… Highly recommended!\" — Malabar Gold & Diamonds",
    segment: 'commercial',
    alt: 'Jewellery Showroom Interior Designers - Malabar Gold & Diamonds',
  },
  {
    slug: 'png',
    name: 'PNG Jewellers',
    location: 'Goregaon, Mumbai',
    category: 'Jewellery Showroom',
    area: '3,400 sq ft',
    year: '27 days',
    image: '/imgs/commercial/png1.jpg',
    gallery: ['/imgs/commercial/png1.jpg', '/imgs/commercial/png2.jpg', '/imgs/commercial/png3.jpg'],
    blurb: "BrandKettle transformed a 3,400 sq ft space in Goregaon into a luxurious retail destination in just 27 days. A turnkey project blending elegance and efficiency, bringing the brand's vision to life with precision and speed.",
    segment: 'commercial',
    alt: 'Jewellery Showroom Fit-Out - PNG Jewellers Goregaon',
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
    blurb: 'Giva store by BrandKettle.',
    segment: 'commercial',
    alt: 'Jewellery Store Interior Design - Giva',
  },
  {
    slug: 'havana-lounge-bareilly',
    name: 'Havana Lounge',
    location: 'Rooftop, Ramada Hotel, Bareilly',
    category: 'Hospitality',
    area: '8,500 sq ft',
    year: '2022',
    image: '/imgs/commercial/Havana lounge1.jpg',
    gallery: ['/imgs/commercial/Havana lounge1.jpg', '/imgs/commercial/havana lounge2.jpg', '/imgs/commercial/havana lounge 3.jpg', '/imgs/commercial/havana lounge4.jpg', '/imgs/commercial/havna lounge5.jpg'],
    blurb: "A standout rooftop project (Studio AKAAI) on the roof of the Ramada hotel, Bareilly. Highlights BrandKettle's expertise in design thinking, detailing and craftsmanship.",
    segment: 'commercial',
    alt: 'Commercial Fit-Out Company - Havana Lounge Rooftop Bareilly',
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
    blurb: "The iconic Pret A Manger store brought to life at Select City Walk, Delhi. Showcases BrandKettle's commitment to exceptional design and branding, creating a vibrant, inviting space that brings the renowned brand to the heart of Delhi.",
    segment: 'commercial',
    alt: 'Retail Fit-Out Company - Pret A Manger Select City Walk',
  },
  {
    slug: 'ramada-encore-bareilly',
    name: 'Ramada Encore Hotel',
    location: 'Bareilly',
    category: 'Hospitality',
    area: '25,000 sq ft',
    year: '2023',
    image: '/imgs/commercial/ramda encre hotel1.jpg',
    gallery: [ '/imgs/commercial/ramda encre hotel1.jpg', '/imgs/commercial/ramda encore hotel2.jpg', '/imgs/commercial/ramda encore hotel3.jpg', '/imgs/commercial/p064_079.jpg', '/imgs/commercial/p066_087.jpg'],
    blurb: "BrandKettle's first collaboration with a luxury hotel. Centrally located in the medical hub, under 1 km from Bareilly Jn. train station and 11 km from Bareilly Airport (BEK). A new chapter where brand identity meets functionality.",
    segment: 'commercial',
    alt: 'Commercial Interior Contractors - Ramada Encore Hotel Bareilly',
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
    alt: 'Office Fit-Out Company - Nanokirti Pvt Corporate Workspace',
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
    blurb: "One of BrandKettle's cherished projects — a fun and creative co-working space delivered in Faridabad.",
    segment: 'commercial',
    alt: 'Corporate Interior Solutions - &Work Co-working Space Faridabad',
  },
  {
    slug: 'taksha-hyderabad',
    name: 'Taksha',
    location: 'Hyderabad',
    category: 'Commercial Spaces',
    area: '475 sq yd',
    year: '2023',
    image: '/imgs/commercial/taksha.png',
    gallery: ['/imgs/commercial/taksha.png', '/imgs/commercial/taksha1.png', '/imgs/commercial/taksha3.png', '/imgs/commercial/taksha4.png'],
    blurb: 'A 475 sq. yd. premium builder floor by Studio AKAAI, blending comfort, functionality and exclusivity with a modern façade and luxury design. Crafted for refined lifestyles, it redefines contemporary urban living.',
    segment: 'commercial',
    alt: 'Commercial Interior Company in Indore - Taksha Hyderabad Builder Floor',
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
    alt: 'Institutional Furniture - GEM Jeevan Tara Turnkey Fit-Out',
  },
  {
    slug: 'brandkettle',
    name: 'BrandKettle',
    location: 'Vatika Mindscapes, Faridabad',
    category: 'Corporate Office',
    area: '10,000 sq ft',
    year: '2024',
    image: '/imgs/commercial/brandkettle1.jpg',
    gallery: ['/imgs/commercial/brandkettle1.jpg', '/imgs/commercial/brandkettle2.jpg', '/imgs/commercial/brandkettle3.jpg', '/imgs/commercial/brandkettle4.jpg'],
    blurb: "BrandKettle's own office in the prestigious Vatika Mindscapes, Faridabad. Nestled within a lush, green landscape and designed to exude ultra-luxury, this state-of-the-art complex reflects BrandKettle's commitment to a sophisticated, inspiring workspace. It represents both a strategic expansion and a setting that mirrors the company's brand values and dedication to excellence.",
    segment: 'commercial',
    alt: 'Custom Furniture Manufacturer - BrandKettle Office Vatika Mindscapes',
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
    alt: 'Office Furniture Manufacturer - LIC Government Interior Overhaul',
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
    alt: 'Turnkey Interior Solutions - IEML Exhibition Halls',
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
    href: '/commercial-fit-outs',
    label: 'Commercial Fit-Outs',
    description: 'Offices, retail fit-outs & showrooms',
    icon: '◉',
  },
  {
    href: '/residential-interiors',
    label: 'Residential Interiors',
    description: 'Bespoke homes & private interiors',
    icon: '◎',
  },
];
