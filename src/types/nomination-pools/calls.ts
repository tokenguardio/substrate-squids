import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v39 from '../v39'
import * as v58 from '../v58'
import * as v59 from '../v59'
import * as v68 from '../v68'

export const join =  {
    name: 'NominationPools.join',
    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     * 
     * # Note
     * 
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    v39: new CallType(
        'NominationPools.join',
        sts.struct({
            amount: sts.bigint(),
            poolId: sts.number(),
        })
    ),
}

export const bondExtra =  {
    name: 'NominationPools.bond_extra',
    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     * 
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards, see [`BondExtra`].
     * 
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    v39: new CallType(
        'NominationPools.bond_extra',
        sts.struct({
            extra: v39.BondExtra,
        })
    ),
}

export const claimPayout =  {
    name: 'NominationPools.claim_payout',
    /**
     * A bonded member can use this to claim their payout based on the rewards that the pool
     * has accumulated since their last claimed payout (OR since joining if this is there first
     * time claiming rewards). The payout will be transferred to the member's account.
     * 
     * The member will earn rewards pro rata based on the members stake vs the sum of the
     * members in the pools stake. Rewards do not "expire".
     */
    v39: new CallType(
        'NominationPools.claim_payout',
        sts.unit()
    ),
}

export const unbond =  {
    name: 'NominationPools.unbond',
    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch.
     * 
     * * The pool is blocked and the caller is either the root or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying and the member is not the depositor.
     * * The pool is destroying, the member is the depositor and no other members are in the
     *   pool.
     * 
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     * 
     * * The caller is not the depositor.
     * * The caller is the depositor, the pool is destroying and no other members are in the
     *   pool.
     * 
     * # Note
     * 
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
     * there are too many unlocking chunks, the result of this call will likely be the
     * `NoMoreChunks` error from the staking system.
     */
    v39: new CallType(
        'NominationPools.unbond',
        sts.struct({
            memberAccount: v39.AccountId32,
            unbondingPoints: sts.bigint(),
        })
    ),
    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch.
     * 
     * * The pool is blocked and the caller is either the root or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying and the member is not the depositor.
     * * The pool is destroying, the member is the depositor and no other members are in the
     *   pool.
     * 
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     * 
     * * The caller is not the depositor.
     * * The caller is the depositor, the pool is destroying and no other members are in the
     *   pool.
     * 
     * # Note
     * 
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
     * there are too many unlocking chunks, the result of this call will likely be the
     * `NoMoreChunks` error from the staking system.
     */
    v58: new CallType(
        'NominationPools.unbond',
        sts.struct({
            memberAccount: v58.MultiAddress,
            unbondingPoints: sts.bigint(),
        })
    ),
}

export const poolWithdrawUnbonded =  {
    name: 'NominationPools.pool_withdraw_unbonded',
    /**
     * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
     * 
     * This is useful if their are too many unlocking chunks to call `unbond`, and some
     * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
     * would probably see an error like `NoMoreChunks` emitted from the staking system when
     * they attempt to unbond.
     */
    v39: new CallType(
        'NominationPools.pool_withdraw_unbonded',
        sts.struct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'NominationPools.withdraw_unbonded',
    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch
     * 
     * * The pool is in destroy mode and the target is not the depositor.
     * * The target is the depositor and they are the only member in the sub pools.
     * * The pool is blocked and the caller is either the root or state-toggler.
     * 
     * # Conditions for permissioned dispatch
     * 
     * * The caller is the target and they are not the depositor.
     * 
     * # Note
     * 
     * If the target is the depositor, the pool will be destroyed.
     */
    v39: new CallType(
        'NominationPools.withdraw_unbonded',
        sts.struct({
            memberAccount: v39.AccountId32,
            numSlashingSpans: sts.number(),
        })
    ),
    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch
     * 
     * * The pool is in destroy mode and the target is not the depositor.
     * * The target is the depositor and they are the only member in the sub pools.
     * * The pool is blocked and the caller is either the root or state-toggler.
     * 
     * # Conditions for permissioned dispatch
     * 
     * * The caller is the target and they are not the depositor.
     * 
     * # Note
     * 
     * If the target is the depositor, the pool will be destroyed.
     */
    v58: new CallType(
        'NominationPools.withdraw_unbonded',
        sts.struct({
            memberAccount: v58.MultiAddress,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const create =  {
    name: 'NominationPools.create',
    /**
     * Create a new delegation pool.
     * 
     * # Arguments
     * 
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    v39: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v39.AccountId32,
            nominator: v39.AccountId32,
            stateToggler: v39.AccountId32,
        })
    ),
    /**
     * Create a new delegation pool.
     * 
     * # Arguments
     * 
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    v58: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v58.MultiAddress,
            nominator: v58.MultiAddress,
            stateToggler: v58.MultiAddress,
        })
    ),
    /**
     * See [`Pallet::create`].
     */
    v68: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v68.MultiAddress,
            nominator: v68.MultiAddress,
            bouncer: v68.MultiAddress,
        })
    ),
}

export const nominate =  {
    name: 'NominationPools.nominate',
    /**
     * Nominate on behalf of the pool.
     * 
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * root role.
     * 
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    v39: new CallType(
        'NominationPools.nominate',
        sts.struct({
            poolId: sts.number(),
            validators: sts.array(() => v39.AccountId32),
        })
    ),
}

export const setState =  {
    name: 'NominationPools.set_state',
    /**
     * Set a new state for the pool.
     * 
     * If a pool is already in the `Destroying` state, then under no condition can its state
     * change again.
     * 
     * The dispatch origin of this call must be either:
     * 
     * 1. signed by the state toggler, or the root role of the pool,
     * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
     *    then the state of the pool can be permissionlessly changed to `Destroying`.
     */
    v39: new CallType(
        'NominationPools.set_state',
        sts.struct({
            poolId: sts.number(),
            state: v39.PoolState,
        })
    ),
}

export const setMetadata =  {
    name: 'NominationPools.set_metadata',
    /**
     * Set a new metadata for the pool.
     * 
     * The dispatch origin of this call must be signed by the state toggler, or the root role
     * of the pool.
     */
    v39: new CallType(
        'NominationPools.set_metadata',
        sts.struct({
            poolId: sts.number(),
            metadata: sts.bytes(),
        })
    ),
}

export const setConfigs =  {
    name: 'NominationPools.set_configs',
    /**
     * Update configurations for the nomination pools. The origin for this call must be
     * Root.
     * 
     * # Arguments
     * 
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     * * `max_pools` - Set [`MaxPools`].
     * * `max_members` - Set [`MaxPoolMembers`].
     * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
     */
    v39: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v39.Type_142,
            minCreateBond: v39.Type_142,
            maxPools: v39.Type_143,
            maxMembers: v39.Type_143,
            maxMembersPerPool: v39.Type_143,
        })
    ),
    /**
     * See [`Pallet::set_configs`].
     */
    v68: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v68.Type_147,
            minCreateBond: v68.Type_147,
            maxPools: v68.Type_148,
            maxMembers: v68.Type_148,
            maxMembersPerPool: v68.Type_148,
            globalMaxCommission: v68.Type_149,
        })
    ),
}

