// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Notifications extends APIResource {
  /**
   * List notification templates
   *
   * @example
   * ```ts
   * const response =
   *   await client.system.notifications.listTemplates();
   * ```
   */
  listTemplates(options?: RequestOptions): APIPromise<NotificationListTemplatesResponse> {
    return this._client.get('/system/notifications/templates', options);
  }

  /**
   * Send push notification
   *
   * @example
   * ```ts
   * await client.system.notifications.send({
   *   body: 'body',
   *   title: 'title',
   *   user_id: 'user_id',
   * });
   * ```
   */
  send(body: NotificationSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/system/notifications/push', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type NotificationListTemplatesResponse =
  Array<NotificationListTemplatesResponse.NotificationListTemplatesResponseItem>;

export namespace NotificationListTemplatesResponse {
  export interface NotificationListTemplatesResponseItem {
    id: string;

    channel: 'email' | 'push' | 'sms';

    name: string;

    body?: string;
  }
}

export interface NotificationSendParams {
  body: string;

  title: string;

  user_id: string;
}

export declare namespace Notifications {
  export {
    type NotificationListTemplatesResponse as NotificationListTemplatesResponse,
    type NotificationSendParams as NotificationSendParams,
  };
}
