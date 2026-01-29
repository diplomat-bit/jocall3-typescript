// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Predictions extends APIResource {
  /**
   * Get AI-Driven Inflation Forecast
   */
  retrieveInflationForecast(
    query: PredictionRetrieveInflationForecastParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PredictionRetrieveInflationForecastResponse> {
    return this._client.get('/ai/oracle/predictions/inflation', { query, ...options });
  }

  /**
   * Get Market Volatility & Crash Probability
   */
  retrieveMarketCrashProbability(
    options?: RequestOptions,
  ): APIPromise<PredictionRetrieveMarketCrashProbabilityResponse> {
    return this._client.get('/ai/oracle/predictions/market-crash-probability', options);
  }
}

export interface PredictionRetrieveInflationForecastResponse {
  confidenceScore?: number;

  forecastedCPI?: number;

  period?: string;
}

export interface PredictionRetrieveMarketCrashProbabilityResponse {
  aiNarrative?: string;

  crashProbability?: number;

  riskFactors?: Array<string>;
}

export interface PredictionRetrieveInflationForecastParams {
  region?: string;
}

export declare namespace Predictions {
  export {
    type PredictionRetrieveInflationForecastResponse as PredictionRetrieveInflationForecastResponse,
    type PredictionRetrieveMarketCrashProbabilityResponse as PredictionRetrieveMarketCrashProbabilityResponse,
    type PredictionRetrieveInflationForecastParams as PredictionRetrieveInflationForecastParams,
  };
}
