---
type: "Government Scheme Documents"
title: "Equipment Finance for MSMEs (SIDBI) — Documents"
description: "Document requirements for ROW-16."
scheme_id: "ROW-16"
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
    resource: "https://sidbi.in/machinery-loan"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.sidbi.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Equipment Finance for MSMEs (SIDBI) — Documents

```yaml
documents:
  - id: gst-returns
    name: "GST returns"
    required: always
    source: S1
    confidence: medium
  - id: itrs
    name: "ITRs"
    required: always
    source: S1
    confidence: medium
  - id: bank-statement
    name: "Bank Statement"
    required: always
    source: S1
    confidence: medium
  - id: cibil-score
    name: "CIBIL score"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.