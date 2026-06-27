import sharp from "sharp";
import path from "node:path";
import { writeFile } from "node:fs/promises";

async function generateTestFavicon() {
  const logoPath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const outputPath = path.join(__dirname, "test_favicon_512.png");

  const targetSize = 512;
  const contentSize = Math.round(targetSize * 0.8); // 410
  const padTop = Math.round((targetSize - contentSize) / 2);
  const padBottom = targetSize - contentSize - padTop;
  const padLeft = Math.round((targetSize - contentSize) / 2);
  const padRight = targetSize - contentSize - padLeft;

  await sharp(logoPath)
    .extract({ left: 1, top: 56, width: 423, height: 181 })
    .resize(contentSize, contentSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(outputPath);

  console.log("Generated test favicon at:", outputPath);

  // Check its bounding box
  const { data, info } = await sharp(outputPath).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width;
  let maxX = 0;
  let minY = info.height;
  let maxY = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const alphaIndex = (y * info.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding Box in generated 512x512 image:`);
  console.log(`  X = ${minX} to ${maxX} (Width: ${maxX - minX + 1})`);
  console.log(`  Y = ${minY} to ${maxY} (Height: ${maxY - minY + 1})`);
}

generateTestFavicon().catch(console.error);
