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
  retrieve(budgetID: string, options?: RequestOptions): APIPromise<BudgetRetrieveResponse> {
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
   *   { alertThreshold: 85, totalAmount: 3200 },
   * );
   * ```
   */
  update(
    budgetID: string,
    body: BudgetUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BudgetUpdateResponse> {
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
  list(
    query: BudgetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BudgetListResponse> {
    return this._client.get('/budgets', { query, ...options });
  }
}

export interface BudgetRetrieveResponse {
  id: string;

  alertThreshold: number;

  categories: Array<BudgetRetrieveResponse.Category>;

  endDate: string;

  name: string;

  period: string;

  remainingAmount: number;

  spentAmount: number;

  startDate: string;

  status: string;

  totalAmount: number;

  aiRecommendations?: Array<BudgetRetrieveResponse.AIRecommendation>;
}

export namespace BudgetRetrieveResponse {
  export interface Category {
    allocated?: number;

    name?: string;

    remaining?: number;

    spent?: number;
  }

  export interface AIRecommendation {
    id?: string;

    actionableRecommendation?: string;

    category?: string;

    description?: string;

    severity?: string;

    timestamp?: string;

    title?: string;
  }
}

export interface BudgetUpdateResponse {
  id: string;

  alertThreshold: number;

  categories: Array<BudgetUpdateResponse.Category>;

  endDate: string;

  name: string;

  period: string;

  remainingAmount: number;

  spentAmount: number;

  startDate: string;

  status: string;

  totalAmount: number;
}

export namespace BudgetUpdateResponse {
  export interface Category {
    allocated?: number;

    name?: string;

    remaining?: number;

    spent?: number;
  }
}

export interface BudgetListResponse {
  data: Array<BudgetListResponse.Data>;

  limit: number;

  offset: number;

  total: number;

  nextOffset?: number;
}

export namespace BudgetListResponse {
  export interface Data {
    id?: string;

    alertThreshold?: number;

    categories?: Array<Data.Category>;

    endDate?: string;

    name?: string;

    period?: string;

    remainingAmount?: number;

    spentAmount?: number;

    startDate?: string;

    status?: string;

    totalAmount?: number;
  }

  export namespace Data {
    export interface Category {
      allocated?: number;

      name?: string;

      remaining?: number;

      spent?: number;
    }
  }
}

export interface BudgetUpdateParams {
  alertThreshold?: number;

  totalAmount?: number;
}

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
