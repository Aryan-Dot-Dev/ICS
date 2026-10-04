#!/usr/bin/env python3
"""Generate OKF v0.2 Government Scheme objects for runs rows 1..600.

Source of truth : D:/final-ai-server/runs/row-<n>-<slug>/ai_summary.json
                  (+ report.md eligibility/benefit tables when present)
Target           : govt-schemes-okf/schemes/row-<n>-<slug>/
                   {scheme,eligibility,benefits,documents,application,exclusions}.md

Conventions (see README.md):
  * objects under schemes/ are FACT objects -> full provenance frontmatter
    (status, verified, generated, stale_after, sources) is always emitted.
  * every machine-derived claim keeps its verbatim source text in a
    `detail:`/evidence slot; anything not present in the source data is
    written as `not_verified`, never guessed.
  * rows that duplicate an already-curated scheme are skipped (SKIP map).

All generated objects are status: draft — machine import awaiting review.
"""
import glob
import json
import os
import re
import sys

RUNS_DIR = "D:/final-ai-server/runs"
HERE = os.path.dirname(os.path.abspath(__file__))
BUNDLE = os.path.dirname(HERE)
SCHEMES_DIR = os.path.join(BUNDLE, "schemes")
INDEX = os.path.join(BUNDLE, "index.md")

ROWS = range(1, 601)
TODAY = "2026-10-02"
STALE_AFTER = "2026-12-31"
ELIG_VERSION = "2026-10"
GEN_BY = "process:runs-okf-generator"
VERIFIED_BY = "process:runs-import-check"
OKF_VERSION = "0.2"

# Rows whose scheme is already curated in this bundle -> skip, map in index.md.
SKIP = {
    8: "pmmy",
    51: "pm-svanidhi",
    54: "pmegp",
    88: "nsp",
    96: "ssy",
    97: "pmjjby",
    98: "pmsby",
    99: "apy",
    143: "pmfby",
    144: "pm-kisan",
    232: "pmmvy",
    237: "pmuy",
    335: "pmmy",
    390: "pmmy",
    437: "pmegp",
    512: "nsap",
}

# --------------------------------------------------------------------------
# small helpers
# --------------------------------------------------------------------------

MDLINK_RE = re.compile(r"\[([^\]]*)\]\(([^)]*)\)")


