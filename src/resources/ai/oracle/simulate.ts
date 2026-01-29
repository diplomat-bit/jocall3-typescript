// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Simulate extends APIResource {
  runAdvanced(
    body: SimulateRunAdvancedParams,
    options?: RequestOptions,
  ): APIPromise<SimulateRunAdvancedResponse> {
    return this._client.post('/ai/oracle/simulate/advanced', { body, ...options });
  }

  runMonteCarlo(body: SimulateRunMonteCarloParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/oracle/simulate/monte-carlo', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Run a 'What-If' Financial Simulation (Standard)
   */
  runStandard(
    body: SimulateRunStandardParams,
    options?: RequestOptions,
  ): APIPromise<SimulateRunStandardResponse> {
    return this._client.post('/ai/oracle/simulate', { body, ...options });
  }
}

export interface SimulateRunAdvancedResponse {
  simulationId: string;

  status: string;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulateRunStandardResponse {
  simulationId: string;

  status: string;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulateRunAdvancedParams {
  prompt: string;

  scenarios: Array<SimulateRunAdvancedParams.Scenario>;
}

export namespace SimulateRunAdvancedParams {
  export interface Scenario {
    name: string;

    description?: string;
  }
}

export interface SimulateRunMonteCarloParams {
  iterations: number;

  variables: Array<string>;
}

export interface SimulateRunStandardParams {
  /**
   * Describe the financial scenario
   */
  prompt: string;

  /**
   * Key variables like duration, rate, or amount
   */
  parameters?: unknown;
}

export declare namespace Simulate {
  export {
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunStandardResponse as SimulateRunStandardResponse,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
    type SimulateRunMonteCarloParams as SimulateRunMonteCarloParams,
    type SimulateRunStandardParams as SimulateRunStandardParams,
  };
}
