---
type: "Government Scheme Eligibility"
title: "Rajasthan Startup & MSME Policy — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-120."
scheme_id: "ROW-120"
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
    resource: "https://rajasthan.gov.in/startups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Rajasthan Startup & MSME Policy — Eligibility

_Machine-imported from runs/row-120/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Startup Age Limit: Typically ≤ 10 years from date of incorporation/registration |
| gender | unknown | source data empty — eligibility text not_verified |
| citizenship/residency | unknown | source data empty — eligibility text not_verified |
| state | yes | Entity Type: Startups (DPIIT-recognized or state-recognized), MSMEs (Udyam-registered), Sole Proprietorships,… |
| district | unknown | source data empty — eligibility text not_verified |
| rural/urban | unknown | source data empty — eligibility text not_verified |
| income | unknown | source data empty — eligibility text not_verified |
| occupation | unknown | source data empty — eligibility text not_verified |
| employment status | yes | Innovation Criteria (for startup benefits): Working towards innovation, development, or improvement of products/services/processes; or a scalable… |
| farmer status | unknown | source data empty — eligibility text not_verified |
| landholding | unknown | source data empty — eligibility text not_verified |
| business ownership | yes | Entity Type: Startups (DPIIT-recognized or state-recognized), MSMEs (Udyam-registered), Sole Proprietorships,… |
| business type | yes | Entity Type: Startups (DPIIT-recognized or state-recognized), MSMEs (Udyam-registered), Sole Proprietorships,… |
| student status | unknown | source data empty — eligibility text not_verified |
| educational level | unknown | source data empty — eligibility text not_verified |
| social category | unknown | source data empty — eligibility text not_verified |
| disability status | unknown | source data empty — eligibility text not_verified |
| marital/family status | unknown | source data empty — eligibility text not_verified |
| pregnancy/maternity | unknown | source data empty — eligibility text not_verified |
| household status | unknown | source data empty — eligibility text not_verified |
| beneficiary under another scheme | unknown | source data empty — eligibility text not_verified |
| previous benefit | unknown | source data empty — eligibility text not_verified |
| bank account | unknown | source data empty — eligibility text not_verified |
| Aadhaar | unknown | source data empty — eligibility text not_verified |
| scheme-specific | yes | Startup Age Limit: Typically ≤ 10 years from date of incorporation/registration |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Startups (DPIIT-recognized or state-recognized), MSMEs (Udyam-registered), Sole Proprietorships, Partnerships, LLPs, Private Limited Companies"
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 5
      type: hard
      source: S1
      confidence: high
      detail: "As per MSME Act 2006: <br> - Micro: ≤ ₹5 Cr<br> - Small: ≤ ₹50 Cr<br> - Medium: ≤ ₹250 Cr"
    - rule_id: REG-002
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: soft
      source: S1
      confidence: medium
      detail: "Udyam registration mandatory for MSME-specific incentives"
    - rule_id: REG-003
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: soft
      source: S1
      confidence: medium
      detail: "May require recognition from State Startup Portal or DPIIT"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.dpiit_recognized
  - applicant.business.annual_turnover
  - applicant.udyam_registered
  - applicant.age
  - applicant.state
  - applicant.employment_status
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md)
