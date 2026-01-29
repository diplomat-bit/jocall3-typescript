// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Statements extends APIResource {
  /**
   * Fetches digital statements for a specific account, allowing filtering by date
   * range and format.
   *
   * @example
   * ```ts
   * const statements = await client.accounts.statements.list(
   *   'acc_chase_checking_4567',
   * );
   * ```
   */
  list(
    accountID: string,
    query: StatementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatementListResponse> {
    return this._client.get(path`/accounts/${accountID}/statements`, { query, ...options });
  }
}

export interface StatementListResponse {
  accountId: string;

  downloadUrls: StatementListResponse.DownloadURLs;

  period: string;

  statementId: string;
}

export namespace StatementListResponse {
  export interface DownloadURLs {
    csv?: string;

    pdf?: string;
  }
}

export interface StatementListParams {
  /**
   * Desired format for the statement. Use 'application/json' Accept header for
   * download links.
   */
  format?: string;

  /**
   * Month for the statement (1-12).
   */
  month?: number;

  /**
   * Year for the statement.
   */
  year?: number;
}

export declare namespace Statements {
  export {
    type StatementListResponse as StatementListResponse,
    type StatementListParams as StatementListParams,
  };
}
