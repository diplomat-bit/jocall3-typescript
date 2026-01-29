// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class NFTs extends APIResource {
  /**
   * List NFT Collection
   *
   * @example
   * ```ts
   * const nfts = await client.web3.nfts.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NFTListResponse> {
    return this._client.get('/web3/nfts', options);
  }

  /**
   * Mint Utility NFT
   *
   * @example
   * ```ts
   * await client.web3.nfts.mint({ metadataUri: 'metadataUri' });
   * ```
   */
  mint(body: NFTMintParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/web3/nfts/mint', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NFTListResponse {
  data?: Array<unknown>;
}

export interface NFTMintParams {
  metadataUri: string;
}

export declare namespace NFTs {
  export { type NFTListResponse as NFTListResponse, type NFTMintParams as NFTMintParams };
}
