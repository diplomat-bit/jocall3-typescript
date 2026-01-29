// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Proposals extends APIResource {
  /**
   * Create New Multi-sig Financial Proposal
   *
   * @example
   * ```ts
   * await client.corporate.governance.proposals.create({
   *   actionType: 'TRANSFER_LIMIT_CHANGE',
   *   payload: {},
   *   title: 'title',
   * });
   * ```
   */
  create(body: ProposalCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/corporate/governance/proposals', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List Active Governance Proposals
   *
   * @example
   * ```ts
   * const proposals =
   *   await client.corporate.governance.proposals.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProposalListResponse> {
    return this._client.get('/corporate/governance/proposals', options);
  }

  /**
   * Cast Vote or Sign Transaction
   *
   * @example
   * ```ts
   * await client.corporate.governance.proposals.vote(
   *   'proposalId',
   *   { decision: 'APPROVE' },
   * );
   * ```
   */
  vote(proposalID: string, body: ProposalVoteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/corporate/governance/proposals/${proposalID}/vote`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProposalListResponse {
  data: Array<ProposalListResponse.Data>;
}

export namespace ProposalListResponse {
  export interface Data {
    id: string;

    requiredApprovals: number;

    status: 'PENDING' | 'APPROVED' | 'EXECUTED' | 'REJECTED';

    title: string;

    currentApprovals?: number;

    description?: string;

    expiresAt?: string;
  }
}

export interface ProposalCreateParams {
  actionType: 'TRANSFER_LIMIT_CHANGE' | 'NEW_ADMIN' | 'LARGE_PAYMENT';

  /**
   * The raw action data to be executed upon approval
   */
  payload: unknown;

  title: string;

  description?: string;

  votingPeriodHours?: number;
}

export interface ProposalVoteParams {
  decision: 'APPROVE' | 'REJECT';

  comment?: string;

  /**
   * Cryptographic signature if required
   */
  signature?: string;
}

export declare namespace Proposals {
  export {
    type ProposalListResponse as ProposalListResponse,
    type ProposalCreateParams as ProposalCreateParams,
    type ProposalVoteParams as ProposalVoteParams,
  };
}
