// Writes sitemap.xml into the built site and points robots.txt at it.
// Runs automatically after `npm run build` (postbuild). Requires SITE_URL,
// e.g. `SITE_URL=https://your-domain.example npm run build`; when it is not
// set the step is skipped so local builds keep working without a domain.
import { appendFile, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'dist', 'portfolio-website', 'browser');
const siteUrl = (process.env.SITE_URL ?? '').trim().replace(/\/+$/, '');

if (!siteUrl) {
  console.log('[sitemap] SITE_URL not set — skipping sitemap.xml generation.');
  process.exit(0);
}

if (!/^https?:\/\/[^\s/]+$/i.test(siteUrl)) {
  console.error(
    `[sitemap] SITE_URL must be an origin like https://example.com (got "${siteUrl}").`,
  );
  process.exit(1);
}

try {
  await access(outDir);
} catch {
  console.error(`[sitemap] Build output not found at ${outDir}. Run "ng build" first.`);
  process.exit(1);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

await writeFile(join(outDir, 'sitemap.xml'), sitemap);
await appendFile(join(outDir, 'robots.txt'), `\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`[sitemap] Wrote sitemap.xml and robots.txt Sitemap entry for ${siteUrl}`);
