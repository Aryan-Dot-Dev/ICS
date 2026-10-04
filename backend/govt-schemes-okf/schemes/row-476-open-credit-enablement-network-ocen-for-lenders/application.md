---
type: "Government Scheme Application"
title: "Open Credit Enablement Network (OCEN) for Lenders — Application"
description: "Application channels, process and deadlines for ROW-476."
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
# Open Credit Enablement Network (OCEN) for Lenders — Application

## Channels

```yaml
application:
  mode:
    - online
  official_portal: "https://ocen.dev/docs/ocen_registries"
  implementing_agency: "iSPIRT (in collaboration with RBI, Account Aggregator framework, and SROs)"
  deadline: "Rolling basis — no fixed deadline. Onboarding and participation are open year-round."
  contact: "Email: contact@ocen.dev"
```

## Process

1. Onboard as a participant via the Participant Registry (managed by SROs) with role-specific verification.
2. Create or manage credit products via the Product Registry (Lenders) or Product Networks (Loan Agents).
3. Integrate with OCEN 4.0 standardized APIs using client credentials (client_id, client_secret) to generate access tokens.
4. Follow API design principles: asynchronous calls, idempotency via requestId, and security (HTTPS, Two-way TLS, digital signatures).
5. Participate in loan journeys: Loan Agents source borrowers, Lenders underwrite and disburse, Collections/Dispatch/KYC partners support as per product network.
6. Use registries to discover products, participants, and product networks for collaboration.

## Deadlines

- Rolling basis — no fixed deadline. Onboarding and participation are open year-round.

## Contact

- Email: contact@ocen.dev