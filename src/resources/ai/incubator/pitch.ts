// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pitch extends APIResource {
  /**
   * Retrieves the granular AI-driven analysis, strategic feedback, market validation
   * results, and any outstanding questions from Quantum Weaver for a specific
   * business pitch.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.incubator.pitch.retrieveDetails(
   *     'pitch_qw_synergychain-xyz',
   *   );
   * ```
   */
  retrieveDetails(pitchID: string, options?: RequestOptions): APIPromise<PitchRetrieveDetailsResponse> {
    return this._client.get(path`/ai/incubator/pitch/${pitchID}/details`, options);
  }

  /**
   * Allows the entrepreneur to respond to specific questions or provide additional
   * details requested by Quantum Weaver, moving the pitch forward in the incubation
   * process.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.incubator.pitch.submitFeedback(
   *     'pitch_qw_synergychain-xyz',
   *   );
   * ```
   */
  submitFeedback(
    pitchID: string,
    body?: PitchSubmitFeedbackParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(path`/ai/incubator/pitch/${pitchID}/feedback`, { body, ...options });
  }
}

export interface PitchRetrieveDetailsResponse {
  /**
   * AI-generated coaching plan for the entrepreneur.
   */
  aiCoachingPlan?: unknown;

  /**
   * AI's detailed financial model analysis.
   */
  aiFinancialModel?: PitchRetrieveDetailsResponse.AIFinancialModel;

  /**
   * AI's detailed market analysis.
   */
  aiMarketAnalysis?: unknown;

  /**
   * AI's assessment of risks associated with the venture.
   */
  aiRiskAssessment?: unknown;
}

export namespace PitchRetrieveDetailsResponse {
  /**
   * AI's detailed financial model analysis.
   */
  export interface AIFinancialModel {
    costStructureAnalysis?: unknown;

    revenueBreakdown?: unknown;
  }
}

export type PitchSubmitFeedbackResponse = unknown;

export interface PitchSubmitFeedbackParams {}

export declare namespace Pitch {
  export {
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackResponse as PitchSubmitFeedbackResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
