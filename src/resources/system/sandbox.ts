// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Sandbox extends APIResource {
  /**
   * Force Specific API Error (For Testing)
   *
   * @example
   * ```ts
   * const response = await client.system.sandbox.forceError({
   *   errorCode: 500,
   * });
   * ```
   */
  forceError(body: SandboxForceErrorParams, options?: RequestOptions): APIPromise<SandboxForceErrorResponse> {
    return this._client.post('/system/sandbox/simulate-error', { body, ...options });
  }

  /**
   * Reset Sandbox Ledger Data
   *
   * @example
   * ```ts
   * await client.system.sandbox.reset();
   * ```
   */
  reset(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/system/sandbox/reset', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SandboxForceErrorResponse {
  code: string;

  message: string;

  timestamp?: string;
}

export interface SandboxForceErrorParams {
  errorCode: number;
}

export declare namespace Sandbox {
  export {
    type SandboxForceErrorResponse as SandboxForceErrorResponse,
    type SandboxForceErrorParams as SandboxForceErrorParams,
  };
}
