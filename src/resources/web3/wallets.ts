// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wallets extends APIResource {
  /**
   * Create Non-Custodial Wallet
   *
   * @example
   * ```ts
   * const wallet = await client.web3.wallets.create({
   *   network: 'ETH',
   * });
   * ```
   */
  create(body: WalletCreateParams, options?: RequestOptions): APIPromise<WalletCreateResponse> {
    return this._client.post('/web3/wallets', { body, ...options });
  }

  /**
   * List Connected Wallets
   *
   * @example
   * ```ts
   * const wallets = await client.web3.wallets.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WalletListResponse> {
    return this._client.get('/web3/wallets', options);
  }

  /**
   * Link External Web3 Wallet (MetaMask/Phantom)
   *
   * @example
   * ```ts
   * await client.web3.wallets.connect({
   *   address: 'address',
   *   provider: 'provider',
   *   signature: 'signature',
   * });
   * ```
   */
  connect(body: WalletConnectParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/web3/wallets/connect', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Multi-chain Token Balances
   *
   * @example
   * ```ts
   * const response = await client.web3.wallets.getBalance(
   *   'walletId',
   * );
   * ```
   */
  getBalance(walletID: string, options?: RequestOptions): APIPromise<WalletGetBalanceResponse> {
    return this._client.get(path`/web3/wallets/${walletID}/balances`, options);
  }
}

export interface WalletCreateResponse {
  id: string;

  blockchainNetwork: string;

  status: string;

  walletAddress: string;

  lastSynced?: string;

  walletProvider?: string;
}

export interface WalletListResponse {
  data?: Array<WalletListResponse.Data>;
}

export namespace WalletListResponse {
  export interface Data {
    id: string;

    blockchainNetwork: string;

    status: string;

    walletAddress: string;

    lastSynced?: string;

    walletProvider?: string;
  }
}

export interface WalletGetBalanceResponse {
  balances?: Array<WalletGetBalanceResponse.Balance>;
}

export namespace WalletGetBalanceResponse {
  export interface Balance {
    amount?: string;

    symbol?: string;
  }
}

export interface WalletCreateParams {
  network: string;
}

export interface WalletConnectParams {
  address: string;

  provider: string;

  signature: string;
}

export declare namespace Wallets {
  export {
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalanceResponse as WalletGetBalanceResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletConnectParams as WalletConnectParams,
  };
}
