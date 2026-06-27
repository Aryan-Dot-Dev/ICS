import sharp from "sharp";
import path from "node:path";

async function inspectCol230() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const { data, info } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  console.log("Analyzing pixel rows for columns 230 to 300:");
  for (let x = 230; x <= 300; x += 5) {
    let rows = [];
    for (let y = 0; y < info.height; y++) {
      const alphaIndex = (y * info.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 5) {
        rows.push(y);
      }
    }
    console.log(`  Col ${x}: rows = [${rows.slice(0, 3).join(", ")} ... ${rows.slice(-3).join(", ")}] (Total: ${rows.length})`);
  }
}

inspectCol230().catch(console.error);
