---
type: Government Scheme Eligibility
title: NMMSS — Eligibility
description: Deterministic eligibility dimensions and rules for NMMSS.
scheme_id: NMMSS
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
    resource: https://scholarships.gov.in/public/FAQ/NMSSS_FAQ.pdf
    title: NMMSS FAQ (NSP)
    author: Department of School Education & Literacy, Ministry of Education
    last_modified: not_verified
---

# NMMSS — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | no | class-based, not age-based |
| gender | no | not a filter |
| citizenship/residency | yes | Indian national; State quota via exam |
| state | yes | State/UT exam and quota govern selection (hard) |
| district | no | not a filter |
| rural/urban | no | both (school-type is the filter) |
| income | yes | parental income ≤ ₹3.5 lakh/yr (hard) [S1] |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | yes | enrolled (hard) |
| educational level | yes | Class 9 entry; Class 9–12 continuation (hard) |
| institution type | yes | government / government-aided / local-body school (hard) [S1] |
| social category | conditional | SC/ST/PwD mark relaxations (not an eligibility gate) |
| disability status | conditional | relaxation in marks criterion |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | income is the household test |
| beneficiary under another scheme | yes | no other scholarship with overlapping coverage (hard) |
| previous benefit | conditional | continuation requires ≥55% marks each year (relaxations apply) |
| bank account | yes | student's own Aadhaar-linked account (hard) |
| Aadhaar | yes | NSP requirement (hard) |
| scheme-specific | yes | NMMSS exam qualification (hard) |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: INS-001
      field: applicant.institution_type
      operator: in
      value: [government, government_aided, local_body]
      type: hard
      source: S1
      confidence: high

    - rule_id: LVL-001
      field: applicant.educational_level
      operator: in
      value: [class_9, class_10, class_11, class_12]
      type: hard
      source: S1
      confidence: high

    - rule_id: EXM-001
      field: applicant.nmmss_exam_qualified
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high
      note: state-conducted MAT+SAT examination for Class 9 entry

    - rule_id: MRK-001
      field: applicant.class8_marks_percent
      operator: greater_than_or_equal
      value: 55
      type: hard
      source: S1
      confidence: high
      note: SC/ST/PwD relaxations per norms (relaxation typically to 50%)

    - rule_id: INC-001
      field: applicant.household_income
      operator: less_than_or_equal
      value: 350000
      comparison_basis: parental_annual_all_sources
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
  - applicant.institution_type
  - applicant.nmmss_exam_qualified
  - applicant.household_income
  - applicant.class8_marks_percent
```

## Notes

- Exam qualification is decided by the State's exam cycle — the engine
  must treat this as `needs_information` until results exist; it cannot
  be predicted.
- Continuation (Class 10–12) requires ≥55% each year with relaxations
  and continued government-school enrolment [S1].
