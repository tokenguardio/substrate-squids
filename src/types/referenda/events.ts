import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'

export const submitted =  {
    name: 'Referenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    v982: new EventType(
        'Referenda.Submitted',
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
    name: 'Referenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    v982: new EventType(
        'Referenda.DecisionDepositPlaced',
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
    name: 'Referenda.DecisionDepositRefunded',
    /**
     * The decision deposit has been refunded.
     */
    v982: new EventType(
        'Referenda.DecisionDepositRefunded',
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
    name: 'Referenda.DepositSlashed',
    /**
     * A deposit has been slashaed.
     */
    v982: new EventType(
        'Referenda.DepositSlashed',
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
    name: 'Referenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    v982: new EventType(
        'Referenda.DecisionStarted',
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
            tally: v982.Type_371,
        })
    ),
}

export const confirmStarted =  {
    name: 'Referenda.ConfirmStarted',
    v982: new EventType(
        'Referenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted =  {
    name: 'Referenda.ConfirmAborted',
    v982: new EventType(
        'Referenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed =  {
    name: 'Referenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    v982: new EventType(
        'Referenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_371,
        })
    ),
}

export const approved =  {
    name: 'Referenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    v982: new EventType(
        'Referenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected =  {
    name: 'Referenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    v982: new EventType(
        'Referenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_371,
        })
    ),
}

export const timedOut =  {
    name: 'Referenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    v982: new EventType(
        'Referenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_371,
        })
    ),
}

export const cancelled =  {
    name: 'Referenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v982: new EventType(
        'Referenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_371,
        })
    ),
}

export const killed =  {
    name: 'Referenda.Killed',
    /**
     * A referendum has been killed.
     */
    v982: new EventType(
        'Referenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v982.Type_371,
        })
    ),
}

export const submissionDepositRefunded =  {
    name: 'Referenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    v982: new EventType(
        'Referenda.SubmissionDepositRefunded',
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
    name: 'Referenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    v982: new EventType(
        'Referenda.MetadataSet',
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
    name: 'Referenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    v982: new EventType(
        'Referenda.MetadataCleared',
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
