---
type: "Government Scheme Exclusions"
title: "National Horticulture Board (NHB) Schemes — Exclusions"
description: "Structured disqualifiers for ROW-164."
scheme_id: "ROW-164"
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
    resource: "https://nhb.gov.in/writereaddata/0138260438072ndEoI2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nhb.gov.in/writereaddata/1008260508084EOIDPR10Apr2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nhb.gov.in/writereaddata/060226120202Prebid Norice 06.04.2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://cdp.nhb.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nhb.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Horticulture Board (NHB) Schemes — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Submission of application physically or through any other means shall not be accepted;"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Detailed Project Report/ Techno-Economic Viability Report merely stamped or endorsed by the Scheduled Commercial Bank without detailed Appraisal Note shall not be considered valid."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "The applicant entity, including its shareholder(s), partner(s), director(s), and key management personnel, must have a clean financial record with no defaults on debt obligations over the past three years and must not have been classified as ‘non-performing assets’ by any lender during this period."
    effect: ineligible
    source: S1
    confidence: medium
```