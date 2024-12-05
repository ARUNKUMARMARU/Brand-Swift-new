import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';
import { minify } from 'terser';

// Directories to process
const directories = ['./src/pages', './src/components'];

directories.forEach((dir) => {
  console.log(`Processing directory: ${dir}`);

  // Process each file in the directory
  processDirectory(dir);
});

function processDirectory(directory) {
  const files = readdirSync(directory);

  files.forEach((file) => {
    const filePath = join(directory, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      // If it's a directory, recursively process it
      processDirectory(filePath);
    } else if (file.endsWith('.astro')) {
      let content = readFileSync(filePath, 'utf8');

      // Extract <script> tag content
      const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
      if (scriptMatch) {
        const scriptContent = scriptMatch[1];

        // Minify the script
        minify(scriptContent, { compress: true, mangle: true })
          .then((result) => {
            if (result.code) {
              // Replace original script with minified version
              content = content.replace(scriptContent, result.code);

              // Save the updated file
              writeFileSync(filePath, content, 'utf8');
              console.log(`Minified JavaScript in ${filePath}`);
            }
          })
          .catch((err) => {
            console.error(`Error minifying JavaScript in ${filePath}:`, err);
          });
      } else {
        console.log(`No <script> tag found in ${filePath}`);
      }
    }
  });
}
