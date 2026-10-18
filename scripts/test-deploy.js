async function testAllRoutes() {
  const routes = [
    '',
    'heroes/',
    'heroes/iron-man/',
    'heroes/captain-america/',
    'timeline/',
    'movies/',
    'gallery/',
    'wallpapers/',
    'squad/',
    'trivia/',
    'games/',
    'about/',
    'privacy/',
    'admin/',
    'profile/'
  ];

  const base = 'https://manas0306-ops.github.io/avengers-archive/';
  console.log(`Testing ${routes.length} routes on ${base}...`);

  for (const r of routes) {
    const target = base + r;
    const res = await fetch(target);
    const html = await res.text();
    const hasNextRoot = html.includes('id="__next"') || html.includes('__next') || html.includes('<!DOCTYPE html>');
    console.log(`Route [${r || 'index'}]: HTTP ${res.status} | Bytes: ${html.length} | Valid HTML: ${hasNextRoot}`);
  }
}

testAllRoutes().catch(console.error);
