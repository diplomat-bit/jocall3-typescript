// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Models extends APIResource {
  /**
   * Start a model fine-tuning job
   */
  fineTune(body: ModelFineTuneParams, options?: RequestOptions): APIPromise<ModelFineTuneResponse> {
    return this._client.post('/ai/models/fine-tune', { body, ...options });
  }

  /**
   * List supported AI model versions
   */
  listVersions(options?: RequestOptions): APIPromise<ModelListVersionsResponse> {
    return this._client.get('/ai/models/versions', options);
  }
}

export interface ModelFineTuneResponse {
  job_id?: string;
}

export interface ModelListVersionsResponse {
  models?: Array<ModelListVersionsResponse.Model>;
}

export namespace ModelListVersionsResponse {
  export interface Model {
    modelId: string;

    version: string;
  }
}

export interface ModelFineTuneParams {
  base_model: string;

  training_data_url: string;

  hyperparameters?: unknown;
}

export declare namespace Models {
  export {
    type ModelFineTuneResponse as ModelFineTuneResponse,
    type ModelListVersionsResponse as ModelListVersionsResponse,
    type ModelFineTuneParams as ModelFineTuneParams,
  };
}
