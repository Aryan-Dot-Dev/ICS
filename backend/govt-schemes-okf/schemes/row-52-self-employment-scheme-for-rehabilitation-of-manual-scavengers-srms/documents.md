---
type: "Government Scheme Documents"
title: "Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) — Documents"
description: "Document requirements for ROW-52."
scheme_id: "ROW-52"
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
    resource: "https://nskfdc.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) — Documents

```yaml
documents:
  - id: proof-of-identity-aadhaar-card-voter-id
    name: "Proof of identity (Aadhaar card, Voter ID, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-residence
    name: "Proof of residence"
    required: always
    source: S1
    confidence: medium
  - id: caste-certificate-if-applicable
    name: "Caste certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: documentary-proof-of-engagement-in-manua
    name: "Documentary proof of engagement in manual scavenging (as per survey records)"
    required: always
    source: S1
    confidence: medium
  - id: project-report-business-plan
    name: "Project report / business plan"
    required: always
    source: S1
    confidence: medium
  - id: cost-estimates-for-the-proposed-unit
    name: "Cost estimates for the proposed unit"
    required: always
    source: S1
    confidence: medium
  - id: quotations-for-machinery-equipment-if-ap
    name: "Quotations for machinery/equipment (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized photographs"
    required: always
    source: S1
    confidence: medium
  - id: any-other-document-as-required-by-the-st
    name: "Any other document as required by the State Channelising Agency (SCA)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.