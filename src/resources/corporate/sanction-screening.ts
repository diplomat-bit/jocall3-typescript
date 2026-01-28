// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SanctionScreening extends APIResource {
  /**
   * Executes a real-time screening of an individual or entity against global
   * sanction lists and watchlists.
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.sanctionScreening.screen();
   * ```
   */
  screen(body: SanctionScreeningScreenParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/corporate/sanction-screening', { body, ...options });
  }
}

export type SanctionScreeningScreenResponse = unknown;

export interface SanctionScreeningScreenParams {
  address?: unknown;
}

export declare namespace SanctionScreening {
  export {
    type SanctionScreeningScreenResponse as SanctionScreeningScreenResponse,
    type SanctionScreeningScreenParams as SanctionScreeningScreenParams,
  };
}
