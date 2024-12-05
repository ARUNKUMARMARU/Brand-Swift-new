const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/pages/**/*.{astro,html}'],
      safelist: [/^dynamic-class-/], // Add any classes you want to preserve
    }),
  ],
};
