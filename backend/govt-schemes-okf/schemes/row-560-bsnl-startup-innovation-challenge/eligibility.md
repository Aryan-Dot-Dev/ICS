---
type: "Government Scheme Eligibility"
title: "BSNL Startup & Innovation Challenge — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-560."
scheme_id: "ROW-560"
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
    resource: "https://bsnl.co.in/integrated-business-solution"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://bsnl.co.in/bsnlibs2025"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://bsnl.co.in/eb-services/kaushalam"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://bsnl.co.in/documents/Connect_360.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.bsnl.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# BSNL Startup & Innovation Challenge — Eligibility

_Machine-imported from runs/row-560/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Applicants must be legally registered entities in India (Proprietorship Firm / Partnership Firm / LLP /… |
| business type | yes | Applicants must be legally registered entities in India (Proprietorship Firm / Partnership Firm / LLP /… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Applicants must be legally registered entities in India (Proprietorship Firm / Partnership Firm / LLP /… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.gst_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Applicants must be legally registered entities in India (Proprietorship Firm / Partnership Firm / LLP / Private Limited Company / Public Limited Company / Startups), possess valid GST Registration and PAN, have PAN India operational capability, and provide a 24x7 Single Point of Contact (SPOC) for service coordination."
    - rule_id: REG-002
      field: applicant.iec_registered
      operator: is_true
      value: true
      type: soft
      source: S1
      confidence: medium
      detail: "Depending on service type, required certifications may include ISO/IEC, CERT-In empanelment, MeitY empanelment, and Tier III/IV Data Center certification."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.gst_registered
  - applicant.iec_registered
  - applicant.business.ownership
  - applicant.business.type
```