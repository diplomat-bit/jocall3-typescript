// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PoolingAPI from './pooling';
import { Pooling, PoolingConfigureParams } from './pooling';
import * as SweepingAPI from './sweeping';
import { Sweeping, SweepingConfigureRulesParams, SweepingExecuteParams } from './sweeping';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Treasury extends APIResource {
  sweeping: SweepingAPI.Sweeping = new SweepingAPI.Sweeping(this._client);
  pooling: PoolingAPI.Pooling = new PoolingAPI.Pooling(this._client);

  /**
   * Execute bulk payouts
   *
   * @example
   * ```ts
   * await client.corporate.treasury.executeBulkPayouts({
   *   payouts: [{}],
   * });
   * ```
   */
  executeBulkPayouts(body: TreasuryExecuteBulkPayoutsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/corporate/treasury/bulk-payouts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * AI Liquidity Optimization Engine
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.optimizeLiquidity();
   * ```
   */
  optimizeLiquidity(
    body: TreasuryOptimizeLiquidityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryOptimizeLiquidityResponse> {
    return this._client.post('/corporate/treasury/liquidity/optimize', { body, ...options });
  }

  /**
   * Corporate Cash Flow Projection
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.retrieveCashFlowForecast();
   * ```
   */
  retrieveCashFlowForecast(
    query: TreasuryRetrieveCashFlowForecastParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryRetrieveCashFlowForecastResponse> {
    return this._client.get('/corporate/treasury/cash-flow/forecast', { query, ...options });
  }

  /**
   * Get current liquidity positions
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.retrieveLiquidityPositions();
   * ```
   */
  retrieveLiquidityPositions(
    options?: RequestOptions,
  ): APIPromise<TreasuryRetrieveLiquidityPositionsResponse> {
    return this._client.get('/corporate/treasury/liquidity-positions', options);
  }
}

export interface TreasuryOptimizeLiquidityResponse {
  projectedYield?: number;

  strategyId?: string;
}

export interface TreasuryRetrieveCashFlowForecastResponse {
  aiRecommendations?: Array<string>;

  forecastId?: string;

  projectedRunway?: number;
}

export interface TreasuryRetrieveLiquidityPositionsResponse {
  positions?: Array<unknown>;

  total_liquidity?: number;
}

export interface TreasuryExecuteBulkPayoutsParams {
  payouts: Array<TreasuryExecuteBulkPayoutsParams.Payout>;
}

export namespace TreasuryExecuteBulkPayoutsParams {
  export interface Payout {
    amount?: number;

    recipient_id?: string;
  }
}

export interface TreasuryOptimizeLiquidityParams {
  sweepExcess?: boolean;

  targetReserve?: number;
}

export interface TreasuryRetrieveCashFlowForecastParams {
  horizonDays?: number;
}

Treasury.Sweeping = Sweeping;
Treasury.Pooling = Pooling;

export declare namespace Treasury {
  export {
    type TreasuryOptimizeLiquidityResponse as TreasuryOptimizeLiquidityResponse,
    type TreasuryRetrieveCashFlowForecastResponse as TreasuryRetrieveCashFlowForecastResponse,
    type TreasuryRetrieveLiquidityPositionsResponse as TreasuryRetrieveLiquidityPositionsResponse,
    type TreasuryExecuteBulkPayoutsParams as TreasuryExecuteBulkPayoutsParams,
    type TreasuryOptimizeLiquidityParams as TreasuryOptimizeLiquidityParams,
    type TreasuryRetrieveCashFlowForecastParams as TreasuryRetrieveCashFlowForecastParams,
  };

  export {
    Sweeping as Sweeping,
    type SweepingConfigureRulesParams as SweepingConfigureRulesParams,
    type SweepingExecuteParams as SweepingExecuteParams,
  };

  export { Pooling as Pooling, type PoolingConfigureParams as PoolingConfigureParams };
}
