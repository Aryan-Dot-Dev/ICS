---
type: "Government Scheme"
title: "Agristack – Federated Farmers Database"
description: "Agri Stack is a digital infrastructure initiative by the Ministry of Agriculture & Farmers Welfare, Government of India, designed to create a federated database of farmers and farmland to improve access to credit, inputs, advice, and markets."
scheme_id: "ROW-424"
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
    resource: "https://agristack.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://agristack.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://agristack.gov.in/assets/registries/farmerRegistry/farmer_registry_faqs.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
official_name: "Agristack – Federated Farmers Database"
government_level: central
ministry: "Ministry of Agriculture & Farmers Welfare"
categories:
  - "agriculture"
  - "entrepreneurship"
  - "social-security"
benefit_types:
  - "loan"
  - "service"
target_groups:
  - "farmers"
  - "agri-tech-startups"
  - "private-companies"
  - "public-entities"
  - "state-governments"
  - "central-government"
geographies:
  - "IN"
applicant_types:
  - "farmer"
  - "entrepreneur"
  - "institution"
  - "individual"
eligibility_version: "2026-10"
confidence: "medium"
source_data_last_updated: "2024"
runs_source: "runs/row-424/ai_summary.json"
---
# Agristack – Federated Farmers Database

## Overview

Agri Stack is a digital infrastructure initiative by the Ministry of Agriculture & Farmers Welfare, Government of India, designed to create a federated database of farmers and farmland to improve access to credit, inputs, advice, and markets. It aims to enhance the delivery of government schemes by enabling presence-less farmer identification and authentication through a unique FarmerID linked to Aadhaar. The platform supports agri-tech innovation by providing secure, consent-based access to high-quality agricultural data via components like the Farmer Registry, Crop Sown Registry, Unified Farmer Service Interface (UFSI), Consent Manager, and Agri Stack Sandbox.

## Objective

- Improve Government benefits/schemes delivery so they reach all Indian farmers faster and more easily
- Create a presence-less layer for quick identification and authentication of the farmers
- Lower the cost and risk of agricultural services for farmers and agri-credit, finance, inputs, and other service providers
- Enable easier scheme convergence between agri-allied Ministries and State Governments to better serve the Indian Farmers
- Accelerate innovation in products & services by Agri-Techs with easier access to high-quality data


## Target Beneficiaries

**farmers**, **agri-tech startups**, **private companies**, **public entities**, **state governments**, **central government**


Concept links: [farmer](../../concepts/farmer.md) · [agriculture](../../concepts/agriculture.md) · [entrepreneur](../../concepts/entrepreneur.md)


## Key Features

- Geographic scope: Pan-India (central-level)
- Deadline: Rolling basis — no fixed deadline. Implementation is ongoing as states form steering committees and provide APIs.
- Source data last updated: 2024
- Import confidence (source): medium


## Eligibility

Eligibility is not explicitly defined for direct beneficiary access in the evidence; the Farmer Registry is compiled by States according to common standards, and each farmer is assigned a unique FarmerID based on Aadhaar as per IndEA 2.0, with minimal demographic details to enable identification and eligibility determination for availing government scheme benefits.


Deterministic rules: [eligibility.md](eligibility.md).


## Benefits

Farmers gain easier access to cheaper credit, higher-quality farm inputs, localized and specific advice, and more informed and convenient access to markets. Governments can plan and implement farmer-focused benefit schemes more effectively. Agri-Tech startups and private companies benefit from secure, consent-based access to high-quality agricultural data via the Agri Stack Sandbox and UFSI to…


Structured benefit objects: [benefits.md](benefits.md).


## Documents

_No document list in source data (not_verified). See [documents.md](documents.md).


## Application

Portal: not_verified. Steps, channels and deadlines: [application.md](application.md).


## Important Conditions

- Farmer ID is for non-legal, planning and advisory, and scheme-delivery purposes only
- Data sharing requires explicit farmer consent via the Agri Stack Consent Manager
- Farm ID is dynamically linked to farmland plot records but not for legal ownership purposes
- The system does not store data with GOI;
- data exchange occurs only with farmer consent and access tokens
- Bucket data created by central govt in batch mode is not updated further;
- states must refresh it periodically


## Exclusions

_No explicit disqualifier recorded in source data — this is NOT evidence that none exist. See [exclusions.md](exclusions.md).


## Related Schemes

- [National Mission on Edible Oils – Oil Palm (NMEO-OP)](../row-419-national-mission-on-edible-oils-oil-palm-nmeo-op/scheme.md)
- [PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers](../row-420-pm-kisan-maan-dhan-yojana-pm-kmy-pension-for-farmers/scheme.md)
- [Soil Health Card Scheme](../row-421-soil-health-card-scheme/scheme.md)


## Official Sources

1. [https://agristack.gov.in](https://agristack.gov.in) [S1]
2. [https://agristack.gov.in/](https://agristack.gov.in/) [S2]
3. [https://agristack.gov.in/assets/registries/farmerRegistry/farmer_registry_faqs.pdf](https://agristack.gov.in/assets/registries/farmerRegistry/farmer_registry_faqs.pdf) [S3]


## Discovery metadata

```yaml
discovery:
  user_goals:
    - farming_support
    - grow_my_business
  keywords:
    - "agristack"
    - "federated"
    - "farmers"
    - "database"
    - "agri-tech startups"
    - "private companies"
    - "public entities"
    - "state governments"
    - "central government"
    - "agriculture & agritech"
  semantic_topics:
    - agriculture
    - entrepreneurship
    - social-security
```
