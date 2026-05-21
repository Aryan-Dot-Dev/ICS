import fs from "fs";
import path from "path";

const srcPath = path.join(process.cwd(), "src", "data", "india_states_compressed.json");

function main() {
  const geojson = JSON.parse(fs.readFileSync(srcPath, "utf-8"));
  
  let minLon = Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  
  geojson.features.forEach((feature: any) => {
    const coords = feature.geometry.coordinates;
    // MultiPolygon structure: [polygon][ring][point]
    coords.forEach((poly: any) => {
      poly.forEach((ring: any) => {
        ring.forEach((pt: any) => {
          const [lon, lat] = pt;
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
        });
      });
    });
  });
  
  console.log("India Boundary Coordinates:");
  console.log("Min Longitude (West):", minLon);
  console.log("Max Longitude (East):", maxLon);
  console.log("Min Latitude (South):", minLat);
  console.log("Max Latitude (North):", maxLat);
}

main();
