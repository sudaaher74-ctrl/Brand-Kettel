const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function fileExists(imgUrl) {
  if (!imgUrl || !imgUrl.startsWith('/imgs/')) return false;
  const filePath = path.join(publicDir, imgUrl);
  return fs.existsSync(filePath);
}

// Fix projectsData.ts
const pFile = path.join(__dirname, 'src/lib/projectsData.ts');
let pContent = fs.readFileSync(pFile, 'utf8');

// We can just find all image strings and remove the ones that don't exist
pContent = pContent.replace(/'(\/imgs\/[^']+)'/g, (match, url) => {
  if (fileExists(url)) {
    return match;
  } else {
    return `'MISSING'`; // Mark as missing
  }
});

// Remove the 'MISSING' entries
pContent = pContent.replace(/\s*'MISSING',?/g, '');

// Remove projects with empty images array
let prev;
do {
  prev = pContent;
  pContent = pContent.replace(/\s*\{[^{}]*images:\s*\[\s*\],?[^{}]*\},?/g, '');
} while (pContent !== prev);

fs.writeFileSync(pFile, pContent);


// Fix data.ts
const dFile = path.join(__dirname, 'src/lib/data.ts');
let dContent = fs.readFileSync(dFile, 'utf8');

dContent = dContent.replace(/'(\/imgs\/[^']+)'/g, (match, url) => {
  if (fileExists(url)) {
    return match;
  } else {
    return `'MISSING'`;
  }
});

dContent = dContent.replace(/\s*'MISSING',?/g, '');
do {
  prev = dContent;
  dContent = dContent.replace(/\s*\{[^{}]*gallery:\s*\[\s*\],?[^{}]*\},?/g, '');
} while (dContent !== prev);

// Finally, if `image:` is missing, we need to fix it. `image: 'MISSING'`.
// We can replace it with the first item in the gallery.
dContent = dContent.replace(/image:\s*'MISSING',\s*gallery:\s*\[\s*'([^']+)'/g, "image: '$1',\n    gallery: ['$1'");
// And for services, if image is MISSING, replace with a known good one.
const knownGood = "'/imgs/commercial/p077_108.jpg'";
dContent = dContent.replace(/image:\s*'MISSING'/g, `image: ${knownGood}`);

fs.writeFileSync(dFile, dContent);

console.log('Cleaned missing images!');
