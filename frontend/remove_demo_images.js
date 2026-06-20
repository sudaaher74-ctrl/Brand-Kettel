const fs = require('fs');
const path = require('path');

const realImages = fs.readdirSync(path.join(__dirname, 'public/imgs')).filter(f => f.endsWith('.jpg')).map(f => `/imgs/${f}`);
const defaultRealImage = realImages.length > 0 ? realImages[0] : '';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('unsplash.com')) {
    content = content.replace(/https:\/\/images\.unsplash\.com\/[^"'`\s]+/g, defaultRealImage);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));

// Now for projectsData.ts, we need to completely remove empty image projects, or at least let the previous script handle it.
// Wait, the regex `https://images...` was replaced by `/imgs/p061_076.jpg` (or whatever the first one is).
// But wait! For projectsData.ts, replacing with defaultRealImage means Malabar Gold will have 5 identical images of Ramada. 
// If the user wants NO demo images, and Malabar has no real images, it's better to remove it or make its images array empty.
