---
type: Government Scheme Benefits
title: PM SVANidhi — Benefits
description: Loan ladder, interest subsidy and cashback benefit objects for PM SVANidhi (restructured 2025).
scheme_id: PM-SVANIDHI
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
    resource: https://pmsvanidhi.mohua.gov.in/
    title: PM SVANidhi official portal
    author: MoHUA
    last_modified: not_verified
  - id: S3
    resource: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/dec/doc20251220739401.pdf
    title: PIB document — enhanced loan structure
    author: PIB
    last_modified: 2025-12-20
  - id: S4
    resource: https://mohua.gov.in/static/uploads/2026/01/a3a17370145e0870a79df74bfbab766f.pdf
    title: PM SVANidhi Loan Operational Guidelines
    author: MoHUA
    last_modified: 2026-01-01
---

# PM SVANidhi — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: LON-001
    type: loan
    name: First-tranche working-capital loan
    amount:
      max_value: 15000
      historical_max_value: 10000
      currency: INR
      tenure_months: 12
    collateral_required: false
    conditions: vending recognition per eligibility.md
    source: S3
    confidence: high

  - benefit_id: LON-002
    type: loan
    name: Second-tranche working-capital loan
    amount:
      max_value: 25000
      historical_max_value: 20000
      currency: INR
      tenure_months: 18_to_24_per_guidelines
    collateral_required: false
    conditions: full repayment of first tranche [S4]
    source: S3
    confidence: high

  - benefit_id: LON-003
    type: loan
    name: Third-tranche working-capital loan
    amount:
      max_value: 50000
      currency: INR
      tenure_months: 36_per_guidelines
    collateral_required: false
    conditions: full repayment of second tranche [S4]
    source: S1
    confidence: high

  - benefit_id: SUB-001
    type: subsidy
    name: Interest subsidy @7% p.a.
    amount:
      rate: 7
      unit: percent_per_annum
      currency: INR
      note: on timely/early repayment; paid by DBT after repayment verification [S1]
    conditions: full, timely/early repayment of the loan
    source: S1
    confidence: high

  - benefit_id: CBK-001
    type: reimbursement
    name: Digital-transaction cashback
    amount:
      max_value: 1200
      currency: INR
      frequency: annual
      note: cashback on prescribed digital transactions per scheme terms (transaction-count conditions per guidelines) [S1]
    conditions: prescribed digital receipts on registered channels
    source: S1
    confidence: high
```

## Notes

- The loan ladder is **progressive**: LON-002/003 are not available as
  first loans. The engine must gate recommendations on repayment
  history.
- Interest subsidy is a *post-repayment* benefit — it is never a
  discount at disbursement.
