---
type: Beneficiary Concept
title: Farmer
description: A person or family engaged in cultivation of agricultural land; the beneficiary unit of farm-sector schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Farmer

## Definition

For PM-KISAN, the beneficiary unit is a **landholding farmer family** — a
family as defined by the State/UT that owns cultivable land according to
land records of the concerned State/UT, with the benefit paid to the male
head in the absence of which the female head is covered (per PM-KISAN
operational guidelines). For PMFBY, farmers (including sharecroppers and
tenant farmers, subject to State notification) growing **notified crops in
notified areas** are eligible.

Eligibility-relevant machine fields are defined in
[farmer-status](../rules/farmer-status.md) and
[landholding](../rules/landholding.md).

## Schemes linked to this concept

- [PM-KISAN](../schemes/pm-kisan/scheme.md) — requires landholding farmer family (institutional exclusions apply, see [exclusions](../schemes/pm-kisan/exclusions.md))
- [PMFBY](../schemes/pmfby/scheme.md) — requires growing notified crop in notified area; sharecroppers/tenants where State so provides

## Engine notes

Self-declared farming is **not** enough for PM-KISAN: land-record status is
verified against State land records. If land ownership is unknown, emit
`needs_information` with `missing_fields: [applicant.land_ownership]`.
