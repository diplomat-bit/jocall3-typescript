// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Overdraft extends APIResource {
  /**
   * Update Overdraft Settings
   *
   * @example
   * ```ts
   * await client.accounts.overdraft.update('accountId');
   * ```
   */
  update(
    accountID: string,
    body: OverdraftUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/accounts/${accountID}/overdraft-settings`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Overdraft Settings
   *
   * @example
   * ```ts
   * const overdraft = await client.accounts.overdraft.get(
   *   'accountId',
   * );
   * ```
   */
  get(accountID: string, options?: RequestOptions): APIPromise<OverdraftGetResponse> {
    return this._client.get(path`/accounts/${accountID}/overdraft-settings`, options);
  }
}

export interface OverdraftGetResponse {
  enabled?: boolean;

  feePreference?: string;

  limit?: number;
}

export interface OverdraftUpdateParams {
  enabled?: boolean;

  limit?: number;
}

export declare namespace Overdraft {
  export {
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
