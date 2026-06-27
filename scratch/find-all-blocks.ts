import sharp from "sharp";
import path from "node:path";

async function findAllBlocks() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions.");
  }

  const { data } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });

  let segments: { start: number; end: number }[] = [];
  let inContent = false;
  let startX = -1;

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
        inContent = true;
        startX = x;
      }
    } else {
      if (inContent) {
        inContent = false;
        segments.push({ start: startX, end: x - 1 });
      }
    }
  }

  // If we ended while in content
  if (inContent) {
    segments.push({ start: startX, end: metadata.width - 1 });
  }

  console.log("Found Content Segments in downloaded_logo.png:");
  segments.forEach((seg, index) => {
    console.log(`  Segment ${index + 1}: X = ${seg.start} to ${seg.end} (Width: ${seg.end - seg.start + 1})`);
  });
}

findAllBlocks().catch(console.error);
