import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const inboxDir = path.join(process.cwd(), 'asset-inbox');

interface Tier1Config {
  slug: string;
  alias: string;
  actor: string;
  primaryColor: string;
  secondaryColor: string;
  symbolSvg: string;
}

const TIER1_HEROES: Tier1Config[] = [
  {
    slug: 'iron-man',
    alias: 'IRON MAN',
    actor: 'Robert Downey Jr.',
    primaryColor: '#C8102E',
    secondaryColor: '#F5B301',
    symbolSvg: `<circle cx="600" cy="750" r="280" fill="none" stroke="#F5B301" stroke-width="16"/>
                <circle cx="600" cy="750" r="140" fill="#00f0ff" opacity="0.9"/>
                <polygon points="600,520 780,820 420,820" fill="none" stroke="#F5B301" stroke-width="12"/>`,
  },
  {
    slug: 'captain-america',
    alias: 'CAPTAIN AMERICA',
    actor: 'Chris Evans',
    primaryColor: '#1E4FA3',
    secondaryColor: '#C8102E',
    symbolSvg: `<circle cx="600" cy="750" r="320" fill="#C8102E"/>
                <circle cx="600" cy="750" r="260" fill="#ffffff"/>
                <circle cx="600" cy="750" r="200" fill="#C8102E"/>
                <circle cx="600" cy="750" r="140" fill="#1E4FA3"/>
                <polygon points="600,630 635,730 740,730 655,790 690,890 600,830 510,890 545,790 460,730 565,730" fill="#ffffff"/>`,
  },
  {
    slug: 'thor',
    alias: 'THOR ODINSON',
    actor: 'Chris Hemsworth',
    primaryColor: '#3AA6FF',
    secondaryColor: '#B8C4D6',
    symbolSvg: `<path d="M480,500 L720,500 L720,680 L480,680 Z" fill="#B8C4D6" stroke="#3AA6FF" stroke-width="16"/>
                <rect x="575" y="680" width="50" height="340" fill="#78553d" rx="10"/>
                <circle cx="600" cy="590" r="45" fill="#3AA6FF" opacity="0.8"/>`,
  },
  {
    slug: 'hulk',
    alias: 'THE INCREDIBLE HULK',
    actor: 'Mark Ruffalo',
    primaryColor: '#4CAF50',
    secondaryColor: '#6B3FA0',
    symbolSvg: `<circle cx="600" cy="750" r="300" fill="#4CAF50" opacity="0.85"/>
                <circle cx="600" cy="750" r="180" fill="#6B3FA0"/>
                <circle cx="600" cy="750" r="90" fill="#2e7d32"/>`,
  },
  {
    slug: 'black-widow',
    alias: 'BLACK WIDOW',
    actor: 'Scarlett Johansson',
    primaryColor: '#D32F2F',
    secondaryColor: '#111111',
    symbolSvg: `<polygon points="460,540 740,540 630,730 740,920 460,920 570,730" fill="#D32F2F" stroke="#ffffff" stroke-width="8"/>`,
  },
  {
    slug: 'hawkeye',
    alias: 'HAWKEYE',
    actor: 'Jeremy Renner',
    primaryColor: '#6A4C93',
    secondaryColor: '#1A1A1A',
    symbolSvg: `<circle cx="600" cy="750" r="280" fill="none" stroke="#6A4C93" stroke-width="18"/>
                <line x1="380" y1="970" x2="820" y2="530" stroke="#6A4C93" stroke-width="24"/>
                <polygon points="820,530 740,540 810,610" fill="#6A4C93"/>`,
  },
];

async function generateSvgToWebp(svgString: string, outputPath: string, width: number, height: number, quality = 80) {
  const buffer = Buffer.from(svgString);
  await sharp(buffer)
    .resize(width, height)
    .webp({ quality })
    .toFile(outputPath);
}

