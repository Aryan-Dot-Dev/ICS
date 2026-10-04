---
type: Government Scheme Knowledge Base
title: Indian Government Schemes
description: Machine-readable knowledge base of Indian government schemes (20 curated + 584 imported from the runs batch) for an AI recommendation engine, modelled on Google Open Knowledge Format (OKF) v0.2 with a Government Scheme Profile extension.
okf_version: "0.2"
bundle_version: "2026.10"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
review_cycle: quarterly
---

# Indian Government Schemes — OKF v0.2 Knowledge Bundle

A trusted, machine-readable knowledge layer that sits underneath an AI
government-scheme recommendation engine. It follows **Google Open Knowledge
Format (OKF) v0.2** conventions (knowledge objects with YAML frontmatter,
Markdown body, explicit provenance and freshness) and adds a **Government
Scheme Profile** (eligibility rules, benefits, documents, exclusions,
discovery metadata) via OKF's extensibility model. See
[README.md](README.md) for the extension contract.

## Core distinction used throughout

- **ELIGIBILITY** — can this person potentially receive the scheme?
  Determined by [eligibility.md](README.md#4-scheme-files) rule objects.
- **RELEVANCE** — is this scheme relevant to what the person wants?
  Determined by `discovery:` metadata. **Never used for eligibility.**
- **RECOMMENDATION** — among schemes the user may qualify for, which match
  their stated requirement. Computed by the engine, not stored here.

## Schemes (20)

| # | Scheme | scheme_id | Knowledge object |
|---|--------|-----------|------------------|
| 1 | PM-KISAN | PM-KISAN | [scheme.md](schemes/pm-kisan/scheme.md) |
| 2 | Pradhan Mantri Fasal Bima Yojana | PMFBY | [scheme.md](schemes/pmfby/scheme.md) |
| 3 | Pradhan Mantri Mudra Yojana | PMMY | [scheme.md](schemes/pmmy/scheme.md) |
| 4 | Stand-Up India | SUI | [scheme.md](schemes/stand-up-india/scheme.md) |
| 5 | Prime Minister's Employment Generation Programme | PMEGP | [scheme.md](schemes/pmegp/scheme.md) |
| 6 | Pradhan Mantri Awas Yojana – Urban 2.0 | PMAY-U | [scheme.md](schemes/pmay-urban/scheme.md) |
| 7 | Pradhan Mantri Awas Yojana – Gramin | PMAY-G | [scheme.md](schemes/pmay-gramin/scheme.md) |
| 8 | Ayushman Bharat PM-JAY | PM-JAY | [scheme.md](schemes/pm-jay/scheme.md) |
| 9 | Pradhan Mantri Ujjwala Yojana | PMUY | [scheme.md](schemes/pmuy/scheme.md) |
| 10 | Sukanya Samriddhi Yojana | SSY | [scheme.md](schemes/ssy/scheme.md) |
| 11 | Atal Pension Yojana | APY | [scheme.md](schemes/apy/scheme.md) |
| 12 | Pradhan Mantri Suraksha Bima Yojana | PMSBY | [scheme.md](schemes/pmsby/scheme.md) |
| 13 | Pradhan Mantri Jeevan Jyoti Bima Yojana | PMJJBY | [scheme.md](schemes/pmjjby/scheme.md) |
| 14 | National Scholarship Portal (portal) / PM-USP CSSS (flagship central scheme) | NSP-CSSS | [scheme.md](schemes/nsp/scheme.md) |
| 15 | Post-Matric Scholarship for SC Students | PMS-SC | [scheme.md](schemes/pms-sc/scheme.md) |
| 16 | National Means-cum-Merit Scholarship Scheme | NMMSS | [scheme.md](schemes/nmmss/scheme.md) |
| 17 | PM Vishwakarma | PM-VISHWAKARMA | [scheme.md](schemes/pm-vishwakarma/scheme.md) |
| 18 | PM SVANidhi | PM-SVANIDHI | [scheme.md](schemes/pm-svanidhi/scheme.md) |
| 19 | National Social Assistance Programme | NSAP | [scheme.md](schemes/nsap/scheme.md) |
| 20 | Pradhan Mantri Matru Vandana Yojana | PMMVY | [scheme.md](schemes/pmmvy/scheme.md) |

## Row-sourced schemes (runs batch — rows 1–600)

Machine-imported from `D:\final-ai-server\runs\row-<n>-<slug>\ai_summary.json`
(`process:runs-okf-generator`, `status: draft`, generated 2026-10-02). Each
carries the same six-object contract as the curated schemes above; content
is quoted from the source import and has **not** been re-verified against
the live portals. Rows whose scheme is already curated above are not
duplicated.

<!-- BEGIN ROW-SOURCED -->

| # | Scheme | scheme_id | government_level | Knowledge object |
|---|--------|-----------|------------------|------------------|
| 1 | Haryana State Start-ups Scheme | ROW-1 | state | [scheme.md](schemes/row-1-haryana-state-start-ups-scheme/scheme.md) |
| 2 | PADMA Scheme | ROW-2 | state | [scheme.md](schemes/row-2-padma-scheme/scheme.md) |
| 3 | Mukhya Mantri Antyodaya Parivar Utthan Yojana (MMAPUY) | ROW-3 | state | [scheme.md](schemes/row-3-mukhya-mantri-antyodaya-parivar-utthan-yojana-mmapuy/scheme.md) |
| 4 | State Mini Cluster Development Scheme | ROW-4 | state | [scheme.md](schemes/row-4-state-mini-cluster-development-scheme/scheme.md) |
| 5 | Critical Infrastructure Development Scheme | ROW-5 | state | [scheme.md](schemes/row-5-critical-infrastructure-development-scheme/scheme.md) |
| 6 | Industrial Infrastructure Development Scheme | ROW-6 | state | [scheme.md](schemes/row-6-industrial-infrastructure-development-scheme/scheme.md) |
| 7 | HUM Registration | ROW-7 | state | [scheme.md](schemes/row-7-hum-registration/scheme.md) |
| 9 | CGTMSE (Credit Guarantee Fund Trust for MSEs) | ROW-9 | central | [scheme.md](schemes/row-9-cgtmse-credit-guarantee-fund-trust-for-mses/scheme.md) |
| 10 | SIDBI SMILE Scheme | ROW-10 | central | [scheme.md](schemes/row-10-sidbi-smile-scheme/scheme.md) |
| 11 | NSIC Credit Support Scheme | ROW-11 | central | [scheme.md](schemes/row-11-nsic-credit-support-scheme/scheme.md) |
| 12 | NSIC Raw Material Assistance Scheme | ROW-12 | central | [scheme.md](schemes/row-12-nsic-raw-material-assistance-scheme/scheme.md) |
| 13 | NSIC Marketing Support Scheme | ROW-13 | central | [scheme.md](schemes/row-13-nsic-marketing-support-scheme/scheme.md) |
| 14 | Mahila Udyam Nidhi Scheme (SIDBI) | ROW-14 | central | [scheme.md](schemes/row-14-mahila-udyam-nidhi-scheme-sidbi/scheme.md) |
| 15 | SIDBI Direct Credit Scheme | ROW-15 | central | [scheme.md](schemes/row-15-sidbi-direct-credit-scheme/scheme.md) |
| 16 | Equipment Finance for MSMEs (SIDBI) | ROW-16 | central | [scheme.md](schemes/row-16-equipment-finance-for-msmes-sidbi/scheme.md) |
| 17 | Working Capital Loan Scheme (SIDBI) | ROW-17 | central | [scheme.md](schemes/row-17-working-capital-loan-scheme-sidbi/scheme.md) |
| 18 | Udyam Registration Portal | ROW-18 | central | [scheme.md](schemes/row-18-udyam-registration-portal/scheme.md) |
| 19 | GeM Onboarding for MSMEs | ROW-19 | central | [scheme.md](schemes/row-19-gem-onboarding-for-msmes/scheme.md) |
| 20 | BIS Certification Scheme | ROW-20 | central | [scheme.md](schemes/row-20-bis-certification-scheme/scheme.md) |
| 21 | FSSAI Licensing & Registration | ROW-21 | central | [scheme.md](schemes/row-21-fssai-licensing-registration/scheme.md) |
| 22 | DPIIT Recognition for Startups | ROW-22 | central | [scheme.md](schemes/row-22-dpiit-recognition-for-startups/scheme.md) |
| 23 | MEIS (Merchandise Exports from India Scheme) | ROW-23 | central | [scheme.md](schemes/row-23-meis-merchandise-exports-from-india-scheme/scheme.md) |
| 24 | SEIS (Service Exports from India Scheme) | ROW-24 | central | [scheme.md](schemes/row-24-seis-service-exports-from-india-scheme/scheme.md) |
| 25 | Interest Equalization Scheme on Export Credit | ROW-25 | central | [scheme.md](schemes/row-25-interest-equalization-scheme-on-export-credit/scheme.md) |
| 26 | ECGC Export Credit Guarantee Schemes | ROW-26 | central | [scheme.md](schemes/row-26-ecgc-export-credit-guarantee-schemes/scheme.md) |
| 27 | Export Credit Insurance for Banks (ECIB) | ROW-27 | central | [scheme.md](schemes/row-27-export-credit-insurance-for-banks-ecib/scheme.md) |
| 28 | Transport & Marketing Assistance (TMA) | ROW-28 | central | [scheme.md](schemes/row-28-transport-marketing-assistance-tma/scheme.md) |
| 29 | SAMPADA Scheme (Food Processing) | ROW-29 | central | [scheme.md](schemes/row-29-sampada-scheme-food-processing/scheme.md) |
| 30 | PM Kisan Sampada Yojana | ROW-30 | central | [scheme.md](schemes/row-30-pm-kisan-sampada-yojana/scheme.md) |
| 31 | Operation Greens | ROW-31 | central | [scheme.md](schemes/row-31-operation-greens/scheme.md) |
| 32 | Cold Chain Infrastructure Scheme | ROW-32 | central | [scheme.md](schemes/row-32-cold-chain-infrastructure-scheme/scheme.md) |
| 33 | Textile Upgradation Fund Scheme (TUFS) | ROW-33 | central | [scheme.md](schemes/row-33-textile-upgradation-fund-scheme-tufs/scheme.md) |
| 34 | SAMARTH Scheme for Textiles | ROW-34 | central | [scheme.md](schemes/row-34-samarth-scheme-for-textiles/scheme.md) |
| 35 | National Handloom Development Programme (NHDP) | ROW-35 | central | [scheme.md](schemes/row-35-national-handloom-development-programme-nhdp/scheme.md) |
| 36 | PM Mega Integrated Textile Region and Apparel (PM MITRA) | ROW-36 | central | [scheme.md](schemes/row-36-pm-mega-integrated-textile-region-and-apparel-pm-mitra/scheme.md) |
| 37 | Powertex India Scheme | ROW-37 | central | [scheme.md](schemes/row-37-powertex-india-scheme/scheme.md) |
| 38 | Integrated Wool Development Programme | ROW-38 | central | [scheme.md](schemes/row-38-integrated-wool-development-programme/scheme.md) |
| 39 | Modified Electronics Manufacturing Clusters (EMC 2.0) | ROW-39 | central | [scheme.md](schemes/row-39-modified-electronics-manufacturing-clusters-emc-2-0/scheme.md) |
| 40 | Design Linked Incentive (DLI) Scheme | ROW-40 | central | [scheme.md](schemes/row-40-design-linked-incentive-dli-scheme/scheme.md) |
| 41 | Scheme for Promotion of Manufacturing of Electronic Components (SPECS) | ROW-41 | central | [scheme.md](schemes/row-41-scheme-for-promotion-of-manufacturing-of-electronic-components-specs/scheme.md) |
| 42 | STPI Software Technology Park Incentives | ROW-42 | central | [scheme.md](schemes/row-42-stpi-software-technology-park-incentives/scheme.md) |
| 43 | ESDM – Electronic System Design and Manufacturing Scheme | ROW-43 | central | [scheme.md](schemes/row-43-esdm-electronic-system-design-and-manufacturing-scheme/scheme.md) |
| 44 | Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) | ROW-44 | central | [scheme.md](schemes/row-44-pradhan-mantri-rozgar-protsahan-yojana-pmrpy/scheme.md) |
| 45 | Deen Dayal Antyodaya Yojana - Urban (DAY-NULM) | ROW-45 | central | [scheme.md](schemes/row-45-deen-dayal-antyodaya-yojana-urban-day-nulm/scheme.md) |
| 46 | Annapurna Scheme | ROW-46 | central | [scheme.md](schemes/row-46-annapurna-scheme/scheme.md) |
| 47 | Stree Shakti Package for Women Entrepreneurs | ROW-47 | central | [scheme.md](schemes/row-47-stree-shakti-package-for-women-entrepreneurs/scheme.md) |
| 48 | Cent Kalyani Scheme (Central Bank) | ROW-48 | central | [scheme.md](schemes/row-48-cent-kalyani-scheme-central-bank/scheme.md) |
| 49 | National Backward Classes Finance & Dev Corporation (NBCFDC) | ROW-49 | central | [scheme.md](schemes/row-49-national-backward-classes-finance-dev-corporation-nbcfdc/scheme.md) |
| 50 | National Minorities Development & Finance Corp (NMDFC) | ROW-50 | central | [scheme.md](schemes/row-50-national-minorities-development-finance-corp-nmdfc/scheme.md) |
| 52 | Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) | ROW-52 | central | [scheme.md](schemes/row-52-self-employment-scheme-for-rehabilitation-of-manual-scavengers-srms/scheme.md) |
| 53 | DAY-NRLM – Deendayal Antyodaya Yojana (Rural) | ROW-53 | central | [scheme.md](schemes/row-53-day-nrlm-deendayal-antyodaya-yojana-rural/scheme.md) |
| 55 | National Rural Livelihood Mission (NRLM) | ROW-55 | central | [scheme.md](schemes/row-55-national-rural-livelihood-mission-nrlm/scheme.md) |
| 56 | Rashtriya Gram Swaraj Abhiyan (RGSA) | ROW-56 | central | [scheme.md](schemes/row-56-rashtriya-gram-swaraj-abhiyan-rgsa/scheme.md) |
| 57 | ULIP – Unified Logistics Interface Platform | ROW-57 | central | [scheme.md](schemes/row-57-ulip-unified-logistics-interface-platform/scheme.md) |
| 58 | PM GatiShakti National Master Plan | ROW-58 | central | [scheme.md](schemes/row-58-pm-gatishakti-national-master-plan/scheme.md) |
| 59 | Logistics Efficiency Enhancement Programme (LEEP) | ROW-59 | central | [scheme.md](schemes/row-59-logistics-efficiency-enhancement-programme-leep/scheme.md) |
| 60 | Sagarmala Programme | ROW-60 | central | [scheme.md](schemes/row-60-sagarmala-programme/scheme.md) |
| 61 | Bharatmala Pariyojana | ROW-61 | central | [scheme.md](schemes/row-61-bharatmala-pariyojana/scheme.md) |
| 62 | AMRUT 2.0 | ROW-62 | central | [scheme.md](schemes/row-62-amrut-2-0/scheme.md) |
| 63 | National Water Mission | ROW-63 | central | [scheme.md](schemes/row-63-national-water-mission/scheme.md) |
| 64 | Jal Jeevan Mission | ROW-64 | central | [scheme.md](schemes/row-64-jal-jeevan-mission/scheme.md) |
| 65 | DigiLocker | ROW-65 | central | [scheme.md](schemes/row-65-digilocker/scheme.md) |
| 66 | e-RUPI Scheme | ROW-66 | central | [scheme.md](schemes/row-66-e-rupi-scheme/scheme.md) |
| 67 | ONDC (Open Network for Digital Commerce) | ROW-67 | central | [scheme.md](schemes/row-67-ondc-open-network-for-digital-commerce/scheme.md) |
| 68 | Account Aggregator Framework | ROW-68 | central | [scheme.md](schemes/row-68-account-aggregator-framework/scheme.md) |
| 69 | IndiaStack Initiatives | ROW-69 | central | [scheme.md](schemes/row-69-indiastack-initiatives/scheme.md) |
| 70 | Section 80IAC – Tax Exemption for Startups | ROW-70 | central | [scheme.md](schemes/row-70-section-80iac-tax-exemption-for-startups/scheme.md) |
| 71 | Angel Tax Exemption for DPIIT Startups | ROW-71 | central | [scheme.md](schemes/row-71-angel-tax-exemption-for-dpiit-startups/scheme.md) |
| 72 | MSME Delayed Payment Portal (MSME SAMADHAAN) | ROW-72 | central | [scheme.md](schemes/row-72-msme-delayed-payment-portal-msme-samadhaan/scheme.md) |
| 73 | MSME SAMBANDH (Public Procurement Portal) | ROW-73 | central | [scheme.md](schemes/row-73-msme-sambandh-public-procurement-portal/scheme.md) |
| 74 | Startup IP Protection – Fast Track Patent Examination | ROW-74 | central | [scheme.md](schemes/row-74-startup-ip-protection-fast-track-patent-examination/scheme.md) |
| 75 | SIPP Scheme (Startup Intellectual Property Protection) | ROW-75 | central | [scheme.md](schemes/row-75-sipp-scheme-startup-intellectual-property-protection/scheme.md) |
| 76 | Design Registration Facilitation for Startups | ROW-76 | central | [scheme.md](schemes/row-76-design-registration-facilitation-for-startups/scheme.md) |
| 77 | GI Tag – Geographical Indications Registry | ROW-77 | central | [scheme.md](schemes/row-77-gi-tag-geographical-indications-registry/scheme.md) |
| 78 | ISRO Start-up Policy & Technology Transfer | ROW-78 | central | [scheme.md](schemes/row-78-isro-start-up-policy-technology-transfer/scheme.md) |
| 79 | DRDO CEPTAM Scheme | ROW-79 | central | [scheme.md](schemes/row-79-drdo-ceptam-scheme/scheme.md) |
| 80 | Defence India Startup Challenge (DISC) – iDEX | ROW-80 | central | [scheme.md](schemes/row-80-defence-india-startup-challenge-disc-idex/scheme.md) |
| 81 | Innovations for Defence Excellence (iDEX4Fauji) | ROW-81 | central | [scheme.md](schemes/row-81-innovations-for-defence-excellence-idex4fauji/scheme.md) |
| 82 | Ayushman Bharat Digital Mission (ABDM) | ROW-82 | central | [scheme.md](schemes/row-82-ayushman-bharat-digital-mission-abdm/scheme.md) |
| 83 | National Health Mission (NHM) Innovation Fund | ROW-83 | central | [scheme.md](schemes/row-83-national-health-mission-nhm-innovation-fund/scheme.md) |
| 84 | PM Ayushman Bharat Health Infrastructure Mission | ROW-84 | central | [scheme.md](schemes/row-84-pm-ayushman-bharat-health-infrastructure-mission/scheme.md) |
| 85 | National Apprenticeship Promotion Scheme (NAPS) | ROW-85 | central | [scheme.md](schemes/row-85-national-apprenticeship-promotion-scheme-naps/scheme.md) |
| 86 | PM YASASVI Scholarship | ROW-86 | central | [scheme.md](schemes/row-86-pm-yasasvi-scholarship/scheme.md) |
| 87 | Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) | ROW-87 | state | [scheme.md](schemes/row-87-pradhan-mantri-uchchatar-shiksha-protsahan-pm-usp/scheme.md) |
| 89 | Van Dhan Vikas Kendra (VDVK) | ROW-89 | central | [scheme.md](schemes/row-89-van-dhan-vikas-kendra-vdvk/scheme.md) |
| 90 | Tribal Innovation & Entrepreneurship Fund (TIEF) | ROW-90 | central | [scheme.md](schemes/row-90-tribal-innovation-entrepreneurship-fund-tief/scheme.md) |
| 91 | North East Venture Fund (NEVF) | ROW-91 | central | [scheme.md](schemes/row-91-north-east-venture-fund-nevf/scheme.md) |
| 92 | NE Development Finance Corporation (NEDFi) | ROW-92 | central | [scheme.md](schemes/row-92-ne-development-finance-corporation-nedfi/scheme.md) |
| 93 | North East Industrial Development Scheme (NEIDS) | ROW-93 | central | [scheme.md](schemes/row-93-north-east-industrial-development-scheme-neids/scheme.md) |
| 94 | Venture Capital Fund for Scheduled Castes (VCFSC) | ROW-94 | central | [scheme.md](schemes/row-94-venture-capital-fund-for-scheduled-castes-vcfsc/scheme.md) |
| 95 | Jan Dhan Yojana (PMJDY) | ROW-95 | central | [scheme.md](schemes/row-95-jan-dhan-yojana-pmjdy/scheme.md) |
| 100 | BIRAC BioAngels Network | ROW-100 | central | [scheme.md](schemes/row-100-birac-bioangels-network/scheme.md) |
| 101 | NSTEDB Entrepreneurship Awareness Camps | ROW-101 | central | [scheme.md](schemes/row-101-nstedb-entrepreneurship-awareness-camps/scheme.md) |
| 102 | Atal Tinkering Labs (ATL) | ROW-102 | central | [scheme.md](schemes/row-102-atal-tinkering-labs-atl/scheme.md) |
| 103 | Mission Innovation India | ROW-103 | central | [scheme.md](schemes/row-103-mission-innovation-india/scheme.md) |
| 104 | Smart Cities Mission | ROW-104 | central | [scheme.md](schemes/row-104-smart-cities-mission/scheme.md) |
| 105 | National Innovation Foundation (NIF) Grants | ROW-105 | central | [scheme.md](schemes/row-105-national-innovation-foundation-nif-grants/scheme.md) |
| 106 | Green India Mission | ROW-106 | central | [scheme.md](schemes/row-106-green-india-mission/scheme.md) |
| 107 | Faster Adoption of Manufacturing of Hybrid and Electric Vehicles (FAME) | ROW-107 | central | [scheme.md](schemes/row-107-faster-adoption-of-manufacturing-of-hybrid-and-electric-vehicles-fame/scheme.md) |
| 108 | National Clean Energy Fund (NCEF) | ROW-108 | central | [scheme.md](schemes/row-108-national-clean-energy-fund-ncef/scheme.md) |
| 109 | MNRE Off-grid Solar Power Schemes | ROW-109 | central | [scheme.md](schemes/row-109-mnre-off-grid-solar-power-schemes/scheme.md) |
| 110 | Karnataka Startup Policy | ROW-110 | state | [scheme.md](schemes/row-110-karnataka-startup-policy/scheme.md) |
| 111 | KDEM Elevate Programme | ROW-111 | state | [scheme.md](schemes/row-111-kdem-elevate-programme/scheme.md) |
| 112 | Maharashtra State Innovation Society | ROW-112 | state | [scheme.md](schemes/row-112-maharashtra-state-innovation-society/scheme.md) |
| 113 | Maha Startup Scheme | ROW-113 | state | [scheme.md](schemes/row-113-maha-startup-scheme/scheme.md) |
| 114 | Tamil Nadu Startup & Innovation Policy | ROW-114 | state | [scheme.md](schemes/row-114-tamil-nadu-startup-innovation-policy/scheme.md) |
| 115 | EDII Tamil Nadu Incubation Scheme | ROW-115 | state | [scheme.md](schemes/row-115-edii-tamil-nadu-incubation-scheme/scheme.md) |
| 116 | Gujarat Startup Policy | ROW-116 | state | [scheme.md](schemes/row-116-gujarat-startup-policy/scheme.md) |
| 117 | iCreate – International Centre for Entrepreneurship and Technology | ROW-117 | state | [scheme.md](schemes/row-117-icreate-international-centre-for-entrepreneurship-and-technology/scheme.md) |
| 118 | UP Startup Policy & One District One Product (ODOP) | ROW-118 | state | [scheme.md](schemes/row-118-up-startup-policy-one-district-one-product-odop/scheme.md) |
| 119 | UP MSME and Export Promotion Council Schemes | ROW-119 | state | [scheme.md](schemes/row-119-up-msme-and-export-promotion-council-schemes/scheme.md) |
| 120 | Rajasthan Startup & MSME Policy | ROW-120 | state | [scheme.md](schemes/row-120-rajasthan-startup-msme-policy/scheme.md) |
| 121 | T-Hub Foundation Incubation | ROW-121 | state | [scheme.md](schemes/row-121-t-hub-foundation-incubation/scheme.md) |
| 122 | WE-Hub Women Entrepreneurship Program | ROW-122 | state | [scheme.md](schemes/row-122-we-hub-women-entrepreneurship-program/scheme.md) |
| 123 | AP Innovation Society & APEX Incubation | ROW-123 | state | [scheme.md](schemes/row-123-ap-innovation-society-apex-incubation/scheme.md) |
| 124 | Kerala Startup Mission (KSUM) | ROW-124 | state | [scheme.md](schemes/row-124-kerala-startup-mission-ksum/scheme.md) |
| 125 | Delhi Startup Policy | ROW-125 | state | [scheme.md](schemes/row-125-delhi-startup-policy/scheme.md) |
| 126 | Fisheries and Aquaculture Infrastructure Development Fund (FIDF) | ROW-126 | central | [scheme.md](schemes/row-126-fisheries-and-aquaculture-infrastructure-development-fund-fidf/scheme.md) |
| 127 | Blue Revolution – Neela Kranti | ROW-127 | central | [scheme.md](schemes/row-127-blue-revolution-neela-kranti/scheme.md) |
| 128 | Emergency Credit Line Guarantee Scheme (ECLGS) | ROW-128 | central | [scheme.md](schemes/row-128-emergency-credit-line-guarantee-scheme-eclgs/scheme.md) |
| 129 | Credit Guarantee Fund for Micro Units (CGFMU) | ROW-129 | central | [scheme.md](schemes/row-129-credit-guarantee-fund-for-micro-units-cgfmu/scheme.md) |
| 130 | RBI Regulatory Sandbox for Fintech | ROW-130 | central | [scheme.md](schemes/row-130-rbi-regulatory-sandbox-for-fintech/scheme.md) |
| 131 | SEBI Innovation Sandbox | ROW-131 | central | [scheme.md](schemes/row-131-sebi-innovation-sandbox/scheme.md) |
| 132 | SIDBI Make in India Soft Loan Fund (SMILE) | ROW-132 | central | [scheme.md](schemes/row-132-sidbi-make-in-india-soft-loan-fund-smile/scheme.md) |
| 133 | NSIC Bill Discounting Scheme | ROW-133 | central | [scheme.md](schemes/row-133-nsic-bill-discounting-scheme/scheme.md) |
| 134 | Jan Samarth Portal – Unified Credit Scheme Portal | ROW-134 | central | [scheme.md](schemes/row-134-jan-samarth-portal-unified-credit-scheme-portal/scheme.md) |
| 135 | Duty Drawback Scheme | ROW-135 | central | [scheme.md](schemes/row-135-duty-drawback-scheme/scheme.md) |
| 136 | Advance Authorization Scheme | ROW-136 | central | [scheme.md](schemes/row-136-advance-authorization-scheme/scheme.md) |
| 137 | Special Economic Zone (SEZ) Scheme | ROW-137 | central | [scheme.md](schemes/row-137-special-economic-zone-sez-scheme/scheme.md) |
| 138 | Export Oriented Unit (EOU) Scheme | ROW-138 | central | [scheme.md](schemes/row-138-export-oriented-unit-eou-scheme/scheme.md) |
| 139 | Software Technology Park (STP) Scheme | ROW-139 | central | [scheme.md](schemes/row-139-software-technology-park-stp-scheme/scheme.md) |
| 140 | One District One Product (ODOP) Export Scheme | ROW-140 | central | [scheme.md](schemes/row-140-one-district-one-product-odop-export-scheme/scheme.md) |
| 141 | Interest Subvention Scheme for MSMEs on Post Shipment Credit | ROW-141 | central | [scheme.md](schemes/row-141-interest-subvention-scheme-for-msmes-on-post-shipment-credit/scheme.md) |
| 142 | ECGC MSME Export Scheme | ROW-142 | central | [scheme.md](schemes/row-142-ecgc-msme-export-scheme/scheme.md) |
| 145 | National Mission for Sustainable Agriculture (NMSA) | ROW-145 | central | [scheme.md](schemes/row-145-national-mission-for-sustainable-agriculture-nmsa/scheme.md) |
| 146 | Paramparagat Krishi Vikas Yojana (PKVY) – Organic Farming | ROW-146 | central | [scheme.md](schemes/row-146-paramparagat-krishi-vikas-yojana-pkvy-organic-farming/scheme.md) |
| 147 | Sub-Mission on Agricultural Mechanisation (SMAM) | ROW-147 | central | [scheme.md](schemes/row-147-sub-mission-on-agricultural-mechanisation-smam/scheme.md) |
| 148 | National Beekeeping & Honey Mission (NBHM) | ROW-148 | central | [scheme.md](schemes/row-148-national-beekeeping-honey-mission-nbhm/scheme.md) |
| 149 | Micro Irrigation Fund (MIF) – NABARD | ROW-149 | central | [scheme.md](schemes/row-149-micro-irrigation-fund-mif-nabard/scheme.md) |
| 150 | Agricultural Infrastructure Fund (AIF) | ROW-150 | central | [scheme.md](schemes/row-150-agricultural-infrastructure-fund-aif/scheme.md) |
| 151 | Formation and Promotion of FPOs Scheme | ROW-151 | central | [scheme.md](schemes/row-151-formation-and-promotion-of-fpos-scheme/scheme.md) |
| 152 | National Agriculture Market (e-NAM) | ROW-152 | central | [scheme.md](schemes/row-152-national-agriculture-market-e-nam/scheme.md) |
| 153 | PM Annadata Aay Sanrakshan Abhiyan (PM-AASHA) | ROW-153 | central | [scheme.md](schemes/row-153-pm-annadata-aay-sanrakshan-abhiyan-pm-aasha/scheme.md) |
| 154 | National Food Security Mission (NFSM) | ROW-154 | central | [scheme.md](schemes/row-154-national-food-security-mission-nfsm/scheme.md) |
| 155 | Agri Export Zones (AEZ) | ROW-155 | central | [scheme.md](schemes/row-155-agri-export-zones-aez/scheme.md) |
| 156 | Interest Subvention Scheme for Short Term Credit to Farmers | ROW-156 | central | [scheme.md](schemes/row-156-interest-subvention-scheme-for-short-term-credit-to-farmers/scheme.md) |
| 157 | Kisan Credit Card (KCC) for Farmers | ROW-157 | central | [scheme.md](schemes/row-157-kisan-credit-card-kcc-for-farmers/scheme.md) |
| 158 | Kisan Credit Card for Fisheries & Animal Husbandry | ROW-158 | central | [scheme.md](schemes/row-158-kisan-credit-card-for-fisheries-animal-husbandry/scheme.md) |
| 159 | National Scheme on Welfare of Fishermen | ROW-159 | central | [scheme.md](schemes/row-159-national-scheme-on-welfare-of-fishermen/scheme.md) |
| 160 | Aquaculture Development Scheme (MPEDA) | ROW-160 | central | [scheme.md](schemes/row-160-aquaculture-development-scheme-mpeda/scheme.md) |
| 161 | Mission for Integrated Development of Horticulture (MIDH) | ROW-161 | central | [scheme.md](schemes/row-161-mission-for-integrated-development-of-horticulture-midh/scheme.md) |
| 162 | National Horticulture Mission (NHM) | ROW-162 | central | [scheme.md](schemes/row-162-national-horticulture-mission-nhm/scheme.md) |
| 163 | Horticulture Cluster Development Programme (CDP) | ROW-163 | central | [scheme.md](schemes/row-163-horticulture-cluster-development-programme-cdp/scheme.md) |
| 164 | National Horticulture Board (NHB) Schemes | ROW-164 | central | [scheme.md](schemes/row-164-national-horticulture-board-nhb-schemes/scheme.md) |
| 165 | Micro & Small Enterprises Cluster Development Programme (MSE-CDP) | ROW-165 | central | [scheme.md](schemes/row-165-micro-small-enterprises-cluster-development-programme-mse-cdp/scheme.md) |
| 166 | National SC/ST Hub | ROW-166 | central | [scheme.md](schemes/row-166-national-sc-st-hub/scheme.md) |
| 167 | MSME Competitive (LEAN) Scheme | ROW-167 | central | [scheme.md](schemes/row-167-msme-competitive-lean-scheme/scheme.md) |
| 168 | Digital MSME Scheme | ROW-168 | central | [scheme.md](schemes/row-168-digital-msme-scheme/scheme.md) |
| 169 | Udyam Assist Platform (UAP) for Informal Sector | ROW-169 | central | [scheme.md](schemes/row-169-udyam-assist-platform-uap-for-informal-sector/scheme.md) |
| 170 | Raising and Accelerating MSME Performance (RAMP) | ROW-170 | central | [scheme.md](schemes/row-170-raising-and-accelerating-msme-performance-ramp/scheme.md) |
| 171 | Champions Portal for MSME Grievance Resolution | ROW-171 | central | [scheme.md](schemes/row-171-champions-portal-for-msme-grievance-resolution/scheme.md) |
| 172 | National Technical Textiles Mission (NTTM) | ROW-172 | central | [scheme.md](schemes/row-172-national-technical-textiles-mission-nttm/scheme.md) |
| 173 | Amended Technology Upgradation Fund Scheme (ATUFS) | ROW-173 | central | [scheme.md](schemes/row-173-amended-technology-upgradation-fund-scheme-atufs/scheme.md) |
| 174 | Integrated Processing Development Scheme (IPDS) | ROW-174 | central | [scheme.md](schemes/row-174-integrated-processing-development-scheme-ipds/scheme.md) |
| 175 | Scheme for Integrated Textile Parks (SITP) | ROW-175 | central | [scheme.md](schemes/row-175-scheme-for-integrated-textile-parks-sitp/scheme.md) |
| 176 | Handloom Weavers Comprehensive Welfare Scheme | ROW-176 | central | [scheme.md](schemes/row-176-handloom-weavers-comprehensive-welfare-scheme/scheme.md) |
| 177 | Workshed Scheme for Handloom Weavers | ROW-177 | central | [scheme.md](schemes/row-177-workshed-scheme-for-handloom-weavers/scheme.md) |
| 178 | Yarn Supply Scheme for Handloom Weavers | ROW-178 | central | [scheme.md](schemes/row-178-yarn-supply-scheme-for-handloom-weavers/scheme.md) |
| 179 | MUDRA Loan for Weavers (Weaver MUDRA Scheme) | ROW-179 | central | [scheme.md](schemes/row-179-mudra-loan-for-weavers-weaver-mudra-scheme/scheme.md) |
| 180 | Raw Material Supply Scheme (RMSS) for Handlooms | ROW-180 | central | [scheme.md](schemes/row-180-raw-material-supply-scheme-rmss-for-handlooms/scheme.md) |
| 181 | Handicrafts Artisan Comprehensive Welfare Scheme | ROW-181 | central | [scheme.md](schemes/row-181-handicrafts-artisan-comprehensive-welfare-scheme/scheme.md) |
| 182 | IndiaAI Compute Initiative | ROW-182 | central | [scheme.md](schemes/row-182-indiaai-compute-initiative/scheme.md) |
| 183 | Cyber Security Centre of Excellence (CCoE) | ROW-183 | central | [scheme.md](schemes/row-183-cyber-security-centre-of-excellence-ccoe/scheme.md) |
| 184 | MeitY Startup Hub (MSH) | ROW-184 | central | [scheme.md](schemes/row-184-meity-startup-hub-msh/scheme.md) |
| 185 | National Supercomputing Mission (NSM) | ROW-185 | central | [scheme.md](schemes/row-185-national-supercomputing-mission-nsm/scheme.md) |
| 186 | BharatNet Broadband Infrastructure | ROW-186 | central | [scheme.md](schemes/row-186-bharatnet-broadband-infrastructure/scheme.md) |
| 187 | PM-WANI (WiFi Access Network Interface) | ROW-187 | central | [scheme.md](schemes/row-187-pm-wani-wifi-access-network-interface/scheme.md) |
| 188 | National Quantum Mission | ROW-188 | central | [scheme.md](schemes/row-188-national-quantum-mission/scheme.md) |
| 189 | Semicon India Programme | ROW-189 | central | [scheme.md](schemes/row-189-semicon-india-programme/scheme.md) |
| 190 | National Green Hydrogen Mission | ROW-190 | central | [scheme.md](schemes/row-190-national-green-hydrogen-mission/scheme.md) |
| 191 | Solar Parks & Ultra Mega Solar Power Projects | ROW-191 | central | [scheme.md](schemes/row-191-solar-parks-ultra-mega-solar-power-projects/scheme.md) |
| 192 | Small Hydro Power Programme | ROW-192 | central | [scheme.md](schemes/row-192-small-hydro-power-programme/scheme.md) |
| 193 | National Wind-Solar Hybrid Policy | ROW-193 | central | [scheme.md](schemes/row-193-national-wind-solar-hybrid-policy/scheme.md) |
| 194 | Offshore Wind Energy Policy | ROW-194 | central | [scheme.md](schemes/row-194-offshore-wind-energy-policy/scheme.md) |
| 195 | Perform Achieve and Trade (PAT) Scheme | ROW-195 | central | [scheme.md](schemes/row-195-perform-achieve-and-trade-pat-scheme/scheme.md) |
| 196 | UJALA Scheme – Unnat Jyoti by Affordable LEDs | ROW-196 | central | [scheme.md](schemes/row-196-ujala-scheme-unnat-jyoti-by-affordable-leds/scheme.md) |
| 197 | Standards & Labelling Programme (BEE) | ROW-197 | central | [scheme.md](schemes/row-197-standards-labelling-programme-bee/scheme.md) |
| 198 | National Mission for Enhanced Energy Efficiency (NMEEE) | ROW-198 | central | [scheme.md](schemes/row-198-national-mission-for-enhanced-energy-efficiency-nmeee/scheme.md) |
| 199 | National Digital Health Mission (NDHM) | ROW-199 | central | [scheme.md](schemes/row-199-national-digital-health-mission-ndhm/scheme.md) |
| 200 | Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) | ROW-200 | central | [scheme.md](schemes/row-200-pradhan-mantri-swasthya-suraksha-yojana-pmssy/scheme.md) |
| 201 | National AYUSH Mission | ROW-201 | central | [scheme.md](schemes/row-201-national-ayush-mission/scheme.md) |
| 202 | Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) | ROW-202 | central | [scheme.md](schemes/row-202-pradhan-mantri-bhartiya-janaushadhi-pariyojana-pmbjp/scheme.md) |
| 203 | Medical Devices Park Scheme | ROW-203 | central | [scheme.md](schemes/row-203-medical-devices-park-scheme/scheme.md) |
| 204 | Bulk Drug Parks Scheme | ROW-204 | central | [scheme.md](schemes/row-204-bulk-drug-parks-scheme/scheme.md) |
| 205 | National Tele Mental Health Programme (Tele-MANAS) | ROW-205 | central | [scheme.md](schemes/row-205-national-tele-mental-health-programme-tele-manas/scheme.md) |
| 206 | PM SHRI Schools (PM Schools for Rising India) | ROW-206 | central | [scheme.md](schemes/row-206-pm-shri-schools-pm-schools-for-rising-india/scheme.md) |
| 207 | Institutes of Eminence (IoE) Scheme | ROW-207 | central | [scheme.md](schemes/row-207-institutes-of-eminence-ioe-scheme/scheme.md) |
| 208 | IMPRINT India (Impacting Research Innovation and Technology) | ROW-208 | central | [scheme.md](schemes/row-208-imprint-india-impacting-research-innovation-and-technology/scheme.md) |
| 209 | Global Initiative for Academic Networks (GIAN) | ROW-209 | central | [scheme.md](schemes/row-209-global-initiative-for-academic-networks-gian/scheme.md) |
| 210 | SWAYAM Free Online Education Platform | ROW-210 | central | [scheme.md](schemes/row-210-swayam-free-online-education-platform/scheme.md) |
| 211 | Pradhan Mantri Research Fellows (PMRF) Scheme | ROW-211 | central | [scheme.md](schemes/row-211-pradhan-mantri-research-fellows-pmrf-scheme/scheme.md) |
| 212 | SWAYAM PRABHA DTH Channels for Education | ROW-212 | central | [scheme.md](schemes/row-212-swayam-prabha-dth-channels-for-education/scheme.md) |
| 213 | Make in India for Defence (MII Defence) | ROW-213 | central | [scheme.md](schemes/row-213-make-in-india-for-defence-mii-defence/scheme.md) |
| 214 | DRDO Technology Transfer to Industry | ROW-214 | central | [scheme.md](schemes/row-214-drdo-technology-transfer-to-industry/scheme.md) |
| 215 | Atmanirbhar Bharat Defence Production Policy | ROW-215 | central | [scheme.md](schemes/row-215-atmanirbhar-bharat-defence-production-policy/scheme.md) |
| 216 | DSIR Recognition for In-house R&D Units | ROW-216 | central | [scheme.md](schemes/row-216-dsir-recognition-for-in-house-r-d-units/scheme.md) |
| 217 | Atal Mission for Rejuvenation and Urban Transformation (AMRUT 1.0) | ROW-217 | central | [scheme.md](schemes/row-217-atal-mission-for-rejuvenation-and-urban-transformation-amrut-1-0/scheme.md) |
| 218 | National Urban Livelihood Mission (NULM) | ROW-218 | central | [scheme.md](schemes/row-218-national-urban-livelihood-mission-nulm/scheme.md) |
| 219 | HRIDAY – Heritage City Development and Augmentation Yojana | ROW-219 | central | [scheme.md](schemes/row-219-hriday-heritage-city-development-and-augmentation-yojana/scheme.md) |
| 220 | National Industrial Corridor Programme (NICP) | ROW-220 | central | [scheme.md](schemes/row-220-national-industrial-corridor-programme-nicp/scheme.md) |
| 221 | Delhi Mumbai Industrial Corridor (DMIC) | ROW-221 | central | [scheme.md](schemes/row-221-delhi-mumbai-industrial-corridor-dmic/scheme.md) |
| 222 | Viability Gap Funding (VGF) for PPP Projects | ROW-222 | central | [scheme.md](schemes/row-222-viability-gap-funding-vgf-for-ppp-projects/scheme.md) |
| 223 | Swadesh Darshan Scheme 2.0 | ROW-223 | central | [scheme.md](schemes/row-223-swadesh-darshan-scheme-2-0/scheme.md) |
| 224 | PRASAD Scheme – Pilgrimage Rejuvenation | ROW-224 | central | [scheme.md](schemes/row-224-prasad-scheme-pilgrimage-rejuvenation/scheme.md) |
| 225 | Hunar Se Rozgar Tak (HSRT) Scheme | ROW-225 | central | [scheme.md](schemes/row-225-hunar-se-rozgar-tak-hsrt-scheme/scheme.md) |
| 226 | Homestay Scheme for Rural Tourism | ROW-226 | central | [scheme.md](schemes/row-226-homestay-scheme-for-rural-tourism/scheme.md) |
| 227 | Medical & Wellness Tourism Policy | ROW-227 | central | [scheme.md](schemes/row-227-medical-wellness-tourism-policy/scheme.md) |
| 228 | National Mineral Exploration Trust (NMET) Grants | ROW-228 | central | [scheme.md](schemes/row-228-national-mineral-exploration-trust-nmet-grants/scheme.md) |
| 229 | PM Khanij Kshetra Kalyan Yojana (PMKKKY) | ROW-229 | central | [scheme.md](schemes/row-229-pm-khanij-kshetra-kalyan-yojana-pmkkky/scheme.md) |
| 230 | District Mineral Foundation (DMF) Support | ROW-230 | central | [scheme.md](schemes/row-230-district-mineral-foundation-dmf-support/scheme.md) |
| 231 | Geological Survey of India (GSI) Startup Mineral Exploration | ROW-231 | central | [scheme.md](schemes/row-231-geological-survey-of-india-gsi-startup-mineral-exploration/scheme.md) |
| 233 | Beti Bachao Beti Padhao (BBBP) | ROW-233 | central | [scheme.md](schemes/row-233-beti-bachao-beti-padhao-bbbp/scheme.md) |
| 234 | One Stop Centre Scheme (Sakhi) | ROW-234 | central | [scheme.md](schemes/row-234-one-stop-centre-scheme-sakhi/scheme.md) |
| 235 | Support to Training & Employment Programme (STEP) | ROW-235 | central | [scheme.md](schemes/row-235-support-to-training-employment-programme-step/scheme.md) |
| 236 | Mission Shakti – Women Safety & Empowerment | ROW-236 | central | [scheme.md](schemes/row-236-mission-shakti-women-safety-empowerment/scheme.md) |
| 238 | TRIFED Schemes for Tribal Enterprises | ROW-238 | central | [scheme.md](schemes/row-238-trifed-schemes-for-tribal-enterprises/scheme.md) |
| 239 | Pradhan Mantri Van Dhan Yojana | ROW-239 | central | [scheme.md](schemes/row-239-pradhan-mantri-van-dhan-yojana/scheme.md) |
| 240 | Mechanism for Marketing of Minor Forest Produce (MFP) | ROW-240 | central | [scheme.md](schemes/row-240-mechanism-for-marketing-of-minor-forest-produce-mfp/scheme.md) |
| 241 | Eklavya Model Residential Schools (EMRS) | ROW-241 | central | [scheme.md](schemes/row-241-eklavya-model-residential-schools-emrs/scheme.md) |
| 242 | MedTech Regulatory Sandbox (CDSCO) | ROW-242 | central | [scheme.md](schemes/row-242-medtech-regulatory-sandbox-cdsco/scheme.md) |
| 243 | Central Drugs Standard Control Organisation Fast Track | ROW-243 | central | [scheme.md](schemes/row-243-central-drugs-standard-control-organisation-fast-track/scheme.md) |
| 244 | Multimodal Logistics Park (MMLP) Scheme | ROW-244 | central | [scheme.md](schemes/row-244-multimodal-logistics-park-mmlp-scheme/scheme.md) |
| 245 | Dedicated Freight Corridor (DFC) Industry Linkage | ROW-245 | central | [scheme.md](schemes/row-245-dedicated-freight-corridor-dfc-industry-linkage/scheme.md) |
| 246 | LEEP – Logistics Ease Across Different States | ROW-246 | central | [scheme.md](schemes/row-246-leep-logistics-ease-across-different-states/scheme.md) |
| 247 | Punjab Startup and Entrepreneurship Policy | ROW-247 | state | [scheme.md](schemes/row-247-punjab-startup-and-entrepreneurship-policy/scheme.md) |
| 248 | Invest Punjab – Business First Portal | ROW-248 | state | [scheme.md](schemes/row-248-invest-punjab-business-first-portal/scheme.md) |
| 249 | MP Startup Policy & Yuva Udyami Yojana | ROW-249 | state | [scheme.md](schemes/row-249-mp-startup-policy-yuva-udyami-yojana/scheme.md) |
| 250 | MP MSME Development Policy | ROW-250 | state | [scheme.md](schemes/row-250-mp-msme-development-policy/scheme.md) |
| 251 | Odisha Startup Policy & iStart Odisha | ROW-251 | state | [scheme.md](schemes/row-251-odisha-startup-policy-istart-odisha/scheme.md) |
| 252 | MSME Development Policy Odisha | ROW-252 | state | [scheme.md](schemes/row-252-msme-development-policy-odisha/scheme.md) |
| 253 | West Bengal Startup Policy | ROW-253 | state | [scheme.md](schemes/row-253-west-bengal-startup-policy/scheme.md) |
| 254 | Bengal Silicon Valley Startup Hub | ROW-254 | state | [scheme.md](schemes/row-254-bengal-silicon-valley-startup-hub/scheme.md) |
| 255 | Jharkhand Startup Policy | ROW-255 | state | [scheme.md](schemes/row-255-jharkhand-startup-policy/scheme.md) |
| 256 | Assam Startup – Nidhi Program | ROW-256 | state | [scheme.md](schemes/row-256-assam-startup-nidhi-program/scheme.md) |
| 257 | Bihar Startup Policy | ROW-257 | state | [scheme.md](schemes/row-257-bihar-startup-policy/scheme.md) |
| 258 | HP Startup Yojana & HIMSTART | ROW-258 | state | [scheme.md](schemes/row-258-hp-startup-yojana-himstart/scheme.md) |
| 259 | CG Startup Policy & Nava Raipur Innovation City | ROW-259 | state | [scheme.md](schemes/row-259-cg-startup-policy-nava-raipur-innovation-city/scheme.md) |
| 260 | Goa Startup Policy | ROW-260 | state | [scheme.md](schemes/row-260-goa-startup-policy/scheme.md) |
| 261 | Uttarakhand Startup Policy & SIDCUL Incubation | ROW-261 | state | [scheme.md](schemes/row-261-uttarakhand-startup-policy-sidcul-incubation/scheme.md) |
| 262 | J&K New Industrial Development Scheme (J&K NIDS) | ROW-262 | state | [scheme.md](schemes/row-262-j-k-new-industrial-development-scheme-j-k-nids/scheme.md) |
| 263 | StartUp J&K Initiative | ROW-263 | state | [scheme.md](schemes/row-263-startup-j-k-initiative/scheme.md) |
| 264 | Technology Innovation Hub (TIH) – DST | ROW-264 | central | [scheme.md](schemes/row-264-technology-innovation-hub-tih-dst/scheme.md) |
| 265 | National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) | ROW-265 | central | [scheme.md](schemes/row-265-national-mission-on-interdisciplinary-cyber-physical-systems-nm-icps/scheme.md) |
| 266 | National Biopharma Mission | ROW-266 | central | [scheme.md](schemes/row-266-national-biopharma-mission/scheme.md) |
| 267 | Startup India Innovation Week Challenge | ROW-267 | central | [scheme.md](schemes/row-267-startup-india-innovation-week-challenge/scheme.md) |
| 268 | Centre for Nano Science and Engineering (CeNSE) Grants | ROW-268 | central | [scheme.md](schemes/row-268-centre-for-nano-science-and-engineering-cense-grants/scheme.md) |
| 269 | Space Technology Incubation Centre (S-TIC) – ISRO | ROW-269 | central | [scheme.md](schemes/row-269-space-technology-incubation-centre-s-tic-isro/scheme.md) |
| 270 | IIT Technology Business Incubators (TBIs) | ROW-270 | central | [scheme.md](schemes/row-270-iit-technology-business-incubators-tbis/scheme.md) |
| 271 | NIT Innovation & Entrepreneurship Development Centre | ROW-271 | state | [scheme.md](schemes/row-271-nit-innovation-entrepreneurship-development-centre/scheme.md) |
| 272 | NASSCOM 10000 Startups Programme | ROW-272 | central | [scheme.md](schemes/row-272-nasscom-10000-startups-programme/scheme.md) |
| 273 | STPI Centres of Entrepreneurship (CoE) | ROW-273 | central | [scheme.md](schemes/row-273-stpi-centres-of-entrepreneurship-coe/scheme.md) |
| 274 | IIM Ahmedabad CIIE.CO – Bharat Inclusion Initiative | ROW-274 | central | [scheme.md](schemes/row-274-iim-ahmedabad-ciie-co-bharat-inclusion-initiative/scheme.md) |
| 275 | SIDBI Startup Mitra – Incubation Portal | ROW-275 | central | [scheme.md](schemes/row-275-sidbi-startup-mitra-incubation-portal/scheme.md) |
| 276 | Atal Bhujal Yojana (Groundwater Management) | ROW-276 | central | [scheme.md](schemes/row-276-atal-bhujal-yojana-groundwater-management/scheme.md) |
| 277 | Swachh Bharat Mission – Urban 2.0 | ROW-277 | central | [scheme.md](schemes/row-277-swachh-bharat-mission-urban-2-0/scheme.md) |
| 278 | Swachh Bharat Mission – Gramin Phase II | ROW-278 | central | [scheme.md](schemes/row-278-swachh-bharat-mission-gramin-phase-ii/scheme.md) |
| 279 | GOBAR-DHAN Scheme | ROW-279 | central | [scheme.md](schemes/row-279-gobar-dhan-scheme/scheme.md) |
| 280 | Affordable Rental Housing Complexes (ARHC) Scheme | ROW-280 | central | [scheme.md](schemes/row-280-affordable-rental-housing-complexes-arhc-scheme/scheme.md) |
| 281 | Light House Projects (LHP) for Affordable Housing | ROW-281 | central | [scheme.md](schemes/row-281-light-house-projects-lhp-for-affordable-housing/scheme.md) |
| 282 | NFDC Production Grants | ROW-282 | central | [scheme.md](schemes/row-282-nfdc-production-grants/scheme.md) |
| 283 | Film Facilitation Office (FFO) – Single Window Clearance | ROW-283 | central | [scheme.md](schemes/row-283-film-facilitation-office-ffo-single-window-clearance/scheme.md) |
| 284 | AVGC-XR Policy (Animation, VFX, Gaming, Comics) | ROW-284 | central | [scheme.md](schemes/row-284-avgc-xr-policy-animation-vfx-gaming-comics/scheme.md) |
| 285 | Ambedkar Hastshilp Vikas Yojana | ROW-285 | central | [scheme.md](schemes/row-285-ambedkar-hastshilp-vikas-yojana/scheme.md) |
| 286 | Design & Technical Upgradation Scheme for Handicrafts | ROW-286 | central | [scheme.md](schemes/row-286-design-technical-upgradation-scheme-for-handicrafts/scheme.md) |
| 287 | Marketing Support & Services for Handicrafts | ROW-287 | central | [scheme.md](schemes/row-287-marketing-support-services-for-handicrafts/scheme.md) |
| 288 | Export Promotion for Handicrafts (EPCH) | ROW-288 | central | [scheme.md](schemes/row-288-export-promotion-for-handicrafts-epch/scheme.md) |
| 289 | National Centre for Textile Design (NCTD) | ROW-289 | central | [scheme.md](schemes/row-289-national-centre-for-textile-design-nctd/scheme.md) |
| 290 | PLI for Telecom & Networking Products | ROW-290 | central | [scheme.md](schemes/row-290-pli-for-telecom-networking-products/scheme.md) |
| 291 | Digital Communications Innovation Square (DCIS) | ROW-291 | central | [scheme.md](schemes/row-291-digital-communications-innovation-square-dcis/scheme.md) |
| 292 | Telecom Technology Development Fund (TTDF) | ROW-292 | central | [scheme.md](schemes/row-292-telecom-technology-development-fund-ttdf/scheme.md) |
| 293 | 5G Use Case Labs & Testbeds Initiative | ROW-293 | central | [scheme.md](schemes/row-293-5g-use-case-labs-testbeds-initiative/scheme.md) |
| 294 | Universal Service Obligation Fund (USOF) Schemes | ROW-294 | central | [scheme.md](schemes/row-294-universal-service-obligation-fund-usof-schemes/scheme.md) |
| 295 | Khelo India – Sport Tech Fund | ROW-295 | central | [scheme.md](schemes/row-295-khelo-india-sport-tech-fund/scheme.md) |
| 296 | Target Olympic Podium Scheme (TOPS) | ROW-296 | central | [scheme.md](schemes/row-296-target-olympic-podium-scheme-tops/scheme.md) |
| 297 | National Sports Development Fund (NSDF) | ROW-297 | central | [scheme.md](schemes/row-297-national-sports-development-fund-nsdf/scheme.md) |
| 298 | Sports Authority of India (SAI) Training Grants | ROW-298 | central | [scheme.md](schemes/row-298-sports-authority-of-india-sai-training-grants/scheme.md) |
| 299 | MSME IP Facilitation Centre | ROW-299 | central | [scheme.md](schemes/row-299-msme-ip-facilitation-centre/scheme.md) |
| 300 | Traditional Knowledge Digital Library (TKDL) | ROW-300 | central | [scheme.md](schemes/row-300-traditional-knowledge-digital-library-tkdl/scheme.md) |
| 301 | National IPR Policy 2016 Implementation Schemes | ROW-301 | central | [scheme.md](schemes/row-301-national-ipr-policy-2016-implementation-schemes/scheme.md) |
| 302 | MSME Pre-Pack Insolvency Resolution Process (PPIRP) | ROW-302 | central | [scheme.md](schemes/row-302-msme-pre-pack-insolvency-resolution-process-ppirp/scheme.md) |
| 303 | Ease of Doing Business – BizReform App | ROW-303 | central | [scheme.md](schemes/row-303-ease-of-doing-business-bizreform-app/scheme.md) |
| 304 | Shram Suvidha Portal – Labour Compliance | ROW-304 | central | [scheme.md](schemes/row-304-shram-suvidha-portal-labour-compliance/scheme.md) |
| 305 | NCLT Fast Track Insolvency for MSMEs | ROW-305 | central | [scheme.md](schemes/row-305-nclt-fast-track-insolvency-for-msmes/scheme.md) |
| 306 | Mega Food Parks Scheme | ROW-306 | central | [scheme.md](schemes/row-306-mega-food-parks-scheme/scheme.md) |
| 307 | Integrated Cold Chain and Value Addition Infrastructure | ROW-307 | central | [scheme.md](schemes/row-307-integrated-cold-chain-and-value-addition-infrastructure/scheme.md) |
| 308 | Scheme for Agro-Marine Processing & Development (SAMPADA) | ROW-308 | central | [scheme.md](schemes/row-308-scheme-for-agro-marine-processing-development-sampada/scheme.md) |
| 309 | Food Safety & Standards Authority of India (FSSAI) Compliance Support | ROW-309 | central | [scheme.md](schemes/row-309-food-safety-standards-authority-of-india-fssai-compliance-support/scheme.md) |
| 310 | Animal Husbandry Infrastructure Development Fund (AHIDF) | ROW-310 | central | [scheme.md](schemes/row-310-animal-husbandry-infrastructure-development-fund-ahidf/scheme.md) |
| 311 | PM Matsya Kisan Samridhi Sah-Yojana (PM-MKSSY) | ROW-311 | central | [scheme.md](schemes/row-311-pm-matsya-kisan-samridhi-sah-yojana-pm-mkssy/scheme.md) |
| 312 | National Livestock Mission (NLM) | ROW-312 | central | [scheme.md](schemes/row-312-national-livestock-mission-nlm/scheme.md) |
| 313 | National Programme for Dairy Development (NPDD) | ROW-313 | central | [scheme.md](schemes/row-313-national-programme-for-dairy-development-npdd/scheme.md) |
| 314 | Dairy Processing & Infrastructure Development Fund (DIDF) | ROW-314 | central | [scheme.md](schemes/row-314-dairy-processing-infrastructure-development-fund-didf/scheme.md) |
| 315 | Rashtriya Gokul Mission | ROW-315 | central | [scheme.md](schemes/row-315-rashtriya-gokul-mission/scheme.md) |
| 316 | National Cooperative Development Corporation (NCDC) Grants | ROW-316 | central | [scheme.md](schemes/row-316-national-cooperative-development-corporation-ncdc-grants/scheme.md) |
| 317 | Cooperative Societies Credit Support Scheme | ROW-317 | central | [scheme.md](schemes/row-317-cooperative-societies-credit-support-scheme/scheme.md) |
| 318 | PACS (Primary Agricultural Cooperative Societies) Computerisation | ROW-318 | central | [scheme.md](schemes/row-318-pacs-primary-agricultural-cooperative-societies-computerisation/scheme.md) |
| 319 | National Cooperative Exports Limited (NCEL) Scheme | ROW-319 | central | [scheme.md](schemes/row-319-national-cooperative-exports-limited-ncel-scheme/scheme.md) |
| 320 | Multi State Cooperative Societies Development Fund | ROW-320 | central | [scheme.md](schemes/row-320-multi-state-cooperative-societies-development-fund/scheme.md) |
| 321 | GAIL Pankh Startup Initiative | ROW-321 | central | [scheme.md](schemes/row-321-gail-pankh-startup-initiative/scheme.md) |
| 322 | Indian Oil Startup Scheme | ROW-322 | central | [scheme.md](schemes/row-322-indian-oil-startup-scheme/scheme.md) |
| 323 | HAL Innovation & Startup Centre | ROW-323 | central | [scheme.md](schemes/row-323-hal-innovation-startup-centre/scheme.md) |
| 324 | SAIL Startup & Innovation Policy | ROW-324 | central | [scheme.md](schemes/row-324-sail-startup-innovation-policy/scheme.md) |
| 325 | BEL Innovation & Startup Support | ROW-325 | central | [scheme.md](schemes/row-325-bel-innovation-startup-support/scheme.md) |
| 326 | IRCTC Startup Innovation Fund | ROW-326 | central | [scheme.md](schemes/row-326-irctc-startup-innovation-fund/scheme.md) |
| 327 | RailTel Innovation Challenge | ROW-327 | central | [scheme.md](schemes/row-327-railtel-innovation-challenge/scheme.md) |
| 328 | NHPC Start-Up Initiative | ROW-328 | central | [scheme.md](schemes/row-328-nhpc-start-up-initiative/scheme.md) |
| 329 | Power Grid Innovation Challenge | ROW-329 | central | [scheme.md](schemes/row-329-power-grid-innovation-challenge/scheme.md) |
| 330 | CSIR Technologies for MSMEs | ROW-330 | central | [scheme.md](schemes/row-330-csir-technologies-for-msmes/scheme.md) |
| 331 | ICMR Research Grants for Health Startups | ROW-331 | central | [scheme.md](schemes/row-331-icmr-research-grants-for-health-startups/scheme.md) |
| 332 | ICAR – Agri Startup Grants | ROW-332 | central | [scheme.md](schemes/row-332-icar-agri-startup-grants/scheme.md) |
| 333 | NABARD RIDF (Rural Infrastructure Development Fund) | ROW-333 | central | [scheme.md](schemes/row-333-nabard-ridf-rural-infrastructure-development-fund/scheme.md) |
| 334 | GIZ – DEG India Startup Finance | ROW-334 | central | [scheme.md](schemes/row-334-giz-deg-india-startup-finance/scheme.md) |
| 336 | WEP – Women Entrepreneurship Platform (NITI Aayog) | ROW-336 | central | [scheme.md](schemes/row-336-wep-women-entrepreneurship-platform-niti-aayog/scheme.md) |
| 337 | She Means Business – Digital Skills for Women | ROW-337 | central | [scheme.md](schemes/row-337-she-means-business-digital-skills-for-women/scheme.md) |
| 338 | Dena Shakti Scheme for Women (Bank of Baroda) | ROW-338 | central | [scheme.md](schemes/row-338-dena-shakti-scheme-for-women-bank-of-baroda/scheme.md) |
| 339 | Synd Mahila Shakti Scheme (Syndicate Bank) | ROW-339 | central | [scheme.md](schemes/row-339-synd-mahila-shakti-scheme-syndicate-bank/scheme.md) |
| 340 | TIDCO – Tamil Nadu Industrial Dev. Corp Schemes | ROW-340 | state | [scheme.md](schemes/row-340-tidco-tamil-nadu-industrial-dev-corp-schemes/scheme.md) |
| 341 | TANSIDCO MSME Support Scheme | ROW-341 | state | [scheme.md](schemes/row-341-tansidco-msme-support-scheme/scheme.md) |
| 342 | Startup Karnataka Policy 2022-27 | ROW-342 | state | [scheme.md](schemes/row-342-startup-karnataka-policy-2022-27/scheme.md) |
| 343 | Elevate 100 Programme | ROW-343 | state | [scheme.md](schemes/row-343-elevate-100-programme/scheme.md) |
| 344 | AP Startup Policy & Innovation | ROW-344 | state | [scheme.md](schemes/row-344-ap-startup-policy-innovation/scheme.md) |
| 345 | Vizag Fintech Valley | ROW-345 | state | [scheme.md](schemes/row-345-vizag-fintech-valley/scheme.md) |
| 346 | T-Works Prototype Manufacturing Hub | ROW-346 | state | [scheme.md](schemes/row-346-t-works-prototype-manufacturing-hub/scheme.md) |
| 347 | Hyderabad Pharma City Startup Scheme | ROW-347 | state | [scheme.md](schemes/row-347-hyderabad-pharma-city-startup-scheme/scheme.md) |
| 348 | MahaDBT – Direct Benefit Transfer for Entrepreneurs | ROW-348 | state | [scheme.md](schemes/row-348-mahadbt-direct-benefit-transfer-for-entrepreneurs/scheme.md) |
| 349 | Maharashtra Industrial Development Corporation (MIDC) Schemes | ROW-349 | state | [scheme.md](schemes/row-349-maharashtra-industrial-development-corporation-midc-schemes/scheme.md) |
| 350 | iHub Gujarat – Technology Innovation Fund | ROW-350 | state | [scheme.md](schemes/row-350-ihub-gujarat-technology-innovation-fund/scheme.md) |
| 351 | GVFL – Gujarat Venture Finance Ltd Fund | ROW-351 | state | [scheme.md](schemes/row-351-gvfl-gujarat-venture-finance-ltd-fund/scheme.md) |
| 352 | Nivesh Mitra – UP Single Window Portal | ROW-352 | state | [scheme.md](schemes/row-352-nivesh-mitra-up-single-window-portal/scheme.md) |
| 353 | UP Textile Park Scheme | ROW-353 | state | [scheme.md](schemes/row-353-up-textile-park-scheme/scheme.md) |
| 354 | iStart Rajasthan | ROW-354 | state | [scheme.md](schemes/row-354-istart-rajasthan/scheme.md) |
| 355 | RIPS (Rajasthan Investment Promotion Scheme) | ROW-355 | state | [scheme.md](schemes/row-355-rips-rajasthan-investment-promotion-scheme/scheme.md) |
| 356 | Mukhya Mantri Udyam Kranti Yojana | ROW-356 | state | [scheme.md](schemes/row-356-mukhya-mantri-udyam-kranti-yojana/scheme.md) |
| 357 | KSUM Special Grants for Deep Tech | ROW-357 | state | [scheme.md](schemes/row-357-ksum-special-grants-for-deep-tech/scheme.md) |
| 358 | Kerala Technology Startup Policy | ROW-358 | state | [scheme.md](schemes/row-358-kerala-technology-startup-policy/scheme.md) |
| 359 | Sagarmala Port Modernisation Programme | ROW-359 | central | [scheme.md](schemes/row-359-sagarmala-port-modernisation-programme/scheme.md) |
| 360 | Sagarmala Coastal Community Development | ROW-360 | central | [scheme.md](schemes/row-360-sagarmala-coastal-community-development/scheme.md) |
| 361 | Ship Building Financial Assistance Policy | ROW-361 | central | [scheme.md](schemes/row-361-ship-building-financial-assistance-policy/scheme.md) |
| 362 | National Waterway Development – IWAI Schemes | ROW-362 | central | [scheme.md](schemes/row-362-national-waterway-development-iwai-schemes/scheme.md) |
| 363 | Coastal Shipping Incentive Scheme | ROW-363 | central | [scheme.md](schemes/row-363-coastal-shipping-incentive-scheme/scheme.md) |
| 364 | Maritime India Vision 2030 – Startup Grants | ROW-364 | central | [scheme.md](schemes/row-364-maritime-india-vision-2030-startup-grants/scheme.md) |
| 365 | Green Ship Building Incentive Scheme | ROW-365 | central | [scheme.md](schemes/row-365-green-ship-building-incentive-scheme/scheme.md) |
| 366 | NHAI InvIT – Infrastructure Investment Trust for Highways | ROW-366 | central | [scheme.md](schemes/row-366-nhai-invit-infrastructure-investment-trust-for-highways/scheme.md) |
| 367 | PM Gram Sadak Yojana (PMGSY) Phase III | ROW-367 | central | [scheme.md](schemes/row-367-pm-gram-sadak-yojana-pmgsy-phase-iii/scheme.md) |
| 368 | National Highway Logistics Facilities – NHLF | ROW-368 | central | [scheme.md](schemes/row-368-national-highway-logistics-facilities-nhlf/scheme.md) |
| 369 | Hybrid Annuity Model (HAM) for Highway Projects | ROW-369 | central | [scheme.md](schemes/row-369-hybrid-annuity-model-ham-for-highway-projects/scheme.md) |
| 370 | BOT Toll Highway Startup Opportunities | ROW-370 | central | [scheme.md](schemes/row-370-bot-toll-highway-startup-opportunities/scheme.md) |
| 371 | Indian Railways Station Redevelopment Programme | ROW-371 | central | [scheme.md](schemes/row-371-indian-railways-station-redevelopment-programme/scheme.md) |
| 372 | Rail Logistics Policy – Private Freight Terminal | ROW-372 | central | [scheme.md](schemes/row-372-rail-logistics-policy-private-freight-terminal/scheme.md) |
| 373 | One Station One Product (OSOP) Scheme | ROW-373 | central | [scheme.md](schemes/row-373-one-station-one-product-osop-scheme/scheme.md) |
| 374 | Indian Railways Startup Policy (IRSDC) | ROW-374 | central | [scheme.md](schemes/row-374-indian-railways-startup-policy-irsdc/scheme.md) |
| 375 | Private Train Operators Policy | ROW-375 | central | [scheme.md](schemes/row-375-private-train-operators-policy/scheme.md) |
| 376 | Kisan Rail for Agri Produce Transport | ROW-376 | central | [scheme.md](schemes/row-376-kisan-rail-for-agri-produce-transport/scheme.md) |
| 377 | Steel Scrap Recycling Policy | ROW-377 | central | [scheme.md](schemes/row-377-steel-scrap-recycling-policy/scheme.md) |
| 378 | National Steel Policy 2017 – MSME Cluster Support | ROW-378 | central | [scheme.md](schemes/row-378-national-steel-policy-2017-msme-cluster-support/scheme.md) |
| 379 | R&D for Steel (R&D Fund) | ROW-379 | central | [scheme.md](schemes/row-379-r-d-for-steel-r-d-fund/scheme.md) |
| 380 | Domestic Steel Procurement Preference Policy | ROW-380 | central | [scheme.md](schemes/row-380-domestic-steel-procurement-preference-policy/scheme.md) |
| 381 | Petroleum, Chemicals and Petrochemicals Investment Region (PCPIR) | ROW-381 | central | [scheme.md](schemes/row-381-petroleum-chemicals-and-petrochemicals-investment-region-pcpir/scheme.md) |
| 382 | PLI Scheme for White Goods (AC & LED) | ROW-382 | central | [scheme.md](schemes/row-382-pli-scheme-for-white-goods-ac-led/scheme.md) |
| 383 | New Chemical Policy for MSMEs | ROW-383 | central | [scheme.md](schemes/row-383-new-chemical-policy-for-msmes/scheme.md) |
| 384 | Paints & Coatings Industry Development Scheme | ROW-384 | central | [scheme.md](schemes/row-384-paints-coatings-industry-development-scheme/scheme.md) |
| 385 | Plastic Parks Scheme | ROW-385 | central | [scheme.md](schemes/row-385-plastic-parks-scheme/scheme.md) |
| 386 | Critical Minerals Mission – Startup Support | ROW-386 | central | [scheme.md](schemes/row-386-critical-minerals-mission-startup-support/scheme.md) |
| 387 | Exploration Licence for Private Players | ROW-387 | central | [scheme.md](schemes/row-387-exploration-licence-for-private-players/scheme.md) |
| 388 | Khanij Bidesh India Ltd (KABIL) Overseas Mineral Support | ROW-388 | central | [scheme.md](schemes/row-388-khanij-bidesh-india-ltd-kabil-overseas-mineral-support/scheme.md) |
| 389 | Mine Developer and Operator (MDO) Policy | ROW-389 | central | [scheme.md](schemes/row-389-mine-developer-and-operator-mdo-policy/scheme.md) |
| 391 | National Urban Innovation Stack (NUIS) | ROW-391 | central | [scheme.md](schemes/row-391-national-urban-innovation-stack-nuis/scheme.md) |
| 392 | PM SVANidhi Plus (Micro Credit for Street Vendors) | ROW-392 | central | [scheme.md](schemes/row-392-pm-svanidhi-plus-micro-credit-for-street-vendors/scheme.md) |
| 393 | Metro Rail Policy – Private Participation | ROW-393 | central | [scheme.md](schemes/row-393-metro-rail-policy-private-participation/scheme.md) |
| 394 | Transit Oriented Development (TOD) Policy | ROW-394 | central | [scheme.md](schemes/row-394-transit-oriented-development-tod-policy/scheme.md) |
| 395 | Smart Cities Innovation Challenge Fund | ROW-395 | central | [scheme.md](schemes/row-395-smart-cities-innovation-challenge-fund/scheme.md) |
| 396 | National Common Mobility Card (NCMC) | ROW-396 | central | [scheme.md](schemes/row-396-national-common-mobility-card-ncmc/scheme.md) |
| 397 | Revamped Distribution Sector Scheme (RDSS) | ROW-397 | central | [scheme.md](schemes/row-397-revamped-distribution-sector-scheme-rdss/scheme.md) |
| 398 | KUSUM-A Solar Power for Farmers | ROW-398 | central | [scheme.md](schemes/row-398-kusum-a-solar-power-for-farmers/scheme.md) |
| 399 | PLI for Solar PV Modules | ROW-399 | central | [scheme.md](schemes/row-399-pli-for-solar-pv-modules/scheme.md) |
| 400 | PM Surya Ghar Subsidy – Rooftop Solar | ROW-400 | central | [scheme.md](schemes/row-400-pm-surya-ghar-subsidy-rooftop-solar/scheme.md) |
| 401 | Electricity Amendment Act – Open Access for MSMEs | ROW-401 | central | [scheme.md](schemes/row-401-electricity-amendment-act-open-access-for-msmes/scheme.md) |
| 402 | National Electricity Fund (NEF) | ROW-402 | central | [scheme.md](schemes/row-402-national-electricity-fund-nef/scheme.md) |
| 403 | Smart Metering Implementation (AMISP) | ROW-403 | central | [scheme.md](schemes/row-403-smart-metering-implementation-amisp/scheme.md) |
| 404 | Meity's Data Centre Policy | ROW-404 | central | [scheme.md](schemes/row-404-meity-s-data-centre-policy/scheme.md) |
| 405 | India Enterprise Architecture (InEA) | ROW-405 | central | [scheme.md](schemes/row-405-india-enterprise-architecture-inea/scheme.md) |
| 406 | Government e-Marketplace (GeM) Seller Onboarding | ROW-406 | central | [scheme.md](schemes/row-406-government-e-marketplace-gem-seller-onboarding/scheme.md) |
| 407 | Open Government Data Platform (OGD) | ROW-407 | central | [scheme.md](schemes/row-407-open-government-data-platform-ogd/scheme.md) |
| 408 | MyScheme – Centralized Government Scheme Portal | ROW-408 | central | [scheme.md](schemes/row-408-myscheme-centralized-government-scheme-portal/scheme.md) |
| 409 | e-Sanjeevani Telemedicine Platform for Health Startups | ROW-409 | central | [scheme.md](schemes/row-409-e-sanjeevani-telemedicine-platform-for-health-startups/scheme.md) |
| 410 | Aadhaar-Based Startup Authentication Services | ROW-410 | central | [scheme.md](schemes/row-410-aadhaar-based-startup-authentication-services/scheme.md) |
| 411 | DigiYatra – Aviation Digital Identity Platform | ROW-411 | central | [scheme.md](schemes/row-411-digiyatra-aviation-digital-identity-platform/scheme.md) |
| 412 | Tax Collected at Source (TCS) Exemption for Startups | ROW-412 | central | [scheme.md](schemes/row-412-tax-collected-at-source-tcs-exemption-for-startups/scheme.md) |
| 413 | Startup GST Exemption & Composition Scheme | ROW-413 | central | [scheme.md](schemes/row-413-startup-gst-exemption-composition-scheme/scheme.md) |
| 414 | ESOP Tax Deferment for Startup Employees | ROW-414 | central | [scheme.md](schemes/row-414-esop-tax-deferment-for-startup-employees/scheme.md) |
| 415 | Self-Certification for Labour Laws (Startups) | ROW-415 | central | [scheme.md](schemes/row-415-self-certification-for-labour-laws-startups/scheme.md) |
| 416 | Three-Year Tax Holiday for DPIIT Startups (80IAC) | ROW-416 | central | [scheme.md](schemes/row-416-three-year-tax-holiday-for-dpiit-startups-80iac/scheme.md) |
| 417 | Presumptive Taxation Scheme (Section 44AD) for MSMEs | ROW-417 | central | [scheme.md](schemes/row-417-presumptive-taxation-scheme-section-44ad-for-msmes/scheme.md) |
| 418 | GST QRMP Scheme for MSMEs | ROW-418 | central | [scheme.md](schemes/row-418-gst-qrmp-scheme-for-msmes/scheme.md) |
| 419 | National Mission on Edible Oils – Oil Palm (NMEO-OP) | ROW-419 | central | [scheme.md](schemes/row-419-national-mission-on-edible-oils-oil-palm-nmeo-op/scheme.md) |
| 420 | PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers | ROW-420 | central | [scheme.md](schemes/row-420-pm-kisan-maan-dhan-yojana-pm-kmy-pension-for-farmers/scheme.md) |
| 421 | Soil Health Card Scheme | ROW-421 | central | [scheme.md](schemes/row-421-soil-health-card-scheme/scheme.md) |
| 422 | National Mission on Oilseeds and Oil Palm (NMOOP) | ROW-422 | central | [scheme.md](schemes/row-422-national-mission-on-oilseeds-and-oil-palm-nmoop/scheme.md) |
| 423 | Integrated Scheme for Agricultural Marketing (ISAM) | ROW-423 | central | [scheme.md](schemes/row-423-integrated-scheme-for-agricultural-marketing-isam/scheme.md) |
| 424 | Agristack – Federated Farmers Database | ROW-424 | central | [scheme.md](schemes/row-424-agristack-federated-farmers-database/scheme.md) |
| 425 | IFFCO Nano Urea Initiative for Agri Startups | ROW-425 | central | [scheme.md](schemes/row-425-iffco-nano-urea-initiative-for-agri-startups/scheme.md) |
| 426 | NABARD Watershed Development Fund | ROW-426 | central | [scheme.md](schemes/row-426-nabard-watershed-development-fund/scheme.md) |
| 427 | Farmer Producer Organisation (FPO) Equity Grant Fund | ROW-427 | central | [scheme.md](schemes/row-427-farmer-producer-organisation-fpo-equity-grant-fund/scheme.md) |
| 428 | APEDA Agri Export Promotion Scheme | ROW-428 | central | [scheme.md](schemes/row-428-apeda-agri-export-promotion-scheme/scheme.md) |
| 429 | National Project on Organic Farming (NPOF) | ROW-429 | central | [scheme.md](schemes/row-429-national-project-on-organic-farming-npof/scheme.md) |
| 430 | Dairy Entrepreneurship Development Scheme (DEDS) | ROW-430 | central | [scheme.md](schemes/row-430-dairy-entrepreneurship-development-scheme-deds/scheme.md) |
| 431 | Poultry Venture Capital Fund | ROW-431 | central | [scheme.md](schemes/row-431-poultry-venture-capital-fund/scheme.md) |
| 432 | National Programme for Bovine Breeding & Dairy Dev (NPBBD) | ROW-432 | central | [scheme.md](schemes/row-432-national-programme-for-bovine-breeding-dairy-dev-npbbd/scheme.md) |
| 433 | Integrated Development of Small Ruminants & Rabbits | ROW-433 | central | [scheme.md](schemes/row-433-integrated-development-of-small-ruminants-rabbits/scheme.md) |
| 434 | National Livestock Health & Disease Control Programme | ROW-434 | central | [scheme.md](schemes/row-434-national-livestock-health-disease-control-programme/scheme.md) |
| 435 | Integrated Scheme for Development of Silk Industry (ISDSI) | ROW-435 | central | [scheme.md](schemes/row-435-integrated-scheme-for-development-of-silk-industry-isdsi/scheme.md) |
| 436 | Central Silk Board – Bivoltine Silk Development Programme | ROW-436 | central | [scheme.md](schemes/row-436-central-silk-board-bivoltine-silk-development-programme/scheme.md) |
| 438 | Khadi Gramodyog Vikas Yojana (KGVY) | ROW-438 | central | [scheme.md](schemes/row-438-khadi-gramodyog-vikas-yojana-kgvy/scheme.md) |
| 439 | SFURTI – Silk Cluster Development | ROW-439 | central | [scheme.md](schemes/row-439-sfurti-silk-cluster-development/scheme.md) |
| 440 | Gold Monetisation Scheme (GMS) | ROW-440 | central | [scheme.md](schemes/row-440-gold-monetisation-scheme-gms/scheme.md) |
| 441 | India International Jewellery Show (IIJS) Participation Support | ROW-441 | central | [scheme.md](schemes/row-441-india-international-jewellery-show-iijs-participation-support/scheme.md) |
| 442 | Special Notified Zone (SNZ) for Diamond Trading | ROW-442 | central | [scheme.md](schemes/row-442-special-notified-zone-snz-for-diamond-trading/scheme.md) |
| 443 | Gem & Jewellery Export Promotion Council (GJEPC) Schemes | ROW-443 | central | [scheme.md](schemes/row-443-gem-jewellery-export-promotion-council-gjepc-schemes/scheme.md) |
| 444 | Gems & Jewellery Sector PLI – Design Innovation Grant | ROW-444 | central | [scheme.md](schemes/row-444-gems-jewellery-sector-pli-design-innovation-grant/scheme.md) |
| 445 | PLI for Large Scale Electronics Manufacturing | ROW-445 | central | [scheme.md](schemes/row-445-pli-for-large-scale-electronics-manufacturing/scheme.md) |
| 446 | PLI for Mobile Phones & Specified Electronic Components | ROW-446 | central | [scheme.md](schemes/row-446-pli-for-mobile-phones-specified-electronic-components/scheme.md) |
| 447 | Electronics Cluster Development Programme (ECDP) | ROW-447 | central | [scheme.md](schemes/row-447-electronics-cluster-development-programme-ecdp/scheme.md) |
| 448 | National Centre for Flexible Electronics (NCFlexE) | ROW-448 | central | [scheme.md](schemes/row-448-national-centre-for-flexible-electronics-ncflexe/scheme.md) |
| 449 | Indian Semiconductor Research Centre (ISRC) Grants | ROW-449 | central | [scheme.md](schemes/row-449-indian-semiconductor-research-centre-isrc-grants/scheme.md) |
| 450 | IN-SPACe Authorization for Private Space Launch | ROW-450 | central | [scheme.md](schemes/row-450-in-space-authorization-for-private-space-launch/scheme.md) |
| 451 | NewSpace India Ltd (NSIL) Technology Transfer | ROW-451 | central | [scheme.md](schemes/row-451-newspace-india-ltd-nsil-technology-transfer/scheme.md) |
| 452 | Geospatial Data Liberalisation – NGIS Policy | ROW-452 | central | [scheme.md](schemes/row-452-geospatial-data-liberalisation-ngis-policy/scheme.md) |
| 453 | Indian National Space Promotion & Authorization Centre (IN-SPACe) Seed Fund | ROW-453 | central | [scheme.md](schemes/row-453-indian-national-space-promotion-authorization-centre-in-space-seed-fund/scheme.md) |
| 454 | ISRO Technology Transfer Programme | ROW-454 | central | [scheme.md](schemes/row-454-isro-technology-transfer-programme/scheme.md) |
| 455 | Space Situational Awareness (SSA) Startup Support | ROW-455 | central | [scheme.md](schemes/row-455-space-situational-awareness-ssa-startup-support/scheme.md) |
| 456 | National Film Award Support for Startups | ROW-456 | central | [scheme.md](schemes/row-456-national-film-award-support-for-startups/scheme.md) |
| 457 | OTT Platform Development Incentive | ROW-457 | central | [scheme.md](schemes/row-457-ott-platform-development-incentive/scheme.md) |
| 458 | Broadcast Audience Research Council (BARC) Data Access for Startups | ROW-458 | central | [scheme.md](schemes/row-458-broadcast-audience-research-council-barc-data-access-for-startups/scheme.md) |
| 459 | India Game Developer Conference (IGDC) Support | ROW-459 | central | [scheme.md](schemes/row-459-india-game-developer-conference-igdc-support/scheme.md) |
| 460 | National Mission on Strategic Knowledge for Climate Change (NMSKCC) | ROW-460 | central | [scheme.md](schemes/row-460-national-mission-on-strategic-knowledge-for-climate-change-nmskcc/scheme.md) |
| 461 | National Action Plan on Climate Change (NAPCC) Schemes | ROW-461 | central | [scheme.md](schemes/row-461-national-action-plan-on-climate-change-napcc-schemes/scheme.md) |
| 462 | Startup India Climate Action Challenge | ROW-462 | central | [scheme.md](schemes/row-462-startup-india-climate-action-challenge/scheme.md) |
| 463 | CERC Green Term Ahead Market (GTAM) for Startups | ROW-463 | central | [scheme.md](schemes/row-463-cerc-green-term-ahead-market-gtam-for-startups/scheme.md) |
| 464 | Sustainable Finance for Green MSMEs (SIDBI Green Finance) | ROW-464 | central | [scheme.md](schemes/row-464-sustainable-finance-for-green-msmes-sidbi-green-finance/scheme.md) |
| 465 | National Mission for a Green India (GIM) | ROW-465 | central | [scheme.md](schemes/row-465-national-mission-for-a-green-india-gim/scheme.md) |
| 466 | National Clean Air Programme (NCAP) Innovation Fund | ROW-466 | central | [scheme.md](schemes/row-466-national-clean-air-programme-ncap-innovation-fund/scheme.md) |
| 467 | EESL Energy Efficiency Innovation Support | ROW-467 | central | [scheme.md](schemes/row-467-eesl-energy-efficiency-innovation-support/scheme.md) |
| 468 | Account Aggregator (AA) Framework for FinTech Startups | ROW-468 | central | [scheme.md](schemes/row-468-account-aggregator-aa-framework-for-fintech-startups/scheme.md) |
| 469 | UPI Innovation Fund (NPCI) | ROW-469 | central | [scheme.md](schemes/row-469-upi-innovation-fund-npci/scheme.md) |
| 470 | RBI FinTech Repository | ROW-470 | central | [scheme.md](schemes/row-470-rbi-fintech-repository/scheme.md) |
| 471 | IFSCA FinTech Incentive Scheme (GIFT City) | ROW-471 | central | [scheme.md](schemes/row-471-ifsca-fintech-incentive-scheme-gift-city/scheme.md) |
| 472 | SEBI FinTech Regulatory Framework for WealthTech | ROW-472 | central | [scheme.md](schemes/row-472-sebi-fintech-regulatory-framework-for-wealthtech/scheme.md) |
| 473 | IRDAI Regulatory Sandbox for InsurTech | ROW-473 | central | [scheme.md](schemes/row-473-irdai-regulatory-sandbox-for-insurtech/scheme.md) |
| 474 | PFRDA Innovation for PensionTech Startups | ROW-474 | central | [scheme.md](schemes/row-474-pfrda-innovation-for-pensiontech-startups/scheme.md) |
| 475 | GIFT City Financial Services Startup Support | ROW-475 | central | [scheme.md](schemes/row-475-gift-city-financial-services-startup-support/scheme.md) |
| 476 | Open Credit Enablement Network (OCEN) for Lenders | ROW-476 | central | [scheme.md](schemes/row-476-open-credit-enablement-network-ocen-for-lenders/scheme.md) |
| 477 | National Payments Corporation of India (NPCI) BharatPay | ROW-477 | central | [scheme.md](schemes/row-477-national-payments-corporation-of-india-npci-bharatpay/scheme.md) |
| 478 | MedTech Startup Innovation Program (MSIP) | ROW-478 | central | [scheme.md](schemes/row-478-medtech-startup-innovation-program-msip/scheme.md) |
| 479 | National Programme for Prevention & Control of Cancer (NPCC) | ROW-479 | central | [scheme.md](schemes/row-479-national-programme-for-prevention-control-of-cancer-npcc/scheme.md) |
| 480 | PM National Dialysis Programme | ROW-480 | central | [scheme.md](schemes/row-480-pm-national-dialysis-programme/scheme.md) |
| 481 | National Organ & Tissue Transplant Organisation (NOTTO) | ROW-481 | central | [scheme.md](schemes/row-481-national-organ-tissue-transplant-organisation-notto/scheme.md) |
| 482 | Pradhan Mantri National AIDS Control Programme | ROW-482 | central | [scheme.md](schemes/row-482-pradhan-mantri-national-aids-control-programme/scheme.md) |
| 483 | National TB Elimination Programme – Digital Initiative | ROW-483 | central | [scheme.md](schemes/row-483-national-tb-elimination-programme-digital-initiative/scheme.md) |
| 484 | National Mental Health Programme (NMHP) Startup Support | ROW-484 | central | [scheme.md](schemes/row-484-national-mental-health-programme-nmhp-startup-support/scheme.md) |
| 485 | India MedTech Expo & Investment Support | ROW-485 | central | [scheme.md](schemes/row-485-india-medtech-expo-investment-support/scheme.md) |
| 486 | National Digital Library of India (NDLI) | ROW-486 | central | [scheme.md](schemes/row-486-national-digital-library-of-india-ndli/scheme.md) |
| 487 | Coding for Kids Initiative – CBSE & MeitY | ROW-487 | central | [scheme.md](schemes/row-487-coding-for-kids-initiative-cbse-meity/scheme.md) |
| 488 | Apprenticeship Embedded Degree Programme (AEDP) | ROW-488 | central | [scheme.md](schemes/row-488-apprenticeship-embedded-degree-programme-aedp/scheme.md) |
| 489 | Jan Shikshan Sansthan (JSS) Vocational Training | ROW-489 | central | [scheme.md](schemes/row-489-jan-shikshan-sansthan-jss-vocational-training/scheme.md) |
| 490 | Pradhan Mantri Kaushal Kendras (PMKK) | ROW-490 | central | [scheme.md](schemes/row-490-pradhan-mantri-kaushal-kendras-pmkk/scheme.md) |
| 491 | Modular Employable Skills (MES) Scheme | ROW-491 | central | [scheme.md](schemes/row-491-modular-employable-skills-mes-scheme/scheme.md) |
| 492 | Craftsmen Training Scheme (CTS) – ITI | ROW-492 | central | [scheme.md](schemes/row-492-craftsmen-training-scheme-cts-iti/scheme.md) |
| 493 | Skill Vouchers for Private Training Providers | ROW-493 | central | [scheme.md](schemes/row-493-skill-vouchers-for-private-training-providers/scheme.md) |
| 494 | Recognition of Prior Learning (RPL) Scheme | ROW-494 | central | [scheme.md](schemes/row-494-recognition-of-prior-learning-rpl-scheme/scheme.md) |
| 495 | National Apprenticeship Training Scheme (NATS) | ROW-495 | central | [scheme.md](schemes/row-495-national-apprenticeship-training-scheme-nats/scheme.md) |
| 496 | Impact Investors Council (IIC) India Fund | ROW-496 | central | [scheme.md](schemes/row-496-impact-investors-council-iic-india-fund/scheme.md) |
| 497 | Social Stock Exchange (SSE) – SEBI Framework | ROW-497 | central | [scheme.md](schemes/row-497-social-stock-exchange-sse-sebi-framework/scheme.md) |
| 498 | NGO Darpan – CSR Fund Access Portal | ROW-498 | central | [scheme.md](schemes/row-498-ngo-darpan-csr-fund-access-portal/scheme.md) |
| 499 | PM CARES Fund CSR Project Support | ROW-499 | central | [scheme.md](schemes/row-499-pm-cares-fund-csr-project-support/scheme.md) |
| 500 | Corporate Social Responsibility (CSR) Innovation Fund | ROW-500 | central | [scheme.md](schemes/row-500-corporate-social-responsibility-csr-innovation-fund/scheme.md) |
| 501 | Atal Community Innovation Centre (ACIC) | ROW-501 | central | [scheme.md](schemes/row-501-atal-community-innovation-centre-acic/scheme.md) |
| 502 | Social Alpha Innovation Platform | ROW-502 | central | [scheme.md](schemes/row-502-social-alpha-innovation-platform/scheme.md) |
| 503 | National Water Awards (NWA) Innovation Support | ROW-503 | central | [scheme.md](schemes/row-503-national-water-awards-nwa-innovation-support/scheme.md) |
| 504 | PM Krishi Sinchayee Yojana (PMKSY) – Micro Irrigation | ROW-504 | central | [scheme.md](schemes/row-504-pm-krishi-sinchayee-yojana-pmksy-micro-irrigation/scheme.md) |
| 505 | National Hydrology Project (NHP) Data Access for Startups | ROW-505 | central | [scheme.md](schemes/row-505-national-hydrology-project-nhp-data-access-for-startups/scheme.md) |
| 506 | Namami Gange – Ganga Rejuvenation Innovation Fund | ROW-506 | central | [scheme.md](schemes/row-506-namami-gange-ganga-rejuvenation-innovation-fund/scheme.md) |
| 507 | Aquifer Mapping & Management Programme | ROW-507 | central | [scheme.md](schemes/row-507-aquifer-mapping-management-programme/scheme.md) |
| 508 | Pradhan Mantri Micro Food Processing Enterprises (PM-FME) | ROW-508 | central | [scheme.md](schemes/row-508-pradhan-mantri-micro-food-processing-enterprises-pm-fme/scheme.md) |
| 509 | National Rural Economic Transformation Project (NRETP) | ROW-509 | central | [scheme.md](schemes/row-509-national-rural-economic-transformation-project-nretp/scheme.md) |
| 510 | Pradhan Mantri Gram Sadak Yojana (PMGSY) – Connectivity for Agri | ROW-510 | central | [scheme.md](schemes/row-510-pradhan-mantri-gram-sadak-yojana-pmgsy-connectivity-for-agri/scheme.md) |
| 511 | Shyama Prasad Mukherji Rurban Mission (SPMRM) | ROW-511 | central | [scheme.md](schemes/row-511-shyama-prasad-mukherji-rurban-mission-spmrm/scheme.md) |
| 513 | Deen Dayal Upadhyay Grameen Kaushalya Yojana (DDU-GKY) | ROW-513 | central | [scheme.md](schemes/row-513-deen-dayal-upadhyay-grameen-kaushalya-yojana-ddu-gky/scheme.md) |
| 514 | Mahatma Gandhi NREGA (MGNREGS) Convergence | ROW-514 | central | [scheme.md](schemes/row-514-mahatma-gandhi-nrega-mgnregs-convergence/scheme.md) |
| 515 | Common Facility Centre (CFC) under MSE-CDP | ROW-515 | central | [scheme.md](schemes/row-515-common-facility-centre-cfc-under-mse-cdp/scheme.md) |
| 516 | Infrastructure Development Scheme for MSME Clusters | ROW-516 | central | [scheme.md](schemes/row-516-infrastructure-development-scheme-for-msme-clusters/scheme.md) |
| 517 | Technology Centre Systems Programme (TCSP) | ROW-517 | central | [scheme.md](schemes/row-517-technology-centre-systems-programme-tcsp/scheme.md) |
| 518 | National Manufacturing Competitiveness Programme (NMCP) | ROW-518 | central | [scheme.md](schemes/row-518-national-manufacturing-competitiveness-programme-nmcp/scheme.md) |
| 519 | Procurement and Marketing Support Scheme (PMS) for MSMEs | ROW-519 | central | [scheme.md](schemes/row-519-procurement-and-marketing-support-scheme-pms-for-msmes/scheme.md) |
| 520 | Design Clinic Scheme for MSMEs | ROW-520 | central | [scheme.md](schemes/row-520-design-clinic-scheme-for-msmes/scheme.md) |
| 521 | Bar Coding / Quality Certification Reimbursement Scheme | ROW-521 | central | [scheme.md](schemes/row-521-bar-coding-quality-certification-reimbursement-scheme/scheme.md) |
| 522 | Sikkim State Startup Policy | ROW-522 | state | [scheme.md](schemes/row-522-sikkim-state-startup-policy/scheme.md) |
| 523 | Nagaland Startup Policy – StartupNaga | ROW-523 | state | [scheme.md](schemes/row-523-nagaland-startup-policy-startupnaga/scheme.md) |
| 524 | Manipur Startup Policy | ROW-524 | state | [scheme.md](schemes/row-524-manipur-startup-policy/scheme.md) |
| 525 | Tripura Startup Policy | ROW-525 | state | [scheme.md](schemes/row-525-tripura-startup-policy/scheme.md) |
| 526 | Meghalaya Startup Policy – MeghaStart | ROW-526 | state | [scheme.md](schemes/row-526-meghalaya-startup-policy-meghastart/scheme.md) |
| 527 | Arunachal Pradesh Industrial Investment Policy | ROW-527 | state | [scheme.md](schemes/row-527-arunachal-pradesh-industrial-investment-policy/scheme.md) |
| 528 | Mizoram State Startup Policy | ROW-528 | state | [scheme.md](schemes/row-528-mizoram-state-startup-policy/scheme.md) |
| 529 | Mukhyamantri Swarozgar Yojana – Uttarakhand | ROW-529 | state | [scheme.md](schemes/row-529-mukhyamantri-swarozgar-yojana-uttarakhand/scheme.md) |
| 530 | HP Mukhya Mantri Swavalamban Yojana | ROW-530 | state | [scheme.md](schemes/row-530-hp-mukhya-mantri-swavalamban-yojana/scheme.md) |
| 531 | Delhi Industrial Policy 2021 | ROW-531 | state | [scheme.md](schemes/row-531-delhi-industrial-policy-2021/scheme.md) |
| 532 | Haryana Udhyam Memorandum Digital Portal | ROW-532 | state | [scheme.md](schemes/row-532-haryana-udhyam-memorandum-digital-portal/scheme.md) |
| 533 | Rajasthan MSME (Facilitation of Establishment and Operation) Act | ROW-533 | state | [scheme.md](schemes/row-533-rajasthan-msme-facilitation-of-establishment-and-operation-act/scheme.md) |
| 534 | MSME Assistance Programme Gujarat | ROW-534 | state | [scheme.md](schemes/row-534-msme-assistance-programme-gujarat/scheme.md) |
| 535 | Punjab Skill Development Mission | ROW-535 | state | [scheme.md](schemes/row-535-punjab-skill-development-mission/scheme.md) |
| 536 | Karnataka Digital Economy Mission (KDEM) | ROW-536 | state | [scheme.md](schemes/row-536-karnataka-digital-economy-mission-kdem/scheme.md) |
| 537 | TIDCO Venture Capital Fund | ROW-537 | state | [scheme.md](schemes/row-537-tidco-venture-capital-fund/scheme.md) |
| 538 | YSR Jagananna Chedodu Scheme for MSMEs | ROW-538 | state | [scheme.md](schemes/row-538-ysr-jagananna-chedodu-scheme-for-msmes/scheme.md) |
| 539 | Telangana MSME Policy 2020 | ROW-539 | state | [scheme.md](schemes/row-539-telangana-msme-policy-2020/scheme.md) |
| 540 | Kerala Financial Corporation (KFC) MSME Loans | ROW-540 | state | [scheme.md](schemes/row-540-kerala-financial-corporation-kfc-msme-loans/scheme.md) |
| 541 | MP Trade & Investment Facilitation Corporation (TRIFAC) | ROW-541 | state | [scheme.md](schemes/row-541-mp-trade-investment-facilitation-corporation-trifac/scheme.md) |
| 542 | MSME Technology Upgradation Subsidy – Odisha | ROW-542 | state | [scheme.md](schemes/row-542-msme-technology-upgradation-subsidy-odisha/scheme.md) |
| 543 | WBIDC Industrial Park Scheme | ROW-543 | state | [scheme.md](schemes/row-543-wbidc-industrial-park-scheme/scheme.md) |
| 544 | Bihar Industrial Investment Promotion Policy | ROW-544 | state | [scheme.md](schemes/row-544-bihar-industrial-investment-promotion-policy/scheme.md) |
| 545 | Jharkhand MSME Policy 2015 (Revised) | ROW-545 | state | [scheme.md](schemes/row-545-jharkhand-msme-policy-2015-revised/scheme.md) |
| 546 | Assam Industrial & Investment Policy | ROW-546 | state | [scheme.md](schemes/row-546-assam-industrial-investment-policy/scheme.md) |
| 547 | CG Industrial Policy 2019-24 | ROW-547 | state | [scheme.md](schemes/row-547-cg-industrial-policy-2019-24/scheme.md) |
| 548 | National Initiative for Developing and Harnessing Innovations (NIDHI) | ROW-548 | central | [scheme.md](schemes/row-548-national-initiative-for-developing-and-harnessing-innovations-nidhi/scheme.md) |
| 549 | BIRAC PACE Programme for Biotech Incubation | ROW-549 | central | [scheme.md](schemes/row-549-birac-pace-programme-for-biotech-incubation/scheme.md) |
| 550 | Centre of Excellence for IoT (IoT CoE) MeitY | ROW-550 | central | [scheme.md](schemes/row-550-centre-of-excellence-for-iot-iot-coe-meity/scheme.md) |
| 551 | National Robotics Mission (DST) | ROW-551 | central | [scheme.md](schemes/row-551-national-robotics-mission-dst/scheme.md) |
| 552 | Centre of Excellence for Drones & Counter Drone Systems | ROW-552 | central | [scheme.md](schemes/row-552-centre-of-excellence-for-drones-counter-drone-systems/scheme.md) |
| 553 | National Centre of Excellence for Green Port & Shipping (NCoEGPS) | ROW-553 | central | [scheme.md](schemes/row-553-national-centre-of-excellence-for-green-port-shipping-ncoegps/scheme.md) |
| 554 | IIT Hyderabad Deep Tech Startup Incubator | ROW-554 | central | [scheme.md](schemes/row-554-iit-hyderabad-deep-tech-startup-incubator/scheme.md) |
| 555 | IISc Start-up Connect & DESE Incubation | ROW-555 | central | [scheme.md](schemes/row-555-iisc-start-up-connect-dese-incubation/scheme.md) |
| 556 | CCAMP (Centre for Cellular and Molecular Platforms) | ROW-556 | central | [scheme.md](schemes/row-556-ccamp-centre-for-cellular-and-molecular-platforms/scheme.md) |
| 557 | Venture Center Pune – NCL Innovation Park | ROW-557 | central | [scheme.md](schemes/row-557-venture-center-pune-ncl-innovation-park/scheme.md) |
| 558 | Coal India Ltd (CIL) Innovation & Startup Fund | ROW-558 | central | [scheme.md](schemes/row-558-coal-india-ltd-cil-innovation-startup-fund/scheme.md) |
| 559 | ONGC Energy Centre (OEC) for Clean Energy Startups | ROW-559 | central | [scheme.md](schemes/row-559-ongc-energy-centre-oec-for-clean-energy-startups/scheme.md) |
| 560 | BSNL Startup & Innovation Challenge | ROW-560 | central | [scheme.md](schemes/row-560-bsnl-startup-innovation-challenge/scheme.md) |
| 561 | MTNL Innovation Programme | ROW-561 | central | [scheme.md](schemes/row-561-mtnl-innovation-programme/scheme.md) |
| 562 | Airport Authority of India (AAI) Startup Support | ROW-562 | central | [scheme.md](schemes/row-562-airport-authority-of-india-aai-startup-support/scheme.md) |
| 563 | CONCOR (Container Corporation) Logistics Startup Challenge | ROW-563 | central | [scheme.md](schemes/row-563-concor-container-corporation-logistics-startup-challenge/scheme.md) |
| 564 | Hindustan Copper Ltd (HCL) Innovation Support | ROW-564 | central | [scheme.md](schemes/row-564-hindustan-copper-ltd-hcl-innovation-support/scheme.md) |
| 565 | National Aluminium Company (NALCO) Startup Fund | ROW-565 | central | [scheme.md](schemes/row-565-national-aluminium-company-nalco-startup-fund/scheme.md) |
| 566 | TCIL Technology Startup Programme | ROW-566 | central | [scheme.md](schemes/row-566-tcil-technology-startup-programme/scheme.md) |
| 567 | PM Micro Food Processing Enterprises Scheme (PM-FME) | ROW-567 | central | [scheme.md](schemes/row-567-pm-micro-food-processing-enterprises-scheme-pm-fme/scheme.md) |
| 568 | Food Testing Infrastructure – NABL Accreditation Support | ROW-568 | central | [scheme.md](schemes/row-568-food-testing-infrastructure-nabl-accreditation-support/scheme.md) |
| 569 | Cold Storage Infrastructure Subsidy (NHB) | ROW-569 | central | [scheme.md](schemes/row-569-cold-storage-infrastructure-subsidy-nhb/scheme.md) |
| 570 | APEDA Export Facilitation for Organic Products | ROW-570 | central | [scheme.md](schemes/row-570-apeda-export-facilitation-for-organic-products/scheme.md) |
| 571 | Indian Institute of Food Processing Technology (IIFPT) Incubation | ROW-571 | central | [scheme.md](schemes/row-571-indian-institute-of-food-processing-technology-iifpt-incubation/scheme.md) |
| 572 | National Institute of Food Technology Entrepreneurship & Management (NIFTEM) | ROW-572 | central | [scheme.md](schemes/row-572-national-institute-of-food-technology-entrepreneurship-management-niftem/scheme.md) |
| 573 | PM Krishi Sinchayee Yojana – Har Khet Ko Pani | ROW-573 | central | [scheme.md](schemes/row-573-pm-krishi-sinchayee-yojana-har-khet-ko-pani/scheme.md) |
| 574 | National Water Resource Development Programme | ROW-574 | central | [scheme.md](schemes/row-574-national-water-resource-development-programme/scheme.md) |
| 575 | Pradhan Mantri Krishi Sinchayee Yojana – Watershed Development | ROW-575 | central | [scheme.md](schemes/row-575-pradhan-mantri-krishi-sinchayee-yojana-watershed-development/scheme.md) |
| 576 | Per Drop More Crop – Micro Irrigation | ROW-576 | central | [scheme.md](schemes/row-576-per-drop-more-crop-micro-irrigation/scheme.md) |
| 577 | Repair Renovation Restoration (RRR) of Water Bodies | ROW-577 | central | [scheme.md](schemes/row-577-repair-renovation-restoration-rrr-of-water-bodies/scheme.md) |
| 578 | National Aquifer Mapping Programme (NAQUIM) | ROW-578 | central | [scheme.md](schemes/row-578-national-aquifer-mapping-programme-naquim/scheme.md) |
| 579 | PLI Scheme for Drones & Drone Components | ROW-579 | central | [scheme.md](schemes/row-579-pli-scheme-for-drones-drone-components/scheme.md) |
| 580 | Drone Shakti Initiative (MoCA) | ROW-580 | central | [scheme.md](schemes/row-580-drone-shakti-initiative-moca/scheme.md) |
| 581 | National Drone Policy 2021 | ROW-581 | central | [scheme.md](schemes/row-581-national-drone-policy-2021/scheme.md) |
| 582 | Kisan Drone Scheme – Agriculture UAV Subsidy | ROW-582 | central | [scheme.md](schemes/row-582-kisan-drone-scheme-agriculture-uav-subsidy/scheme.md) |
| 583 | DRDO – Drone Technology Development Fund | ROW-583 | central | [scheme.md](schemes/row-583-drdo-drone-technology-development-fund/scheme.md) |
| 584 | Drone Didi Scheme for Women SHGs | ROW-584 | central | [scheme.md](schemes/row-584-drone-didi-scheme-for-women-shgs/scheme.md) |
| 585 | UTM (Unmanned Traffic Management) Framework for Startups | ROW-585 | central | [scheme.md](schemes/row-585-utm-unmanned-traffic-management-framework-for-startups/scheme.md) |
| 586 | FAME India Phase II – EV Purchase Subsidy | ROW-586 | central | [scheme.md](schemes/row-586-fame-india-phase-ii-ev-purchase-subsidy/scheme.md) |
| 587 | PM E-Bus Sewa – Electric Bus Deployment | ROW-587 | central | [scheme.md](schemes/row-587-pm-e-bus-sewa-electric-bus-deployment/scheme.md) |
| 588 | EMPS 2024 – Electric Mobility Promotion Scheme | ROW-588 | central | [scheme.md](schemes/row-588-emps-2024-electric-mobility-promotion-scheme/scheme.md) |
| 589 | EV Charging Infrastructure Development Scheme | ROW-589 | central | [scheme.md](schemes/row-589-ev-charging-infrastructure-development-scheme/scheme.md) |
| 590 | National Electric Mobility Mission Plan (NEMMP) | ROW-590 | central | [scheme.md](schemes/row-590-national-electric-mobility-mission-plan-nemmp/scheme.md) |
| 591 | EESL EV Aggregation Scheme for Bulk Procurement | ROW-591 | central | [scheme.md](schemes/row-591-eesl-ev-aggregation-scheme-for-bulk-procurement/scheme.md) |
| 592 | EV Battery Swapping Policy (NITI Aayog) | ROW-592 | central | [scheme.md](schemes/row-592-ev-battery-swapping-policy-niti-aayog/scheme.md) |
| 593 | Alternate Fuels for Transportation (Hydrogen Mobility) | ROW-593 | central | [scheme.md](schemes/row-593-alternate-fuels-for-transportation-hydrogen-mobility/scheme.md) |
| 594 | National Policy on Biofuels 2018 (Revised 2022) | ROW-594 | central | [scheme.md](schemes/row-594-national-policy-on-biofuels-2018-revised-2022/scheme.md) |
| 595 | Pradhan Mantri JI-VAN Yojana (Biofuel) | ROW-595 | central | [scheme.md](schemes/row-595-pradhan-mantri-ji-van-yojana-biofuel/scheme.md) |
| 596 | SATAT Scheme – Compressed Biogas (CBG) | ROW-596 | central | [scheme.md](schemes/row-596-satat-scheme-compressed-biogas-cbg/scheme.md) |
| 597 | Ethanol Blending Programme (EBP) | ROW-597 | central | [scheme.md](schemes/row-597-ethanol-blending-programme-ebp/scheme.md) |
| 598 | National Bamboo Mission | ROW-598 | central | [scheme.md](schemes/row-598-national-bamboo-mission/scheme.md) |
| 599 | BIRAC Industrial Biofoundry Support | ROW-599 | central | [scheme.md](schemes/row-599-birac-industrial-biofoundry-support/scheme.md) |
| 600 | PLI for Semiconductors & Display Fab | ROW-600 | central | [scheme.md](schemes/row-600-pli-for-semiconductors-display-fab/scheme.md) |

