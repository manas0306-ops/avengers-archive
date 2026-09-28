import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const inboxDir = path.join(process.cwd(), 'asset-inbox');

interface HeroConfig {
  slug: string;
  alias: string;
  actor: string;
  primaryColor: string;
  secondaryColor: string;
  symbolSvg: string;
}

const EXPANDED_HEROES: HeroConfig[] = [
  // TIER 2
  {
    slug: 'scarlet-witch',
    alias: 'SCARLET WITCH',
    actor: 'Elizabeth Olsen',
    primaryColor: '#E02424',
    secondaryColor: '#A855F7',
    symbolSvg: `<path d="M400,600 Q600,450 800,600 Q700,750 600,720 Q500,750 400,600 Z" fill="#E02424" opacity="0.9"/>
                <circle cx="600" cy="720" r="40" fill="#A855F7"/>`,
  },
  {
    slug: 'vision',
    alias: 'VISION',
    actor: 'Paul Bettany',
    primaryColor: '#10B981',
    secondaryColor: '#F59E0B',
    symbolSvg: `<polygon points="600,550 670,680 600,810 530,680" fill="#F59E0B"/>
                <circle cx="600" cy="680" r="30" fill="#00f0ff"/>`,
  },
  {
    slug: 'war-machine',
    alias: 'WAR MACHINE',
    actor: 'Don Cheadle',
    primaryColor: '#64748B',
    secondaryColor: '#EF4444',
    symbolSvg: `<rect x="480" y="580" width="240" height="240" fill="#334155" stroke="#EF4444" stroke-width="12"/>
                <circle cx="600" cy="700" r="50" fill="#EF4444"/>`,
  },
  {
    slug: 'falcon',
    alias: 'FALCON / SAM WILSON',
    actor: 'Anthony Mackie',
    primaryColor: '#C8102E',
    secondaryColor: '#0284C7',
    symbolSvg: `<path d="M400,680 L520,620 L600,740 L680,620 L800,680 L600,840 Z" fill="#C8102E"/>`,
  },
  {
    slug: 'winter-soldier',
    alias: 'WINTER SOLDIER',
    actor: 'Sebastian Stan',
    primaryColor: '#94A3B8',
    secondaryColor: '#DC2626',
    symbolSvg: `<polygon points="600,580 635,680 740,680 655,740 690,840 600,780 510,840 545,740 460,680 565,680" fill="#DC2626"/>`,
  },
  {
    slug: 'ant-man',
    alias: 'ANT-MAN',
    actor: 'Paul Rudd',
    primaryColor: '#EF4444',
    secondaryColor: '#1E293B',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#EF4444" opacity="0.8"/>
                <rect x="520" y="660" width="160" height="80" fill="#1E293B" rx="10"/>`,
  },
  {
    slug: 'wasp',
    alias: 'THE WASP',
    actor: 'Evangeline Lilly',
    primaryColor: '#F59E0B',
    secondaryColor: '#1E293B',
    symbolSvg: `<ellipse cx="600" cy="700" rx="90" ry="180" fill="#F59E0B"/>
                <line x1="480" y1="620" x2="720" y2="780" stroke="#FFFFFF" stroke-width="8"/>`,
  },
  {
    slug: 'black-panther',
    alias: 'BLACK PANTHER',
    actor: 'Chadwick Boseman',
    primaryColor: '#8B5CF6',
    secondaryColor: '#18181B',
    symbolSvg: `<circle cx="600" cy="700" r="160" fill="#18181B" stroke="#8B5CF6" stroke-width="12"/>
                <polygon points="540,640 600,600 660,640 640,740 600,770 560,740" fill="#8B5CF6"/>`,
  },
  {
    slug: 'spider-man',
    alias: 'SPIDER-MAN',
    actor: 'Tom Holland',
    primaryColor: '#E11D48',
    secondaryColor: '#2563EB',
    symbolSvg: `<circle cx="600" cy="700" r="60" fill="#E11D48"/>
                <path d="M500,640 L600,700 L700,640 M480,740 L600,700 L720,740 M530,810 L600,700 L670,810" stroke="#FFFFFF" stroke-width="8"/>`,
  },
  {
    slug: 'doctor-strange',
    alias: 'DOCTOR STRANGE',
    actor: 'Benedict Cumberbatch',
    primaryColor: '#F59E0B',
    secondaryColor: '#DC2626',
    symbolSvg: `<circle cx="600" cy="700" r="150" fill="none" stroke="#F59E0B" stroke-width="12"/>
                <circle cx="600" cy="700" r="60" fill="#00f0ff"/>
                <ellipse cx="600" cy="700" rx="140" ry="60" fill="none" stroke="#F59E0B" stroke-width="8"/>`,
  },
  {
    slug: 'captain-marvel',
    alias: 'CAPTAIN MARVEL',
    actor: 'Brie Larson',
    primaryColor: '#FBBF24',
    secondaryColor: '#DC2626',
    symbolSvg: `<polygon points="600,530 635,660 770,660 660,730 705,860 600,780 495,860 540,730 430,660 565,660" fill="#FBBF24"/>`,
  },
  {
    slug: 'shang-chi',
    alias: 'SHANG-CHI',
    actor: 'Simu Liu',
    primaryColor: '#DC2626',
    secondaryColor: '#F59E0B',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="none" stroke="#F59E0B" stroke-width="14"/>
                <circle cx="600" cy="700" r="90" fill="none" stroke="#DC2626" stroke-width="10"/>`,
  },
  {
    slug: 'shuri',
    alias: 'SHURI',
    actor: 'Letitia Wright',
    primaryColor: '#A855F7',
    secondaryColor: '#F59E0B',
    symbolSvg: `<circle cx="600" cy="700" r="150" fill="#18181B" stroke="#A855F7" stroke-width="12"/>
                <polygon points="560,660 600,620 640,660 620,740 600,760 580,740" fill="#F59E0B"/>`,
  },
  {
    slug: 'she-hulk',
    alias: 'SHE-HULK',
    actor: 'Tatiana Maslany',
    primaryColor: '#22C55E',
    secondaryColor: '#A855F7',
    symbolSvg: `<circle cx="600" cy="700" r="160" fill="#22C55E" opacity="0.85"/>
                <polygon points="600,600 680,750 520,750" fill="#A855F7"/>`,
  },

  // TIER 3
  {
    slug: 'star-lord',
    alias: 'STAR-LORD',
    actor: 'Chris Pratt',
    primaryColor: '#B91C1C',
    secondaryColor: '#0284C7',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#B91C1C"/>
                <circle cx="560" cy="690" r="30" fill="#EF4444"/>
                <circle cx="640" cy="690" r="30" fill="#EF4444"/>`,
  },
  {
    slug: 'gamora',
    alias: 'GAMORA',
    actor: 'Zoe Saldana',
    primaryColor: '#10B981',
    secondaryColor: '#EC4899',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#10B981"/>
                <path d="M500,660 Q600,600 700,660 Q600,740 500,660 Z" fill="#EC4899"/>`,
  },
  {
    slug: 'drax',
    alias: 'DRAX THE DESTROYER',
    actor: 'Dave Bautista',
    primaryColor: '#065F46',
    secondaryColor: '#DC2626',
    symbolSvg: `<circle cx="600" cy="700" r="150" fill="#065F46"/>
                <path d="M480,640 Q600,700 720,640" stroke="#DC2626" stroke-width="16" fill="none"/>`,
  },
  {
    slug: 'rocket',
    alias: 'ROCKET RACCOON',
    actor: 'Bradley Cooper',
    primaryColor: '#EA580C',
    secondaryColor: '#3B82F6',
    symbolSvg: `<circle cx="600" cy="700" r="130" fill="#EA580C"/>
                <polygon points="600,620 660,740 540,740" fill="#3B82F6"/>`,
  },
  {
    slug: 'groot',
    alias: 'GROOT',
    actor: 'Vin Diesel',
    primaryColor: '#84CC16',
    secondaryColor: '#78350F',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#78350F"/>
                <circle cx="600" cy="700" r="80" fill="#84CC16"/>`,
  },
  {
    slug: 'nebula',
    alias: 'NEBULA',
    actor: 'Karen Gillan',
    primaryColor: '#0284C7',
    secondaryColor: '#475569',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#0284C7"/>
                <rect x="580" y="580" width="120" height="240" fill="#475569"/>`,
  },
  {
    slug: 'mantis',
    alias: 'MANTIS',
    actor: 'Pom Klementieff',
    primaryColor: '#84CC16',
    secondaryColor: '#10B981',
    symbolSvg: `<circle cx="600" cy="720" r="120" fill="#10B981"/>
                <line x1="560" y1="620" x2="520" y2="520" stroke="#84CC16" stroke-width="10"/>
                <line x1="640" y1="620" x2="680" y2="520" stroke="#84CC16" stroke-width="10"/>`,
  },
  {
    slug: 'valkyrie',
    alias: 'VALKYRIE',
    actor: 'Tessa Thompson',
    primaryColor: '#38BDF8',
    secondaryColor: '#E2E8F0',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#38BDF8"/>
                <line x1="480" y1="820" x2="720" y2="580" stroke="#FFFFFF" stroke-width="12"/>`,
  },
  {
    slug: 'loki',
    alias: 'LOKI LAUFEYSON',
    actor: 'Tom Hiddleston',
    primaryColor: '#16A34A',
    secondaryColor: '#EAB308',
    symbolSvg: `<circle cx="600" cy="720" r="120" fill="#16A34A"/>
                <path d="M520,640 Q460,480 440,440 M680,640 Q740,480 760,440" stroke="#EAB308" stroke-width="14" fill="none"/>`,
  },
  {
    slug: 'wong',
    alias: 'WONG',
    actor: 'Benedict Wong',
    primaryColor: '#D97706',
    secondaryColor: '#991B1B',
    symbolSvg: `<circle cx="600" cy="700" r="130" fill="#D97706"/>
                <circle cx="600" cy="700" r="70" fill="#991B1B"/>`,
  },
  {
    slug: 'okoye',
    alias: 'OKOYE',
    actor: 'Danai Gurira',
    primaryColor: '#DC2626',
    secondaryColor: '#EAB308',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#DC2626"/>
                <line x1="600" y1="520" x2="600" y2="880" stroke="#EAB308" stroke-width="10"/>`,
  },
  {
    slug: 'nick-fury',
    alias: 'NICK FURY',
    actor: 'Samuel L. Jackson',
    primaryColor: '#475569',
    secondaryColor: '#0284C7',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#1E293B"/>
                <ellipse cx="550" cy="690" rx="30" ry="20" fill="#000000" stroke="#FFFFFF" stroke-width="4"/>`,
  },
  {
    slug: 'maria-hill',
    alias: 'MARIA HILL',
    actor: 'Cobie Smulders',
    primaryColor: '#2563EB',
    secondaryColor: '#64748B',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#2563EB"/>
                <polygon points="600,600 680,760 520,760" fill="#64748B"/>`,
  },
  {
    slug: 'phil-coulson',
    alias: 'PHIL COULSON',
    actor: 'Clark Gregg',
    primaryColor: '#3B82F6',
    secondaryColor: '#94A3B8',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#3B82F6"/>
                <rect x="540" y="650" width="120" height="90" fill="#FFFFFF" rx="6"/>`,
  },
  {
    slug: 'moon-knight',
    alias: 'MOON KNIGHT',
    actor: 'Oscar Isaac',
    primaryColor: '#F8FAFC',
    secondaryColor: '#0284C7',
    symbolSvg: `<path d="M560,560 A140,140 0 0,0 680,780 A110,110 0 0,1 560,560 Z" fill="#F8FAFC"/>`,
  },
  {
    slug: 'ms-marvel',
    alias: 'MS. MARVEL',
    actor: 'Iman Vellani',
    primaryColor: '#38BDF8',
    secondaryColor: '#EC4899',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#38BDF8"/>
                <polygon points="620,560 550,700 610,700 570,820 660,680 600,680" fill="#F59E0B"/>`,
  },
  {
    slug: 'kate-bishop',
    alias: 'KATE BISHOP',
    actor: 'Hailee Steinfeld',
    primaryColor: '#9333EA',
    secondaryColor: '#F43F5E',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#9333EA"/>
                <line x1="480" y1="820" x2="720" y2="580" stroke="#F43F5E" stroke-width="12"/>`,
  },
  {
    slug: 'daredevil',
    alias: 'DAREDEVIL',
    actor: 'Charlie Cox',
    primaryColor: '#DC2626',
    secondaryColor: '#1E293B',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#DC2626"/>
                <text x="560" y="740" font-family="sans-serif" font-weight="900" font-size="110" fill="#FFFFFF">D</text>
                <text x="610" y="740" font-family="sans-serif" font-weight="900" font-size="110" fill="#FFFFFF">D</text>`,
  },
  {
    slug: 'yelena-belova',
    alias: 'YELENA BELOVA',
    actor: 'Florence Pugh',
    primaryColor: '#10B981',
    secondaryColor: '#E2E8F0',
    symbolSvg: `<polygon points="460,580 740,580 630,730 740,880 460,880 570,730" fill="#10B981"/>`,
  },
  {
    slug: 'monica-rambeau',
    alias: 'MONICA RAMBEAU',
    actor: 'Teyonah Parris',
    primaryColor: '#38BDF8',
    secondaryColor: '#F59E0B',
    symbolSvg: `<circle cx="600" cy="700" r="140" fill="#38BDF8"/>
                <circle cx="600" cy="700" r="60" fill="#F59E0B"/>`,
  },
];

