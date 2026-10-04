---
type: Taxonomy
title: Scheme Categories
description: Controlled vocabulary for classifying government schemes by domain.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Scheme Categories

Closed vocabulary used in scheme frontmatter under `categories`. A scheme may
carry multiple categories (max 3). Terms are lower_snake_case; do not invent
terms ad-hoc — propose additions via taxonomy review.

| Term | Definition | Used by (in this bundle) |
|---|---|---|
| `agriculture` | Farm cultivation, crop production, farm income support | pm-kisan, pmfby |
| `education` | Schooling and higher-education support | nsp, pms-sc, nmmss |
| `healthcare` | Medical treatment, hospitalisation cover | pm-jay |
| `housing` | House construction, purchase, rental housing | pmay-urban, pmay-gramin |
| `entrepreneurship` | Business creation and growth support | pmmy, stand-up-india, pmegp |
| `employment` | Employment generation and livelihood | pmegp, pm-svanidhi |
| `social-security` | Safety-net pensions, maternity, accident/life cover | nsap, pmmvy, apy, pmsby, pmjjby |
| `insurance` | Risk cover against loss (life, accident, crop, health) | pmfby, pm-jay, pmsby, pmjjby |
| `pension` | Periodic old-age / widow / disability pension | apy, nsap |
| `women-and-child` | Women's welfare, maternity, girl child | pmuy, ssy, pmmvy, nsap |
| `financial-inclusion` | Access to credit, accounts, small savings | pmmy, ssy, pmsby, pmjjby, pm-svanidhi |
| `artisan-support` | Traditional craftspeople and skilled workers | pm-vishwakarma |
| `clean-cooking-energy` | LPG / clean household energy access | pmuy |
| `rural-development` | Village infrastructure and rural livelihoods | pmay-gramin, nsap |
| `skill-development` | Training and skilling | pm-vishwakarma |

### Additions (runs batch rows 1–600, imported 2026-10-02)

Terms added to cover the domain spread of the imported batch. Same rule:
closed vocabulary, max 3 categories per scheme, propose changes via review.

| Term | Definition | Used by (in this bundle) |
|---|---|---|
| `clean-energy` | Renewable power, energy efficiency, green hydrogen, efficient lighting | row-190 (National Green Hydrogen Mission), row-191 (Solar Parks), row-193 (Wind-Solar Hybrid Policy) |
| `digital-public-infrastructure` | Digital platforms, identity and data-exchange systems, e-governance | row-65 (DigiLocker), row-66 (e-RUPI), row-67 (ONDC) |
| `defence-space` | Defence, aerospace and space programmes | row-78 (ISRO Start-up Policy), row-79 (DRDO CEPTAM), row-80 (iDEX) |
| `environment` | Pollution control, forests, climate and biodiversity programmes | row-103 (Mission Innovation India), row-106 (Green India Mission), row-108 (National Clean Energy Fund) |
| `food-processing` | Food processing, cold chain and agri-logistics | row-29 (SAMPADA), row-31 (Operation Greens), row-32 (Cold Chain) |
| `infrastructure` | Transport, urban, logistics and connectivity assets | row-57 (ULIP), row-58 (PM GatiShakti), row-60 (Sagarmala) |
| `industry-manufacturing` | Electronics and hardware manufacturing | row-39 (EMC 2.0), row-40 (Design Linked Incentive), row-41 (SPECS) |
| `innovation` | R&D and innovation funding | row-83 (NHM Innovation Fund), row-100 (BIRAC BioAngels), row-102 (Atal Tinkering Labs) |
| `intellectual-property` | Patents, trademarks, GI and IP facilitation | row-74 (Fast-Track Patent Examination), row-75 (SIPP), row-77 (GI Registry) |
| `regulation-compliance` | Registration, licensing, certification and standards | row-18 (Udyam Registration), row-20 (BIS Certification), row-21 (FSSAI Licensing) |
| `taxation` | Tax exemptions, deductions and duties | row-70 (Section 80-IAC), row-71 (Angel Tax Exemption), row-11 (NSIC Credit Support) |
| `textiles` | Textiles, handloom and apparel programmes | row-33 (TUFS), row-34 (Samarth), row-36 (PM-MITRA) |
| `trade-export` | Export promotion, import and trade facilitation | row-23 (MEIS), row-24 (SEIS), row-26 (ECGC) |
| `tribal-development` | Tribal and scheduled-tribe welfare programmes | row-89 (Van Dhan Vikas Kendra), row-90 (Tribal Innovation Fund), row-91 (NEVF) |
| `water-and-sanitation` | Water supply, sanitation and rivers | row-62 (AMRUT 2.0), row-63 (National Water Mission), row-64 (Jal Jeevan Mission) |
| `fisheries` | Fisheries, aquaculture and marine livelihoods | row-126 (FIDF), row-127 (Blue Revolution), row-159 (Fishermen welfare) |
| `other` | Residual bucket when no domain term fits; use sparingly | — |
| `tourism` | Tourism circuits, spiritual/wellness tourism, hospitality | row-223 (Swadesh Darshan 2.0), row-224 (PRASAD), row-227 (Medical & Wellness Tourism) |
| `mining-and-minerals` | Mineral exploration, DMF/PMKKKY funds, mining licences | row-228 (NMET), row-229 (PMKKKY), row-230 (District Mineral Foundation) |
| `media-and-entertainment` | Film, AVGC-XR and content production support | row-282 (NFDC Production Grants), row-283 (Film Facilitation Office), row-284 (AVGC-XR Policy) |
| `telecommunications` | Telecom products, networks and connectivity funds | row-290 (PLI for Telecom), row-292 (TTDF), row-294 (USOF) |
| `sports` | Sports development, athlete support and sport-tech | row-295 (Khelo India Sport Tech), row-296 (TOPS), row-297 (NSDF) |
| `animal-husbandry` | Livestock, dairy and animal-husbandry programmes | row-310 (AHIDF), row-312 (National Livestock Mission), row-315 (Rashtriya Gokul Mission) |
| `cooperative-sector` | Cooperative societies, federations and NCDC support | row-316 (NCDC Grants), row-317 (Cooperative Credit Support), row-318 (PACS Computerisation) |
| `power-sector` | Power distribution, grid and utility programmes | row-397 (RDSS), row-398 (KUSUM-A), row-400 (PM Surya Ghar) |
