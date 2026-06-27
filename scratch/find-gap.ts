import sharp from "sharp";
import path from "node:path";

async function findGap() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions.");
  }

  const { data } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  // Scan columns from left to right
  let inContent = false;
  let gapX = -1;
  let contentEndX = -1;

  for (let x = 0; x < metadata.width; x++) {
    let columnHasContent = false;
    for (let y = 0; y < metadata.height; y++) {
      const alphaIndex = (y * metadata.width * 4) + (x * 4) + 3;
      if (data[alphaIndex] > 5) {
        columnHasContent = true;
        break;
      }
    }

    if (columnHasContent) {
      if (!inContent) {
        // started new content
        inContent = true;
      }
    } else {
      if (inContent) {
        // found a gap after some content!
        gapX = x;
        contentEndX = x - 1;
        break;
      }
    }
  }

  console.log(`First content block ends at X = ${contentEndX}`);
  console.log(`Gap starts at X = ${gapX}`);
}

findGap().catch(console.error);
