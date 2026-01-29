// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ads extends APIResource {
  /**
   * List All Generated Ad Assets
   */
  list(options?: RequestOptions): APIPromise<AdListResponse> {
    return this._client.get('/ai/ads', options);
  }

  /**
   * Generate High-Conversion Ad Copy
   */
  generateCopy(body: AdGenerateCopyParams, options?: RequestOptions): APIPromise<AdGenerateCopyResponse> {
    return this._client.post('/ai/ads/generate/copy', { body, ...options });
  }

  /**
   * Generate a Standard Video Ad with Veo 2.0
   */
  generateVideo(body: AdGenerateVideoParams, options?: RequestOptions): APIPromise<AdGenerateVideoResponse> {
    return this._client.post('/ai/ads/generate/video', { body, ...options });
  }

  /**
   * AI Campaign Efficiency Optimizer
   */
  optimizeCampaign(
    body: AdOptimizeCampaignParams,
    options?: RequestOptions,
  ): APIPromise<AdOptimizeCampaignResponse> {
    return this._client.post('/ai/ads/optimize', { body, ...options });
  }

  /**
   * Poll for Video Gen Status
   */
  retrieveOperationStatus(
    operationID: string,
    options?: RequestOptions,
  ): APIPromise<AdRetrieveOperationStatusResponse> {
    return this._client.get(path`/ai/ads/operations/${operationID}`, options);
  }
}

export interface AdListResponse {
  data?: Array<unknown>;
}

export interface AdGenerateCopyResponse {
  bodyText?: string;

  headlines?: Array<string>;
}

export interface AdGenerateVideoResponse {
  operationId?: string;
}

export interface AdOptimizeCampaignResponse {
  suggestedChanges?: Array<string>;
}

export interface AdRetrieveOperationStatusResponse {
  progress?: number;

  status?: string;

  videoUri?: string;
}

export interface AdGenerateCopyParams {
  productDescription: string;

  targetAudience: string;
}

export interface AdGenerateVideoParams {
  lengthSeconds: 15 | 30 | 60;

  /**
   * Visual description
   */
  prompt: string;

  style: 'Cinematic' | 'Minimalist' | 'Cyberpunk' | 'Professional';
}

export interface AdOptimizeCampaignParams {
  campaignData: unknown;
}

export declare namespace Ads {
  export {
    type AdListResponse as AdListResponse,
    type AdGenerateCopyResponse as AdGenerateCopyResponse,
    type AdGenerateVideoResponse as AdGenerateVideoResponse,
    type AdOptimizeCampaignResponse as AdOptimizeCampaignResponse,
    type AdRetrieveOperationStatusResponse as AdRetrieveOperationStatusResponse,
    type AdGenerateCopyParams as AdGenerateCopyParams,
    type AdGenerateVideoParams as AdGenerateVideoParams,
    type AdOptimizeCampaignParams as AdOptimizeCampaignParams,
  };
}
