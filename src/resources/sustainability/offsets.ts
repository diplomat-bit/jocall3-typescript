// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Offsets extends APIResource {
  /**
   * Purchase Verified Carbon Credits
   */
  purchase(body: OffsetPurchaseParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/sustainability/offsets/purchase', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retire Carbon Credits (Permanent Offsetting)
   */
  retire(body: OffsetRetireParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/sustainability/offsets/retire', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OffsetPurchaseParams {
  projectId: string;

  tonnes: number;

  paymentSourceId?: string;
}

export interface OffsetRetireParams {
  certificateId: string;
}

export declare namespace Offsets {
  export { type OffsetPurchaseParams as OffsetPurchaseParams, type OffsetRetireParams as OffsetRetireParams };
}
