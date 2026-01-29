// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class International extends APIResource {
  /**
   * Retrieves the current processing status and details of an initiated
   * international payment.
   *
   * @example
   * ```ts
   * const response =
   *   await client.payments.international.getStatus(
   *     'int_pmt_xyz7890',
   *   );
   * ```
   */
  getStatus(paymentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/payments/international/${paymentID}/status`, options);
  }
}

export type InternationalGetStatusResponse = unknown;

export declare namespace International {
  export { type InternationalGetStatusResponse as InternationalGetStatusResponse };
}
