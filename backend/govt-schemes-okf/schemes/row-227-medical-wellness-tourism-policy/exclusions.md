---
type: "Government Scheme Exclusions"
title: "Medical & Wellness Tourism Policy — Exclusions"
description: "Structured disqualifiers for ROW-227."
scheme_id: "ROW-227"
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
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/07/aefe9e1a360318ebe2cbbd16d82c3f5c.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://tourism.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Medical & Wellness Tourism Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Claim received after 45 days of return to India, or wherein the deficiencies in the claim as intimated are not fully completed within 45 days from the date of information/documents sought, will be rejected."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "The TSP shall not be under investigation or charged/ prosecuted/debarred/black listed by Ministry of Tourism, Govt."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "The TSP should not have claimed/received any financial assistance for the Promotional Activity for which reimbursement is being claimed, from the Central / State Government or any Government Agency."
    effect: ineligible
    source: S1
    confidence: medium
```