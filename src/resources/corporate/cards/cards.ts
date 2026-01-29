// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ControlsAPI from './controls';
import { ControlUpdateParams, Controls } from './controls';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cards extends APIResource {
  controls: ControlsAPI.Controls = new ControlsAPI.Controls(this._client);

  /**
   * List all corporate cards
   *
   * @example
   * ```ts
   * const cards = await client.corporate.cards.list();
   * ```
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardListResponse> {
    return this._client.get('/corporate/cards', { query, ...options });
  }

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
   *     shippingAddress: {
   *       city: 'city',
   *       country: 'country',
   *       street: 'street',
   *     },
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

  /**
   * Get card transactions
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.cards.listTransactions('cardId');
   * ```
   */
  listTransactions(cardID: string, options?: RequestOptions): APIPromise<CardListTransactionsResponse> {
    return this._client.get(path`/corporate/cards/${cardID}/transactions`, options);
  }
}

export interface CardListResponse {
  data?: Array<CardListResponse.Data>;

  total?: number;
}

export namespace CardListResponse {
  export interface Data {
    id: string;

    cardNumberMask: string;

    holderName: string;

    status: string;

    frozen?: boolean;
  }
}

export interface CardIssuePhysicalResponse {
  id: string;

  cardNumberMask: string;

  holderName: string;

  status: string;

  frozen?: boolean;
}

export interface CardIssueVirtualResponse {
  id: string;

  cardNumberMask: string;

  holderName: string;

  status: string;

  frozen?: boolean;
}

export interface CardListTransactionsResponse {
  data?: Array<Shared.Transaction>;
}

export interface CardListParams {
  limit?: number;

  offset?: number;
}

export interface CardFreezeParams {
  frozen: boolean;
}

export interface CardIssuePhysicalParams {
  holderName: string;

  shippingAddress: Shared.Address;
}

export interface CardIssueVirtualParams {
  holderName: string;

  monthlyLimit: number;

  purpose: string;

  metadata?: unknown;
}

Cards.Controls = Controls;

export declare namespace Cards {
  export {
    type CardListResponse as CardListResponse,
    type CardIssuePhysicalResponse as CardIssuePhysicalResponse,
    type CardIssueVirtualResponse as CardIssueVirtualResponse,
    type CardListTransactionsResponse as CardListTransactionsResponse,
    type CardListParams as CardListParams,
    type CardFreezeParams as CardFreezeParams,
    type CardIssuePhysicalParams as CardIssuePhysicalParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
  };

  export { Controls as Controls, type ControlUpdateParams as ControlUpdateParams };
}
