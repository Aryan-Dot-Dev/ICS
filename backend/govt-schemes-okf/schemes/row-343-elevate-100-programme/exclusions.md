---
type: "Government Scheme Exclusions"
title: "Elevate 100 Programme — Exclusions"
description: "Structured disqualifiers for ROW-343."
scheme_id: "ROW-343"
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
    resource: "https://elevate.karnataka.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Elevate 100 Programme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The startup should not have received more than INR 50 Lakhs in funding from any government scheme prior to applying."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Misuse of funds may lead to recovery of the grant amount and blacklisting from future government schemes"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Startups that have previously received benefits under Elevate 100 are not eligible to reapply"
    effect: ineligible
    source: S1
    confidence: medium
```