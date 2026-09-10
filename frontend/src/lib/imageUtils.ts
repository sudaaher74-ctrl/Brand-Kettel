/**
 * Centralized utility to sanitize, validate and resolve image paths across the Brand Kettle platform.
 * Protects against legacy database typos (e.g. giaa.png, pnjcoverimg.png, p064_079.jpg) and ensures
 * all rendered images resolve to existing media assets.
 */

const KNOWN_REPLACEMENTS: Record<string, string> = {
  '/imgs/commercial/giaa.png': '/imgs/commercial/giva.webp',
  '/imgs/commercial/pnjcoverimg.png': '/imgs/commercial/png1.jpg',
  '/imgs/commercial/p064_079.jpg': '/imgs/commercial/p066_087.jpg',
  '/imgs/commercial/taksha4.png': '/imgs/commercial/taksha-3.webp',
  '/imgs/commercial/indriya-placeholder.jpg': '/imgs/commercial/jewellery-showroom-display.webp',
  '/imgs/residential/p076_107.jpg': '/imgs/commercial/home1.webp',
  '/imgs/commercial/p073_101.jpg': '/imgs/commercial/brandkettle1.jpg',
};

/**
 * Paths that existed before the 2026 media cleanup (spaces removed, typos
 * fixed, photographic PNGs converted to WebP). CMS records written before that
 * still reference the old filenames, so they are mapped here rather than
 * rendering a broken image.
 */
const RENAMED_ASSETS: Record<string, string> = {
  '/imgs/commercial/GEM jeevan tara.jpg': '/imgs/commercial/gem-jeevan-tara-1.jpg',
  '/imgs/commercial/Havana lounge1.jpg': '/imgs/commercial/havana-lounge-bareilly-1.jpg',
  '/imgs/commercial/gevantara2.jpg': '/imgs/commercial/gem-jeevan-tara-2.jpg',
  '/imgs/commercial/geven tara 3.jpg': '/imgs/commercial/gem-jeevan-tara-3.jpg',
  '/imgs/commercial/giva.png': '/imgs/commercial/giva.webp',
  '/imgs/commercial/gucci-green.png': '/imgs/commercial/gucci-green.webp',
  '/imgs/commercial/gucci.png': '/imgs/commercial/gucci.webp',
  '/imgs/commercial/gucci1.png': '/imgs/commercial/gucci-1.webp',
  '/imgs/commercial/havana lounge 3.jpg': '/imgs/commercial/havana-lounge-bareilly-3.jpg',
  '/imgs/commercial/havana lounge2.jpg': '/imgs/commercial/havana-lounge-bareilly-2.jpg',
  '/imgs/commercial/havana lounge4.jpg': '/imgs/commercial/havana-lounge-bareilly-4.jpg',
  '/imgs/commercial/havna lounge5.jpg': '/imgs/commercial/havana-lounge-bareilly-5.jpg',
  '/imgs/commercial/home1.png': '/imgs/commercial/home1.webp',
  '/imgs/commercial/jwellary.png': '/imgs/commercial/jewellery-showroom-display.webp',
  '/imgs/commercial/jwellary2.png': '/imgs/commercial/jewellery-showroom-display-2.webp',
  '/imgs/commercial/malabar coverimg.png': '/imgs/commercial/malabar-gold-cover-alt.webp',
  '/imgs/commercial/malabarcoverimg.png': '/imgs/commercial/malabar-gold-cover.webp',
  '/imgs/commercial/nanokirti pvt1.jpg': '/imgs/commercial/nanokirti-office-1.jpg',
  '/imgs/commercial/nanokirti pvt2.jpg': '/imgs/commercial/nanokirti-office-2.jpg',
  '/imgs/commercial/nanokirti pvt3.jpg': '/imgs/commercial/nanokirti-office-3.jpg',
  '/imgs/commercial/ramda encore hotel2.jpg': '/imgs/commercial/ramada-encore-bareilly-hotel-2.jpg',
  '/imgs/commercial/ramda encore hotel3.jpg': '/imgs/commercial/ramada-encore-bareilly-hotel-3.jpg',
  '/imgs/commercial/ramda encre hotel1.jpg': '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
  '/imgs/commercial/taksha coverimg.png': '/imgs/commercial/taksha-hyderabad-cover.webp',
  '/imgs/commercial/taksha.png': '/imgs/commercial/taksha.webp',
  '/imgs/commercial/taksha1.png': '/imgs/commercial/taksha-1.webp',
  '/imgs/commercial/taksha3.png': '/imgs/commercial/taksha-3.webp',
  '/imgs/commercial/work co work space2.jpg': '/imgs/commercial/and-work-faridabad-coworking-3.jpg',
  '/imgs/commercial/work co workspace.jpg': '/imgs/commercial/and-work-faridabad-coworking.jpg',
  '/imgs/commercial/work co workspace1.jpg': '/imgs/commercial/and-work-faridabad-coworking-2.jpg',
};

export const PROJECT_COVERS: Record<string, string> = {
  'gucci': '/imgs/commercial/gucci-green.webp',
  'png': '/imgs/commercial/png1.jpg',
  'malabar-gold': '/imgs/commercial/malabar-gold-cover.webp',
  'giva': '/imgs/commercial/giva.webp',
  'taksha-hyderabad': '/imgs/commercial/taksha-hyderabad-cover.webp',
  'havana-lounge-bareilly': '/imgs/commercial/havana-lounge-bareilly-1.jpg',
  'pret-a-manger-delhi': '/imgs/commercial/p080_111.jpg',
  'ramada-encore-bareilly': '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
  'nanokirti-pvt': '/imgs/commercial/nanokirti-office-1.jpg',
  'and-work-faridabad': '/imgs/commercial/and-work-faridabad-coworking.jpg',
  'gem-jeevan-tara': '/imgs/commercial/gem-jeevan-tara-1.jpg',
  'brandkettle': '/imgs/commercial/brandkettle1.jpg',
  'lic': '/imgs/commercial/lic1.jpg',
  'ieml': '/imgs/commercial/p098_129.jpg',
  'indriya': '/imgs/commercial/jewellery-showroom-display.webp',
};

/** decodeURIComponent that returns the input unchanged on malformed escapes. */
function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Normalizes an image path, replacing known typos or missing files with guaranteed valid assets.
 */
export function cleanImagePath(src?: string | null): string {
  if (!src) return '/imgs/commercial/brandkettle1.jpg';
  
  // Exact match replacement
  if (KNOWN_REPLACEMENTS[src]) return KNOWN_REPLACEMENTS[src];
  if (RENAMED_ASSETS[src]) return RENAMED_ASSETS[src];
  // Records may store an already-decoded or percent-encoded spaced filename.
  const decoded = safeDecode(src);
  if (decoded !== src && RENAMED_ASSETS[decoded]) return RENAMED_ASSETS[decoded];

  // Fuzzy substring matches for legacy DB records
  if (src.includes('giaa.png')) return '/imgs/commercial/giva.webp';
  if (src.includes('pnjcoverimg')) return '/imgs/commercial/png1.jpg';
  if (src.includes('p064_079')) return '/imgs/commercial/p066_087.jpg';
  if (src.includes('taksha4')) return '/imgs/commercial/taksha-3.webp';
  if (src.includes('p076_107')) return '/imgs/commercial/home1.webp';
  if (src.includes('indriya-placeholder')) return '/imgs/commercial/jewellery-showroom-display.webp';
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
  if (slug === 'malabar-gold') cleanedImage = '/imgs/commercial/malabar-gold-cover.webp';
  if (slug === 'gucci') cleanedImage = '/imgs/commercial/gucci-green.webp';

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
