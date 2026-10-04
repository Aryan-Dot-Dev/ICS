---
type: "Government Scheme Eligibility"
title: "Global Initiative for Academic Networks (GIAN) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-209."
scheme_id: "ROW-209"
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
    resource: "https://gian.iitkgp.ac.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://gian.iitkgp.ac.in/cgenmenu/guidelines"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://gian.iitkgp.ac.in/images/Eligibility_and_Procedure_for_Joining_GIAN_Scheme.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://gian.iitkgp.ac.in/images/GIAN_Guidelies_with_Webinar.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://gian.iitkgp.ac.in/images/Revised_guidelines_for_virtual_mode_of_conduct_of_approved_GIAN_courses.pdf?1783286059="
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://gian.iitkgp.ac.in//files/alertmsgfiles/_down_1567518696+ManualforLC.pdf?1783286059="
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://gian.iitkgp.ac.in//files/alertmsgfiles/_down_1567518696+ManualforLC.pdf?1783286148="
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://gian.iitkgp.ac.in//files/brochures/BR1478764006BiomedBrochure_26t30Dec16.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://gian.iitkgp.ac.in//files/brochures/BR1503807854GIAN_fINAL_2017_SIH.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://gian.iitkgp.ac.in//files/brochures/BR1509096346ShahabFFinal.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://gian.iitkgp.ac.in//files/brochures/BR1643604349Shaista_Afroz_GIAN_Brochure2022.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://gian.iitkgp.ac.in//files/brochures/BR1644894268WARSI_GIAN_BROCHURE_FINAL_15_02_2022_II.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://www.gian.iitkgp.ac.in/GREGN/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://gian.iitkgp.ac.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Global Initiative for Academic Networks (GIAN) — Eligibility

_Machine-imported from runs/row-209/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | All Government (State or Central) higher education Institutions / University which are in top 200 in NIRF… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | yes | All Government (State or Central) higher education Institutions / University which are in top 200 in NIRF… |
| educational level | yes | All Government (State or Central) higher education Institutions / University which are in top 200 in NIRF… |
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
  - applicant.student_status
```