---
type: "Government Scheme Exclusions"
title: "Workshed Scheme for Handloom Weavers — Exclusions"
description: "Structured disqualifiers for ROW-177."
scheme_id: "ROW-177"
okf_version: "0.2"
generated:
  by: "process:runs-okf-generator"
  at: 2026-10-02
verified:
  - by: "process:runs-import-check"
    at: 2026-10-02
    note: "field presence and citations re-checked against the source ai_summary.json; content not re-verified against the live portal"
status: draft
stale_after: 2026-12-31
sources:
  - id: S1
    resource: "https://handlooms.nic.in/assets/img/Handloom Schemes/NHDP_English Compendium_2024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://handlooms.nic.in/assets/img/Statistics/2486.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://handlooms.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Workshed Scheme for Handloom Weavers — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Land cost is excluded from GoI funding for individual and common worksheds"
    effect: ineligible
    source: S1
    confidence: medium
```