---
type: "Government Scheme Eligibility"
title: "National Livestock Mission (NLM) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-312."
scheme_id: "ROW-312"
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
    resource: "https://dahd.nic.in/nlm"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Livestock Mission (NLM) — Eligibility

_Machine-imported from runs/row-312/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligible beneficiaries include individual farmers, livestock rearers, self-help groups (SHGs), joint… |
| gender | yes | Priority is given to small and marginal farmers, SC/ST communities, women entrepreneurs, and those involved… |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Applicants must have valid land records or lease agreements where applicable and must comply with… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Eligible beneficiaries include individual farmers, livestock rearers, self-help groups (SHGs), joint… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Eligible beneficiaries include individual farmers, livestock rearers, self-help groups (SHGs), joint… |
| landholding | yes | Applicants must have valid land records or lease agreements where applicable and must comply with… |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Eligible beneficiaries include individual farmers, livestock rearers, self-help groups (SHGs), joint… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Priority is given to small and marginal farmers, SC/ST communities, women entrepreneurs, and those involved… |
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
  - applicant.gender
  - applicant.state
  - applicant.farmer_status
  - applicant.land_ownership
  - applicant.business.type
  - applicant.social_category
```