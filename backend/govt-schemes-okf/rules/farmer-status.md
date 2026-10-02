---
type: Rule Concept
title: Farmer Status
description: How 'farmer' is established for scheme purposes (land records, cultivation, sharecropping/tenancy).
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.farmer_status`

## Semantics

Whether the applicant (or family) is a farmer **for the specific scheme's
definition**. Two distinct establishments exist in this bundle:

1. **Landholding-based** (PM-KISAN): family ownership of cultivable land
   per State/UT land records. See [landholding](landholding.md).
2. **Cultivation-based** (PMFBY): person cultivating a notified crop in a
   notified area — includes **sharecroppers and tenant farmers** where
   the State so provides in its notification.

## Machine fields

- `applicant.farmer_status` — `landholding_farmer` |
  `cultivating_farmer` | `sharecropper` | `tenant_farmer` | `no`
- `applicant.land_ownership` — boolean + land-record reference
- `applicant.cultivated_crop` / `applicant.crop_season` — PMFBY inputs

## Engine notes

Do not infer `farmer_status = yes` from income, location or occupation
self-declaration alone. PM-KISAN requires land-record verification; PMFBY
requires the crop to be **notified** in the area for the season
(conditional hard rule). Missing land status ⇒ `needs_information:
[applicant.land_ownership]`.
