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
      '/imgs/commercial/gucci-green.webp',
      '/imgs/commercial/gucci.webp',
      '/imgs/commercial/gucci-1.webp',
    ],
  },
  {
    slug: 'taksha-hyderabad',
    title: 'Taksha',
    category: 'Commercial Spaces',
    description: 'A 475 sq. yd. premium builder floor by Studio AKAAI, blending comfort, functionality and exclusivity with a modern façade and luxury design.',
    images: [
      '/imgs/commercial/taksha-hyderabad-cover.webp',
      '/imgs/commercial/taksha.webp',
      '/imgs/commercial/taksha-1.webp',
      '/imgs/commercial/taksha-3.webp',
    ],
  },
  {
    slug: 'png',
    title: 'PNG Jewellers',
    category: 'Jewellery Showroom',
    description: "BrandKettle transformed a 3,400 sq ft space in Goregaon into a luxurious retail destination in just 27 days. A turnkey project blending elegance and efficiency, bringing the brand's vision to life with precision and speed.",
    images: [
      '/imgs/commercial/png1.jpg',
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
      '/imgs/commercial/giva.webp',
      '/imgs/commercial/jewellery-showroom-display.webp',
      '/imgs/commercial/jewellery-showroom-display-2.webp',
    ],
  },
  {
    slug: 'indriya',
    title: 'Indriya',
    category: 'Jewellery Showroom',
    description: "A high-end jewellery showroom for the Indriya brand, designed to project luxury and exclusivity. BrandKettle's scope covered full interior fit-out including bespoke display counters, ambient lighting design and custom millwork.",
    images: [
      '/imgs/commercial/jewellery-showroom-display.webp',
      '/imgs/commercial/jewellery-showroom-display-2.webp',
    ],
  },
  {
    slug: 'havana-lounge-bareilly',
    title: 'Havana Lounge',
    category: 'Hospitality',
    description: 'A standout rooftop lounge at the Ramada Hotel, combining lush aesthetics with durable commercial materials.',
    images: [
      '/imgs/commercial/havana-lounge-bareilly-1.jpg',
      '/imgs/commercial/havana-lounge-bareilly-2.jpg',
      '/imgs/commercial/havana-lounge-bareilly-3.jpg',
      '/imgs/commercial/havana-lounge-bareilly-4.jpg',
      '/imgs/commercial/havana-lounge-bareilly-5.jpg',
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
      '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
      '/imgs/commercial/ramada-encore-bareilly-hotel-2.jpg',
      '/imgs/commercial/ramada-encore-bareilly-hotel-3.jpg',
      '/imgs/commercial/p066_087.jpg',
    ],
  },
  {
    slug: 'nanokirti-pvt',
    title: 'Nanokirti Pvt',
    category: 'Office',
    description: 'A modernized corporate workspace tailored to reflect a forward-thinking culture.',
    images: [
      '/imgs/commercial/nanokirti-office-1.jpg',
      '/imgs/commercial/nanokirti-office-2.jpg',
      '/imgs/commercial/nanokirti-office-3.jpg',
    ],
  },
  {
    slug: 'and-work-faridabad',
    title: '&Work',
    category: 'Office',
    description: 'A collaborative, vibrant co-working hub designed to inspire productivity and connection.',
    keyStat: '15,000 sq ft',
    images: [
      '/imgs/commercial/and-work-faridabad-coworking.jpg',
      '/imgs/commercial/and-work-faridabad-coworking-2.jpg',
      '/imgs/commercial/and-work-faridabad-coworking-3.jpg',
    ],
  }
];
