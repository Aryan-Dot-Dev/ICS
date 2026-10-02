import { cp, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outdir = path.join(root, "dist");
await rm(outdir, { recursive: true, force: true });

const result = await Bun.build({
  entrypoints: ["server.ts"],
  outdir,
  target: "bun",
  format: "esm",
  sourcemap: "linked",
});

if (!result.success) throw new Error("Backend build failed.");

await cp(path.join(root, "govt-schemes-okf"), path.join(outdir, "govt-schemes-okf"), {
  recursive: true,
});

for (const output of result.outputs) {
  console.log(`${path.relative(root, output.path)} ${(output.size / 1024).toFixed(1)} KB`);
}
console.log("Backend built in backend/dist");
