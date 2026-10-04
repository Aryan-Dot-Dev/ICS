---
type: "Government Scheme Exclusions"
title: "Duty Drawback Scheme — Exclusions"
description: "Structured disqualifiers for ROW-135."
scheme_id: "ROW-135"
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
    resource: "https://cbic.gov.in/resources//htdocs-cbec/customs/cs-act/formatted-htmls/drawback"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://cbic.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.icegate.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.cbic.gov.in/resources//htdocs-cbec/customs/cs-act/formatted-htmls/drawback"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Duty Drawback Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Refund may be withheld or rejected if documents are incomplete or discrepancies are found"
    effect: ineligible
    source: S1
    confidence: medium
```