---
type: "Government Scheme Eligibility"
title: "National Apprenticeship Promotion Scheme (NAPS) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-85."
scheme_id: "ROW-85"
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
    resource: "https://apprenticeshipindia.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://apprenticeshipindia.org/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://apprenticeshipindia.org/courses"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/Office_Memorandum_02-Dec-2021.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/OM+-+Enabling+of+Portal+Features+relating+to+Apprenticeship+Engagement+Cap+of+18%25+and+Minimum+Gap+Between+Apprenticeship+Training_23042026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/OM+-+Implementation+of+Valid+Email+Verification_22042026.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/OM-Standardisation+of+Timelines+and+Process+Flow+for+Apprenticeship+Contract01-04-2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/Corrigendum_31-Jan-2022.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://naps-prod.s3.ap-south-1.amazonaws.com/documents/naps/zooK8lCccNHM6RvfCrkOj1WvJIcJFqnH1qLCoNX0s73zp9GPzcy3Xjn3wDyp.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/SoP_for_Apprenticeship_during_COVID-19.docx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://naps-prod.s3.ap-south-1.amazonaws.com/documents/naps/4vpGIy368fsQGFiMLdBZ0G68kefDrEwtrunVIRroHp3EN08TPGdRrAsYNlLL.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/miscellaneous/Apprenticeship_OT_Curriculum_Template_v2.docx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/miscellaneous/Apprenticeship_OT_Curriculum_Template-guidelines_v2.docx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/miscellaneous/DegreeApprenticeshipCurriculumTemplate_v1.docx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://naps-cdn.s3.ap-south-1.amazonaws.com/miscellaneous/DegreeApprenticeshipCurriculumGuidelines_v1.docx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://www.apprenticeshipindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Apprenticeship Promotion Scheme (NAPS) — Eligibility

_Machine-imported from runs/row-85/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Candidates must meet the educational and age criteria specified for the designated or optional trade they… |
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
| educational level | yes | Candidates must meet the educational and age criteria specified for the designated or optional trade they… |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Establishments must have a valid registration on the apprenticeship portal and comply with contract signing,… |

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
```