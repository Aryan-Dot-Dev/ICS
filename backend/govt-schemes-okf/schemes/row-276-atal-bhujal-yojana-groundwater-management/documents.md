---
type: "Government Scheme Documents"
title: "Atal Bhujal Yojana (Groundwater Management) — Documents"
description: "Document requirements for ROW-276."
scheme_id: "ROW-276"
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
    resource: "https://atalbhujal.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Atal Bhujal Yojana (Groundwater Management) — Documents

```yaml
documents:
  - id: water-security-plan-wsp-document
    name: "Water Security Plan (WSP) document"
    required: always
    source: S1
    confidence: medium
  - id: resolution-from-gram-panchayat-or-water
    name: "Resolution from Gram Panchayat or Water User Association"
    required: always
    source: S1
    confidence: medium
  - id: details-of-beneficiary-contribution-and
    name: "Details of beneficiary contribution and community participation"
    required: always
    source: S1
    confidence: medium
  - id: technical-feasibility-report-from-concer
    name: "Technical feasibility report from concerned department"
    required: always
    source: S1
    confidence: medium
  - id: convergence-plan-with-other-schemes-if-a
    name: "Convergence plan with other schemes (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.