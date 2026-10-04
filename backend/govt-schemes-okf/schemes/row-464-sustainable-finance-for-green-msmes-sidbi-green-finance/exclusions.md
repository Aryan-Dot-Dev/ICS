---
type: "Government Scheme Exclusions"
title: "Sustainable Finance for Green MSMEs (SIDBI Green Finance) — Exclusions"
description: "Structured disqualifiers for ROW-464."
scheme_id: "ROW-464"
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
    resource: "https://sidbi.in/head/uploads/other_loans_document/3. Financing Schemes for Sustainable Development.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.sidbi.in/green"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Sustainable Finance for Green MSMEs (SIDBI Green Finance) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Applicant unit should be in operation for at least three years and should have earned cash profit in the last two years of operation and should not be in default to any bank/FI."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "The unit should not have availed Performance Linked Grant under the WB-GEF Project for the proposed EE Project."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "The unit should not have availed Performance Linked Grant under the WB-GEF Project for the proposed EE Project"
    effect: ineligible
    source: S1
    confidence: medium
```