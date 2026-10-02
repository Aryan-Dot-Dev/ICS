---
type: Government Scheme Benefits
title: PM Vishwakarma — Benefits
description: Benefit objects for PM Vishwakarma (toolkit, stipend, credit, marketing).
scheme_id: PM-VISHWAKARMA
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
    resource: https://pmvishwakarma.gov.in/
    title: PM Vishwakarma official portal
    author: MoMSME
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1959098
    title: PIB — salient features
    author: PIB
    last_modified: 2023-09-20
---

# PM Vishwakarma — Benefits

## Benefit objects (in benefit sequence)

```yaml
benefits:
  - benefit_id: REC-001
    type: service
    name: PM Vishwakarma certificate & ID card
    amount:
      value: recognition_document
      note: certificate + ID card with QR/NPCM verification
    conditions: successful registration and verification
    source: S1
    confidence: high

  - benefit_id: TRN-001
    type: grant
    name: Skill-training stipend
    amount:
      value: 500
      currency: INR
      frequency: per_day_of_training
    conditions: completion-linked; basic (5 days, type-dependent) and advanced training phases per guidelines
    delivery: dbt
    source: S2
    confidence: high

  - benefit_id: TLK-001
    type: in_kind
    name: Toolkit incentive e-voucher
    amount:
      value: 15000
      currency: INR
      frequency: one_time
    conditions: at the beginning of basic skill training, via e-voucher on portal/empanelled sellers
    source: S2
    confidence: high

  - benefit_id: LON-001
    type: loan
    name: Enterprise Development Loan — Tranche 1
    amount:
      value: 100000
      currency: INR
      tenure_months: 18
    collateral_required: false
    interest_borne_by_beneficiary: 5
    interest_subsidised_by_government: 8
    conditions: after training; digital-transactions onboarding per portal
    source: S1
    confidence: high

  - benefit_id: LON-002
    type: loan
    name: Enterprise Development Loan — Tranche 2
    amount:
      value: 200000
      currency: INR
      tenure_months: 30
    collateral_required: false
    conditions:
      - tranche 1 fully repaid [S1]
      - digital-transactions compliance as per guidelines
    source: S1
    confidence: high

  - benefit_id: DIG-001
    type: incentive
    name: Digital transaction incentive
    amount:
      value: per_guidelines
      currency: INR
      note: ₹1/day (up to specified monthly cap) for prescribed digital receipts — exact caps per current guidelines; verify before quoting totals
    conditions: registered digital payments
    source: S2
    confidence: medium

  - benefit_id: MRK-001
    type: service
    name: Marketing support
    amount:
      value: non_monetary
      note: e-marketplace onboarding, exhibitions, quality certification linkage per guidelines
    source: S2
    confidence: high
```

## Notes

- Benefits are **sequential**: recognition → training/stipend → toolkit
  → loan tranches → marketing/digital incentives. The engine must not
  promise later-stage benefits as immediately available.
- Loan total ₹3 lakh = ₹1L + ₹2L across tranches with repayment-linked
  gating [S1].
