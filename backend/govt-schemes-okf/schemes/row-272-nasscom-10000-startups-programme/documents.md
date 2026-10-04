---
type: "Government Scheme Documents"
title: "NASSCOM 10000 Startups Programme — Documents"
description: "Document requirements for ROW-272."
scheme_id: "ROW-272"
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
    resource: "https://10000startups.com"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NASSCOM 10000 Startups Programme — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-startup
    name: "PAN card of the startup"
    required: always
    source: S1
    confidence: medium
  - id: founder-profiles-and-cvs
    name: "Founder profiles and CVs"
    required: always
    source: S1
    confidence: medium
  - id: product-description-or-pitch-deck
    name: "Product description or pitch deck"
    required: always
    source: S1
    confidence: medium
  - id: details-of-technology-or-innovation
    name: "Details of technology or innovation"
    required: always
    source: S1
    confidence: medium
  - id: business-model-and-revenue-plan-if-appli
    name: "Business model and revenue plan (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: any-existing-funding-or-investment-detai
    name: "Any existing funding or investment details"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.