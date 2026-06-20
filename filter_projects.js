const fs = require('fs');
const path = require('path');

// Process projectsData.ts
const pFile = path.join(__dirname, 'src/lib/projectsData.ts');
let pContent = fs.readFileSync(pFile, 'utf8');
// We can just filter the array or use regex to remove objects that only have /imgs/p061_076.jpg as all their images if we just replaced them.
// Wait, p061_076.jpg is actually a real image for Tira. So we can't just remove it.
// But earlier we replaced ALL unsplash links with p061_076.jpg.
