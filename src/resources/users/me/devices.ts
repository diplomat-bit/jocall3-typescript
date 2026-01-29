// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Devices extends APIResource {
  /**
   * List Connected Devices
   */
  list(options?: RequestOptions): APIPromise<DeviceListResponse> {
    return this._client.get('/users/me/devices', options);
  }

  /**
   * De-register a Device
   */
  deregister(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/me/devices/${deviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Register New Trusted Device
   */
  register(body: DeviceRegisterParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/users/me/devices', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DeviceListResponse {
  data?: Array<DeviceListResponse.Data>;
}

export namespace DeviceListResponse {
  export interface Data {
    id?: string;

    os?: string;

    trustLevel?: 'trusted' | 'untrusted';

    type?: string;
  }
}

export interface DeviceRegisterParams {
  deviceId: string;

  type: string;

  pushToken?: string;
}

export declare namespace Devices {
  export { type DeviceListResponse as DeviceListResponse, type DeviceRegisterParams as DeviceRegisterParams };
}
