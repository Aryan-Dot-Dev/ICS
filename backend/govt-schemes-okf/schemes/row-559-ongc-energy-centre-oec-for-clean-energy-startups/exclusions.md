---
type: "Government Scheme Exclusions"
title: "ONGC Energy Centre (OEC) for Clean Energy Startups — Exclusions"
description: "Structured disqualifiers for ROW-559."
scheme_id: "ROW-559"
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
    resource: "https://ongcenergy.com"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ONGC Energy Centre (OEC) for Clean Energy Startups — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The startup must be registered under the Companies Act, 2013, or as an LLP or partnership firm, and should not be more than 5 years old at the time of application."
    effect: ineligible
    source: S1
    confidence: medium
```