---
type: Rule Concept
title: State
description: Semantic meaning of applicant.state, district and rural/urban status in scheme rules.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.state` / `applicant.district` / `applicant.rural_urban_status`

## Semantics

- `applicant.state` — State/UT of residence (ISO 3166-2:IN style value,
  e.g. `IN-MH`). All 20 schemes are central schemes valid across `IN`,
  but several differ by area type or by state-level top-ups.
- `applicant.district` — district of residence (informational; drives
  ULB/State portal routing).
- `applicant.rural_urban_status` — `rural` | `urban`; hard for
  area-restricted schemes.

## Hard area-type rules in this bundle

| Scheme | Rule |
|---|---|
| [pmay-urban](../schemes/pmay-urban/eligibility.md) | rural_urban_status = urban (statutory towns / notified areas) |
| [pmay-gramin](../schemes/pmay-gramin/eligibility.md) | rural_urban_status = rural |
| [pm-svanidhi](../schemes/pm-svanidhi/eligibility.md) | urban vending area (ULB jurisdiction) |
| [pmfby](../schemes/pmfby/eligibility.md) | crop notified in the district/area for the season (conditional) |

## State-variant amounts (informational)

NSAP pensions: State Governments top-up the central share (₹200/₹300/₹500)
to different state amounts. The engine should state the central share and
flag `state_topup: varies` rather than storing per-state figures here.
PMMVY: some States run integrated maternity-benefit schemes (e.g.
Pradhan Mantri Matru Vandana Yojana + state schemes); central PMMVY
benefit remains as documented.

## Engine notes

All schemes carry `geographies: [IN]` at minimum; area-type rules ride on
`rural_urban_status`. Unknown location ⇒ `needs_information:
[applicant.state]`.
