const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, 'src/lib/data.ts');
let data = fs.readFileSync(dataFile, 'utf8');

const imgFiles = fs.readdirSync(path.join(__dirname, 'public/imgs')).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const getGallery = (prefixList) => {
  const gallery = [];
  for (const prefix of prefixList) {
    const match = imgFiles.filter(f => f.startsWith(prefix + '_') || f === prefix + '.jpg');
    match.forEach(m => gallery.push(`/imgs/${m}`));
  }
  return gallery;
};

data = data.replace(/gallery: \[(.*?)\]/g, (match, p1) => {
  const items = p1.split(',').map(i => i.trim().replace(/['"]/g, '')).filter(i => i.startsWith('/images/'));
  const prefixes = items.map(i => i.replace('/images/', '').replace('.jpg', ''));
  const realGallery = getGallery(prefixes);
  if (realGallery.length > 0) {
    return `gallery: [${realGallery.map(r => `'${r}'`).join(', ')}]`;
  }
  return match;
});

data = data.replace(/image: '(\/images\/p\d+\.jpg)'/g, (match, p1) => {
  const prefix = p1.replace('/images/', '').replace('.jpg', '');
  const realGallery = getGallery([prefix]);
  if (realGallery.length > 0) {
    return `image: '${realGallery[0]}'`;
  }
  // Fallback to placeholder if no image exists
  return `image: img('photo-1497366754035-f200968a6e72')`;
});

// Update any gallery that is still pointing to /images/
data = data.replace(/gallery: \[(.*?)\]/g, (match, p1) => {
  if (p1.includes('/images/')) {
     // if it still has /images/, it means no real files were found. Fallback to empty or placeholder.
     return `gallery: [img('photo-1497366754035-f200968a6e72')]`;
  }
  return match;
});

fs.writeFileSync(dataFile, data);
console.log('Fixed data.ts');
