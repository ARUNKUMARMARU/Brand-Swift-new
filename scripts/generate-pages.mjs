import { promises as fs } from 'fs';
import path from 'path';

async function getPages() {
  const pagesDir = path.resolve('src/pages');
  const files = await fs.readdir(pagesDir);
  return files
    .filter(file => file.endsWith('.astro') && file !== 'index.astro')
    .map(file => ({
      name: file.replace('.astro', ''),
      path: `/${file.replace('.astro', '')}`
    }));
}

async function generatePagesList() {
  const pages = await getPages();
  const outputPath = path.resolve('src/pages/pages.json');
  await fs.writeFile(outputPath, JSON.stringify(pages, null, 2));
}

generatePagesList().catch(console.error);
