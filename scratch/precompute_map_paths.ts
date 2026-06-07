import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Read original GeoJSON
const geojsonPath = join(__dirname, "../src/data/india_states_compressed.json");
const outputPath = join(__dirname, "../src/data/india_states_paths.json");

const geojson = JSON.parse(readFileSync(geojsonPath, "utf-8"));

// Map projection math: India boundaries
const minLon = 68.187;
const maxLat = 37.074;
const centerLatRad = (21.9 * Math.PI) / 180;
const cosVal = Math.cos(centerLatRad); // ~0.9278

const project = (lon: number, lat: number) => {
  const x = 19.8 + (lon - minLon) * cosVal * 17.0;
  const y = 17.3 + (maxLat - lat) * 17.0;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
};

const generatePathData = (geometry: any): string => {
  if (!geometry) return "";
  if (geometry.type === "Polygon") {
    return geometry.coordinates
      .map((ring: number[][]) => {
        return ring
          .map((coord: number[], i: number) => {
            const p = project(coord[0]!, coord[1]!);
            return `${i === 0 ? "M" : "L"}${p}`;
          })
          .join(" ") + " Z";
      })
      .join(" ");
  } else if (geometry.type === "MultiPolygon") {
    return geometry.coordinates
      .map((polygon: number[][][]) => {
        return polygon
          .map((ring: number[][]) => {
            return ring
              .map((coord, i) => {
                const p = project(coord[0]!, coord[1]!);
                return `${i === 0 ? "M" : "L"}${p}`;
              })
              .join(" ") + " Z";
          })
          .join(" ");
      })
      .join(" ");
  }
  return "";
};

const precalculatedPaths = geojson.features.map((feature: any) => ({
  stateName: feature.properties.name,
  pathData: generatePathData(feature.geometry)
}));

writeFileSync(outputPath, JSON.stringify(precalculatedPaths, null, 2), "utf-8");
console.log(`Successfully precalculated SVG paths for ${precalculatedPaths.length} states.`);
console.log(`Saved output to: ${outputPath}`);
