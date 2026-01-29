// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Controls extends APIResource {
  /**
   * Update Spending Limits & MCC Controls
   *
   * @example
   * ```ts
   * await client.corporate.cards.controls.update('cardId');
   * ```
   */
  update(
    cardID: string,
    body: ControlUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/corporate/cards/${cardID}/controls`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ControlUpdateParams {
  allowedCategories?: Array<string>;

  geoRestriction?: Array<string>;

  monthlyLimit?: number;
}

export declare namespace Controls {
  export { type ControlUpdateParams as ControlUpdateParams };
}
