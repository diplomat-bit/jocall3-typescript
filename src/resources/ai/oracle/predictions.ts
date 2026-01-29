// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Predictions extends APIResource {
  /**
   * Get AI-Driven Inflation Forecast
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.predictions.inflation();
   * ```
   */
  inflation(
    query: PredictionInflationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PredictionInflationResponse> {
    return this._client.get('/ai/oracle/predictions/inflation', { query, ...options });
  }

  /**
   * Get Market Volatility & Crash Probability
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.predictions.marketCrash();
   * ```
   */
  marketCrash(options?: RequestOptions): APIPromise<PredictionMarketCrashResponse> {
    return this._client.get('/ai/oracle/predictions/market-crash-probability', options);
  }
}

export interface PredictionInflationResponse {
  confidenceScore?: number;

  forecastedCPI?: number;

  period?: string;
}

export interface PredictionMarketCrashResponse {
  aiNarrative?: string;

  crashProbability?: number;

  riskFactors?: Array<string>;
}

export interface PredictionInflationParams {
  region?: string;
}

export declare namespace Predictions {
  export {
    type PredictionInflationResponse as PredictionInflationResponse,
    type PredictionMarketCrashResponse as PredictionMarketCrashResponse,
    type PredictionInflationParams as PredictionInflationParams,
  };
}
