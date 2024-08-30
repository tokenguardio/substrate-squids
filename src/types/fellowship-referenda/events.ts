import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'

export const submitted =  {
    name: 'FellowshipReferenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    v982: new EventType(
        'FellowshipReferenda.Submitted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: v982.Bounded,
        })
    ),
}

export const decisionDepositPlaced =  {
    name: 'FellowshipReferenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    v982: new EventType(
        'FellowshipReferenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: v982.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionDepositRefunded =  {
    name: 'FellowshipReferenda.DecisionDepositRefunded',
    /**
     * The decision deposit has been refunded.
     */
    v982: new EventType(
        'FellowshipReferenda.DecisionDepositRefunded',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: v982.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const depositSlashed =  {
    name: 'FellowshipReferenda.DepositSlashed',
    /**
     * A deposit has been slashaed.
     */
    v982: new EventType(
        'FellowshipReferenda.DepositSlashed',
        sts.struct({
            /**
             * The account who placed the deposit.
             */
            who: v982.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionStarted =  {
    name: 'FellowshipReferenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    v982: new EventType(
        'FellowshipReferenda.DecisionStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: v982.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: v982.Type_429,
        })
    ),
}

export const confirmStarted =  {
    name: 'FellowshipReferenda.ConfirmStarted',
    v982: new EventType(
        'FellowshipReferenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted =  {
    name: 'FellowshipReferenda.ConfirmAborted',
    v982: new EventType(
        'FellowshipReferenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed =  {
    name: 'FellowshipReferenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    v982: new EventType(
        'FellowshipReferenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_429,
        })
    ),
}

export const approved =  {
    name: 'FellowshipReferenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    v982: new EventType(
        'FellowshipReferenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected =  {
    name: 'FellowshipReferenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    v982: new EventType(
        'FellowshipReferenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_429,
        })
    ),
}

export const timedOut =  {
    name: 'FellowshipReferenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    v982: new EventType(
        'FellowshipReferenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_429,
        })
    ),
}

export const cancelled =  {
    name: 'FellowshipReferenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v982: new EventType(
        'FellowshipReferenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_429,
        })
    ),
}

export const killed =  {
    name: 'FellowshipReferenda.Killed',
    /**
     * A referendum has been killed.
     */
    v982: new EventType(
        'FellowshipReferenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_429,
        })
    ),
}

export const submissionDepositRefunded =  {
    name: 'FellowshipReferenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    v982: new EventType(
        'FellowshipReferenda.SubmissionDepositRefunded',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: v982.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const metadataSet =  {
    name: 'FellowshipReferenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    v982: new EventType(
        'FellowshipReferenda.MetadataSet',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: v982.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'FellowshipReferenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    v982: new EventType(
        'FellowshipReferenda.MetadataCleared',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: v982.H256,
        })
    ),
}
