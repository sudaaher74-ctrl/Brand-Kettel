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
    slug: 'malabar-gold-diamonds',
    title: 'Malabar Gold & Diamonds',
    category: 'Retail',
    description: 'BrandKettle\'s collaboration with Malabar marked a breakthrough in luxury retail, blending creativity and precision to create a lasting impression.',
    keyStat: 'Breakthrough Project',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'indriya-aditya-birla',
    title: 'Indriya by Novel Jewels (Aditya Birla)',
    location: 'Karol Bagh, New Delhi',
    category: 'Retail',
    description: 'Delhi Indriya Flagship Store flawlessly finished meeting the fixed launch date. Opening celebrated with Kumar Mangalam Birla.',
    keyStat: '15,000 sq ft in 60 days',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'khimji-jewellers',
    title: 'Khimji Jewellers',
    category: 'Retail',
    description: 'Building the Khimji Jewellers store was a learning curve for the BrandKettle team — adopting and delivering interior standards set by a legacy dating back to 1936.',
    keyStat: 'Legacy dating back to 1936',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'png-jewellers',
    title: 'PNG Jewellers',
    location: 'Goregaon, Mumbai',
    category: 'Retail',
    description: 'A turnkey project blending elegance and efficiency, bringing the brand\'s vision to life with precision and speed.',
    keyStat: '3,400 sq ft in 27 days',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'kalyan-candere',
    title: 'Kalyan Candere',
    location: 'Gaur City Mall',
    category: 'Retail',
    description: 'A milestone collaboration for the new Kalyan Candere store, handed over before schedule.',
    keyStat: 'Handed over before schedule',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'pmj-jewellers',
    title: 'PMJ Jewellers',
    category: 'Retail',
    description: 'A standout partnership crafting a luxurious jewellery shopping experience — highlighting BrandKettle\'s expertise as a premier fit-out manufacturer.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'kisna-jewellery',
    title: 'Kisna Diamond & Gold Jewellery',
    location: 'Jaya Nagar, Bangalore',
    category: 'Retail',
    description: 'Features an elegant, functional design that enhances the jewellery shopping experience with refined lighting and a welcoming layout.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'giva',
    title: 'Giva',
    category: 'Retail',
    description: 'Giva store by BrandKettle.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'gucci',
    title: 'Gucci',
    category: 'Retail',
    description: 'BrandKettle\'s first high-end luxury project. Every detail, from custom finishes to ambient lighting, reflects the iconic elegance of the Gucci brand.',
    keyStat: 'First Luxury Project',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'pushpanjali-jewels',
    title: 'Pushpanjali Jewels',
    location: 'Noida',
    category: 'Retail',
    description: 'A new showroom crafted to reflect timeless elegance and modern luxury, elevating the jewellery buying experience.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'nike',
    title: 'Nike',
    category: 'Retail',
    description: 'Iconic Nike project showcasing electrifying interiors designed to inspire athletes.',
    keyStat: '2 stories, 7,997 sq ft',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'marks-and-spencer',
    title: 'Marks & Spencer',
    category: 'Retail',
    description: 'Store designing and construction completed on time, allowing the store to open as planned.',
    keyStat: 'Completed on time',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
  },
  {
    slug: 'tira',
    title: 'Tira',
    category: 'Retail',
    description: 'Tira store by BrandKettle.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      '/imgs/p061_076.jpg',
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
      '/imgs/p070_094.jpg',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      '/imgs/p076_107.jpg',
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
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      '/imgs/p082_113.jpg',
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
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      '/imgs/p090_121.jpg',
      '/imgs/p091_122.jpg',
      '/imgs/p092_123.jpg',
    ],
  },
  {
    slug: 'lic',
    title: 'LIC Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      '/imgs/p094_125.jpg',
      '/imgs/p095_126.jpg',
      '/imgs/p096_127.jpg',
    ],
  },
  {
    slug: 'ieml',
    title: 'IEML Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70',
      '/imgs/p098_129.jpg',
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
