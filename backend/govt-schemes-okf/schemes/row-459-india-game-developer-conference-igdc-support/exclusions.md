---
type: "Government Scheme Exclusions"
title: "India Game Developer Conference (IGDC) Support — Exclusions"
description: "Structured disqualifiers for ROW-459."
scheme_id: "ROW-459"
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
    resource: "https://meity.gov.in/static/uploads/2025/06/837f9d009185a3e2061fb12ba8ef4d17.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://meity.gov.in/static/uploads/2026/05/3968b682419b74182446584b0dc301f5.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://tec.gov.in/tcrs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.meity.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# India Game Developer Conference (IGDC) Support — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Reimbursement will not be considered for control tests related to product R&D"
    effect: ineligible
    source: S1
    confidence: medium
```