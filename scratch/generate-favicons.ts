import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const srcDir = path.join(import.meta.dirname, "../src");
const svgPath = path.join(srcDir, "logo.svg");

const targetPngs = [
  { name: "favicon-16.png", size: 16 },
  { name: "favicon-32.png", size: 32 },
  { name: "favicon-48.png", size: 48 },
  { name: "favicon-180.png", size: 180 },
  { name: "favicon-192.png", size: 192 },
  { name: "favicon-512.png", size: 512 },
  { name: "logo_mark_square.png", size: 512 }
];

function createIco(pngBuffer: Buffer): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: Icon (1)
  header.writeUInt16LE(1, 4); // Number of images (1)

  const directory = Buffer.alloc(16);
  directory.writeUInt8(32, 0); // Width (32)
  directory.writeUInt8(32, 1); // Height (32)
  directory.writeUInt8(0, 2);  // Colors (0 = no palette)
  directory.writeUInt8(0, 3);  // Reserved
  directory.writeUInt16LE(1, 4); // Planes (1)
  directory.writeUInt16LE(32, 6); // Bits per pixel (32)
  directory.writeUInt32LE(pngBuffer.length, 8); // Image size
  directory.writeUInt32LE(22, 12); // Image offset (6 + 16)

  return Buffer.concat([header, directory, pngBuffer]);
}

async function run() {
  console.log("Generating favicons from SVG:", svgPath);

  // Generate PNGs
  let favicon32Buffer: Buffer | null = null;
  for (const target of targetPngs) {
    const outputPath = path.join(srcDir, target.name);
    const buffer = await sharp(svgPath)
      .resize(target.size, target.size)
      .png()
      .toBuffer();
    
    await writeFile(outputPath, buffer);
    console.log(`Generated: ${target.name} (${target.size}x${target.size})`);

    if (target.size === 32) {
      favicon32Buffer = buffer;
    }
  }

  // Generate ICO from the 32x32 PNG buffer
  if (favicon32Buffer) {
    const icoPath = path.join(srcDir, "favicon.ico");
    const icoBuffer = createIco(favicon32Buffer);
    await writeFile(icoPath, icoBuffer);
    console.log(`Generated: favicon.ico (32x32 ICO container)`);
  } else {
    console.error("Error: Could not generate favicon.ico because 32x32 PNG buffer was missing.");
  }

  console.log("All favicons successfully generated!");
}

run().catch(console.error);
