---
type: "Government Scheme Exclusions"
title: "Domestic Steel Procurement Preference Policy — Exclusions"
description: "Structured disqualifiers for ROW-380."
scheme_id: "ROW-380"
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
    resource: "https://steel.gov.in/policy-providing-preference-domestically"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://steel.gov.in/sites/default/files/2025-12/Citizens-Charter-2025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://steel.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Domestic Steel Procurement Preference Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Exemptions are permitted where specific steel grades are not manufactured domestically or where project demand cannot be met from domestic sources."
    effect: ineligible
    source: S1
    confidence: medium
```