// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Offers extends APIResource {
  /**
   * Redeems a personalized, exclusive offer from the Plato AI marketplace, often
   * resulting in a discount, special rate, or credit to the user's account.
   *
   * @example
   * ```ts
   * const response = await client.marketplace.offers.redeem(
   *   'offer_home_ins_promo_1',
   * );
   * ```
   */
  redeem(
    offerID: string,
    body?: OfferRedeemParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/marketplace/offers/${offerID}/redeem`, { body, ...options });
  }
}

export type OfferRedeemResponse = unknown;

export interface OfferRedeemParams {}

export declare namespace Offers {
  export { type OfferRedeemResponse as OfferRedeemResponse, type OfferRedeemParams as OfferRedeemParams };
}
