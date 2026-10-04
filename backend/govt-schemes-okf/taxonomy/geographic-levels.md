---
type: Taxonomy
title: Geographic Levels
description: Controlled vocabulary for administrative levels used in scheme geographies and location rules.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Geographic Levels

Vocabulary for `geographies` in frontmatter and for location fields in rules
(`applicant.state`, `applicant.district`, `applicant.rural_urban_status`).

## Government level

| Term | Definition |
|---|---|
| `central` | Government of India scheme; every scheme in this bundle |
| `state` | State-government scheme (none in this bundle; state add-ons exist alongside) |
| `district` | District-administered implementation of a central scheme |
| `local` | ULB / Panchayat / CSC-level delivery point |

## Coverage values for `geographies`

| Term | Definition |
|---|---|
| `IN` | Entire territory of India |
| `IN-rural` | Rural areas only (villages; PMAY-G selection is SECC rural households) |
| `IN-urban` | Statutory towns and notified areas (PMAY-U, PM SVANidhi operating areas) |
| `IN-<STATE-CODE>` | Specific state/UT (used in `state` rules only; state variants of central schemes, e.g. different state top-ups to NSAP pensions) |

## Notes

- The 20 curated schemes are all `central` schemes implemented through
  States/UTs; state portals implement but do not own eligibility.
- The runs batch (rows 1–600, imported 2026-10-02) adds **state-level**
  schemes (87 objects with `government_level: state`) that use
  `IN-<STATE-CODE>`, plus `IN-rural` / `IN-urban` scoping derived from the
  source `geographic_scope`. Codes follow the `IN-XX` values above.
- Rural/urban applicability is captured via `applicant.rural_urban_status`
  (values `rural` \| `urban`), not by separate scheme entries.
- PMAY-U 2.0 covers statutory towns per Census 2011 plus towns notified
  subsequently (source: pmay-urban.gov.in).
