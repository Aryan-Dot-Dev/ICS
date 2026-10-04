---
type: "Government Scheme Exclusions"
title: "MP Startup Policy & Yuva Udyami Yojana — Exclusions"
description: "Structured disqualifiers for ROW-249."
scheme_id: "ROW-249"
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
    resource: "https://mpedistrict.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mpedistrict.gov.in/UI/document/e-districtMP%20v2.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mpedistrict.gov.in/static/docs/MPeDistrict_UserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mpedistrict.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MP Startup Policy & Yuva Udyami Yojana — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Benefits cannot be availed concurrently with other similar central or state startup schemes"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Misrepresentation of facts or submission of false documents leads to rejection and blacklisting"
    effect: ineligible
    source: S1
    confidence: medium
```