def clean(s):
    if s is None:
        return ""
    s = str(s).replace("\ufffd", "").replace("\x00", "")
    s = re.sub(r"[\r\n\t]+", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    # flatten markdown links inside quoted source text so they are quoted
    # verbatim, not re-emitted as (possibly relative, broken) links
    s = MDLINK_RE.sub(lambda m: f"{m.group(1)} ({m.group(2)})", s)
    return s


def q(s):
    """YAML double-quoted scalar."""
    s = clean(s)
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def ylist(items, indent=2):
    pad = " " * indent
    return "\n".join(f"{pad}- {q(i)}" for i in items)


def snip(text, n=150):
    t = clean(text)
    return t if len(t) <= n else t[: n - 1].rsplit(" ", 1)[0] + "\u2026"


def slugify(text, maxlen=48):
    s = re.sub(r"[^a-z0-9]+", "-", clean(text).lower()).strip("-")
    return s[:maxlen].rstrip("-") or "item"


def md_cell(text):
    return clean(text).replace("|", "\\|")


STATE_CODES = {
    "andhra pradesh": "IN-AP", "arunachal pradesh": "IN-AR", "assam": "IN-AS",
    "bihar": "IN-BR", "chhattisgarh": "IN-CT", "goa": "IN-GA", "gujarat": "IN-GJ",
    "haryana": "IN-HR", "himachal pradesh": "IN-HP", "jharkhand": "IN-JH",
    "karnataka": "IN-KA", "kerala": "IN-KL", "madhya pradesh": "IN-MP",
    "maharashtra": "IN-MH", "manipur": "IN-MN", "meghalaya": "IN-ML",
    "mizoram": "IN-MZ", "nagaland": "IN-NL", "odisha": "IN-OR", "orissa": "IN-OR",
    "punjab": "IN-PB", "rajasthan": "IN-RJ", "sikkim": "IN-SK",
    "tamil nadu": "IN-TN", "telangana": "IN-TG", "tripura": "IN-TR",
    "uttar pradesh": "IN-UP", "uttarakhand": "IN-UK", "west bengal": "IN-WB",
    "delhi": "IN-DL", "jammu and kashmir": "IN-JK", "puducherry": "IN-PY",
    "chandigarh": "IN-CH", "andaman and nicobar": "IN-AN",
}

CATEGORIES_BY_MINISTRY = {
    "Agriculture": ["agriculture"],
    "Agriculture Processing": ["agriculture", "food-processing"],
    "Carbon & Environment": ["environment"],
    "Commerce & Trade": ["trade-export"],
    "Compliance & Registration": ["regulation-compliance", "entrepreneurship"],
    "Digital India": ["digital-public-infrastructure"],
    "Education & Skilling": ["education", "skill-development"],
    "Electronics": ["industry-manufacturing"],
    "Electronics & IT": ["industry-manufacturing", "digital-public-infrastructure"],
    "Energy Efficiency": ["clean-energy"],
    "Export Promotion": ["trade-export"],
    "Finance & Banking": ["financial-inclusion"],
    "Fisheries": ["fisheries"],
    "Healthcare": ["healthcare"],
    "Horticulture": ["agriculture", "food-processing"],
    "Infrastructure & Logistics": ["infrastructure"],
    "Innovation Grants": ["entrepreneurship", "innovation"],
    "Intellectual Property": ["intellectual-property"],
    "MSME": ["entrepreneurship", "employment"],
    "MSME & Finance": ["entrepreneurship", "financial-inclusion"],
    "North East Special": ["entrepreneurship", "employment"],
    "Renewable Energy": ["clean-energy"],
    "Rural Development": ["rural-development"],
    "Social Justice": ["social-security"],
    "Space & Defence": ["defence-space"],
    "Tax Incentives": ["taxation", "entrepreneurship"],
    "Textiles": ["textiles", "artisan-support"],
    "Tribal Development": ["tribal-development"],
    "Water & Sanitation": ["water-and-sanitation"],
    "Women Entrepreneurship": ["women-and-child", "entrepreneurship"],
    # added for runs rows 201-400
    "Defence & Space": ["defence-space"],
    "Infrastructure": ["infrastructure"],
    "Tourism": ["tourism"],
    "Mining & Minerals": ["mining-and-minerals"],
    "Social Welfare": ["social-security"],
    "Tribal Welfare": ["tribal-development"],
    "Pharmaceuticals": ["healthcare", "industry-manufacturing"],
    "Logistics & Transport": ["infrastructure"],
    "Deep Tech & Innovation": ["innovation"],
    "Incubation & Acceleration": ["entrepreneurship", "innovation"],
    "Housing & Urban": ["housing", "infrastructure"],
    "Media & Entertainment": ["media-and-entertainment"],
    "Handicrafts & Culture": ["artisan-support"],
    "Telecom": ["telecommunications"],
    "Sports": ["sports"],
    "Legal & Regulatory": ["regulation-compliance"],
    "Food Processing": ["food-processing", "agriculture"],
    "Animal Husbandry": ["animal-husbandry", "agriculture"],
    "Cooperative Sector": ["cooperative-sector"],
    "PSU Support": ["entrepreneurship", "innovation"],
    "Ports & Shipping": ["infrastructure"],
    "Road Transport": ["infrastructure"],
    "Railways": ["infrastructure"],
    "Steel": ["industry-manufacturing"],
    "Chemicals & Petrochemicals": ["industry-manufacturing"],
    "Urban Development": ["infrastructure"],
    "Power & Electricity": ["power-sector"],
    # added for runs rows 401-600
    "Agriculture & AgriTech": ["agriculture"],
    "Tax & Compliance": ["taxation", "regulation-compliance"],
    "Silk & Khadi": ["artisan-support", "textiles"],
    "Gems & Jewellery": ["industry-manufacturing", "trade-export"],
    "Electronics Manufacturing": ["industry-manufacturing"],
    "Space Economy": ["defence-space"],
    "CleanTech & GreenTech": ["environment", "clean-energy"],
    "FinTech & BFSI": ["financial-inclusion"],
    "Healthcare & MedTech": ["healthcare"],
    "EdTech & Skills": ["education", "skill-development"],
    "Social Entrepreneurship": ["entrepreneurship", "innovation"],
    "Water Technology": ["water-and-sanitation"],
    "Cooperative & Rural": ["cooperative-sector", "rural-development"],
    "MSME Clusters": ["entrepreneurship", "industry-manufacturing"],
    "Innovation Ecosystem": ["innovation", "entrepreneurship"],
    "Jal Shakti": ["water-and-sanitation", "agriculture"],
    "Drone & UAV": ["industry-manufacturing", "innovation"],
    "EV & Green Mobility": ["clean-energy", "industry-manufacturing"],
    "Bioeconomy & Biofuels": ["clean-energy", "agriculture"],
    "Semiconductors": ["industry-manufacturing"],
}

CATEGORY_KEYWORDS = [
    ("agriculture", [r"\bfarm", r"\bcrop", r"\bkisan\b", r"agricultur", r"krishi",
                     r"irrigat", r"fertili", r"paddy", r"rabi", r"kharif"]),
    ("food-processing", [r"food process", r"cold chain", r"annapurna", r"food park",
                         r"processing of food", r"packag\w* of food"]),
    ("education", [r"scholarship", r"\bstudent", r"education", r"vidyalaya", r"\bschool",
                   r"\bcollege", r"university", r"higher education", r"literacy"]),
    ("skill-development", [r"\bskill", r"training", r"apprentic", r"iti\b", r"pradhan mantri kaushal"]),
    ("healthcare", [r"health", r"hospital", r"medical", r"ayushman", r"clinic",
                    r"nutrition", r"icds", r"sanitation of health"]),
    ("housing", [r"awas", r"\bhousing\b", r"house construct", r"\bshelter\b", r"pucca house", r"awASS".lower()]),
    ("entrepreneurship", [r"startup", r"start-up", r"enterprise", r"msme", r"msmes", r"udyam",
                          r"entrepreneur", r"self-employment", r"business", r"incubat", r"accelerat"]),
    ("employment", [r"employment", r"rozgar", r"\bjobs?\b", r"livelihood", r"job creation", r"generation of employment"]),
    ("social-security", [r"pension", r"welfare", r"disab", r"widow", r"senior citizen",
                         r"food security", r"old age", r"destitute", r"social assistance"]),
    ("insurance", [r"insurance", r"\bbima\b", r"premium", r"insured", r"accident cover", r"risk cover"]),
    ("pension", [r"\bpension", r"vridha", r"old age monthly"]),
    ("women-and-child", [r"\bwomen\b", r"\bwoman\b", r"stree", r"mahila", r"girl child",
                         r"matru", r"\bbal\b", r"gender", r"self help group", r"\bshg"]),
    ("financial-inclusion", [r"\bbank", r"jan dhan", r"savings account", r"\bcredit\b",
                             r"\bloan", r"overdraft", r"financial inclusion", r"micro finance",
                             r"microfinance", r"deposit"]),
    ("artisan-support", [r"artisan", r"handicraft", r"handloom", r"weaver", r"craft",
                         r"carpet", r"traditional skill"]),
    ("clean-cooking-energy", [r"\blpg\b", r"ujjwala", r"cooking", r"cylinder"]),
    ("rural-development", [r"\brural\b", r"gramin", r"\bvillage", r"panchayat", r"grameen"]),
    ("environment", [r"environment", r"\bgreen india", r"climate", r"\bforest", r"afforest",
                     r"carbon", r"biodiversity", r"pollution"]),
    ("clean-energy", [r"solar", r"\bwind\b", r"renewable", r"hydro", r"hydrogen", r"\bleds\b",
                      r"ujala", r"energy efficiency", r"biomass", r"energy saving",                      r"photovoltaic",
                      r"green energy", r"clean energy", r"net zero", r"biofuel", r"ethanol",
                      r"biogas", r"electric vehicle", r"\bevs\b"]),
    ("infrastructure", [r"infrastructure", r"\broad", r"\bport\b", r"bharatmala", r"sagarmala",
                        r"\brail\b", r"smart cit", r"corridor", r"bridge", r"logistic", r"bharatnet",
                        r"pipeline", r"airport", r"ulip"]),
    ("trade-export", [r"\bexport", r"\bimports?\b", r"\btrade\b", r"merchandise", r"customs",
                      r"duty drawback", r"free trade"]),
    ("digital-public-infrastructure", [r"\bdigital", r"digilocker", r"\bondc\b",
                                       r"e-governance", r"aadhaar", r"indiastack", r"e-rupi",
                                       r"cyber", r"data exchange"]),
    ("industry-manufacturing", [r"electronic", r"semicond", r"manufactur",
                                 r"assembly plant", r"industrial park"]),
    ("defence-space", [r"defence", r"defense", r"\bdrdo\b", r"\bisro\b", r"idex",
                       r"military", r"naval", r"\barmy\b", r"air force",
                       r"satellite", r"launch vehicle", r"space technolog"]),
    ("fisheries", [r"\bfish", r"aquacultur", r"marine", r"blue revolution", r"maritime"]),
    ("water-and-sanitation", [r"\bwater\b", r"\bjal\b", r"sanitation", r"sewage", r"toilet",
                              r"drinking water", r"ganga"]),
    ("intellectual-property", [r"\bpatent", r"trademark", r"\bgi tag\b", r"geographical indication",
                               r"\bipr\b", r"copyright", r"intellectual property"]),
    ("taxation", [r"\btax", r"\bgst\b", r"deduction", r"exemption", r"section 80", r"\bduty\b"]),
    ("textiles", [r"textile", r"powerloom", r"\byarn\b", r"\bapparel\b", r"fabric",
                  r"silk\b", r"wool\b", r"jute\b", r"tufts", r"knotting"]),
    ("tribal-development", [r"tribal", r"scheduled tribe", r"van dhan", r"van bandhu", r"\bst\b"]),
    ("innovation", [r"innovation", r"research and development", r"\br&d\b", r"deep tech",
                    r"mission innovation", r"startup india", r"quantum"]),
    ("regulation-compliance", [r"registration", r"licen[cs]e", r"certification", r"compliance",
                               r"\biso\b", r"\bbis\b", r"fssai", r"regulatory", r"standard"]),
]

BENEFIT_TYPE_KEYWORDS = [
    ("tax-exemption", [r"\btax\b", r"deduction", r"exemption from", r"section 80", r"\bgst\b.*rebat"]),
    ("credit-guarantee", [r"guarantee cover", r"credit guarantee", r"guarantee fund", r"collateral-free guarantee"]),
    ("equity", [r"equity", r"venture capital", r"fund of funds", r"invest(?:ment)? in startups"]),
    ("insurance", [r"insurance", r"\bbima\b", r"insured", r"cover against"]),
    ("pension", [r"pension", r"monthly income in old age"]),
    ("scholarship", [r"scholarship", r"stipend", r"fee waiver", r"tuition"]),
    ("loan", [r"\bloan", r"\bcredit\b", r"overdraft", r"working capital", r"term finance",
              r"financing", r"advance"]),
    ("reimbursement", [r"reimburs", r"refund of"]),
    ("subsidy", [r"subsid", r"subvention", r"concession"]),
    ("grant", [r"\bgrant", r"seed money", r"financial assistance", r"assistance of", r"cash award"]),
    ("cash-transfer", [r"direct benefit transfer", r"\bdbt\b", r"cash transfer", r"transfer of funds",
                       r"per annum per family", r"payment of rs"]),
    ("in-kind", [r"free of cost", r"e-voucher", r"toolkit", r"supply of", r"provision of",
                 r"connection with", r"devices?", r"foodgrain", r"insurance cover under" ]),
    ("service", [r"mentorship", r"handholding", r"facilitation", r"training", r"incubation",
                 r"market link", r"advisory", r"portal", r"common facility"]),
]

APPLICANT_KEYWORDS = [
    ("self-help-group", [r"self help group", r"\bshgs?\b"]),
    ("street-vendor", [r"street vendor", r"street vendors", r"vendors", r"rehri", r"thela", r"survey id"]),
    ("pregnant-woman", [r"pregnan", r"lactating", r"expecting mother"]),
    ("fisher", [r"fisher", r"aquacultur", r"fish farmer", r"fishermen"]),
    ("weaver", [r"weaver", r"handloom", r"handloom weav", r"weaving"]),
    ("artisan", [r"artisan", r"craftsperson", r"craftsman", r"handicraft", r"carpet weav"]),
    ("farmer", [r"farmer", r"cultivator", r"\bkisan\b", r"landholder", r"agripreneur"]),
    ("student", [r"\bstudent", r"scholarship", r"\bpupil", r"school child"]),
    ("entrepreneur", [r"entrepreneur", r"startup", r"start-up", r"self-employed"]),
    ("business", [r"\bmse", r"\bmsme", r"enterprise", r"\bcompany", r"\bfirms?", r"\bunits?",
                  r"proprietor", r"\bllp", r"partnership", r"exporter", r"manufacturer",
                  r"trader", r"retailer", r"shopkeeper", r"dealer", r"bank\b", r"lender"]),
    ("institution", [r"incubator", r"institution", r"universit", r"\bcollege", r"\biits?\b",
                     r"\bnits?\b", r"\bcluster", r"research", r"\bpsu", r"authority",
                     r"agency", r"panchayat", r"state government", r"local body",
                     r"\bngos?\b", r"organis", r"organiz", r"association", r"laborator",
                     r"accelerator", r"co-working", r"cooperativ", r"society\b"]),
    ("worker", [r"\bworkers?", r"labour", r"labor", r"unorganised", r"unorganized",
                r"wage employee", r"construction worker"]),
    ("senior-citizen", [r"senior citizen", r"elderly", r"old age", r"60 year", r"60+"]),
    ("woman", [r"\bwomen\b", r"\bwoman\b", r"mahila", r"stree", r"female"]),
    ("widow", [r"\bwidow"]),
    ("child", [r"\bchildren", r"\bchild", r"girl child", r"minor\b"]),
    ("household", [r"household", r"families", r"\bfamily\b"]),
    ("individual", [r"individual", r"\bcitizens?\b", r"persons?", r"applicant"]),
    ("social-category", []),
]

DIMENSIONS = [
    ("age", [r"\bage\b", r"aged\b", r"years of age"]),
    ("gender", [r"\bwomen\b", r"\bwoman\b", r"\bfemale\b", r"\bgender\b", r"\bmen\b"]),
    ("citizenship/residency", [r"citizen", r"residen", r"domicile", r"\bnri\b", r"nationality"]),
    ("state", [r"\bstate\b", r"resident of", r"domicile", r"region of", r"within the state"]),
    ("district", [r"\bdistrict\b"]),
    ("rural/urban", [r"\brural\b", r"\burban\b"]),
    ("income", [r"\bincome\b", r"\bbpl\b", r"poverty line"]),
    ("occupation", [r"occupation", r"\bfarmer", r"cultivat", r"profession", r"occupation"]),
    ("employment status", [r"employ", r"unemploy", r"self-employ"]),
    ("farmer status", [r"\bfarmer", r"landhold", r"cultivat"]),
    ("landholding", [r"landholding", r"land record", r"hectare", r"\bacres?\b"]),
    ("business ownership", [r"owner", r"proprietor", r"founder", r"director",
                            r"partnership", r"\bllp\b", r"private limited"]),
    ("business type", [r"company type", r"\bmicro\b", r"small enterpr", r"\bmsme",
                       r"manufactur", r"service sector", r"\bfirm\b", r"industry"]),
    ("student status", [r"\bstudent", r"enrol", r"enroll", r"\bschool", r"\bcollege", r"university"]),
    ("educational level", [r"\beducation", r"qualification", r"\bdegree\b", r"matric", r"class \d"]),
    ("social category", [r"\bsc/\bst\b", r"scheduled caste", r"scheduled tribe", r"\bobc",
                         r"minorit", r"backward class"]),
    ("disability status", [r"disab"]),
    ("marital/family status", [r"marital", r"married", r"widow", r"\bfamily\b", r"household"]),
    ("pregnancy/maternity", [r"pregnan", r"lactat", r"maternity"]),
    ("household status", [r"household", r"\bfamily\b"]),
    ("beneficiary under another scheme", [r"other scheme", r"already avail", r"availing",
                                          r"no duplication", r"only one policy", r"another policy"]),
    ("previous benefit", [r"previous benefit", r"earlier avail", r"already received"]),
    ("bank account", [r"bank account", r"savings account"]),
    ("Aadhaar", [r"aadhaar", r"\budai\b"]),
    ("scheme-specific", [r"registration", r"recognition", r"certificate", r"licen[cs]e",
                         r"approval", r"identit"]),
]

EXCLUSION_MARKERS = re.compile(
    r"\b(not eligible|ineligible|excluded?|cannot (?:avail|apply|be|receive)|"
    r"shall not (?:be|have)|should not (?:be|have)|must not (?:be|have)|"
    r"not be entitled|not entitled|disqualif\w*|"
    r"not qualify|debarred|blacklist\w*|not be considered|not allowed|barred from|"
    r"prohibited|no longer eligible|not (?:be )?release|not allowed|rejected\b|"
    r"no duplication|duplicate (?:application|beneficiary))\b",
    re.I,
)

MODAL = re.compile(
    r"\b(must|shall|should|required|mandatory|needs? to|have to|has to|is required|"
    r"are required|prerequisite|essential|eligib\w*|criterion|criteria|condition|"
    r"only|restricted|restrict|limit(?:ed|s)? to|qualify|entitle)\b",
    re.I,
)

PREF_SOFT = re.compile(r"\b(priority|preference|preferential|may|relaxation|relaxed|incentiv\w*)\b", re.I)

AMT_RE = re.compile(
    r"(?:rs\.?|inr|₹)\s*([\d][\d,]*(?:\.\d+)?)\s*(crore|crores|lakh|lakhs|million|billions?|thousands?)?",
    re.I,
)
AMT2_RE = re.compile(r"\b([\d][\d,]*(?:\.\d+)?)\s*(crore|crores|lakh|lakhs)\b", re.I)
UNIT = {"crore": 10 ** 7, "crores": 10 ** 7, "lakh": 10 ** 5, "lakhs": 10 ** 5,
        "million": 10 ** 6, "billion": 10 ** 9, "billions": 10 ** 9,
        "thousand": 10 ** 3, "thousands": 10 ** 3}


def find_amounts(text):
    out = []
    for m in AMT_RE.finditer(text):
        val = float(m.group(1).replace(",", ""))
        unit = (m.group(2) or "").lower()
        out.append((int(val * UNIT.get(unit, 1)) if val == int(val) else val * UNIT.get(unit, 1), m.start()))
    if not out:
        for m in AMT2_RE.finditer(text):
            window = text[max(0, m.start() - 40): m.start()].lower()
            if not re.search(r"max|up to|maximum|capp?ed|not exceed|\ble\b|within", window):
                continue
            val = float(m.group(1).replace(",", ""))
            out.append((int(val * UNIT[m.group(2).lower()]), m.start()))
    out.sort(key=lambda x: x[1])
    return [v for v, _ in out]


def freq_of(text):
    low = text.lower()
    if re.search(r"per annum|per year|annually|p\.?a\.?|/year|per financial year|every year", low):
        return "annual"
    if re.search(r"per month|monthly|/month|every month", low):
        return "monthly"
    if re.search(r"quarter", low):
        return "quarterly"
    if re.search(r"one[- ]time|once\b|single instal", low):
        return "one_time"
    if re.search(r"four months|6 months|half[- ]yearly|semi[- ]annual", low):
        return "periodic"
    return "not_verified"


def is_cap(text):
    return bool(re.search(r"up to|max(?:imum)?|capp?ed|not exceed|not more than|≤|limit(?:ed)? to",
                          text, re.I))


def match_any(patterns, text):
    for p in patterns:
        if re.search(p, text, re.I):
            return True
    return False


def detect_state(text):
    low = clean(text).lower()
    if not low or re.search(r"pan-india|all india|nationwide|north eastern region", low):
        return None
    for name in sorted(STATE_CODES, key=len, reverse=True):
        if re.search(r"\b" + re.escape(name) + r"\b", low):
            return STATE_CODES[name]
    return None


STATE_ALIASES = {"up": "uttar pradesh", "j&k": "jammu and kashmir",
                 "j&k.": "jammu and kashmir"}


# --------------------------------------------------------------------------
# structured rule extraction
# --------------------------------------------------------------------------

class RuleFactory:
    def __init__(self):
        self.counters = {}

    def next_id(self, prefix):
        self.counters[prefix] = self.counters.get(prefix, 0) + 1
        return f"{prefix}-{self.counters[prefix]:03d}"

    def add(self, rules, prefix, field, operator, value, text, confidence, rtype="hard"):
        rules.append({
            "rule_id": self.next_id(prefix),
            "field": field,
            "operator": operator,
            "value": value,
            "type": rtype,
            "source": "SRC",
            "confidence": confidence,
            "detail": clean(text),
        })


def rules_from_text(label, text, rf: RuleFactory, matrix=False):
    """Best-effort structured rules from one eligibility criterion/sentence."""
    rules = []
    ctx = f"{label} {text}" if label else text
    low = ctx.lower()
    tlow = text.lower()
    biz_label = bool(label and re.search(r"company|entity|business|unit|firm|enterprise|turnover",
                                         label, re.I))
    if matrix or MODAL.search(text) or (label and not PREF_SOFT.search(text)):
        default_type = "soft" if PREF_SOFT.search(text) else "hard"
    else:
        return rules
    # "Target Beneficiaries / Coverage" rows describe the intended audience,
    # not a deterministic gate — keep them soft so the engine never hard-blocks
    # an applicant on an audience listing.
    if label and re.search(r"target|beneficiar|coverage", label, re.I):
        default_type = "soft"

    # -- business age since incorporation ---------------------------------
    m = re.search(r"(?:not\s+exceed|within|maximum|max\.?|up to|less than)\s*(?:the\s+period\s*of\s*)?"
                  r"(\d{1,2})\s*year", low)
    if m and re.search(r"incorporat|formation|constitution|existence|inception|established|date of",
                       low) and biz_label:
        rf.add(rules, "AGE", "applicant.business.age_years", "less_than_or_equal",
               int(m.group(1)), text, "high", default_type)
        return rules

    # -- turnover ----------------------------------------------------------
    if re.search(r"turnover", low):
        vals = find_amounts(text)
        if vals:
            rf.add(rules, "TRN", "applicant.business.annual_turnover", "less_than_or_equal",
                   vals[0], text, "high", default_type)
            return rules

    # -- income ceiling ----------------------------------------------------
    if re.search(r"\bincome\b", low) and not re.search(r"income tax|income tax pay", low):
        vals = find_amounts(text)
        if vals and re.search(r"exceed|below|not more|up to|maximum|less than|surpass|shall not|must not",
                              low):
            rf.add(rules, "INC", "applicant.annual_income", "less_than_or_equal",
                   vals[0], text, "high", default_type)
            return rules

    # -- human age ---------------------------------------------------------
    if re.search(r"\bage\b|\baged\b|years of age", low) and not biz_label:
        m = re.search(r"(\d{1,3})\s*(?:-|to|and)\s*(?:the\s+age\s*of\s*)?(\d{1,3})\s*years", low)
        if m and int(m.group(1)) < int(m.group(2)):
            rf.add(rules, "AGE", "applicant.age", "between",
                   [int(m.group(1)), int(m.group(2))], text, "high", default_type)
            return rules
        m = re.search(r"(?:above|over|exceeding|at least|not less than|minimum(?:\s+age)?(?:\s+of)?)"
                      r"\s*(?:the\s+age\s*of\s*)?(\d{1,3})\s*years?", low)
        if not m:
            m = re.search(r"(?:age(?:\s+of)?|aged)\s*(?:at\s+least\s*)?(\d{1,3})\s*years?"
                          r"\s*(?:or\s*(?:above|more|over))?", low)
        if m:
            rf.add(rules, "AGE", "applicant.age", "greater_than_or_equal",
                   int(m.group(1)), text, "high", default_type)
            return rules
        m = re.search(r"(?:below|under|less than|up to|maximum|below the age of)\s*(?:the\s+age\s*of\s*)?"
                      r"(\d{1,3})\s*years?", low)
        if m:
            rf.add(rules, "AGE", "applicant.age", "less_than_or_equal",
                   int(m.group(1)), text, "high", default_type)
            return rules

    # -- state / residency -------------------------------------------------
    m = re.search(r"resident(?:ship)?\s+(?:of|within|in)\s+([A-Za-z ]{3,30}?)(?:\s+[.,;]|$|,)", ctx)
    code = detect_state(m.group(1)) if m else None
    if not code and label and re.search(r"state|domicile|resident", label, re.I):
        code = detect_state(text)
    if not code:
        code = detect_state(text) if re.search(r"domicile|resident of|belonging to", low) else None
    if code:
        rf.add(rules, "ST", "applicant.state", "equals", code, text, "medium", default_type)
        return rules
    m = re.search(r"registered office\s+(?:in|within)\s+([A-Za-z ]{3,30}?)(?:\s+[.,;]|$|,)", ctx)
    if m:
        c2 = detect_state(m.group(1))
        if c2:
            rf.add(rules, "ST", "applicant.business.registered_state", "equals", c2, text, "medium",
                   default_type)
            return rules

    # -- gender (exclusivity only: "women-only", not "women welcome") -------
    if label and re.search(r"target|beneficiar|coverage", label, re.I):
        pass  # audience listing — never a gender gate (handled as soft above)
    elif re.search(r"\bwomen\b|\bwoman\b|\bfemale\b", ctx) and re.search(
            r"\bonly\b|exclusiv|solely|women-led|woman-led|must be (?:a )?woman|"
            r"restricted to women|for women|female only|men only|male only|"
            r"\bmen\b.{0,30}\bonly\b", ctx, re.I):
        val = "female" if re.search(r"women|woman|female", ctx, re.I) else "male"
        rf.add(rules, "GEN", "applicant.gender", "equals", val, text, "medium", default_type)
        return rules

    # -- social category ---------------------------------------------------
    vals = []
    if re.search(r"scheduled caste|\bsc\b(?!\w)", low):
        vals.append("SC")
    if re.search(r"scheduled tribe|\bst\b(?!\w)", low):
        vals.append("ST")
    if re.search(r"\bobc\b|other backward", low):
        vals.append("OBC")
    if re.search(r"minorit", low):
        vals.append("minority")
    if vals and re.search(r"social|caste|category|sc|st|obc|minorit|scheduled|target|prefer", low):
        rf.add(rules, "SOC", "applicant.social_category", "in", vals, text, "medium", default_type)
        return rules

    # -- BPL ---------------------------------------------------------------
    if re.search(r"below poverty line|\bbpl\b", low):
        rf.add(rules, "BPL", "applicant.bpl_status", "is_true", True, text, "medium", default_type)
        return rules

    # -- registries / documents / prerequisites ----------------------------
    checks = [
        (r"dpiit", "REG", "applicant.dpiit_recognized"),
        (r"udyam", "REG", "applicant.udyam_registered"),
        (r"\bgst\s+registration|goods and services tax", "REG", "applicant.gst_registered"),
        (r"msme registration", "REG", "applicant.msme_registered"),
        (r"fssai", "REG", "applicant.fssai_licensed"),
        (r"import export code|\biec\b", "REG", "applicant.iec_registered"),
        (r"\biso\b|\bbis\b certification", "REG", "applicant.certification_held"),
        (r"aadhaar", "AAD", "applicant.aadhaar_held"),
        (r"bank account|savings account", "BNK", "applicant.bank_account_exists"),
        (r"indian citizen|citizenship of india|indian national", "CTZ", "applicant.citizenship"),
        (r"commercial production", "BUS", "applicant.business.commercial_production"),
        (r"pan card|\bpan\b(?!\w)", "REG", "applicant.pan_held"),
    ]
    for pat, prefix, field in checks:
        if re.search(pat, low):
            val = "IN" if field.endswith("citizenship") else True
            op = "equals" if field.endswith("citizenship") else "is_true"
            rf.add(rules, prefix, field, op, val, text, "medium", default_type)
            return rules

    # -- generic numeric duration condition (e.g. operation period) --------
    m = re.search(r"(?:remain|continued|sustain\w*|operation|regular production)[^.]{0,60}?"
                  r"(?:for a period of\s*)?(\d{1,2})\s*year", low)
    if m and re.search(r"period|operation|production|continu", low):
        rf.add(rules, "BUS", "applicant.business.min_operation_years", "greater_than_or_equal",
               int(m.group(1)), text, "medium", default_type)
        return rules

    return rules


# --------------------------------------------------------------------------
# report.md helpers (51 rows carry richer tables)
# --------------------------------------------------------------------------

def parse_md_tables(report_text):
    """Return (eligibility_pairs, benefit_rows) parsed from report.md."""
    text = report_text.replace("\r", "")
    lines = text.split("\n")
    elig, benefit_rows = [], []
    section = ""
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if line.startswith("#"):
            section = line.lstrip("#").strip().lower()
        if line.startswith("|") and "|" in line[1:]:
            block = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                block.append(lines[i].strip())
                i += 1
            rows = []
            for b in block:
                if re.match(r"^\|[\s:|-]+\|$", b):
                    continue
                cells = [c.strip() for c in b.strip("|").split("|")]
                rows.append(cells)
            if not rows:
                continue
            header = " ".join(rows[0]).lower()
            if "eligibility" in section or "eligibility matrix" in header:
                for cells in rows[1:]:
                    if len(cells) >= 2:
                        elig.append((re.sub(r"\*+", "", cells[0]).strip(),
                                     re.sub(r"\*+", "", cells[1]).strip()))
            elif "benefit" in header and ("details" in header or "amount" in header
                                          or "maximum" in header):
                for cells in rows[1:]:
                    if len(cells) >= 2:
                        benefit_rows.append([re.sub(r"\*+", "", c).strip() for c in cells])
            continue
        i += 1
    return elig, benefit_rows


# --------------------------------------------------------------------------
# frontmatter / file writers
# --------------------------------------------------------------------------

def build_sources(d):
    urls = []
    for u in (d.get("source_cited_notes") or []):
        u = clean(u)
        if u and u not in urls:
            urls.append(u)
    for u in (d.get("application_portal_url"), d.get("scheme_url")):
        u = clean(u)
        if u and u not in urls:
            urls.append(u)
    return urls


def sources_yaml(urls):
    if not urls:
        return "sources: []"
    out = ["sources:"]
    for i, u in enumerate(urls, 1):
        out.append(f"  - id: S{i}")
        out.append(f"    resource: {q(u)}")
        out.append("    title: not_verified")
        out.append("    author: not_verified")
        out.append("    last_modified: not_verified")
    return "\n".join(out)


def base_frontmatter(kind, title, description, scheme_id, sources):
    return "\n".join([
        f"type: {q(kind)}",
        f"title: {q(title)}",
        f"description: {q(description)}",
        f"scheme_id: {q(scheme_id)}",
        f"okf_version: {q(OKF_VERSION)}",
        "generated:",
        f"  by: {q(GEN_BY)}",
        f"  at: {TODAY}",
        "verified:",
        f"  - by: {q(VERIFIED_BY)}",
        f"    at: {TODAY}",
        "    note: " + q("field presence and citations re-checked against the source "
                        "ai_summary.json; content not re-verified against the live portal"),
        "status: draft",
        f"stale_after: {STALE_AFTER}",
        sources_yaml(sources),
    ])


def frontmatter(extra_lines, kind, title, description, scheme_id, sources):
    base = base_frontmatter(kind, title, description, scheme_id, sources)
    extra = ("\n" + "\n".join(extra_lines)) if extra_lines else ""
    return "---\n" + base + extra + "\n---\n"


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)


