import fs from 'fs';
import path from 'path';
import { HeroSchema } from '../types/hero';
import { z } from 'zod';

const dataPath = path.join(process.cwd(), 'data', 'heroes.json');

function validateHeroes() {
  console.log('🔍 Validating /data/heroes.json against Zod HeroSchema...');

  if (!fs.existsSync(dataPath)) {
    console.error('❌ /data/heroes.json does not exist!');
    process.exit(1);
  }

  const raw = fs.readFileSync(dataPath, 'utf-8');
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch (err) {
    console.error('❌ Failed to parse JSON:', err);
    process.exit(1);
  }

  const ArraySchema = z.array(HeroSchema).min(1);
  const result = ArraySchema.safeParse(json);

  if (!result.success) {
    console.error('❌ Validation failed with errors:');
    result.error.issues.forEach((err, idx) => {
      console.error(`  [${idx + 1}] Path: ${err.path.join('.')} — Error: ${err.message}`);
    });
    process.exit(1);
  }

  console.log(`✅ Successfully validated ${result.data.length} heroes!`);
  result.data.forEach((hero) => {
    console.log(`   - [Tier ${hero.tier}] ${hero.alias} (${hero.realName}) — ${hero.suits.length} suits, ${hero.comics.length} comics, ${hero.timeline.length} timeline events`);
  });
}

validateHeroes();
