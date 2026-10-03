import { ingestOkfBundle } from "../okfIngest";
import path from "node:path";

const result = await ingestOkfBundle(path.resolve(import.meta.dir, "..", "govt-schemes-okf"));
const serializable = { ...result.knowledgeBase, byId: undefined };
await Bun.write(
  new URL("../worker-data.json", import.meta.url),
  JSON.stringify(serializable),
);
console.log(`Generated worker-data.json with ${result.stats.schemesIngested} schemes.`);
