// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RulesAPI from './rules';
import { RuleCreateParams, RuleListResponse, RuleUpdateParams, Rules } from './rules';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Fraud extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Real-time Transaction Fraud Analysis
   *
   * @example
   * ```ts
   * const response = await client.corporate.risk.fraud.analyze({
   *   transactionId: 'transactionId',
   * });
   * ```
   */
  analyze(body: FraudAnalyzeParams, options?: RequestOptions): APIPromise<FraudAnalyzeResponse> {
    return this._client.post('/corporate/risk/fraud/analyze', { body, ...options });
  }
}

export interface FraudAnalyzeResponse {
  decision?: 'APPROVE' | 'FLAG' | 'BLOCK';

  riskScore?: number;
}

export interface FraudAnalyzeParams {
  transactionId: string;
}

Fraud.Rules = Rules;

export declare namespace Fraud {
  export { type FraudAnalyzeResponse as FraudAnalyzeResponse, type FraudAnalyzeParams as FraudAnalyzeParams };

  export {
    Rules as Rules,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };
}
