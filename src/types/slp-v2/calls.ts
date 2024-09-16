import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v13000 from '../v13000'

export const setProtocolConfiguration =  {
    name: 'SlpV2.set_protocol_configuration',
    /**
     * Set the XCM fee for a specific XCM task.
     * 
     * Can only be called by governance
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `configuration`: The staking protocol configuration.
     */
    v13000: new CallType(
        'SlpV2.set_protocol_configuration',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            configuration: v13000.ProtocolConfiguration,
        })
    ),
}

export const addDelegator =  {
    name: 'SlpV2.add_delegator',
    /**
     * Add a delegator to the staking protocol.
     * 
     * Can only be called by governance
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: If delegator is None, the delegator will be derived from sovereign
     *   account.
     */
    v13000: new CallType(
        'SlpV2.add_delegator',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: sts.option(() => v13000.Delegator),
        })
    ),
}

export const removeDelegator =  {
    name: 'SlpV2.remove_delegator',
    /**
     * Remove a delegator from the staking protocol.
     * 
     * Can only be called by governance
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Delegator that need to be removed.
     */
    v13000: new CallType(
        'SlpV2.remove_delegator',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
        })
    ),
}

export const addValidator =  {
    name: 'SlpV2.add_validator',
    /**
     * Add a validator to the staking protocol.
     * 
     * Can only be called by governance
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     * - `validator`: Validator that need to be added.
     */
    v13000: new CallType(
        'SlpV2.add_validator',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
            validator: v13000.Validator,
        })
    ),
}

export const removeValidator =  {
    name: 'SlpV2.remove_validator',
    /**
     * Remove a validator from the staking protocol.
     * 
     * Can only be called by governance
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     * - `validator`: Validator that need to be removed.
     */
    v13000: new CallType(
        'SlpV2.remove_validator',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
            validator: v13000.Validator,
        })
    ),
}

export const setLedger =  {
    name: 'SlpV2.set_ledger',
    /**
     * Set the update token exchange rate limit for a specific staking protocol.
     * 
     * Can only be called by governance.
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     * - `ledger`: Ledger that need to be set.
     */
    v13000: new CallType(
        'SlpV2.set_ledger',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
            ledger: v13000.Type_461,
        })
    ),
}

export const transferTo =  {
    name: 'SlpV2.transfer_to',
    /**
     * Transfer the staking token to remote chain.
     * Transfer the free balance of the Entrance Account to the selected delegator.
     * 
     * Can be called by governance or staking protocol operator.
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     */
    v13000: new CallType(
        'SlpV2.transfer_to',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
        })
    ),
}

export const transferBack =  {
    name: 'SlpV2.transfer_back',
    /**
     * Transfer the staking token back from remote chain.
     * Transfer the amount of tokens from the selected delegator back to the entrance account.
     * 
     * Can be called by governance or staking protocol operator.
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     * - `amount`: The amount of tokens to transfer back.
     */
    v13000: new CallType(
        'SlpV2.transfer_back',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
            amount: sts.bigint(),
        })
    ),
}

export const updateOngoingTimeUnit =  {
    name: 'SlpV2.update_ongoing_time_unit',
    /**
     * Update the ongoing time unit for a specific staking protocol.
     * Update frequency controlled by update_time_unit_interval.
     * Less than update_time_unit_interval will report an error.
     * 
     * Can be called by governance or staking protocol operator.
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `time_uint_option`: If time_uint is None, the ongoing time unit will be increased by
     *   one. Otherwise, the ongoing time unit will be updated to the specified time unit.
     */
    v13000: new CallType(
        'SlpV2.update_ongoing_time_unit',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            timeUintOption: sts.option(() => v13000.TimeUnit),
        })
    ),
}

export const updateTokenExchangeRate =  {
    name: 'SlpV2.update_token_exchange_rate',
    /**
     * Update the token exchange rate for a specific staking protocol.
     * Update frequency controlled by update_exchange_rate_interval.
     * Amount max update for token pool * max_update_token_exchange_rate.
     * 
     * Can be called by governance or staking protocol operator.
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     * - `amount`: The amount of tokens to update the token exchange rate.
     */
    v13000: new CallType(
        'SlpV2.update_token_exchange_rate',
        sts.struct({
            stakingProtocol: v13000.StakingProtocol,
            delegator: v13000.Delegator,
            amount: sts.bigint(),
        })
    ),
}

export const astarDappStaking =  {
    name: 'SlpV2.astar_dapp_staking',
    /**
     * Manipulate a delegator to perform Dapp staking related operations.
     * 
     * Can be called by governance or staking protocol operator.
     * 
     * Parameters
     * - `staking_protocol`: Slp supports staking protocols.
     * - `delegator`: Select the delegator which is existed.
     * - `task`: The Dapp staking task.
     */
    v13000: new CallType(
        'SlpV2.astar_dapp_staking',
        sts.struct({
            delegator: v13000.Delegator,
            task: v13000.DappStaking,
        })
    ),
}

export const notifyAstarDappStaking =  {
    name: 'SlpV2.notify_astar_dapp_staking',
    /**
     * Processing Xcm message execution results.
     * 
     * Can be called by governance or xcm origin.
     */
    v13000: new CallType(
        'SlpV2.notify_astar_dapp_staking',
        sts.struct({
            queryId: sts.bigint(),
            response: v13000.V4Response,
        })
    ),
}
