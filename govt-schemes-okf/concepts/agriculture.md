---
type: Beneficiary Concept
title: Agriculture
description: The domain of crop cultivation and farm livelihoods that several central schemes serve.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Agriculture

## Definition

Farming as a livelihood domain: cultivation of land, growing of crops
(food crops, oilseeds, commercial and horticultural crops), and the
income-security and risk-management needs that arise from it.

## Schemes linked to this concept

- [PM-KISAN](../schemes/pm-kisan/scheme.md) — annual income support to landholding farmer families
- [PMFBY](../schemes/pmfby/scheme.md) — crop insurance against natural perils

## Engine notes

Agriculture-related user goals (e.g. "protect my crop", "support for
farming income") map to schemes above via their `discovery` metadata.
Whether a specific user is a [farmer](farmer.md) is an eligibility
question answered by [farmer-status](../rules/farmer-status.md) and
[landholding](../rules/landholding.md) rules — never assumed.
