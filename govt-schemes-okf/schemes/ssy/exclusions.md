---
type: Government Scheme Exclusions
title: SSY — Exclusions
description: Structured disqualifiers for Sukanya Samriddhi Yojana.
scheme_id: SSY
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
status: stable
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171
    title: Sukanya Samriddhi Account Scheme, 2019 (rules)
    author: National Savings Institute
    last_modified: not_verified
---

# SSY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: child.gender
    operator: not_equals
    value: female
    detail: accounts can be opened only for girl children
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: child.age
    operator: greater_than_or_equal
    value: 10
    detail: the girl must be below 10 years on the date of account opening
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: child.existing_ssy_accounts
    operator: greater_than_or_equal
    value: 1
    detail: only one account per child is permitted
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: family.existing_ssy_accounts
    operator: greater_than_or_equal
    value: 2
    detail: maximum two accounts per family (exceptions per rules for multiple births of same birth order etc.)
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-005
    field: guardian.resident_status
    operator: not_equals
    value: resident
    detail: NRI guardians cannot open new SSY accounts (status-change after opening is handled per rules)
    effect: ineligible
    source: S1
    confidence: high
```

## Notes

- EX-004's exceptions (twins/triplets etc.) are rule-defined; the engine
  must check the exceptions before declaring ineligibility.
