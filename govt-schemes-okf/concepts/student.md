---
type: Beneficiary Concept
title: Student
description: Learners enrolled in recognised institutions, from Class 9 to postgraduate, served by scholarship schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Student

## Definition

A person enrolled in a recognised educational institution. Scholarship
eligibility additionally keys on: class/level, school type
(government/aided vs private for NMMSS), academic percentile/marks,
social category, and family income ceiling.

## Schemes linked to this concept

- [NSP / PM-USP Central Sector Scheme of Scholarship](../schemes/nsp/scheme.md) — top-merit Class-XII students in UG/PG, family income up to ₹4.5 lakh
- [Post-Matric Scholarship for SC Students](../schemes/pms-sc/scheme.md) — SC students post-matric, parental income up to ₹2.5 lakh
- [NMMSS](../schemes/nmmss/scheme.md) — Class 9 entrants from government/aided schools, income up to ₹3.5 lakh

All three apply via the [National Scholarship Portal](https://scholarships.gov.in/)
(one application, one disbursement platform; "one student, one bank account, one mobile").

## Engine notes

`applicant.student_status` and `applicant.educational_level` are hard
dimensions; see [student-status](../rules/student-status.md). Scholarship
application windows are annual and portal-declared — treat deadlines as
`informational`, sourced from the portal, never inferred.
