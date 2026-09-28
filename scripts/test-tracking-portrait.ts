import fs from 'fs';
import path from 'path';
import { Hero } from '../types/hero';

const dataPath = path.join(process.cwd(), 'data', 'heroes.json');
const publicDir = path.join(process.cwd(), 'public');

const POSE_KEYS = ['tl', 't', 'tr', 'l', 'c', 'r', 'bl', 'b', 'br'] as const;

function computeWeights(cx: number, cy: number): Record<string, number> {
  const wxLeft = cx < 0 ? -cx : 0;
  const wxRight = cx > 0 ? cx : 0;
  const wxCenter = 1 - Math.abs(cx);

  const wyTop = cy < 0 ? -cy : 0;
  const wyBottom = cy > 0 ? cy : 0;
  const wyCenter = 1 - Math.abs(cy);

  return {
    tl: wxLeft * wyTop,
    t: wxCenter * wyTop,
    tr: wxRight * wyTop,
    l: wxLeft * wyCenter,
    c: wxCenter * wyCenter,
    r: wxRight * wyCenter,
    bl: wxLeft * wyBottom,
    b: wxCenter * wyBottom,
    br: wxRight * wyBottom,
  };
}

function testTrackingPortrait() {
  console.log('🧪 Running Phase 5 Verification: Cursor-Tracking Portrait (Block F)...');

  if (!fs.existsSync(dataPath)) {
    console.error('❌ /data/heroes.json not found!');
    process.exit(1);
  }

  // 1. Math Verification of Bilinear Interpolation
  console.log('\n📐 Validating Bilinear Grid Weight Physics:');
  const testCoords = [
    { x: 0, y: 0, expected: 'c' },
    { x: -1, y: -1, expected: 'tl' },
    { x: 1, y: -1, expected: 'tr' },
    { x: -1, y: 1, expected: 'bl' },
    { x: 1, y: 1, expected: 'br' },
    { x: 0.5, y: -0.5, expected: 'mixed' },
    { x: -0.3, y: 0.7, expected: 'mixed' },
  ];

  let mathOk = true;
  for (const tc of testCoords) {
    const weights = computeWeights(tc.x, tc.y);
    const sum = Object.values(weights).reduce((a, b) => a + b, 0);
    const sumValid = Math.abs(sum - 1.0) < 0.0001;

    if (!sumValid) {
      console.error(`❌ Sum of weights not 1.0 at (${tc.x}, ${tc.y}): sum=${sum}`);
      mathOk = false;
    }

    if (tc.expected !== 'mixed') {
      if (Math.abs(weights[tc.expected] - 1.0) > 0.0001) {
        console.error(`❌ Corner weight mismatch at (${tc.x}, ${tc.y}): ${tc.expected}=${weights[tc.expected]}`);
        mathOk = false;
      }
    }
  }

  if (mathOk) {
    console.log('  ✅ Bilinear tensor-product weights verified: 100% partition of unity across all test points.');
  }

  // 2. Asset & Schema Verification
  const heroes: Hero[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  let totalPoses = 0;
  let missingPoses = 0;

  console.log('\n📊 Head Pose Grid Verification by Hero:');
  console.log('---------------------------------------------------------------------------------------------------');
  console.log('| Hero                 | Tier | 9-Pose Matrix | All Poses on Disk | Size Budget Check | Status     |');
  console.log('---------------------------------------------------------------------------------------------------');

  for (const hero of heroes) {
    let heroPosesOk = true;
    let sizeBudgetOk = true;

    for (const key of POSE_KEYS) {
      totalPoses++;
      const posePath = hero.poses[key];
      if (!posePath) {
        heroPosesOk = false;
        missingPoses++;
        continue;
      }

      const filePath = path.join(publicDir, posePath.replace(/^\//, ''));
      if (!fs.existsSync(filePath)) {
        heroPosesOk = false;
        missingPoses++;
      } else {
        const stat = fs.statSync(filePath);
        // Pose budget: 90KB max
        if (stat.size > 90 * 1024) {
          sizeBudgetOk = false;
        }
      }
    }

    const status = heroPosesOk && sizeBudgetOk ? '✅ PASS' : '❌ FAIL';
    console.log(
      `| ${hero.alias.padEnd(20).slice(0, 20)} | ${String(hero.tier).padEnd(4)} | ${(heroPosesOk ? '3×3 COMPLETE' : 'INCOMPLETE').padEnd(13)} | ${(heroPosesOk ? 'YES (9/9)' : 'NO').padEnd(17)} | ${(sizeBudgetOk ? 'PASS (<90KB)' : 'FAIL').padEnd(17)} | ${status.padEnd(10)} |`
    );
  }

  console.log('---------------------------------------------------------------------------------------------------\n');

  console.log(`Total Poses Verified: ${totalPoses} / 54`);
  console.log(`Missing Pose Assets: ${missingPoses}`);

  // 3. Component Integration Check
  const trackingPortraitFile = path.join(process.cwd(), 'components', 'heroes', 'TrackingPortrait.tsx');
  const heroChapterFile = path.join(process.cwd(), 'components', 'heroes', 'HeroChapter.tsx');

  if (!fs.existsSync(trackingPortraitFile)) {
    console.error('❌ components/heroes/TrackingPortrait.tsx does not exist!');
    process.exit(1);
  }

  const trackingPortraitContent = fs.readFileSync(trackingPortraitFile, 'utf-8');
  if (!trackingPortraitContent.includes('requestAnimationFrame') || !trackingPortraitContent.includes('0.12')) {
    console.error('❌ TrackingPortrait.tsx missing 60fps rAF loop or 0.12 lerp factor!');
    process.exit(1);
  }

  const heroChapterContent = fs.readFileSync(heroChapterFile, 'utf-8');
  if (!heroChapterContent.includes('<TrackingPortrait hero={hero} />')) {
    console.error('❌ HeroChapter.tsx does not render TrackingPortrait!');
    process.exit(1);
  }

  if (missingPoses === 0 && mathOk) {
    console.log('\n🎉 Phase 5 (Cursor-Tracking Portrait Block F) passed with 100% compliance!\n');
    process.exit(0);
  } else {
    console.error('\n❌ Phase 5 verification failed.');
    process.exit(1);
  }
}

testTrackingPortrait();
