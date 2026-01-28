// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Budgets extends APIResource {
  /**
   * Retrieves detailed information for a specific budget, including current
   * spending, remaining amounts, and AI recommendations.
   *
   * @example
   * ```ts
   * const budget = await client.budgets.retrieve(
   *   'budget_monthly_aug',
   * );
   * ```
   */
  retrieve(budgetID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/budgets/${budgetID}`, options);
  }

  /**
   * Updates the parameters of an existing budget, such as total amount, dates, or
   * categories.
   *
   * @example
   * ```ts
   * const budget = await client.budgets.update(
   *   'budget_monthly_aug',
   * );
   * ```
   */
  update(
    budgetID: string,
    body?: BudgetUpdateParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(path`/budgets/${budgetID}`, { body, ...options });
  }

  /**
   * Retrieves a list of all active and historical budgets for the authenticated
   * user.
   *
   * @example
   * ```ts
   * const budgets = await client.budgets.list();
   * ```
   */
  list(query: BudgetListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/budgets', { query, ...options });
  }
}

export type BudgetRetrieveResponse = unknown;

export type BudgetUpdateResponse = unknown;

export type BudgetListResponse = unknown;

export interface BudgetUpdateParams {}

export interface BudgetListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Budgets {
  export {
    type BudgetRetrieveResponse as BudgetRetrieveResponse,
    type BudgetUpdateResponse as BudgetUpdateResponse,
    type BudgetListResponse as BudgetListResponse,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetListParams as BudgetListParams,
  };
}
