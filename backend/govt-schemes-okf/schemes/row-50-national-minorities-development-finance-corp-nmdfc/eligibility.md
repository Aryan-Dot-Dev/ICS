---
type: "Government Scheme Eligibility"
title: "National Minorities Development & Finance Corp (NMDFC) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-50."
scheme_id: "ROW-50"
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
    resource: "https://nmdfc.org/nmdfcschemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nmdfc.org/about_nmdfc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nmdfc.org/home/nmdfc_schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nmdfc.org/target-groups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nmdfc.org/promotionalschemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nmdfc.org/MANFscheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nmdfc.org/uploads/files/Discontinuation-NOTICE-MANF-124bc0aad-a542-4894-82d0-8b78d036247apdf-4cde4f773a56bf6a7fb2dbdd8680f87b.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nmdfc.org/uploads/bulletin/noticepdf-adc57c3c748b3afc46e4443c65a43fd1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nmdfc.org/uploads/update/noticepdf-ead74eceb221cb167747d80dbfbc48ee.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nmdfc.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Minorities Development & Finance Corp (NMDFC) — Eligibility

_Machine-imported from runs/row-50/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | Preference is given to artisans and women. |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | yes | Annual family income eligibility: Credit Line-1 for income up to ₹3.00 lakhs per annum; |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | yes | For education loans, applicants must pursue job-oriented technical/vocational courses. |
| social category | yes | Beneficiaries must belong to notified minority communities (Muslims, Christians, Sikhs, Buddhists, Parsis,… |
| disability status | no | no criterion recorded in source data |
| marital/family status | yes | Annual family income eligibility: Credit Line-1 for income up to ₹3.00 lakhs per annum; |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | yes | Annual family income eligibility: Credit Line-1 for income up to ₹3.00 lakhs per annum; |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | no | no criterion recorded in source data |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [minority]
      type: hard
      source: S1
      confidence: medium
      detail: "Beneficiaries must belong to notified minority communities (Muslims, Christians, Sikhs, Buddhists, Parsis, and Jains as per National Commission for Minorities Act, 1992, with Jains added in January 2014)."
    - rule_id: INC-001
      field: applicant.annual_income
      operator: less_than_or_equal
      value: 300000
      type: hard
      source: S1
      confidence: high
      detail: "Annual family income eligibility: Credit Line-1 for income up to ₹3.00 lakhs per annum;"
    - rule_id: INC-002
      field: applicant.annual_income
      operator: less_than_or_equal
      value: 800000
      type: hard
      source: S1
      confidence: high
      detail: "Credit Line-2 for income up to ₹8.00 lakhs per annum (enhanced from November 2020 using 'Creamy Layer' criterion)."
    - rule_id: SOC-002
      field: applicant.social_category
      operator: in
      value: [minority]
      type: hard
      source: S1
      confidence: medium
      detail: "For MANF, candidates must have cleared UGC-NET or Joint CSIR-UGC NET and belong to minority communities."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.annual_income
  - applicant.gender
```

Rule/concept references: [social-category](../../concepts/social-category.md) · [income](../../rules/income.md)
