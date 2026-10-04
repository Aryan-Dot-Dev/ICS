---
type: Taxonomy
title: Applicant Types
description: Controlled vocabulary for the kind of applicant/unit a scheme serves.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Applicant Types

Closed vocabulary used in scheme frontmatter (`applicant_types`) and for
engine-side applicant classification. A scheme may list several.

| Term | Definition | Notes |
|---|---|---|
| `individual` | A single natural person applying in own name | default for insurance/pension |
| `household` | A family unit as the beneficiary unit | pm-kisan, pm-jay, pmay |
| `farmer` | Person/family engaged in cultivation of land | pm-kisan, pmfby |
| `student` | Person enrolled in a recognised educational institution | nsp, pms-sc, nmmss |
| `entrepreneur` | Person starting or running an enterprise | pmmy, stand-up-india, pmegp |
| `business` | Proprietary concern / micro or small enterprise / LLP / company | pmmy (Shishu–Tarun) |
| `artisan` | Traditional craftsperson in a notified trade | pm-vishwakarma |
| `worker` | Unorganised-sector worker, urban or rural | apy |
| `street-vendor` | Urban street vendor with certificate of vending or survey ID | pm-svanidhi |
| `senior-citizen` | Person above a scheme-defined senior age | nsap (60+), pm-jay (70+) |
| `woman` | Adult woman (18+) as named applicant | pmuy, ssy (guardian), pmmvy, stand-up-india (any-of) |
| `child` | Minor in whose name an account/benefit is held | ssy (girl < 10) |
| `widow` | Widowed woman within scheme age band | nsap (IGNWPS) |
| `pregnant-woman` | Pregnant or lactating mother | pmmvy |

### Additions (runs batch rows 1–600, imported 2026-10-02)

| Term | Definition | Notes |
|---|---|---|
| `institution` | Non-person applicant: incubator, company, cluster, university, lab, agency, ULB | row-1 (incubators), row-4 (cluster units), row-101 (atal tinkering labs) |
| `fisher` | Fisher, aquaculturist or fish-farming household | row-126 (FIDF), row-127 (Blue Revolution), row-159 (Fishermen welfare) |
| `weaver` | Handloom/weaving artisan and weaving unit | row-33 (TUFS), row-35 (NHDP), row-37 (Powertex) |
| `self-help-group` | SHG or federation of SHGs as the beneficiary unit | row-45 (DAY-NULM), row-29 (SAMPADA), row-2 (PADMA) |
