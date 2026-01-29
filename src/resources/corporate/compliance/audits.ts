// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Audits extends APIResource {
  /**
   * Request Real-time Compliance Audit
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.request({
   *     auditScope: 'auditScope',
   *     endDate: '2019-12-27',
   *     startDate: '2019-12-27',
   *   });
   * ```
   */
  request(body: AuditRequestParams, options?: RequestOptions): APIPromise<AuditRequestResponse> {
    return this._client.post('/corporate/compliance/audits', { body, ...options });
  }

  /**
   * Retrieve AI-Generated Audit Report
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.retrieveReport(
   *     'auditId',
   *   );
   * ```
   */
  retrieveReport(auditID: string, options?: RequestOptions): APIPromise<AuditRetrieveReportResponse> {
    return this._client.get(path`/corporate/compliance/audits/${auditID}/report`, options);
  }
}

export interface AuditRequestResponse {
  auditId?: string;
}

export interface AuditRetrieveReportResponse {
  generatedAt: string;

  reportId: string;

  findings?: Array<string>;
}

export interface AuditRequestParams {
  auditScope: string;

  endDate: string;

  startDate: string;
}

export declare namespace Audits {
  export {
    type AuditRequestResponse as AuditRequestResponse,
    type AuditRetrieveReportResponse as AuditRetrieveReportResponse,
    type AuditRequestParams as AuditRequestParams,
  };
}
