---
type: "Government Scheme Documents"
title: "Beti Bachao Beti Padhao (BBBP) — Documents"
description: "Document requirements for ROW-233."
scheme_id: "ROW-233"
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
    resource: "https://wcd.nic.in/bbbp-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Beti Bachao Beti Padhao (BBBP) — Documents

```yaml
documents:
  - id: birth-certificate-of-the-girl-child
    name: "Birth certificate of the girl child"
    required: always
    source: S1
    confidence: medium
  - id: identity-proof-of-parent-guardian-aadhaa
    name: "Identity proof of parent/guardian (Aadhaar, Voter ID, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof
    name: "Address proof"
    required: always
    source: S1
    confidence: medium
  - id: photographs-of-parent-guardian-and-girl
    name: "Photographs of parent/guardian and girl child"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.