// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class International extends APIResource {
  /**
   * Get international payment status
   */
  getStatus(paymentID: string, options?: RequestOptions): APIPromise<InternationalGetStatusResponse> {
    return this._client.get(path`/payments/international/${paymentID}/status`, options);
  }

  /**
   * EU SEPA Credit Transfer
   */
  sepa(body: InternationalSepaParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/international/sepa', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Global SWIFT Transaction
   */
  swift(body: InternationalSwiftParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/international/swift', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InternationalGetStatusResponse {
  fx_rate?: number;

  status?: string;
}

export interface InternationalSepaParams {
  amount: number;

  iban: string;
}

export interface InternationalSwiftParams {
  amount: number;

  bic: string;

  currency: string;

  iban: string;
}

export declare namespace International {
  export {
    type InternationalGetStatusResponse as InternationalGetStatusResponse,
    type InternationalSepaParams as InternationalSepaParams,
    type InternationalSwiftParams as InternationalSwiftParams,
  };
}