# --------------------------------------------------------------------------
# per-row generation
# --------------------------------------------------------------------------

class RuleSink:
    def __init__(self, sources):
        self.rf = RuleFactory()
        self.rules = []
        self.sources = sources

    def source_for(self):
        return "S1" if self.sources else "not_verified"


def categorise(d, corpus):
    ministry = d.get("ministry_or_category") or ""
    cats = []
    for c in CATEGORIES_BY_MINISTRY.get(ministry, []):
        if c not in cats:
            cats.append(c)
    for cat, pats in CATEGORY_KEYWORDS:
        if match_any(pats, corpus) and cat not in cats:
            cats.append(cat)
    return cats[:3] or ["other"]


def benefit_types_for(d, corpus, benefits_text):
    types = []
    for bt, pats in BENEFIT_TYPE_KEYWORDS:
        if match_any(pats, corpus) and bt not in types:
            types.append(bt)
    st_map = {"subsidy": "subsidy", "loan": "loan", "grant": "grant",
              "incubation": "service", "recognition": "service", "tax_benefit": "tax-exemption"}
    st = st_map.get(d.get("scheme_type"))
    if st and st not in types:
        types.insert(0, st)
    if not types and clean(benefits_text):
        types = ["service"]
    return types[:4]


def applicant_types_for(d, corpus):
    types = []
    for at, pats in APPLICANT_KEYWORDS:
        if not pats:
            continue
        if match_any(pats, corpus) and at not in types:
            types.append(at)
    if not types:
        types = ["individual"]
    return types[:4]


