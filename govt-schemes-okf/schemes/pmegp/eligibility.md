---
type: Government Scheme Eligibility
title: PMEGP — Eligibility
description: Deterministic eligibility dimensions and rules for PMEGP.
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
  - id: S2
    resource: https://www.kviconline.gov.in/pmegpeportal/jsp/eligibility_criteria.jsp
    title: PMEGP Eligibility Criteria (KVIC e-portal)
    author: KVIC
    last_modified: not_verified
---

# PMEGP — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | ≥18 years (hard) |
| gender | no | not a filter (special categories include women) |
| citizenship/residency | yes | Indian citizen (hard) |
| state | no | nationwide (State KVIB/DIC implementation) |
| district | no | not a filter |
| rural/urban | conditional | affects subsidy %, not eligibility |
| income | conditional | income-tax payers excluded (hard) |
| occupation | no | unemployed/applicant status not separately coded |
| employment status | no | not a filter |
| farmer status | no | farm-sector activity outside scheme |
| landholding | no | not a filter |
| business ownership | yes | new unit only (hard) |
| business type | yes | manufacturing/service micro unit (hard); trading excluded (hard) |
| student status | no | not a filter |
| educational level | conditional | VIII-pass (service >₹10L), X-pass (manufacturing >₹25L) (hard) |
| social category | conditional | special-category MMS rates; no eligibility gate |
| disability status | conditional | special-category MMS rates; no eligibility gate |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | not a filter |
| beneficiary under another scheme | yes | prior similar-scheme subsidy bars eligibility (hard) |
| previous benefit | yes | same as above |
| bank account | yes | required (hard prerequisite) |
| Aadhaar | yes | required for e-portal application (hard prerequisite) |
| scheme-specific | yes | one unit per beneficiary; EDP training after sanction |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 18
      type: hard
      source: S2
      confidence: high

    - rule_id: CTZ-001
      field: applicant.citizenship
      operator: equals
      value: IN
      type: hard
      source: S2
      confidence: high

    - rule_id: BIZ-001
      field: applicant.business.stage
      operator: equals
      value: greenfield
      type: hard
      source: S2
      confidence: high

    - rule_id: SEC-001
      field: applicant.business.sector
      operator: in
      value: [manufacturing, services]
      type: hard
      source: S2
      confidence: high

    - rule_id: LIM-001
      field: applicant.business.project_cost
      operator: less_than_or_equal
      value: 5000000
      type: hard
      condition: applicant.business.sector = manufacturing
      source: S3
      confidence: high

    - rule_id: LIM-002
      field: applicant.business.project_cost
      operator: less_than_or_equal
      value: 2000000
      type: hard
      condition: applicant.business.sector = services
      source: S3
      confidence: high

    - rule_id: EDU-001
      field: applicant.educational_level
      operator: greater_than_or_equal
      value: class_8
      type: hard
      condition: applicant.business.sector = services AND applicant.business.project_cost > 1000000
      source: S2
      confidence: high

    - rule_id: EDU-002
      field: applicant.educational_level
      operator: greater_than_semiqualitative
      value: class_10
      type: hard
      condition: applicant.business.sector = manufacturing AND applicant.business.project_cost > 2500000
      source: S2
      confidence: high
      note: operator is a placeholder for the ordered-education comparison; engines should implement an education-order operator

    - rule_id: TAX-001
      field: applicant.income_tax_payer
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: DUB-001
      field: applicant.prior_similar_govt_subsidy_beneficiary
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: ONE-001
      field: applicant.business.units_promoted
      operator: equals
      value: 0
      type: hard
      source: S2
      confidence: high

    - rule_id: BNK-001
      field: applicant.bank_account
      operator: exists
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: AAD-001
      field: applicant.aadhaar
      operator: exists
      value: true
      type: hard
      source: S1
      confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.business.stage
  - applicant.business.sector
  - applicant.business.project_cost
  - applicant.educational_level      # only if EDU-001/EDU-002 trigger
  - applicant.income_tax_payer
  - applicant.prior_similar_govt_subsidy_beneficiary
```

## Notes

- Trading activities are **excluded** from PMEGP (hard) [S2].
- Education thresholds apply only above the stated project-cost
  thresholds; below them, no formal education is required.
- SHGs/trusts/cooperative societies may apply if they have not received
  prior similar subsidies and comply with the new-unit rule.
