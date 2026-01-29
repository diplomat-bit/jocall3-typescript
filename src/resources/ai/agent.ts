// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Agent extends APIResource {
  /**
   * List Quantum Agent Capabilities
   *
   * @example
   * ```ts
   * const response = await client.ai.agent.getCapabilities();
   * ```
   */
  getCapabilities(options?: RequestOptions): APIPromise<AgentGetCapabilitiesResponse> {
    return this._client.get('/ai/agent/capabilities', options);
  }

  /**
   * Retrieve Current System System Prompts
   *
   * @example
   * ```ts
   * const response = await client.ai.agent.getPrompts();
   * ```
   */
  getPrompts(options?: RequestOptions): APIPromise<AgentGetPromptsResponse> {
    return this._client.get('/ai/agent/prompts', options);
  }

  /**
   * Update System Instructions for Gemini Engine
   *
   * @example
   * ```ts
   * await client.ai.agent.updatePrompts({
   *   systemPrompt: 'systemPrompt',
   * });
   * ```
   */
  updatePrompts(body: AgentUpdatePromptsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/ai/agent/prompts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AgentGetCapabilitiesResponse {
  data?: Array<AgentGetCapabilitiesResponse.Data>;
}

export namespace AgentGetCapabilitiesResponse {
  export interface Data {
    description?: string;

    enabled?: boolean;

    name?: string;

    requiresHumanApproval?: boolean;
  }
}

export interface AgentGetPromptsResponse {
  systemPrompt?: string;

  version?: string;
}

export interface AgentUpdatePromptsParams {
  systemPrompt: string;
}

export declare namespace Agent {
  export {
    type AgentGetCapabilitiesResponse as AgentGetCapabilitiesResponse,
    type AgentGetPromptsResponse as AgentGetPromptsResponse,
    type AgentUpdatePromptsParams as AgentUpdatePromptsParams,
  };
}
