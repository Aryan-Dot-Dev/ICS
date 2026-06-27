import sharp from "sharp";
import path from "node:path";

const srcDir = path.join(import.meta.dirname, "../src");

async function checkFavicon(filename: string) {
  const filepath = path.join(srcDir, filename);
  const { data, info } = await sharp(filepath).raw().toBuffer({ resolveWithObject: true });
  
  // check top row of pixels
  // each pixel is RGBA (4 bytes)
  let allTransparent = true;
  for (let x = 0; x < info.width; x++) {
    const alphaIndex = (x * 4) + 3;
    const alpha = data[alphaIndex];
    if (alpha !== 0) {
      allTransparent = false;
      break;
    }
  }

  // check left column of pixels
  let leftTransparent = true;
  for (let y = 0; y < info.height; y++) {
    const alphaIndex = (y * info.width * 4) + 3;
    const alpha = data[alphaIndex];
    if (alpha !== 0) {
      leftTransparent = false;
      break;
    }
  }

  console.log(`File: ${filename} (${info.width}x${info.height}) -> Top row transparent: ${allTransparent}, Left column transparent: ${leftTransparent}`);
}

async function verify() {
  await checkFavicon("favicon-32.png");
  await checkFavicon("favicon-48.png");
  await checkFavicon("favicon-512.png");
}

verify().catch(console.error);
