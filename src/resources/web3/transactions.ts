// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Transactions extends APIResource {
  /**
   * Prepares and initiates a cryptocurrency transfer from a connected wallet to a
   * specified recipient address. Requires user confirmation (e.g., via wallet
   * signature).
   *
   * @example
   * ```ts
   * const response = await client.web3.transactions.initiate();
   * ```
   */
  initiate(body: TransactionInitiateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/web3/transactions/initiate', { body, ...options });
  }
}

export type TransactionInitiateResponse = unknown;

export interface TransactionInitiateParams {}

export declare namespace Transactions {
  export {
    type TransactionInitiateResponse as TransactionInitiateResponse,
    type TransactionInitiateParams as TransactionInitiateParams,
  };
}
