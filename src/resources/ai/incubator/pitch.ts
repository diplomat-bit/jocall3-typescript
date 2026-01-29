// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pitch extends APIResource {
  /**
   * Get Full Pitch AI Deep Dive
   */
  retrieveDetails(pitchID: string, options?: RequestOptions): APIPromise<PitchRetrieveDetailsResponse> {
    return this._client.get(path`/ai/incubator/pitch/${pitchID}/details`, options);
  }

  /**
   * Submit Answers to AI Follow-up Questions
   */
  submitFeedback(
    pitchID: string,
    body: PitchSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/ai/incubator/pitch/${pitchID}/feedback`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PitchRetrieveDetailsResponse {
  aiFeedback?: string;

  fundingEligibility?: boolean;
}

export interface PitchSubmitFeedbackParams {
  answers: Array<unknown>;
}

export declare namespace Pitch {
  export {
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchSubmitFeedbackParams as PitchSubmitFeedbackParams,
  };
}
