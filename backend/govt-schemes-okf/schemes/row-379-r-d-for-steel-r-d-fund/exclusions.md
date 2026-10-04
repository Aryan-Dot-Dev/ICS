---
type: "Government Scheme Exclusions"
title: "R&D for Steel (R&D Fund) — Exclusions"
description: "Structured disqualifiers for ROW-379."
scheme_id: "ROW-379"
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
    resource: "https://steel.gov.in/research-development-scheme-of-ministry-of-steel"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://steel.gov.in/sites/default/files/2025-12/R%20D%20Scheme%20%28circulated%29.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://steel.gov.in/sites/default/files/2025-12/Invitation%20for%20RD%20Proposals%2021.12.2025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://research.steel.gov.in/Applicant"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://steel.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# R&D for Steel (R&D Fund) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Basic research should not be funded or should be funded in much less quantum & numbers through this scheme as there are other agencies of the Government to promote basic research like Dept."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "In case substantial unspent grants are lying with an organisation, grants in new projects should not be released."
    effect: ineligible
    source: S1
    confidence: medium
```