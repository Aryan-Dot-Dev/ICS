---
type: "Government Scheme Documents"
title: "NSIC Credit Support Scheme — Documents"
description: "Document requirements for ROW-11."
scheme_id: "ROW-11"
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
    resource: "https://nsic.co.in/Schemes/RawMaterialAgainstBG"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nsic.co.in/documents/pdfs/sprs/1.Check_List_of_Fresh_Registration_23052023.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nsic.co.in/documents/pdfs/FAQ-SPRS-4.8.2021.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.nsic.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Credit Support Scheme — Documents

```yaml
documents:
  - id: pan-card-self-attested
    name: "PAN card (Self-attested)"
    required: always
    source: S1
    confidence: medium
  - id: udyam-registration-self-attested
    name: "Udyam Registration (Self-attested)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-plant-machinery-self-attested
    name: "Details of Plant & Machinery (Self-attested, Annexure B-1)"
    required: always
    source: S1
    confidence: medium
  - id: copy-of-ownership-document-of-premises-o
    name: "Copy of ownership document of premises or Lease/Rent Deed (Self-attested)"
    required: always
    source: S1
    confidence: medium
  - id: list-of-quality-control-equipment-and-te
    name: "List of quality control equipment and testing facility available in factory (Self-attested)"
    required: always
    source: S1
    confidence: medium
  - id: latest-electricity-bill-copy-self-attest
    name: "Latest Electricity Bill Copy (Self-attested)"
    required: always
    source: S1
    confidence: medium
  - id: face-of-audited-balance-sheet-profit-and
    name: "Face of Audited Balance Sheet, Profit and Loss A/cs, Schedule of Fixed Assets, Schedule of Revenue from Operations (last 3 years, duly signed by authorized…"
    required: always
    source: S1
    confidence: medium
  - id: statement-showing-results-of-operation-f
    name: "Statement showing Results of Operation for last 3 years duly signed by Chartered Accountant with UDIN (Annexure C-1, Self-attested)"
    required: always
    source: S1
    confidence: medium
  - id: bankers-report-giving-details-of-financi
    name: "Bankers’ Report giving details of financial status as per Performa (Draft at Annexure E) (Self-attested, Annexure E-1)"
    required: always
    source: S1
    confidence: medium
  - id: declaration-signed-by-applicant-mse-unit
    name: "Declaration signed by applicant MSE Unit accepting conditions of registration as per Annexure D (Self-attested)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.