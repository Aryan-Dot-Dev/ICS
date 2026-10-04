---
type: "Government Scheme Documents"
title: "National Organ & Tissue Transplant Organisation (NOTTO) — Documents"
description: "Document requirements for ROW-481."
scheme_id: "ROW-481"
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
    resource: "https://notto.abdm.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://notto.abdm.gov.in/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://notto.abdm.gov.in/verify-certificate"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://notto.abdm.gov.in/dashboard"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://notto.abdm.gov.in/website-policies"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://notto.abdm.gov.in/thoa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://notto.abdm.gov.in/terms-conditions"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://notto.abdm.gov.in/privacy-policy"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://notto.abdm.gov.in/dashboard/privacy-policy"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://notto.abdm.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Organ & Tissue Transplant Organisation (NOTTO) — Documents

```yaml
documents:
  - id: aadhaar-number-12-digits
    name: "Aadhaar number (12 digits)"
    required: always
    source: S1
    confidence: medium
  - id: mobile-number-linked-to-abha
    name: "Mobile number linked to ABHA"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.