// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Analysis extends APIResource {
  /**
   * Generate Automated Competitor Landscape
   */
  competitorScan(
    body: AnalysisCompetitorScanParams,
    options?: RequestOptions,
  ): APIPromise<AnalysisCompetitorScanResponse> {
    return this._client.post('/ai/incubator/analysis/competitors', { body, ...options });
  }

  /**
   * Generate AI SWOT Analysis
   */
  swot(body: AnalysisSwotParams, options?: RequestOptions): APIPromise<AnalysisSwotResponse> {
    return this._client.post('/ai/incubator/analysis/swot', { body, ...options });
  }
}

export interface AnalysisCompetitorScanResponse {
  competitors?: Array<unknown>;

  marketShareAnalysis?: string;
}

export interface AnalysisSwotResponse {
  strengths?: Array<string>;

  weaknesses?: Array<string>;
}

export interface AnalysisCompetitorScanParams {
  industry: string;

  niche: string;
}

export interface AnalysisSwotParams {
  businessContext: string;
}

export declare namespace Analysis {
  export {
    type AnalysisCompetitorScanResponse as AnalysisCompetitorScanResponse,
    type AnalysisSwotResponse as AnalysisSwotResponse,
    type AnalysisCompetitorScanParams as AnalysisCompetitorScanParams,
    type AnalysisSwotParams as AnalysisSwotParams,
  };
}
