---
type: Beneficiary Concept
title: Low-Income Household
description: Households below scheme-defined poverty or income thresholds; the target population of welfare schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Low-Income Household

## Definition

A family/household whose economic status falls under a scheme-specific
threshold. There is **no single universal definition** — each scheme
designates its population differently, and the engine must never conflate
them:

| Mechanism | Example schemes in this bundle |
|---|---|
| SECC 2011 deprivation criteria / BPL lists | pm-jay (eligibility base), nsap, pmay-gramin |
| Deprivation declaration (self-declaration formats) | pmuy (poor-household declaration), nsap state variants |
| Family income ceiling (annual, from all sources) | nsp-csss ₹4.5L, pms-sc ₹2.5L, nmmss ₹3.5L, pmegp (income-linked conditions), pmmvy (excl. income-tax payees) |
| Caste/category-based income ceiling | stand-up-india (no income cap; SC/ST/woman identity) |

## Schemes linked to this concept

- [Ayushman Bharat PM-JAY](../schemes/pm-jay/scheme.md) — SECC-based families + universal 70+ cover
- [NSAP](../schemes/nsap/scheme.md) — BPL-linked pensions
- [PMMVY](../schemes/pmmvy/scheme.md) — excludes income-tax-paying families
- [Scholarships](../schemes/nsp/scheme.md) — income ceilings per scheme

## Engine notes

`applicant.household_income` with the correct `comparison_basis` is the
most misused field in the engine. Always carry the scheme's own ceiling in
the rule `value` and cite the source. Missing income ⇒
`needs_information`.
