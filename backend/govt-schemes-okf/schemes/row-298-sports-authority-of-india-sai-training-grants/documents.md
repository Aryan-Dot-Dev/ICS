---
type: "Government Scheme Documents"
title: "Sports Authority of India (SAI) Training Grants — Documents"
description: "Document requirements for ROW-298."
scheme_id: "ROW-298"
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
    resource: "https://sai.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Sports Authority of India (SAI) Training Grants — Documents

```yaml
documents:
  - id: application-form-as-prescribed-by-sai
    name: "Application form (as prescribed by SAI)"
    required: always
    source: S1
    confidence: medium
  - id: recommendation-letter-from-national-spor
    name: "Recommendation letter from National Sports Federation (NSF) or SAI regional center"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-age-and-identity-aadhaar-birth
    name: "Proof of age and identity (Aadhaar, birth certificate, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: sports-achievement-certificates-and-perf
    name: "Sports achievement certificates and performance records"
    required: always
    source: S1
    confidence: medium
  - id: training-plan-and-budget-estimate
    name: "Training plan and budget estimate"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-fund-transfer
    name: "Bank account details for fund transfer"
    required: always
    source: S1
    confidence: medium
  - id: previous-utilization-certificates-if-app
    name: "Previous utilization certificates (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.