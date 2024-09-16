import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const initializeStaking =  {
    name: 'Staking.initialize_staking',
    /**
     * Staking pallet initialization. This call will reserved `pot`'s balance to prevent
     * account dusting and start collecting fees from trades as rewards.
     * 
     * `pot`’s account has to have a balance which will be reserved to prevent account dusting.
     * 
     * Emits `StakingInitialized` event when successful.
     * 
     */
    v176: new CallType(
        'Staking.initialize_staking',
        sts.unit()
    ),
}

export const stake =  {
    name: 'Staking.stake',
    /**
     * Stake `amount` into a new staking position.
     * 
     * `stake` locks specified `amount` into staking and creates new NFT representing staking
     * position.
     * Users can stake `NativeAssetId` balance which is not vested or already staked.
     * 
     * Staking pallet must be initialized otherwise extrinsic will fail with error.
     * 
     * Parameters:
     * - `amount`: Amount of native asset to be staked. `amount` can't be vested or already
     * staked
     * 
     * Emits `PositionCreated` event when successful.
     * 
     */
    v176: new CallType(
        'Staking.stake',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const increaseStake =  {
    name: 'Staking.increase_stake',
    /**
     * Extrinsic to increase staked amount of existing staking position by specified `amount`.
     * 
     * `increase_stake` increases staked amount of position specified by `postion_id` by the
     * `amount` specified by the user.
     * Staking position must exist and `origin` has to be the owner of the position.
     * Users can stake tokens which are not vested or already staked.
     * Position's params e.g points are updated to offset stake increase and rewards
     * accumulated until this point are paid and locked to the user.
     * 
     * Parameters:
     * - `position_id`: The identifier of the position which stake will be increased.
     * - `amount`: Amount of native asset to be added to staked amount. `amount` can't be vested or
     * already staked
     * 
     * Emits `StakeAdded` event when successful.
     * 
     */
    v176: new CallType(
        'Staking.increase_stake',
        sts.struct({
            positionId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const claim =  {
    name: 'Staking.claim',
    /**
     * Claim rewards accumulated for specific staking position.
     * 
     * Function calculates amount of rewards to pay for specified staking position based on
     * the amount of points position accumulated. Function also unlocks portion of the rewards locked
     * from `increase_stake` based on the amount of the points.
     * 
     * This action is penalized by removing all the points and returning allocated unpaid rewards
     * for redistribution.
     * 
     * Parameters:
     * - `position_id`: The identifier of the position to claim rewards for.
     * 
     * Emits `RewardsClaimed` event when successful.
     * 
     */
    v176: new CallType(
        'Staking.claim',
        sts.struct({
            positionId: sts.bigint(),
        })
    ),
}

export const unstake =  {
    name: 'Staking.unstake',
    /**
     * Function pays rewards, unlocks all the staked assets and destroys staking position
     * specified by `position_id`.
     * 
     * Function calculates and pays latest rewards, unlocks all the locked rewards and staked
     * tokens for staking position and burns NFT representing staking position.
     * Unpaid allocated rewards are returned to the Staking for redistribution.
     * 
     * Parameters:
     * - `position_id`: The identifier of the position to be destroyed.
     * 
     * Emits `Unstaked` event when successful.
     * 
     */
    v176: new CallType(
        'Staking.unstake',
        sts.struct({
            positionId: sts.bigint(),
        })
    ),
}
