const fs = require('fs');
const path = require('path');

const pFile = path.join(__dirname, 'src/lib/projectsData.ts');
let pContent = fs.readFileSync(pFile, 'utf8');

const newCaseStudies = `
  {
    slug: 'gucci',
    title: 'Gucci',
    category: 'Retail',
    description: 'BrandKettle\'s first high-end luxury project. Every detail, from custom finishes to ambient lighting, reflects the iconic elegance of the Gucci brand.',
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
`;

// Add to caseStudies array
pContent = pContent.replace(/];\s*$/m, newCaseStudies + '];\n');

// Also add image.png to Taksha images array
pContent = pContent.replace(
  /(slug:\s*'taksha-hyderabad'[\s\S]*?images:\s*\[\s*'\/imgs\/residential\/p076_107\.jpg',)/,
  "$1\n      '/imgs/residential/image.png',"
);

fs.writeFileSync(pFile, pContent);

const dFile = path.join(__dirname, 'src/lib/data.ts');
let dContent = fs.readFileSync(dFile, 'utf8');

const newProjects = `
  {
    slug: 'gucci',
    name: 'Gucci',
    location: 'India',
    category: 'Luxury Retail',
    area: '',
    year: '',
    image: '/imgs/commercial/gucci.png',
    gallery: ['/imgs/commercial/gucci.png', '/imgs/commercial/gucci1.png'],
    blurb: 'First high-end luxury project reflecting the iconic elegance of the brand.',
    segment: 'commercial',
  },
  {
    slug: 'giva',
    name: 'Giva',
    location: 'India',
    category: 'Jewellery Showroom',
    area: '',
    year: '',
    image: '/imgs/commercial/giaa.png',
    gallery: ['/imgs/commercial/giaa.png', '/imgs/commercial/jwellary.png', '/imgs/commercial/jwellary2.png'],
    blurb: 'Giva store by BrandKettle.',
    segment: 'commercial',
  },
`;

// Add to projects array
dContent = dContent.replace(/];\s*\n\s*export type Service/, newProjects + '];\n\nexport type Service');

// Also add image.png to Taksha gallery
dContent = dContent.replace(
  /(slug:\s*'taksha-hyderabad'[\s\S]*?gallery:\s*\[\s*'\/imgs\/residential\/p076_107\.jpg')/,
  "$1, '/imgs/residential/image.png'"
);

fs.writeFileSync(dFile, dContent);

console.log('Added new projects!');
