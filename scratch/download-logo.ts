async function testLogo() {
  const url = "https://imgh.in/host/5qzegn";
  console.log("Fetching logo from:", url);
  const res = await fetch(url);
  console.log("Status:", res.status);
  console.log("Headers:");
  res.headers.forEach((value, key) => {
    console.log(`  ${key}: ${value}`);
  });

  const contentType = res.headers.get("content-type") || "";
  const ext = contentType.includes("svg") ? "svg" : contentType.includes("png") ? "png" : contentType.includes("jpeg") || contentType.includes("jpg") ? "jpg" : "bin";
  
  const buffer = Buffer.from(await res.arrayBuffer());
  const fs = require("fs");
  const path = require("path");
  const outputPath = path.join(__dirname, `../src/assets/logo/downloaded_logo.${ext}`);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Downloaded logo saved to: ${outputPath} (Size: ${buffer.length} bytes)`);
}

testLogo().catch(console.error);
