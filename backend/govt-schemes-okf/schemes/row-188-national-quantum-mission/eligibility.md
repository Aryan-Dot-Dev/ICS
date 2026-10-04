---
type: "Government Scheme Eligibility"
title: "National Quantum Mission — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-188."
scheme_id: "ROW-188"
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
    resource: "https://dst.gov.in/rdi-scheme/research-development-and-innovation-rdi-cell"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dst.gov.in/sites/default/files/SFR%20RDI%20FUND%20Gazzette%20Notification.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://dst.gov.in/sites/default/files/Publication%20of%20Special%20Financial%20Rules%202026%20for%20utilization%20of%20the%20amounts%20in%20the%20Research%20Development%20and%20Innovation%28RDI%29%20Fund%20in%20the%20official%20Gazette%20-%20reg..pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://dst.gov.in/sites/default/files/Gazette%20Notification_COO_CFO.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://dst.gov.in/sites/default/files/Gazette%20Notification_AO.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://rdifund.anrf.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://dst.gov.in/quantum-mission"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Quantum Mission — Eligibility

_Machine-imported from runs/row-188/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | The scheme is open to industry players, startups, research institutions, and academia engaged in quantum… |
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
| business ownership | yes | Entities must be legal entities such as companies registered under the Companies Act 2013, partnerships… |
| business type | yes | The scheme is open to industry players, startups, research institutions, and academia engaged in quantum… |
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
missing_fields:
  - applicant.age
  - applicant.business.ownership
  - applicant.business.type
```