---
type: "Government Scheme Documents"
title: "National Centre for Textile Design (NCTD) — Documents"
description: "Document requirements for ROW-289."
scheme_id: "ROW-289"
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
    resource: "https://nctd.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Centre for Textile Design (NCTD) — Documents

```yaml
documents:
  - id: profile-of-the-applicant-individual-unit
    name: "Profile of the applicant (individual/unit/organization)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-existing-products-or-craft-pr
    name: "Details of existing products or craft practiced"
    required: always
    source: S1
    confidence: medium
  - id: photographs-of-samples-or-work
    name: "Photographs of samples or work"
    required: always
    source: S1
    confidence: medium
  - id: identity-and-address-proof
    name: "Identity and address proof"
    required: always
    source: S1
    confidence: medium
  - id: bank-details-if-applicable-for-any-finan
    name: "Bank details (if applicable for any financial linkage)"
    required: conditional
    source: S1
    confidence: medium
  - id: registration-certificate-for-ngos-cooper
    name: "Registration certificate (for NGOs, cooperatives, companies)"
    required: always
    source: S1
    confidence: medium
  - id: specific-design-brief-or-requirement-for
    name: "Specific design brief or requirement (for design service requests)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.