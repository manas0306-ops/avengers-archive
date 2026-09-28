import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { Hero } from '../types/hero';

const dataPath = path.join(process.cwd(), 'data', 'heroes.json');
const publicDir = path.join(process.cwd(), 'public');

async function checkAlignment() {
  console.log('🔍 Checking face module mask/unmasked layer dimension alignment...');

  if (!fs.existsSync(dataPath)) {
    console.error('❌ /data/heroes.json not found!');
    process.exit(1);
  }

  const heroes: Hero[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  let mismatches = 0;

  for (const hero of heroes) {
    const unmaskedPath = path.join(publicDir, hero.face.unmasked.replace(/^\//, ''));
    const maskedPath = path.join(publicDir, hero.face.masked.replace(/^\//, ''));

    if (!fs.existsSync(unmaskedPath) || !fs.existsSync(maskedPath)) {
      console.warn(`⚠️ [${hero.alias}] One or both face layers missing on disk.`);
      continue;
    }

    try {
      const metaUnmasked = await sharp(unmaskedPath).metadata();
      const metaMasked = await sharp(maskedPath).metadata();

      const widthMatch = metaUnmasked.width === metaMasked.width;
      const heightMatch = metaUnmasked.height === metaMasked.height;

      if (!widthMatch || !heightMatch) {
        console.error(`❌ [${hero.alias}] Dimension mismatch!`);
        console.error(`   Unmasked: ${metaUnmasked.width}x${metaUnmasked.height}`);
        console.error(`   Masked:   ${metaMasked.width}x${metaMasked.height}`);
        mismatches++;
      } else {
        console.log(`✅ [${hero.alias}] Perfectly aligned: ${metaUnmasked.width}x${metaUnmasked.height} (Aspect ratio ${(metaUnmasked.width! / metaUnmasked.height!).toFixed(2)})`);
      }
    } catch (err) {
      console.error(`❌ [${hero.alias}] Error reading image metadata:`, err);
      mismatches++;
    }
  }

  if (mismatches > 0) {
    console.error(`\n❌ Found ${mismatches} alignment discrepancies.`);
    process.exit(1);
  }

  console.log('\n✅ All face module layers are 100% pixel-aligned!');
}

checkAlignment();
