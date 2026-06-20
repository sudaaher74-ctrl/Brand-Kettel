const fs = require('fs');
const path = require('path');

function cleanProjectsData() {
  const pFile = path.join(__dirname, 'src/lib/projectsData.ts');
  let data = fs.readFileSync(pFile, 'utf8');
  
  // Remove unsplash image lines
  // They look like: 'https://images.unsplash.com/...',
  data = data.replace(/\s*'https:\/\/images\.unsplash\.com\/[^']+',\n?/g, '');
  
  // Now, some projects might have empty images array: images: [
  //    ]
  // We should remove projects that have empty images array.
  // They look like:
  //  {
  //    slug: '...', ... 
  //    images: [
  //    ],
  //  },
  
  let prev;
  do {
    prev = data;
    data = data.replace(/\s*\{[^{}]*images:\s*\[\s*\],?[^{}]*\},?/g, '');
  } while (data !== prev);
  
  fs.writeFileSync(pFile, data);
}

cleanProjectsData();
