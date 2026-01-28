// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Fraud extends APIResource {
  /**
   * Retrieves a list of AI-powered fraud detection rules currently active for the
   * organization, including their parameters, thresholds, and associated actions
   * (e.g., flag, block, alert).
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.risk.fraud.listRules();
   * ```
   */
  listRules(
    query: FraudListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get('/corporate/risk/fraud/rules', { query, ...options });
  }
}

export type FraudListRulesResponse = unknown;

export interface FraudListRulesParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Fraud {
  export {
    type FraudListRulesResponse as FraudListRulesResponse,
    type FraudListRulesParams as FraudListRulesParams,
  };
}
