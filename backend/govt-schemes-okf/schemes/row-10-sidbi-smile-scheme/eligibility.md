---
type: "Government Scheme Eligibility"
title: "SIDBI SMILE Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-10."
scheme_id: "ROW-10"
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
    resource: "https://sidbi.in/prayaas"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/en/prayaas"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.sidbi.in/smile"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# SIDBI SMILE Scheme — Eligibility

_Machine-imported from runs/row-10/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | Focus Groups: Women entrepreneurs (>85% of beneficiaries), Socially backward sections (>70% of beneficiaries) |
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
| business type | yes | Target Beneficiaries: Informal micro-entrepreneurs/micro-enterprises (IMEs) for livelihood enterprise promotion |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | yes | Required Documents: 1. Application form<br>2. KYC documents (Identity and Address proof)<br>3. Business proof/enterprise… |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Required Documents: 1. Application form<br>2. KYC documents (Identity and Address proof)<br>3. Business proof/enterprise… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.pan_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "PAN India; operational in 30 States/UTs as of December 2023"
    - rule_id: BNK-001
      field: applicant.bank_account_exists
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "1. Application form<br>2. KYC documents (Identity and Address proof)<br>3. Business proof/enterprise details<br>4. Bank account details<br>5. Any additional documents as required by the Partner Institution"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.pan_held
  - applicant.bank_account_exists
  - applicant.gender
  - applicant.business.type
```