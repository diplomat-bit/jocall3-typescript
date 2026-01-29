// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BalanceHistoryAPI from './balance-history';
import {
  BalanceHistory,
  BalanceHistoryRetrieveParams,
  BalanceHistoryRetrieveResponse,
} from './balance-history';
import * as OverdraftAPI from './overdraft';
import { Overdraft, OverdraftGetResponse, OverdraftUpdateParams } from './overdraft';
import * as StatementsAPI from './statements';
import { StatementDownloadParams, StatementListResponse, Statements } from './statements';
import * as TransactionsAPI from './transactions';
import {
  TransactionListArchivedParams,
  TransactionListArchivedResponse,
  TransactionListPendingResponse,
  Transactions,
} from './transactions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  balanceHistory: BalanceHistoryAPI.BalanceHistory = new BalanceHistoryAPI.BalanceHistory(this._client);
  statements: StatementsAPI.Statements = new StatementsAPI.Statements(this._client);
  overdraft: OverdraftAPI.Overdraft = new OverdraftAPI.Overdraft(this._client);

  /**
   * Get Deep Account Analytics
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve('accountId');
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/accounts/${accountID}/details`, options);
  }

  /**
   * List All Linked & Internal Accounts
   *
   * @example
   * ```ts
   * const accounts = await client.accounts.list();
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/accounts/me', { query, ...options });
  }

  /**
   * Close Financial Account
   *
   * @example
   * ```ts
   * await client.accounts.close('accountId');
   * ```
   */
  close(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/accounts/${accountID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Link an External Financial Institution
   *
   * @example
   * ```ts
   * const response = await client.accounts.link({
   *   institutionId: 'institutionId',
   *   publicToken: 'publicToken',
   * });
   * ```
   */
  link(body: AccountLinkParams, options?: RequestOptions): APIPromise<AccountLinkResponse> {
    return this._client.post('/accounts/link', { body, ...options });
  }

  /**
   * Open a New Quantum Internal Account
   *
   * @example
   * ```ts
   * const response = await client.accounts.open({
   *   currency: 'USD',
   *   initialDeposit: 0,
   *   productType: 'quantum_checking',
   * });
   * ```
   */
  open(body: AccountOpenParams, options?: RequestOptions): APIPromise<AccountOpenResponse> {
    return this._client.post('/accounts/open', { body, ...options });
  }
}

export interface AccountRetrieveResponse {
  id: string;

  currency: string;

  currentBalance: number;

  type: string;

  availableBalance?: number;

  institutionName?: string;

  lastUpdated?: string;

  name?: string;

  projectedCashFlow?: AccountRetrieveResponse.ProjectedCashFlow;
}

export namespace AccountRetrieveResponse {
  export interface ProjectedCashFlow {
    confidenceScore?: number;

    days30?: number;
  }
}

export interface AccountListResponse {
  data?: Array<AccountListResponse.Data>;

  nextOffset?: number;

  total?: number;
}

export namespace AccountListResponse {
  export interface Data {
    id: string;

    currency: string;

    currentBalance: number;

    type: string;

    availableBalance?: number;

    institutionName?: string;

    lastUpdated?: string;

    name?: string;

    projectedCashFlow?: Data.ProjectedCashFlow;
  }

  export namespace Data {
    export interface ProjectedCashFlow {
      confidenceScore?: number;

      days30?: number;
    }
  }
}

export interface AccountLinkResponse {
  linkSessionId?: string;

  status?: string;
}

export interface AccountOpenResponse {
  id: string;

  currency: string;

  currentBalance: number;

  type: string;

  availableBalance?: number;

  institutionName?: string;

  lastUpdated?: string;

  name?: string;

  projectedCashFlow?: AccountOpenResponse.ProjectedCashFlow;
}

export namespace AccountOpenResponse {
  export interface ProjectedCashFlow {
    confidenceScore?: number;

    days30?: number;
  }
}

export interface AccountListParams {
  limit?: number;

  offset?: number;
}

export interface AccountLinkParams {
  institutionId: string;

  publicToken: string;
}

export interface AccountOpenParams {
  currency: string;

  initialDeposit: number;

  productType: 'quantum_checking' | 'elite_savings' | 'high_yield_vault';

  /**
   * User IDs for joint accounts
   */
  owners?: Array<string>;
}

Accounts.Transactions = Transactions;
Accounts.BalanceHistory = BalanceHistory;
Accounts.Statements = Statements;
Accounts.Overdraft = Overdraft;

export declare namespace Accounts {
  export {
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountLinkResponse as AccountLinkResponse,
    type AccountOpenResponse as AccountOpenResponse,
    type AccountListParams as AccountListParams,
    type AccountLinkParams as AccountLinkParams,
    type AccountOpenParams as AccountOpenParams,
  };

  export {
    Transactions as Transactions,
    type TransactionListArchivedResponse as TransactionListArchivedResponse,
    type TransactionListPendingResponse as TransactionListPendingResponse,
    type TransactionListArchivedParams as TransactionListArchivedParams,
  };

  export {
    BalanceHistory as BalanceHistory,
    type BalanceHistoryRetrieveResponse as BalanceHistoryRetrieveResponse,
    type BalanceHistoryRetrieveParams as BalanceHistoryRetrieveParams,
  };

  export {
    Statements as Statements,
    type StatementListResponse as StatementListResponse,
    type StatementDownloadParams as StatementDownloadParams,
  };

  export {
    Overdraft as Overdraft,
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
