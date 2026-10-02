/**
 * OKF ingestion CLI.
 *
 *   bun run ingest-schemes
 *
 * Parses the OKF v0.2 bundle into the normalized in-memory representation and
 * verifies ingestion determinism (two runs produce identical JSON).
 */

import path from "node:path";
import { ingestOkfBundle } from "../backend/okfIngest";
import { SchemeIndex } from "../backend/retrieval";

async function main() {
  const bundleDir = path.resolve(import.meta.dir, "..", "govt-schemes-okf");
  console.log(`Ingesting OKF bundle from ${bundleDir} ...`);

  const first = await ingestOkfBundle(bundleDir);
  console.log(`Schemes ingested: ${first.stats.schemesIngested}/${first.stats.schemeDirs}`);

  if (first.stats.warnings.length > 0) {
    console.log("Warnings:");
    for (const w of first.stats.warnings) console.log(`  - ${w}`);
  }

  // Determinism / idempotence check: re-run and compare
  const second = await ingestOkfBundle(bundleDir);
  const a = JSON.stringify(
    first.knowledgeBase.schemes.map((s) => ({ id: s.schemeId, name: s.schemeName, rules: s.eligibilityRules, ex: s.exclusions, ben: s.benefits, docs: s.documents, app: s.application, src: s.sources.length, file: s.sourceFile }))
  );
  const b = JSON.stringify(
    second.knowledgeBase.schemes.map((s) => ({ id: s.schemeId, name: s.schemeName, rules: s.eligibilityRules, ex: s.exclusions, ben: s.benefits, docs: s.documents, app: s.application, src: s.sources.length, file: s.sourceFile }))
  );
  console.log(`Idempotence check: ${a === b ? "PASS (identical output on re-run)" : "FAIL (output differs between runs)"}`);

  // Index sanity
  const index = new SchemeIndex(second.knowledgeBase);
  console.log(`Retrieval index built with ${index.size} schemes.`);

  const withRules = second.knowledgeBase.schemes.filter(
    (s) => s.eligibilityRules.all?.length || s.eligibilityRules.any?.length
  ).length;
  const withExclusions = second.knowledgeBase.schemes.filter((s) => s.exclusions.length > 0).length;
  const withSources = second.knowledgeBase.schemes.filter((s) => s.primarySourceUrl).length;
  console.log(`Schemes with machine rules: ${withRules}/${second.knowledgeBase.schemes.length}`);
  console.log(`Schemes with exclusions: ${withExclusions}/${second.knowledgeBase.schemes.length}`);
  console.log(`Schemes with official source links: ${withSources}/${second.knowledgeBase.schemes.length}`);

  const stale = second.knowledgeBase.schemes.filter((s) => {
    if (!s.staleAfter) return false;
    return new Date(s.staleAfter).getTime() < Date.now();
  });
  console.log(`Stale schemes (stale_after in the past): ${stale.length}${stale.length > 0 ? ` -> ${stale.map((s) => s.schemeId).join(", ")}` : ""}`);

  if (a !== b) process.exit(1);
}

main().catch((err) => {
  console.error("Ingestion failed:", err);
  process.exit(1);
});
