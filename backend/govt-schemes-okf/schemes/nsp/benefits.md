---
type: Government Scheme Benefits
title: NSP / PM-USP CSSS — Benefits
description: Scholarship benefit objects for PM-USP CSSS, including a recorded source conflict.
scheme_id: NSP-CSSS
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
status: review
stale_after: 2026-12-31
sources:
  - id: S2
    resource: https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf
    title: PM-USP CSSS Guidelines
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
  - id: S3
    resource: https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf
    title: PM-USP CSSS FAQ
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
  - id: S4
    resource: https://www.myscheme.gov.in/schemes/csss-cus
    title: myScheme — PM-USP CSSS listing (₹12,000 UG figure)
    author: Digital India Corporation (MeitY)
    last_modified: not_verified
---

# NSP / PM-USP CSSS — Benefits

## Benefit objects — with recorded conflict

Two official-adjacent rate structures appear across sources. Per bundle
policy, both are recorded; the engine must present the range and flag
for verification against the **current-year notification** on NSP.

```yaml
benefits:
  - benefit_id: SCH-001
    type: scholarship
    name: UG scholarship (professional/degree, years 1–3)
    amount:
      value: 12500
      historical_value: 10000
      currency: INR
      frequency: annual
      note: recent guideline documents report Rs.12,500/yr; legacy guidelines report Rs.10,000/yr (Rs.1,000/month x 10 months). CONFLICT RECORDED — verify current-year NSP notification.
    conditions: eligibility per eligibility.md
    source: S2
    confidence: medium
    requires_review: true

  - benefit_id: SCH-002
    type: scholarship
    name: PG scholarship
    amount:
      value: 20000
      currency: INR
      frequency: annual
      note: consistent across sources (Rs.2,000/month x 10 months)
    conditions: as SCH-001 (PG years)
    source: S2
    confidence: high

  - benefit_id: SCH-003
    type: scholarship
    name: Professional-course years 4–5 (where applicable)
    amount:
      value: 20000
      currency: INR
      frequency: annual
      note: per guidelines for professional programmes extending to 5 years; verify against current notification
    conditions: five-year professional degree programmes
    source: S2
    confidence: medium
    requires_review: true
```

## Notes

- Disbursement is by DBT through NSP after institutional and ministry
  verification.
- The conflict above is deliberately **not silently resolved**; if a
  maintainer verifies the current notification, update SCH-001 and set
  `requires_review: false`.
