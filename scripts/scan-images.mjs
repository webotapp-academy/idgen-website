import fs from 'node:fs';
import path from 'node:path';

const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];
const foundImages = new Set();

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (/\.(tsx|ts|jsx|js|json|md)$/.test(item)) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/(\/(?:images|uploads)\/[^\"'\s>]+)/g);
      if (matches) {
        for (const m of matches) {
          const clean = m.replace(/[',;\\)]+$/, '');
          if (imageExtensions.some(ext => clean.toLowerCase().includes(ext))) {
            foundImages.add(clean);
          }
        }
      }
    }
  }
}

walk('src');

console.log('Total unique referenced images in src:', foundImages.size);

const missingLocally = [];
for (const img of foundImages) {
  const fileRel = decodeURIComponent(img.split('?')[0].replace(/^\//, ''));
  const localPath = path.join('public', fileRel);
  if (!fs.existsSync(localPath)) {
    missingLocally.push({ ref: img, fileRel });
  }
}

console.log('Missing locally count:', missingLocally.length);
if (missingLocally.length > 0) {
  console.log('Missing locally details:', JSON.stringify(missingLocally, null, 2));
} else {
  console.log('All referenced images exist in local public folder!');
}
