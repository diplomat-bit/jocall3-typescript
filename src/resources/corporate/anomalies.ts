// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Anomalies extends APIResource {
  /**
   * List detected anomalies
   *
   * @example
   * ```ts
   * const anomalies = await client.corporate.anomalies.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AnomalyListResponse> {
    return this._client.get('/corporate/anomalies', options);
  }

  /**
   * Update anomaly status
   *
   * @example
   * ```ts
   * await client.corporate.anomalies.updateStatus('anomalyId', {
   *   status: 'dismissed',
   * });
   * ```
   */
  updateStatus(
    anomalyID: string,
    body: AnomalyUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/corporate/anomalies/${anomalyID}/status`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AnomalyListResponse {
  data?: Array<AnomalyListResponse.Data>;
}

export namespace AnomalyListResponse {
  export interface Data {
    id: string;

    severity: string;

    type: string;
  }
}

export interface AnomalyUpdateStatusParams {
  status: 'dismissed' | 'investigating' | 'resolved';
}

export declare namespace Anomalies {
  export {
    type AnomalyListResponse as AnomalyListResponse,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
