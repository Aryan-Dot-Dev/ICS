---
type: "Government Scheme Exclusions"
title: "Export Oriented Unit (EOU) Scheme — Exclusions"
description: "Structured disqualifiers for ROW-138."
scheme_id: "ROW-138"
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
    resource: "https://www.dgft.gov.in/CP/?opt=EOU"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Export Oriented Unit (EOU) Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Must not be engaged in any activity listed in the negative list of exports as per the Foreign Trade Policy"
    effect: ineligible
    source: S1
    confidence: medium
```