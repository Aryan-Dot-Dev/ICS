import sharp from "sharp";
import path from "node:path";

async function renderAscii() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions.");
  }

  // Resize to a small width (e.g. 100 chars) to print in console
  const asciiWidth = 100;
  const asciiHeight = Math.round((metadata.height / metadata.width) * asciiWidth * 0.5); // 0.5 factor to adjust for line height in terminal

  const { data } = await sharp(filepath)
    .resize(asciiWidth, asciiHeight, { fit: "fill" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log(`ASCII Art of logo (${metadata.width}x${metadata.height} -> ${asciiWidth}x${asciiHeight}):`);
  for (let y = 0; y < asciiHeight; y++) {
    let line = "";
    for (let x = 0; x < asciiWidth; x++) {
      const idx = (y * asciiWidth * 4) + (x * 4);
      const alpha = data[idx + 3];
      if (alpha > 50) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

renderAscii().catch(console.error);
