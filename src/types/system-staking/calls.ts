import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const tokenConfig =  {
    name: 'SystemStaking.token_config',
    /**
     * Update token config，take effect when next round begins
     */
    v970: new CallType(
        'SystemStaking.token_config',
        sts.struct({
            token: v970.CurrencyId,
            execDelay: sts.option(() => sts.number()),
            systemStakableFarmingRate: sts.option(() => v970.Permill),
            addOrSub: sts.option(() => sts.boolean()),
            systemStakableBase: sts.option(() => sts.bigint()),
            farmingPoolids: sts.option(() => sts.array(() => sts.number())),
            lptokenRates: sts.option(() => sts.array(() => v970.Perbill)),
        })
    ),
    /**
     * Update token config，take effect when next round begins
     */
    v980: new CallType(
        'SystemStaking.token_config',
        sts.struct({
            token: v980.CurrencyId,
            execDelay: sts.option(() => sts.number()),
            systemStakableFarmingRate: sts.option(() => v980.Permill),
            addOrSub: sts.option(() => sts.boolean()),
            systemStakableBase: sts.option(() => sts.bigint()),
            farmingPoolids: sts.option(() => sts.array(() => sts.number())),
            lptokenRates: sts.option(() => sts.array(() => v980.Perbill)),
        })
    ),
    /**
     * See [`Pallet::token_config`].
     */
    v990: new CallType(
        'SystemStaking.token_config',
        sts.struct({
            token: v990.CurrencyId,
            execDelay: sts.option(() => sts.number()),
            systemStakableFarmingRate: sts.option(() => v990.Permill),
            addOrSub: sts.option(() => sts.boolean()),
            systemStakableBase: sts.option(() => sts.bigint()),
            farmingPoolids: sts.option(() => sts.array(() => sts.number())),
            lptokenRates: sts.option(() => sts.array(() => v990.Perbill)),
        })
    ),
}

export const deleteToken =  {
    name: 'SystemStaking.delete_token',
    /**
     * Update token config，take effect when next round begins
     */
    v970: new CallType(
        'SystemStaking.delete_token',
        sts.struct({
            token: v970.CurrencyId,
        })
    ),
    /**
     * Update token config，take effect when next round begins
     */
    v980: new CallType(
        'SystemStaking.delete_token',
        sts.struct({
            token: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::delete_token`].
     */
    v990: new CallType(
        'SystemStaking.delete_token',
        sts.struct({
            token: v990.CurrencyId,
        })
    ),
}

export const refreshTokenInfo =  {
    name: 'SystemStaking.refresh_token_info',
    /**
     * refresh token info，query farming pallet, and update TokenInfo, change to new
     * config，ignore exec_delay, execute immediately
     */
    v970: new CallType(
        'SystemStaking.refresh_token_info',
        sts.struct({
            token: v970.CurrencyId,
        })
    ),
    /**
     * refresh token info，query farming pallet, and update TokenInfo, change to new
     * config，ignore exec_delay, execute immediately
     */
    v980: new CallType(
        'SystemStaking.refresh_token_info',
        sts.struct({
            token: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::refresh_token_info`].
     */
    v990: new CallType(
        'SystemStaking.refresh_token_info',
        sts.struct({
            token: v990.CurrencyId,
        })
    ),
}

export const payout =  {
    name: 'SystemStaking.payout',
    /**
     * payout to treasury
     */
    v970: new CallType(
        'SystemStaking.payout',
        sts.struct({
            token: v970.CurrencyId,
        })
    ),
    /**
     * payout to treasury
     */
    v980: new CallType(
        'SystemStaking.payout',
        sts.struct({
            token: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::payout`].
     */
    v990: new CallType(
        'SystemStaking.payout',
        sts.struct({
            token: v990.CurrencyId,
        })
    ),
}