export const updateRoles =  {
    name: 'NominationPools.update_roles',
    /**
     * Update the roles of the pool.
     * 
     * The root is the only entity that can change any of the roles, including itself,
     * excluding the depositor, who can never change.
     * 
     * It emits an event, notifying UIs of the role change. This event is quite relevant to
     * most pool members and they should be informed of changes to pool roles.
     */
    v39: new CallType(
        'NominationPools.update_roles',
        sts.struct({
            poolId: sts.number(),
            newRoot: v39.Type_144,
            newNominator: v39.Type_144,
            newStateToggler: v39.Type_144,
        })
    ),
    /**
     * See [`Pallet::update_roles`].
     */
    v68: new CallType(
        'NominationPools.update_roles',
        sts.struct({
            poolId: sts.number(),
            newRoot: v68.Type_150,
            newNominator: v68.Type_150,
            newBouncer: v68.Type_150,
        })
    ),
}

export const chill =  {
    name: 'NominationPools.chill',
    /**
     * Chill on behalf of the pool.
     * 
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * root role, same as [`Pallet::nominate`].
     * 
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    v39: new CallType(
        'NominationPools.chill',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const createWithPoolId =  {
    name: 'NominationPools.create_with_pool_id',
    /**
     * Create a new delegation pool with a previously used pool id
     * 
     * # Arguments
     * 
     * same as `create` with the inclusion of
     * * `pool_id` - `A valid PoolId.
     */
    v59: new CallType(
        'NominationPools.create_with_pool_id',
        sts.struct({
            amount: sts.bigint(),
            root: v59.MultiAddress,
            nominator: v59.MultiAddress,
            stateToggler: v59.MultiAddress,
            poolId: sts.number(),
        })
    ),
    /**
     * See [`Pallet::create_with_pool_id`].
     */
    v68: new CallType(
        'NominationPools.create_with_pool_id',
        sts.struct({
            amount: sts.bigint(),
            root: v68.MultiAddress,
            nominator: v68.MultiAddress,
            bouncer: v68.MultiAddress,
            poolId: sts.number(),
        })
    ),
}

export const bondExtraOther =  {
    name: 'NominationPools.bond_extra_other',
    /**
     * See [`Pallet::bond_extra_other`].
     */
    v68: new CallType(
        'NominationPools.bond_extra_other',
        sts.struct({
            member: v68.MultiAddress,
            extra: v68.BondExtra,
        })
    ),
}

export const setClaimPermission =  {
    name: 'NominationPools.set_claim_permission',
    /**
     * See [`Pallet::set_claim_permission`].
     */
    v68: new CallType(
        'NominationPools.set_claim_permission',
        sts.struct({
            permission: v68.ClaimPermission,
        })
    ),
}

export const claimPayoutOther =  {
    name: 'NominationPools.claim_payout_other',
    /**
     * See [`Pallet::claim_payout_other`].
     */
    v68: new CallType(
        'NominationPools.claim_payout_other',
        sts.struct({
            other: v68.AccountId32,
        })
    ),
}

export const setCommission =  {
    name: 'NominationPools.set_commission',
    /**
     * See [`Pallet::set_commission`].
     */
    v68: new CallType(
        'NominationPools.set_commission',
        sts.struct({
            poolId: sts.number(),
            newCommission: sts.option(() => sts.tuple(() => [v68.Perbill, v68.AccountId32])),
        })
    ),
}

export const setCommissionMax =  {
    name: 'NominationPools.set_commission_max',
    /**
     * See [`Pallet::set_commission_max`].
     */
    v68: new CallType(
        'NominationPools.set_commission_max',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v68.Perbill,
        })
    ),
}

export const setCommissionChangeRate =  {
    name: 'NominationPools.set_commission_change_rate',
    /**
     * See [`Pallet::set_commission_change_rate`].
     */
    v68: new CallType(
        'NominationPools.set_commission_change_rate',
        sts.struct({
            poolId: sts.number(),
            changeRate: v68.CommissionChangeRate,
        })
    ),
}

export const claimCommission =  {
    name: 'NominationPools.claim_commission',
    /**
     * See [`Pallet::claim_commission`].
     */
    v68: new CallType(
        'NominationPools.claim_commission',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}
