---
type: "Government Scheme Exclusions"
title: "NGO Darpan – CSR Fund Access Portal — Exclusions"
description: "Structured disqualifiers for ROW-498."
scheme_id: "ROW-498"
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
    resource: "https://ngodarpan.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NGO Darpan – CSR Fund Access Portal — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "NPOs are strictly prohibited from using the NITI Aayog name/logo or the National Emblem in any manner;"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "unauthorized use may lead to blacklisting of Darpan ID and legal action."
    effect: ineligible
    source: S1
    confidence: medium
```