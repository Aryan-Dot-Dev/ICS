---
type: Government Scheme Eligibility
title: NSP / PM-USP CSSS — Eligibility
description: Deterministic eligibility dimensions and rules for the CSSS scheme on NSP.
scheme_id: NSP-CSSS
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
    resource: https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf
    title: PM-USP CSSS Guidelines
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
  - id: S3
    resource: https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf
    title: PM-USP CSSS FAQ
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
---

# NSP / PM-USP CSSS — Eligibility

(CSSS scheme; the NSP portal itself has no eligibility — it hosts
schemes.)

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | no | no age criterion in guidelines |
| gender | no | not a filter |
| citizenship/residency | yes | Indian national (hard) |
| state | yes | any State/UT (Board percentile computed per Board) |
| district | no | not a filter |
| rural/urban | no | both |
| income | yes | gross parental/family income ≤ ₹4.5 lakh/yr (hard) [S2][S3] |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | yes | enrolled in regular UG/PG degree course (hard) |
| educational level | yes | UG year-1 entry via Class-XII merit; PG continuation; renewal ≥50% (hard) |
| social category | no | not a filter for CSSS (category schemes exist separately) |
| disability status | no | not a filter (PwD quota may exist in other schemes) |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | income is the household test |
| beneficiary under another scheme | yes | cannot hold other central scholarships with overlapping coverage (hard per guidelines) |
| previous benefit | conditional | renewal requires passing with ≥50% and continued enrolment |
| bank account | yes | student's own Aadhaar-linked account (hard) |
| Aadhaar | yes | NSP OTR/Aadhaar (hard) |
| scheme-specific | yes | Class-XII percentile rank ≥ 80th percentile of the Board stream (hard) [S3] |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: CTZ-001
      field: applicant.citizenship
      operator: equals
      value: IN
      type: hard
      source: S2
      confidence: high

    - rule_id: STU-001
      field: applicant.student_status
      operator: equals
      value: enrolled
      type: hard
      source: S2
      confidence: high

    - rule_id: LVL-001
      field: applicant.educational_level
      operator: in
      value: [undergraduate, postgraduate]
      type: hard
      source: S2
      confidence: high
      note: regular degree courses; professional courses per guidelines; distance-mode excluded

    - rule_id: MRK-001
      field: applicant.class12_percentile_rank
      operator: greater_than_or_equal
      value: 80
      type: hard
      source: S3
      confidence: high
      note: "above 80th percentile" of successful candidates in the relevant stream of the Board

    - rule_id: INC-001
      field: applicant.household_income
      operator: less_than_or_equal
      value: 450000
      comparison_basis: parental_family_gross_annual
      type: hard
      source: S2
      confidence: high

    - rule_id: REN-001
      field: applicant.previous_year_marks_percent
      operator: greater_than_or_equal
      value: 50
      type: hard
      condition: scholarship_stage = renewal
      source: S3
      confidence: high

    - rule_id: DUP-001
      field: applicant.other_overlapping_scholarship
      operator: is_false
      value: false
      type: hard
      source: S2
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
  - applicant.class12_percentile_rank
  - applicant.household_income
  - applicant.educational_level
  - applicant.other_overlapping_scholarship
```

## Notes

- The 80th-percentile criterion is evaluated against **the student's
  own Board/stream** distribution — the engine must not compare across
  boards.
- Admission-year rules (scholarship from first year of UG after Class
  XII in the qualifying year) are defined in the guidelines; gap-year
  cases need review against the current-year notification.
