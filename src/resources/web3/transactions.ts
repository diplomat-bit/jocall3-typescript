// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Transactions extends APIResource {
  /**
   * Cross-chain Asset Bridge
   *
   * @example
   * ```ts
   * await client.web3.transactions.bridgeChain({
   *   token: 'token',
   *   amount: 'amount',
   *   destChain: 'destChain',
   *   sourceChain: 'sourceChain',
   * });
   * ```
   */
  bridgeChain(body: TransactionBridgeChainParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/web3/transactions/bridge', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initiate On-chain Transfer
   *
   * @example
   * ```ts
   * const response = await client.web3.transactions.sendCrypto({
   *   token: 'token',
   *   amount: 'amount',
   *   to: 'to',
   * });
   * ```
   */
  sendCrypto(
    body: TransactionSendCryptoParams,
    options?: RequestOptions,
  ): APIPromise<TransactionSendCryptoResponse> {
    return this._client.post('/web3/transactions/send', { body, ...options });
  }

  /**
   * Execute Multi-chain Token Swap
   *
   * @example
   * ```ts
   * await client.web3.transactions.swapTokens({
   *   amount: 'amount',
   *   fromToken: 'fromToken',
   *   toToken: 'toToken',
   * });
   * ```
   */
  swapTokens(body: TransactionSwapTokensParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/web3/transactions/swap', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransactionSendCryptoResponse {
  txHash?: string;
}

export interface TransactionBridgeChainParams {
  token: string;

  amount: string;

  destChain: string;

  sourceChain: string;
}

export interface TransactionSendCryptoParams {
  token: string;

  amount: string;

  to: string;
}

export interface TransactionSwapTokensParams {
  amount: string;

  fromToken: string;

  toToken: string;
}

export declare namespace Transactions {
  export {
    type TransactionSendCryptoResponse as TransactionSendCryptoResponse,
    type TransactionBridgeChainParams as TransactionBridgeChainParams,
    type TransactionSendCryptoParams as TransactionSendCryptoParams,
    type TransactionSwapTokensParams as TransactionSwapTokensParams,
  };
}
