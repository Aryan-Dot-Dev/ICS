---
type: Rule Concept
title: Landholding
description: Land-ownership and size semantics used by farm schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.land_ownership`

## Semantics

Ownership (or cultivation, where allowed) of agricultural land, per State
land records. PM-KISAN covers **all landholding farmer families
irrespective of size of landholding** (per revised operational
guidelines) — the historic "small & marginal (≤2 ha)" limit of the 2019
launch was superseded in June 2019. PMFBY premium/coverage attaches to the
insured area, not ownership.

## Machine fields

- `applicant.land_ownership` — boolean
- `applicant.land_size` — hectares (informational for PM-KISAN; not a filter)
- `applicant.land_record_ref` — record/khasi/patta reference for verification
- `applicant.landholder_type` — `individual` | `institutional` (institutional → exclusion, see [pm-kisan exclusions](../schemes/pm-kisan/exclusions.md))

## Historical (superseded)

- 2019 launch: "small and marginal landholder families, collective
  landholding up to 2 hectares" — **superseded** by extension to all
  landholding farmer families (June 2019). The engine must NOT apply the
  2-ha filter.

## Engine notes

`applicant.land_ownership = true` is the positive gate for PM-KISAN;
institutional ownership (companies, co-operatives, government bodies) is
an exclusion. Missing land status ⇒ `needs_information`.
