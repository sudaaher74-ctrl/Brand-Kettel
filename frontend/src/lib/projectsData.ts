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
      '/imgs/commercial/guccicoverimg.png',
      '/imgs/commercial/gucci.png',
      '/imgs/commercial/gucci1.png',
    ],
  },
  {
    slug: 'malabar-gold',
    title: 'Malabar Gold & Diamonds',
    category: 'Jewellery Showroom',
    description: "BrandKettle's collaboration with Malabar marked a breakthrough in luxury retail — elevating Malabar's presence and reinforcing BrandKettle's reputation as a trusted high-end retail partner.",
    images: [
      '/imgs/commercial/malabarcoverimg.png',
      '/imgs/commercial/malbargold1.jpg',
      '/imgs/commercial/malbargold2.jpg',
      '/imgs/commercial/malbargold3.jpg',
      '/imgs/commercial/malbargold4.jpg',
    ],
  },
  {
    slug: 'png',
    title: 'PNG Jewellers',
    category: 'Jewellery Showroom',
    description: "BrandKettle transformed a 3,400 sq ft space in Goregaon into a luxurious retail destination in just 27 days. A turnkey project blending elegance and efficiency, bringing the brand's vision to life with precision and speed.",
    images: [
      '/imgs/commercial/pnjcoverimg.png',
      '/imgs/commercial/png2.jpg',
      '/imgs/commercial/png3.jpg',
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
      '/imgs/commercial/ramda encre hotel1.jpg',
      '/imgs/commercial/ramda encore hotel2.jpg',
      '/imgs/commercial/ramda encore hotel3.jpg',
    ],
  },
  {
    slug: 'havana-lounge',
    title: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    description: 'A standout rooftop project at the Ramada hotel, highlighting expertise in design thinking, detailing and craftsmanship.',
    images: [
      '/imgs/commercial/Havana lounge1.jpg',
      '/imgs/commercial/havana lounge2.jpg',
      '/imgs/commercial/havana lounge 3.jpg',
      '/imgs/commercial/havana lounge4.jpg',
      '/imgs/commercial/havna lounge5.jpg',
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
      '/imgs/commercial/work co workspace.jpg',
      '/imgs/commercial/work co workspace1.jpg',
      '/imgs/commercial/work co work space2.jpg',
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
      '/imgs/commercial/nanokirti pvt1.jpg',
      '/imgs/commercial/nanokirti pvt2.jpg',
      '/imgs/commercial/nanokirti pvt3.jpg',
    ],
  },
  {
    slug: 'lic',
    title: 'LIC Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/lic1.jpg',
      '/imgs/commercial/lic2.jpg',
      '/imgs/commercial/lic3.jpg',
      '/imgs/commercial/lic4.jpg',
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
    ],
  },
  {
    slug: 'gem-jeevan-tara',
    title: 'GEM Jeevan Tara Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/imgs/commercial/GEM jeevan tara.jpg',
      '/imgs/commercial/gevantara2.jpg',
      '/imgs/commercial/geven tara 3.jpg',
    ],
  },
];

