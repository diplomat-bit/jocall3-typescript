// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Insights extends APIResource {
  /**
   * Retrieves AI-generated insights into user spending trends over time, identifying
   * patterns and anomalies.
   *
   * @example
   * ```ts
   * const response =
   *   await client.transactions.insights.getTrends();
   * ```
   */
  getTrends(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/transactions/insights/spending-trends', options);
  }
}

export type InsightGetTrendsResponse = unknown;

export declare namespace Insights {
  export { type InsightGetTrendsResponse as InsightGetTrendsResponse };
}
