/**
 * OKF v0.2 parser — turns the Government-Scheme OKF Markdown objects into
 * normalized scheme objects.
 *
 * Design constraints:
 * - deterministic: identical inputs always produce identical output
 * - no mutation of the OKF source files (read-only ingestion)
 * - prose is the explainability layer; YAML blocks carry the machine layer
 * - `sources` ids (S1, S2, ...) are scoped per file; we keep each object's
 *   own sources array and never rewrite ids
 * - "## Historical (superseded)" sections are excluded from the machine layer
 */

import type {
  NormalizedScheme,
  OkfBenefit,
  OkfDocument,
  OkfExclusion,
  OkfSource,
  RuleElement,
  RuleGroup,
} from "./schemeTypes";

// ---------------------------------------------------------------------------
// Minimal helpers (deterministic frontmatter + fenced-YAML extraction)
// ---------------------------------------------------------------------------

/**
 * Quote plain YAML scalar values that strict YAML parsers reject:
 * - values containing ": " or ending with ":" (ambiguous mapping syntax)
 * - values starting with an unmatched quote character (YAML requires fully
 *   quoted scalars to start AND end with the quote)
 * Also inserts the mandatory space after a `key:` written without one
 * (e.g. `author:vikaspedia`), which strict YAML treats as a malformed scalar.
 *
 * All rewrites are semantics-preserving, deterministic and never touch the
 * source files. Block scalars (| and >) are left untouched.
 */
function quoteYamlValue(value: string): string {
  const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `"${escaped}"`;
}

function isWrappedIn(value: string, q: '"' | "'"): boolean {
  return value.length >= 2 && value.startsWith(q) && value.endsWith(q);
}

function valueNeedsNormalization(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed === "") return false;
  if (trimmed.startsWith('"') && !isWrappedIn(trimmed, '"')) return true;
  if (trimmed.startsWith("'") && !isWrappedIn(trimmed, "'")) return true;
  if ((/:\s/.test(trimmed) || trimmed.endsWith(":")) && !isWrappedIn(trimmed, '"') && !isWrappedIn(trimmed, "'")) {
    return true;
  }
  return false;
}

function normalizeYamlScalarLines(yaml: string): string {
  const lines = yaml.split(/\r?\n/);
  const out: string[] = [];
  let blockIndent: number | null = null;
  for (const line of lines) {
    if (blockIndent !== null) {
      const indent = line.length - line.trimStart().length;
      if (line.trim() === "" || indent > blockIndent) {
        out.push(line);
        continue;
      }
      blockIndent = null;
    }
    // Fix `key:value` missing the mandatory space after the colon
    const spaced = /^(\s*(?:-\s+)?[A-Za-z0-9_.\-]+):(?=\S)(?!\/\/)(.*)$/.exec(line);
    if (spaced) {
      out.push(`${spaced[1]}: ${spaced[2]}`);
      continue;
    }
    const m = /^(\s*(?:-\s+)?[A-Za-z0-9_.\-]+:)(\s+)(.*)$/.exec(line);
    if (m && m[3] !== undefined) {
      const value = m[3];
      if (/^[|>][+-]?\s*$/.test(value)) {
        blockIndent = line.length - line.trimStart().length;
        out.push(line);
        continue;
      }
      if (valueNeedsNormalization(value)) {
        out.push(`${m[1]}${m[2]}${quoteYamlValue(value)}`);
        continue;
      }
    }
    out.push(line);
  }
  return out.join("\n");
}

/** Parse YAML frontmatter of a Markdown file. Returns null when absent. */
function parseFrontmatter(raw: string): Record<string, any> | null {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/.exec(raw);
  if (!match || match[1] === undefined) return null;
  try {
    return Bun.YAML.parse(normalizeYamlScalarLines(match[1])) as Record<string, any>;
  } catch (err) {
    throw new Error(`Failed to parse YAML frontmatter: ${err instanceof Error ? err.message : String(err)}`);
  }
}

