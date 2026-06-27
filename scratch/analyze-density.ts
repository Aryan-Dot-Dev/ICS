import sharp from "sharp";
import path from "node:path";

async function analyzeDensity() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const { data, info } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  console.log("Column pixel densities (non-transparent count per column):");
  let densityStr = "";
  for (let x = 1; x <= 423; x++) {
    let count = 0;
    for (let y = 0; y < info.height; y++) {
      const alphaIndex = (y * info.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 10) {
        count++;
      }
    }
    // print in groups of 5 columns to keep output short, or print as a trend
    if (x % 10 === 0) {
      console.log(`  Cols ${x-9}-${x}: ${densityStr}`);
      densityStr = "";
    }
    densityStr += count.toString().padStart(3) + " ";
  }
}

analyzeDensity().catch(console.error);
