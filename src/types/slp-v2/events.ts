import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v13000 from '../v13000'

export const addDelegator =  {
    name: 'SlpV2.AddDelegator',
    /**
     * Add a delegator to the staking protocol.
     */
    v13000: new EventType(
        'SlpV2.AddDelegator',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator index.
             */
            delegatorIndex: sts.number(),
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
        })
    ),
}

export const removeDelegator =  {
    name: 'SlpV2.RemoveDelegator',
    /**
     * Remove a delegator from the staking protocol.
     */
    v13000: new EventType(
        'SlpV2.RemoveDelegator',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator index.
             */
            delegatorIndex: sts.number(),
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
        })
    ),
}

export const addValidator =  {
    name: 'SlpV2.AddValidator',
    /**
     * Add a validator to the staking protocol.
     */
    v13000: new EventType(
        'SlpV2.AddValidator',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
            /**
             * Validator account.
             */
            validator: v13000.Validator,
        })
    ),
}

export const removeValidator =  {
    name: 'SlpV2.RemoveValidator',
    /**
     * Remove a validator from the staking protocol.
     */
    v13000: new EventType(
        'SlpV2.RemoveValidator',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
            /**
             * Validator account.
             */
            validator: v13000.Validator,
        })
    ),
}

export const setConfiguration =  {
    name: 'SlpV2.SetConfiguration',
    /**
     * Set configuration for a specific staking protocol.
     */
    v13000: new EventType(
        'SlpV2.SetConfiguration',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * The staking protocol configuration.
             */
            configuration: v13000.ProtocolConfiguration,
        })
    ),
}

export const setLedger =  {
    name: 'SlpV2.SetLedger',
    /**
     * Set ledger for a specific delegator.
     */
    v13000: new EventType(
        'SlpV2.SetLedger',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
            /**
             * Ledger.
             */
            ledger: v13000.Type_461,
        })
    ),
}

export const sendXcmTask =  {
    name: 'SlpV2.SendXcmTask',
    /**
     * Send xcm task.
     */
    v13000: new EventType(
        'SlpV2.SendXcmTask',
        sts.struct({
            /**
             * Xcm Message Query id.
             */
            queryId: sts.option(() => sts.bigint()),
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
            /**
             * Xcm task.
             */
            task: v13000.XcmTask,
            /**
             * Pending confirmation status.
             */
            pendingStatus: sts.option(() => v13000.PendingStatus),
            /**
             * Destination.
             */
            destLocation: v13000.V4Location,
        })
    ),
}

export const notifyResponseReceived =  {
    name: 'SlpV2.NotifyResponseReceived',
    /**
     * Xcm task response received.
     */
    v13000: new EventType(
        'SlpV2.NotifyResponseReceived',
        sts.struct({
            /**
             * Xcm responder.
             */
            responder: v13000.V4Location,
            /**
             * Pending confirmation status.
             */
            pendingStatus: v13000.PendingStatus,
        })
    ),
}

export const timeUnitUpdated =  {
    name: 'SlpV2.TimeUnitUpdated',
    /**
     * Time unit updated.
     */
    v13000: new EventType(
        'SlpV2.TimeUnitUpdated',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Time unit.
             */
            timeUnit: v13000.TimeUnit,
        })
    ),
}

export const tokenExchangeRateUpdated =  {
    name: 'SlpV2.TokenExchangeRateUpdated',
    /**
     * Token exchange rate updated.
     */
    v13000: new EventType(
        'SlpV2.TokenExchangeRateUpdated',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator account.
             */
            delegator: v13000.Delegator,
            /**
             * The type of token that the fee is charged to
             */
            protocolFeeCurrencyId: v13000.CurrencyId,
            /**
             * The amount of the fee charged to the protocol
             */
            protocolFee: sts.bigint(),
            /**
             * Amount of exchange rates updated
             */
            amount: sts.bigint(),
        })
    ),
}

export const transferTo =  {
    name: 'SlpV2.TransferTo',
    /**
     * Transfer the staking token to remote chain.
     */
    v13000: new EventType(
        'SlpV2.TransferTo',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Bifrost Account
             */
            from: v13000.AccountId32,
            /**
             * Delegator account.
             */
            to: v13000.Delegator,
            /**
             * Amount
             */
            amount: sts.bigint(),
        })
    ),
}

export const transferBack =  {
    name: 'SlpV2.TransferBack',
    /**
     * Transfer the staking token back from remote chain.
     */
    v13000: new EventType(
        'SlpV2.TransferBack',
        sts.struct({
            /**
             * Slp supports staking protocols.
             */
            stakingProtocol: v13000.StakingProtocol,
            /**
             * Delegator account.
             */
            from: v13000.Delegator,
            /**
             * Bifrost Account.
             */
            to: v13000.AccountId32,
            /**
             * Amount
             */
            amount: sts.bigint(),
        })
    ),
}