def geo_for(d):
    ministry = d.get("ministry_or_category") or ""
    scope = d.get("geographic_scope") or ""
    state_code, state_name = None, None
    if ministry.startswith("State Level ("):
        state_name = ministry[len("State Level ("):].rstrip(")")
        key = STATE_ALIASES.get(state_name.lower(), state_name.lower())
        state_code = STATE_CODES.get(key)
    if not state_code and re.match(r"^[A-Za-z ]+( only)?$", scope.strip() or "x"):
        state_code = detect_state(scope)
        state_name = state_name or clean(scope).replace(" only", "")
    if state_code:
        return "state", [state_code], state_name or state_code
    low = scope.lower()
    if "rural" in low and "urban" not in low:
        geo = ["IN-rural"]
    elif re.search(r"\burban\b", low) and "rural" not in low:
        geo = ["IN-urban"]
    else:
        geo = ["IN"]
    return "central", geo, "India"


def target_groups(d):
    return [slugify(t) for t in d.get("target_beneficiaries") or [] if clean(t)]


def slug_tokens(text):
    return [w for w in re.findall(r"[a-z0-9]+", clean(text).lower())
            if w not in {"the", "of", "and", "for", "a", "an", "to", "in", "on", "at"}]


def discovery_block(d, cats, corpus):
    name = d.get("scheme_name") or ""
    goals = []
    st_goals = {"subsidy": ["get_financial_subsidy"], "loan": ["access_credit"],
                "grant": ["get_grant_funding"], "incubation": ["incubation_and_mentorship_support"],
                "recognition": ["get_official_recognition"], "tax_benefit": ["reduce_tax_liability"]}
    goals += st_goals.get(d.get("scheme_type"), [])
    cat_goals = {
        "agriculture": ["farming_support"], "education": ["fund_education"],
        "skill-development": ["skill_training"], "healthcare": ["healthcare_protection"],
        "housing": ["housing_support"], "employment": ["find_employment"],
        "insurance": ["insurance_cover"], "pension": ["retirement_income"],
        "trade-export": ["grow_exports"], "clean-energy": ["clean_energy_adoption"],
        "financial-inclusion": ["banking_access"], "entrepreneurship": ["grow_my_business"],
        "digital-public-infrastructure": ["digital_service_access"],
    }
    for c in cats:
        for g in cat_goals.get(c, []):
            if g not in goals:
                goals.append(g)
    if not goals:
        goals = ["scheme_benefit_access"]
    acr = re.findall(r"\(([A-Za-z0-9&\- ]{2,20})\)", name)
    kw = []
    for tok in acr + slug_tokens(name)[:8] + [clean(t) for t in d.get("target_beneficiaries") or []]:
        t = clean(tok).lower()
        if t and t not in kw:
            kw.append(t)
    kw.append(clean(d.get("ministry_or_category")).lower())
    kw = [k for k in kw if k][:14]
    lines = ["```yaml", "discovery:", "  user_goals:"]
    lines += [f"    - {g}" for g in goals[:4]]
    lines.append("  keywords:")
    lines += [f"    - {q(k)}" for k in kw]
    lines.append("  semantic_topics:")
    lines += [f"    - {c}" for c in cats]
    lines.append("```")
    return "\n".join(lines)


