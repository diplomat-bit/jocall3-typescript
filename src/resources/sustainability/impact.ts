// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Impact extends APIResource {
  /**
   * Search Global Green Projects
   */
  listGreenProjects(
    query: ImpactListGreenProjectsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImpactListGreenProjectsResponse> {
    return this._client.get('/sustainability/impact/projects', { query, ...options });
  }

  /**
   * ESG Portfolio Impact Analysis
   */
  retrievePortfolioAnalysis(options?: RequestOptions): APIPromise<ImpactRetrievePortfolioAnalysisResponse> {
    return this._client.get('/sustainability/impact/portfolio', options);
  }
}

export interface ImpactListGreenProjectsResponse {
  data?: Array<unknown>;
}

export interface ImpactRetrievePortfolioAnalysisResponse {
  esgScore?: number;

  fossilFuelExposure?: number;

  greenProjectInvolvement?: Array<string>;

  socialJusticeRating?: string;
}

export interface ImpactListGreenProjectsParams {
  continent?: string;
}

export declare namespace Impact {
  export {
    type ImpactListGreenProjectsResponse as ImpactListGreenProjectsResponse,
    type ImpactRetrievePortfolioAnalysisResponse as ImpactRetrievePortfolioAnalysisResponse,
    type ImpactListGreenProjectsParams as ImpactListGreenProjectsParams,
  };
}
