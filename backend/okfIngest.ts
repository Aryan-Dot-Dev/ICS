/**
 * OKF ingestion — discovers OKF Markdown objects, parses them and produces a
 * deterministic, idempotent OkfKnowledgeBase.
 *
 * Idempotence: ingestion is a pure function of the OKF files; the derived index
 * is rebuilt from scratch on every run (no accumulation/duplication). Running
 * it twice yields byte-identical derived JSON.
 */

import path from "node:path";
import type { NormalizedScheme, OkfKnowledgeBase } from "../src/lib/schemeTypes";
import {
  parseApplicationObject,
  parseBenefitsObject,
  parseDocumentsObject,
  parseEligibilityObject,
  parseExclusionsObject,
  parseSchemeObject,
} from "./okfParser";

export interface IngestResult {
  knowledgeBase: OkfKnowledgeBase;
  stats: {
    schemeDirs: number;
    schemesIngested: number;
    warnings: string[];
  };
}

/** Read a file as UTF-8 text. Extracted for testability. */
async function readTextFile(filePath: string): Promise<string> {
  return await Bun.file(filePath).text();
}

async function listSchemeDirs(schemesDir: string): Promise<string[]> {
  const glob = new Bun.Glob("*/scheme.md");
  const found = await Array.fromAsync(glob.scan({ cwd: schemesDir, onlyFiles: true }));
  return found
    .map((rel) => path.dirname(rel))
    .sort();
}

/**
 * Ingest the OKF bundle at `bundleDir` (absolute path).
 * Deterministic: scheme directories are visited in sorted order; all object
 * ordering is derived from the files themselves.
 */
export async function ingestOkfBundle(bundleDir: string): Promise<IngestResult> {
  const warnings: string[] = [];
  const schemesDir = path.join(bundleDir, "schemes");
  const dirs = await listSchemeDirs(schemesDir);

  const schemes: NormalizedScheme[] = [];

  for (const dir of dirs) {
    const abs = (f: string) => path.join(schemesDir, dir, f);
    try {
      const schemeRaw = await readTextFile(abs("scheme.md"));
      const { data: scheme, sources } = parseSchemeObject(schemeRaw, `govt-schemes-okf/schemes/${dir}/scheme.md`);

      // Eligibility
      try {
        const eligRaw = await readTextFile(abs("eligibility.md"));
        const { data: rules } = parseEligibilityObject(eligRaw, abs("eligibility.md"));
        scheme.eligibilityRules = rules;
      } catch (err) {
        warnings.push(`[${dir}] eligibility.md: ${err instanceof Error ? err.message : String(err)}`);
      }

      // Exclusions
      try {
        const exclRaw = await readTextFile(abs("exclusions.md"));
        const { data: exclusions } = parseExclusionsObject(exclRaw, abs("exclusions.md"));
        scheme.exclusions = exclusions;
      } catch (err) {
        warnings.push(`[${dir}] exclusions.md: ${err instanceof Error ? err.message : String(err)}`);
      }

      // Benefits
      try {
        const benRaw = await readTextFile(abs("benefits.md"));
        const { data: benefits, sources: benSources } = parseBenefitsObject(benRaw, abs("benefits.md"));
        scheme.benefits = benefits;
        for (const s of benSources) {
          if (!sources.some((x) => x.id === s.id && x.resource === s.resource)) sources.push(s);
        }
        // Re-pick primary source with the merged list
        const merged = pickPrimarySource(sources);
        if (merged) {
          scheme.primarySourceUrl = merged.url;
          scheme.primarySourceTitle = merged.title;
        }
      } catch (err) {
        warnings.push(`[${dir}] benefits.md: ${err instanceof Error ? err.message : String(err)}`);
      }

      // Documents
      try {
        const docRaw = await readTextFile(abs("documents.md"));
        const { data: documents } = parseDocumentsObject(docRaw, abs("documents.md"));
        scheme.documents = documents;
      } catch (err) {
        warnings.push(`[${dir}] documents.md: ${err instanceof Error ? err.message : String(err)}`);
      }

      // Application
      try {
        const appRaw = await readTextFile(abs("application.md"));
        const { data: application } = parseApplicationObject(appRaw, abs("application.md"));
        scheme.application = application;
        // Prefer a live application info portal as primary official link when present
        const portal = application.info_portal ?? application.facilitation_portal;
        if (typeof portal === "string" && /^https?:\/\//.test(portal)) {
          scheme.primarySourceUrl = portal;
          scheme.primarySourceTitle = "Official scheme portal";
        }
      } catch (err) {
        warnings.push(`[${dir}] application.md: ${err instanceof Error ? err.message : String(err)}`);
      }

      schemes.push(scheme);
    } catch (err) {
      warnings.push(`[${dir}] scheme.md failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  schemes.sort((a, b) => a.schemeId.localeCompare(b.schemeId));

  // Bundle metadata from index.md
  let okfVersion = "0.2";
  let bundleVersion = "";
  let generatedAt: string | undefined;
  let status: string | undefined;
  try {
    const indexRaw = await readTextFile(path.join(bundleDir, "index.md"));
    const fmMatch = /^---\r?\n([\s\S]*?)\r?\n---/.exec(indexRaw);
    if (fmMatch && fmMatch[1] !== undefined) {
      const fm = Bun.YAML.parse(fmMatch[1]) as Record<string, any>;
      if (typeof fm.okf_version === "string") okfVersion = fm.okf_version;
      if (typeof fm.bundle_version === "string") bundleVersion = fm.bundle_version;
      if (fm.generated && typeof fm.generated.at === "string") generatedAt = fm.generated.at;
      if (typeof fm.status === "string") status = fm.status;
    }
  } catch (err) {
    warnings.push(`index.md: ${err instanceof Error ? err.message : String(err)}`);
  }

  const byId = new Map<string, NormalizedScheme>();
  for (const s of schemes) byId.set(s.schemeId, s);

  return {
    knowledgeBase: {
      okfVersion,
      bundleVersion,
      generatedAt,
      status,
      schemes,
      byId,
    },
    stats: {
      schemeDirs: dirs.length,
      schemesIngested: schemes.length,
      warnings,
    },
  };
}

/** Local copy of the source-picker used when merging benefit sources. */
function pickPrimarySource(sources: { id: string; resource: string; title: string }[]): { url: string; title: string } | undefined {
  const OFFICIAL_DOMAINS = ["gov.in", "nic.in", "india.gov.in"];
  const isOfficial = (url: string) => {
    try {
      const host = new URL(url).hostname.toLowerCase();
      return OFFICIAL_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));
    } catch {
      return false;
    }
  };
  const withUrls = sources.filter((s) => /^https?:\/\//.test(s.resource));
  if (withUrls.length === 0) return undefined;
  const official = withUrls.filter((s) => isOfficial(s.resource));
  const pool = official.length > 0 ? official : withUrls;
  const portal = pool.find((s) => !/\.pdf(\?|$)/i.test(s.resource));
  const chosen = portal ?? pool[0];
  if (!chosen) return undefined;
  return { url: chosen.resource, title: chosen.title };
}

