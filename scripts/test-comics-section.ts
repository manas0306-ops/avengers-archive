import fs from 'fs';
import path from 'path';
import { Hero } from '../types/hero';

const dataPath = path.join(process.cwd(), 'data', 'heroes.json');
const publicDir = path.join(process.cwd(), 'public');

function testComicsSection() {
  console.log('🧪 Running Phase 4 Verification: Comics Section (Block E)...');

  if (!fs.existsSync(dataPath)) {
    console.error('❌ /data/heroes.json not found!');
    process.exit(1);
  }

  const heroes: Hero[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  let totalComics = 0;
  let missingCovers = 0;
  let invalidUrls = 0;
  let missingMetadata = 0;

  console.log('\n📊 Comics Verification by Hero:');
  console.log('---------------------------------------------------------------------------------------------------');
  console.log('| Hero                 | Tier | Comics Count | All Covers Exist | All Read URLs | Status           |');
  console.log('---------------------------------------------------------------------------------------------------');

  for (const hero of heroes) {
    totalComics += hero.comics.length;
    let coversOk = true;
    let urlsOk = true;

    if (hero.comics.length < 6 || hero.comics.length > 10) {
      console.error(`❌ Hero ${hero.alias} has ${hero.comics.length} comics (expected 6-10).`);
    }

    for (const comic of hero.comics) {
      if (!comic.title || !comic.issue || !comic.coverDate || !comic.creators || !comic.why) {
        missingMetadata++;
      }

      const coverFile = path.join(publicDir, comic.cover.replace(/^\//, ''));
      if (!fs.existsSync(coverFile)) {
        coversOk = false;
        missingCovers++;
      }

      if (!comic.readUrl || !comic.readUrl.startsWith('http')) {
        urlsOk = false;
        invalidUrls++;
      }
    }

    const status = coversOk && urlsOk ? '✅ PASS' : '❌ FAIL';
    console.log(
      `| ${hero.alias.padEnd(20).slice(0, 20)} | ${String(hero.tier).padEnd(4)} | ${String(hero.comics.length).padEnd(12)} | ${(coversOk ? 'YES' : 'NO').padEnd(16)} | ${(urlsOk ? 'YES' : 'NO').padEnd(13)} | ${status.padEnd(16)} |`
    );
  }

  console.log('---------------------------------------------------------------------------------------------------\n');

  console.log(`Total Comics Inspected: ${totalComics}`);
  console.log(`Missing Covers: ${missingCovers}`);
  console.log(`Invalid URLs: ${invalidUrls}`);
  console.log(`Missing Metadata Fields: ${missingMetadata}`);

  // Also check component integration
  const heroChapterFile = path.join(process.cwd(), 'components', 'heroes', 'HeroChapter.tsx');
  const comicsSectionFile = path.join(process.cwd(), 'components', 'heroes', 'ComicsSection.tsx');

  if (!fs.existsSync(comicsSectionFile)) {
    console.error('❌ components/heroes/ComicsSection.tsx does not exist!');
    process.exit(1);
  }

  const heroChapterContent = fs.readFileSync(heroChapterFile, 'utf-8');
  if (!heroChapterContent.includes('<ComicsSection hero={hero} />')) {
    console.error('❌ HeroChapter.tsx does not render ComicsSection!');
    process.exit(1);
  }

  if (missingCovers === 0 && invalidUrls === 0 && missingMetadata === 0) {
    console.log('\n🎉 Phase 4 (Comics Section Block E) verification passed with 100% compliance!\n');
    process.exit(0);
  } else {
    console.error('\n❌ Phase 4 verification failed with errors above.');
    process.exit(1);
  }
}

testComicsSection();
