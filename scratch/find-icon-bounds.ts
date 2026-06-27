import sharp from "sharp";
import path from "node:path";

async function findIconBounds() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions.");
  }

  const { data } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  // Let's analyze the non-transparent pixels at different columns to find the gap between the circular logo and the text.
  // The circle should start at X=1 and end where a vertical gap exists or where pixel density changes.
  // Let's print the column density of the first 250 columns.
  console.log("Analyzing first 250 columns:");
  let colsInfo = [];
  for (let x = 0; x < 250; x++) {
    let count = 0;
    let minY = metadata.height;
    let maxY = -1;
    for (let y = 0; y < metadata.height; y++) {
      const alphaIndex = (y * metadata.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 5) {
        count++;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
    colsInfo.push({ x, count, height: maxY >= minY ? maxY - minY + 1 : 0 });
  }

  // Print columns with low count (gaps)
  console.log("Columns with gaps or low counts:");
  for (let x = 120; x < 220; x++) {
    const col = colsInfo[x];
    console.log(`  Col ${x}: pixelCount=${col.count}, height=${col.height}`);
  }
}

findIconBounds().catch(console.error);
