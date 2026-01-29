// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Track Loan Processing
   */
  retrieveStatus(appID: string, options?: RequestOptions): APIPromise<ApplicationRetrieveStatusResponse> {
    return this._client.get(path`/lending/applications/${appID}/status`, options);
  }
}

export interface ApplicationRetrieveStatusResponse {
  status?: string;

  underwriterQueuePos?: number;
}

export declare namespace Applications {
  export { type ApplicationRetrieveStatusResponse as ApplicationRetrieveStatusResponse };
}
