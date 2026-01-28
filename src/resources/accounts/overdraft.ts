// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Overdraft extends APIResource {
  /**
   * Updates the overdraft protection settings for a specific account, enabling or
   * disabling protection and configuring preferences.
   *
   * @example
   * ```ts
   * const overdraft = await client.accounts.overdraft.update(
   *   'acc_chase_checking_4567',
   *   { feePreference: 'decline_if_over_limit' },
   * );
   * ```
   */
  update(
    accountID: string,
    body: OverdraftUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OverdraftUpdateResponse> {
    return this._client.put(path`/accounts/${accountID}/overdraft-settings`, { body, ...options });
  }

  /**
   * Retrieves the current overdraft protection settings for a specific account.
   *
   * @example
   * ```ts
   * const overdraft = await client.accounts.overdraft.get(
   *   'acc_chase_checking_4567',
   * );
   * ```
   */
  get(accountID: string, options?: RequestOptions): APIPromise<OverdraftGetResponse> {
    return this._client.get(path`/accounts/${accountID}/overdraft-settings`, options);
  }
}

export interface OverdraftUpdateResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftGetResponse {
  accountId: string;

  enabled: boolean;

  feePreference: string;

  linkedSavingsAccountId?: string;

  linkToSavings?: boolean;

  protectionLimit?: number;
}

export interface OverdraftUpdateParams {
  enabled?: boolean;

  feePreference?: string;

  linkToSavings?: boolean;
}

export declare namespace Overdraft {
  export {
    type OverdraftUpdateResponse as OverdraftUpdateResponse,
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
