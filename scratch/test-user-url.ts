async function testUserUrl() {
  const url = "https://imgh.in/host/5qzeg";
  console.log("Fetching user URL:", url);
  const res = await fetch(url);
  console.log("Status:", res.status);
  console.log("Headers:");
  res.headers.forEach((value, key) => {
    console.log(`  ${key}: ${value}`);
  });
  
  const contentType = res.headers.get("content-type") || "";
  console.log("Content Type:", contentType);

  const text = await res.text();
  console.log("Text snippet (first 500 chars):", text.slice(0, 500));
}

testUserUrl().catch(console.error);
