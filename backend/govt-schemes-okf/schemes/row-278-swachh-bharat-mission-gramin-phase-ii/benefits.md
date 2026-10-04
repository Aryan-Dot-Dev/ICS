---
type: "Government Scheme Benefits"
title: "Swachh Bharat Mission – Gramin Phase II — Benefits"
description: "Benefit objects for ROW-278."
scheme_id: "ROW-278"
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
    resource: "https://swachhbharatmission.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://swachhbharatmission.ddws.gov.in/sites/default/files/Technical-Notes/10Years_of_SBM_Brochure.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://swachhbharatmission.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Swachh Bharat Mission – Gramin Phase II — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: service
    name: "and non-financial benefits include sustained ODF status, improved"
    amount:
      value: 50000
      currency: INR
      frequency: annual
    detail: "Financial and non-financial benefits include sustained ODF status, improved health outcomes (reduction in diarrheal deaths), economic savings (INR 50,000 annually per household on health costs), environmental benefits (reduced groundwater contamination), enhanced safety and dignity for women (93% reported feeling safer), employment generation through waste management and GOBARdhan initiatives,…"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "mission's current phase is supported by an investment"
    amount:
      value: 140000
      currency: INR
      frequency: not_verified
    detail: "The mission's current phase is supported by an investment of Rs.1.40 lakh crores, which integrates various governmental schemes to enhance sanitation infrastructure further."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: grant
    name: "assistance is provided for projects such as GOBARdhan"
    amount:
      value: 5000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Financial assistance is provided for projects such as GOBARdhan, with up to Rs. 50 Lakh per district available for setting up model projects at community and cluster levels under SBM(G) Phase-II until 2024–25."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "Funds are channeled through central and state government mechanisms"
    amount: not_verified
    detail: "Funds are channeled through central and state government mechanisms, including convergence with other ministries and utilization of CSR funds from CPSEs and corporate houses as per guidelines."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to Rs. 50 Lakh per district for GOBARdhan model projects**
- Fund size recorded in source data: ₹140000 crore
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.