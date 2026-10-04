---
type: "Government Scheme Documents"
title: "Elevate 100 Programme — Documents"
description: "Document requirements for ROW-343."
scheme_id: "ROW-343"
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
    resource: "https://elevate.karnataka.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Elevate 100 Programme — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-startup
    name: "PAN Card of the startup"
    required: always
    source: S1
    confidence: medium
  - id: pan-cards-of-all-founders
    name: "PAN Cards of all founders"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-cards-of-all-founders
    name: "Aadhaar Cards of all founders"
    required: always
    source: S1
    confidence: medium
  - id: bank-statement-of-the-startup
    name: "Bank statement of the startup"
    required: always
    source: S1
    confidence: medium
  - id: pitch-deck-or-business-plan-max-10-slide
    name: "Pitch deck or business plan (max 10 slides)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-any-prior-funding-received
    name: "Details of any prior funding received"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-innovation-patent-filing-protot
    name: "Proof of innovation (patent filing, prototype, etc., if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: authorization-letter-from-the-startup-fo
    name: "Authorization letter from the startup for application submission"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.