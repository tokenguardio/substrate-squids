import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v4 from '../v4'
import * as v12 from '../v12'
import * as v16 from '../v16'
import * as v17 from '../v17'
import * as v33 from '../v33'
import * as v49 from '../v49'
import * as v77 from '../v77'

export const register =  {
    name: 'DappsStaking.register',
    /**
     * register contract into staking targets.
     * contract_id should be ink! or evm contract.
     * 
     * Any user can call this function.
     * However, caller have to have deposit amount.
     */
    v4: new CallType(
        'DappsStaking.register',
        sts.struct({
            contractId: v4.SmartContract,
        })
    ),
    /**
     * Used to register contract for dapps staking.
     * The origin account used is treated as the `developer` account.
     * 
     * Depending on the pallet configuration/state it is possible that developer needs to be whitelisted prior to registration.
     * 
     * As part of this call, `RegisterDeposit` will be reserved from devs account.
     */
    v33: new CallType(
        'DappsStaking.register',
        sts.struct({
            developer: v33.AccountId32,
            contractId: v33.SmartContract,
        })
    ),
}

export const unregister =  {
    name: 'DappsStaking.unregister',
    /**
     * Unregister existing contract from dapps staking
     * 
     * This must be called by the developer who registered the contract.
     * 
     * Warning: After this action contract can not be assigned again.
     */
    v4: new CallType(
        'DappsStaking.unregister',
        sts.struct({
            contractId: v4.SmartContract,
        })
    ),
}

export const bondAndStake =  {
    name: 'DappsStaking.bond_and_stake',
    /**
     * Lock up and stake balance of the origin account.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`
     * unless account already has bonded value equal or more than 'minimum_balance'.
     * 
     * The dispatch origin for this call must be _Signed_ by the staker's account.
     * 
     * Effects of staking will be felt at the beginning of the next era.
     * 
     */
    v4: new CallType(
        'DappsStaking.bond_and_stake',
        sts.struct({
            contractId: v4.SmartContract,
            value: sts.bigint(),
        })
    ),
}

export const unbondUnstakeAndWithdraw =  {
    name: 'DappsStaking.unbond_unstake_and_withdraw',
    /**
     * Unbond, unstake and withdraw balance from the contract.
     * 
     * Value will be unlocked for the user.
     * 
     * In case remaining staked balance on contract is below minimum staking amount,
     * entire stake for that contract will be unstaked.
     * 
     */
    v4: new CallType(
        'DappsStaking.unbond_unstake_and_withdraw',
        sts.struct({
            contractId: v4.SmartContract,
            value: sts.bigint(),
        })
    ),
}

export const claim =  {
    name: 'DappsStaking.claim',
    /**
     * claim the rewards earned by contract_id.
     * All stakers and developer for this contract will be paid out with single call.
     * claim is valid for all unclaimed eras but not longer than history_depth().
     * Any reward older than history_depth() will go to Treasury.
     * Any user can call this function.
     */
    v4: new CallType(
        'DappsStaking.claim',
        sts.struct({
            contractId: v4.SmartContract,
            era: sts.number(),
        })
    ),
}

export const forceNewEra =  {
    name: 'DappsStaking.force_new_era',
    /**
     * Force there to be a new era at the end of the next block. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    v4: new CallType(
        'DappsStaking.force_new_era',
        sts.unit()
    ),
}

export const developerPreApproval =  {
    name: 'DappsStaking.developer_pre_approval',
    /**
     * add contract address to the pre-approved list.
     * contract_id should be ink! or evm contract.
     * 
     * Sudo call is required
     */
    v4: new CallType(
        'DappsStaking.developer_pre_approval',
        sts.struct({
            developer: v4.AccountId32,
        })
    ),
}

export const enableDeveloperPreApproval =  {
    name: 'DappsStaking.enable_developer_pre_approval',
    /**
     * Enable or disable adding new contracts to the pre-approved list
     * 
     * Sudo call is required
     */
    v4: new CallType(
        'DappsStaking.enable_developer_pre_approval',
        sts.struct({
            enabled: sts.boolean(),
        })
    ),
}

export const doUpgrade =  {
    name: 'DappsStaking.do_upgrade',
    v12: new CallType(
        'DappsStaking.do_upgrade',
        sts.struct({
            weightLimit: sts.option(() => sts.bigint()),
        })
    ),
}

export const withdrawFromUnregistered =  {
    name: 'DappsStaking.withdraw_from_unregistered',
    /**
     * Withdraw locked funds from a contract that was unregistered.
     * Funds don't need to undergo the unbonding period - they are returned immediately.
     */
    v12: new CallType(
        'DappsStaking.withdraw_from_unregistered',
        sts.struct({
            contractId: v12.SmartContract,
        })
    ),
}

