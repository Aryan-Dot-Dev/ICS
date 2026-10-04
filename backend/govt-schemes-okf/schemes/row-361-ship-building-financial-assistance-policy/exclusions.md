---
type: "Government Scheme Exclusions"
title: "Ship Building Financial Assistance Policy — Exclusions"
description: "Structured disqualifiers for ROW-361."
scheme_id: "ROW-361"
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
    resource: "https://shipmin.gov.in/sites/default/files/SBFAP_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://shipmin.gov.in/sites/default/files/Modified%20SBFAP%20guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://shipmin.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Ship Building Financial Assistance Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Applicant must not have availed monetary support under any other Central or State Government policy/scheme for the same vessel"
    effect: ineligible
    source: S1
    confidence: medium
```