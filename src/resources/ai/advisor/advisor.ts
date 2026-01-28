// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ToolsAPI from './tools';
import { ToolListParams, ToolListResponse, Tools } from './tools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Advisor extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * Initiates or continues a sophisticated conversation with Quantum, the AI
   * Advisor. Quantum can provide advanced financial insights, execute complex tasks
   * via an expanding suite of intelligent tools, and learn from user interactions to
   * offer hyper-personalized guidance.
   *
   * @example
   * ```ts
   * const response = await client.ai.advisor.chat();
   * ```
   */
  chat(body: AdvisorChatParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ai/advisor/chat', { body, ...options });
  }
}

export type AdvisorChatResponse = unknown;

export interface AdvisorChatParams {
  /**
   * Optional: The output from a tool function that the AI previously requested to be
   * executed.
   */
  functionResponse?: unknown;
}

Advisor.Tools = Tools;

export declare namespace Advisor {
  export { type AdvisorChatResponse as AdvisorChatResponse, type AdvisorChatParams as AdvisorChatParams };

  export { Tools as Tools, type ToolListResponse as ToolListResponse, type ToolListParams as ToolListParams };
}
