// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Fx extends APIResource {
  /**
   * Book a Forward FX Deal
   */
  bookDeal(body: FxBookDealParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/fx/deals', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute Currency Conversion
   */
  convert(body: FxConvertParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/fx/convert', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Market FX Rates
   */
  getRates(query: FxGetRatesParams, options?: RequestOptions): APIPromise<FxGetRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

export interface FxGetRatesResponse {
  midRate?: number;

  timestamp?: string;
}

export interface FxBookDealParams {
  amount: number;

  pair: string;

  valueDate: string;
}

export interface FxConvertParams {
  amount: number;

  from: string;

  to: string;
}

export interface FxGetRatesParams {
  pair: string;
}

export declare namespace Fx {
  export {
    type FxGetRatesResponse as FxGetRatesResponse,
    type FxBookDealParams as FxBookDealParams,
    type FxConvertParams as FxConvertParams,
    type FxGetRatesParams as FxGetRatesParams,
  };
}
