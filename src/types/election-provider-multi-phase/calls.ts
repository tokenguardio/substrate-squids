import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v29 from '../v29'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9110 from '../v9110'
import * as v9180 from '../v9180'

export const submitUnsigned =  {
    name: 'ElectionProviderMultiPhase.submit_unsigned',
    /**
     *  Submit a solution for the unsigned phase.
     * 
     *  The dispatch origin fo this call must be __none__.
     * 
     *  This submission is checked on the fly. Moreover, this unsigned solution is only
     *  validated when submitted to the pool from the **local** node. Effectively, this means
     *  that only active validators can submit this transaction when authoring a block (similar
     *  to an inherent).
     * 
     *  To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     *  panic if the solution submitted by the validator is invalid in any way, effectively
     *  putting their authoring reward at risk.
     * 
     *  No deposit or reward is associated with this submission.
     */
    v29: new CallType(
        'ElectionProviderMultiPhase.submit_unsigned',
        sts.struct({
            solution: v29.RawSolution,
            witness: v29.SolutionOrSnapshotSize,
        })
    ),
    /**
     *  Submit a solution for the unsigned phase.
     * 
     *  The dispatch origin fo this call must be __none__.
     * 
     *  This submission is checked on the fly. Moreover, this unsigned solution is only
     *  validated when submitted to the pool from the **local** node. Effectively, this means
     *  that only active validators can submit this transaction when authoring a block (similar
     *  to an inherent).
     * 
     *  To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     *  panic if the solution submitted by the validator is invalid in any way, effectively
     *  putting their authoring reward at risk.
     * 
     *  No deposit or reward is associated with this submission.
     */
    v9100: new CallType(
        'ElectionProviderMultiPhase.submit_unsigned',
        sts.struct({
            rawSolution: v9100.RawSolution,
            witness: v9100.SolutionOrSnapshotSize,
        })
    ),
    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    v9110: new CallType(
        'ElectionProviderMultiPhase.submit_unsigned',
        sts.struct({
            rawSolution: v9110.RawSolution,
            witness: v9110.SolutionOrSnapshotSize,
        })
    ),
    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    v9180: new CallType(
        'ElectionProviderMultiPhase.submit_unsigned',
        sts.struct({
            rawSolution: v9180.RawSolution,
            witness: v9180.SolutionOrSnapshotSize,
        })
    ),
}

export const setMinimumUntrustedScore =  {
    name: 'ElectionProviderMultiPhase.set_minimum_untrusted_score',
    /**
     *  Set a new value for `MinimumUntrustedScore`.
     * 
     *  Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     *  This check can be turned off by setting the value to `None`.
     */
    v9050: new CallType(
        'ElectionProviderMultiPhase.set_minimum_untrusted_score',
        sts.struct({
            maybeNextScore: sts.option(() => v9050.ElectionScore),
        })
    ),
    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    v9180: new CallType(
        'ElectionProviderMultiPhase.set_minimum_untrusted_score',
        sts.struct({
            maybeNextScore: sts.option(() => v9180.ElectionScore),
        })
    ),
}

export const setEmergencyElectionResult =  {
    name: 'ElectionProviderMultiPhase.set_emergency_election_result',
    /**
     *  Set a solution in the queue, to be handed out to the client of this pallet in the next
     *  call to `ElectionProvider::elect`.
     * 
     *  This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     *  The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     *  feasibility check itself can in principle cause the election process to fail (due to
     *  memory/weight constrains).
     */
    v9050: new CallType(
        'ElectionProviderMultiPhase.set_emergency_election_result',
        sts.struct({
            solution: v9050.ReadySolution,
        })
    ),
    /**
     *  Set a solution in the queue, to be handed out to the client of this pallet in the next
     *  call to `ElectionProvider::elect`.
     * 
     *  This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     *  The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     *  feasibility check itself can in principle cause the election process to fail (due to
     *  memory/weight constrains).
     */
    v9090: new CallType(
        'ElectionProviderMultiPhase.set_emergency_election_result',
        sts.struct({
            supports: sts.array(() => sts.tuple(() => [v9090.AccountId, v9090.SolutionSupport])),
        })
    ),
}

export const submit =  {
    name: 'ElectionProviderMultiPhase.submit',
    /**
     *  Submit a solution for the signed phase.
     * 
     *  The dispatch origin fo this call must be __signed__.
     * 
     *  The solution is potentially queued, based on the claimed score and processed at the end
     *  of the signed phase.
     * 
     *  A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     *  might be rewarded, slashed, or get all or a part of the deposit back.
     * 
     *  # <weight>
     *  Queue size must be provided as witness data.
     *  # </weight>
     */
    v9080: new CallType(
        'ElectionProviderMultiPhase.submit',
        sts.struct({
            solution: v9080.RawSolution,
            numSignedSubmissions: sts.number(),
        })
    ),
    /**
     *  Submit a solution for the signed phase.
     * 
     *  The dispatch origin fo this call must be __signed__.
     * 
     *  The solution is potentially queued, based on the claimed score and processed at the end
     *  of the signed phase.
     * 
     *  A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     *  might be rewarded, slashed, or get all or a part of the deposit back.
     * 
     *  # <weight>
     *  Queue size must be provided as witness data.
     *  # </weight>
     */
    v9100: new CallType(
        'ElectionProviderMultiPhase.submit',
        sts.struct({
            rawSolution: v9100.RawSolution,
            numSignedSubmissions: sts.number(),
        })
    ),
    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     * 
     * # <weight>
     * Queue size must be provided as witness data.
     * # </weight>
     */
    v9110: new CallType(
        'ElectionProviderMultiPhase.submit',
        sts.struct({
            rawSolution: v9110.RawSolution,
            numSignedSubmissions: sts.number(),
        })
    ),
    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    v9180: new CallType(
        'ElectionProviderMultiPhase.submit',
        sts.struct({
            rawSolution: v9180.RawSolution,
        })
    ),
}

export const governanceFallback =  {
    name: 'ElectionProviderMultiPhase.governance_fallback',
    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    v9170: new CallType(
        'ElectionProviderMultiPhase.governance_fallback',
        sts.struct({
            maybeMaxVoters: sts.option(() => sts.number()),
            maybeMaxTargets: sts.option(() => sts.number()),
        })
    ),
}
