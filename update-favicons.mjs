import sharp from 'sharp';
import path from 'path';

const inputPath = 'd:/Brand Mindz Project/Annai Construction/public/favicon logo.png';
const outputDir = 'd:/Brand Mindz Project/Annai Construction/public';

const sizes = [
    { name: 'apple-icon-57x57.png', size: 57 },
    { name: 'apple-icon-60x60.png', size: 60 },
    { name: 'apple-icon-72x72.png', size: 72 },
    { name: 'apple-icon-76x76.png', size: 76 },
    { name: 'apple-icon-114x114.png', size: 114 },
    { name: 'apple-icon-120x120.png', size: 120 },
    { name: 'apple-icon-144x144.png', size: 144 },
    { name: 'apple-icon-152x152.png', size: 152 },
    { name: 'apple-icon-180x180.png', size: 180 },
    { name: 'android-icon-192x192.png', size: 192 },
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'ms-icon-144x144.png', size: 144 },
    { name: 'favicon.ico', size: 32 },
];

async function generate() {
    for (const { name, size } of sizes) {
        const outPath = path.join(outputDir, name);
        await sharp(inputPath)
            .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFormat(name.endsWith('.ico') ? 'png' : (name.endsWith('.png') ? 'png' : 'jpeg')) // Simplified logic for sharp
            .toFile(outPath);
        console.log(`Generated: ${name} (${size}x${size})`);
    }
    console.log('All favicons generated!');
}

generate().catch(console.error);
