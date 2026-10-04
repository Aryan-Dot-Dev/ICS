---
type: "Government Scheme Exclusions"
title: "Drone Didi Scheme for Women SHGs — Exclusions"
description: "Structured disqualifiers for ROW-584."
scheme_id: "ROW-584"
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
    resource: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/may/doc2026525875901.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2023/jun/doc2023628218401.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc2025925646201.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.pib.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://accreditation.pib.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.pib.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Drone Didi Scheme for Women SHGs — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Applications received without required documents, after due date, or directly from candidates are liable to be rejected"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Freelance journalists must not be associated with any news syndicate to be eligible"
    effect: ineligible
    source: S1
    confidence: medium
```