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
    images: [      '/imgs/commercial/p061_076.jpg',
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
      '/imgs/commercial/p062_077.jpg',
      '/imgs/commercial/p063_078.jpg',
      '/imgs/commercial/p064_079.jpg',
      '/imgs/commercial/p065_082.jpg',
      '/imgs/commercial/p066_085.jpg',
    ],
  },
  {
    slug: 'radisson-blu-greater-noida',
    title: 'Radisson Blu Hotel',
    location: 'Greater Noida',
    category: 'Hospitality',
    description: 'A landmark property in the heart of the city\'s corporate and residential hub. Work elevates the guest experience.',
    images: [
      '/imgs/commercial/p068_089.jpg',
      '/imgs/commercial/p069_091.jpg',
      '/imgs/commercial/p070_094.jpg',    ],
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
      '/imgs/commercial/p073_100.jpg',
    ],
  },
  {
    slug: 'taksha-hyderabad',
    title: 'Taksha',
    location: 'Hyderabad',
    category: 'Residential',
    description: 'A premium builder floor blending comfort, functionality and exclusivity with a modern façade and luxury design — redefining contemporary urban living.',
    keyStat: '475 sq yd',
    images: [      '/imgs/residential/p076_107.jpg',
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
    slug: 'nipccd',
    title: 'NIPCCD by NBCC',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/commercial/p082_113.jpg',
      '/imgs/commercial/p083_114.jpg',
    ],
  },
  {
    slug: 'cgewho',
    title: 'CGEWHO Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/p085_116.jpg',
      '/imgs/commercial/p086_117.jpg',
      '/imgs/commercial/p087_118.jpg',
    ],
  },
  {
    slug: 'iit-ropar',
    title: 'IIT Ropar Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/commercial/p090_121.jpg',
      '/imgs/commercial/p091_122.jpg',
      '/imgs/commercial/p092_123.jpg',
    ],
  },
  {
    slug: 'lic',
    title: 'LIC Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/commercial/p094_125.jpg',
      '/imgs/commercial/p095_126.jpg',
      '/imgs/commercial/p096_127.jpg',
    ],
  },
  {
    slug: 'ieml',
    title: 'IEML Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [      '/imgs/commercial/p098_129.jpg',
      '/imgs/commercial/p099_130.jpg',
    ],
  },
  {
    slug: 'gem-jeevan-tara',
    title: 'GEM Jeevan Tara Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/p100_133.jpg',
      '/imgs/commercial/p101_134.jpg',
      '/imgs/commercial/p102_135.jpg',
    ],
  },
];
