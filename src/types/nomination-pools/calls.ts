import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'

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
    v9280: new CallType(
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
    v9280: new CallType(
        'NominationPools.bond_extra',
        sts.struct({
            extra: v9280.BondExtra,
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
    v9280: new CallType(
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
    v9280: new CallType(
        'NominationPools.unbond',
        sts.struct({
            memberAccount: v9280.AccountId32,
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
    v9291: new CallType(
        'NominationPools.unbond',
        sts.struct({
            memberAccount: v9291.MultiAddress,
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
    v9280: new CallType(
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
    v9280: new CallType(
        'NominationPools.withdraw_unbonded',
        sts.struct({
            memberAccount: v9280.AccountId32,
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
    v9291: new CallType(
        'NominationPools.withdraw_unbonded',
        sts.struct({
            memberAccount: v9291.MultiAddress,
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
    v9280: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v9280.AccountId32,
            nominator: v9280.AccountId32,
            stateToggler: v9280.AccountId32,
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
    v9291: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v9291.MultiAddress,
            nominator: v9291.MultiAddress,
            stateToggler: v9291.MultiAddress,
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
     * * `bouncer` - The account to set as the [`PoolRoles::bouncer`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    v9420: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v9420.MultiAddress,
            nominator: v9420.MultiAddress,
            bouncer: v9420.MultiAddress,
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
    v9280: new CallType(
        'NominationPools.nominate',
        sts.struct({
            poolId: sts.number(),
            validators: sts.array(() => v9280.AccountId32),
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
    v9280: new CallType(
        'NominationPools.set_state',
        sts.struct({
            poolId: sts.number(),
            state: v9280.PoolState,
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
    v9280: new CallType(
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
    v9280: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v9280.Type_370,
            minCreateBond: v9280.Type_370,
            maxPools: v9280.Type_371,
            maxMembers: v9280.Type_371,
            maxMembersPerPool: v9280.Type_371,
        })
    ),
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
     * * `global_max_commission` - Set [`GlobalMaxCommission`].
     */
    v9420: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v9420.Type_299,
            minCreateBond: v9420.Type_299,
            maxPools: v9420.Type_300,
            maxMembers: v9420.Type_300,
            maxMembersPerPool: v9420.Type_300,
            globalMaxCommission: v9420.Type_301,
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
    v9280: new CallType(
        'NominationPools.update_roles',
        sts.struct({
            poolId: sts.number(),
            newRoot: v9280.Type_372,
            newNominator: v9280.Type_372,
            newStateToggler: v9280.Type_372,
        })
    ),
    /**
     * Update the roles of the pool.
     * 
     * The root is the only entity that can change any of the roles, including itself,
     * excluding the depositor, who can never change.
     * 
     * It emits an event, notifying UIs of the role change. This event is quite relevant to
     * most pool members and they should be informed of changes to pool roles.
     */
    v9420: new CallType(
        'NominationPools.update_roles',
        sts.struct({
            poolId: sts.number(),
            newRoot: v9420.Type_302,
            newNominator: v9420.Type_302,
            newBouncer: v9420.Type_302,
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
    v9280: new CallType(
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
    v9340: new CallType(
        'NominationPools.create_with_pool_id',
        sts.struct({
            amount: sts.bigint(),
            root: v9340.MultiAddress,
            nominator: v9340.MultiAddress,
            stateToggler: v9340.MultiAddress,
            poolId: sts.number(),
        })
    ),
    /**
     * Create a new delegation pool with a previously used pool id
     * 
     * # Arguments
     * 
     * same as `create` with the inclusion of
     * * `pool_id` - `A valid PoolId.
     */
    v9420: new CallType(
        'NominationPools.create_with_pool_id',
        sts.struct({
            amount: sts.bigint(),
            root: v9420.MultiAddress,
            nominator: v9420.MultiAddress,
            bouncer: v9420.MultiAddress,
            poolId: sts.number(),
        })
    ),
}

export const bondExtraOther =  {
    name: 'NominationPools.bond_extra_other',
    /**
     * `origin` bonds funds from `extra` for some pool member `member` into their respective
     * pools.
     * 
     * `origin` can bond extra funds from free balance or pending rewards when `origin ==
     * other`.
     * 
     * In the case of `origin != other`, `origin` can only bond extra pending rewards of
     * `other` members assuming set_claim_permission for the given member is
     * `PermissionlessAll` or `PermissionlessCompound`.
     */
    v9420: new CallType(
        'NominationPools.bond_extra_other',
        sts.struct({
            member: v9420.MultiAddress,
            extra: v9420.BondExtra,
        })
    ),
}

export const setClaimPermission =  {
    name: 'NominationPools.set_claim_permission',
    /**
     * Allows a pool member to set a claim permission to allow or disallow permissionless
     * bonding and withdrawing.
     * 
     * By default, this is `Permissioned`, which implies only the pool member themselves can
     * claim their pending rewards. If a pool member wishes so, they can set this to
     * `PermissionlessAll` to allow any account to claim their rewards and bond extra to the
     * pool.
     * 
     * # Arguments
     * 
     * * `origin` - Member of a pool.
     * * `actor` - Account to claim reward. // improve this
     */
    v9420: new CallType(
        'NominationPools.set_claim_permission',
        sts.struct({
            permission: v9420.ClaimPermission,
        })
    ),
}

export const claimPayoutOther =  {
    name: 'NominationPools.claim_payout_other',
    /**
     * `origin` can claim payouts on some pool member `other`'s behalf.
     * 
     * Pool member `other` must have a `PermissionlessAll` or `PermissionlessWithdraw` in order
     * for this call to be successful.
     */
    v9420: new CallType(
        'NominationPools.claim_payout_other',
        sts.struct({
            other: v9420.AccountId32,
        })
    ),
}

export const setCommission =  {
    name: 'NominationPools.set_commission',
    /**
     * Set the commission of a pool.
     * Both a commission percentage and a commission payee must be provided in the `current`
     * tuple. Where a `current` of `None` is provided, any current commission will be removed.
     * 
     * - If a `None` is supplied to `new_commission`, existing commission will be removed.
     */
    v9420: new CallType(
        'NominationPools.set_commission',
        sts.struct({
            poolId: sts.number(),
            newCommission: sts.option(() => sts.tuple(() => [v9420.Perbill, v9420.AccountId32])),
        })
    ),
}

export const setCommissionMax =  {
    name: 'NominationPools.set_commission_max',
    /**
     * Set the maximum commission of a pool.
     * 
     * - Initial max can be set to any `Perbill`, and only smaller values thereafter.
     * - Current commission will be lowered in the event it is higher than a new max
     *   commission.
     */
    v9420: new CallType(
        'NominationPools.set_commission_max',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v9420.Perbill,
        })
    ),
}

export const setCommissionChangeRate =  {
    name: 'NominationPools.set_commission_change_rate',
    /**
     * Set the commission change rate for a pool.
     * 
     * Initial change rate is not bounded, whereas subsequent updates can only be more
     * restrictive than the current.
     */
    v9420: new CallType(
        'NominationPools.set_commission_change_rate',
        sts.struct({
            poolId: sts.number(),
            changeRate: v9420.CommissionChangeRate,
        })
    ),
}

export const claimCommission =  {
    name: 'NominationPools.claim_commission',
    /**
     * Claim pending commission.
     * 
     * The dispatch origin of this call must be signed by the `root` role of the pool. Pending
     * commission is paid out and added to total claimed commission`. Total pending commission
     * is reset to zero. the current.
     */
    v9420: new CallType(
        'NominationPools.claim_commission',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const adjustPoolDeposit =  {
    name: 'NominationPools.adjust_pool_deposit',
    /**
     * See [`Pallet::adjust_pool_deposit`].
     */
    v1001002: new CallType(
        'NominationPools.adjust_pool_deposit',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}
