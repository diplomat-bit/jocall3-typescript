// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ControlsAPI from './controls';
import { ControlUpdateParams, Controls as ControlsAPIControls } from './controls';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cards extends APIResource {
  controls: ControlsAPI.Controls = new ControlsAPI.Controls(this._client);

  /**
   * Toggle Card Lock
   *
   * @example
   * ```ts
   * await client.corporate.cards.freeze('cardId', {
   *   frozen: true,
   * });
   * ```
   */
  freeze(cardID: string, body: CardFreezeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/corporate/cards/${cardID}/freeze`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Request Physical Corporate Card
   *
   * @example
   * ```ts
   * const response = await client.corporate.cards.issuePhysical(
   *   {
   *     holderName: 'holderName',
   *     shippingAddress: {},
   *   },
   * );
   * ```
   */
  issuePhysical(
    body: CardIssuePhysicalParams,
    options?: RequestOptions,
  ): APIPromise<CardIssuePhysicalResponse> {
    return this._client.post('/corporate/cards/physical', { body, ...options });
  }

  /**
   * Issue Corporate Virtual Card
   *
   * @example
   * ```ts
   * const response = await client.corporate.cards.issueVirtual({
   *   holderName: 'holderName',
   *   monthlyLimit: 0,
   *   purpose: 'purpose',
   * });
   * ```
   */
  issueVirtual(body: CardIssueVirtualParams, options?: RequestOptions): APIPromise<CardIssueVirtualResponse> {
    return this._client.post('/corporate/cards/virtual', { body, ...options });
  }
}

export interface CardIssuePhysicalResponse {
  id: string;

  cardNumberMask: string;

  holderName: string;

  status: string;

  controls?: CardIssuePhysicalResponse.Controls;

  expirationDate?: string;

  frozen?: boolean;
}

export namespace CardIssuePhysicalResponse {
  export interface Controls {
    categories?: Array<string>;

    monthlyLimit?: number;
  }
}

export interface CardIssueVirtualResponse {
  id: string;

  cardNumberMask: string;

  holderName: string;

  status: string;

  controls?: CardIssueVirtualResponse.Controls;

  expirationDate?: string;

  frozen?: boolean;
}

export namespace CardIssueVirtualResponse {
  export interface Controls {
    categories?: Array<string>;

    monthlyLimit?: number;
  }
}

export interface CardFreezeParams {
  frozen: boolean;
}

export interface CardIssuePhysicalParams {
  holderName: string;

  shippingAddress: CardIssuePhysicalParams.ShippingAddress;
}

export namespace CardIssuePhysicalParams {
  export interface ShippingAddress {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }
}

export interface CardIssueVirtualParams {
  holderName: string;

  monthlyLimit: number;

  purpose: string;

  metadata?: unknown;
}

Cards.Controls = ControlsAPIControls;

export declare namespace Cards {
  export {
    type CardIssuePhysicalResponse as CardIssuePhysicalResponse,
    type CardIssueVirtualResponse as CardIssueVirtualResponse,
    type CardFreezeParams as CardFreezeParams,
    type CardIssuePhysicalParams as CardIssuePhysicalParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
  };

  export { ControlsAPIControls as Controls, type ControlUpdateParams as ControlUpdateParams };
}
