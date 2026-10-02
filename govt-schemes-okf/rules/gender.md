---
type: Rule Concept
title: Gender
description: Semantic meaning of applicant.gender and where it is a hard eligibility dimension.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.gender`

## Semantics

Gender of the applicant (or of the child, for SSY: the child must be a
girl). Values: `female` | `male` | `other` (values beyond the scheme's
own vocabulary must not be invented by the engine).

## Where gender is HARD in this bundle

| Scheme | Rule | Note |
|---|---|---|
| [pmuy](../schemes/pmuy/eligibility.md) | gender = female (applicant) | scheme names women as beneficiaries |
| [pmmvy](../schemes/pmmvy/eligibility.md) | gender = female (applicant) | maternity benefit |
| [ssy](../schemes/ssy/eligibility.md) | child.gender = female | account in girl child's name |
| [nsap-ignwps](../schemes/nsap/eligibility.md) | gender = female AND marital_status = widow | widow pension component |

## Where gender is SOFT / preference

- [pmay-urban](../schemes/pmay-urban/eligibility.md) — house preferably in the name of female member / joint ownership (soft, per PMAY-U guidelines)
- [stand-up-india](../schemes/stand-up-india/eligibility.md) — `any` branch: woman OR SC/ST (not a hard filter for women specifically)

## Engine notes

Never apply a gender rule not present in the scheme's own eligibility
rules. Transgender persons: only PMAY-U guidelines name them (preference
category) — elsewhere, gender-based exclusions do not exist unless
officially stated.
