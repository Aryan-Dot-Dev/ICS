---
type: "Government Scheme Documents"
title: "Pradhan Mantri National AIDS Control Programme — Documents"
description: "Document requirements for ROW-482."
scheme_id: "ROW-482"
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
    resource: "https://naco.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Pradhan Mantri National AIDS Control Programme — Documents

```yaml
documents:
  - id: hiv-positive-test-report-from-a-designat
    name: "HIV-positive test report from a designated ICTC or laboratory"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity-aadhaar-card-voter-id
    name: "Proof of identity (Aadhaar card, voter ID, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address-ration-card-utility-bil
    name: "Proof of address (ration card, utility bill, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: referral-slip-if-applicable
    name: "Referral slip (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: consent-form-for-hiv-testing-and-treatme
    name: "Consent form for HIV testing and treatment"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.