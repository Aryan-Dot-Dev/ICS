---
type: "Government Scheme Documents"
title: "National Bamboo Mission — Documents"
description: "Document requirements for ROW-598."
scheme_id: "ROW-598"
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
    resource: "https://nbm.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Bamboo Mission — Documents

```yaml
documents:
  - id: project-report-detailed-project-report-d
    name: "Project report / Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-lease-documents
    name: "Land ownership or lease documents"
    required: always
    source: S1
    confidence: medium
  - id: cost-estimates-and-quotations-for-equipm
    name: "Cost estimates and quotations for equipment/infrastructure"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-of-the-beneficiary
    name: "Bank account details of the beneficiary"
    required: always
    source: S1
    confidence: medium
  - id: identity-and-address-proof-aadhaar-pan-e
    name: "Identity and address proof (Aadhaar, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-registratio
    name: "Certificate of incorporation/registration (for FPOs, NGOs, cooperatives)"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-for-representative
    name: "Authorization letter for representative (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: photographs-of-the-site-before-and-after
    name: "Photographs of the site (before and after intervention, if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.