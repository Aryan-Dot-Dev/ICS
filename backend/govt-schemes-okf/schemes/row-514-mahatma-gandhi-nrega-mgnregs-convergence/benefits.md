---
type: "Government Scheme Benefits"
title: "Mahatma Gandhi NREGA (MGNREGS) Convergence — Benefits"
description: "Benefit objects for ROW-514."
scheme_id: "ROW-514"
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
    resource: "https://nrega.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nregaplus.nic.in/netnrega/WriteReaddata/Circulars/AMC_2024-25-English.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nregaplus.nic.in/Netnrega/Data/SoP_TimelypaymentMGNREGA.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nrega.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mahatma Gandhi NREGA (MGNREGS) Convergence — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: service
    name: "Legal entitlement to wage employment within 15 days of"
    amount: not_verified
    detail: "Legal entitlement to wage employment within 15 days of demand, unemployment allowance if work not provided within 15 days, right to worksite facilities (drinking water, shade, first-aid), right to notified wage rate, right to receive wages within 15 days, right to conduct social audit, access to skill development and training programs, and creation of durable assets like water conservation…"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: cash-transfer
    name: "Wages are paid directly into beneficiaries' bank/post office accounts"
    amount: not_verified
    detail: "Wages are paid directly into beneficiaries' bank/post office accounts through Direct Benefit Transfer (DBT) and Aadhaar Based Payment System (ABPS)."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: service
    name: "central government bea"
    amount:
      value: 100
      currency: INR
      frequency: not_verified
    detail: "The central government bears 100% of the cost of unskilled labor, 75% of material costs, and administrative expenses, while states bear 25% of material costs."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "Funds are released in tranches based on approved labor"
    amount: not_verified
    detail: "Funds are released in tranches based on approved labor budgets and muster rolls."
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.