import type { RecommendSchemesResponse, SchemeRecommendation } from "./schemeTypes";

/**
 * Public recommendation view. Keep enough information for the results cards,
 * while withholding detailed eligibility evidence, documents, application
 * channels, and source metadata from the public response.
 */
export function censoredRecommendationResponse(response: RecommendSchemesResponse): RecommendSchemesResponse {
  return {
    ...response,
    recommendations: response.recommendations.map(censorRecommendation),
  };
}

function censorRecommendation(recommendation: SchemeRecommendation): SchemeRecommendation {
  return {
    schemeId: recommendation.schemeId,
    schemeName: recommendation.schemeName,
    schemeDescription: recommendation.schemeDescription,
    ministry: recommendation.ministry,
    fundingRange: recommendation.fundingRange,
    expectedTimeline: recommendation.expectedTimeline,
    recommendedNextStep: recommendation.recommendedNextStep,
    eligibilityStatus: recommendation.eligibilityStatus,
    relevance: recommendation.relevance,
    benefits: recommendation.benefits.slice(0, 1).map((benefit) => ({
      id: benefit.id,
      benefit_id: benefit.benefit_id,
      type: benefit.type,
      name: benefit.name,
      amount: benefit.amount,
    })),
    documents: [],
    application: {},
    sources: [],
    eligibility: {
      matchedRules: [],
      failedRules: [],
      missingInformation: [],
    },
    okf: {
      status: recommendation.okf.status,
      staleAfter: recommendation.okf.staleAfter,
    },
  };
}

