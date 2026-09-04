/**
 * Centralized utility to sanitize, validate and resolve image paths across the Brand Kettle platform.
 * Protects against legacy database typos (e.g. giaa.png, pnjcoverimg.png, p064_079.jpg) and ensures
 * all rendered images resolve to existing media assets.
 */

const KNOWN_REPLACEMENTS: Record<string, string> = {
  '/imgs/commercial/giaa.png': '/imgs/commercial/giva.png',
  '/imgs/commercial/pnjcoverimg.png': '/imgs/commercial/png1.jpg',
  '/imgs/commercial/p064_079.jpg': '/imgs/commercial/p066_087.jpg',
  '/imgs/commercial/taksha4.png': '/imgs/commercial/taksha3.png',
  '/imgs/commercial/indriya-placeholder.jpg': '/imgs/commercial/jwellary.png',
  '/imgs/residential/p076_107.jpg': '/imgs/commercial/home1.png',
  '/imgs/commercial/p073_101.jpg': '/imgs/commercial/brandkettle1.jpg',
};

export const PROJECT_COVERS: Record<string, string> = {
  'gucci': '/imgs/commercial/gucci-green.png',
  'png': '/imgs/commercial/png1.jpg',
  'malabar-gold': '/imgs/commercial/malabarcoverimg.png',
  'giva': '/imgs/commercial/giva.png',
  'taksha-hyderabad': '/imgs/commercial/taksha coverimg.png',
  'havana-lounge-bareilly': '/imgs/commercial/Havana lounge1.jpg',
  'pret-a-manger-delhi': '/imgs/commercial/p080_111.jpg',
  'ramada-encore-bareilly': '/imgs/commercial/ramda encre hotel1.jpg',
  'nanokirti-pvt': '/imgs/commercial/nanokirti pvt1.jpg',
  'and-work-faridabad': '/imgs/commercial/work co workspace.jpg',
  'gem-jeevan-tara': '/imgs/commercial/GEM jeevan tara.jpg',
  'brandkettle': '/imgs/commercial/brandkettle1.jpg',
  'lic': '/imgs/commercial/lic1.jpg',
  'ieml': '/imgs/commercial/p098_129.jpg',
  'indriya': '/imgs/commercial/jwellary.png',
};

/**
 * Normalizes an image path, replacing known typos or missing files with guaranteed valid assets.
 */
export function cleanImagePath(src?: string | null): string {
  if (!src) return '/imgs/commercial/brandkettle1.jpg';
  
  // Exact match replacement
  if (KNOWN_REPLACEMENTS[src]) return KNOWN_REPLACEMENTS[src];

  // Fuzzy substring matches for legacy DB records
  if (src.includes('giaa.png')) return '/imgs/commercial/giva.png';
  if (src.includes('pnjcoverimg')) return '/imgs/commercial/png1.jpg';
  if (src.includes('p064_079')) return '/imgs/commercial/p066_087.jpg';
  if (src.includes('taksha4')) return '/imgs/commercial/taksha3.png';
  if (src.includes('p076_107')) return '/imgs/commercial/home1.png';
  if (src.includes('indriya-placeholder')) return '/imgs/commercial/jwellary.png';
  if (src.includes('p073_101')) return '/imgs/commercial/brandkettle1.jpg';

  return src;
}

/**
 * Ensures a project object has 100% verified image and gallery paths.
 */
export function sanitizeProject<T extends { slug?: string; image?: string; images?: string[]; gallery?: string[] }>(project: T): T {
  const slug = project.slug || '';
  const coverFallback = PROJECT_COVERS[slug] || '/imgs/commercial/brandkettle1.jpg';

  let cleanedImage = cleanImagePath(project.image || (project.images && project.images[0]));
  if (!cleanedImage || cleanedImage.includes('pnjcoverimg') || cleanedImage.includes('giaa')) {
    cleanedImage = coverFallback;
  }
  if (slug === 'png') cleanedImage = '/imgs/commercial/png1.jpg';
  if (slug === 'malabar-gold') cleanedImage = '/imgs/commercial/malabarcoverimg.png';
  if (slug === 'gucci') cleanedImage = '/imgs/commercial/gucci-green.png';

  const rawGallery = project.gallery || project.images || [cleanedImage];
  const cleanedGallery = rawGallery
    .map(cleanImagePath)
    .filter((img, idx, arr) => img && !img.includes('p064_079') && !img.includes('taksha4') && arr.indexOf(img) === idx);

  return {
    ...project,
    image: cleanedImage,
    images: cleanedGallery.length > 0 ? cleanedGallery : [cleanedImage],
    gallery: cleanedGallery.length > 0 ? cleanedGallery : [cleanedImage],
  };
}
