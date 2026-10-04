---
type: "Government Scheme Eligibility"
title: "National Institute of Food Technology Entrepreneurship & Management (NIFTEM) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-572."
scheme_id: "ROW-572"
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
    resource: "https://niftem.ac.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://niftem.ac.in/about-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://niftem.ac.in/administration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://niftem.ac.in/academics"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://niftem.ac.in/academics/programmes/btech"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://niftem.ac.in/academics/programmes/mba"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://niftem.ac.in/academics/programmes/mtech"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://niftem.ac.in/academics/programmes/phd"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://niftem.ac.in/newsite/wp-content/uploads/2024/05/hos-2-1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://niftem.ac.in/storage/updates/1782218366_eOyYGbEz2hQNYffEGFWZxSbadaBAwDGgSFvcY5OW.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://niftem.ac.in/storage/updates/1779260907_Corrigendum- Admissions 2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://niftem.ac.in/storage/updates/1779434382_ADMISSION PROSPECTUS Academic Session 2026–27 Programmes for Admission • B.Tech (FTM) • Integrate...(FT) + MBA • BBA (Hons) • M.Tech • M.Sc • MBA • Executive MBA • Ph.D. (Regular Early Ph.D.)-compressed-compressed.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://niftem.ac.in/storage/tenders/documents/tender_1782104577_Tender (4).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://niftem.ac.in/storage/tenders/documents/tender_1782208293_EOI.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://niftem.ac.in/storage/tenders/documents/tender_1783074049_EOI (1).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://niftem.ac.in/storage/tenders/documents/tender_1781673643_Tender (3).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S17
    resource: "https://niftem.ac.in/storage/uploads/media/dpJHsXBjTtvB4CcuBjnA09RC3FTsGyl5WLe8QUvU.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S18
    resource: "https://niftem.ac.in/storage/uploads/media/I7gZQtd0UagPukHLU2aBRTIbhsVxE387YTKTO6er.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S19
    resource: "https://www.niftem.ac.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Institute of Food Technology Entrepreneurship & Management (NIFTEM) — Eligibility

_Machine-imported from runs/row-572/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| educational level | yes | Eligibility varies by programme: For B.Tech, candidates must have passed class 12th and qualified JEE (Main)… |
| social category | yes | for MBA, a Bachelor's degree with minimum 50% aggregate marks (45% for SC/ST) or equivalent CGPA is required; |
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
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: hard
      source: S1
      confidence: medium
      detail: "for MBA, a Bachelor's degree with minimum 50% aggregate marks (45% for SC/ST) or equivalent CGPA is required;"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
```

Rule/concept references: [social-category](../../concepts/social-category.md)
