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
  retrieveStatus(
    paymentID: string,
    options?: RequestOptions,
  ): APIPromise<InternationalRetrieveStatusResponse> {
    return this._client.get(path`/payments/international/${paymentID}/status`, options);
  }

  /**
   * EU SEPA Credit Transfer
   */
  sendSepa(body: InternationalSendSepaParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/international/sepa', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Global SWIFT Transaction
   */
  sendSwift(body: InternationalSendSwiftParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/international/swift', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InternationalRetrieveStatusResponse {
  fx_rate?: number;

  status?: string;
}

export interface InternationalSendSepaParams {
  amount: number;

  iban: string;
}

export interface InternationalSendSwiftParams {
  amount: number;

  bic: string;

  currency: string;

  iban: string;
}

export declare namespace International {
  export {
    type InternationalRetrieveStatusResponse as InternationalRetrieveStatusResponse,
    type InternationalSendSepaParams as InternationalSendSepaParams,
    type InternationalSendSwiftParams as InternationalSendSwiftParams,
  };
}