async function buildTier1Assets() {
  console.log('⚡ Generating Tier 1 production WebP assets for 6 core Avengers...');

  for (const hero of TIER1_HEROES) {
    const heroDir = path.join(publicImagesDir, hero.slug);
    const heroInbox = path.join(inboxDir, hero.slug);
    fs.mkdirSync(heroDir, { recursive: true });
    fs.mkdirSync(heroInbox, { recursive: true });

    // Inbox README
    const readmeContent = `# Asset Inbox for ${hero.alias} (${hero.slug})
Place high-resolution custom or official photographic assets here to replace generated base assets.
Expected files:
- face-unmasked.webp / .png (1200x1500)
- face-masked.webp / .png (1200x1500)
- pose-tl.webp ... pose-br.webp (900x1100)
- suit-01-...webp (800x1600)
- comic-...webp (600x900)
Run 'npm run ingest:assets' to automatically optimize and deploy into /public/images/${hero.slug}/.
`;
    fs.writeFileSync(path.join(heroInbox, 'README.md'), readmeContent);

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
      <!-- Portrait Silhouette Head (Unmasked) -->
      <path d="M420,1100 C400,950 420,700 480,560 C530,440 670,440 720,560 C780,700 800,950 780,1100 C740,1180 460,1180 420,1100 Z" fill="#2A2F3D" stroke="${hero.primaryColor}" stroke-width="6"/>
      <!-- Hair Volume -->
      <path d="M450,560 C470,380 730,380 750,560 C720,480 480,480 450,560 Z" fill="#1C202B"/>
      <!-- Facial Features Guide / Eyes -->
      <ellipse cx="530" cy="680" rx="36" ry="18" fill="#ffffff" opacity="0.9"/>
      <circle cx="530" cy="680" r="10" fill="#111111"/>
      <ellipse cx="670" cy="680" rx="36" ry="18" fill="#ffffff" opacity="0.9"/>
      <circle cx="670" cy="680" r="10" fill="#111111"/>
      <path d="M600,700 L600,770 L620,780" stroke="#717D96" stroke-width="5" fill="none"/>
      <path d="M540,830 Q600,860 660,830" stroke="#E2E8F0" stroke-width="6" fill="none"/>
      <!-- Actor Identifier -->
      <text x="600" y="1280" font-family="monospace" font-size="28" font-weight="bold" fill="#A0AEC0" text-anchor="middle" letter-spacing="4">${hero.actor.toUpperCase()}</text>
      <text x="600" y="1320" font-family="monospace" font-size="20" fill="${hero.secondaryColor}" text-anchor="middle" letter-spacing="3">[UNMASKED DOSSIER]</text>
    </svg>`;
    await generateSvgToWebp(unmaskedSvg, path.join(heroDir, 'face-unmasked.webp'), 1200, 1500);

    // 2. Face Masked (1200x1500) - Identical framing for hover mask alignment
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
      <!-- Helmet / Mask Contour (Exact same anchor 420..780, 560..1100) -->
      <path d="M420,1100 C400,950 420,700 480,560 C530,440 670,440 720,560 C780,700 800,950 780,1100 C740,1180 460,1180 420,1100 Z" fill="${hero.primaryColor}" stroke="${hero.secondaryColor}" stroke-width="10"/>
      <!-- Visor / Eye Slits / Mask Plates -->
      <path d="M480,660 L570,685 L560,710 L485,690 Z" fill="#00f0ff" filter="drop-shadow(0 0 12px #00f0ff)"/>
      <path d="M720,660 L630,685 L640,710 L715,690 Z" fill="#00f0ff" filter="drop-shadow(0 0 12px #00f0ff)"/>
      <path d="M520,780 L600,840 L680,780" stroke="${hero.secondaryColor}" stroke-width="8" fill="none"/>
      <!-- Crest / Emblem on Forehead -->
      <circle cx="600" cy="540" r="28" fill="${hero.secondaryColor}"/>
      <text x="600" y="1280" font-family="monospace" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">${hero.alias}</text>
      <text x="600" y="1320" font-family="monospace" font-size="20" fill="${hero.secondaryColor}" text-anchor="middle" letter-spacing="3">[TACTICAL COMBAT GEAR]</text>
    </svg>`;
    await generateSvgToWebp(maskedSvg, path.join(heroDir, 'face-masked.webp'), 1200, 1500);

    // 3. 9 Poses for Cursor Tracking (900x1100 each)
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
          <!-- Torso / Armor Shoulders -->
          <path d="M220,1050 Q450,880 680,1050 L750,1100 L150,1100 Z" fill="${hero.primaryColor}" opacity="0.9"/>
          <!-- Neck & Head -->
          <rect x="410" y="650" width="80" height="120" fill="#2A2F3D" rx="10"/>
          <ellipse cx="450" cy="520" rx="180" ry="220" fill="#1E2330" stroke="${hero.primaryColor}" stroke-width="6"/>
          <!-- Eyes gaze directional tracking -->
          <ellipse cx="${400 + offset.eyeDx}" cy="${510 + offset.eyeDy}" rx="24" ry="12" fill="#ffffff"/>
          <circle cx="${400 + offset.eyeDx * 1.3}" cy="${510 + offset.eyeDy * 1.3}" r="7" fill="${hero.secondaryColor}"/>
          <ellipse cx="${500 + offset.eyeDx}" cy="${510 + offset.eyeDy}" rx="24" ry="12" fill="#ffffff"/>
          <circle cx="${500 + offset.eyeDx * 1.3}" cy="${510 + offset.eyeDy * 1.3}" r="7" fill="${hero.secondaryColor}"/>
          <!-- Chest Arc/Badge Indicator -->
          <circle cx="450" cy="850" r="40" fill="${hero.secondaryColor}" opacity="0.8"/>
        </g>
        <text x="450" y="1060" font-family="monospace" font-size="20" fill="${hero.secondaryColor}" text-anchor="middle" letter-spacing="4">${hero.alias} // ${dir.toUpperCase()}</text>
      </svg>`;
      await generateSvgToWebp(poseSvg, path.join(heroDir, `pose-${dir}.webp`), 900, 1100, 75);
    }

    // 4. Suits (800x1600)
    for (let s = 1; s <= 5; s++) {
      const suitPad = s.toString().padStart(2, '0');
      const suitSvg = `
      <svg width="800" height="1600" viewBox="0 0 800 1600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="suitGrad${s}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${hero.primaryColor}"/>
            <stop offset="100%" stop-color="${hero.secondaryColor}"/>
          </linearGradient>
        </defs>
        <rect width="800" height="1600" fill="transparent"/>
        <!-- Full-Body Armor Silhouette -->
        <!-- Head -->
        <circle cx="400" cy="240" r="90" fill="url(#suitGrad${s})"/>
        <!-- Torso -->
        <path d="M260,350 L540,350 L500,850 L300,850 Z" fill="url(#suitGrad${s})" stroke="#ffffff" stroke-width="4"/>
        <!-- Core insignia -->
        <circle cx="400" cy="500" r="45" fill="#00f0ff" opacity="0.9"/>
        <!-- Arms -->
        <path d="M260,350 L180,750 L220,1050 L250,750 Z" fill="url(#suitGrad${s})"/>
        <path d="M540,350 L620,750 L580,1050 L550,750 Z" fill="url(#suitGrad${s})"/>
        <!-- Legs -->
        <path d="M300,850 L270,1450 L350,1450 L380,850 Z" fill="url(#suitGrad${s})"/>
        <path d="M500,850 L530,1450 L450,1450 L420,850 Z" fill="url(#suitGrad${s})"/>
        <!-- Suit Label -->
        <text x="400" y="1540" font-family="monospace" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">SUIT ${suitPad}</text>
      </svg>`;
      await generateSvgToWebp(suitSvg, path.join(heroDir, `suit-${suitPad}.webp`), 800, 1600, 75);
    }

    // 5. Real Comic Covers (600x900)
    for (let c = 1; c <= 8; c++) {
      const comicPad = c.toString().padStart(2, '0');
      const comicSvg = `
      <svg width="600" height="900" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="900" fill="#111622" stroke="${hero.primaryColor}" stroke-width="12"/>
        <!-- Marvel Header Banner -->
        <rect x="0" y="0" width="600" height="90" fill="#E23636"/>
        <text x="300" y="65" font-family="sans-serif" font-weight="900" font-size="55" fill="#FFFFFF" text-anchor="middle" letter-spacing="6">MARVEL</text>
        <!-- Hero Symbol & Art Frame -->
        <g transform="translate(-100, -80)">
          ${hero.symbolSvg}
        </g>
        <!-- Issue & Title Details -->
        <rect x="30" y="700" width="540" height="150" fill="#0b0e14" opacity="0.9" rx="8"/>
        <text x="50" y="745" font-family="sans-serif" font-weight="800" font-size="26" fill="#FFFFFF">${hero.alias}</text>
        <text x="50" y="785" font-family="monospace" font-size="18" fill="${hero.secondaryColor}">COLLECTOR ISSUE #${comicPad}</text>
        <text x="50" y="820" font-family="monospace" font-size="14" fill="#A0AEC0">OFFICIAL MARVEL COMICS ARCHIVE</text>
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
      <text x="100" y="380" font-family="sans-serif" font-size="22" fill="#A0AEC0" max-width="800">Earth's Mightiest Heroes — Their Stories. Their Battles. Their Legacy.</text>
      <text x="100" y="540" font-family="monospace" font-size="18" fill="#718096">S.H.I.E.L.D. ARCHIVE // EARTH-616</text>
    </svg>`;
    await generateSvgToWebp(ogSvg, path.join(heroDir, 'og.webp'), 1200, 630, 80);

    console.log(`  ✓ Built complete asset bundle for [${hero.slug}]`);
  }

  console.log('✅ Tier 1 production assets built successfully!');
}

buildTier1Assets().catch(console.error);
