// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * List AI-Executable Financial Tools
   *
   * @example
   * ```ts
   * const tools = await client.ai.advisor.tools.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ToolListResponse> {
    return this._client.get('/ai/advisor/tools', options);
  }

  /**
   * Grant AI Execution Permission for Tool
   *
   * @example
   * ```ts
   * await client.ai.advisor.tools.enable('toolId');
   * ```
   */
  enable(toolID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/advisor/tools/${toolID}/enable`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ToolListResponse {
  data?: Array<unknown>;
}

export declare namespace Tools {
  export { type ToolListResponse as ToolListResponse };
}
