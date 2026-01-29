// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OffersAPI from './offers';
import { OfferListResponse, Offers } from './offers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Marketplace extends APIResource {
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);

  /**
   * List Financial Products & Add-ons
   */
  listProducts(options?: RequestOptions): APIPromise<MarketplaceListProductsResponse> {
    return this._client.get('/marketplace/products', options);
  }
}

export interface MarketplaceListProductsResponse {
  data?: Array<unknown>;
}

Marketplace.Offers = Offers;

export declare namespace Marketplace {
  export { type MarketplaceListProductsResponse as MarketplaceListProductsResponse };

  export { Offers as Offers, type OfferListResponse as OfferListResponse };
}
