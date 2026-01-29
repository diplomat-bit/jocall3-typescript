// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Security extends APIResource {
  /**
   * Retrieve Security Access Logs
   */
  retrieveLog(
    query: SecurityRetrieveLogParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecurityRetrieveLogResponse> {
    return this._client.get('/users/me/security/log', { query, ...options });
  }

  /**
   * Rotate API/Access Keys
   */
  rotateKeys(options?: RequestOptions): APIPromise<SecurityRotateKeysResponse> {
    return this._client.post('/users/me/security/rotate-keys', options);
  }
}

export interface SecurityRetrieveLogResponse {
  data?: Array<SecurityRetrieveLogResponse.Data>;
}

export namespace SecurityRetrieveLogResponse {
  export interface Data {
    event?: string;

    ipAddress?: string;

    location?: unknown;

    timestamp?: string;
  }
}

export interface SecurityRotateKeysResponse {
  newExpiry?: string;

  status?: string;
}

export interface SecurityRetrieveLogParams {
  limit?: number;

  offset?: number;
}

export declare namespace Security {
  export {
    type SecurityRetrieveLogResponse as SecurityRetrieveLogResponse,
    type SecurityRotateKeysResponse as SecurityRotateKeysResponse,
    type SecurityRetrieveLogParams as SecurityRetrieveLogParams,
  };
}
