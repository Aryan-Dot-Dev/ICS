---
type: "Government Scheme Documents"
title: "Recognition of Prior Learning (RPL) Scheme — Documents"
description: "Document requirements for ROW-494."
scheme_id: "ROW-494"
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
    resource: "https://pmkvyofficial.org/rpl"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Recognition of Prior Learning (RPL) Scheme — Documents

```yaml
documents:
  - id: aadhaar-card
    name: "Aadhaar Card"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-dbt
    name: "Bank account details (for DBT)"
    required: always
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized photographs"
    required: always
    source: S1
    confidence: medium
  - id: any-existing-skill-certificates-or-exper
    name: "Any existing skill certificates or experience letters (if available)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.