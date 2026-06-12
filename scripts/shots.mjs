// One-off screenshot capture for project thumbnails.
// Uses system Chrome via playwright-core (no browser download).
// Run: node scripts/shots.mjs
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'src', 'assets', 'projects');

const targets = [
  { id: 'summit-vinyl', url: 'https://vl.vinyloureiro.com/summit' },
  { id: 'desafio-estratega', url: 'https://vl.vinyloureiro.com/desafioestratega-c' },
  { id: 'ana-rizzon', url: 'https://anarizzonpsicologia.com/nova-lp' },
  { id: 'formacion-estratega', url: 'https://vl.vinyloureiro.com/formacion-estratega-digital' },
  { id: 'meta-waitlist', url: 'http://rc.metaanalysisacademy.com/waitlist' },
  { id: 'meta-listadeespera', url: 'http://rc.metaanalysisacademy.com/listadeespera' },
  { id: 'meta-checker', url: 'http://rc.metaanalysisacademy.com/checker' },
  { id: 'synapse', url: 'http://synapse.flowgensolutions.com.br/' },
];

const WAIT_MS = 7000; // let intro animations / bot-checks finish

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
});

for (const { id, url } of targets) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() =>
      page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
    );
    await page.waitForTimeout(WAIT_MS);
    await page.evaluate(() => window.scrollTo(0, 0));
    const file = path.join(OUT, `${id}.png`);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    console.log(`ok   ${id}`);
  } catch (e) {
    console.log(`FAIL ${id}: ${e.message.split('\n')[0]}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log('done');
