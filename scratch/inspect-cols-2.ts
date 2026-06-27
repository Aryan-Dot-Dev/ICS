import sharp from "sharp";
import path from "node:path";

async function inspectCol210() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const { data, info } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  console.log("Analyzing pixel rows for columns 210 to 230:");
  for (let x = 210; x <= 230; x++) {
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

inspectCol210().catch(console.error);
