// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RulesAPI from './rules';
import { RuleCreateParams, RuleListResponse, Rules } from './rules';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Fraud extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Real-time Transaction Fraud Analysis
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.risk.fraud.analyzeTransaction({
   *     transactionId: 'transactionId',
   *   });
   * ```
   */
  analyzeTransaction(
    body: FraudAnalyzeTransactionParams,
    options?: RequestOptions,
  ): APIPromise<FraudAnalyzeTransactionResponse> {
    return this._client.post('/corporate/risk/fraud/analyze', { body, ...options });
  }
}

export interface FraudAnalyzeTransactionResponse {
  decision?: 'APPROVE' | 'FLAG' | 'BLOCK';

  riskScore?: number;
}

export interface FraudAnalyzeTransactionParams {
  transactionId: string;
}

Fraud.Rules = Rules;

export declare namespace Fraud {
  export {
    type FraudAnalyzeTransactionResponse as FraudAnalyzeTransactionResponse,
    type FraudAnalyzeTransactionParams as FraudAnalyzeTransactionParams,
  };

  export {
    Rules as Rules,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
  };
}
