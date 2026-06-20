const fs = require('fs');
const path = require('path');

const imgsDir = path.join(__dirname, 'public/imgs');
const commDir = path.join(imgsDir, 'commercial');
const resDir = path.join(imgsDir, 'residential');

const files = fs.readdirSync(imgsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

for (const file of files) {
  const oldPath = path.join(imgsDir, file);
  let newPath;
  if (file === 'p076_107.jpg') {
    newPath = path.join(resDir, file);
  } else {
    newPath = path.join(commDir, file);
  }
  fs.renameSync(oldPath, newPath);
}

// Now update references in src/lib/data.ts and src/lib/projectsData.ts
function updateReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/\/imgs\/(p[\w_\s]+\.jpg)/g, (match, filename) => {
    if (filename === 'p076_107.jpg') {
      return `/imgs/residential/${filename}`;
    }
    return `/imgs/commercial/${filename}`;
  });
  
  fs.writeFileSync(filePath, content);
}

updateReferences(path.join(__dirname, 'src/lib/data.ts'));
updateReferences(path.join(__dirname, 'src/lib/projectsData.ts'));

console.log('Images organized and references updated.');
