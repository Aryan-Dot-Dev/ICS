import sharp from "sharp";
import path from "node:path";

async function findOrangePixels() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions.");
  }

  const { data } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  let minX = metadata.width;
  let maxX = -1;
  let minY = metadata.height;
  let maxY = -1;
  let orangeCount = 0;

  for (let y = 0; y < metadata.height; y++) {
    for (let x = 0; x < metadata.width; x++) {
      const idx = (y * metadata.width * 4) + (x * 4);
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      // Check for orange color: high red, moderate green, low blue, not transparent
      if (r > 200 && g > 50 && g < 150 && b < 50 && a > 10) {
        orangeCount++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log("Orange Pixels Analysis:");
  console.log("  Total Orange Pixels:", orangeCount);
  if (orangeCount > 0) {
    console.log(`  Bounding Box: X = ${minX} to ${maxX} (Width: ${maxX - minX + 1})`);
    console.log(`  Bounding Box: Y = ${minY} to ${maxY} (Height: ${maxY - minY + 1})`);
  } else {
    console.log("  No orange pixels found using standard threshold. Let's list general non-transparent pixels color range.");
  }
}

findOrangePixels().catch(console.error);
