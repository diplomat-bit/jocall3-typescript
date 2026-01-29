// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BalanceHistory extends APIResource {
  /**
   * Get Historical Balance Snapshots
   *
   * @example
   * ```ts
   * const balanceHistory =
   *   await client.accounts.balanceHistory.retrieve(
   *     'accountId',
   *   );
   * ```
   */
  retrieve(
    accountID: string,
    query: BalanceHistoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BalanceHistoryRetrieveResponse> {
    return this._client.get(path`/accounts/${accountID}/balance-history`, { query, ...options });
  }
}

export interface BalanceHistoryRetrieveResponse {
  history?: Array<BalanceHistoryRetrieveResponse.History>;
}

export namespace BalanceHistoryRetrieveResponse {
  export interface History {
    balance?: number;

    timestamp?: string;
  }
}

export interface BalanceHistoryRetrieveParams {
  period?: '1d' | '7d' | '30d' | '1y' | 'all';
}

export declare namespace BalanceHistory {
  export {
    type BalanceHistoryRetrieveResponse as BalanceHistoryRetrieveResponse,
    type BalanceHistoryRetrieveParams as BalanceHistoryRetrieveParams,
  };
}
