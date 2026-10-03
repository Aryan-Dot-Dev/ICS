/**
 * Requirement extraction — turns natural language into a structured
 * SchemeUserProfile.
 *
 * The LLM's ONLY responsibility is natural language -> structured
 * requirements. It never decides eligibility. When no LLM credentials are
 * configured, a deterministic heuristic extractor handles common phrasings
 * so the product degrades gracefully instead of failing.
 */

import type { SchemeUserProfile } from "./schemeTypes";
import { runtimeEnv } from "./runtimeEnv";

export interface RequirementExtractor {
  extract(input: string, seed?: Partial<SchemeUserProfile>): Promise<SchemeUserProfile>;
}

export interface ExtractionResult {
  profile: SchemeUserProfile;
  source: "llm" | "heuristic";
}

// ---------------------------------------------------------------------------
// LLM provider abstraction (server-side only; credentials never reach client)
// ---------------------------------------------------------------------------

export interface LlmConfig {
  apiKey: string;
  model: string;
  baseUrl?: string;
}

export function getLlmConfig(): LlmConfig | null {
  const env = runtimeEnv();
  const openai = env.OPENAI_API_KEY;
  const anthropic = env.ANTHROPIC_API_KEY;
  const groq = env.GROQ_API_KEY;
  const apiKey = openai || anthropic || groq;
  if (!apiKey) return null;

  let model = env.SCHEME_LLM_MODEL;
  let baseUrl = env.SCHEME_LLM_BASE_URL;

  if (anthropic && !openai) {
    model ??= "claude-sonnet-4-5";
  } else if (groq && !openai) {
    // Groq speaks the OpenAI chat-completions dialect (JSON mode included),
    // so the same extractor code runs against it with just a base-URL swap.
    baseUrl ??= "https://api.groq.com/openai";
    model ??= "openai/gpt-oss-120b";
  } else {
    model ??= "gpt-4o-mini";
  }
  return { apiKey, model, baseUrl };
}

const EXTRACTION_SYSTEM_PROMPT = `You extract structured data for a government-scheme recommendation service in India.

From the user's message, output ONLY a JSON object with these optional fields (omit anything not stated or clearly implied by explicit facts; never invent facts):
{
  "age": number,
  "gender": "female" | "male" | "other",
  "state": string,
  "district": string,
  "annualIncome": number (INR per year, convert lakh/crore phrasing),
  "occupation": string (snake_case, e.g. farmer, artisan, street_vendor, tailor, student),
  "employmentStatus": string,
  "farmerStatus": boolean,
  "studentStatus": boolean,
  "educationLevel": string (snake_case, e.g. class_8, class_10, undergraduate),
  "socialCategory": "general" | "obc" | "sc" | "st",
  "disabilityStatus": boolean,
  "ruralUrban": "rural" | "urban",
  "businessStatus": string (e.g. "new business", "existing business"),
  "businessType": string,
  "goals": string[] (snake_case intents, e.g. start_business, obtain_credit, buy_equipment),
  "needs": string[] (snake_case support types, e.g. loan, subsidy, insurance, pension, scholarship, housing, health_cover)
}`;

// ---------------------------------------------------------------------------
// Heuristic extractor (no network, fully deterministic)
// ---------------------------------------------------------------------------

const STATE_NAMES = [
  "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh",
  "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand", "karnataka",
  "kerala", "madhya pradesh", "maharashtra", "manipur", "meghalaya",
  "mizoram", "nagaland", "odisha", "punjab", "rajasthan", "sikkim",
  "tamil nadu", "telangana", "tripura", "uttar pradesh", "uttarakhand",
  "west bengal", "delhi", "jammu and kashmir", "ladakh", "puducherry",
  "chandigarh", "andaman and nicobar", "lakshadweep", "dadra and nagar haveli",
];

