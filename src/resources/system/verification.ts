// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Verification extends APIResource {
  /**
   * Compare biometric samples
   *
   * @example
   * ```ts
   * await client.system.verification.compareBiometrics({
   *   sample_a: 'sample_a',
   *   sample_b: 'sample_b',
   * });
   * ```
   */
  compareBiometrics(body: VerificationCompareBiometricsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/system/verification/biometric-comparison', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verify identity document
   *
   * @example
   * ```ts
   * await client.system.verification.verifyDocument({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  verifyDocument(body: VerificationVerifyDocumentParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/system/verification/document',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface VerificationCompareBiometricsParams {
  sample_a: string;

  sample_b: string;
}

export interface VerificationVerifyDocumentParams {
  file: Uploadable;

  type?: string;
}

export declare namespace Verification {
  export {
    type VerificationCompareBiometricsParams as VerificationCompareBiometricsParams,
    type VerificationVerifyDocumentParams as VerificationVerifyDocumentParams,
  };
}
