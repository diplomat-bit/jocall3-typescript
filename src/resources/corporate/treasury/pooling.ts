// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Pooling extends APIResource {
  /**
   * Configure liquidity pooling
   *
   * @example
   * ```ts
   * await client.corporate.treasury.pooling.configure();
   * ```
   */
  configure(
    body: PoolingConfigureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/corporate/treasury/liquidity/pooling', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PoolingConfigureParams {
  source_account_ids?: Array<string>;

  target_account_id?: string;
}

export declare namespace Pooling {
  export { type PoolingConfigureParams as PoolingConfigureParams };
}
