---
type: "Government Scheme Benefits"
title: "Recognition of Prior Learning (RPL) Scheme — Benefits"
description: "Benefit objects for ROW-494."
scheme_id: "ROW-494"
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
    resource: "https://pmkvyofficial.org/rpl"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Recognition of Prior Learning (RPL) Scheme — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: service
    name: "Successful candidates receive a government-recognized certificate aligned with N"
    amount:
      value: 500
      currency: INR
      frequency: annual
    detail: "Successful candidates receive a government-recognized certificate aligned with NSQF levels, a monetary reward of INR 500 upon assessment and certification, and improved access to job opportunities, wage progression, and formal skill upgrading pathways."
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "Under the RPL scheme, a fixed monetary reward of"
    amount:
      value: 500
      currency: INR
      frequency: not_verified
    detail: "Under the RPL scheme, a fixed monetary reward of INR 500 is disbursed to each candidate who successfully completes the assessment and certification process."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: cash-transfer
    name: "This amount is transferred directly to the beneficiary's bank"
    amount: not_verified
    detail: "This amount is transferred directly to the beneficiary's bank account via Direct Benefit Transfer (DBT)."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **INR 500**
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.