// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Statements extends APIResource {
  /**
   * List Available Statements
   *
   * @example
   * ```ts
   * const statements = await client.accounts.statements.list(
   *   'accountId',
   * );
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<StatementListResponse> {
    return this._client.get(path`/accounts/${accountID}/statements`, options);
  }

  /**
   * Download Statement PDF
   *
   * @example
   * ```ts
   * const response = await client.accounts.statements.download(
   *   'statementId',
   *   { accountId: 'accountId' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(
    statementID: string,
    params: StatementDownloadParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { accountId } = params;
    return this._client.get(path`/accounts/${accountId}/statements/${statementID}/pdf`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface StatementListResponse {
  data?: Array<StatementListResponse.Data>;
}

export namespace StatementListResponse {
  export interface Data {
    id?: string;

    issueDate?: string;

    period?: string;
  }
}

export interface StatementDownloadParams {
  accountId: string;
}

export declare namespace Statements {
  export {
    type StatementListResponse as StatementListResponse,
    type StatementDownloadParams as StatementDownloadParams,
  };
}