function parseIncome(text: string): number | undefined {
  const lakh = /(\d+(?:\.\d+)?)\s*(?:lakh|lac|l)/i.exec(text);
  if (lakh && lakh[1] !== undefined) return Math.round(parseFloat(lakh[1]) * 100000);
  const crore = /(\d+(?:\.\d+)?)\s*crore/i.exec(text);
  if (crore && crore[1] !== undefined) return Math.round(parseFloat(crore[1]) * 10000000);
  const k = /(\d+(?:\.\d+)?)\s*k\b/i.exec(text);
  if (k && k[1] !== undefined) return Math.round(parseFloat(k[1]) * 1000);
  const plain = /(?:income|earn(?:ing)?s?|salary|pension)\D{0,20}(\d{4,9})/i.exec(text);
  if (plain && plain[1] !== undefined) return parseInt(plain[1], 10);
  return undefined;
}

function parseAge(text: string): number | undefined {
  const m1 = /(\d{1,3})\s*[-\s]?\s*(?:years?|yrs?|y\/o|year old|years old)/i.exec(text);
  if (m1 && m1[1] !== undefined) {
    const n = parseInt(m1[1], 10);
    if (n >= 1 && n <= 120) return n;
  }
  const m2 = /(?:i am|i'm|age(?:d)?\s*)\s*(\d{1,3})\b/i.exec(text);
  if (m2 && m2[1] !== undefined) {
    const n = parseInt(m2[1], 10);
    if (n >= 1 && n <= 120) return n;
  }
  return undefined;
}

function parseGender(text: string): string | undefined {
  if (/\b(woman|women|female|girl|lady|mahila|mother|pregnant|widow|housewife)\b/i.test(text)) return "female";
  if (/\b(man|men|male|boy|father|husband)\b/i.test(text)) return "male";
  return undefined;
}

function parseState(text: string): string | undefined {
  const lower = text.toLowerCase();
  for (const state of STATE_NAMES) {
    if (lower.includes(state)) {
      return state.replace(/\b\w/g, (c) => c.toUpperCase());
    }
  }
  return undefined;
}

function parseSocialCategory(text: string): string | undefined {
  const lower = text.toLowerCase();
  if (/\b(sc|scheduled caste)\b/i.test(lower)) return "sc";
  if (/\b(st|scheduled tribe)\b/i.test(lower)) return "st";
  if (/\bobc\b/i.test(lower)) return "obc";
  if (/\bgeneral categorn?\b|\bgeneral\b/i.test(lower)) return "general";
  return undefined;
}

function parseRuralUrban(text: string): "rural" | "urban" | undefined {
  if (/\brural\b|\bvillage\b|\bgramin\b/i.test(text)) return "rural";
  if (/\burban\b|\bcity\b|\btown\b|\bmunicipal\b/i.test(text)) return "urban";
  return undefined;
}

function parseStudentStatus(text: string): boolean | undefined {
  if (/\b(student|studying|college|school|class \d+|pursuing)\b/i.test(text)) return true;
  return undefined;
}

function parseFarmerStatus(text: string): boolean | undefined {
  if (/\b(farmer|farming|cultivat(e|ing|ion)|kisan|agricultur)/i.test(text)) return true;
  return undefined;
}

function parseOccupation(text: string): string | undefined {
  const lower = text.toLowerCase();
  const table: [RegExp, string][] = [
    [/\bstreet vendor|hawker|rehr?i wallah\b/, "street_vendor"],
    [/\btailor|tailoring|sewing|stitching|darzi\b/, "tailor"],
    [/\bcarpenter|barber|potter|blacksmith|goldsmith|cobbler|weaver|artisan|crafts?\b/, "artisan"],
    [/\bfarmer|kisan\b/, "farmer"],
    [/\bstudent\b/, "student"],
    [/\bshop(keeper)?|store|retail(er)?\b/, "shopkeeper"],
    [/\bdriver\b/, "driver"],
    [/\bhousewife|homemaker\b/, "homemaker"],
    [/\bwage worker|labour|labor|mazdoor\b/, "wage_worker"],
  ];
  for (const [re, value] of table) {
    if (re.test(lower)) return value;
  }
  return undefined;
}

function parseBusinessStatus(text: string): string | undefined {
  if (/\b(start|starting|want to open|plan to open|new business|new shop|set up|setting up|launch)\b/i.test(text)) {
    return "new";
  }
  if (/\b(existing|running|already have|my shop|my business|expand(ing)?|grow(ing)?)\b/i.test(text)) {
    return "existing";
  }
  return undefined;
}

function parseBusinessType(text: string): string | undefined {
  const lower = text.toLowerCase();
  const table: [RegExp, string][] = [
    [/\bdairy\b/, "dairy"],
    [/\bpoultry\b/, "poultry"],
    [/\bfish(er(y|ing)|ies)?\b/, "fisheries"],
    [/\btailor|tailoring|boutique|garment|cloth(ing)? (shop|business)\b/, "tailoring"],
    [/\bfood (stall|truck|business)|restaurant|dhaba|catering|tiffin\b/, "food_service"],
    [/\bsalon|beauty parlour|beauty parlor\b/, "beauty_salon"],
    [/\bgrocery|kirana|general store\b/, "grocery_store"],
    [/\brepair(ing)? (shop|service)?|mobile repair|electronics repair\b/, "repair_services"],
    [/\btransport|truck|taxi|goods carrier\b/, "transport"],
    [/\bmanufactur|factory|production unit\b/, "manufacturing"],
    [/\bfarming|agriculture|crop\b/, "agriculture"],
  ];
  for (const [re, value] of table) {
    if (re.test(lower)) return value;
  }
  return undefined;
}

function parseGoals(text: string): string[] {
  const goals: string[] = [];
  const lower = text.toLowerCase();
  if (/\b(start|open|set up|launch|establish)\b.*\b(business|shop|enterprise|unit|work)\b/i.test(lower)) goals.push("start_business");
  if (/\bexpand|grow|scale\b/i.test(lower)) goals.push("expand_business");
  if (/\bloan|credit|borrow|financ(e|ing)|mudra\b/i.test(lower)) goals.push("obtain_credit");
  if (/\bsubsidy\b/i.test(lower)) goals.push("obtain_subsidised_business_credit");
  if (/\b(insure|insurance|crop insurance)\b/i.test(lower)) goals.push("insure_crops_against_loss");
  if (/\bhouse|home|flat\b/i.test(lower) && /\bbuild|buy|construct|purchase\b/i.test(lower)) goals.push("buy_first_house");
  if (/\bpension|retirement|old age\b/i.test(lower)) goals.push("secure_old_age_income");
  if (/\bscholarship|college fees|school fees|education cost/i.test(lower)) goals.push("fund_higher_education");
  if (/\btool(s|kit)?|equipment|machinery|machine\b/i.test(lower)) goals.push("buy_equipment");
  if (/\bsave\b.*\b(daughter|girl)\b/i.test(lower)) goals.push("save_for_daughter_education");
  if (/\bgas connection|lpg\b/i.test(lower)) goals.push("get_free_gas_connection");
  if (/\bhospital|treatment|medical\b/i.test(lower)) goals.push("get_free_hospital_treatment");
  return goals;
}

function parseNeeds(text: string): string[] {
  const needs: string[] = [];
  const lower = text.toLowerCase();
  if (/\bloan|credit|borrow|financ(e|ing)\b/i.test(lower)) needs.push("loan");
  if (/\bsubsidy|grant\b/i.test(lower)) needs.push("subsidy");
  if (/\binsurance|insure|cover\b/i.test(lower)) needs.push("insurance");
  if (/\bpension\b/i.test(lower)) needs.push("pension");
  if (/\bscholarship\b/i.test(lower)) needs.push("scholarship");
  if (/\bhouse|housing|home\b/i.test(lower)) needs.push("housing");
  if (/\bhealth|medical|hospital|treatment\b/i.test(lower)) needs.push("health_cover");
  if (/\btoolkit|tools|equipment|machinery\b/i.test(lower)) needs.push("equipment");
  if (/\btraining|skill(ing)?\b/i.test(lower)) needs.push("skill_training");
  return needs;
}

/** Deterministic heuristic extraction — works offline with zero credentials. */
export function heuristicExtract(
  input: string,
  seed?: Partial<SchemeUserProfile>,
): SchemeUserProfile {
  // Start from the seed (previously-collected profile) so a fallback
  // extraction never forgets facts the user already gave. Fields parsed
  // from the current message override seed values below — same semantics
  // as the LLM path (`...seed, ...parsed`).
  const profile: SchemeUserProfile = {
    ...seed,
    goals: [...(seed?.goals ?? [])],
    needs: [...(seed?.needs ?? [])],
  };

  const age = parseAge(input);
  if (age != null) profile.age = age;
  const gender = parseGender(input);
  if (gender != null) profile.gender = gender;
  const state = parseState(input);
  if (state != null) profile.state = state;
  const income = parseIncome(input);
  if (income != null) profile.annualIncome = income;
  const occupation = parseOccupation(input);
  if (occupation != null) profile.occupation = occupation;
  const category = parseSocialCategory(input);
  if (category != null) profile.socialCategory = category;
  const ruralUrban = parseRuralUrban(input);
  if (ruralUrban != null) profile.ruralUrban = ruralUrban;
  const student = parseStudentStatus(input);
  if (student != null) profile.studentStatus = student;
  const farmer = parseFarmerStatus(input);
  if (farmer != null) profile.farmerStatus = farmer;
  const businessStatus = parseBusinessStatus(input);
  if (businessStatus != null) profile.businessStatus = businessStatus;
  const businessType = parseBusinessType(input);
  if (businessType != null) profile.businessType = businessType;

  const goals = parseGoals(input);
  for (const g of goals) if (!profile.goals.includes(g)) profile.goals.push(g);
  const needs = parseNeeds(input);
  for (const n of needs) if (!profile.needs.includes(n)) profile.needs.push(n);

  return profile;
}

// ---------------------------------------------------------------------------
// LLM-backed extraction with heuristic fallback
// ---------------------------------------------------------------------------

export async function extractRequirements(
  input: string,
  seed?: Partial<SchemeUserProfile>,
): Promise<ExtractionResult> {
  const llm = getLlmConfig();
  if (llm) {
    try {
      const profile = await llmExtract(input, llm, seed);
      if (profile) return { profile, source: "llm" };
    } catch (err) {
      console.warn("[EXTRACTOR] LLM extraction failed, using heuristic fallback:", err instanceof Error ? err.message : err);
    }
  }
  return { profile: heuristicExtract(input, seed), source: "heuristic" };
}

async function llmExtract(
  input: string,
  llm: LlmConfig,
  seed?: Partial<SchemeUserProfile>,
): Promise<SchemeUserProfile | null> {
  const isAnthropic = llm.apiKey.startsWith("sk-ant");
  const seedContext = seed && Object.keys(seed).length > 0
    ? `Form data already collected (merge, do not contradict): ${JSON.stringify(seed)}`
    : "";

  const userPrompt = `${seedContext}\nUser message: ${input}`;

  let response: Response;
  if (isAnthropic) {
    response = await fetch(`${llm.baseUrl ?? "https://api.anthropic.com"}/v1/messages`, {
      method: "POST",
      headers: {
        "x-api-key": llm.apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: llm.model,
        max_tokens: 800,
        system: EXTRACTION_SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });
  } else {
    response = await fetch(`${llm.baseUrl ?? "https://api.openai.com"}/v1/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${llm.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: llm.model,
        messages: [
          { role: "system", content: EXTRACTION_SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0,
        max_tokens: 1024,
        ...(llm.model.includes("gpt-oss") ? { reasoning_effort: "low" } : {}),
      }),
    });
  }

  if (!response.ok) {
    throw new Error(`LLM HTTP ${response.status}`);
  }

  const data: any = await response.json();
  const text: string = isAnthropic
    ? (data.content?.[0]?.text ?? "")
    : (data.choices?.[0]?.message?.content ?? "");

  const jsonMatch = /\{[\s\S]*\}/.exec(text);
  if (!jsonMatch) return null;

  const parsed = JSON.parse(jsonMatch[0]) as Partial<SchemeUserProfile>;
  const profile: SchemeUserProfile = {
    ...seed,
    ...Object.fromEntries(Object.entries(parsed).filter(([, v]) => v !== undefined && v !== null && v !== "")),
    goals: parsed.goals && Array.isArray(parsed.goals)
      ? [...new Set([...(seed?.goals ?? []), ...parsed.goals])]
      : (seed?.goals ?? []),
    needs: parsed.needs && Array.isArray(parsed.needs)
      ? [...new Set([...(seed?.needs ?? []), ...parsed.needs])]
      : (seed?.needs ?? []),
  };
  return profile;
}
