---
type: Beneficiary Concept
title: Street Vendor
description: Urban street vendors recognised under PM SVANidhi through certificate of vending or survey identification.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Street Vendor

## Definition

A person engaged in vending of goods/services in urban streets, formally
recognised for PM SVANidhi by (a) a **Certificate of Vending (CoV)** or
Letter of Recommendation from an Urban Local Body (ULB), or (b) being
identified in the ULB survey as a street vendor. The scheme applies in
permitted vending areas/zones as defined by ULBs.

## Schemes linked to this concept

- [PM SVANidhi](../schemes/pm-svanidhi/scheme.md) — collateral-free working-capital micro-credit ladder (₹15K → ₹25K → ₹50K after restructuring), interest subsidy and digital cashback

## Engine notes

`applicant.occupation = street_vendor` AND vending-documentation status
are hard checks; documentation status is frequently missing → emit
`needs_information` with
`missing_fields: [applicant.vending_certificate]`. Vendors without any
formal recognition are typically not eligible (see
[exclusions](../schemes/pm-svanidhi/exclusions.md)).