export const unbondAndUnstake =  {
    name: 'DappsStaking.unbond_and_unstake',
    /**
     * Start unbonding process and unstake balance from the contract.
     * 
     * The unstaked amount will no longer be eligible for rewards but still won't be unlocked.
     * User needs to wait for the unbonding period to finish before being able to withdraw
     * the funds via `withdraw_unbonded` call.
     * 
     * In case remaining staked balance on contract is below minimum staking amount,
     * entire stake for that contract will be unstaked.
     * 
     */
    v12: new CallType(
        'DappsStaking.unbond_and_unstake',
        sts.struct({
            contractId: v12.SmartContract,
            value: sts.bigint(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'DappsStaking.withdraw_unbonded',
    /**
     * Withdraw all funds that have completed the unbonding process.
     * 
     * If there are unbonding chunks which will be fully unbonded in future eras,
     * they will remain and can be withdrawn later.
     * 
     */
    v12: new CallType(
        'DappsStaking.withdraw_unbonded',
        sts.unit()
    ),
}

export const claimStaker =  {
    name: 'DappsStaking.claim_staker',
    /**
     * Claim earned staker rewards for the oldest era.
     */
    v12: new CallType(
        'DappsStaking.claim_staker',
        sts.struct({
            contractId: v12.SmartContract,
        })
    ),
}

export const claimDapp =  {
    name: 'DappsStaking.claim_dapp',
    /**
     * Claim earned dapp rewards for the specified era.
     */
    v12: new CallType(
        'DappsStaking.claim_dapp',
        sts.struct({
            contractId: v12.SmartContract,
            era: sts.number(),
        })
    ),
}

export const maintenanceMode =  {
    name: 'DappsStaking.maintenance_mode',
    /**
     * `true` will disable pallet, enabling maintenance mode. `false` will do the opposite.
     */
    v12: new CallType(
        'DappsStaking.maintenance_mode',
        sts.struct({
            enableMaintenance: sts.boolean(),
        })
    ),
}

export const setRewardDestination =  {
    name: 'DappsStaking.set_reward_destination',
    /**
     * Used to set reward destination for staker rewards
     */
    v16: new CallType(
        'DappsStaking.set_reward_destination',
        sts.struct({
            rewardDestination: v16.RewardDestination,
        })
    ),
}

export const setContractStakeInfo =  {
    name: 'DappsStaking.set_contract_stake_info',
    /**
     * Used to force set `ContractEraStake` storage values.
     * The purpose of this call is only for fixing one of the issues detected with dapps-staking.
     */
    v16: new CallType(
        'DappsStaking.set_contract_stake_info',
        sts.struct({
            contract: v16.SmartContract,
            era: sts.number(),
            contractStakeInfo: v16.ContractStakeInfo,
        })
    ),
}

export const nominationTransfer =  {
    name: 'DappsStaking.nomination_transfer',
    /**
     * Transfer nomination from one contract to another.
     * 
     * Same rules as for `bond_and_stake` and `unbond_and_unstake` apply.
     * Minor difference is that there is no unbonding period so this call won't
     * check whether max number of unbonding chunks is exceeded.
     * 
     */
    v17: new CallType(
        'DappsStaking.nomination_transfer',
        sts.struct({
            originContractId: v17.SmartContract,
            value: sts.bigint(),
            targetContractId: v17.SmartContract,
        })
    ),
}

export const burnStaleReward =  {
    name: 'DappsStaking.burn_stale_reward',
    /**
     * Used to burn unclaimed & stale rewards from an unregistered contract.
     */
    v49: new CallType(
        'DappsStaking.burn_stale_reward',
        sts.struct({
            contractId: v49.SmartContract,
            era: sts.number(),
        })
    ),
}

export const claimStakerFor =  {
    name: 'DappsStaking.claim_staker_for',
    /**
     * Claim earned staker rewards for the given staker, and the oldest unclaimed era.
     * In order to claim multiple eras, this call has to be called multiple times.
     * 
     * This call can only be used during the pallet decommission process.
     */
    v77: new CallType(
        'DappsStaking.claim_staker_for',
        sts.struct({
            staker: v77.AccountId32,
            contractId: v77.SmartContract,
        })
    ),
}

export const setRewardDestinationFor =  {
    name: 'DappsStaking.set_reward_destination_for',
    /**
     * Used to set reward destination for staker rewards, for the given staker
     * 
     */
    v77: new CallType(
        'DappsStaking.set_reward_destination_for',
        sts.struct({
            staker: v77.AccountId32,
            rewardDestination: v77.RewardDestination,
        })
    ),
}

export const decommission =  {
    name: 'DappsStaking.decommission',
    /**
     * Enable the `decommission` flag for the pallet.
     * 
     * The dispatch origin must be Root.
     */
    v77: new CallType(
        'DappsStaking.decommission',
        sts.unit()
    ),
}