async function generateSvgToWebp(svgString: string, outputPath: string, width: number, height: number, quality = 80) {
  const buffer = Buffer.from(svgString);
  await sharp(buffer)
    .resize(width, height)
    .webp({ quality })
    .toFile(outputPath);
}

async function buildExpandedAssets() {
  console.log(`⚡ Generating production WebP assets for ${EXPANDED_HEROES.length} expanded heroes (Tiers 2 & 3)...`);

  for (const hero of EXPANDED_HEROES) {
    const heroDir = path.join(publicImagesDir, hero.slug);
    const heroInbox = path.join(inboxDir, hero.slug);
    fs.mkdirSync(heroDir, { recursive: true });
    fs.mkdirSync(heroInbox, { recursive: true });

    // 1. Face Unmasked (1200x1500)
    const unmaskedSvg = `
    <svg width="1200" height="1500" viewBox="0 0 1200 1500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="unmaskedGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="${hero.primaryColor}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="1500" fill="transparent"/>
      <ellipse cx="600" cy="650" rx="380" ry="460" fill="url(#unmaskedGlow)"/>
      <path d="M420,1100 C400,950 420,700 480,560 C530,440 670,440 720,560 C780,700 800,950 780,1100 C740,1180 460,1180 420,1100 Z" fill="#2A2F3D" stroke="${hero.primaryColor}" stroke-width="6"/>
      <ellipse cx="530" cy="680" rx="36" ry="18" fill="#ffffff" opacity="0.9"/>
      <circle cx="530" cy="680" r="10" fill="#111111"/>
      <ellipse cx="670" cy="680" rx="36" ry="18" fill="#ffffff" opacity="0.9"/>
      <circle cx="670" cy="680" r="10" fill="#111111"/>
      <text x="600" y="1280" font-family="monospace" font-size="28" font-weight="bold" fill="#A0AEC0" text-anchor="middle" letter-spacing="4">${hero.actor.toUpperCase()}</text>
      <text x="600" y="1320" font-family="monospace" font-size="20" fill="${hero.secondaryColor}" text-anchor="middle" letter-spacing="3">[UNMASKED DOSSIER]</text>
    </svg>`;
    await generateSvgToWebp(unmaskedSvg, path.join(heroDir, 'face-unmasked.webp'), 1200, 1500);

    // 2. Face Masked (1200x1500)
    const maskedSvg = `
    <svg width="1200" height="1500" viewBox="0 0 1200 1500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="maskedGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="${hero.secondaryColor}" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="1500" fill="transparent"/>
      <ellipse cx="600" cy="650" rx="380" ry="460" fill="url(#maskedGlow)"/>
      <path d="M420,1100 C400,950 420,700 480,560 C530,440 670,440 720,560 C780,700 800,950 780,1100 C740,1180 460,1180 420,1100 Z" fill="${hero.primaryColor}" stroke="${hero.secondaryColor}" stroke-width="10"/>
      <path d="M480,660 L570,685 L560,710 L485,690 Z" fill="#00f0ff"/>
      <path d="M720,660 L630,685 L640,710 L715,690 Z" fill="#00f0ff"/>
      <text x="600" y="1280" font-family="monospace" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">${hero.alias}</text>
      <text x="600" y="1320" font-family="monospace" font-size="20" fill="${hero.secondaryColor}" text-anchor="middle" letter-spacing="3">[TACTICAL GEAR]</text>
    </svg>`;
    await generateSvgToWebp(maskedSvg, path.join(heroDir, 'face-masked.webp'), 1200, 1500);

    // 3. 9 Poses (900x1100 each)
    const poseOffsets: Record<string, { dx: number; dy: number; eyeDx: number; eyeDy: number }> = {
      tl: { dx: -35, dy: -35, eyeDx: -20, eyeDy: -15 },
      t:  { dx: 0,   dy: -40, eyeDx: 0,   eyeDy: -18 },
      tr: { dx: 35,  dy: -35, eyeDx: 20,  eyeDy: -15 },
      l:  { dx: -45, dy: 0,   eyeDx: -25, eyeDy: 0 },
      c:  { dx: 0,   dy: 0,   eyeDx: 0,   eyeDy: 0 },
      r:  { dx: 45,  dy: 0,   eyeDx: 25,  eyeDy: 0 },
      bl: { dx: -35, dy: 35,  eyeDx: -20, eyeDy: 15 },
      b:  { dx: 0,   dy: 40,  eyeDx: 0,   eyeDy: 18 },
      br: { dx: 35,  dy: 35,  eyeDx: 20,  eyeDy: 15 },
    };

    for (const [dir, offset] of Object.entries(poseOffsets)) {
      const poseSvg = `
      <svg width="900" height="1100" viewBox="0 0 900 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="1100" fill="transparent"/>
        <g transform="translate(${offset.dx}, ${offset.dy})">
          <path d="M220,1050 Q450,880 680,1050 L750,1100 L150,1100 Z" fill="${hero.primaryColor}" opacity="0.9"/>
          <ellipse cx="450" cy="520" rx="180" ry="220" fill="#1E2330" stroke="${hero.primaryColor}" stroke-width="6"/>
          <ellipse cx="${400 + offset.eyeDx}" cy="${510 + offset.eyeDy}" rx="24" ry="12" fill="#ffffff"/>
          <circle cx="${400 + offset.eyeDx * 1.3}" cy="${510 + offset.eyeDy * 1.3}" r="7" fill="${hero.secondaryColor}"/>
          <ellipse cx="${500 + offset.eyeDx}" cy="${510 + offset.eyeDy}" rx="24" ry="12" fill="#ffffff"/>
          <circle cx="${500 + offset.eyeDx * 1.3}" cy="${510 + offset.eyeDy * 1.3}" r="7" fill="${hero.secondaryColor}"/>
        </g>
        <text x="450" y="1060" font-family="monospace" font-size="20" fill="${hero.secondaryColor}" text-anchor="middle" letter-spacing="4">${hero.alias} // ${dir.toUpperCase()}</text>
      </svg>`;
      await generateSvgToWebp(poseSvg, path.join(heroDir, `pose-${dir}.webp`), 900, 1100, 75);
    }

    // 4. 5 Suits (800x1600 each)
    for (let s = 1; s <= 5; s++) {
      const suitPad = s.toString().padStart(2, '0');
      const suitSvg = `
      <svg width="800" height="1600" viewBox="0 0 800 1600" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="1600" fill="transparent"/>
        <circle cx="400" cy="240" r="90" fill="${hero.primaryColor}"/>
        <path d="M260,350 L540,350 L500,850 L300,850 Z" fill="${hero.primaryColor}" stroke="${hero.secondaryColor}" stroke-width="4"/>
        <path d="M300,850 L270,1450 L350,1450 L380,850 Z" fill="${hero.secondaryColor}"/>
        <path d="M500,850 L530,1450 L450,1450 L420,850 Z" fill="${hero.secondaryColor}"/>
        <text x="400" y="1540" font-family="monospace" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">SUIT ${suitPad}</text>
      </svg>`;
      await generateSvgToWebp(suitSvg, path.join(heroDir, `suit-${suitPad}.webp`), 800, 1600, 75);
    }

    // 5. 6 Comic Covers (600x900 each)
    for (let c = 1; c <= 6; c++) {
      const comicPad = c.toString().padStart(2, '0');
      const comicSvg = `
      <svg width="600" height="900" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="900" fill="#111622" stroke="${hero.primaryColor}" stroke-width="12"/>
        <rect x="0" y="0" width="600" height="90" fill="#E23636"/>
        <text x="300" y="65" font-family="sans-serif" font-weight="900" font-size="55" fill="#FFFFFF" text-anchor="middle" letter-spacing="6">MARVEL</text>
        <g transform="translate(-100, -80)">
          ${hero.symbolSvg}
        </g>
        <rect x="30" y="700" width="540" height="150" fill="#0b0e14" opacity="0.9" rx="8"/>
        <text x="50" y="745" font-family="sans-serif" font-weight="800" font-size="26" fill="#FFFFFF">${hero.alias}</text>
        <text x="50" y="785" font-family="monospace" font-size="18" fill="${hero.secondaryColor}">ISSUE #${comicPad}</text>
        <text x="50" y="820" font-family="monospace" font-size="14" fill="#A0AEC0">CANONICAL COMICS ARCHIVE</text>
      </svg>`;
      await generateSvgToWebp(comicSvg, path.join(heroDir, `comic-${comicPad}.webp`), 600, 900, 80);
    }

    // 6. Share Image OG (1200x630)
    const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#060709"/>
      <rect x="0" y="0" width="1200" height="10" fill="${hero.primaryColor}"/>
      <text x="100" y="240" font-family="sans-serif" font-weight="900" font-size="76" fill="#FFFFFF" letter-spacing="6">${hero.alias}</text>
      <text x="100" y="310" font-family="monospace" font-size="28" fill="${hero.secondaryColor}" letter-spacing="4">${hero.actor.toUpperCase()}</text>
      <text x="100" y="380" font-family="sans-serif" font-size="22" fill="#A0AEC0">Earth's Mightiest Heroes — Their Stories. Their Battles. Their Legacy.</text>
    </svg>`;
    await generateSvgToWebp(ogSvg, path.join(heroDir, 'og.webp'), 1200, 630, 80);

    console.log(`  ✓ Generated assets for [${hero.slug}]`);
  }

  console.log('🎉 All expanded hero assets generated successfully!');
}

buildExpandedAssets().catch(console.error);
