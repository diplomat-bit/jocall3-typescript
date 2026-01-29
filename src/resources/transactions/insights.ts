// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Insights extends APIResource {
  /**
   * Get Cash Flow Prediction (Gemini Powered)
   */
  getForecast(options?: RequestOptions): APIPromise<InsightGetForecastResponse> {
    return this._client.get('/transactions/insights/future-flow', options);
  }

  /**
   * Get AISpending Trend Analysis
   */
  getTrends(options?: RequestOptions): APIPromise<InsightGetTrendsResponse> {
    return this._client.get('/transactions/insights/spending-trends', options);
  }
}

export interface InsightGetForecastResponse {
  forecastDays?: number;

  projectedLowPoint?: number;

  recommendations?: Array<string>;
}

export interface InsightGetTrendsResponse {
  aiNarrative?: string;

  anomaliesDetected?: number;

  overallTrend?: string;
}

export declare namespace Insights {
  export {
    type InsightGetForecastResponse as InsightGetForecastResponse,
    type InsightGetTrendsResponse as InsightGetTrendsResponse,
  };
}