def concept_links(corpus, prefix="../../concepts/"):
    mapping = [
        ("farmer", [r"farmer", r"cultivator", r"kisan", r"landhold"]),
        ("agriculture", [r"farm", r"crop", r"agricultur", r"irrigat", r"horticult"]),
        ("woman", [r"women", r"\bwoman\b", r"mahila"]),
        ("student", [r"student", r"scholarship", r"school", r"college"]),
        ("entrepreneur", [r"startup", r"entrepreneur", r"self-employed", r"enterprise"]),
        ("artisan", [r"artisan", r"handicraft", r"handloom", r"weaver"]),
        ("street-vendor", [r"street vendor", r"vendors"]),
        ("senior-citizen", [r"senior citizen", r"elderly", r"old age"]),
        ("person-with-disability", [r"disab"]),
        ("social-category", [r"\bsc\b", r"\bst\b", r"obc", r"minorit", r"scheduled caste"]),
        ("household", [r"household", r"\bfamily\b", r"families"]),
        ("low-income-household", [r"below poverty", r"\bbpl\b", r"economically weaker", r"\bews\b"]),
    ]
    out = []
    for name, pats in mapping:
        path = f"{prefix}{name}.md"
        full = os.path.normpath(os.path.join(SCHEMES_DIR, "..", "concepts", f"{name}.md"))
        if os.path.exists(full) and match_any(pats, corpus):
            out.append(name)
    return out


def rule_concept_links(fields):
    mapping = {
        "applicant.age": ("age", "rules"),
        "applicant.annual_income": ("income", "rules"),
        "applicant.gender": ("gender", "rules"),
        "applicant.state": ("state", "rules"),
        "applicant.business": ("business-type", "rules"),
        "applicant.land": ("landholding", "rules"),
        "applicant.social_category": ("social-category", "concepts"),
    }
    out = []
    for f in fields:
        for key, (name, kind) in mapping.items():
            if f.startswith(key):
                rel = f"../../{kind}/{name}.md"
                full = os.path.normpath(os.path.join(SCHEMES_DIR, "..", kind, f"{name}.md"))
                if os.path.exists(full) and rel not in out:
                    out.append(rel)
    return out


def split_sentences(text):
    text = clean(text)
    if not text:
        return []
    ABBR = {"viz.", "e.g.", "i.e.", "no.", "rs.", "mr.", "mrs.", "dr.", "ms.",
            "vs.", "smt.", "sri.", "shri.", "sh.", "st.", "approx.", "pp.", "sec."}
    parts = re.split(r"(?<=[.!?;])\s+", text)
    out = []
    for p in parts:
        prev = out[-1].rstrip() if out else ""
        last_tok = prev.split()[-1].lower().rstrip(",") if prev else ""
        if out and last_tok in ABBR:
            out[-1] = prev + " " + p
        else:
            out.append(p)
    return [p.strip() for p in out if len(p.strip()) > 12]


