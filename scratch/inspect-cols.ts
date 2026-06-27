import sharp from "sharp";
import path from "node:path";

async function inspectColContents() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const { data, info } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  console.log("Analyzing pixel rows for columns 180 to 190:");
  for (let x = 180; x <= 190; x++) {
    let rows = [];
    for (let y = 0; y < info.height; y++) {
      const alphaIndex = (y * info.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 5) {
        rows.push(y);
      }
    }
    console.log(`  Col ${x}: rows = [${rows.join(", ")}]`);
  }
}

inspectColContents().catch(console.error);
