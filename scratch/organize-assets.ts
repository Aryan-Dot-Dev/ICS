import { mkdir, rename } from "node:fs/promises";
import path from "node:path";

const srcDir = path.join(import.meta.dirname, "../src");
const assetsDir = path.join(srcDir, "assets");

const filesToMove = [
  "avatar_indian_1.png",
  "avatar_indian_2.png",
  "avatar_indian_3.png",
  "avatar_indian_4.png",
  "bank_loan_support.jpg",
  "government_grant.jpg",
  "incubation_access.jpg",
  "investor_connect.jpg",
  "private_funding_access.jpg",
  "startup_scheme_matching.jpg",
  "illustration_1.png",
  "illustration_1.webp",
  "illustration_2.png",
  "illustration_3.png",
  "illustration_3.webp",
  "notion_illustration.png",
  "service_grants.png",
  "service_incubation.png",
  "service_investor.png",
  "service_loan.png",
  "service_private.png",
  "service_startup.png"
];

async function run() {
  console.log("Creating assets directory:", assetsDir);
  await mkdir(assetsDir, { recursive: true });

  for (const filename of filesToMove) {
    const oldPath = path.join(srcDir, filename);
    const newPath = path.join(assetsDir, filename);
    try {
      await rename(oldPath, newPath);
      console.log(`Moved: ${filename} -> src/assets/${filename}`);
    } catch (e: any) {
      console.warn(`Could not move ${filename}: ${e.message}`);
    }
  }

  console.log("All assets organized successfully!");
}

run().catch(console.error);