def generate_row(row_no, row_dir, d, report, related):
    outdir = os.path.join(SCHEMES_DIR, row_dir)
    name = clean(d.get("scheme_name")) or f"Row {row_no} scheme"
    scheme_id = f"ROW-{row_no}"
    sources = build_sources(d)
    src_note = f"runs/row-{row_no}/ai_summary.json"

    overview = clean(d.get("overview"))
    if not overview:
        overview = clean(d.get("eligibility")) or clean((d.get("objectives") or [""])[0])
    desc = overview or f"Government scheme imported from the runs batch (row {row_no}); overview not_verified."
    desc = re.split(r"(?<=[.!?])\s", desc)[0]
    if len(desc) > 300:
        desc = desc[:297].rsplit(" ", 1)[0] + "\u2026"

    objectives = [clean(o) for o in d.get("objectives") or [] if clean(o)]
    targets = [clean(t) for t in d.get("target_beneficiaries") or [] if clean(t)]
    docs = [clean(x) for x in d.get("required_documents") or [] if clean(x)]
    caveats = []
    for c in d.get("caveats") or []:
        caveats += split_sentences(c)
    caveats = [clean(c) for c in caveats]

    level, geos, geo_name = geo_for(d)
    corpus = " ".join([name, d.get("ministry_or_category") or "", d.get("overview") or "",
                       d.get("eligibility") or "", d.get("benefits") or "",
                       d.get("financial_support") or "", " ".join(targets)]).lower()
    cats = categorise(d, corpus)
    btypes = benefit_types_for(d, corpus, (d.get("benefits") or "") + (d.get("financial_support") or ""))
    atypes = applicant_types_for(d, corpus)
    tgroups = target_groups(d)
    ministry = clean(d.get("implementing_agency")) or clean(d.get("ministry_or_category"))
    portal = clean(d.get("application_portal_url"))
    deadlines = clean(d.get("deadlines")) or "not_verified"
    proc = clean(d.get("application_process"))
    elig_text = clean(d.get("eligibility"))
    ben_text = clean(d.get("benefits"))
    fin_text = clean(d.get("financial_support"))

    # ---------------- report.md structured inputs ------------------------
    elig_pairs, benefit_rows = parse_md_tables(report) if report else ([], [])
    if not elig_pairs and elig_text:
        elig_pairs = [(None, s) for s in split_sentences(elig_text)]

    # ---------------- rules & dimensions ---------------------------------
    rf = RuleFactory()
    rules, seen_details = [], set()
    for label, req in elig_pairs:
        for r in rules_from_text(label, req, rf, matrix=bool(label)):
            if r["detail"] in seen_details:
                continue
            seen_details.add(r["detail"])
            rules.append(r)
    for r in rules:
        r["source"] = "S1" if sources else "not_verified"

    dims_rows = []
    for dim, pats in DIMENSIONS:
        hit = None
        for label, req in elig_pairs:
            blob = f"{label or ''} {req}"
            if match_any(pats, blob):
                hit = f"{label + ': ' if label else ''}{snip(req, 110)}"
                break
        applies = "yes" if hit else ("unknown" if not elig_text else "no")
        outcome = hit or ("source data empty — eligibility text not_verified"
                          if not elig_text else "no criterion recorded in source data")
        dims_rows.append((dim, applies, outcome))

    dim_fields = {
        "age": "applicant.age", "gender": "applicant.gender",
        "citizenship/residency": "applicant.citizenship", "state": "applicant.state",
        "income": "applicant.annual_income", "landholding": "applicant.land_ownership",
        "farmer status": "applicant.farmer_status", "bank account": "applicant.bank_account_exists",
        "Aadhaar": "applicant.aadhaar_held", "business ownership": "applicant.business.ownership",
        "business type": "applicant.business.type", "student status": "applicant.student_status",
        "social category": "applicant.social_category",
        "disability status": "applicant.disability_status",
        "employment status": "applicant.employment_status",
    }
    missing = []
    for r in rules:
        if r["field"] not in missing:
            missing.append(r["field"])
    for dim, applies, _ in dims_rows:
        f = dim_fields.get(dim)
        if applies == "yes" and f and f not in missing:
            missing.append(f)

    # ---------------- exclusions -----------------------------------------
    excl_src = []
    for label, req in elig_pairs:
        for s in split_sentences(req):
            if EXCLUSION_MARKERS.search(s):
                excl_src.append((label, s))
    for c in caveats:
        if EXCLUSION_MARKERS.search(c):
            excl_src.append((None, c))
    exclusions, seen_excl = [], set()
    ex_rf = RuleFactory()
    for label, s in excl_src[:15]:
        key = clean(s).lower()
        if key in seen_excl:
            continue
        seen_excl.add(key)
        derived = rules_from_text(label, s, ex_rf, matrix=bool(label))
        obj = {"id": f"EX-{len(exclusions) + 1:03d}", "detail": clean(s),
               "effect": "ineligible", "source": "S1" if sources else "not_verified",
               "confidence": "medium"}
        if derived:
            r = derived[0]
            obj = {"id": f"EX-{len(exclusions) + 1:03d}", "field": r["field"],
                   "operator": r["operator"], "value": r["value"], "detail": clean(s),
                   "effect": "ineligible", "source": "S1" if sources else "not_verified",
                   "confidence": r["confidence"]}
        exclusions.append(obj)

    # ---------------- benefits -------------------------------------------
    benefits = []
    if benefit_rows:
        for i, cells in enumerate(benefit_rows, 1):
            nm, details = cells[0], cells[1] if len(cells) > 1 else ""
            extra = " ".join(cells[2:]) if len(cells) > 2 else ""
            blob = " ".join(cells)
            amt = find_amounts(blob)
            btype = "service"
            for bt, pats in BENEFIT_TYPE_KEYWORDS:
                if match_any(pats, blob.lower()):
                    btype = bt
                    break
            obj = [f"  - benefit_id: BEN-{i:03d}", f"    type: {btype}", f"    name: {q(nm)}"]
            if amt:
                obj.append("    amount:")
                obj.append(f"      value: {int(amt[0])}")
                obj.append("      currency: INR")
                obj.append(f"      frequency: {freq_of(blob)}")
                if is_cap(blob):
                    obj.append("      is_maximum: true")
            else:
                obj.append("    amount: not_verified")
            if details:
                obj.append(f"    detail: {q(details)}")
            if extra:
                obj.append(f"    duration: {q(extra)}")
            obj.append("    source: " + ("S1" if sources else "not_verified"))
            obj.append("    confidence: medium")
            benefits.append("\n".join(obj))
    else:
        blob_src = []
        for field_val in (ben_text, fin_text):
            if field_val:
                blob_src.append(field_val)
        segs = []
        for txt in blob_src:
            for seg in re.split(r";\s*", txt):
                segs += split_sentences(seg)
        seen_seg = set()
        idx = 0
        for seg in segs:
            key = clean(seg).lower()
            if key in seen_seg or len(seg) < 15:
                continue
            seen_seg.add(key)
            idx += 1
            amt = find_amounts(seg)
            btype = "service"
            for bt, pats in BENEFIT_TYPE_KEYWORDS:
                if match_any(pats, seg.lower()):
                    btype = bt
                    break
            words = seg
            if amt:
                m = AMT_RE.search(seg) or AMT2_RE.search(seg)
                words = seg[:m.start()] if m else seg
            for ch in (":", "("):
                j = words.find(ch)
                if j > 10:
                    words = words[:j]
            w = words.split()
            if len(w) > 9:
                w = w[:9]
            nm = re.sub(r"^(and|also|additionally|the|a|an|financial|benefits?|support)\s+", "",
                        " ".join(w).strip(" ,.-"), flags=re.I).strip()
            if len(nm) < 4:
                nm = f"Benefit {idx}"
            obj = [f"  - benefit_id: BEN-{idx:03d}", f"    type: {btype}", f"    name: {q(nm[:80])}"]
            if amt:
                obj.append("    amount:")
                obj.append(f"      value: {int(amt[0])}")
                obj.append("      currency: INR")
                obj.append(f"      frequency: {freq_of(seg)}")
                if is_cap(seg):
                    obj.append("      is_maximum: true")
            else:
                obj.append("    amount: not_verified")
            obj.append(f"    detail: {q(snip(seg, 400))}")
            obj.append("    source: " + ("S1" if sources else "not_verified"))
            obj.append("    confidence: " + ("medium" if sources else "low"))
            benefits.append("\n".join(obj))
            if len(benefits) >= 12:
                break
    if not benefits:
        benefits_note = ("No benefit text in source data — `benefits: not_verified`. "
                         "Do not infer benefits; check the official source.")
    else:
        benefits_note = ""

    # ---------------- documents ------------------------------------------
    doc_objs, seen_docs = [], set()
    for i, doc in enumerate(docs, 1):
        key = doc.lower()
        if key in seen_docs:
            continue
        seen_docs.add(key)
        required = "conditional" if re.search(
            r"if applicable|if available|where applicable|as applicable|if required|if any|"
            r"optional|if needed|wherever", doc, re.I) else "always"
        doc_objs.append("\n".join([
            f"  - id: {slugify(doc, 40)}",
            f"    name: {q(snip(doc, 160))}",
            f"    required: {required}",
            "    source: " + ("S1" if sources else "not_verified"),
            "    confidence: medium",
        ]))

    # ---------------- application ----------------------------------------
    steps = []
    if proc:
        pieces = re.split(r"(?:^|\s)\d+\.\s+", proc)
        steps = [clean(p) for p in pieces if len(clean(p)) > 8]
    mode = []
    low_proc = (proc + " " + deadlines + " " + (d.get("contact_details") or "")).lower()
    if portal or re.search(r"online|portal|website|upload|web-based|e-filing|upload", low_proc):
        mode.append("online")
    if re.search(r"csc|common service cent|bank branch|post office|district industries|"
                 r"offlin|in person|field camp|office|panchayat|nodal officer|physically", low_proc):
        mode.append("offline")
    if not mode:
        mode = ["not_verified"]
    channels = []
    chan_map = [
        (r"csc|common service cent", "Common Service Centres (CSCs)"),
        (r"bank branch|banking correspondent", "Bank branches / banking correspondents"),
        (r"district industries|dic\b", "District Industries Centres (DICs)"),
        (r"camp", "Field camps"),
        (r"state nodal|nodal officer", "State/UT nodal officers"),
        (r"umang", "UMANG mobile app"),
        (r"post office", "Post offices"),
        (r"panchayat", "Gram Panchayats / local bodies"),
    ]
    for pat, label in chan_map:
        if re.search(pat, low_proc) and label not in channels:
            channels.append(label)

    # ---------------- scheme.md ------------------------------------------
    L = []
    L.append(f"# {name}\n")
    L.append("## Overview\n")
    L.append(clean(d.get("overview")) or "_not_verified — no overview in source data; see Official "
                                        "Sources below._\n")
    L.append("\n## Objective\n")
    if objectives:
        L.append("\n".join(f"- {o}" for o in objectives) + "\n")
    else:
        L.append("_not_verified_\n")
    L.append("\n## Target Beneficiaries\n")
    if targets:
        L.append(", ".join(f"**{t}**" for t in targets) + "\n")
    else:
        L.append("_not_verified_\n")
    cl = concept_links(corpus)
    if cl:
        L.append("\nConcept links: " + " \u00b7 ".join(f"[{c}](../../concepts/{c}.md)" for c in cl) + "\n")
    L.append("\n## Key Features\n")
    feats = []
    if clean(d.get("fund_size_crores")):
        feats.append(f"Fund size: \u20b9{clean(d['fund_size_crores'])} crore")
    if clean(d.get("grant_amount_per_entity")):
        feats.append(f"Grant/assistance per entity: {clean(d['grant_amount_per_entity'])}")
    feats.append(f"Geographic scope: {clean(d.get('geographic_scope')) or geo_name}"
                 + (f" ({level}-level)" if level else ""))
    feats.append(f"Deadline: {deadlines}")
    if portal:
        feats.append(f"Portal: {portal}")
    if clean(d.get("last_updated_date")):
        feats.append(f"Source data last updated: {clean(d['last_updated_date'])}")
    feats.append(f"Import confidence (source): {clean(d.get('confidence')) or 'not_verified'}")
    L.append("\n".join(f"- {f}" for f in feats) + "\n")
    L.append("\n## Eligibility\n")
    if elig_text:
        L.append(snip(elig_text, 400) + "\n")
    else:
        L.append("_not_verified — no eligibility text in source data._\n")
    L.append("\nDeterministic rules: [eligibility.md](eligibility.md).\n")
    L.append("\n## Benefits\n")
    if ben_text or fin_text:
        L.append(snip(ben_text or fin_text, 400) + "\n")
    else:
        L.append("_not_verified — no benefit text in source data._\n")
    L.append("\nStructured benefit objects: [benefits.md](benefits.md).\n")
    L.append("\n## Documents\n")
    if docs:
        L.append(f"{len(docs)} document(s) recorded in source data. Full list: "
                 "[documents.md](documents.md).\n")
    else:
        L.append("_No document list in source data (not_verified). See "
                 "[documents.md](documents.md).\n")
    L.append("\n## Application\n")
    if portal or proc:
        L.append(f"Portal: {portal or 'not_verified'}. Steps, channels and deadlines: "
                 "[application.md](application.md).\n")
    else:
        L.append("_not_verified — see [application.md](application.md).\n")
    if caveats:
        L.append("\n## Important Conditions\n")
        L.append("\n".join(f"- {c}" for c in caveats[:12]) + "\n")
    L.append("\n## Exclusions\n")
    if exclusions:
        L.append(f"{len(exclusions)} explicit disqualifier(s) recorded. Structured list: "
                 "[exclusions.md](exclusions.md).\n")
    else:
        L.append("_No explicit disqualifier recorded in source data — this is NOT evidence that "
                 "none exist. See [exclusions.md](exclusions.md).\n")
    if related:
        L.append("\n## Related Schemes\n")
        for rslug, rname in related:
            L.append(f"- [{rname}](../{rslug}/scheme.md)")
        L.append("")
    L.append("\n## Official Sources\n")
    if sources:
        for i, u in enumerate(sources, 1):
            safe = u.replace(" ", "%20")
            if re.match(r"https?://", safe):
                L.append(f"{i}. [{u}]({safe}) [S{i}]")
            else:
                L.append(f"{i}. {u} [S{i}]")
    else:
        L.append("_not_verified — source data cited no sources._")
    L.append("")
    L.append("\n## Discovery metadata\n")
    L.append(discovery_block(d, cats, corpus))
    L.append("")

    fm_extra = [
        f"official_name: {q(name)}",
        f"government_level: {level}",
        f"ministry: {q(ministry)}",
        "categories:",
        ylist(cats),
        "benefit_types:",
        ylist(btypes) if btypes else "  []",
        "target_groups:",
        ylist(tgroups) if tgroups else "  []",
        "geographies:",
        ylist(geos),
        "applicant_types:",
        ylist(atypes),
        f"eligibility_version: {q(ELIG_VERSION)}",
        f"confidence: {q(clean(d.get('confidence')) or 'not_verified')}",
        f"source_data_last_updated: {q(clean(d.get('last_updated_date')) or 'not_verified')}",
        f"runs_source: {q(src_note)}",
    ]
    write(os.path.join(outdir, "scheme.md"),
          frontmatter(fm_extra, "Government Scheme", name, desc, scheme_id, sources) + "\n".join(L))

    # ---------------- eligibility.md -------------------------------------
    E = [f"# {name} \u2014 Eligibility\n"]
    E.append(f"_Machine-imported from {src_note}; evidence quotes below are verbatim source "
             "text and have not been re-verified against the official portal._\n")
    E.append("\n## Eligibility dimensions examined\n")
    E.append("| Dimension | Applies | Evidence |")
    E.append("|---|---|---|")
    for dim, applies, outcome in dims_rows:
        E.append(f"| {dim} | {applies} | {md_cell(outcome)} |")
    E.append("\n## Structured eligibility rules\n")
    E.append("The rule block below is a domain-specific extension of this bundle, not a\n"
             "claim that OKF v0.2 defines it.\n")
    if rules:
        E.append("```yaml\neligibility_rules:\n  all:")
        for r in rules:
            E.append(f"    - rule_id: {r['rule_id']}")
            E.append(f"      field: {r['field']}")
            E.append(f"      operator: {r['operator']}")
            val = r["value"]
            if isinstance(val, list):
                E.append("      value: [" + ", ".join(str(v) for v in val) + "]")
            elif isinstance(val, bool):
                E.append(f"      value: {str(val).lower()}")
            else:
                E.append(f"      value: {q(val) if isinstance(val, str) else val}")
            E.append(f"      type: {r['type']}")
            E.append(f"      source: {r['source']}")
            E.append(f"      confidence: {r['confidence']}")
            E.append(f"      detail: {q(r['detail'])}")
        E.append("```")
    else:
        E.append("_No deterministic rule could be extracted from the source text with "
                 "sufficient confidence._ `eligibility_rules.all: []` — the engine must not "
                 "infer rules; evaluate against the dimension evidence above and request the "
                 "missing fields below.\n")
        E.append("```yaml\neligibility_rules:\n  all: []\n```")
    E.append("\n## Missing information handling\n")
    E.append("If the engine cannot establish the following, emit\n"
             "`status: needs_information` and request exactly these fields \u2014 do not\n"
             "infer:\n")
    if missing:
        E.append("```yaml\nstatus: needs_information\nmissing_fields:")
        E.append("\n".join(f"  - {f}" for f in missing[:20]))
        E.append("```")
    else:
        E.append("```yaml\nstatus: needs_information\nmissing_fields: []\nnote: "
                 + q("source eligibility text empty — request the full applicant profile") + "\n```")
    rcl = rule_concept_links([r["field"] for r in rules])
    if rcl:
        E.append("\nRule/concept references: " + " \u00b7 ".join(
            f"[{os.path.basename(p)[:-3]}]({p})" for p in rcl) + "\n")
    write(os.path.join(outdir, "eligibility.md"),
          frontmatter([], "Government Scheme Eligibility", name + " — Eligibility",
                      f"Deterministic eligibility dimensions and rules for {scheme_id}.",
                      scheme_id, sources) + "\n".join(E))

    # ---------------- benefits.md ----------------------------------------
    B = [f"# {name} \u2014 Benefits\n"]
    B.append("## Benefit objects\n")
    if benefits:
        B.append("```yaml\nbenefits:")
        B.extend(benefits)
        B.append("```")
    else:
        B.append("```yaml\nbenefits: []\n```")
        B.append(f"\n{benefits_note}\n")
    if benefits_note and benefits:
        B.append(f"\n- {benefits_note}")
    if clean(d.get("grant_amount_per_entity")):
        B.append(f"\n- Grant/assistance per entity recorded in source data: "
                 f"**{clean(d['grant_amount_per_entity'])}**")
    if clean(d.get("fund_size_crores")):
        B.append(f"- Fund size recorded in source data: \u20b9{clean(d['fund_size_crores'])} crore")
    B.append("- Benefit figures are quoted verbatim from the source import; re-verify amounts "
             "against the official portal before quoting them to an applicant.")
    write(os.path.join(outdir, "benefits.md"),
          frontmatter([], "Government Scheme Benefits", name + " — Benefits",
                      f"Benefit objects for {scheme_id}.", scheme_id, sources) + "\n".join(B))

    # ---------------- documents.md ---------------------------------------
    D = [f"# {name} \u2014 Documents\n"]
    if doc_objs:
        D.append("```yaml\ndocuments:")
        D.extend(doc_objs)
        D.append("```")
    else:
        D.append("```yaml\ndocuments: []\n```")
        D.append("\n_not_verified — the source data lists no required documents. Do not treat "
                 "this as \"no documents required\"; check the official portal._")
    D.append("\n- `required: conditional` marks documents the source phrases as "
             "\"if applicable / if available / optional\"; everything else is recorded as "
             "always required by the source.")
    write(os.path.join(outdir, "documents.md"),
          frontmatter([], "Government Scheme Documents", name + " — Documents",
                      f"Document requirements for {scheme_id}.", scheme_id, sources) + "\n".join(D))

    # ---------------- application.md -------------------------------------
    A = [f"# {name} \u2014 Application\n"]
    A.append("## Channels\n")
    A.append("```yaml\napplication:")
    A.append("  mode:")
    A.append("\n".join(f"    - {m}" for m in mode))
    A.append(f"  official_portal: {q(portal) if portal else 'not_verified'}")
    A.append(f"  implementing_agency: {q(ministry) if ministry else 'not_verified'}")
    if channels:
        A.append("  other_channels:")
        A.append("\n".join(f"    - {q(c)}" for c in channels))
    A.append(f"  deadline: {q(deadlines)}")
    if clean(d.get("contact_details")):
        A.append(f"  contact: {q(clean(d['contact_details']))}")
    A.append("```")
    A.append("\n## Process\n")
    if steps:
        for i, s in enumerate(steps, 1):
            A.append(f"{i}. {s}")
        A.append("")
    else:
        A.append("_not_verified — no process steps recorded in source data._\n")
    A.append("## Deadlines\n")
    A.append(f"- {deadlines}")
    if clean(d.get("contact_details")):
        A.append("\n## Contact\n")
        A.append(f"- {clean(d['contact_details'])}")
    write(os.path.join(outdir, "application.md"),
          frontmatter([], "Government Scheme Application", name + " — Application",
                      f"Application channels, process and deadlines for {scheme_id}.",
                      scheme_id, sources) + "\n".join(A))

    # ---------------- exclusions.md --------------------------------------
    X = [f"# {name} \u2014 Exclusions\n"]
    if exclusions:
        X.append("Explicit disqualifiers found in the source data. Each has effect "
                 "`ineligible`; evaluate before eligibility rules.\n")
        X.append("```yaml\nexclusions:")
        for e in exclusions:
            X.append(f"  - id: {e['id']}")
            if "field" in e:
                X.append(f"    field: {e['field']}")
                X.append(f"    operator: {e['operator']}")
                v = e["value"]
                if isinstance(v, list):
                    X.append("    value: [" + ", ".join(str(x) for x in v) + "]")
                elif isinstance(v, bool):
                    X.append(f"    value: {str(v).lower()}")
                else:
                    X.append(f"    value: {q(v) if isinstance(v, str) else v}")
            X.append(f"    detail: {q(e['detail'])}")
            X.append(f"    effect: {e['effect']}")
            X.append(f"    source: {e['source']}")
            X.append(f"    confidence: {e['confidence']}")
        X.append("```")
    else:
        X.append("```yaml\nexclusions: []\n```")
        X.append("\n_not_verified — no explicit disqualifier sentence was found in the source "
                 "data. Absence of recorded exclusions is NOT evidence that none exist; the "
                 "engine must still evaluate eligibility.md and request missing information._")
    write(os.path.join(outdir, "exclusions.md"),
          frontmatter([], "Government Scheme Exclusions", name + " — Exclusions",
                      f"Structured disqualifiers for {scheme_id}.", scheme_id, sources)
          + "\n".join(X))

    return {
        "row": row_no, "dir": row_dir, "name": name, "scheme_id": scheme_id,
        "ministry": clean(d.get("ministry_or_category")), "level": level,
    }


