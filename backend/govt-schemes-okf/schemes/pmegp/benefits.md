---
type: Government Scheme Benefits
title: PMEGP — Benefits
description: Margin-money subsidy matrix and credit structure for PMEGP.
scheme_id: PMEGP
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
status: stable
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp
    title: PMEGP e-Portal (KVIC)
    author: KVIC
    last_modified: not_verified
  - id: S3
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1940925
    title: PIB — PMEGP salient features
    author: Press Information Bureau
    last_modified: not_verified
---

# PMEGP — Benefits

## Margin-money subsidy (MMS) matrix

Beneficiary categories: General, Special (SC/ST/women/OBC/minorities/
ex-servicemen/physically handicapped/NER etc.), plus location
(urban/rural) [S1][S3].

```yaml
benefits:
  - benefit_id: MMS-001
    type: subsidy
    name: Margin-money subsidy — General, urban
    amount:
      value: 15
      unit: percent_of_project_cost
      currency: INR
    conditions: applicant category = general; area = urban
    source: S1
    confidence: high

  - benefit_id: MMS-002
    type: subsidy
    name: Margin-money subsidy — General, rural
    amount:
      value: 25
      unit: percent_of_project_cost
      currency: INR
    conditions: applicant category = general; area = rural
    source: S1
    confidence: high

  - benefit_id: MMS-003
    type: subsidy
    name: Margin-money subsidy — Special category, urban
    amount:
      value: 25
      unit: percent_of_project_cost
      currency: INR
    conditions: applicant in special categories; area = urban
    source: S1
    confidence: high

  - benefit_id: MMS-004
    type: subsidy
    name: Margin-money subsidy — Special category, rural
    amount:
      value: 35
      unit: percent_of_project_cost
      currency: INR
    conditions: applicant in special categories; area = rural
    source: S1
    confidence: high

  - benefit_id: LOAN-001
    type: loan
    name: Bank credit (balance of project cost)
    amount:
      value: project_cost_minus_beneficiary_share
      currency: INR
    collateral: per bank norms (CGTMSE-eligible micro units as applicable)
    interest_rate: as per bank policy
    conditions:
      - sanction by lending bank
      - EDP training completed after sanction (per guidelines)
    source: S1
    confidence: high

  - benefit_id: OWN-001
    type: grant
    name: Beneficiary own contribution
    amount:
      value: 5_or_10
      unit: percent_of_project_cost
      currency: INR
      note: 5% special category, 10% general (urban+rural) — per scheme norms [S1][S3]
    conditions: applicant's margin into the project
    source: S1
    confidence: high
```

## Notes

- MMS is **back-ended**: credited into the borrower's term-loan account
  after the unit is set up and per guidelines after EDP training.
- The matrix covers the four MMS rates only; absolute rupee amounts
  depend on project cost — the engine must compute, not store, them.
- Project-cost caps: ₹50 lakh manufacturing / ₹20 lakh service [S3].
