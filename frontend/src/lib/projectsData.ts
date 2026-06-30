export type CaseStudy = {
  slug: string;
  title: string;
  location?: string;
  category: 'Retail' | 'Hospitality' | 'Workspace' | 'Government' | 'Residential' | 'Commercial Spaces' | 'Luxury Retail' | 'Jewellery Showroom' | 'Office';
  description: string;
  keyStat?: string;
  images: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'gucci',
    title: 'Gucci',
    category: 'Retail',
    description: "BrandKettle's first high-end luxury project. Every detail, from custom finishes to ambient lighting, reflects the iconic elegance of the Gucci brand.",
    keyStat: 'First Luxury Project',
    images: [
      '/imgs/commercial/gucci.png',
      '/imgs/commercial/gucci1.png',
    ],
  },
  {
    slug: 'giva',
    title: 'Giva',
    category: 'Retail',
    description: 'Giva store by BrandKettle.',
    images: [
      '/imgs/commercial/giaa.png',
      '/imgs/commercial/jwellary.png',
      '/imgs/commercial/jwellary2.png',
    ],
  },
  {
    slug: 'ramada-encore-bareilly',
    title: 'Ramada Encore Hotel',
    location: 'Bareilly',
    category: 'Hospitality',
    description: 'BrandKettle\'s first collaboration with a luxury hotel — centrally located in the medical hub. A new chapter where brand identity meets functionality.',
    keyStat: 'First collaboration with a luxury hotel',
    images: [
      '/imgs/commercial/p064_079.jpg',
      '/imgs/commercial/p064_080.jpg',
      '/imgs/commercial/p064_081.jpg',
      '/imgs/commercial/p066_086.jpg',
      '/imgs/commercial/p066_087.jpg',
    ],
  },
  {
    slug: 'havana-lounge',
    title: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    description: 'A standout rooftop project at the Ramada hotel, highlighting expertise in design thinking, detailing and craftsmanship.',
    images: [
      '/imgs/commercial/p071_096.jpg',
      '/imgs/commercial/p072_097.jpg',
      '/imgs/commercial/p072_098.jpg',
      '/imgs/commercial/p072_099.jpg',
      '/imgs/commercial/p073_101.jpg',
      '/imgs/commercial/p073_102.jpg',
    ],
  },
  {
    slug: 'taksha-hyderabad',
    title: 'Taksha',
    location: 'Hyderabad',
    category: 'Commercial Spaces',
    description: 'A premium builder floor blending comfort, functionality and exclusivity with a modern façade and luxury design — redefining contemporary urban living.',
    keyStat: '475 sq yd',
    images: [
      '/imgs/commercial/taksha.png',
      '/imgs/commercial/taksha1.png',
      '/imgs/commercial/taksha3.png',
      '/imgs/commercial/taksha4.png',
    ],
  },
  {
    slug: 'and-work',
    title: '&Work',
    location: 'Faridabad',
    category: 'Workspace',
    description: 'A fun and creative co-working space delivered in Faridabad.',
    images: [
      '/imgs/commercial/p077_108.jpg',
      '/imgs/commercial/p078_109.jpg',
      '/imgs/commercial/p079_110.jpg',
    ],
  },
  {
    slug: 'pret-a-manger',
    title: 'Pret A Manger',
    location: 'Select City Walk, Delhi',
    category: 'Hospitality',
    description: 'Creating a vibrant and inviting space that brings the renowned brand to the heart of Delhi.',
    images: [
      '/imgs/commercial/p080_111.jpg',
    ],
  },
  {
    slug: 'iit-ropar',
    title: 'IIT Ropar Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/p090_121.jpg',
      '/imgs/commercial/p091_122.jpg',
      '/imgs/commercial/p092_123.jpg',
    ],
  },
  {
    slug: 'lic',
    title: 'LIC Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/p094_125.jpg',
      '/imgs/commercial/p095_126.jpg',
      '/imgs/commercial/p096_127.jpg',
    ],
  },
  {
    slug: 'ieml',
    title: 'IEML Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/p098_129.jpg',
      '/imgs/commercial/p099_130.jpg',
      '/imgs/commercial/p099_131.jpg',
      '/imgs/commercial/p099_132.jpg',
    ],
  },
  {
    slug: 'gem-jeevan-tara',
    title: 'GEM Jeevan Tara Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/p100_133.jpg',
    ],
  },
];