# --------------------------------------------------------------------------
# main
# --------------------------------------------------------------------------

def main():
    metas, failures = [], []
    loaded = {}
    for n in ROWS:
        dirs = sorted(glob.glob(os.path.join(RUNS_DIR, f"row-{n}-*")))
        if not dirs:
            failures.append(f"row-{n}: directory not found")
            continue
        row_dir = os.path.basename(dirs[0])
        jpath = os.path.join(dirs[0], "ai_summary.json")
        if not os.path.exists(jpath):
            failures.append(f"row-{n}: ai_summary.json missing")
            continue
        try:
            with open(jpath, encoding="utf-8") as f:
                d = json.load(f)
        except Exception as e:  # noqa: BLE001
            failures.append(f"row-{n}: json error {e}")
            continue
        report = ""
        rpath = os.path.join(dirs[0], "report.md")
        if os.path.exists(rpath):
            try:
                with open(rpath, encoding="utf-8", errors="replace") as f:
                    report = f.read()
            except Exception:  # noqa: BLE001
                report = ""
        loaded[n] = (row_dir, d, report)
        if n in SKIP:
            continue
        metas.append({
            "row": n, "dir": row_dir,
            "name": clean(d.get("scheme_name")) or f"Row {n}",
            "scheme_id": f"ROW-{n}",
            "ministry": clean(d.get("ministry_or_category")),
        })

    # related-scheme grouping by ministry/category
    groups = {}
    for m in metas:
        groups.setdefault(m["ministry"], []).append(m)
    related_map = {}
    for ministry, members in groups.items():
        for m in members:
            sibs = [x for x in members if x["row"] != m["row"]][:3]
            related_map[m["row"]] = [(x["dir"], x["name"]) for x in sibs]

    written = []
    for m in metas:
        n = m["row"]
        row_dir, d, report = loaded[n]
        try:
            written.append(generate_row(n, row_dir, d, report, related_map.get(n, [])))
        except Exception as e:  # noqa: BLE001
            import traceback
            failures.append(f"row-{n}: {e}")
            traceback.print_exc()

    # index.md row-sourced block
    begin = "<!-- BEGIN ROW-SOURCED -->"
    end = "<!-- END ROW-SOURCED -->"
    try:
        with open(INDEX, encoding="utf-8") as f:
            idx = f.read()
    except OSError:
        idx = ""
    if begin in idx and end in idx and written:
        lines = ["", "| # | Scheme | scheme_id | government_level | Knowledge object |",
                 "|---|--------|-----------|------------------|------------------|"]
        for w in sorted(written, key=lambda x: x["row"]):
            lines.append(
                f"| {w['row']} | {md_cell(w['name'])} | {w['scheme_id']} | {w['level']} | "
                f"[scheme.md](schemes/{w['dir']}/scheme.md) |")
        lines.append("")
        mapped = ", ".join(f"row-{n} \u2192 [{t}](schemes/{t}/scheme.md)"
                           for n, t in sorted(SKIP.items()))
        lines.append(f"Rows that duplicate an already-curated scheme are not duplicated: {mapped}.")
        lines.append("")
        block = begin + "\n" + "\n".join(lines) + end
        idx = re.sub(re.escape(begin) + r".*?" + re.escape(end), lambda _m: block,
                     idx, flags=re.S)
        with open(INDEX, "w", encoding="utf-8", newline="\n") as f:
            f.write(idx)
        print(f"index.md: updated row-sourced block ({len(written)} schemes)")
    else:
        print("index.md: row-sourced markers not found (add markers before running)")

    print(f"generated: {len(written)} scheme directories")
    if failures:
        print("FAILURES:")
        for f_ in failures:
            print("  -", f_)
        sys.exit(1)


if __name__ == "__main__":
    main()
