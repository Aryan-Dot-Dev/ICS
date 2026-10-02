import tailwind from "bun-plugin-tailwind";
import { cp, copyFile, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outdir = path.join(root, "dist");
await rm(outdir, { recursive: true, force: true });

const backendUrl = process.env.VITE_BACKEND_URL;
if (!backendUrl || !/^https?:\/\//.test(backendUrl)) {
  throw new Error("VITE_BACKEND_URL is required for production builds (for example, https://api.example.com).");
}

const result = await Bun.build({
  entrypoints: [...new Bun.Glob("src/**/*.html").scanSync()],
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

if (!result.success) throw new Error("Frontend build failed.");
for (const output of result.outputs) {
  console.log(`${path.relative(root, output.path)} ${(output.size / 1024).toFixed(1)} KB`);
}

await Promise.all([
  copyFile(path.join(root, "src/robots.txt"), path.join(outdir, "robots.txt")),
  copyFile(path.join(root, "src/sitemap.xml"), path.join(outdir, "sitemap.xml")),
  copyFile(path.join(root, "src/assets/favicons/favicon.ico"), path.join(outdir, "favicon.ico")),
  cp(path.join(root, "src/assets"), path.join(outdir, "assets"), { recursive: true }),
]);

console.log("Frontend built in frontend/dist");
