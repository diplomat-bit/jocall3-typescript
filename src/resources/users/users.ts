// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as PasswordResetAPI from './password-reset';
import {
  PasswordReset,
  PasswordResetConfirmParams,
  PasswordResetConfirmResponse,
  PasswordResetInitiateParams,
  PasswordResetInitiateResponse,
} from './password-reset';
import * as MeAPI from './me/me';
import { Me, MeRetrieveResponse } from './me/me';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Users extends APIResource {
  passwordReset: PasswordResetAPI.PasswordReset = new PasswordResetAPI.PasswordReset(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);

  login(body: UserLoginParams, options?: RequestOptions): APIPromise<UserLoginResponse> {
    return this._client.post('/users/login', { body, ...options });
  }

  logout(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/users/logout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  register(body: UserRegisterParams, options?: RequestOptions): APIPromise<UserRegisterResponse> {
    return this._client.post('/users/register', { body, ...options });
  }
}

export interface UserLoginResponse {
  accessToken: string;

  expiresIn?: number;

  refreshToken?: string;

  tokenType?: string;
}

export interface UserRegisterResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: Shared.Address;

  preferences?: { [key: string]: unknown };

  securityStatus?: UserRegisterResponse.SecurityStatus;
}

export namespace UserRegisterResponse {
  export interface SecurityStatus {
    lastLogin?: string;

    twoFactorEnabled?: boolean;
  }
}

export interface UserLoginParams {
  email: string;

  password: string;
}

export interface UserRegisterParams {
  email: string;

  name: string;

  password: string;
}

Users.PasswordReset = PasswordReset;
Users.Me = Me;

export declare namespace Users {
  export {
    type UserLoginResponse as UserLoginResponse,
    type UserRegisterResponse as UserRegisterResponse,
    type UserLoginParams as UserLoginParams,
    type UserRegisterParams as UserRegisterParams,
  };

  export {
    PasswordReset as PasswordReset,
    type PasswordResetConfirmResponse as PasswordResetConfirmResponse,
    type PasswordResetInitiateResponse as PasswordResetInitiateResponse,
    type PasswordResetConfirmParams as PasswordResetConfirmParams,
    type PasswordResetInitiateParams as PasswordResetInitiateParams,
  };

  export { Me as Me, type MeRetrieveResponse as MeRetrieveResponse };
}
