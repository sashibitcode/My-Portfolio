import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const originalDir = path.join(rootDir, 'assets-original', 'photos');
const outputDir = path.join(rootDir, 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImage(filename, baseName, widths) {
  const inputPath = path.join(originalDir, filename);
  if (!fs.existsSync(inputPath)) {
    console.warn(`Original file not found: ${inputPath}`);
    return;
  }

  const metadata = await sharp(inputPath).metadata();
  console.log(`Processing ${filename}: ${metadata.width}x${metadata.height}, channels: ${metadata.channels}`);

  // Base fallback JPEG with stripped EXIF and optimal quality
  const fallbackJpg = path.join(outputDir, `${baseName}.jpg`);
  await sharp(inputPath)
    .rotate() // auto-orient
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(fallbackJpg);

  // Responsive WebP and AVIF
  for (const w of widths) {
    if (w <= metadata.width) {
      const webpPath = path.join(outputDir, `${baseName}-${w}.webp`);
      await sharp(inputPath)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 86, effort: 6 })
        .toFile(webpPath);

      const avifPath = path.join(outputDir, `${baseName}-${w}.avif`);
      await sharp(inputPath)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .avif({ quality: 65, effort: 6 })
        .toFile(avifPath);

      console.log(`Generated ${baseName}-${w}.webp and .avif`);
    }
  }

  // Also default full-res webp
  await sharp(inputPath)
    .rotate()
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(outputDir, `${baseName}.webp`));

  console.log(`Finished ${baseName}`);
}

async function generateOgImage() {
  console.log('Generating OpenGraph image...');
  const ogWidth = 1200;
  const ogHeight = 630;

  // Create an on-brand SVG overlay for the OG card
  const svgOverlay = Buffer.from(`
    <svg width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080b11"/>
          <stop offset="50%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#818cf8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <circle cx="850" cy="300" r="280" fill="#38bdf8" opacity="0.08" filter="blur(60px)"/>
      <circle cx="150" cy="150" r="180" fill="#818cf8" opacity="0.05" filter="blur(40px)"/>
      
      <!-- Border outline -->
      <rect x="24" y="24" width="${ogWidth - 48}" height="${ogHeight - 48}" rx="20" fill="none" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5"/>

      <!-- Brand / Monogram -->
      <text x="80" y="110" font-family="monospace" font-size="18" font-weight="600" fill="#38bdf8" letter-spacing="4">SYS.ID // SASHIBITCODE</text>
      
      <!-- Display Name -->
      <text x="80" y="210" font-family="sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-1">Shashikant Raj</text>
      
      <!-- Title -->
      <text x="80" y="275" font-family="sans-serif" font-size="30" font-weight="600" fill="url(#cyanGrad)">DATA ANALYST | DATA ANALYTICS</text>
      
      <!-- Bio / Tagline -->
      <text x="80" y="340" font-family="sans-serif" font-size="20" fill="#94a3b8">B.Tech CSE · Jagannath University · Transforming Data into Impact</text>
      
      <!-- Metrics & Specs pill tags -->
      <rect x="80" y="420" width="220" height="48" rx="8" fill="#1e293b" stroke="rgba(56, 189, 248, 0.4)"/>
      <text x="100" y="451" font-family="monospace" font-size="16" fill="#38bdf8">PYTHON • SQL • BI</text>

      <rect x="320" y="420" width="240" height="48" rx="8" fill="#1e293b" stroke="rgba(129, 140, 248, 0.4)"/>
      <text x="340" y="451" font-family="monospace" font-size="16" fill="#818cf8">DATA IN MOTION</text>

      <!-- URL signature -->
      <text x="80" y="550" font-family="monospace" font-size="16" fill="#64748b">github.com/sashibitcode · linkedin.com/in/sashikant-raj</text>
    </svg>
  `);

  // Resize Photo 1 cleanly to fit as right-hand portrait on OG card
  const primaryOriginal = path.join(originalDir, 'Photo 1.png');
  const portraitComposite = await sharp(primaryOriginal)
    .resize(380, 480, { fit: 'cover', position: 'center' })
    .toBuffer();

  const ogComposite = await sharp(svgOverlay)
    .composite([
      {
        input: portraitComposite,
        top: 75,
        left: 740,
      }
    ])
    .png({ quality: 90 })
    .toFile(path.join(outputDir, 'og-image.png'));

  console.log('Generated og-image.png successfully!');
}

async function run() {
  console.log('--- Starting Image Optimization ---');
  await processImage('Photo 1.png', 'profile-primary', [480, 768, 1145]);
  await processImage('Photo 2.png', 'profile-secondary', [480, 768, 1086]);
  await generateOgImage();
  console.log('--- Image Optimization Complete ---');
}

run().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
