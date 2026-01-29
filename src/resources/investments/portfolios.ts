// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Portfolios extends APIResource {
  /**
   * Retrieves detailed information for a specific investment portfolio, including
   * holdings, performance, and AI insights.
   *
   * @example
   * ```ts
   * const portfolio =
   *   await client.investments.portfolios.retrieve(
   *     'portfolio_equity_growth',
   *   );
   * ```
   */
  retrieve(portfolioID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/investments/portfolios/${portfolioID}`, options);
  }

  /**
   * Updates high-level details of an investment portfolio, such as name or risk
   * tolerance.
   *
   * @example
   * ```ts
   * const portfolio =
   *   await client.investments.portfolios.update(
   *     'portfolio_equity_growth',
   *   );
   * ```
   */
  update(
    portfolioID: string,
    body?: PortfolioUpdateParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(path`/investments/portfolios/${portfolioID}`, { body, ...options });
  }

  /**
   * Retrieves a summary of all investment portfolios linked to the user's account.
   *
   * @example
   * ```ts
   * const portfolios =
   *   await client.investments.portfolios.list();
   * ```
   */
  list(query: PortfolioListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/investments/portfolios', { query, ...options });
  }

  /**
   * Triggers an AI-driven rebalancing process for a specific investment portfolio
   * based on a target risk tolerance or strategy.
   *
   * @example
   * ```ts
   * const response =
   *   await client.investments.portfolios.rebalance(
   *     'portfolio_equity_growth',
   *   );
   * ```
   */
  rebalance(
    portfolioID: string,
    body: PortfolioRebalanceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/investments/portfolios/${portfolioID}/rebalance`, { body, ...options });
  }
}

export type PortfolioRetrieveResponse = unknown;

export type PortfolioUpdateResponse = unknown;

export type PortfolioListResponse = unknown;

export type PortfolioRebalanceResponse = unknown;

export interface PortfolioUpdateParams {}

export interface PortfolioListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export interface PortfolioRebalanceParams {}

export declare namespace Portfolios {
  export {
    type PortfolioRetrieveResponse as PortfolioRetrieveResponse,
    type PortfolioUpdateResponse as PortfolioUpdateResponse,
    type PortfolioListResponse as PortfolioListResponse,
    type PortfolioRebalanceResponse as PortfolioRebalanceResponse,
    type PortfolioUpdateParams as PortfolioUpdateParams,
    type PortfolioListParams as PortfolioListParams,
    type PortfolioRebalanceParams as PortfolioRebalanceParams,
  };
}
