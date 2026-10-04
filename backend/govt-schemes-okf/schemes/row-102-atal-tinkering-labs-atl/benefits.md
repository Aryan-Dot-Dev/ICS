---
type: "Government Scheme Benefits"
title: "Atal Tinkering Labs (ATL) — Benefits"
description: "Benefit objects for ROW-102."
scheme_id: "ROW-102"
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
    resource: "https://aim.gov.in/atl"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Atal Tinkering Labs (ATL) — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: grant
    name: "Establishment Grant"
    amount:
      value: 1000000
      currency: INR
      frequency: one_time
      is_maximum: true
    detail: "One-time grant for setting up the lab with equipment, tools, and consumables"
    duration: "Up to 10,00,000 (10 lakh) Non-recurring; for initial setup Key Facts (#scheme-key-facts-extracted-structured-data)"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: grant
    name: "Operational Grant"
    amount:
      value: 1000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Operational expenses for running the lab"
    duration: "Up to 10,00,000 (10 lakh) Spread over max 5 years @ 2 lakh per annum Key Facts (#scheme-key-facts-extracted-structured-data)"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: grant
    name: "Total Financial Support"
    amount:
      value: 2000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Combined establishment + operational grant"
    duration: "Up to 20,00,000 (20 lakh) Maximum per entity over 5 years Key Facts (#scheme-key-facts-extracted-structured-data)"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "Non-Financial Benefits"
    amount: not_verified
    detail: "Access to mentorship, training programs, innovation challenges, national-level exhibitions and competitions"
    duration: "Not monetized Ongoing during lab operation Key Facts (#scheme-key-facts-extracted-structured-data)"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: grant
    name: "Grant Disbursement"
    amount: not_verified
    detail: "Released in installments based on milestones and utilization reports"
    duration: "Phased Tied to achievement of predefined milestones Key Facts (#scheme-key-facts-extracted-structured-data)"
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to INR 20 Lakhs (INR 10 lakh establishment + INR 10 lakh operational over 5 years)**
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.