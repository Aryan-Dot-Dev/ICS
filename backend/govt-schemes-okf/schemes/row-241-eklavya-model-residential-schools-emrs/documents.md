---
type: "Government Scheme Documents"
title: "Eklavya Model Residential Schools (EMRS) — Documents"
description: "Document requirements for ROW-241."
scheme_id: "ROW-241"
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
    resource: "https://emrs.tribal.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Eklavya Model Residential Schools (EMRS) — Documents

```yaml
documents:
  - id: proof-of-scheduled-tribe-status
    name: "Proof of Scheduled Tribe status"
    required: always
    source: S1
    confidence: medium
  - id: birth-certificate-or-age-proof
    name: "Birth certificate or age proof"
    required: always
    source: S1
    confidence: medium
  - id: previous-academic-records
    name: "Previous academic records"
    required: always
    source: S1
    confidence: medium
  - id: domicile-certificate
    name: "Domicile certificate"
    required: always
    source: S1
    confidence: medium
  - id: income-certificate-if-applicable
    name: "Income certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized photographs"
    required: always
    source: S1
    confidence: medium
  - id: medical-fitness-certificate
    name: "Medical fitness certificate"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.