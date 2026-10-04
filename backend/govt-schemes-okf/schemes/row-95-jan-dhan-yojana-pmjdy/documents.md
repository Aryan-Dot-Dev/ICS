---
type: "Government Scheme Documents"
title: "Jan Dhan Yojana (PMJDY) — Documents"
description: "Document requirements for ROW-95."
scheme_id: "ROW-95"
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
    resource: "https://pmjdy.gov.in/files/E-Documents/Continuation_of_PMJDY.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmjdy.gov.in/files/E-Documents/PMJDY_BROCHURE_ENG.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmjdy.gov.in/files/QuickLinks/IMPORTANT-INFORMATION-UNDER-PMJDY.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmjdy.gov.in/files/PMJDY_Metadata.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pmjdy.gov.in/files/financial-Literacy/literacy/guide.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pmjdy.gov.in/files/financial-Literacy/literacy/diary.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://pmjdy.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://pmjdy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Jan Dhan Yojana (PMJDY) — Documents

```yaml
documents:
  - id: aadhaar-card-number
    name: "Aadhaar card/number"
    required: always
    source: S1
    confidence: medium
  - id: voter-id
    name: "Voter ID"
    required: always
    source: S1
    confidence: medium
  - id: driving-licence
    name: "Driving licence"
    required: always
    source: S1
    confidence: medium
  - id: pan-card
    name: "PAN card"
    required: always
    source: S1
    confidence: medium
  - id: passport
    name: "Passport"
    required: always
    source: S1
    confidence: medium
  - id: nrega-card
    name: "NREGA card"
    required: always
    source: S1
    confidence: medium
  - id: self-attested-photograph-for-small-accou
    name: "Self-attested photograph (for small accounts)"
    required: always
    source: S1
    confidence: medium
  - id: thumb-impression-or-signature-for-small
    name: "Thumb impression or signature (for small accounts)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.