/**
 * Transitional single-container build.
 *
 * The deployable frontend package owns the real build. This wrapper keeps the
 * legacy root Dockerfile and `bun run build` workflow working by copying the
 * package output to the root `dist/` directory consumed by the demo server.
 */
import { cp, rm } from "node:fs/promises";
import path from "node:path";

const frontendDir = path.join(import.meta.dir, "frontend");
const demoDist = path.join(import.meta.dir, "dist");
process.chdir(frontendDir);
await import("./frontend/build.ts");
await rm(demoDist, { recursive: true, force: true });
await cp(path.join(frontendDir, "dist"), demoDist, { recursive: true });
console.log("Copied frontend/dist to root dist for the single-container demo.");
