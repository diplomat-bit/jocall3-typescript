// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Register Real-time Event Hook
   *
   * @example
   * ```ts
   * await client.system.webhooks.create({
   *   events: ['transaction.created', 'login.alert'],
   *   url: 'https://example.com',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/system/webhooks', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List Registered Webhooks
   *
   * @example
   * ```ts
   * const webhooks = await client.system.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/system/webhooks', options);
  }

  /**
   * Delete Webhook
   *
   * @example
   * ```ts
   * await client.system.webhooks.delete('webhookId');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/system/webhooks/${webhookID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WebhookListResponse {
  data?: Array<unknown>;
}

export interface WebhookCreateParams {
  events: Array<string>;

  url: string;

  /**
   * HMAC signing secret
   */
  secret?: string;
}

export declare namespace Webhooks {
  export { type WebhookListResponse as WebhookListResponse, type WebhookCreateParams as WebhookCreateParams };
}