/** Parse the first fenced ```yaml ... ``` block whose content starts with a given top-level key. */
function parseFirstYamlBlock(raw: string, rootKey: string): any | null {
  const fence = /```yaml\r?\n([\s\S]*?)```/g;
  let m: RegExpExecArray | null;
  while ((m = fence.exec(raw)) !== null) {
    const body = m[1] ?? "";
    if (!new RegExp(`^${rootKey}\\s*:`, "m").test(body)) continue;
    try {
      const parsed = Bun.YAML.parse(normalizeYamlScalarLines(body)) as Record<string, any>;
      if (parsed && rootKey in parsed) return parsed;
    } catch (err) {
      throw new Error(`Failed to parse fenced YAML block "${rootKey}": ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  return null;
}

/** Split markdown into top-level (## ) sections; excludes "Historical (superseded)". */
function splitSections(raw: string): Map<string, string> {
  const sections = new Map<string, string>();
  // Remove frontmatter before sectioning
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, "");
  // Drop superseded history — the engine must ignore it
  const withoutHistorical = body.replace(
    /^##\s+Historical\s*\(superseded\)[\s\S]*$/im,
    ""
  );
  const heading = /^##\s+(.+?)\s*$/gm;
  let m: RegExpExecArray | null;
  const marks: { title: string; index: number; end: number }[] = [];
  while ((m = heading.exec(withoutHistorical)) !== null) {
    marks.push({ title: (m[1] ?? "").trim(), index: m.index, end: heading.lastIndex });
  }
  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    if (!mark) continue;
    const start = mark.end;
    const next = marks[i + 1];
    const stop = next ? next.index : withoutHistorical.length;
    sections.set(mark.title, withoutHistorical.slice(start, stop).trim());
  }
  return sections;
}

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string");
}

function firstVerifiedAt(verified: unknown): string | undefined {
  if (!Array.isArray(verified) || verified.length === 0) return undefined;
  const first: unknown = verified[0];
  if (first && typeof first === "object" && "at" in first) {
    const at = (first as { at: unknown }).at;
    if (typeof at === "string") return at;
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Source URL selection — official Government of India domains take precedence
// ---------------------------------------------------------------------------

const OFFICIAL_DOMAINS = [
  "gov.in",
  "nic.in",
  "india.gov.in",
];

function isOfficialUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return OFFICIAL_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));
  } catch {
    return false;
  }
}

/**
 * Choose the best "official source" link for a scheme.
 * Preference: gov.in/nic.in portals > gov facilitation portals (jansamarth,
 * umang) > anything else. Deterministic ordering otherwise (by source id).
 */
function pickPrimarySource(sources: OkfSource[]): { url: string; title: string } | undefined {
  const withUrls = sources.filter((s) => typeof s.resource === "string" && /^https?:\/\//.test(s.resource));
  if (withUrls.length === 0) return undefined;

  const official = withUrls.filter((s) => isOfficialUrl(s.resource));
  const pool = official.length > 0 ? official : withUrls;
  // Prefer portals that accept applications over PDFs/documents
  const portal = pool.find((s) => !/\.pdf(\?|$)/i.test(s.resource));
  const chosen = portal ?? pool[0];
  if (!chosen) return undefined;
  return { url: chosen.resource, title: chosen.title };
}

// ---------------------------------------------------------------------------
// Object parsers
// ---------------------------------------------------------------------------

interface ParsedObject<T> {
  data: T;
  sources: OkfSource[];
}

function parseSources(raw: string, frontmatter: Record<string, any>): OkfSource[] {
  const fmSources = Array.isArray(frontmatter.sources) ? frontmatter.sources : [];
  const sources: OkfSource[] = fmSources
    .filter((s: any) => s && typeof s.id === "string")
    .map((s: any) => ({
      id: s.id,
      resource: typeof s.resource === "string" ? s.resource : "",
      resourceUrl: typeof s.resource === "string" ? s.resource : undefined,
      title: typeof s.title === "string" ? s.title : "",
      author: typeof s.author === "string" ? s.author : undefined,
      last_modified: typeof s.last_modified === "string" ? s.last_modified : undefined,
    }));
  void raw; // body-level sources are not used by this bundle
  return sources;
}

/**
 * Convert a rules YAML node into a RuleGroup, normalizing single rules to groups.
 *
 * Handles the bundle's named-component convention (e.g. NSAP's
 * `ignoaps:` / `ignwps:` / ... / `common:` under eligibility_rules): each named
 * component is an alternative branch (`any`), except `common` which applies to
 * every applicant (`all`).
 */
function toRuleGroup(node: any): RuleGroup {
  if (!node) return {};
  // A bare array under "all"-semantics
  if (Array.isArray(node)) return { all: node.map(toRuleElement) };

  const group: RuleGroup = {};
  if (node.all) group.all = (Array.isArray(node.all) ? node.all : [node.all]).map(toRuleElement);
  if (node.any) group.any = (Array.isArray(node.any) ? node.any : [node.any]).map(toRuleElement);
  if (node.not) group.not = (Array.isArray(node.not) ? node.not : [node.not]).map(toRuleElement);

  if (group.all || group.any || group.not) return group;

  // A single condition object directly under eligibility_rules
  if (node.rule_id) {
    return { all: [toRuleElement(node)] };
  }

  // Named-component map: each key holds a group or an array of rules.
  const branchKeys = Object.keys(node).filter((k) => node[k] != null);
  if (branchKeys.length === 0) return {};

  const commonAll: RuleElement[] = [];
  const branches: RuleElement[] = [];
  for (const key of branchKeys) {
    const sub = toRuleGroup(node[key]);
    const subRules = [...(sub.all ?? []), ...(sub.any ?? []), ...(sub.not ?? [])];
    if (subRules.length === 0) continue;
    if (key === "common") {
      commonAll.push(...subRules);
    } else {
      branches.push({ all: subRules });
    }
  }
  const merged: RuleGroup = {};
  if (commonAll.length > 0) merged.all = commonAll;
  if (branches.length > 0) merged.any = branches;
  return merged;
}

function toRuleElement(node: any): RuleElement {
  if (node && typeof node === "object" && !Array.isArray(node)) {
    if ("all" in node || "any" in node || "not" in node) return toRuleGroup(node);
    return node as RuleElement;
  }
  return node as RuleElement;
}

export function parseSchemeObject(raw: string, filePath: string): ParsedObject<NormalizedScheme> {
  const fm = parseFrontmatter(raw);
  if (!fm) throw new Error(`Missing frontmatter in ${filePath}`);
  const sections = splitSections(raw);

  const description = typeof fm.description === "string" ? fm.description : "";
  const discoverySection = sections.get("Discovery metadata") ?? "";
  const discoveryParsed = discoverySection ? parseFirstYamlBlock(discoverySection, "discovery") : null;

  const sources = parseSources(raw, fm);
  const primary = pickPrimarySource(sources);

  const scheme: NormalizedScheme = {
    schemeId: typeof fm.scheme_id === "string" ? fm.scheme_id : (fm.title as string),
    slug: filePath.split(/[\\/]/).slice(-2, -1)[0] ?? "",
    schemeName: typeof fm.title === "string" ? fm.title : "",
    officialName: typeof fm.official_name === "string" ? fm.official_name : undefined,
    description,
    objective: extractSectionProse(sections.get("Objective")),
    ministry: typeof fm.ministry === "string" ? fm.ministry : undefined,
    governmentLevel: typeof fm.government_level === "string" ? fm.government_level : undefined,
    categories: asStringArray(fm.categories),
    benefitTypes: asStringArray(fm.benefit_types),
    targetGroups: asStringArray(fm.target_groups),
    geographies: asStringArray(fm.geographies),
    applicantTypes: asStringArray(fm.applicant_types),
    discovery: {
      user_goals: asStringArray(discoveryParsed?.discovery?.user_goals),
      keywords: asStringArray(discoveryParsed?.discovery?.keywords),
      semantic_topics: asStringArray(discoveryParsed?.discovery?.semantic_topics),
    },
    eligibilityRules: {}, // populated by parseEligibilityObject
    exclusions: [],
    benefits: [],
    documents: [],
    application: {},
    sources,
    primarySourceUrl: primary?.url,
    primarySourceTitle: primary?.title,
    status: typeof fm.status === "string" ? fm.status : "unknown",
    staleAfter: typeof fm.stale_after === "string" ? fm.stale_after : undefined,
    verifiedAt: firstVerifiedAt(fm.verified),
    generatedAt:
      fm.generated && typeof fm.generated.at === "string" ? fm.generated.at : undefined,
    eligibilityVersion: typeof fm.eligibility_version === "string" ? fm.eligibility_version : undefined,
    effectiveFrom: fm.effective_from != null ? String(fm.effective_from) : undefined,
    effectiveUntil: fm.effective_until != null ? String(fm.effective_until) : null,
    okfVersion: typeof fm.okf_version === "string" ? fm.okf_version : undefined,
    sourceFile: filePath,
  };

  return { data: scheme, sources };
}

/** Pull short prose (first non-heading, non-empty lines) from a section. */
function extractSectionProse(section: string | undefined): string | undefined {
  if (!section) return undefined;
  const lines = section
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith("#") && !l.startsWith("```"));
  if (lines.length === 0) return undefined;
  return lines.join(" ").slice(0, 600);
}

export function parseEligibilityObject(raw: string, filePath: string): ParsedObject<RuleGroup> {
  const fm = parseFrontmatter(raw);
  if (!fm) throw new Error(`Missing frontmatter in ${filePath}`);
  const block = parseFirstYamlBlock(raw, "eligibility_rules");
  return { data: block ? toRuleGroup(block.eligibility_rules) : {}, sources: parseSources(raw, fm) };
}

export function parseBenefitsObject(raw: string, filePath: string): ParsedObject<OkfBenefit[]> {
  const fm = parseFrontmatter(raw);
  if (!fm) throw new Error(`Missing frontmatter in ${filePath}`);
  const block = parseFirstYamlBlock(raw, "benefits");
  const benefits = Array.isArray(block?.benefits) ? (block.benefits as OkfBenefit[]) : [];
  return { data: benefits, sources: parseSources(raw, fm) };
}

export function parseDocumentsObject(raw: string, filePath: string): ParsedObject<OkfDocument[]> {
  const fm = parseFrontmatter(raw);
  if (!fm) throw new Error(`Missing frontmatter in ${filePath}`);
  const block = parseFirstYamlBlock(raw, "documents");
  const documents = Array.isArray(block?.documents) ? (block.documents as OkfDocument[]) : [];
  return { data: documents.filter((d) => d && typeof d.name === "string"), sources: parseSources(raw, fm) };
}

export function parseApplicationObject(raw: string, filePath: string): ParsedObject<NormalizedScheme["application"]> {
  const fm = parseFrontmatter(raw);
  if (!fm) throw new Error(`Missing frontmatter in ${filePath}`);
  const block = parseFirstYamlBlock(raw, "application");
  const app = (block?.application ?? {}) as NormalizedScheme["application"];
  return { data: app, sources: parseSources(raw, fm) };
}

export function parseExclusionsObject(raw: string, filePath: string): ParsedObject<OkfExclusion[]> {
  const fm = parseFrontmatter(raw);
  if (!fm) throw new Error(`Missing frontmatter in ${filePath}`);
  const block = parseFirstYamlBlock(raw, "exclusions");
  const exclusions = Array.isArray(block?.exclusions) ? (block.exclusions as OkfExclusion[]) : [];
  return { data: exclusions, sources: parseSources(raw, fm) };
}
