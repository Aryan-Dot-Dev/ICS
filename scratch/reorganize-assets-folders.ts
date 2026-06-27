import { mkdir, rename } from "node:fs/promises";
import path from "node:path";

const srcDir = path.join(import.meta.dirname, "../src");
const assetsDir = path.join(srcDir, "assets");

const favicons = [
  "favicon.ico",
  "favicon-16.png",
  "favicon-32.png",
  "favicon-48.png",
  "favicon-180.png",
  "favicon-192.png",
  "favicon-512.png",
  "logo_mark_square.png"
];

const avatars = [
  "avatar_indian_1.png",
  "avatar_indian_2.png",
  "avatar_indian_3.png",
  "avatar_indian_4.png"
];

const illustrations = [
  "illustration_1.png",
  "illustration_1.webp",
  "illustration_2.png",
  "illustration_3.png",
  "illustration_3.webp",
  "notion_illustration.png"
];

const services = [
  "bank_loan_support.jpg",
  "government_grant.jpg",
  "incubation_access.jpg",
  "investor_connect.jpg",
  "private_funding_access.jpg",
  "startup_scheme_matching.jpg",
  "service_grants.png",
  "service_incubation.png",
  "service_investor.png",
  "service_loan.png",
  "service_private.png",
  "service_startup.png"
];

async function run() {
  // 1. Create target directories
  const paths = {
    favicons: path.join(assetsDir, "favicons"),
    logo: path.join(assetsDir, "logo"),
    avatars: path.join(assetsDir, "avatars"),
    illustrations: path.join(assetsDir, "illustrations"),
    services: path.join(assetsDir, "services")
  };

  for (const dir of Object.values(paths)) {
    await mkdir(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }

  // 2. Move logo.svg from src/ to src/assets/logo/
  try {
    await rename(path.join(srcDir, "logo.svg"), path.join(paths.logo, "logo.svg"));
    console.log("Moved logo.svg -> src/assets/logo/logo.svg");
  } catch (e: any) {
    console.log(`logo.svg already moved or error: ${e.message}`);
  }

  // 3. Move favicons from src/ to src/assets/favicons/
  for (const file of favicons) {
    // try to find it in src/
    let oldPath = path.join(srcDir, file);
    try {
      await rename(oldPath, path.join(paths.favicons, file));
      console.log(`Moved: ${file} -> src/assets/favicons/${file}`);
    } catch (e) {
      // try to find it in src/assets/
      oldPath = path.join(assetsDir, file);
      try {
        await rename(oldPath, path.join(paths.favicons, file));
        console.log(`Moved from assets: ${file} -> src/assets/favicons/${file}`);
      } catch (err: any) {
        console.log(`Could not move favicon ${file}: ${err.message}`);
      }
    }
  }

  // 4. Move avatars from src/assets/ to src/assets/avatars/
  for (const file of avatars) {
    const oldPath = path.join(assetsDir, file);
    const newPath = path.join(paths.avatars, file);
    try {
      await rename(oldPath, newPath);
      console.log(`Moved: src/assets/${file} -> src/assets/avatars/${file}`);
    } catch (e: any) {
      console.log(`Could not move avatar ${file}: ${e.message}`);
    }
  }

  // 5. Move illustrations from src/assets/ to src/assets/illustrations/
  for (const file of illustrations) {
    const oldPath = path.join(assetsDir, file);
    const newPath = path.join(paths.illustrations, file);
    try {
      await rename(oldPath, newPath);
      console.log(`Moved: src/assets/${file} -> src/assets/illustrations/${file}`);
    } catch (e: any) {
      console.log(`Could not move illustration ${file}: ${e.message}`);
    }
  }

  // 6. Move services from src/assets/ to src/assets/services/
  for (const file of services) {
    const oldPath = path.join(assetsDir, file);
    const newPath = path.join(paths.services, file);
    try {
      await rename(oldPath, newPath);
      console.log(`Moved: src/assets/${file} -> src/assets/services/${file}`);
    } catch (e: any) {
      console.log(`Could not move service ${file}: ${e.message}`);
    }
  }

  console.log("All files reorganized successfully into subfolders!");
}

run().catch(console.error);
