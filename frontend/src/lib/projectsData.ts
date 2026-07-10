export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
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
    slug: 'taksha-hyderabad',
    title: 'Taksha',
    category: 'Commercial Spaces',
    description: 'A 475 sq. yd. premium builder floor by Studio AKAAI, blending comfort, functionality and exclusivity with a modern façade and luxury design.',
    images: [
      '/imgs/commercial/taksha coverimg.png',
      '/imgs/commercial/taksha.png',
      '/imgs/commercial/taksha1.png',
      '/imgs/commercial/taksha3.png',
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
    description: "A secure, luminous environment created specifically for Giva's premium jewelry collections.",
    keyStat: 'Fast-Track Fit-Out',
    images: [
      '/imgs/commercial/giaa.png',
      '/imgs/commercial/jwellary.png',
      '/imgs/commercial/jwellary2.png',
    ],
  },
  {
    slug: 'indriya',
    title: 'Indriya',
    category: 'Jewellery Showroom',
    description: 'Indriya jewellery showroom project by BrandKettle.',
    images: [
      '/imgs/commercial/indriya-placeholder.jpg',
    ],
  },
  {
    slug: 'havana-lounge-bareilly',
    title: 'Havana Lounge',
    category: 'Hospitality',
    description: 'A standout rooftop lounge at the Ramada Hotel, combining lush aesthetics with durable commercial materials.',
    images: [
      '/imgs/commercial/Havana lounge1.jpg',
      '/imgs/commercial/havana lounge2.jpg',
      '/imgs/commercial/havana lounge 3.jpg',
      '/imgs/commercial/havana lounge4.jpg',
      '/imgs/commercial/havna lounge5.jpg',
    ],
  },
  {
    slug: 'pret-a-manger-delhi',
    title: 'Pret A Manger',
    category: 'Retail',
    description: 'A high-traffic cafe fit-out ensuring fast service flow and brand consistency.',
    images: [
      '/imgs/commercial/p080_111.jpg',
    ],
  },
  {
    slug: 'ramada-encore-bareilly',
    title: 'Ramada Encore',
    category: 'Hospitality',
    description: 'Complete interior package for this prestigious hotel, from the lobby to guest rooms.',
    keyStat: '25,000 sq ft',
    images: [
      '/imgs/commercial/ramda encre hotel1.jpg',
      '/imgs/commercial/ramda encore hotel2.jpg',
      '/imgs/commercial/ramda encore hotel3.jpg',
      '/imgs/commercial/p064_079.jpg',
      '/imgs/commercial/p066_087.jpg',
    ],
  },
  {
    slug: 'nanokirti-pvt',
    title: 'Nanokirti Pvt',
    category: 'Office',
    description: 'A modernized corporate workspace tailored to reflect a forward-thinking culture.',
    images: [
      '/imgs/commercial/nanokirti pvt1.jpg',
      '/imgs/commercial/nanokirti pvt2.jpg',
      '/imgs/commercial/nanokirti pvt3.jpg',
    ],
  },
  {
    slug: 'and-work-faridabad',
    title: '&Work',
    category: 'Office',
    description: 'A collaborative, vibrant co-working hub designed to inspire productivity and connection.',
    keyStat: '15,000 sq ft',
    images: [
      '/imgs/commercial/work co workspace.jpg',
      '/imgs/commercial/work co workspace1.jpg',
      '/imgs/commercial/work co work space2.jpg',
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
    slug: 'radisson',
    title: 'Radisson',
    category: 'Hospitality',
    description: 'Radisson hotel project by BrandKettle.',
    images: [
      '/imgs/commercial/radisson-placeholder.jpg',
    ],
  }
];
