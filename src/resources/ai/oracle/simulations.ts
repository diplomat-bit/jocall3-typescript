// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Simulations extends APIResource {
  /**
   * Get Specific Simulation Result
   *
   * @example
   * ```ts
   * const simulation =
   *   await client.ai.oracle.simulations.retrieve(
   *     'simulationId',
   *   );
   * ```
   */
  retrieve(simulationID: string, options?: RequestOptions): APIPromise<SimulationRetrieveResponse> {
    return this._client.get(path`/ai/oracle/simulations/${simulationID}`, options);
  }

  /**
   * List All Past Simulations
   *
   * @example
   * ```ts
   * const simulations =
   *   await client.ai.oracle.simulations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SimulationListResponse> {
    return this._client.get('/ai/oracle/simulations', options);
  }
}

export interface SimulationRetrieveResponse {
  simulationId: string;

  status: string;

  confidenceScore?: number;

  data?: Array<{ [key: string]: unknown }>;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulationListResponse {
  data?: Array<SimulationListResponse.Data>;
}

export namespace SimulationListResponse {
  export interface Data {
    simulationId: string;

    status: string;

    confidenceScore?: number;

    data?: Array<{ [key: string]: unknown }>;

    outcomeNarrative?: string;

    projectedValue?: number;
  }
}

export declare namespace Simulations {
  export {
    type SimulationRetrieveResponse as SimulationRetrieveResponse,
    type SimulationListResponse as SimulationListResponse,
  };
}
