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
      '/images/p021_placeholder.jpg',
      '/images/p022_placeholder.jpg',
      '/images/p023_placeholder.jpg',
      '/images/p024_placeholder.jpg',
      '/images/p025_placeholder.jpg',
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
      '/images/p027_placeholder.jpg',
      '/images/p028_placeholder.jpg',
      '/images/p029_placeholder.jpg',
      '/images/p030_placeholder.jpg',
      '/images/p031_placeholder.jpg',
    ],
  },
  {
    slug: 'khimji-jewellers',
    title: 'Khimji Jewellers',
    category: 'Retail',
    description: 'Building the Khimji Jewellers store was a learning curve for the BrandKettle team — adopting and delivering interior standards set by a legacy dating back to 1936.',
    keyStat: 'Legacy dating back to 1936',
    images: [
      '/images/p032_placeholder.jpg',
      '/images/p033_placeholder.jpg',
      '/images/p034_placeholder.jpg',
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
      '/images/p035_placeholder.jpg',
      '/images/p036_placeholder.jpg',
      '/images/p037_placeholder.jpg',
      '/images/p038_placeholder.jpg',
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
      '/images/p039_placeholder.jpg',
      '/images/p040_placeholder.jpg',
      '/images/p041_placeholder.jpg',
    ],
  },
  {
    slug: 'pmj-jewellers',
    title: 'PMJ Jewellers',
    category: 'Retail',
    description: 'A standout partnership crafting a luxurious jewellery shopping experience — highlighting BrandKettle\'s expertise as a premier fit-out manufacturer.',
    images: [
      '/images/p042_placeholder.jpg',
      '/images/p043_placeholder.jpg',
      '/images/p044_placeholder.jpg',
    ],
  },
  {
    slug: 'kisna-jewellery',
    title: 'Kisna Diamond & Gold Jewellery',
    location: 'Jaya Nagar, Bangalore',
    category: 'Retail',
    description: 'Features an elegant, functional design that enhances the jewellery shopping experience with refined lighting and a welcoming layout.',
    images: [
      '/images/p045_placeholder.jpg',
      '/images/p046_placeholder.jpg',
      '/images/p047_placeholder.jpg',
    ],
  },
  {
    slug: 'giva',
    title: 'Giva',
    category: 'Retail',
    description: 'Giva store by BrandKettle.',
    images: [
      '/images/p048_placeholder.jpg',
    ],
  },
  {
    slug: 'gucci',
    title: 'Gucci',
    category: 'Retail',
    description: 'BrandKettle\'s first high-end luxury project. Every detail, from custom finishes to ambient lighting, reflects the iconic elegance of the Gucci brand.',
    keyStat: 'First Luxury Project',
    images: [
      '/images/p049_placeholder.jpg',
      '/images/p050_placeholder.jpg',
      '/images/p051_placeholder.jpg',
      '/images/p052_placeholder.jpg',
      '/images/p053_placeholder.jpg',
    ],
  },
  {
    slug: 'pushpanjali-jewels',
    title: 'Pushpanjali Jewels',
    location: 'Noida',
    category: 'Retail',
    description: 'A new showroom crafted to reflect timeless elegance and modern luxury, elevating the jewellery buying experience.',
    images: [
      '/images/p054_placeholder.jpg',
      '/images/p055_placeholder.jpg',
      '/images/p056_placeholder.jpg',
    ],
  },
  {
    slug: 'nike',
    title: 'Nike',
    category: 'Retail',
    description: 'Iconic Nike project showcasing electrifying interiors designed to inspire athletes.',
    keyStat: '2 stories, 7,997 sq ft',
    images: [
      '/images/p057_placeholder.jpg',
      '/images/p058_placeholder.jpg',
    ],
  },
  {
    slug: 'marks-and-spencer',
    title: 'Marks & Spencer',
    category: 'Retail',
    description: 'Store designing and construction completed on time, allowing the store to open as planned.',
    keyStat: 'Completed on time',
    images: [
      '/images/p059_placeholder.jpg',
    ],
  },
  {
    slug: 'tira',
    title: 'Tira',
    category: 'Retail',
    description: 'Tira store by BrandKettle.',
    images: [
      '/images/p060_placeholder.jpg',
      '/images/p061_076.jpg',
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
      '/images/p062_077.jpg',
      '/images/p063_078.jpg',
      '/images/p064_079.jpg',
      '/images/p065_082.jpg',
      '/images/p066_085.jpg',
    ],
  },
  {
    slug: 'radisson-blu-greater-noida',
    title: 'Radisson Blu Hotel',
    location: 'Greater Noida',
    category: 'Hospitality',
    description: 'A landmark property in the heart of the city\'s corporate and residential hub. Work elevates the guest experience.',
    images: [
      '/images/p068_089.jpg',
      '/images/p069_091.jpg',
      '/images/p070_094.jpg',
      '/images/p067_placeholder.jpg',
    ],
  },
  {
    slug: 'havana-lounge',
    title: 'Havana Lounge',
    location: 'Bareilly',
    category: 'Hospitality',
    description: 'A standout rooftop project at the Ramada hotel, highlighting expertise in design thinking, detailing and craftsmanship.',
    images: [
      '/images/p071_096.jpg',
      '/images/p072_097.jpg',
      '/images/p073_100.jpg',
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
      '/images/p074_placeholder.jpg',
      '/images/p075_placeholder.jpg',
      '/images/p076_107.jpg',
    ],
  },
  {
    slug: 'and-work',
    title: '&Work',
    location: 'Faridabad',
    category: 'Workspace',
    description: 'A fun and creative co-working space delivered in Faridabad.',
    images: [
      '/images/p077_108.jpg',
      '/images/p078_109.jpg',
      '/images/p079_110.jpg',
    ],
  },
  {
    slug: 'pret-a-manger',
    title: 'Pret A Manger',
    location: 'Select City Walk, Delhi',
    category: 'Hospitality',
    description: 'Creating a vibrant and inviting space that brings the renowned brand to the heart of Delhi.',
    images: [
      '/images/p080_111.jpg',
    ],
  },
  {
    slug: 'nipccd',
    title: 'NIPCCD by NBCC',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/images/p081_112.jpg',
      '/images/p082_113.jpg',
      '/images/p083_114.jpg',
    ],
  },
  {
    slug: 'cgewho',
    title: 'CGEWHO Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/images/p085_116.jpg',
      '/images/p086_117.jpg',
      '/images/p087_118.jpg',
    ],
  },
  {
    slug: 'iit-ropar',
    title: 'IIT Ropar Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/images/p089_placeholder.jpg',
      '/images/p090_121.jpg',
      '/images/p091_122.jpg',
      '/images/p092_123.jpg',
    ],
  },
  {
    slug: 'lic',
    title: 'LIC Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/images/p093_placeholder.jpg',
      '/images/p094_125.jpg',
      '/images/p095_126.jpg',
      '/images/p096_127.jpg',
    ],
  },
  {
    slug: 'ieml',
    title: 'IEML Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/images/p097_placeholder.jpg',
      '/images/p098_129.jpg',
      '/images/p099_130.jpg',
    ],
  },
  {
    slug: 'gem-jeevan-tara',
    title: 'GEM Jeevan Tara Project',
    category: 'Government',
    description: 'Government and Institutional Project.',
    images: [
      '/images/p100_133.jpg',
      '/images/p101_134.jpg',
      '/images/p102_135.jpg',
    ],
  },
];
