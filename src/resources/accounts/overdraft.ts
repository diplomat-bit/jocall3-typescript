// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Overdraft extends APIResource {
  /**
   * Retrieves the current overdraft protection settings for a specific account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.overdraft.retrieveSettings(
   *     'acc_chase_checking_4567',
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
   * Updates the overdraft protection settings for a specific account, enabling or
   * disabling protection and configuring preferences.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.overdraft.updateSettings(
   *     'acc_chase_checking_4567',
   *     { feePreference: 'decline_if_over_limit' },
   *   );
   * ```
   */
  updateSettings(
    accountID: string,
    body: OverdraftUpdateSettingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OverdraftUpdateSettingsResponse> {
    return this._client.put(path`/accounts/${accountID}/overdraft-settings`, { body, ...options });
  }
}

export interface OverdraftRetrieveSettingsResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftUpdateSettingsResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftUpdateSettingsParams {
  enabled?: boolean;

  feePreference?: string;

  linkToSavings?: boolean;
}

export declare namespace Overdraft {
  export {
    type OverdraftRetrieveSettingsResponse as OverdraftRetrieveSettingsResponse,
    type OverdraftUpdateSettingsResponse as OverdraftUpdateSettingsResponse,
    type OverdraftUpdateSettingsParams as OverdraftUpdateSettingsParams,
  };
}
