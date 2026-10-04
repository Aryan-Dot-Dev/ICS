---
type: "Government Scheme Eligibility"
title: "AP Innovation Society & APEX Incubation — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-123."
scheme_id: "ROW-123"
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
    resource: "https://apinnovation.ap.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# AP Innovation Society & APEX Incubation — Eligibility

_Machine-imported from runs/row-123/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | Location Proof: Proof of residence or office address in Andhra Pradesh mandatory |
| state | yes | Geographic Requirement: Must be based in Andhra Pradesh; preference for ventures registered in the state or committing to operate… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Founder Documentation: PAN and Aadhaar cards of founders required |
| business type | no | no criterion recorded in source data |
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
| Aadhaar | yes | Founder Documentation: PAN and Aadhaar cards of founders required |
| scheme-specific | yes | Registration Status: Open to both registered and unregistered entities; Certificate of Incorporation/Registration required if… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: AAD-001
      field: applicant.aadhaar_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "PAN and Aadhaar cards of founders required"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.aadhaar_held
  - applicant.citizenship
  - applicant.state
  - applicant.business.ownership
```