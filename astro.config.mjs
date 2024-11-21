import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import netlify from '@astrojs/netlify';

dotenv.config();

export default defineConfig({
 
  output: 'static',  
  adapter: netlify()
});
