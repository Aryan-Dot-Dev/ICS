---
type: Beneficiary Concept
title: Senior Citizen
description: Older persons above scheme-defined senior ages (60+ or 70+), served by pension and health-cover schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Senior Citizen

## Definition

An older person. The senior-age threshold is scheme-specific — do not
generalise:

- **60 years**: NSAP old-age pension entry age (60–79 → ₹200/month central share; 80+ → ₹500/month)
- **70 years**: AB PM-JAY universal health cover (Ayushman Vay Vandana) for all senior citizens aged 70+, irrespective of income
- **60 years**: APY pension commencement age (entry must be 18–40)

## Schemes linked to this concept

- [NSAP](../schemes/nsap/scheme.md) — IGNOAPS old-age pension for BPL elderly
- [Ayushman Bharat PM-JAY](../schemes/pm-jay/scheme.md) — universal ₹5 lakh family cover for 70+ (top-up for already-covered families)
- [APY](../schemes/apy/scheme.md) — guaranteed pension from age 60 (join before 40)

## Engine notes

`applicant.age` with scheme-specific operator/value; see
[age](../rules/age.md) and [senior-citizen applicant type](../taxonomy/applicant-types.md).
