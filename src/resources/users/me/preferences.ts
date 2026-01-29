// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * Get User Personalization Preferences
   */
  retrieve(options?: RequestOptions): APIPromise<PreferenceRetrieveResponse> {
    return this._client.get('/users/me/preferences', options);
  }

  /**
   * Update User Personalization Preferences
   */
  update(
    body: PreferenceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferenceUpdateResponse> {
    return this._client.put('/users/me/preferences', { body, ...options });
  }
}

export interface PreferenceRetrieveResponse {
  aiInteractionMode?: 'proactive' | 'reactive' | 'silent';

  dataSharingConsent?: boolean;

  preferredLanguage?: string;

  theme?: string;
}

export interface PreferenceUpdateResponse {
  aiInteractionMode?: string;

  theme?: string;
}

export interface PreferenceUpdateParams {
  aiInteractionMode?: string;

  theme?: string;
}

export declare namespace Preferences {
  export {
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
