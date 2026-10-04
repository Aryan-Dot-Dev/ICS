---
type: "Government Scheme Benefits"
title: "Jan Samarth Portal – Unified Credit Scheme Portal — Benefits"
description: "Benefit objects for ROW-134."
scheme_id: "ROW-134"
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
    resource: "https://www.jansamarth.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://jansamarth.in/grievances"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://jansamarth.in/our-partners"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://jansamarth.in/government-of-india-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://jansamarth.in/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://jansamarth.in/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://jansamarth.in/home"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://jansamarth.in/checkEligibility?id=eDNJcFlWOUtWWDZJL2hFQ2pBdFBTbjg9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://jansamarth.in/checkEligibility?id=elZEUStyejlCbVY4Ukp6NGttd2hCbEE9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://jansamarth.in/checkEligibility?id=d29KVnJLNlIvUE55bzFmL2d6ajRiR2c9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://jansamarth.in/checkEligibility?id=d0lobmZzNUs3QXU4TG9FeWV0bE9lc3M9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://jansamarth.in/checkEligibility?id=d1d4K0YvNG5aSGZiYUdwVWhpbVZjWm89OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Jan Samarth Portal – Unified Credit Scheme Portal — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: loan
    name: "PM SVANidhi"
    amount:
      value: 10000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Working Capital Loan"
    duration: "₹10,000 (Tranche 1)<br>₹20,000 (Tranche 2)<br>₹50,000 (Tranche 3) 7% interest subsidy on timely repayment; monthly cashback up to ₹100 on digital transactions; collateral-free"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: loan
    name: "PMMY (Mudra)"
    amount:
      value: 2000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Term Loan, Overdraft, Working Capital"
    duration: "₹20 lakhs (Tarun+ category) No collateral for loans ≤₹10 lakhs; interest rates deregulated but advised to be reasonable"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: loan
    name: "PMEGP"
    amount:
      value: 5000000
      currency: INR
      frequency: not_verified
    detail: "Term Loan for New Enterprises"
    duration: "₹50 lakh (manufacturing)<br>₹20 lakh (service) Margin money subsidy: 15–35% (general), 25–35% (special category); bank funds 60–75% of project cost"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: loan
    name: "WMS (Weavers Mudra)"
    amount:
      value: 200000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Term Loan, Cash Credit"
    duration: "₹2 lakhs 20% margin money support (max ₹25,000) by Ministry of Textiles; interest subsidy up to 6% (capped at 7%); no collateral required"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: loan
    name: "DAY-NRLM"
    amount:
      value: 300000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Term Loan, Cash Credit"
    duration: "₹3 lakh (for women SHGs in 250 backward districts) 7% interest subvention per annum; additional 3% for prompt repayment (effective rate 4%); no margin/collateral up to ₹10 lakh"
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: credit-guarantee
    name: "AIF (Agri Infrastructure)"
    amount:
      value: 20000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Long-term Debt"
    duration: "Up to ₹2 crore (full subvention)<br>Beyond ₹2 crore: subvention capped at ₹2 crore 3% interest subvention p.a. for up to 7 years; credit guarantee under CGTMSE for loans ≤₹2 crore; moratorium: 6 months–2 years"
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: loan
    name: "ACABC"
    amount:
      value: 2000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Loan for Agri-Clinics/Biz Centers"
    duration: "₹20 lakh (individual)<br>₹25 lakh (extremely successful individual)<br>₹100 lakh (group) 36–44% composite subsidy on Total Project Cost (TFO); margin money as per RBI norms; NABARD may provide up to 50% margin money concession for SC/ST/women/N-E/Hill states"
    source: S1
    confidence: medium
  - benefit_id: BEN-008
    type: loan
    name: "KCC (Kisan Credit Card)"
    amount:
      value: 200000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Revolving Cash Credit"
    duration: "No fixed limit (based on scale of finance) Interest subvention: 1.5% (farmers), 2% (fisheries); prompt repayment incentive: 3%; collateral-free up to ₹2 lakh"
    source: S1
    confidence: medium
  - benefit_id: BEN-009
    type: loan
    name: "KCC Fisheries"
    amount:
      value: 200000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Revolving Cash Credit"
    duration: "No fixed limit Interest subvention: 2%; prompt repayment incentive: 3%; collateral-free up to ₹2 lakh"
    source: S1
    confidence: medium
  - benefit_id: BEN-010
    type: loan
    name: "Solar Roof Top (SOLAR)"
    amount: not_verified
    detail: "Term Loan"
    duration: "Based on project cost Requires registration at PM-Surya Ghar portal; details subject to lender policy"
    source: S1
    confidence: medium
  - benefit_id: BEN-011
    type: loan
    name: "e-Kisan Upaj Nidhi (e-NWR)"
    amount:
      value: 7500000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Pledge Financing"
    duration: "Up to ₹75 lakhs (SBI example) 25% margin; interest: 7% p.a. for ≤6 months (subvention available for small/marginal farmers); MCLR + 0.80% beyond"
    source: S1
    confidence: medium
  - benefit_id: BEN-012
    type: loan
    name: "START (Loan for Startups)"
    amount:
      value: 200000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Term Loan, WC, Off-Balance Sheet"
    duration: "₹20 crore Covered under CGSS guarantee (85% for loans ≤₹10 crore; 75% for >₹10 crore); margin: min 25%; no collateral under CGSS"
    source: S1
    confidence: medium
  - benefit_id: BEN-013
    type: loan
    name: "CCME (Micro Enterprise Credit Card)"
    amount:
      value: 500000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Business Credit Card"
    duration: "Up to ₹5 lakh Interest-free grace period; annual fee capped at 1% of limit or ₹1,000; APR capped at 18%; no cash withdrawal; rewards & optional features"
    source: S1
    confidence: medium
  - benefit_id: BEN-014
    type: loan
    name: "NAMASTE"
    amount:
      value: 500000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Capital Subsidy for Self-Employment"
    duration: "₹5 lakh (individual)<br>₹50 lakh (group, max ₹3.75 lakh/beneficiary) 50% subsidy on project cost ≤₹5 lakh; ₹2.5 lakh + 25% of balance for ₹5–15 lakh; interest subsidy: 5% p.a. (4% for women) on loans ≤₹1 lakh; 6% p.a. on loans >₹1 lakh; max repayment: 5 years (≤₹5 lakh), 7 years (>₹5 lakh)"
    source: S1
    confidence: medium
  - benefit_id: BEN-015
    type: loan
    name: "ECLGS 5.0"
    amount:
      value: 1000000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Additional Working Capital Term Loan"
    duration: "₹100 crore (MSME/Non-MSME)<br>₹1,500 crore (Airline) 20% of peak fund-based WC (Q4 FY25–26) for MSME/Non-MSME<br>100% of peak total credit outstanding for airlines<br>100% guarantee for MSMEs, 90% for non-MSMEs/airlines<br>Interest: MSMEs – EBLR+0.75% (cap 9%); Non-MSMEs – MCLR+0.75% (cap 9%); NBFCs – ROI ≤13% p.a.<br>Tenor: 5 years (1-year moratorium) for MSME/Non-MSME; 7 years (2-year moratorium) for airlines<br>No guarantee fee; no fresh collateral required"
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.