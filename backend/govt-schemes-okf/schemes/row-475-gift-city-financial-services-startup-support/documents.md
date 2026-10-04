---
type: "Government Scheme Documents"
title: "GIFT City Financial Services Startup Support — Documents"
description: "Document requirements for ROW-475."
scheme_id: "ROW-475"
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
    resource: "https://www.giftcity.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# GIFT City Financial Services Startup Support — Documents

```yaml
documents:
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of Incorporation or Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-entity
    name: "PAN card of the entity"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-or-pitch-deck-detailing-th
    name: "Business plan or pitch deck detailing the FinTech/BFSI innovation"
    required: always
    source: S1
    confidence: medium
  - id: details-of-directors-and-promoters
    name: "Details of directors and promoters"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: any-existing-regulatory-approvals-or-san
    name: "Any existing regulatory approvals or sandbox applications (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.