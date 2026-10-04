---
type: "Government Scheme Exclusions"
title: "APEDA Agri Export Promotion Scheme — Exclusions"
description: "Structured disqualifiers for ROW-428."
scheme_id: "ROW-428"
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
    resource: "https://apeda.gov.in/FinancialAssistanceSchemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://apeda.gov.in/bharati/How_to_Apply.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://apeda.gov.in/annual-reports"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://apeda.gov.in/annual-account-reports"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://apeda.gov.in/annual-administrative-reports"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://apeda.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# APEDA Agri Export Promotion Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Submission of false information or documents may lead to rejection and blacklisting."
    effect: ineligible
    source: S1
    confidence: medium
```