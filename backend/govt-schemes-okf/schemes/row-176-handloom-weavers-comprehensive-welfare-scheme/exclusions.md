---
type: "Government Scheme Exclusions"
title: "Handloom Weavers Comprehensive Welfare Scheme — Exclusions"
description: "Structured disqualifiers for ROW-176."
scheme_id: "ROW-176"
okf_version: "0.2"
generated:
  by: "process:runs-okf-generator"
  at: 2026-10-02
verified:
  - by: "process:runs-import-check"
    at: 2026-10-02
    note: "field presence and citations re-checked against the source ai_summary.json; content not re-verified against the live portal"
status: draft
stale_after: 2026-12-31
sources:
  - id: S1
    resource: "https://handlooms.nic.in/assets/img/Handloom Schemes/NHDP_English Compendium_2024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://handlooms.nic.in/assets/img/Statistics/2486.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://handlooms.nic.in/assets/img/About Us/Vision and Mission/vision_and_mission.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://handlooms.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Handloom Weavers Comprehensive Welfare Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Land cost is excluded from GoI funding for certain interventions"
    effect: ineligible
    source: S1
    confidence: medium
```