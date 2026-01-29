// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class SmartContracts extends APIResource {
  /**
   * Deploy Financial Smart Contract
   *
   * @example
   * ```ts
   * await client.web3.smartContracts.deploy({
   *   abi: {},
   *   bytecode: 'bytecode',
   * });
   * ```
   */
  deploy(body: SmartContractDeployParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/web3/contracts/deploy', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SmartContractDeployParams {
  abi: unknown;

  bytecode: string;
}

export declare namespace SmartContracts {
  export { type SmartContractDeployParams as SmartContractDeployParams };
}
