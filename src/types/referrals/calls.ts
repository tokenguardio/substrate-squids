import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v201 from '../v201'

export const registerCode =  {
    name: 'Referrals.register_code',
    /**
     * Register new referral code.
     * 
     * `origin` pays the registration fee.
     * `code` is assigned to the given `account`.
     * 
     * Length of the `code` must be at least `T::MinCodeLength`.
     * Maximum length is limited to `T::CodeLength`.
     * `code` must contain only alfa-numeric characters and all characters will be converted to upper case.
     * 
     * Parameters:
     * - `code`: Code to register. Must follow the restrictions.
     * 
     * Emits `CodeRegistered` event when successful.
     */
    v201: new CallType(
        'Referrals.register_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const linkCode =  {
    name: 'Referrals.link_code',
    /**
     * Link a code to an account.
     * 
     * `Code` must be valid registered code. Otherwise `InvalidCode` is returned.
     * 
     * Signer account is linked to the referral account of the code.
     * 
     * Parameters:
     * - `code`: Code to use to link the signer account to.
     * 
     * Emits `CodeLinked` event when successful.
     */
    v201: new CallType(
        'Referrals.link_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const convert =  {
    name: 'Referrals.convert',
    /**
     * Convert accrued asset amount to reward currency.
     * 
     * Parameters:
     * - `asset_id`: Id of an asset to convert to RewardAsset.
     * 
     * Emits `Converted` event when successful.
     */
    v201: new CallType(
        'Referrals.convert',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}

export const claimRewards =  {
    name: 'Referrals.claim_rewards',
    /**
     * Claim accumulated rewards
     * 
     * IF there is any asset in the reward pot, all is converted to RewardCurrency first.
     * 
     * Reward amount is calculated based on the shares of the signer account.
     * 
     * if the signer account is referrer account, total accumulated rewards is updated as well as referrer level if reached.
     * 
     * Emits `Claimed` event when successful.
     */
    v201: new CallType(
        'Referrals.claim_rewards',
        sts.unit()
    ),
}

export const setRewardPercentage =  {
    name: 'Referrals.set_reward_percentage',
    /**
     * Set asset reward percentages
     * 
     * Parameters:
     * - `asset_id`: asset id
     * - `level`: level
     * - `rewards`: reward fee percentages
     * 
     * Emits `AssetRewardsUpdated` event when successful.
     */
    v201: new CallType(
        'Referrals.set_reward_percentage',
        sts.struct({
            assetId: sts.number(),
            level: v201.Level,
            rewards: v201.FeeDistribution,
        })
    ),
}
