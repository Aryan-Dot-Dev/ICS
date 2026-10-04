---
type: "Government Scheme Eligibility"
title: "BIRAC PACE Programme for Biotech Incubation — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-549."
scheme_id: "ROW-549"
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
    resource: "https://birac.nic.in/pace.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://birac.nic.in/webcontent/1613355528_PACE_scheme_document_15_02_2021.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://birac.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# BIRAC PACE Programme for Biotech Incubation — Eligibility

_Machine-imported from runs/row-549/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | Eligibility Criteria for Industry/LLP as collaborator: Minimum 51% of the shares of the Company should be… |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Academic Institute, University, NGO or Research Foundation, registered/accredited by a government body can… |
| business type | yes | Academic Institute, University, NGO or Research Foundation, registered/accredited by a government body can… |
| student status | yes | Academic Institute, University, NGO or Research Foundation, registered/accredited by a government body can… |
| educational level | yes | Absence of which can result in disqualification of the proposal. |
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

```yaml
eligibility_rules:
  all:
    - rule_id: CTZ-001
      field: applicant.citizenship
      operator: equals
      value: "IN"
      type: hard
      source: S1
      confidence: medium
      detail: "Eligibility Criteria for Industry/LLP as collaborator: Minimum 51% of the shares of the Company should be held by Indian Citizens holding Indian passport (Indian Citizens do not include Person of Indian Origin (PIO) and Overseas Citizenship of India (OCI) holders)."
    - rule_id: CTZ-002
      field: applicant.citizenship
      operator: equals
      value: "IN"
      type: hard
      source: S1
      confidence: medium
      detail: "Minimum half of the persons who subscribed their names to the LLP document as its Partners should be Indian citizens."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.citizenship
  - applicant.business.ownership
  - applicant.business.type
  - applicant.student_status
```