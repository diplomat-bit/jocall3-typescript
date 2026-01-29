// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Insights extends APIResource {
  /**
   * Get Cash Flow Prediction (Gemini Powered)
   */
  retrieveFutureFlow(options?: RequestOptions): APIPromise<InsightRetrieveFutureFlowResponse> {
    return this._client.get('/transactions/insights/future-flow', options);
  }

  /**
   * Get AISpending Trend Analysis
   */
  retrieveSpendingTrends(options?: RequestOptions): APIPromise<InsightRetrieveSpendingTrendsResponse> {
    return this._client.get('/transactions/insights/spending-trends', options);
  }
}

export interface InsightRetrieveFutureFlowResponse {
  forecastDays?: number;

  projectedLowPoint?: number;

  recommendations?: Array<string>;
}

export interface InsightRetrieveSpendingTrendsResponse {
  aiNarrative?: string;

  anomaliesDetected?: number;

  overallTrend?: string;
}

export declare namespace Insights {
  export {
    type InsightRetrieveFutureFlowResponse as InsightRetrieveFutureFlowResponse,
    type InsightRetrieveSpendingTrendsResponse as InsightRetrieveSpendingTrendsResponse,
  };
}
