import fs from 'fs';
import path from 'path';
import { Hero } from '../types/hero';

const dataPath = path.join(process.cwd(), 'data', 'heroes.json');

async function checkUrl(url: string): Promise<{ url: string; status: number; ok: boolean; error?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);
    // If HEAD is blocked (403/405), try a fast GET with Range or small stream
    if (res.status === 405 || res.status === 403) {
      const getRes = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Range: 'bytes=0-10',
        },
      });
      return { url, status: getRes.status, ok: getRes.status >= 200 && getRes.status < 400 };
    }

    return { url, status: res.status, ok: res.status >= 200 && res.status < 400 };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return { url, status: 0, ok: false, error: errorMsg };
  }
}

async function verifyLinks() {
  console.log('🔍 Verifying live external URLs for comics and sources...');

  if (!fs.existsSync(dataPath)) {
    console.error('❌ /data/heroes.json not found!');
    process.exit(1);
  }

  const heroes: Hero[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const urlsToCheck: { hero: string; title: string; url: string }[] = [];

  heroes.forEach((h) => {
    h.comics.forEach((c) => {
      if (c.readUrl) {
        urlsToCheck.push({ hero: h.alias, title: `${c.title} #${c.issue} [Read]`, url: c.readUrl });
      }
    });
  });

  console.log(`Checking ${urlsToCheck.length} comic links (concurrent batching)...`);

  const results: { hero: string; title: string; url: string; status: number; ok: boolean; error?: string }[] = [];
  const concurrency = 5;

  for (let i = 0; i < urlsToCheck.length; i += concurrency) {
    const chunk = urlsToCheck.slice(i, i + concurrency);
    const chunkResults = await Promise.all(
      chunk.map(async (item) => {
        const res = await checkUrl(item.url);
        return {
          hero: item.hero,
          title: item.title,
          url: item.url,
          status: res.status,
          ok: res.ok,
          error: res.error,
        };
      })
    );
    results.push(...chunkResults);
  }

  console.log('\n📊 Link Verification Results:');
  console.log('---------------------------------------------------------------------------------------------');
  console.log('| Hero                 | Resource                      | Status Code | Health                   |');
  console.log('---------------------------------------------------------------------------------------------');

  let failedCount = 0;
  results.forEach((r) => {
    const health = r.ok ? '✅ OK' : `❌ ${r.error || r.status}`;
    if (!r.ok) failedCount++;
    console.log(`| ${r.hero.padEnd(20).slice(0, 20)} | ${r.title.padEnd(29).slice(0, 29)} | ${(r.status || 'ERR').toString().padEnd(11)} | ${health.padEnd(24)} |`);
  });
  console.log('---------------------------------------------------------------------------------------------\n');

  if (failedCount > 0) {
    console.warn(`⚠️ Notice: ${failedCount} link(s) had non-200 responses or timeout. Check network status.`);
  } else {
    console.log('✅ All verified links responded with valid status codes!');
  }
}

verifyLinks();
