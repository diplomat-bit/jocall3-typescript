// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Performance extends APIResource {
  /**
   * Get Historical Performance Curves
   */
  retrieveHistorical(
    query: PerformanceRetrieveHistoricalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PerformanceRetrieveHistoricalResponse> {
    return this._client.get('/investments/performance/historical', { query, ...options });
  }
}

export interface PerformanceRetrieveHistoricalResponse {
  benchmarkComparison?: number;

  points?: Array<unknown>;
}

export interface PerformanceRetrieveHistoricalParams {
  range?: '1m' | '3m' | '1y' | '5y' | 'max';
}

export declare namespace Performance {
  export {
    type PerformanceRetrieveHistoricalResponse as PerformanceRetrieveHistoricalResponse,
    type PerformanceRetrieveHistoricalParams as PerformanceRetrieveHistoricalParams,
  };
}
