const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/lib/data.ts');
let data = fs.readFileSync(dataFile, 'utf8');

// 1. Remove projects that only have img(...)
// We can repeatedly remove objects in `projects` array where gallery only contains img(...)
data = data.replace(/\s*\{[^{}]*gallery:\s*\[\s*img\('[^']+'\)\s*\],?[^{}]*\},?/g, '');

// 2. For remaining projects (like Tira), replace image: img(...) with the first item in gallery
data = data.replace(/image:\s*img\('[^']+'\),\s*gallery:\s*\[\s*'([^']+)'/g, "image: '$1',\n    gallery: ['$1'");

// 3. For services, replace image: img(...) with a default real image
data = data.replace(/image:\s*img\('[^']+'\)/g, "image: '/imgs/p062_077.jpg'");

fs.writeFileSync(dataFile, data);
