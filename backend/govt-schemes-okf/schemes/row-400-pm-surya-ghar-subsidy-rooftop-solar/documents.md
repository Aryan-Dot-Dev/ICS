---
type: "Government Scheme Documents"
title: "PM Surya Ghar Subsidy – Rooftop Solar — Documents"
description: "Document requirements for ROW-400."
scheme_id: "ROW-400"
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
    resource: "https://pmsuryaghar.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Surya Ghar Subsidy – Rooftop Solar — Documents

```yaml
documents:
  - id: proof-of-property-ownership-or-occupancy
    name: "Proof of property ownership or occupancy authorization"
    required: always
    source: S1
    confidence: medium
  - id: identity-proof-aadhaar-pan-etc
    name: "Identity proof (Aadhaar, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof
    name: "Address proof"
    required: always
    source: S1
    confidence: medium
  - id: latest-electricity-bill
    name: "Latest electricity bill"
    required: always
    source: S1
    confidence: medium
  - id: sanctioned-load-details-from-electricity
    name: "Sanctioned load details from electricity distribution company"
    required: always
    source: S1
    confidence: medium
  - id: roof-ownership-or-installation-consent-d
    name: "Roof ownership or installation consent document"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.