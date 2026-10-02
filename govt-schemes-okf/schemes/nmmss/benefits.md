---
type: Government Scheme Benefits
title: NMMSS — Benefits
description: Scholarship benefit objects for NMMSS.
scheme_id: NMMSS
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
    resource: https://scholarships.gov.in/public/FAQ/NMSSS_FAQ.pdf
    title: NMMSS FAQ (NSP)
    author: Department of School Education & Literacy
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1800307
    title: PIB — NMMSS continuation
    author: PIB
    last_modified: 2022-02-22
---

# NMMSS — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: SCH-001
    type: scholarship
    name: Annual scholarship (Class 9–12)
    amount:
      value: 12000
      currency: INR
      frequency: annual
      monthly_equivalent: 1000
      duration_years: 4
    conditions:
      - continue in government/aided/local-body school
      - ≥55% marks each year for continuation (relaxations for SC/ST/PwD)
      - no overlapping scholarship
    delivery: dbt_via_nsp
    source: S1
    confidence: high

  - benefit_id: QUO-001
    type: service
    name: Annual fresh-scholarship quota
    amount:
      value: 100000
      unit: fresh_scholarships_per_year
      note: one lakh fresh scholarships each year nationally [S2]; state quotas apply
    source: S2
    confidence: high
```

## Notes

- The ₹12,000 rate reflects the revised guidelines (historical ₹6,000
  recorded in [scheme.md](scheme.md#historical-superseded)).
- Payment cadence (monthly vs consolidated) follows NSP/State
  operationalisation; treat as `informational`.
