---
type: "Government Scheme Exclusions"
title: "Interest Subvention Scheme for MSMEs on Post Shipment Credit — Exclusions"
description: "Structured disqualifiers for ROW-141."
scheme_id: "ROW-141"
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
    resource: "https://msme.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://msme.gov.in/offerings/schemes-and-services/details/prime-minister-employment-generation-programme-and-other-credit-support-schemes-1-MDMzETMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://msme.gov.in/documents/ministry-logo-support"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://msme.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Interest Subvention Scheme for MSMEs on Post Shipment Credit — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Must not have availed similar interest subvention from any other government scheme for the same transaction"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "The beneficiary must not have availed similar interest subvention from any other government scheme for the same transaction"
    effect: ineligible
    source: S1
    confidence: medium
```