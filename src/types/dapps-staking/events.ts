import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v4 from '../v4'
import * as v12 from '../v12'
import * as v16 from '../v16'
import * as v17 from '../v17'
import * as v49 from '../v49'

export const bondAndStake =  {
    name: 'DappsStaking.BondAndStake',
    /**
     * Account has bonded and staked funds on a smart contract.
     */
    v4: new EventType(
        'DappsStaking.BondAndStake',
        sts.tuple([v4.AccountId32, v4.SmartContract, sts.bigint()])
    ),
}

export const unbondUnstakeAndWithdraw =  {
    name: 'DappsStaking.UnbondUnstakeAndWithdraw',
    /**
     * Account has unbonded, unstaked and withdrawn funds.
     */
    v4: new EventType(
        'DappsStaking.UnbondUnstakeAndWithdraw',
        sts.tuple([v4.AccountId32, v4.SmartContract, sts.bigint()])
    ),
}

export const newContract =  {
    name: 'DappsStaking.NewContract',
    /**
     * New contract added for staking.
     */
    v4: new EventType(
        'DappsStaking.NewContract',
        sts.tuple([v4.AccountId32, v4.SmartContract])
    ),
}

export const contractRemoved =  {
    name: 'DappsStaking.ContractRemoved',
    /**
     * Contract removed from dapps staking.
     */
    v4: new EventType(
        'DappsStaking.ContractRemoved',
        sts.tuple([v4.AccountId32, v4.SmartContract])
    ),
}

export const newDappStakingEra =  {
    name: 'DappsStaking.NewDappStakingEra',
    /**
     * New dapps staking era. Distribute era rewards to contracts.
     */
    v4: new EventType(
        'DappsStaking.NewDappStakingEra',
        sts.number()
    ),
}

export const reward =  {
    name: 'DappsStaking.Reward',
    /**
     * Reward paid to staker or developer.
     */
    v4: new EventType(
        'DappsStaking.Reward',
        sts.tuple([v4.AccountId32, v4.SmartContract, sts.number(), sts.bigint()])
    ),
}

export const unbondAndUnstake =  {
    name: 'DappsStaking.UnbondAndUnstake',
    /**
     * Account has unbonded & unstaked some funds. Unbonding process begins.
     */
    v12: new EventType(
        'DappsStaking.UnbondAndUnstake',
        sts.tuple([v12.AccountId32, v12.SmartContract, sts.bigint()])
    ),
}

export const withdrawFromUnregistered =  {
    name: 'DappsStaking.WithdrawFromUnregistered',
    /**
     * Account has fully withdrawn all staked amount from an unregistered contract.
     */
    v12: new EventType(
        'DappsStaking.WithdrawFromUnregistered',
        sts.tuple([v12.AccountId32, v12.SmartContract, sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'DappsStaking.Withdrawn',
    /**
     * Account has withdrawn unbonded funds.
     */
    v12: new EventType(
        'DappsStaking.Withdrawn',
        sts.tuple([v12.AccountId32, sts.bigint()])
    ),
}

export const maintenanceMode =  {
    name: 'DappsStaking.MaintenanceMode',
    /**
     * Maintenance mode has been enabled or disabled
     */
    v12: new EventType(
        'DappsStaking.MaintenanceMode',
        sts.boolean()
    ),
}

export const rewardDestination =  {
    name: 'DappsStaking.RewardDestination',
    /**
     * Reward handling modified
     */
    v16: new EventType(
        'DappsStaking.RewardDestination',
        sts.tuple([v16.AccountId32, v16.RewardDestination])
    ),
}

export const nominationTransfer =  {
    name: 'DappsStaking.NominationTransfer',
    /**
     * Nomination part has been transfered from one contract to another.
     * 
     * \(staker account, origin smart contract, amount, target smart contract\)
     */
    v17: new EventType(
        'DappsStaking.NominationTransfer',
        sts.tuple([v17.AccountId32, v17.SmartContract, sts.bigint(), v17.SmartContract])
    ),
}

export const staleRewardBurned =  {
    name: 'DappsStaking.StaleRewardBurned',
    /**
     * Stale, unclaimed reward from an unregistered contract has been burned.
     * 
     * \(developer account, smart contract, era, amount burned\)
     */
    v49: new EventType(
        'DappsStaking.StaleRewardBurned',
        sts.tuple([v49.AccountId32, v49.SmartContract, sts.number(), sts.bigint()])
    ),
}

export const decommission =  {
    name: 'DappsStaking.Decommission',
    /**
     * Pallet is being decommissioned.
     */
    v77: new EventType(
        'DappsStaking.Decommission',
        sts.unit()
    ),
}
