// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Get Historical Ledger Archive
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.listArchived(
   *     'accountId',
   *   );
   * ```
   */
  listArchived(
    accountID: string,
    query: TransactionListArchivedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListArchivedResponse> {
    return this._client.get(path`/accounts/${accountID}/transactions/archived`, { query, ...options });
  }

  /**
   * Get Pending Ledger Entries
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.listPending(
   *     'accountId',
   *   );
   * ```
   */
  listPending(accountID: string, options?: RequestOptions): APIPromise<TransactionListPendingResponse> {
    return this._client.get(path`/accounts/${accountID}/transactions/pending`, options);
  }
}

export interface TransactionListArchivedResponse {
  data: Array<Shared.Transaction>;

  total: number;

  nextOffset?: number;
}

export interface TransactionListPendingResponse {
  data: Array<Shared.Transaction>;

  total: number;

  nextOffset?: number;
}

export interface TransactionListArchivedParams {
  year?: number;
}

export declare namespace Transactions {
  export {
    type TransactionListArchivedResponse as TransactionListArchivedResponse,
    type TransactionListPendingResponse as TransactionListPendingResponse,
    type TransactionListArchivedParams as TransactionListArchivedParams,
  };
}
