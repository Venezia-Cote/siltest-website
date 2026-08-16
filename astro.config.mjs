import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Static site for GitHub Pages on siltest.com.
// English at the root, German at /de once translations are added.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, 'src/pages');

// Build a map of route path -> last-modified date, taken from the source
// file's own mtime. This is not a CMS-tracked edit date, but it is a real,
// verifiable date (when the page's source last changed on disk), which is
// more accurate than either omitting lastmod or inventing a date.
function buildLastmodMap() {
  const map = new Map();
  const walk = (dir, routePrefix) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, `${routePrefix}${entry.name}/`);
        continue;
      }
      if (!entry.name.endsWith('.astro')) continue;
      const mtime = fs.statSync(full).mtime;
      if (entry.name === 'index.astro') {
        map.set(`https://siltest.com${routePrefix}`, mtime);
      } else if (entry.name.startsWith('[') ) {
        // Dynamic route (e.g. [slug].astro): the template's own mtime is the
        // floor for every page it generates. Individual entries get a more
        // precise date below where their data source is known.
        map.set(`${routePrefix}__template__`, mtime);
      } else {
        const slug = entry.name.replace(/\.astro$/, '');
        map.set(`https://siltest.com${routePrefix}${slug}/`, mtime);
      }
    }
  };
  walk(pagesDir, '/');

  // Dynamic Academy and News pages: use the later of the template file and
  // the shared data file, since either changing means the rendered page
  // changed.
  const templateAcademy = map.get('academy/__template__');
  const dataAcademy = fs.statSync(path.join(__dirname, 'src/data/courses.js')).mtime;
  const academyLastmod = templateAcademy && templateAcademy > dataAcademy ? templateAcademy : dataAcademy;

  const templateNews = map.get('news/__template__');
  const dataNews = fs.statSync(path.join(__dirname, 'src/data/posts.js')).mtime;
  const newsLastmod = templateNews && templateNews > dataNews ? templateNews : dataNews;

  return { map, academyLastmod, newsLastmod };
}

const { map: lastmodMap, academyLastmod, newsLastmod } = buildLastmodMap();

export default defineConfig({
  integrations: [
    sitemap({
      // The German placeholder is not real content yet. Keep it out of the
      // sitemap until it has translated copy.
      filter: (pageUrl) => !pageUrl.includes('/de/'),
      serialize(item) {
        if (lastmodMap.has(item.url)) {
          item.lastmod = lastmodMap.get(item.url).toISOString();
        } else if (item.url.startsWith('https://siltest.com/academy/')) {
          item.lastmod = academyLastmod.toISOString();
        } else if (item.url.startsWith('https://siltest.com/news/')) {
          item.lastmod = newsLastmod.toISOString();
        }
        return item;
      },
    }),
  ],
  site: 'https://siltest.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
