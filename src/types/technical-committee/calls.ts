import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v5 from '../v5'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v15 from '../v15'
import * as v17 from '../v17'
import * as v18 from '../v18'
import * as v23 from '../v23'
import * as v24 from '../v24'
import * as v25 from '../v25'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v30 from '../v30'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9270 from '../v9270'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const setMembers =  {
    name: 'TechnicalCommittee.set_members',
    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    v0: new CallType(
        'TechnicalCommittee.set_members',
        sts.struct({
            newMembers: sts.array(() => v0.AccountId),
            prime: sts.option(() => v0.AccountId),
            oldCount: v0.MemberCount,
        })
    ),
}

export const execute =  {
    name: 'TechnicalCommittee.execute',
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v0: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v0.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v5: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v5.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v6: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v6.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v7: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v7.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v9: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v10: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v10.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v11: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v11.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v13: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v13.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v14: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v14.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v15: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v15.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v17: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v17.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v18: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v18.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v23: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v23.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v24: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v24.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v25: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v25.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v26: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v26.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v28: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v28.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v29: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v29.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v30: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v30.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v9050: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9050.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v9080: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9080.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v9090: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9090.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    v9100: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9100.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9110: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9110.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9140: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9140.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9170: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9170.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9180: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9180.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9190: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9190.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9220: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9220.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9230: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9230.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9250: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9250.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9270: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9270.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9280: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9280.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9291: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9291.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9300: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9300.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9340: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9340.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9370: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9370.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    v9420: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9420.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    v9430: new CallType(
        'TechnicalCommittee.execute',
        sts.struct({
            proposal: v9430.Call,
            lengthBound: sts.number(),
        })
    ),
}

export const propose =  {
    name: 'TechnicalCommittee.propose',
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v0: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v0.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v5: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v5.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v6: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v6.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v7: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v7.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v9: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v10: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v10.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v11: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v11.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v13: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v13.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v14: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v14.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v15: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v15.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v17: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v17.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v18: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v18.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v23: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v23.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v24: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v24.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v25: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v25.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v26: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v26.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v28: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v28.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v29: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v29.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v30: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v30.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v9050: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9050.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v9080: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9080.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v9090: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9090.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    v9100: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9100.Proposal,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9110: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9110.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9140: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9140.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9170: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9170.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9180: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9180.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9190: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9190.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9220: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9220.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9230: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9230.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9250: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9250.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9270: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9270.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9280: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9280.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9291: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9291.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9300: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9300.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9340: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9340.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9370: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9370.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    v9420: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9420.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    v9430: new CallType(
        'TechnicalCommittee.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9430.Call,
            lengthBound: sts.number(),
        })
    ),
}

export const vote =  {
    name: 'TechnicalCommittee.vote',
    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    v0: new CallType(
        'TechnicalCommittee.vote',
        sts.struct({
            proposal: v0.Hash,
            index: sts.number(),
            approve: sts.boolean(),
        })
    ),
}

export const close =  {
    name: 'TechnicalCommittee.close',
    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    v0: new CallType(
        'TechnicalCommittee.close',
        sts.struct({
            proposal: v0.Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        })
    ),
    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    v5: new CallType(
        'TechnicalCommittee.close',
        sts.struct({
            proposalHash: v5.Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        })
    ),
    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    v9340: new CallType(
        'TechnicalCommittee.close',
        sts.struct({
            proposalHash: v9340.H256,
            index: sts.number(),
            proposalWeightBound: v9340.Weight,
            lengthBound: sts.number(),
        })
    ),
}

export const disapproveProposal =  {
    name: 'TechnicalCommittee.disapprove_proposal',
    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  Base Weight: .49 * P
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    v5: new CallType(
        'TechnicalCommittee.disapprove_proposal',
        sts.struct({
            proposalHash: v5.Hash,
        })
    ),
}

export const closeOldWeight =  {
    name: 'TechnicalCommittee.close_old_weight',
    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    v9340: new CallType(
        'TechnicalCommittee.close_old_weight',
        sts.struct({
            proposalHash: v9340.H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        })
    ),
}
