import tailwind from "bun-plugin-tailwind";
import { rm, copyFile } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

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
    "import.meta.env.VITE_BACKEND_URL": JSON.stringify(process.env.VITE_BACKEND_URL || import.meta.env?.VITE_BACKEND_URL || ""),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

// Copy robots.txt, logo.svg and sitemap.xml to the dist directory
await copyFile(path.join(process.cwd(), "src/robots.txt"), path.join(outdir, "robots.txt"));
await copyFile(path.join(process.cwd(), "src/logo.svg"), path.join(outdir, "logo.svg"));
await copyFile(path.join(process.cwd(), "src/sitemap.xml"), path.join(outdir, "sitemap.xml"));
console.log(" Copied src/robots.txt, src/logo.svg and src/sitemap.xml to dist/");

