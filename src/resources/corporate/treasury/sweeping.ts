// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Sweeping extends APIResource {
  /**
   * Configure Automated Cash Sweeping
   *
   * @example
   * ```ts
   * await client.corporate.treasury.sweeping.configure({
   *   sourceAccount: 'sourceAccount',
   *   targetAccount: 'targetAccount',
   *   threshold: 0,
   * });
   * ```
   */
  configure(body: SweepingConfigureParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/corporate/treasury/sweeping/rules', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Manual Sweep Trigger
   *
   * @example
   * ```ts
   * await client.corporate.treasury.sweeping.execute({
   *   ruleId: 'ruleId',
   * });
   * ```
   */
  execute(body: SweepingExecuteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/corporate/treasury/sweeping/execute', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SweepingConfigureParams {
  sourceAccount: string;

  targetAccount: string;

  threshold: number;

  frequency?: 'daily' | 'weekly' | 'monthly';
}

export interface SweepingExecuteParams {
  ruleId: string;
}

export declare namespace Sweeping {
  export {
    type SweepingConfigureParams as SweepingConfigureParams,
    type SweepingExecuteParams as SweepingExecuteParams,
  };
}
