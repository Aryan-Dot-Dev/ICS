---
type: "Government Scheme Documents"
title: "National Minorities Development & Finance Corp (NMDFC) — Documents"
description: "Document requirements for ROW-50."
scheme_id: "ROW-50"
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
    resource: "https://nmdfc.org/nmdfcschemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nmdfc.org/about_nmdfc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nmdfc.org/home/nmdfc_schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nmdfc.org/target-groups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nmdfc.org/promotionalschemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nmdfc.org/MANFscheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nmdfc.org/uploads/files/Discontinuation-NOTICE-MANF-124bc0aad-a542-4894-82d0-8b78d036247apdf-4cde4f773a56bf6a7fb2dbdd8680f87b.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nmdfc.org/uploads/bulletin/noticepdf-adc57c3c748b3afc46e4443c65a43fd1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nmdfc.org/uploads/update/noticepdf-ead74eceb221cb167747d80dbfbc48ee.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nmdfc.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Minorities Development & Finance Corp (NMDFC) — Documents

```yaml
documents:
  - id: self-attested-income-certificate
    name: "Self Attested Income Certificate"
    required: always
    source: S1
    confidence: medium
  - id: self-attested-residence-proof-enclosing
    name: "Self Attested Residence Proof enclosing AADHAAR Card/Ration Card/Voter ID/Passport/Phone Bill/Electricity Bill etc."
    required: always
    source: S1
    confidence: medium
  - id: self-attested-religious-certificate-only
    name: "Self Attested Religious Certificate (only if loan amount > ₹1 lakh)"
    required: always
    source: S1
    confidence: medium
  - id: brief-project-report
    name: "Brief Project Report"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.