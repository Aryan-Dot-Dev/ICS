---
type: Government Scheme
title: NSP / PM-USP CSSS (National Scholarship Portal — Central Sector Scheme of Scholarship)
description: The National Scholarship Portal single-window platform; flagship central scheme documented here is the PM-USP Central Sector Scheme of Scholarship for college and university students.
scheme_id: NSP-CSSS
official_name: National Scholarship Portal (NSP); Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship for College and University Students (CSSS)
government_level: central
ministry: Ministry of Education (Department of Higher Education) — for CSSS; NSP is operated under MeitY/NeGD coordination with multiple ministries
status: stable
categories:
  - education
benefit_types:
  - scholarship
target_groups:
  - meritorious_college_students
  - students_from_low_income_families
geographies:
  - IN
applicant_types:
  - student
eligibility_version: "2026-09"
effective_from: 2008-01-01
effective_until: null
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://scholarships.gov.in/
    title: National Scholarship Portal — official portal
    author: Government of India (NeGD/MeitY platform; ministries' schemes)
    last_modified: not_verified
  - id: S2
    resource: https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf
    title: PM-USP Central Sector Scheme of Scholarship for College and University Students — Guidelines (PDF)
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
  - id: S3
    resource: https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf
    title: PM-USP CSSS — FAQ (PDF)
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
---

# NSP / PM-USP CSSS

## Overview

The **National Scholarship Portal** ([scholarships.gov.in](https://scholarships.gov.in/))
is the Government of India's single-window digital platform for
central and most state scholarship schemes — "one student, one bank
account, one mobile" DBT disbursement. This knowledge object documents
the portal AND its flagship Department of Higher Education scheme, the
**PM-USP Central Sector Scheme of Scholarship (CSSS)** for college and
university students: scholarship for meritorious students from low-
income families pursuing UG/PG regular courses — historically ₹10,000/
year (UG) and ₹20,000/year (PG), with revised rates (₹12,500/₹20,000
levels reported in recent guidelines — see [benefits.md](benefits.md)
and the verification note) [S2][S3].

## Objective

(CSSS) To provide financial assistance to meritorious students from
poor families to meet part of day-to-day expenses while pursuing
college/university studies, and to reward merit with means-tested
support. (NSP) To provide a unified, DBT-first application and
disbursement platform for scholarships.

## Target Beneficiaries

Students above the 80th percentile of successful Class-XII candidates
in their Board stream (per CSSS criteria), enrolled in regular UG/PG
degree courses, with gross parental/family income up to ₹4.5 lakh per
annum [S2][S3].

Concept links: [student](../../concepts/student.md) ·
[low-income-household](../../concepts/low-income-household.md)

## Key Features

- Single-window application across central schemes (CSSS, PM-YASASVI
  routes, AICTE/UGC schemes, etc.) and state schemes [S1]
- DBT into Aadhaar-linked student bank accounts; NSP OTR (One Time
  Registration) introduced in NSP 2.2
- CSSS: merit (Class-XII percentile) + income ceiling (₹4.5L) + renewal
  on ≥50% marks in prior annual exam (per FAQ) [S2][S3]
- Annual application windows (typically Aug–Dec as notified each year)
- Institutional verification (college/state nodal) then ministry
  approval

## Eligibility

Summary — see [eligibility.md](eligibility.md). CSSS: UG/PG regular
student; top-merit Class-XII entry; family income ≤ ₹4.5L; renewal
rules apply.

## Benefits

Scholarship amounts per course-year (see
[benefits.md](benefits.md) + verification note).

## Documents

Aadhaar, income certificate, previous exam marksheets, institution
details, bank account (student's own). Details:
[documents.md](documents.md).

## Application

Online only, on [scholarships.gov.in](https://scholarships.gov.in/)
during the notified window. Details: [application.md](application.md).

## Important Conditions

- CSSS is for **first-degree UG and PG regular courses** (professional
  courses under specific terms); diploma-only students are generally
  excluded per guidelines
- Renewal requires ≥50% in the prior year's exam and course
  continuation
- The scholarship is **not** available alongside certain other
  scholarships (double-dipping exclusions per guidelines)

## Exclusions

Income above ceiling; non-regular/distance students; repeat-year
failures; other-scholarship overlaps. Structured list:
[exclusions.md](exclusions.md).

## Related Schemes

- [PMS-SC](../pms-sc/scheme.md) — category scholarship (SC students)
- [NMMSS](../nmmss/scheme.md) — school-stage (Class 9–12) scholarship

## Official Sources

1. [National Scholarship Portal](https://scholarships.gov.in/) [S1]
2. [PM-USP CSSS Guidelines (PDF)](https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf) [S2]
3. [PM-USP CSSS FAQ (PDF)](https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf) [S3]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_scholarship_for_college
    - fund_higher_education
    - reduce_education_cost
  keywords:
    - national scholarship portal
    - nsp scholarship
    - csss
    - pm usp scholarship
    - college scholarship 20000
  semantic_topics:
    - higher education funding
    - merit scholarships
    - student financial aid
```

## Verification note (recorded conflict)

Sources reviewed report **two rate structures** for CSSS: the
long-standing ₹10,000/₹20,000 (UG/PG) figures and newer ₹12,500 (UG)/
₹20,000 (PG) figures in recent guideline documents. Per bundle policy,
[benefits.md](benefits.md) records both with provenance and marks the
differences for human review rather than silently choosing one.
