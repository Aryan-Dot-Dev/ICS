---
type: Documentation
title: README — Indian Government Schemes OKF v0.2 Bundle
description: Structure, extension contract, semantics and maintenance rules for the knowledge bundle.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
---

# README — Indian Government Schemes OKF v0.2 Bundle

## 1. Scope

Machine-readable knowledge for **604** Government of India schemes — **20
curated** flagship schemes plus **584 imported from the runs batch** (rows
1–600 of `D:\final-ai-server\runs`; rows whose scheme is already curated
map to the curated object instead of being duplicated) — consumed by an
AI scheme-recommendation engine for: understanding, beneficiary
identification, potential-qualification checks, missing-information
detection, benefit and document lookup, application guidance,
related-scheme discovery, retrieval, cited explanation and staleness
detection.

## 2. Relationship to OKF v0.2

This bundle follows OKF v0.2's model: knowledge objects are human-readable
Markdown files with YAML frontmatter (`type`, `title`, `description`), trust /
provenance fields (`generated`, `verified`, `sources`, `status`,
`stale_after`), and cross-references as relative Markdown links.

**The following are domain-specific extensions defined by this Government
Scheme Profile — they are NOT part of the universal OKF schema:**
`scheme_id`, `official_name`, `government_level`, `ministry`, `categories`,
`benefit_types`, `target_groups`, `geographies`, `applicant_types`,
`eligibility_version`, `effective_from`, `effective_until`,
`eligibility_rules`, `benefits`, `documents`, `exclusions`, `discovery`,
`rule_id`, `field`, `operator`, `value`, `type: hard|soft|…`,
`confidence`, `missing_fields`. Batch-imported objects (§12) additionally
use `runs_source`, `source_data_last_updated`, `is_maximum`, `detail` and
`note`.

## 3. Directory structure

```
govt-schemes-okf/
├── index.md              # OKF root, links to all objects
├── README.md             # this file
├── schemes/<id>/         # curated: 20 schemes × {scheme, eligibility, benefits,
│                         #   documents, application, exclusions}.md
├── schemes/row-<n>-<slug>/  # 584 runs-batch imports, same six objects,
│                         #   status: draft (see §12)
├── concepts/             # reusable beneficiary concepts
├── rules/                # reusable rule/field concepts
├── taxonomy/             # controlled vocabularies
└── tools/                # validate.py, generate_from_runs.py
```

## 4. Scheme files

Each scheme directory holds six objects:

| File | Purpose | Key machine fields |
|---|---|---|
| `scheme.md` | Overview, objective, features, index of the others | `scheme_id`, `ministry`, `categories`, `benefit_types`, `target_groups`, `discovery`, `eligibility_version`, `effective_from/until` |
| `eligibility.md` | Dimension-by-dimension eligibility + deterministic rules | `eligibility_rules.all/any/not`, `status: needs_information`, `missing_fields` |
| `benefits.md` | Benefit objects with amounts, frequency, conditions | `benefits[]` with `amount.value/currency/frequency` |
| `documents.md` | Required / conditional / potentially-requested documents | `documents[]` with `required: always\|conditional\|potentially_requested\|not_verified` |
| `application.md` | Channels, portals, process steps, deadlines | `application.channels[]`, `application.steps[]` |
| `exclusions.md` | Explicit disqualifiers as structured objects | `exclusions[]` with `effect: ineligible` |

## 5. Rule object contract

```yaml
- rule_id: AGE-001          # unique within scheme
  field: applicant.age      # dot-path; semantics in ../rules/*.md
  operator: greater_than_or_equal   # see operator vocabulary below
  value: 18
  type: hard                # hard | soft | informational | conditional | unknown
  source: S1                # id from frontmatter sources
  confidence: high          # high | medium | low
```

Operator vocabulary: `equals`, `not_equals`, `in`, `not_in`, `greater_than`,
`greater_than_or_equal`, `less_than`, `less_than_or_equal`, `between`,
`is_true`, `is_false`, `exists`.

Grouping: `all` (AND), `any` (OR), `not` (negation), nestable. Unknown facts
must never be inferred: emit `status: needs_information` + `missing_fields`.

