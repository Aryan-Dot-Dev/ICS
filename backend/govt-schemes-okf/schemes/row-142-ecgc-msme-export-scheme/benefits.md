---
type: "Government Scheme Benefits"
title: "ECGC MSME Export Scheme — Benefits"
description: "Benefit objects for ROW-142."
scheme_id: "ROW-142"
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
    resource: "https://ecgc.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ecgc.in/claim-of-rs-65-00-lakhs-was-settled-by-ecgc-kochi-bo-to-m-s-ht-foods-pvt-ltd-on-account-of-non-payment-by-a-bahraini-buyer"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ecgc.in/ecgc-bangalore-branch-officials-handing-over-claim-cheque-of-rs-50-00-lakh-to-goodwill-fabrics"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ecgc.in/claim-payment-of-rs-13-5-lakh-by-ecgc-bangalore-branch-to-its-policyholder-s-s-groups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ecgc.in/policy-claim-cheque-of-rs-42-64-lakhs-was-handed-over-to-m-s-t-c-terrytex-ltd-the-claim-was-settled-on-account-of-the-default-by-a-buyer-m-s-la-compagnie-safdie-inc-canada"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ecgc.in/disbursement-of-claim-cheque-for-amount-107269146-00-to-m-s-matrix-clothing-pvt-ltd-on-account-of-loss-due-to-insolvency-of-buyer-m-s-express-llc-usa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://www.ecgcltd.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://www.ecgc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ECGC MSME Export Scheme — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: insurance
    name: "Financial Compensation"
    amount: not_verified
    detail: "Settlement of export insurance claims arising from buyer default, insolvency, or geopolitical risks"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "Claim Amount Range"
    amount:
      value: 1350000
      currency: INR
      frequency: not_verified
    detail: "₹13.5 lakh to over ₹10.72 crore (based on evidence: ₹13.5 lakh, ₹42.64 lakh, ₹65 lakh, ₹92.03 lakh, ₹1.08 crore, ₹2.37 crore, ₹3.99 crore, ₹6.45 crore, ₹10.13 crore, ₹10.72 crore)"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: service
    name: "Settlement Mechanism"
    amount: not_verified
    detail: "Payments made directly to the exporter’s bank account after verification and approval"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: reimbursement
    name: "Risk Coverage"
    amount:
      value: 5000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "<ul><li>Component I: Up to 100% risk coverage over existing ECGC cover (Feb 14, 2026 – Mar 15, 2026)</li><li>Component II: Up to 95% risk coverage over existing ECGC cover (Mar 16, 2026 – Jun 15, 2026)</li><li>Component III: Up to 50% reimbursement of eligible costs (capped at ₹50 lakhs per exporter)</li></ul>"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: service
    name: "Additional Support"
    amount: not_verified
    detail: "<ul><li>Access to ECGC’s digital portal for claim submission and tracking</li><li>Support under government-backed RELIEF initiative</li><li>Assistance in recovering dues from insolvent or defaulting overseas buyers</li><li>No processing fees charged by ECGC for claim settlement under RELIEF</li></ul>"
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "Documentation Support"
    amount: not_verified
    detail: "ECGC provides video tutorials, QR codes for SMILE BIZ portal, and client portal services via YouTube (@ecgcltd7016) and https://www.ecgcltd.in (https://www.ecgcltd.in)"
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.