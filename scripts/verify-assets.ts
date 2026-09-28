import fs from 'fs';
import path from 'path';
import { Hero } from '../types/hero';

const dataPath = path.join(process.cwd(), 'data', 'heroes.json');
const publicDir = path.join(process.cwd(), 'public');

const BUDGETS = {
  face: 180 * 1024,      // 180 KB
  pose: 90 * 1024,       // 90 KB
  suit: 120 * 1024,      // 120 KB
  comic: 80 * 1024,      // 80 KB
  default: 250 * 1024,   // 250 KB
};

interface AssetCheck {
  hero: string;
  type: string;
  relativePath: string;
  exists: boolean;
  sizeBytes: number;
  budgetBytes: number;
  withinBudget: boolean;
}

function verifyAssets() {
  console.log('🔍 Verifying asset integrity and performance budgets...');

  if (!fs.existsSync(dataPath)) {
    console.error('❌ /data/heroes.json not found!');
    process.exit(1);
  }

  const heroes: Hero[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const results: AssetCheck[] = [];
  let totalMissing = 0;
  let totalOverBudget = 0;

  function checkFile(hero: string, type: 'face' | 'pose' | 'suit' | 'comic' | 'default', assetPath: string) {
    if (!assetPath) return;
    const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
    const fullPath = path.join(publicDir, cleanPath);
    const exists = fs.existsSync(fullPath);
    let sizeBytes = 0;

    if (exists) {
      sizeBytes = fs.statSync(fullPath).size;
    } else {
      totalMissing++;
    }

    const budgetBytes = BUDGETS[type] || BUDGETS.default;
    const withinBudget = exists ? sizeBytes <= budgetBytes : false;

    if (exists && !withinBudget) {
      totalOverBudget++;
    }

    results.push({
      hero,
      type,
      relativePath: assetPath,
      exists,
      sizeBytes,
      budgetBytes,
      withinBudget,
    });
  }

  heroes.forEach((h) => {
    // Faces
    checkFile(h.alias, 'face', h.face.unmasked);
    checkFile(h.alias, 'face', h.face.masked);

    // 9 Poses
    Object.entries(h.poses).forEach(([dir, posePath]) => {
      checkFile(h.alias, 'pose', posePath);
    });

    // Suits
    h.suits.forEach((s) => {
      checkFile(h.alias, 'suit', s.image);
    });

    // Comics
    h.comics.forEach((c) => {
      checkFile(h.alias, 'comic', c.cover);
    });
  });

  console.log('\n📊 Asset Verification Summary Table:');
  console.log('---------------------------------------------------------------------------------------------');
  console.log('| Hero                 | Type   | Status | Size (KB) | Budget (KB) | Asset Path                   |');
  console.log('---------------------------------------------------------------------------------------------');

  results.forEach((r) => {
    const status = !r.exists ? 'MISSING' : r.withinBudget ? 'PASS' : 'OVERSIZE';
    const sizeKb = (r.sizeBytes / 1024).toFixed(1).padStart(7);
    const budgetKb = (r.budgetBytes / 1024).toFixed(0).padStart(6);
    const heroPad = r.hero.padEnd(20).slice(0, 20);
    const typePad = r.type.padEnd(6);
    const statusPad = status.padEnd(8);
    const pathSnippet = r.relativePath.slice(0, 36);

    console.log(`| ${heroPad} | ${typePad} | ${statusPad} | ${sizeKb}KB |   ${budgetKb}KB | ${pathSnippet.padEnd(36)} |`);
  });
  console.log('---------------------------------------------------------------------------------------------\n');

  console.log(`Total Assets Checked: ${results.length}`);
  console.log(`Missing Files: ${totalMissing}`);
  console.log(`Over-budget Files: ${totalOverBudget}`);

  if (totalMissing > 0) {
    console.error(`\n❌ Failed: ${totalMissing} asset files are missing from /public!`);
    process.exit(1);
  }

  if (totalOverBudget > 0) {
    console.warn(`\n⚠️ Warning: ${totalOverBudget} asset files exceed size budget.`);
  }

  console.log('\n✅ All asset files verified successfully on disk!');
}

verifyAssets();
