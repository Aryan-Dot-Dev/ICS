---
type: Rule Concept
title: Income
description: Semantic meaning of household/applicant income fields, ceilings and their comparison bases.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.household_income`

## Semantics

Gross annual income **from all sources** unless the scheme says otherwise.
Two machine fields:

- `applicant.household_income` — number, INR per annum
- `applicant.household_income.comparison_basis` — one of
  `all_sources_family` | `parental` | `self_and_parental` | `self` |
  `declaration_based` | `certificate_based`

A ceiling is valid **only** with its basis: e.g. NSP-CSSS uses parental/
family gross income ≤ ₹4.5 lakh (certificate), while PMUY uses a poor-
household **declaration** rather than an income figure.

## Ceilings in this bundle (verified)

| Scheme | Ceiling | Basis | Source |
|---|---|---|---|
| [nsp-csss](../schemes/nsp/eligibility.md) | ≤ ₹4,50,000/yr | parental/family gross | Guidelines_DOHE_CSSS.pdf (scholarships.gov.in) |
| [pms-sc](../schemes/pms-sc/eligibility.md) | ≤ ₹2,50,000/yr | parental (self+parental for employed students) | PMS-SC 2020 revised guidelines |
| [nmmss](../schemes/nmmss/eligibility.md) | ≤ ₹3,50,000/yr | parental, all sources | NMMSS FAQ (scholarships.gov.in) |
| [pmmvy](../schemes/pmmvy/eligibility.md) | exclude income-tax-payer households | membership test | PMMVY guidelines |
| [nsap](../schemes/nsap/eligibility.md) | BPL/SECC-based, not a rupee ceiling | list-based | NSAP/PIB |
| [pmegp](../schemes/pmegp/eligibility.md) | conditions on EDP training/state rules vary | conditional | KVIC portal |

## Engine notes

- Income ceilings change via Government orders — these fields carry the
  shortest `stale_after` and quarterly review.
- Missing income with a hard ceiling ⇒ `needs_information:
  [applicant.household_income]`.
- Never convert a declaration-based test into a certificate-based test.
