// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Offers extends APIResource {
  /**
   * List AI-Targeted Loyalty Offers
   */
  list(options?: RequestOptions): APIPromise<OfferListResponse> {
    return this._client.get('/marketplace/offers', options);
  }

  /**
   * Redeem Marketplace Reward
   */
  redeem(offerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketplace/offers/${offerID}/redeem`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OfferListResponse {
  data?: Array<unknown>;
}

export declare namespace Offers {
  export { type OfferListResponse as OfferListResponse };
}
