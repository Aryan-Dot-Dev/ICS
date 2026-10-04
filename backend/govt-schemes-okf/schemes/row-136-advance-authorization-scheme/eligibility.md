---
type: "Government Scheme Eligibility"
title: "Advance Authorization Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-136."
scheme_id: "ROW-136"
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
    resource: "https://dgft.gov.in/CP/?opt=advance-authorization"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://content.dgft.gov.in/Website/dgftprod/39108932-5da7-4496-b3a6-d8d9c1c0865b/sugar notification.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.dgft.gov.in/CP/?opt=advance-authorization"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Advance Authorization Scheme — Eligibility

_Machine-imported from runs/row-136/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Business Activity: Engaged in manufacture and export of goods |
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
| business ownership | no | no criterion recorded in source data |
| business type | yes | Applicant Type: Manufacturer exporter or merchant exporter tied to a supporting manufacturer |
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
| scheme-specific | yes | Mandatory Registration: Valid Importer Exporter Code (IEC) |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.iec_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Valid Importer Exporter Code (IEC)"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.iec_registered
  - applicant.age
  - applicant.business.type
```