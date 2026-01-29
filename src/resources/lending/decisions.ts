// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Decisions extends APIResource {
  /**
   * Fetches the deep neural logic behind why a loan was approved or denied.
   */
  getRationale(decisionID: string, options?: RequestOptions): APIPromise<DecisionGetRationaleResponse> {
    return this._client.get(path`/lending/decisions/${decisionID}/rationale`, options);
  }
}

export interface DecisionGetRationaleResponse {
  approved?: boolean;

  nextSteps?: string;

  reasoningNodes?: Array<string>;

  riskVectorAnalysis?: unknown;
}

export declare namespace Decisions {
  export { type DecisionGetRationaleResponse as DecisionGetRationaleResponse };
}
