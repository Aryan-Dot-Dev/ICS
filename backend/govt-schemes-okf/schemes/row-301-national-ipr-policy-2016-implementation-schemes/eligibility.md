---
type: "Government Scheme Eligibility"
title: "National IPR Policy 2016 Implementation Schemes — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-301."
scheme_id: "ROW-301"
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
    resource: "https://ipindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ipindia.gov.in/page-content/application-filing-guidelines-1"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ipindia.gov.in/application-workflow/design-application-workflow"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ipindia.gov.in/trademark-application-workflow"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ipindia.gov.in/application-workflow/trademark-filing-process"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ipindia.gov.in/patents-before-you-apply-forms-official-fees"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://ipindia.gov.in/storage/uploads/docs-operator/bf10437e-a59f-4cfe-bc09-e1ee3e15602d.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://ipindia.gov.in/uploads/Online_Joint_Workshops_on_IPR.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://ipindia.gov.in/storage/uploads/docs-operator/ac7d8a15-1ca1-42cb-8ea2-316eb3103172.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://ipindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National IPR Policy 2016 Implementation Schemes — Eligibility

_Machine-imported from runs/row-301/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | yes | Eligibility varies by IP type but generally includes natural persons, startups, small entities, educational… |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | no | no criterion recorded in source data |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

_No deterministic rule could be extracted from the source text with sufficient confidence._ `eligibility_rules.all: []` — the engine must not infer rules; evaluate against the dimension evidence above and request the missing fields below.

```yaml
eligibility_rules:
  all: []
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields: []
note: "source eligibility text empty — request the full applicant profile"
```