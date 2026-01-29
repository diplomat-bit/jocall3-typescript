// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Impact extends APIResource {
  /**
   * ESG Portfolio Impact Analysis
   */
  portfolioAnalysis(options?: RequestOptions): APIPromise<ImpactPortfolioAnalysisResponse> {
    return this._client.get('/sustainability/impact/portfolio', options);
  }

  /**
   * Search Global Green Projects
   */
  projectSearch(
    query: ImpactProjectSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImpactProjectSearchResponse> {
    return this._client.get('/sustainability/impact/projects', { query, ...options });
  }
}

export interface ImpactPortfolioAnalysisResponse {
  esgScore?: number;

  fossilFuelExposure?: number;

  greenProjectInvolvement?: Array<string>;

  socialJusticeRating?: string;
}

export interface ImpactProjectSearchResponse {
  data?: Array<unknown>;
}

export interface ImpactProjectSearchParams {
  continent?: string;
}

export declare namespace Impact {
  export {
    type ImpactPortfolioAnalysisResponse as ImpactPortfolioAnalysisResponse,
    type ImpactProjectSearchResponse as ImpactProjectSearchResponse,
    type ImpactProjectSearchParams as ImpactProjectSearchParams,
  };
}
