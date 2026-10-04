---
type: "Government Scheme Eligibility"
title: "National Waterway Development – IWAI Schemes — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-362."
scheme_id: "ROW-362"
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
    resource: "https://iwai.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://iwai.nic.in/sites/default/files/Salient%20Features%20of%20Cargo%20Promotion%20Scheme%2027.11.2024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://iwai.nic.in/sites/default/files/Internship%20Policy%202024-25-1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://iwai.nic.in/about-us/chairperson-members"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://iwai.nic.in/about-us/whos-who"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://iwai.nic.in/about-us/regional-sub-offices"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://iwai.nic.in/departments/north-east-region-cell/project-under-central-sector-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://iwai.nic.in/sites/default/files/Revised%20Circular%20dated%2021.10.2024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://iwai.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Waterway Development – IWAI Schemes — Eligibility

_Machine-imported from runs/row-362/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | For deputation posts, applicants must be from Central/State Govt./PSUs/Statutory bodies with analogous… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | For the Cargo Promotion Scheme, cargo owners shifting cargo from rail/road to IWT on NW-1, NW-2, and NW-16… |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | yes | For deputation posts, applicants must be from Central/State Govt./PSUs/Statutory bodies with analogous… |
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
  - applicant.state
  - applicant.business.ownership
```