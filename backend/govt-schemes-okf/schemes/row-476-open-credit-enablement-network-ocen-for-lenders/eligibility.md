---
type: "Government Scheme Eligibility"
title: "Open Credit Enablement Network (OCEN) for Lenders — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-476."
scheme_id: "ROW-476"
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
    resource: "https://ocen.dev"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ocen.dev/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ocen.dev/docs/intro"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ocen.dev/blog"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ocen.dev/apis"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ocen.dev/docs/ocen_4_0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://ocen.dev/docs/participant_roles"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://ocen.dev/docs/ocen_components"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://ocen.dev/docs/ocen_registries"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://ocen.dev/docs/product_network"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://ocen.dev/docs/api_design_principles"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://ocen.dev/docs/previous_pilots"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://ocen.dev/docs/terminology"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://ocen.dev/docs/faqs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://ocen.dev/blog/loan-products-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://ocen.dev/blog/new-headline-metrics-to-account-for-short-term-lending"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S17
    resource: "https://ocen.dev/blog/evaluating-the-short-term-lending-opportunity"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S18
    resource: "https://ocen.dev/blog/escrow-based-collections-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S19
    resource: "https://ocen.dev/blog/credit-underwriting-models-of-msme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S20
    resource: "https://ocen.dev/blog/credit-bureau-pull-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S21
    resource: "https://ocen.dev/blog/dispute-resolution-mechanism-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S22
    resource: "https://ocen.dev/blog/importance-of-lending-for-India"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S23
    resource: "https://ocen.dev/blog/role-of-ocen-in-aa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S24
    resource: "https://niti.gov.in/sites/default/files/2020-09/DEPA-Executive-Summary.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Open Credit Enablement Network (OCEN) for Lenders — Eligibility

_Machine-imported from runs/row-476/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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