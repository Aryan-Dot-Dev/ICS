---
type: "Government Scheme Exclusions"
title: "NSIC Raw Material Assistance Scheme — Exclusions"
description: "Structured disqualifiers for ROW-12."
scheme_id: "ROW-12"
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
    resource: "https://nsic.co.in/Schemes/RawMaterialAgainstBG"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nsic.co.in/documents/pdfs/RMA/FAQ-RMA-SCHEME-18082025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nsic.co.in/documents/pdfs/forms/RMA-APP-14072023.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nsic.co.in/documents/pdfs/Forms/RMA_DOC_REQ_14072023.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.nsic.co.in/rmas"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Raw Material Assistance Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Trading activities are not allowed under the Raw Material Assistance Scheme"
    effect: ineligible
    source: S1
    confidence: medium
```