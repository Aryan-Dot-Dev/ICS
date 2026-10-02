---
type: Government Scheme Knowledge Base
title: Indian Government Schemes
description: Machine-readable knowledge base of 20 Indian government schemes for an AI recommendation engine, modelled on Google Open Knowledge Format (OKF) v0.2 with a Government Scheme Profile extension.
okf_version: "0.2"
bundle_version: "2026.09"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
review_cycle: quarterly
---

# Indian Government Schemes — OKF v0.2 Knowledge Bundle

A trusted, machine-readable knowledge layer that sits underneath an AI
government-scheme recommendation engine. It follows **Google Open Knowledge
Format (OKF) v0.2** conventions (knowledge objects with YAML frontmatter,
Markdown body, explicit provenance and freshness) and adds a **Government
Scheme Profile** (eligibility rules, benefits, documents, exclusions,
discovery metadata) via OKF's extensibility model. See
[README.md](README.md) for the extension contract.

## Core distinction used throughout

- **ELIGIBILITY** — can this person potentially receive the scheme?
  Determined by [eligibility.md](README.md#4-scheme-files) rule objects.
- **RELEVANCE** — is this scheme relevant to what the person wants?
  Determined by `discovery:` metadata. **Never used for eligibility.**
- **RECOMMENDATION** — among schemes the user may qualify for, which match
  their stated requirement. Computed by the engine, not stored here.

## Schemes (20)

| # | Scheme | scheme_id | Knowledge object |
|---|--------|-----------|------------------|
| 1 | PM-KISAN | PM-KISAN | [scheme.md](schemes/pm-kisan/scheme.md) |
| 2 | Pradhan Mantri Fasal Bima Yojana | PMFBY | [scheme.md](schemes/pmfby/scheme.md) |
| 3 | Pradhan Mantri Mudra Yojana | PMMY | [scheme.md](schemes/pmmy/scheme.md) |
| 4 | Stand-Up India | SUI | [scheme.md](schemes/stand-up-india/scheme.md) |
| 5 | Prime Minister's Employment Generation Programme | PMEGP | [scheme.md](schemes/pmegp/scheme.md) |
| 6 | Pradhan Mantri Awas Yojana – Urban 2.0 | PMAY-U | [scheme.md](schemes/pmay-urban/scheme.md) |
| 7 | Pradhan Mantri Awas Yojana – Gramin | PMAY-G | [scheme.md](schemes/pmay-gramin/scheme.md) |
| 8 | Ayushman Bharat PM-JAY | PM-JAY | [scheme.md](schemes/pm-jay/scheme.md) |
| 9 | Pradhan Mantri Ujjwala Yojana | PMUY | [scheme.md](schemes/pmuy/scheme.md) |
| 10 | Sukanya Samriddhi Yojana | SSY | [scheme.md](schemes/ssy/scheme.md) |
| 11 | Atal Pension Yojana | APY | [scheme.md](schemes/apy/scheme.md) |
| 12 | Pradhan Mantri Suraksha Bima Yojana | PMSBY | [scheme.md](schemes/pmsby/scheme.md) |
| 13 | Pradhan Mantri Jeevan Jyoti Bima Yojana | PMJJBY | [scheme.md](schemes/pmjjby/scheme.md) |
| 14 | National Scholarship Portal (portal) / PM-USP CSSS (flagship central scheme) | NSP-CSSS | [scheme.md](schemes/nsp/scheme.md) |
| 15 | Post-Matric Scholarship for SC Students | PMS-SC | [scheme.md](schemes/pms-sc/scheme.md) |
| 16 | National Means-cum-Merit Scholarship Scheme | NMMSS | [scheme.md](schemes/nmmss/scheme.md) |
| 17 | PM Vishwakarma | PM-VISHWAKARMA | [scheme.md](schemes/pm-vishwakarma/scheme.md) |
| 18 | PM SVANidhi | PM-SVANIDHI | [scheme.md](schemes/pm-svanidhi/scheme.md) |
| 19 | National Social Assistance Programme | NSAP | [scheme.md](schemes/nsap/scheme.md) |
| 20 | Pradhan Mantri Matru Vandana Yojana | PMMVY | [scheme.md](schemes/pmmvy/scheme.md) |

## Concepts

Reusable beneficiary concepts: [agriculture](concepts/agriculture.md) ·
[farmer](concepts/farmer.md) · [woman](concepts/woman.md) ·
[student](concepts/student.md) · [entrepreneur](concepts/entrepreneur.md) ·
[artisan](concepts/artisan.md) · [street-vendor](concepts/street-vendor.md) ·
[low-income-household](concepts/low-income-household.md) ·
[senior-citizen](concepts/senior-citizen.md) ·
[person-with-disability](concepts/person-with-disability.md) ·
[social-category](concepts/social-category.md) ·
[household](concepts/household.md)

## Rules (reusable rule concepts)

[age](rules/age.md) · [income](rules/income.md) · [gender](rules/gender.md) ·
[state](rules/state.md) · [occupation](rules/occupation.md) ·
[farmer-status](rules/farmer-status.md) · [landholding](rules/landholding.md) ·
[student-status](rules/student-status.md) · [business-type](rules/business-type.md)

## Taxonomy (controlled vocabularies)

[scheme-categories](taxonomy/scheme-categories.md) ·
[applicant-types](taxonomy/applicant-types.md) ·
[benefit-types](taxonomy/benefit-types.md) ·
[geographic-levels](taxonomy/geographic-levels.md)

## Machine consumption

Every knowledge object is `type`-tagged Markdown with YAML frontmatter. The
eligibility-rule blocks (`eligibility_rules:` with `rule_id / field / operator
/ value / type / source / confidence`), benefit objects and exclusion objects
are the deterministic layer; the prose is the explainability layer. Ingest
with any YAML+Markdown parser. See [README.md](README.md).
