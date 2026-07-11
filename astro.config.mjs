import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site for GitHub Pages on siltest.com.
// English at the root, German at /de once translations are added.
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://siltest.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
