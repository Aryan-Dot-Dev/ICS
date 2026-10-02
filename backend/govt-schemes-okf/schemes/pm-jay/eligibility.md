---
type: Government Scheme Eligibility
title: AB PM-JAY — Eligibility
description: Deterministic eligibility dimensions and rules for AB PM-JAY.
scheme_id: PM-JAY
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
    resource: https://pmjay.gov.in/
    title: AB PM-JAY official website
    author: National Health Authority
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2053883
    title: PIB — 70+ expansion of AB PM-JAY
    author: PIB
    last_modified: 2024-10-14
---

# AB PM-JAY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | any-of | 70+ universal branch (hard, conditional branch) |
| gender | no | no gender restriction |
| citizenship/residency | implied | resident families/individuals in India |
| state | yes | implemented in adopting States/UTs; state eligibility additions possible |
| district | no | not a filter |
| rural/urban | no | both (SECC covers rural+urban deprivation) |
| income | conditional | SECC-based deprivation, not a rupee ceiling; 70+ branch ignores income entirely [S2] |
| occupation | conditional | some occupational categories auto-included per NHA criteria |
| employment status | no | not a filter |
| farmer status | no | not a filter (landless included) |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | conditional | SC/ST etc. are part of SECC auto-inclusion criteria |
| disability status | conditional | part of SECC auto-inclusion criteria |
| marital/family status | no | family is the cover unit; no cap on family size |
| pregnancy/maternity | no | not a filter (maternity covered as treatment package) |
| household status | yes | family in eligibility database (hard branch) |
| beneficiary under another scheme | no | other scheme membership does not bar PM-JAY; note top-up interaction for 70+ [S2] |
| previous benefit | no | no bar |
| bank account | no | not required for treatment (cards link to Aadhaar identity) |
| Aadhaar | yes | required for e-KYC/verification (hard prerequisite) |
| scheme-specific | yes | name present in NHA/State eligibility database (hard) |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  any:
    - rule_id: DBS-001
      field: applicant.household.in_pmjay_eligibility_database
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high
      note: SECC 2011 deprivation criteria + State-specified auto-inclusion categories; verified against NHA database

    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 70
      type: hard
      source: S2
      confidence: high
      note: Ayushman Vay Vandana — all senior citizens 70+ irrespective of socio-economic status (approved 29.10.2024)

  all:
    - rule_id: RES-001
      field: applicant.resides_in_implementing_state
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: KYC-001
      field: applicant.aadhaar_ekyc_completed
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high
```

## Top-up interaction (conditional)

```yaml
conditional_benefit_structure:
  - condition: applicant.age >= 70 AND applicant.household.in_pmjay_eligibility_database
    effect: additional top-up cover up to Rs.5 lakh per year for the senior member [S2]
  - condition: applicant.age >= 70 AND NOT applicant.household.in_pmjay_eligibility_database
    effect: standalone Rs.5 lakh cover for the senior citizen [S2]
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.household.in_pmjay_eligibility_database
  - applicant.resides_in_implementing_state
```

The database check **cannot be resolved from user answers** — the engine
must direct verification to the official check (pmjay.gov.in / Ayushman
App / CSC) and mark the scheme `status: needs_information` until the
check is performed.

## Notes

- No income certificate, caste certificate or ration card is required
  by the central scheme as an eligibility test — database membership is
  the test.
- Some States run integrated models (e.g., state top-ups); verify state
  specifics before quoting.
