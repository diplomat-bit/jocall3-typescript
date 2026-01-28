// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BiometricsAPI from './biometrics';
import {
  BiometricRetrieveStatusResponse,
  BiometricVerifyParams,
  BiometricVerifyResponse,
  Biometrics,
} from './biometrics';
import * as DevicesAPI from './devices';
import { DeviceListParams, DeviceListResponse, Devices } from './devices';
import * as SecurityAPI from './security';
import { Security } from './security';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  biometrics: BiometricsAPI.Biometrics = new BiometricsAPI.Biometrics(this._client);

  /**
   * Fetches the complete and dynamically updated profile information for the
   * currently authenticated user, encompassing personal details, security status,
   * gamification level, loyalty points, and linked identity attributes.
   *
   * @example
   * ```ts
   * const me = await client.users.me.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }

  /**
   * Updates selected fields of the currently authenticated user's profile
   * information.
   *
   * @example
   * ```ts
   * const me = await client.users.me.update();
   * ```
   */
  update(
    body: MeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeUpdateResponse> {
    return this._client.put('/users/me', { body, ...options });
  }
}

export interface MeRetrieveResponse {
  address?: unknown;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeRetrieveResponse.Preferences;

  /**
   * Security-related status for the user account.
   */
  securityStatus?: unknown;
}

export namespace MeRetrieveResponse {
  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: unknown;
  }
}

export interface MeUpdateResponse {
  address?: unknown;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeUpdateResponse.Preferences;

  /**
   * Security-related status for the user account.
   */
  securityStatus?: unknown;
}

export namespace MeUpdateResponse {
  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: unknown;
  }
}

export interface MeUpdateParams {
  address?: unknown;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeUpdateParams.Preferences;
}

export namespace MeUpdateParams {
  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: unknown;
  }
}

Me.Security = Security;
Me.Devices = Devices;
Me.Biometrics = Biometrics;

export declare namespace Me {
  export {
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeUpdateParams as MeUpdateParams,
  };

  export { Security as Security };

  export {
    Devices as Devices,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
  };

  export {
    Biometrics as Biometrics,
    type BiometricRetrieveStatusResponse as BiometricRetrieveStatusResponse,
    type BiometricVerifyResponse as BiometricVerifyResponse,
    type BiometricVerifyParams as BiometricVerifyParams,
  };
}
