---
type: "Government Scheme Benefits"
title: "Bulk Drug Parks Scheme — Benefits"
description: "Benefit objects for ROW-204."
scheme_id: "ROW-204"
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
    resource: "https://pharmaceuticals.gov.in/bulk-drug-parks"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Bulk Drug Parks Scheme — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: grant
    name: "support in the form of grant-in-aid for common"
    amount: not_verified
    detail: "Financial support in the form of grant-in-aid for common infrastructure facilities."
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "Non-financial benefits include plug-and-play infrastructure, common effluent tre"
    amount: not_verified
    detail: "Non-financial benefits include plug-and-play infrastructure, common effluent treatment plants, solvent recovery systems, steam and power supply, water supply, logistics support, and safety and security services."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: service
    name: "scheme enables economies of scale and reduces capital"
    amount: not_verified
    detail: "The scheme enables economies of scale and reduces capital expenditure for individual units."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: grant
    name: "Government of India provides grant-in-aid limited to 70%"
    amount:
      value: 10000000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "The Government of India provides grant-in-aid limited to 70% of the project cost for common infrastructure facilities, with a maximum of INR 1000 Crore per Bulk Drug Park."
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: grant
    name: "For Himachal Pradesh and other hill states, the grant"
    amount: not_verified
    detail: "For Himachal Pradesh and other hill states, the grant is increased to 90% of the project cost."
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "remaining 30%"
    amount: not_verified
    detail: "The remaining 30% (or 10% for hill states) is to be contributed by the State Government and the SPV."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to INR 1000 Crore per Bulk Drug Park**
- Fund size recorded in source data: ₹3000 crore
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.