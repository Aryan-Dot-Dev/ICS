---
type: "Government Scheme Exclusions"
title: "National Drone Policy 2021 — Exclusions"
description: "Structured disqualifiers for ROW-581."
scheme_id: "ROW-581"
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
    resource: "https://dgca.gov.in/digigov-portal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dgca.gov.in/digigov-portal/jsp/dgca/topHeader/aZIndex/AtoZindex.jsp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://dgca.gov.in/digigov-portal/jsp/dgca/footerLink/WebsitePolicy.jsp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://dgca.gov.in/digigov-portal/jsp/dgca/footerLink/PrivacyPolicy.jsp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.dgca.gov.in/digigov-portal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Drone Policy 2021 — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Operations are prohibited in no-drone zones (e.g., near airports, international borders, strategic locations)"
    effect: ineligible
    source: S1
    confidence: medium
```