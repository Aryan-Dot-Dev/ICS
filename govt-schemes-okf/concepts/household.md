---
type: Beneficiary Concept
title: Household
description: The family/household as the beneficiary unit, with scheme-specific definitions of membership.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Household

## Definition

The family unit that receives the benefit. Definitions differ by scheme
and must not be mixed:

| Scheme | Household definition (summary) |
|---|---|
| [PM-KISAN](../schemes/pm-kisan/scheme.md) | Landholding farmer family as defined by State/UT land records; benefit to head (male, else female) |
| [PM-JAY](../schemes/pm-jay/scheme.md) | Family per SECC database; ₹5 lakh per family per year; 70+ individuals added universally |
| [PMAY-U](../schemes/pmay-urban/scheme.md) | Beneficiary family = husband, wife, unmarried sons and/or unmarried daughters; no pucca house anywhere in India; adult earning member may be a separate household |
| [PMUY](../schemes/pmuy/scheme.md) | One LPG connection per household (no other OMC connection in the same household) |
| [PMMVY](../schemes/pmmvy/scheme.md) | Mother as recipient within the household; excludes income-tax-paying families |

## Engine notes

`applicant.household` sub-fields used in rules: `has_pucca_house`,
`has_lpg_connection`, `household_income`, `secc_inclusion`,
`income_tax_payer_member`, `family_size`. When the engine cannot establish
household composition, emit `needs_information` rather than assuming.
