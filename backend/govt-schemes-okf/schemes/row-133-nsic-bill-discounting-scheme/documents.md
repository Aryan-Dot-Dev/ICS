---
type: "Government Scheme Documents"
title: "NSIC Bill Discounting Scheme — Documents"
description: "Document requirements for ROW-133."
scheme_id: "ROW-133"
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
    resource: "https://nsic.co.in/Schemes/BillDiscountingAgainstBG"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.nsic.co.in/scheme/bill-discounting"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Bill Discounting Scheme — Documents

```yaml
documents:
  - id: application-form
    name: "Application Form"
    required: always
    source: S1
    confidence: medium
  - id: list-of-documents-to-be-enclosed-with-ap
    name: "List of documents to be enclosed with Application Form"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.