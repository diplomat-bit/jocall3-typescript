// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Overdraft extends APIResource {
  /**
   * Get Overdraft Settings
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.overdraft.retrieveSettings(
   *     'accountId',
   *   );
   * ```
   */
  retrieveSettings(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<OverdraftRetrieveSettingsResponse> {
    return this._client.get(path`/accounts/${accountID}/overdraft-settings`, options);
  }

  /**
   * Update Overdraft Settings
   *
   * @example
   * ```ts
   * await client.accounts.overdraft.updateSettings('accountId');
   * ```
   */
  updateSettings(
    accountID: string,
    body: OverdraftUpdateSettingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/accounts/${accountID}/overdraft-settings`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OverdraftRetrieveSettingsResponse {
  enabled?: boolean;

  feePreference?: string;

  limit?: number;
}

export interface OverdraftUpdateSettingsParams {
  enabled?: boolean;

  limit?: number;
}

export declare namespace Overdraft {
  export {
    type OverdraftRetrieveSettingsResponse as OverdraftRetrieveSettingsResponse,
    type OverdraftUpdateSettingsParams as OverdraftUpdateSettingsParams,
  };
}