Rows that duplicate an already-curated scheme are not duplicated: row-8 → [pmmy](schemes/pmmy/scheme.md), row-51 → [pm-svanidhi](schemes/pm-svanidhi/scheme.md), row-54 → [pmegp](schemes/pmegp/scheme.md), row-88 → [nsp](schemes/nsp/scheme.md), row-96 → [ssy](schemes/ssy/scheme.md), row-97 → [pmjjby](schemes/pmjjby/scheme.md), row-98 → [pmsby](schemes/pmsby/scheme.md), row-99 → [apy](schemes/apy/scheme.md), row-143 → [pmfby](schemes/pmfby/scheme.md), row-144 → [pm-kisan](schemes/pm-kisan/scheme.md), row-232 → [pmmvy](schemes/pmmvy/scheme.md), row-237 → [pmuy](schemes/pmuy/scheme.md), row-335 → [pmmy](schemes/pmmy/scheme.md), row-390 → [pmmy](schemes/pmmy/scheme.md), row-437 → [pmegp](schemes/pmegp/scheme.md), row-512 → [nsap](schemes/nsap/scheme.md).
<!-- END ROW-SOURCED -->

## Concepts

Reusable beneficiary concepts: [agriculture](concepts/agriculture.md) ·
[farmer](concepts/farmer.md) · [woman](concepts/woman.md) ·
[student](concepts/student.md) · [entrepreneur](concepts/entrepreneur.md) ·
[artisan](concepts/artisan.md) · [street-vendor](concepts/street-vendor.md) ·
[low-income-household](concepts/low-income-household.md) ·
[senior-citizen](concepts/senior-citizen.md) ·
[person-with-disability](concepts/person-with-disability.md) ·
[social-category](concepts/social-category.md) ·
[household](concepts/household.md)

## Rules (reusable rule concepts)

[age](rules/age.md) · [income](rules/income.md) · [gender](rules/gender.md) ·
[state](rules/state.md) · [occupation](rules/occupation.md) ·
[farmer-status](rules/farmer-status.md) · [landholding](rules/landholding.md) ·
[student-status](rules/student-status.md) · [business-type](rules/business-type.md)

## Taxonomy (controlled vocabularies)

[scheme-categories](taxonomy/scheme-categories.md) ·
[applicant-types](taxonomy/applicant-types.md) ·
[benefit-types](taxonomy/benefit-types.md) ·
[geographic-levels](taxonomy/geographic-levels.md)

## Machine consumption

Every knowledge object is `type`-tagged Markdown with YAML frontmatter. The
eligibility-rule blocks (`eligibility_rules:` with `rule_id / field / operator
/ value / type / source / confidence`), benefit objects and exclusion objects
are the deterministic layer; the prose is the explainability layer. Ingest
with any YAML+Markdown parser. See [README.md](README.md).
