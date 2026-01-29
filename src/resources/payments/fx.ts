// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Fx extends APIResource {
  /**
   * Executes an instant currency conversion between two currencies, either from a
   * balance or into a specified account.
   *
   * @example
   * ```ts
   * const response = await client.payments.fx.convertCurrency();
   * ```
   */
  convertCurrency(body: FxConvertCurrencyParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/payments/fx/convert', { body, ...options });
  }

  /**
   * Retrieves current and AI-predicted future foreign exchange rates for a specified
   * currency pair, including bid/ask spreads and historical volatility data for
   * informed decisions.
   *
   * @example
   * ```ts
   * const response = await client.payments.fx.retrieveRates();
   * ```
   */
  retrieveRates(
    query: FxRetrieveRatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FxRetrieveRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

export type FxConvertCurrencyResponse = unknown;

export interface FxRetrieveRatesResponse {
  /**
   * Real-time foreign exchange rates.
   */
  currentRate: unknown;

  historicalVolatility?: unknown;
}

export interface FxConvertCurrencyParams {}

export interface FxRetrieveRatesParams {
  /**
   * The base currency code (e.g., USD).
   */
  baseCurrency?: string;

  /**
   * Number of days into the future to provide an AI-driven prediction.
   */
  forecastDays?: number;

  /**
   * The target currency code (e.g., EUR).
   */
  targetCurrency?: string;
}

export declare namespace Fx {
  export {
    type FxConvertCurrencyResponse as FxConvertCurrencyResponse,
    type FxRetrieveRatesResponse as FxRetrieveRatesResponse,
    type FxConvertCurrencyParams as FxConvertCurrencyParams,
    type FxRetrieveRatesParams as FxRetrieveRatesParams,
  };
}
