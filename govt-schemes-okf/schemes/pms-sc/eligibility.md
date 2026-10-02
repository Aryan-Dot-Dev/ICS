---
type: Government Scheme Eligibility
title: PMS-SC — Eligibility
description: Deterministic eligibility dimensions and rules for PMS-SC.
scheme_id: PMS-SC
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
    resource: https://socialjustice.gov.in/
    title: MoSJE — PMS-SC pages
    author: Ministry of Social Justice and Empowerment
    last_modified: not_verified
  - id: S3
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2067373
    title: PIB — scholarship reference
    author: PIB
    last_modified: 2024-10-23
---

# PMS-SC — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | conditional | course-dependent; no blanket age bar (scheme age ranges apply per course group; verify per State notification) |
| gender | no | not a filter |
| citizenship/residency | yes | Indian national; domicile of the implementing State (hard) |
| state | yes | State of domicile implements; rates/state variations apply |
| district | no | not a filter |
| rural/urban | no | both |
| income | yes | parental income ≤ ₹2.5 lakh/yr (hard) [S3] |
| occupation | no | not a filter |
| employment status | conditional | employed students: combined self+parental income ≤ ₹2.5L per guidelines [S1] |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | yes | enrolled full-time in recognised post-matric course (hard) |
| educational level | yes | post-matric onwards (Class XI through post-doctoral per scheme lists) (hard) |
| social category | yes | SC (certified) (hard) |
| disability status | conditional | PwD-specific provisions exist (e.g., separate PwD scholarships); PMS-SC itself not restricted |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | conditional | parental income is the household test |
| beneficiary under another scheme | yes | no other overlapping scholarship (hard) |
| previous benefit | conditional | renewal conditions (attendance/progress) apply |
| bank account | yes | student's own Aadhaar-linked account (hard) |
| Aadhaar | yes | NSP requirement (hard) |
| scheme-specific | yes | course-eligibility lists per guidelines |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: SOC-001
      field: applicant.social_category
      operator: equals
      value: sc
      type: hard
      source: S1
      confidence: high

    - rule_id: INC-001
      field: applicant.household_income
      operator: less_than_or_equal
      value: 250000
      comparison_basis: parental_annual_all_sources
      type: hard
      source: S3
      confidence: high
      note: employed students — self+parental income combined ≤ Rs.2.5L per guidelines

    - rule_id: STU-001
      field: applicant.student_status
      operator: equals
      value: enrolled
      type: hard
      source: S1
      confidence: high

    - rule_id: LVL-001
      field: applicant.educational_level
      operator: in
      value: [class_11, class_12, undergraduate, postgraduate, mphil, phd, diploma_post_matric, professional]
      type: hard
      source: S1
      confidence: high
      note: recognised post-matric courses per the scheme's course lists

    - rule_id: DOM-001
      field: applicant.state_domicile
      operator: exists
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: DUP-001
      field: applicant.other_overlapping_scholarship
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high

    - rule_id: BNK-001
      field: applicant.bank_account_aadhaar_linked
      operator: is_true
      value: true
      type: hard
      source: S2
      confidence: high

    - rule_id: AAD-001
      field: applicant.aadhaar
      operator: exists
      value: true
      type: hard
      source: S2
      confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.household_income
  - applicant.educational_level
  - applicant.social_category_certificate_status
```

## Notes

- The parental income test uses the **income certificate** from the
  competent authority; self-declaration routes exist per State — verify
  current-year practice.
- Course-eligibility (which courses qualify) is defined in the scheme's
  annexures; the engine should treat unusual courses as
  `needs_information`.
