import sharp from "sharp";
import path from "node:path";

async function checkDownloaded() {
  const filepath = path.join(__dirname, "../src/assets/logo/downloaded_logo.png");
  const metadata = await sharp(filepath).metadata();
  console.log("Downloaded Logo Metadata:");
  console.log("  Width:", metadata.width);
  console.log("  Height:", metadata.height);
  console.log("  Format:", metadata.format);
  console.log("  Space:", metadata.space);
  console.log("  Channels:", metadata.channels);
}

checkDownloaded().catch(console.error);
