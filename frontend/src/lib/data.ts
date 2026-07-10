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
    image: '/imgs/commercial/guccicoverimg.png',
    gallery: ['/imgs/commercial/guccicoverimg.png', '/imgs/commercial/gucci.png', '/imgs/commercial/gucci1.png'],
    blurb: "BrandKettle's first high-end luxury project. After the successful execution of Gucci's premium showroom, the owners personally appreciated the craftsmanship and attention to detail. Every detail — from custom finishes to ambient lighting — reflects the iconic elegance of the Gucci brand.",
    segment: 'commercial',
    alt: 'Retail Interior Contractors - Gucci Luxury Retail Store',
  },
  {
    slug: 'taksha-hyderabad',
    name: 'Taksha',
    location: 'Hyderabad',
    category: 'Commercial Spaces',
    area: '475 sq yd',
    year: '2023',
    image: '/imgs/commercial/taksha coverimg.png',
    gallery: ['/imgs/commercial/taksha coverimg.png', '/imgs/commercial/taksha.png', '/imgs/commercial/taksha1.png', '/imgs/commercial/taksha3.png'],
    blurb: 'A 475 sq. yd. premium builder floor by Studio AKAAI, blending comfort, functionality and exclusivity with a modern façade and luxury design. Crafted for refined lifestyles, it redefines contemporary urban living.',
    segment: 'commercial',
    alt: 'Commercial Interior Company in Indore - Taksha Hyderabad Builder Floor',
  },
  {
    slug: 'png',
    name: 'PNG Jewellers',
    location: 'Goregaon, Mumbai',
    category: 'Jewellery Showroom',
    area: '3,400 sq ft',
    year: '27 days',
    image: '/imgs/commercial/pnjcoverimg.png',
    gallery: ['/imgs/commercial/pnjcoverimg.png', '/imgs/commercial/png2.jpg', '/imgs/commercial/png3.jpg'],
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
    slug: 'indriya',
    name: 'Indriya',
    location: 'India',
    category: 'Jewellery Showroom',
    area: 'TBD',
    year: '2024',
    image: '/imgs/commercial/indriya-placeholder.jpg',
    gallery: ['/imgs/commercial/indriya-placeholder.jpg'],
    blurb: 'Indriya jewellery showroom project by BrandKettle.',
    segment: 'commercial',
    alt: 'Jewellery Store Interior Design - Indriya',
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
  { title: 'Purpose Before Design', body: 'Every project begins with understanding how the space needs to function—not just how it should look.' },
  { title: 'Precision in Execution', body: 'Design is only as good as its execution. We believe the quality of every detail matters.' },
  { title: 'Timelines You Can Count On', body: 'We value your time as much as our own. Every project is planned with clear milestones and delivered with accountability.' },
  { title: 'Partnerships That Last', body: "For us, a successful project isn't the end of a transaction, it's the beginning of a long-term relationship." },
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
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
];

export const servicesDropdown = [
  {
    href: '/commercial-fit-outs',
    label: 'Commercial Fit-Outs',
    description: 'Offices, retail fit-outs & showrooms',
    icon: '◈',
  },
  {
    href: '/retail-fit-outs',
    label: 'Retail Fit-Outs',
    description: 'Store interiors & retail environments',
    icon: '◇',
  },
  {
    href: '/jewellery-showrooms',
    label: 'Jewellery Showrooms',
    description: 'High-end secure jewellery displays',
    icon: '⟡',
  },
  {
    href: '/residential-interiors',
    label: 'Residential Interiors',
    description: 'Bespoke homes & private interiors',
    icon: '◆',
  },
  {
    href: '/custom-furniture',
    label: 'Custom Furniture',
    description: 'Bespoke & modular furniture manufacturing',
    icon: '✦',
  },
  {
    href: '/library-institutional-furniture',
    label: 'Library & Institutional',
    description: 'Educational & institutional furniture',
    icon: '✧',
  },
];
