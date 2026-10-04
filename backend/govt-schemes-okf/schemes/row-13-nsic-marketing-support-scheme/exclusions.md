---
type: "Government Scheme Exclusions"
title: "NSIC Marketing Support Scheme — Exclusions"
description: "Structured disqualifiers for ROW-13."
scheme_id: "ROW-13"
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
    resource: "https://nsic.co.in/Schemes/MarketingFacilitation"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.nsic.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Marketing Support Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Units engaging in trading activities without value addition, packing, or branding are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
```