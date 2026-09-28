import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inboxDir = path.join(process.cwd(), 'asset-inbox');
const publicImagesDir = path.join(process.cwd(), 'public', 'images');

async function processInbox() {
  console.log('📦 Scanning /asset-inbox/ for new files...');

  if (!fs.existsSync(inboxDir)) {
    fs.mkdirSync(inboxDir, { recursive: true });
    console.log('Created /asset-inbox/ directory.');
    return;
  }

  const slugs = fs.readdirSync(inboxDir).filter((f) => fs.statSync(path.join(inboxDir, f)).isDirectory());

  if (slugs.length === 0) {
    console.log('No hero directories found in /asset-inbox/.');
    return;
  }

  for (const slug of slugs) {
    const heroInbox = path.join(inboxDir, slug);
    const heroPublic = path.join(publicImagesDir, slug);
    fs.mkdirSync(heroPublic, { recursive: true });

    const files = fs.readdirSync(heroInbox).filter((f) => !f.endsWith('.md'));
    console.log(`Processing ${files.length} file(s) for [${slug}]...`);

    for (const file of files) {
      const srcPath = path.join(heroInbox, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const destPath = path.join(heroPublic, `${baseName}.webp`);

      try {
        console.log(`  Converting & optimizing: ${file} -> ${baseName}.webp`);
        await sharp(srcPath)
          .webp({ quality: 80, effort: 4 })
          .toFile(destPath);

        // Generate 16px blur placeholder
        const blurBuffer = await sharp(srcPath)
          .resize(16, 20, { fit: 'inside' })
          .webp({ quality: 20 })
          .toBuffer();
        const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

        console.log(`  ✓ Saved: ${destPath} (Blur placeholder generated)`);
      } catch (err) {
        console.error(`  ❌ Error processing ${file}:`, err);
      }
    }
  }

  console.log('✅ Asset inbox ingestion complete!');
}

processInbox();
