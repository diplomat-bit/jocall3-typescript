// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImpactAPI from './impact';
import {
  Impact,
  ImpactPortfolioAnalysisResponse,
  ImpactProjectSearchParams,
  ImpactProjectSearchResponse,
} from './impact';
import * as OffsetsAPI from './offsets';
import { OffsetPurchaseParams, OffsetRetireParams, Offsets } from './offsets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sustainability extends APIResource {
  offsets: OffsetsAPI.Offsets = new OffsetsAPI.Offsets(this._client);
  impact: ImpactAPI.Impact = new ImpactAPI.Impact(this._client);

  /**
   * Analysis of ledger data through Gemini to estimate CO2e output.
   */
  getFootprint(options?: RequestOptions): APIPromise<SustainabilityGetFootprintResponse> {
    return this._client.get('/sustainability/carbon-footprint', options);
  }
}

export interface SustainabilityGetFootprintResponse {
  period: string;

  status: 'OPTIMAL' | 'HIGH_OUTPUT' | 'CRITICAL';

  totalKgCO2e: number;

  aiRecommendations?: Array<string>;

  breakdown?: Array<SustainabilityGetFootprintResponse.Breakdown>;
}

export namespace SustainabilityGetFootprintResponse {
  export interface Breakdown {
    category?: string;

    value?: number;
  }
}

Sustainability.Offsets = Offsets;
Sustainability.Impact = Impact;

export declare namespace Sustainability {
  export { type SustainabilityGetFootprintResponse as SustainabilityGetFootprintResponse };

  export {
    Offsets as Offsets,
    type OffsetPurchaseParams as OffsetPurchaseParams,
    type OffsetRetireParams as OffsetRetireParams,
  };

  export {
    Impact as Impact,
    type ImpactPortfolioAnalysisResponse as ImpactPortfolioAnalysisResponse,
    type ImpactProjectSearchResponse as ImpactProjectSearchResponse,
    type ImpactProjectSearchParams as ImpactProjectSearchParams,
  };
}
