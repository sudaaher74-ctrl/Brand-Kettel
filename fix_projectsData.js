const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, 'src/lib/projectsData.ts');
let data = fs.readFileSync(dataFile, 'utf8');

const imgFiles = fs.readdirSync(path.join(__dirname, 'public/imgs'));

data = data.replace(/\/images\/([\w_.]+)/g, (match, p1) => {
  if (imgFiles.includes(p1)) {
    return `/imgs/${p1}`;
  } else {
    return `https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70`;
  }
});

fs.writeFileSync(dataFile, data);
console.log('Fixed projectsData.ts');
