// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as InsightsAPI from './insights';
import { InsightGetForecastResponse, InsightGetTrendsResponse, Insights } from './insights';
import * as RecurringAPI from './recurring';
import { Recurring, RecurringCreateParams, RecurringListResponse } from './recurring';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  recurring: RecurringAPI.Recurring = new RecurringAPI.Recurring(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);

  /**
   * Get Transaction Deep Metadata
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<Shared.Transaction> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * Global Transaction Search & Filter
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Attach Manual Notes to Transaction
   */
  addNotes(
    transactionID: string,
    body: TransactionAddNotesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/transactions/${transactionID}/notes`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Override AI Categorization
   */
  categorize(
    transactionID: string,
    body: TransactionCategorizeParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Transaction> {
    return this._client.put(path`/transactions/${transactionID}/categorize`, { body, ...options });
  }

  /**
   * Initiate Transaction Dispute
   */
  dispute(transactionID: string, body: TransactionDisputeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/transactions/${transactionID}/dispute`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Split Transaction Across Multiple Categories
   */
  split(transactionID: string, body: TransactionSplitParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/transactions/${transactionID}/split`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransactionListResponse {
  data: Array<Shared.Transaction>;

  total: number;

  nextOffset?: number;
}

export interface TransactionListParams {
  limit?: number;

  maxAmount?: number;

  minAmount?: number;

  offset?: number;

  type?: string;
}

export interface TransactionAddNotesParams {
  notes: string;
}

export interface TransactionCategorizeParams {
  category: string;

  applyToFuture?: boolean;
}

export interface TransactionDisputeParams {
  reason: 'fraudulent' | 'duplicate' | 'incorrect_amount' | 'service_not_rendered';

  /**
   * URIs to evidence
   */
  evidenceFiles?: Array<string>;
}

export interface TransactionSplitParams {
  splits: Array<TransactionSplitParams.Split>;
}

export namespace TransactionSplitParams {
  export interface Split {
    amount?: number;

    category?: string;
  }
}

Transactions.Recurring = Recurring;
Transactions.Insights = Insights;

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionAddNotesParams as TransactionAddNotesParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
    type TransactionDisputeParams as TransactionDisputeParams,
    type TransactionSplitParams as TransactionSplitParams,
  };

  export {
    Recurring as Recurring,
    type RecurringListResponse as RecurringListResponse,
    type RecurringCreateParams as RecurringCreateParams,
  };

  export {
    Insights as Insights,
    type InsightGetForecastResponse as InsightGetForecastResponse,
    type InsightGetTrendsResponse as InsightGetTrendsResponse,
  };
}
