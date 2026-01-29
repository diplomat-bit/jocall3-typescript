// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PoolingAPI from './pooling';
import { Pooling } from './pooling';
import * as SweepingAPI from './sweeping';
import { Sweeping, SweepingConfigureParams, SweepingExecuteParams } from './sweeping';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Treasury extends APIResource {
  sweeping: SweepingAPI.Sweeping = new SweepingAPI.Sweeping(this._client);
  pooling: PoolingAPI.Pooling = new PoolingAPI.Pooling(this._client);

  /**
   * Corporate Cash Flow Projection
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

  /**
   * AI Liquidity Optimization Engine
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.manageLiquidity();
   * ```
   */
  manageLiquidity(
    body: TreasuryManageLiquidityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryManageLiquidityResponse> {
    return this._client.post('/corporate/treasury/liquidity/optimize', { body, ...options });
  }
}

export interface TreasuryForecastCashFlowResponse {
  aiRecommendations?: Array<string>;

  forecastId?: string;

  projectedRunway?: number;
}

export interface TreasuryManageLiquidityResponse {
  projectedYield?: number;

  strategyId?: string;
}

export interface TreasuryForecastCashFlowParams {
  horizonDays?: number;
}

export interface TreasuryManageLiquidityParams {
  sweepExcess?: boolean;

  targetReserve?: number;
}

Treasury.Sweeping = Sweeping;
Treasury.Pooling = Pooling;

export declare namespace Treasury {
  export {
    type TreasuryForecastCashFlowResponse as TreasuryForecastCashFlowResponse,
    type TreasuryManageLiquidityResponse as TreasuryManageLiquidityResponse,
    type TreasuryForecastCashFlowParams as TreasuryForecastCashFlowParams,
    type TreasuryManageLiquidityParams as TreasuryManageLiquidityParams,
  };

  export {
    Sweeping as Sweeping,
    type SweepingConfigureParams as SweepingConfigureParams,
    type SweepingExecuteParams as SweepingExecuteParams,
  };

  export { Pooling as Pooling };
}