## 6. Hard vs soft conditions

- `hard` — failure ⇒ engine must NOT label the applicant eligible.
- `soft` — preference/priority; does not block eligibility.
- `informational` — context only (e.g., delivery mechanism).
- `conditional` — applies only when a named condition holds.
- `unknown` — cannot be verified from official sources; must be flagged.

## 7. Eligibility vs relevance vs recommendation

`eligibility_rules` and `exclusions` decide **eligibility**. `discovery`
(user_goals, keywords, semantic_topics) is **retrieval-only metadata** and is
never consulted for eligibility. Recommendation = intersection computed by
the engine.

## 8. Provenance & freshness

**Scope convention:** objects under `schemes/` are FACT objects and must
carry full provenance below. Objects in `concepts/`, `rules/`,
`taxonomy/`, plus `index.md` and `README.md`, are STRUCTURAL objects
(controlled vocabularies and definitions whose source is this bundle
itself); they carry base frontmatter only. The validator
([tools/validate.py](tools/validate.py)) enforces this split.
- `sources[]` — `id` (S1, S2…), `resource` (URL), `title`, `author`
  (ministry/department), `last_modified` when known. Official Government of
  India sources take precedence; non-official sources are marked `secondary`.
- `verified[]` — who verified and when.
- `generated[]` — pipeline identity and date.
- `status: stable | draft | review | stale | superseded` per object.
- `stale_after` — date after which the object needs re-verification
  (typically the next quarter for financial parameters such as interest
  rates and premiums, which the Government revises periodically).
- Conflicting official sources: record BOTH, mark `status: review`, do not
  silently choose. Unverifiable facts are written as `not_verified`, never
  guessed.

## 9. Versioning & history

Scheme frontmatter carries `eligibility_version` (e.g. `"2026-09"`) and
`effective_from` / `effective_until`. Superseded material lives in a
`## Historical (superseded)` section at the bottom of an object and must be
ignored by the engine; only the currently effective rule set applies.

## 10. Validation

Before release, run the checks in the Validation Report (index of schemes,
frontmatter completeness, provenance/verification/source coverage, broken
links, unverified claims, conflicts). Flags must be visible to maintainers,
never silently resolved.

## 11. Maintenance

Quarterly review cycle. Interest rates, premiums, pension amounts and
gas-subsidy rates change more often than scheme structure — those objects
carry the shortest `stale_after`. Every substantive change updates the
object's `generated.at` and bumps `eligibility_version` where rules change.

## 12. Batch imports (runs)

Objects under `schemes/row-<n>-<slug>/` are generated by
[tools/generate_from_runs.py](tools/generate_from_runs.py) from
`D:\final-ai-server\runs\row-<n>-<slug>\ai_summary.json` (plus `report.md`
eligibility/benefit tables when present). Contract differences from the
curated objects:

- `status: draft` — machine import awaiting maintainer review; content is
  quoted verbatim from the source import and has **not** been re-verified
  against the live portals.
- `generated.by: process:runs-okf-generator`, `verified.by:
  process:runs-import-check` (field presence and citations re-checked
  against the source JSON only), and a `runs_source:` frontmatter field
  recording the origin row.
- `scheme_id: ROW-<n>` mirrors the source row number; the directory name
  mirrors the source directory name, for traceability.
- Rule/exclusion objects carry a `detail:` field quoting the exact source
  sentence the rule was derived from; anything absent from the source data
  is written as `not_verified`, never inferred. Empty source fields (no
  eligibility text, no document list, no sources) are emitted as empty
  structures with an explicit `not_verified` note — absence of a recorded
  exclusion is never evidence that none exists.
- Rows that duplicate a curated scheme (8, 51, 54, 88, 96, 97, 98, 99, 143,
  144, 232, 237, 335, 390, 437, 512) are skipped and mapped in
  [index.md](index.md). Duplicates *within* the imported batch are currently
  kept as separate objects (distinct `ROW-<n>` ids) — see the maintenance
  backlog.

Re-run the generator after refreshing the runs data, then
`python tools/validate.py`.
