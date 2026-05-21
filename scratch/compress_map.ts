import fs from "fs";
import path from "path";

const srcPath = path.join(process.cwd(), "src", "data", "india_states.json");
const destPath = path.join(process.cwd(), "src", "data", "india_states_compressed.json");

function simplifyPolygon(coordinates: any[][], decimateFactor = 6) {
  // Keep every Nth point to reduce coordinate counts, but always keep the first and last point
  return coordinates.map(ring => {
    const simplified = [];
    for (let i = 0; i < ring.length; i++) {
      if (i === 0 || i === ring.length - 1 || i % decimateFactor === 0) {
        simplified.push(ring[i]);
      }
    }
    return simplified;
  });
}

function main() {
  console.log("Loading original GeoJSON...");
  const geojson = JSON.parse(fs.readFileSync(srcPath, "utf-8"));
  
  const stateFeaturesMap = new Map<string, any[]>();
  
  geojson.features.forEach((feature: any) => {
    const stateName = feature.properties?.ST_NM;
    if (!stateName) return;
    if (!stateFeaturesMap.has(stateName)) {
      stateFeaturesMap.set(stateName, []);
    }
    stateFeaturesMap.get(stateName)!.push(feature);
  });
  
  console.log("Unique state names:", stateFeaturesMap.size);
  console.log("List of states:", Array.from(stateFeaturesMap.keys()).sort());
  
  // Let's create a compressed feature collection
  const compressedFeatures: any[] = [];
  
  stateFeaturesMap.forEach((features, stateName) => {
    // Group all geometries for the same state into a MultiPolygon to clean up the features
    const rings: any[][][] = [];
    
    features.forEach(feature => {
      const geom = feature.geometry;
      if (!geom) return;
      
      if (geom.type === "Polygon") {
        const simplified = simplifyPolygon(geom.coordinates, 6);
        rings.push(simplified);
      } else if (geom.type === "MultiPolygon") {
        geom.coordinates.forEach((polyCoords: any[][]) => {
          const simplified = simplifyPolygon(polyCoords, 6);
          rings.push(simplified);
        });
      }
    });
    
    if (rings.length > 0) {
      compressedFeatures.push({
        type: "Feature",
        properties: {
          name: stateName
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: rings
        }
      });
    }
  });
  
  const compressedGeoJSON = {
    type: "FeatureCollection",
    features: compressedFeatures
  };
  
  fs.writeFileSync(destPath, JSON.stringify(compressedGeoJSON));
  console.log("Compressed GeoJSON successfully saved to:", destPath);
  console.log("Original Size (MB):", (fs.statSync(srcPath).size / (1024 * 1024)).toFixed(2));
  console.log("Compressed Size (MB):", (fs.statSync(destPath).size / (1024 * 1024)).toFixed(2));
  console.log("Compressed Feature Count:", compressedFeatures.length);
}

main();
