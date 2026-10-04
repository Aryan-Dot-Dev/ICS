---
type: "Government Scheme Exclusions"
title: "National Manufacturing Competitiveness Programme (NMCP) — Exclusions"
description: "Structured disqualifiers for ROW-518."
scheme_id: "ROW-518"
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
    resource: "https://msme.gov.in/offerings/schemes-and-services/details/marketing-promotion-schemes-1-QzMzETMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://msme.gov.in/documents/ministry-logo-support"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://my.msme.gov.in/MyMsme/Reg/COM_ViewEvent.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://msme.gov.in/nmcp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Manufacturing Competitiveness Programme (NMCP) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Any misuse of Ministry's logo or support may lead to blacklisting for three years"
    effect: ineligible
    source: S1
    confidence: medium
```