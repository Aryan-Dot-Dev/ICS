---
type: Rule Concept
title: Occupation
description: Semantic meaning of applicant.occupation and the occupation-gated schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.occupation`

## Semantics

Principal occupation of the applicant. Controlled values used in this
bundle: `farmer` | `farm_worker` | `artisan` | `street_vendor` |
`entrepreneur` | `student` | `wage_worker` | `salaried` | `self_employed`
| `homemaker` | `any`.

## Occupation-gated schemes

| Scheme | Occupation rule |
|---|---|
| [pm-kisan](../schemes/pm-kisan/eligibility.md) | institutional exclusion: income-tax payers & institutional landholders are out; occupation itself is `farmer` via landholding |
| [pmfby](../schemes/pmfby/eligibility.md) | farmer/sharecropper/tenant growing notified crop (conditional on notification) |
| [pm-vishwakarma](../schemes/pm-vishwakarma/eligibility.md) | artisan in one of 18 notified trades; self-employed, not salaried |
| [pm-svanidhi](../schemes/pm-svanidhi/eligibility.md) | street vendor with vending documentation |
| [pmmy](../schemes/pmmy/eligibility.md) | non-farm enterprise activity (micro/small) |
| [stand-up-india](../schemes/stand-up-india/eligibility.md) | greenfield entrepreneur (SC/ST or woman) |
| [pmegp](../schemes/pmegp/eligibility.md) | new micro-enterprise promoter |

## Engine notes

Occupation claims need supporting status (vending certificate, trade
registration, land record). When absent ⇒ `needs_information`.
`applicant.occupation` is also the bridge to concepts
[artisan](../concepts/artisan.md),
[street-vendor](../concepts/street-vendor.md),
[entrepreneur](../concepts/entrepreneur.md),
[farmer](../concepts/farmer.md).
