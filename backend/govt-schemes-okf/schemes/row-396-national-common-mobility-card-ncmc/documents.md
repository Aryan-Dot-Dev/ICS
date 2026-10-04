---
type: "Government Scheme Documents"
title: "National Common Mobility Card (NCMC) — Documents"
description: "Document requirements for ROW-396."
scheme_id: "ROW-396"
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
    resource: "https://mohua.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Common Mobility Card (NCMC) — Documents

```yaml
documents:
  - id: identity-proof-aadhaar-pan-passport-vote
    name: "Identity proof (Aadhaar, PAN, Passport, Voter ID)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof-aadhaar-utility-bill-passp
    name: "Address proof (Aadhaar, utility bill, passport)"
    required: always
    source: S1
    confidence: medium
  - id: passport-sized-photograph
    name: "Passport-sized photograph"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.