import tailwind from "bun-plugin-tailwind";
import { rm, copyFile, cp } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

// Environment contract: production builds MUST pin the backend origin.
// Fails the build (not the browser) when the URL is missing.
const backendUrl = process.env.VITE_BACKEND_URL;
if (!backendUrl || !/^https?:\/\//.test(backendUrl)) {
  throw new Error(
    "VITE_BACKEND_URL is required for production builds — set it to the deployed backend origin (e.g. https://api.example.com).",
  );
}

const entrypoints = [...new Bun.Glob("src/**/*.html").scanSync()];

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [tailwind],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  splitting: true,
  format: "esm",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "import.meta.env.VITE_BACKEND_URL": JSON.stringify(backendUrl.replace(/\/+$/, "")),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

// Copy robots.txt, sitemap.xml to the dist root
await copyFile(
  path.join(process.cwd(), "src/robots.txt"),
  path.join(outdir, "robots.txt")
);
await copyFile(
  path.join(process.cwd(), "src/sitemap.xml"),
  path.join(outdir, "sitemap.xml")
);

// Copy favicon.ico to the dist root for fallback browser requests
await copyFile(
  path.join(process.cwd(), "src/assets/favicons/favicon.ico"),
  path.join(outdir, "favicon.ico")
);

// Copy the organized assets folder recursively to the dist directory
await cp(
  path.join(process.cwd(), "src/assets"),
  path.join(outdir, "assets"),
  { recursive: true }
);

console.log(" Copied static assets and assets folder recursively to dist/");


