---
type: "Government Scheme Documents"
title: "BIRAC Industrial Biofoundry Support — Documents"
description: "Document requirements for ROW-599."
scheme_id: "ROW-599"
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
    resource: "https://birac.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://birac.nic.in/birac_facility_network_e_portal.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://birac.nic.in/technologyportal.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# BIRAC Industrial Biofoundry Support — Documents

```yaml
documents:
  - id: certificate-of-incorporation-or-llp-agre
    name: "Certificate of Incorporation or LLP Agreement"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: project-proposal-detailing-technology-ob
    name: "Project proposal detailing technology, objectives, and scale-up plan"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-concept-poc-or-prototype-valida
    name: "Proof of concept (PoC) or prototype validation data (TRL ≥ 4)"
    required: always
    source: S1
    confidence: medium
  - id: ip-ownership-or-freedom-to-operate-decla
    name: "IP ownership or freedom-to-operate declaration"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-of-the-entity
    name: "Bank account details of the entity"
    required: always
    source: S1
    confidence: medium
  - id: authorized-signatory-letter
    name: "Authorized signatory letter"
    required: always
    source: S1
    confidence: medium
  - id: quotation-or-cost-estimate-from-the-biof
    name: "Quotation or cost estimate from the biofoundry facility (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.