import sharp from "sharp";
import path from "node:path";

async function checkCropped() {
  const filepath = path.join(__dirname, "cropped_icon.png");
  const { data, info } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  let minX = info.width;
  let maxX = 0;
  let minY = info.height;
  let maxY = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const alphaIndex = (y * info.width * 4) + (x * 4) + 3;
      const alpha = data[alphaIndex];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Cropped Icon Bounding Box:`);
  console.log(`  Min X: ${minX}, Max X: ${maxX} (Width: ${maxX - minX + 1})`);
  console.log(`  Min Y: ${minY}, Max Y: ${maxY} (Height: ${maxY - minY + 1})`);
  console.log(`  Canvas Size: ${info.width}x${info.height}`);
}

checkCropped().catch(console.error);
