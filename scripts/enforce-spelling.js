const fs = require('fs');
const path = require('path');

const FORBIDDEN_SPELLING = /برست/g;
const TARGET_DIRS = ['app', 'components', 'lib', 'hooks']; // Add other dirs as needed

let errorCount = 0;

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        walk(filePath);
      }
    } else if (stats.isFile() && /\.(js|jsx|ts|tsx|md|mdx|css)$/.test(file)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (FORBIDDEN_SPELLING.test(content)) {
        console.error(`ERROR: Forbidden spelling "برست" found in ${filePath}`);
        errorCount++;
      }
    }
  });
}

console.log('Running spelling enforcement check...');
TARGET_DIRS.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    walk(dirPath);
  }
});

if (errorCount > 0) {
  console.error(`Spelling check failed with ${errorCount} errors.`);
  process.exit(1);
} else {
  console.log('Spelling check passed.');
  process.exit(0);
}
