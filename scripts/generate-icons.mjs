import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public", "icon.svg"));
const out = (name) => join(root, "public", name);

async function rasterize(size, file) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(out(file));
}

await rasterize(192, "icon-192.png");
await rasterize(512, "icon-512.png");
await rasterize(180, "apple-touch-icon.png");

const ico16 = await sharp(svg, { density: 384 }).resize(16, 16).png().toBuffer();
const ico32 = await sharp(svg, { density: 384 }).resize(32, 32).png().toBuffer();
const ico48 = await sharp(svg, { density: 384 }).resize(48, 48).png().toBuffer();

function buildIco(pngs) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const sizes = [16, 32, 48];
  pngs.forEach((png, i) => {
    const s = sizes[i];
    entries.writeUInt8(s === 256 ? 0 : s, i * 16);
    entries.writeUInt8(s === 256 ? 0 : s, i * 16 + 1);
    entries.writeUInt8(0, i * 16 + 2);
    entries.writeUInt8(0, i * 16 + 3);
    entries.writeUInt16LE(1, i * 16 + 4);
    entries.writeUInt16LE(32, i * 16 + 6);
    entries.writeUInt32LE(png.length, i * 16 + 8);
    entries.writeUInt32LE(offset, i * 16 + 12);
    offset += png.length;
  });

  return Buffer.concat([header, entries, ...pngs]);
}

writeFileSync(out("favicon.ico"), buildIco([ico16, ico32, ico48]));

const ogMark = await sharp(svg, { density: 512 }).resize(360, 360).toBuffer();
const wordmark = readFileSync(join(root, "public", "logo.PNG"));
const ogWordmark = await sharp(wordmark)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
  .resize({ width: 520 })
  .toBuffer();

const ogSvg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#ffffff"/>
    <rect x="0" y="0" width="1200" height="6" fill="#0FA39C"/>
    <text x="80" y="540" font-family="Georgia, serif" font-size="32" fill="#0a0a0a">Enabling the Kingdom's digital future.</text>
  </svg>`,
);

await sharp(ogSvg)
  .composite([
    { input: ogMark, top: 135, left: 80 },
    { input: ogWordmark, top: 220, left: 470 },
  ])
  .png()
  .toFile(out("og.png"));

console.log("icons generated");
