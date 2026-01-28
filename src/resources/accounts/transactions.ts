// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a list of pending transactions that have not yet cleared for a
   * specific financial account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.listPending(
   *     'acc_chase_checking_4567',
   *   );
   * ```
   */
  listPending(
    accountID: string,
    query: TransactionListPendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListPendingResponse> {
    return this._client.get(path`/accounts/${accountID}/transactions/pending`, { query, ...options });
  }
}

export interface TransactionListPendingResponse {
  data: Array<TransactionListPendingResponse.Data>;

  limit: number;

  offset: number;

  total: number;

  nextOffset?: number;
}

export namespace TransactionListPendingResponse {
  export interface Data {
    id?: string;

    accountId?: string;

    aiCategoryConfidence?: number;

    amount?: number;

    carbonFootprint?: number;

    category?: string;

    currency?: string;

    date?: string;

    description?: string;

    disputeStatus?: string;

    paymentChannel?: string;

    type?: string;
  }
}

export interface TransactionListPendingParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Transactions {
  export {
    type TransactionListPendingResponse as TransactionListPendingResponse,
    type TransactionListPendingParams as TransactionListPendingParams,
  };
}
