---
type: Beneficiary Concept
title: Person with Disability
description: Persons with benchmark disabilities as a beneficiary class across social-security and housing schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Person with Disability

## Definition

A person with a disability as certified under the Rights of Persons with
Disabilities Act, 2016 (benchmark disability ≥ 40% where a certificate is
required). In this bundle, disability appears mainly as (a) a priority/
preference attribute in housing and (b) a component category of NSAP.

## Schemes linked to this concept

- [NSAP–IGNDPS](../schemes/nsap/scheme.md) — ₹300/month central pension for BPL persons with severe/multiple disabilities in the working age group (18–79)
- [PMAY-U / PMAY-G](../schemes/pmay-urban/scheme.md) — preference to persons with disabilities in beneficiary selection
- [PMSBY](../schemes/pmsby/scheme.md) — accidental-death/disability cover (the scheme insures against disability; pre-existing total disability affects risk cover, per policy terms)

## Engine notes

`applicant.disability_status` is a hard input for IGNDPS (needs
certificate) and a soft/preference input for PMAY. Disability pension
amounts and criteria vary by State top-up; central share is ₹300/month
(source: PIB/NSAP material).
