---
type: "Government Scheme Documents"
title: "North East Venture Fund (NEVF) — Documents"
description: "Document requirements for ROW-91."
scheme_id: "ROW-91"
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
    resource: "https://sidbi.in/ne"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# North East Venture Fund (NEVF) — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: audited-financial-statements-if-any
    name: "Audited financial statements (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: business-plan-and-pitch-deck
    name: "Business plan and pitch deck"
    required: always
    source: S1
    confidence: medium
  - id: details-of-promoters-and-management-team
    name: "Details of promoters and management team"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-registration-in-north-eastern-r
    name: "Proof of registration in North Eastern Region"
    required: always
    source: S1
    confidence: medium
  - id: ip-or-technology-documentation-if-applic
    name: "IP or technology documentation (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-statements-and-cash-flow-projection
    name: "Bank statements and cash flow projections"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.