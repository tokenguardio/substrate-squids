import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v952 from '../v952'
import * as v968 from '../v968'

export const validationFunctionStored =  {
    name: 'ParachainSystem.ValidationFunctionStored',
    /**
     * The validation function has been scheduled to apply.
     */
    v932: new EventType(
        'ParachainSystem.ValidationFunctionStored',
        sts.unit()
    ),
}

export const validationFunctionApplied =  {
    name: 'ParachainSystem.ValidationFunctionApplied',
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    v932: new EventType(
        'ParachainSystem.ValidationFunctionApplied',
        sts.number()
    ),
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    v952: new EventType(
        'ParachainSystem.ValidationFunctionApplied',
        sts.struct({
            relayChainBlockNum: sts.number(),
        })
    ),
}

export const validationFunctionDiscarded =  {
    name: 'ParachainSystem.ValidationFunctionDiscarded',
    /**
     * The relay-chain aborted the upgrade process.
     */
    v932: new EventType(
        'ParachainSystem.ValidationFunctionDiscarded',
        sts.unit()
    ),
}

export const upgradeAuthorized =  {
    name: 'ParachainSystem.UpgradeAuthorized',
    /**
     * An upgrade has been authorized.
     */
    v932: new EventType(
        'ParachainSystem.UpgradeAuthorized',
        v932.H256
    ),
    /**
     * An upgrade has been authorized.
     */
    v952: new EventType(
        'ParachainSystem.UpgradeAuthorized',
        sts.struct({
            codeHash: v952.H256,
        })
    ),
}

export const downwardMessagesReceived =  {
    name: 'ParachainSystem.DownwardMessagesReceived',
    /**
     * Some downward messages have been received and will be processed.
     * \[ count \]
     */
    v932: new EventType(
        'ParachainSystem.DownwardMessagesReceived',
        sts.number()
    ),
    /**
     * Some downward messages have been received and will be processed.
     */
    v952: new EventType(
        'ParachainSystem.DownwardMessagesReceived',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const downwardMessagesProcessed =  {
    name: 'ParachainSystem.DownwardMessagesProcessed',
    /**
     * Downward messages were processed using the given weight.
     * \[ weight_used, result_mqc_head \]
     */
    v932: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.tuple([sts.bigint(), v932.H256])
    ),
    /**
     * Downward messages were processed using the given weight.
     */
    v952: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.struct({
            weightUsed: sts.bigint(),
            dmqHead: v952.H256,
        })
    ),
    /**
     * Downward messages were processed using the given weight.
     */
    v968: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.struct({
            weightUsed: v968.Weight,
            dmqHead: v968.H256,
        })
    ),
}

export const upwardMessageSent =  {
    name: 'ParachainSystem.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    v972: new EventType(
        'ParachainSystem.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}
