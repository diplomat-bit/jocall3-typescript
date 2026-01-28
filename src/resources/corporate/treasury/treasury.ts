// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SweepingAPI from './sweeping';
import { Sweeping } from './sweeping';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Treasury extends APIResource {
  sweeping: SweepingAPI.Sweeping = new SweepingAPI.Sweeping(this._client);

  /**
   * Retrieves an advanced AI-driven cash flow forecast for the organization,
   * projecting liquidity, identifying potential surpluses or deficits, and providing
   * recommendations for optimal treasury management.
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.forecastCashFlow();
   * ```
   */
  forecastCashFlow(
    query: TreasuryForecastCashFlowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryForecastCashFlowResponse> {
    return this._client.get('/corporate/treasury/cash-flow/forecast', { query, ...options });
  }
}

export interface TreasuryForecastCashFlowResponse {
  /**
   * Forecast of cash inflows by source.
   */
  inflowForecast: unknown;

  /**
   * Forecast of cash outflows by category.
   */
  outflowForecast: unknown;
}

export interface TreasuryForecastCashFlowParams {
  /**
   * The number of days into the future for which to generate the cash flow forecast
   * (e.g., 30, 90, 180).
   */
  forecastHorizonDays?: number;

  /**
   * If true, the forecast will include best-case and worst-case scenario analysis
   * alongside the most likely projection.
   */
  includeScenarioAnalysis?: boolean;
}

Treasury.Sweeping = Sweeping;

export declare namespace Treasury {
  export {
    type TreasuryForecastCashFlowResponse as TreasuryForecastCashFlowResponse,
    type TreasuryForecastCashFlowParams as TreasuryForecastCashFlowParams,
  };

  export { Sweeping as Sweeping };
}
