---
type: Beneficiary Concept
title: Social Category (SC / ST / OBC / Minorities / EBC / DNT)
description: Constitutionally recognised social categories that gate category-specific schemes and preferences.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Social Category

## Definition

Caste/community classification recognised for scheme purposes:
Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes
(OBC), Economically Backward Classes among non-SC/ST (EBC), De-notified,
Nomadic and Semi-Nomadic Tribes (DNT), and Minorities. Category claims
require official certificates; the engine must treat unverified category
claims as missing information.

## Schemes linked to this concept

- [Stand-Up India](../schemes/stand-up-india/scheme.md) — SC or ST borrower (any-of with woman)
- [Post-Matric Scholarship for SC Students](../schemes/pms-sc/scheme.md) — SC students only
- [PMAY-U / PMAY-G](../schemes/pmay-urban/scheme.md) — preference to SC/ST/OBC/minorities in selection

OBC/EBC/DNT post-matric scholarships run under PM-YASASVI (Ministry of
Social Justice & Empowerment) — adjacent to but **not** among the 20
schemes in this bundle; link if the engine later extends.

## Engine notes

`applicant.social_category in [sc]` is the hard rule for PMS-SC;
certificate status (`applicant.social_category_certificate`) is a
required document, not an eligibility rule per se.
