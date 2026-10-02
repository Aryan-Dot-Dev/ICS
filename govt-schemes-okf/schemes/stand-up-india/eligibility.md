---
type: Government Scheme Eligibility
title: Stand-Up India — Eligibility
description: Deterministic eligibility dimensions and rules for Stand-Up India.
scheme_id: SUI
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
    resource: https://www.standupmitra.in/
    title: Standup Mitra — Official portal
    author: SIDBI
    last_modified: not_verified
  - id: S2
    resource: https://financialservices.gov.in/
    title: Department of Financial Services — Stand-Up India
    author: DFS, Ministry of Finance
    last_modified: not_verified
---

# Stand-Up India — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | 18 years or above (hard) |
| gender | any-of | woman borrower OR SC/ST borrower (alternative branch) |
| citizenship/residency | implied | resident Indian entrepreneurs |
| state | no | nationwide (bank branches) |
| district | no | not a filter |
| rural/urban | no | both |
| income | no | no income ceiling in scheme |
| occupation | conditional | entrepreneur (greenfield) — no other occupation filter |
| employment status | no | not a filter |
| farmer status | no | not a filter (agri-allied activity allowed) |
| landholding | no | not a filter |
| business ownership | yes | greenfield/new venture only (hard) |
| business type | yes | manufacturing / services / trading / agri-allied (hard) |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | any-of | SC or ST branch of eligibility |
| disability status | no | not a filter |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | not a filter |
| beneficiary under another scheme | conditional | must not be a defaulter to any bank/FI (hard) |
| previous benefit | no | no bar on other scheme receipts |
| bank account | yes | required for operations (hard prerequisite) |
| Aadhaar | yes | KYC |
| scheme-specific | yes | bank credit appraisal (informational) |

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
      source: S1
      confidence: high

    - rule_id: BIZ-001
      field: applicant.business.stage
      operator: equals
      value: greenfield
      type: hard
      source: S1
      confidence: high

    - rule_id: SEC-001
      field: applicant.business.sector
      operator: in
      value: [manufacturing, services, trading, agri_allied]
      type: hard
      source: S1
      confidence: high

    - rule_id: DEF-001
      field: applicant.bank_defaulter
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high

    - rule_id: KYC-001
      field: applicant.kyc_complete
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high

  any:
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [sc, st]
      type: hard
      source: S1
      confidence: high

    - rule_id: GEN-001
      field: applicant.gender
      operator: equals
      value: female
      type: hard
      source: S1
      confidence: high
```

The `any:` block expresses the scheme's branch structure — an applicant
qualifies if they are **either** SC/ST **or** a woman [S1].

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.gender
  - applicant.business.stage
  - applicant.bank_defaulter
```

## Notes

- SC/ST claims require a caste certificate at documentation stage.
- No income criterion exists; the loan amount (₹10L–₹1Cr) and bank
  appraisal govern feasibility.
