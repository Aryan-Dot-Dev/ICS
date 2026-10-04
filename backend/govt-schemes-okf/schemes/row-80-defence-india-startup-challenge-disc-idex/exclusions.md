---
type: "Government Scheme Exclusions"
title: "Defence India Startup Challenge (DISC) – iDEX — Exclusions"
description: "Structured disqualifiers for ROW-80."
scheme_id: "ROW-80"
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
    resource: "https://idex.gov.in/challenges"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://idex.gov.in/en/challenges"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://idex.gov.in/how_to_apply"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://idex.gov.in/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://idex.gov.in/financial-faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://idex.gov.in/uploads/resources/1726729375_a706d8ad0ebe4d13abac.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://idex.gov.in/uploads/resources/1700215966_01115b225ef4d436c635.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://idex.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://idex.gov.in/disc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Defence India Startup Challenge (DISC) – iDEX — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "An entity holding three (3) or more active iDEX contracts where at least two (2) contracts have not received technical concurrence for Milestone 3 closure is ineligible for new challenges"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Funding is subject to milestone-based disbursement and cannot be used for prohibited expenditures like cost of land/buildings, establishment of R&D centres, writing books/reports, investments, interest on loans, bad debts, contributions/donations, fines/penalties, advocacy, losses from other businesses, or unapproved capital/operating expenditures"
    effect: ineligible
    source: S1
    confidence: medium
```