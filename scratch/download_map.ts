import fs from "fs";
import path from "path";

const geoUrl = "https://raw.githubusercontent.com/india-in-data/india-states-2019/master/india_states.geojson";

async function main() {
  console.log("Fetching GeoJSON from:", geoUrl);
  try {
    const res = await fetch(geoUrl);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json();
    console.log("GeoJSON successfully fetched!");
    console.log("Keys:", Object.keys(data));
    console.log("Feature count:", data.features?.length);
    if (data.features?.length > 0) {
      console.log("First feature property keys:", Object.keys(data.features[0].properties || {}));
      console.log("First feature property sample:", data.features[0].properties);
    }
    
    // Save to local file
    const destDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    const destPath = path.join(destDir, "india_states.json");
    fs.writeFileSync(destPath, JSON.stringify(data, null, 2));
    console.log("Successfully saved to:", destPath);
    console.log("File size (MB):", (fs.statSync(destPath).size / (1024 * 1024)).toFixed(2));
  } catch (err) {
    console.error("Error fetching/saving map GeoJSON:", err);
  }
}

main();
