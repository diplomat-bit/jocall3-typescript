// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Domestic extends APIResource {
  /**
   * Execute ACH Transfer
   */
  sendACH(body: DomesticSendACHParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/domestic/ach', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Real-time Payment (RTP)
   */
  sendRtp(body: DomesticSendRtpParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/domestic/rtp', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute Federal Wire
   */
  sendWire(body: DomesticSendWireParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/domestic/wire', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DomesticSendACHParams {
  account: string;

  amount: number;

  routing: string;
}

export interface DomesticSendRtpParams {
  amount: number;

  recipientId: string;
}

export interface DomesticSendWireParams {
  account: string;

  amount: number;

  routing: string;
}

export declare namespace Domestic {
  export {
    type DomesticSendACHParams as DomesticSendACHParams,
    type DomesticSendRtpParams as DomesticSendRtpParams,
    type DomesticSendWireParams as DomesticSendWireParams,
  };
}
