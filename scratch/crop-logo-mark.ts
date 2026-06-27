import sharp from "sharp";
import path from "node:path";

async function cropIcon() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions.");
  }

  // Scan from left to right to find the first non-transparent pixel column
  const { data } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });
  
  let firstX = -1;
  for (let x = 0; x < metadata.width; x++) {
    let columnHasContent = false;
    for (let y = 0; y < metadata.height; y++) {
      const alphaIndex = (y * metadata.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 5) { // alpha > 5
        columnHasContent = true;
        break;
      }
    }
    if (columnHasContent) {
      firstX = x;
      break;
    }
  }

  console.log("First column with non-transparent content is at X =", firstX);

  if (firstX === -1) {
    firstX = 0;
  }

  // Since height is 264, let's crop a square of 264x264 starting from firstX
  const cropSize = metadata.height; // 264
  const outputPath = path.join(__dirname, "cropped_icon.png");

  await sharp(filepath)
    .extract({
      left: firstX,
      top: 0,
      width: cropSize,
      height: cropSize
    })
    .toFile(outputPath);

  console.log(`Cropped square icon saved to: ${outputPath}`);
}

cropIcon().catch(console.error);
