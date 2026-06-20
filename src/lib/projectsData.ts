export type CaseStudy = {
  slug: string;
  title: string;
  location?: string;
  category: 'Retail' | 'Hospitality' | 'Workspace' | 'Government' | 'Residential';
  description: string;
  keyStat?: string;
  images: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tira',
    title: 'Tira',
    category: 'Retail',
    description: 'Tira store by BrandKettle.',
    images: [      '/imgs/p061_076.jpg',
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
      '/imgs/p062_077.jpg',
      '/imgs/p063_078.jpg',
      '/imgs/p064_079.jpg',
      '/imgs/p065_082.jpg',
      '/imgs/p066_085.jpg',
    ],
  },
  {
    slug: 'radisson-blu-greater-noida',
    title: 'Radisson Blu Hotel',
    location: 'Greater Noida',
    category: 'Hospitality',
    description: 'A landmark property in the heart of the city\'s corporate and residential hub. Work elevates the guest experience.',
    images: [
      '/imgs/p068_089.jpg',
      '/imgs/p069_091.jpg',
      '/imgs/p070_094.jpg',    ],
  },
  {
    slug: 'havana-lounge',
    title: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    description: 'A standout rooftop project at the Ramada hotel, highlighting expertise in design thinking, detailing and craftsmanship.',
    images: [
      '/imgs/p071_096.jpg',
      '/imgs/p072_097.jpg',
      '/imgs/p073_100.jpg',
    ],
  },
  {
    slug: 'taksha-hyderabad',
    title: 'Taksha',
    location: 'Hyderabad',
    category: 'Residential',
    description: 'A premium builder floor blending comfort, functionality and exclusivity with a modern façade and luxury design — redefining contemporary urban living.',
    keyStat: '475 sq yd',
    images: [      '/imgs/p076_107.jpg',
    ],
  },
  {
    slug: 'and-work',
    title: '&Work',
    location: 'Faridabad',
    category: 'Workspace',
    description: 'A fun and creative co-working space delivered in Faridabad.',
    images: [
      '/imgs/p077_108.jpg',
      '/imgs/p078_109.jpg',
      '/imgs/p079_110.jpg',
    ],
  },
  {
    slug: 'pret-a-manger',
    title: 'Pret A Manger',
    location: 'Select City Walk, Delhi',
    category: 'Hospitality',
    description: 'Creating a vibrant and inviting space that brings the renowned brand to the heart of Delhi.',
    images: [
      '/imgs/p080_111.jpg',
    ],
  },
  {
    slug: 'nipccd',
    title: 'NIPCCD by NBCC',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/p082_113.jpg',
      '/imgs/p083_114.jpg',
    ],
  },
  {
    slug: 'cgewho',
    title: 'CGEWHO Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/p085_116.jpg',
      '/imgs/p086_117.jpg',
      '/imgs/p087_118.jpg',
    ],
  },
  {
    slug: 'iit-ropar',
    title: 'IIT Ropar Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/p090_121.jpg',
      '/imgs/p091_122.jpg',
      '/imgs/p092_123.jpg',
    ],
  },
  {
    slug: 'lic',
    title: 'LIC Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/p094_125.jpg',
      '/imgs/p095_126.jpg',
      '/imgs/p096_127.jpg',
    ],
  },
  {
    slug: 'ieml',
    title: 'IEML Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/p098_129.jpg',
      '/imgs/p099_130.jpg',
    ],
  },
  {
    slug: 'gem-jeevan-tara',
    title: 'GEM Jeevan Tara Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/p100_133.jpg',
      '/imgs/p101_134.jpg',
      '/imgs/p102_135.jpg',
    ],
  },
];
