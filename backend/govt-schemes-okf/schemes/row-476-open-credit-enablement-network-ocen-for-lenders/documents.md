---
type: "Government Scheme Documents"
title: "Open Credit Enablement Network (OCEN) for Lenders — Documents"
description: "Document requirements for ROW-476."
scheme_id: "ROW-476"
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
    resource: "https://ocen.dev"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ocen.dev/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ocen.dev/docs/intro"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ocen.dev/blog"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ocen.dev/apis"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ocen.dev/docs/ocen_4_0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://ocen.dev/docs/participant_roles"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://ocen.dev/docs/ocen_components"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://ocen.dev/docs/ocen_registries"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://ocen.dev/docs/product_network"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://ocen.dev/docs/api_design_principles"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://ocen.dev/docs/previous_pilots"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://ocen.dev/docs/terminology"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://ocen.dev/docs/faqs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://ocen.dev/blog/loan-products-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://ocen.dev/blog/new-headline-metrics-to-account-for-short-term-lending"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S17
    resource: "https://ocen.dev/blog/evaluating-the-short-term-lending-opportunity"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S18
    resource: "https://ocen.dev/blog/escrow-based-collections-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S19
    resource: "https://ocen.dev/blog/credit-underwriting-models-of-msme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S20
    resource: "https://ocen.dev/blog/credit-bureau-pull-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S21
    resource: "https://ocen.dev/blog/dispute-resolution-mechanism-in-ocen"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S22
    resource: "https://ocen.dev/blog/importance-of-lending-for-India"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S23
    resource: "https://ocen.dev/blog/role-of-ocen-in-aa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S24
    resource: "https://niti.gov.in/sites/default/files/2020-09/DEPA-Executive-Summary.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Open Credit Enablement Network (OCEN) for Lenders — Documents

```yaml
documents:
  - id: client-credentials-client-id-client-secr
    name: "Client credentials (client_id, client_secret)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-entity-regulation-e-g-rbi-licen
    name: "Proof of entity regulation (e.g., RBI license for lenders, NBFC-AA for Account Aggregators)"
    required: always
    source: S1
    confidence: medium
  - id: digital-signature-setup-for-api-authenti
    name: "Digital signature setup for API authentication"
    required: always
    source: S1
    confidence: medium
  - id: oauth-2-0-openid-connect-compliance-docu
    name: "OAuth 2.0/OpenID Connect compliance documentation"
    required: always
    source: S1
    confidence: medium
  - id: product-configuration-details-for-produc
    name: "Product configuration details (for Product Registry)"
    required: always
    source: S1
    confidence: medium
  - id: product-network-participant-details-for
    name: "Product Network participant details (for Loan Agents)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.