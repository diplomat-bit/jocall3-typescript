// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AuditLogs extends APIResource {
  /**
   * Get Immutable System Audit Trail
   *
   * @example
   * ```ts
   * const auditLogs = await client.system.auditLogs.list();
   * ```
   */
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditLogListResponse> {
    return this._client.get('/system/audit-logs', { query, ...options });
  }
}

export interface AuditLogListResponse {
  data?: Array<AuditLogListResponse.Data>;
}

export namespace AuditLogListResponse {
  export interface Data {
    id?: string;

    action?: string;

    actor?: string;

    impact?: string;

    timestamp?: string;
  }
}

export interface AuditLogListParams {
  actorId?: string;

  limit?: number;

  offset?: number;
}

export declare namespace AuditLogs {
  export { type AuditLogListResponse as AuditLogListResponse, type AuditLogListParams as AuditLogListParams };
}
