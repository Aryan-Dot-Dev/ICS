---
type: "Government Scheme Eligibility"
title: "National SC/ST Hub — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-166."
scheme_id: "ROW-166"
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
    resource: "https://scsthub.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://scsthub.in/content/special-credit-linked-capital-subsidy-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://scsthub.in/sites/default/files/NSSH-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://scsthub.in/sites/default/files/schemes/NSSH_Guidelines_Sub_scheme__0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://scsthub.in/sites/default/files/NSSH-Achievement-Report-FY_2023-24_Final.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://scsthub.in/sites/default/files/training/Expression_of_Interest_for_Capacity_Building_Training_Program_2025-26_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://scsthub.in/sites/default/files/training/Contact%20details%20of%20NSSHOs%20May%202026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://scsthub.in/support"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://scsthub.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National SC/ST Hub — Eligibility

_Machine-imported from runs/row-166/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Sole Proprietorships, Partnerships, Co-operative societies, Private and Public limited companies owned by… |
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
| business ownership | yes | Sole Proprietorships, Partnerships, Co-operative societies, Private and Public limited companies owned by… |
| business type | yes | Sole Proprietorships, Partnerships, Co-operative societies, Private and Public limited companies owned by… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Sole Proprietorships, Partnerships, Co-operative societies, Private and Public limited companies owned by… |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | yes | It is mandatory to have a valid Udyam Registration for availing the subsidy under SCLCSS. |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | It is mandatory to have a valid Udyam Registration for availing the subsidy under SCLCSS. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: hard
      source: S1
      confidence: medium
      detail: "Sole Proprietorships, Partnerships, Co-operative societies, Private and Public limited companies owned by SC/ST Entrepreneurs of MSE sector engaged in the manufacturing and service activities are eligible for seeking assistance."
    - rule_id: REG-001
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "It is mandatory to have a valid Udyam Registration for availing the subsidy under SCLCSS."
    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 18
      type: hard
      source: S1
      confidence: high
      detail: "For capacity building training programs, candidates belonging to SC/ST community and above 18 years of age on the date of commencement of training are eligible."
    - rule_id: SOC-002
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: hard
      source: S1
      confidence: medium
      detail: "For reimbursement schemes, SC/ST MSEs must have availed the relevant service (e.g., bank loan processing fee, testing fee, etc.) and submit required documents including Udyam Registration, PAN card, caste certificate, and proof of payment."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.udyam_registered
  - applicant.age
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [social-category](../../concepts/social-category.md) · [age](../../rules/age.md)
