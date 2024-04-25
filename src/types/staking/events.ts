import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v12 from '../v12'
import * as v39 from '../v39'
import * as v58 from '../v58'
import * as v59 from '../v59'
import * as v73 from '../v73'

export const eraPaid =  {
    name: 'Staking.EraPaid',
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    v12: new EventType(
        'Staking.EraPaid',
        sts.tuple([sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    v58: new EventType(
        'Staking.EraPaid',
        sts.struct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
            remainder: sts.bigint(),
        })
    ),
}

export const rewarded =  {
    name: 'Staking.Rewarded',
    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    v12: new EventType(
        'Staking.Rewarded',
        sts.tuple([v12.AccountId32, sts.bigint()])
    ),
    /**
     * The nominator has been rewarded by this amount.
     */
    v58: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v58.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    v73: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v73.AccountId32,
            dest: v73.RewardDestination,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Staking.Slashed',
    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    v12: new EventType(
        'Staking.Slashed',
        sts.tuple([v12.AccountId32, sts.bigint()])
    ),
    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    v58: new EventType(
        'Staking.Slashed',
        sts.struct({
            staker: v58.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const oldSlashingReportDiscarded =  {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed. \[session_index\]
     */
    v12: new EventType(
        'Staking.OldSlashingReportDiscarded',
        sts.number()
    ),
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    v58: new EventType(
        'Staking.OldSlashingReportDiscarded',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}

export const stakersElected =  {
    name: 'Staking.StakersElected',
    /**
     * A new set of stakers was elected.
     */
    v12: new EventType(
        'Staking.StakersElected',
        sts.unit()
    ),
}

export const bonded =  {
    name: 'Staking.Bonded',
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v12: new EventType(
        'Staking.Bonded',
        sts.tuple([v12.AccountId32, sts.bigint()])
    ),
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v58: new EventType(
        'Staking.Bonded',
        sts.struct({
            stash: v58.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unbonded =  {
    name: 'Staking.Unbonded',
    /**
     * An account has unbonded this amount. \[stash, amount\]
     */
    v12: new EventType(
        'Staking.Unbonded',
        sts.tuple([v12.AccountId32, sts.bigint()])
    ),
    /**
     * An account has unbonded this amount.
     */
    v58: new EventType(
        'Staking.Unbonded',
        sts.struct({
            stash: v58.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Staking.Withdrawn',
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue. \[stash, amount\]
     */
    v12: new EventType(
        'Staking.Withdrawn',
        sts.tuple([v12.AccountId32, sts.bigint()])
    ),
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    v58: new EventType(
        'Staking.Withdrawn',
        sts.struct({
            stash: v58.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const kicked =  {
    name: 'Staking.Kicked',
    /**
     * A nominator has been kicked from a validator. \[nominator, stash\]
     */
    v12: new EventType(
        'Staking.Kicked',
        sts.tuple([v12.AccountId32, v12.AccountId32])
    ),
    /**
     * A nominator has been kicked from a validator.
     */
    v58: new EventType(
        'Staking.Kicked',
        sts.struct({
            nominator: v58.AccountId32,
            stash: v58.AccountId32,
        })
    ),
}

export const stakingElectionFailed =  {
    name: 'Staking.StakingElectionFailed',
    /**
     * The election failed. No new era is planned.
     */
    v12: new EventType(
        'Staking.StakingElectionFailed',
        sts.unit()
    ),
}

export const chilled =  {
    name: 'Staking.Chilled',
    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    v12: new EventType(
        'Staking.Chilled',
        v12.AccountId32
    ),
    /**
     * An account has stopped participating as either a validator or nominator.
     */
    v58: new EventType(
        'Staking.Chilled',
        sts.struct({
            stash: v58.AccountId32,
        })
    ),
}

export const payoutStarted =  {
    name: 'Staking.PayoutStarted',
    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    v12: new EventType(
        'Staking.PayoutStarted',
        sts.tuple([sts.number(), v12.AccountId32])
    ),
    /**
     * The stakers' rewards are getting paid.
     */
    v58: new EventType(
        'Staking.PayoutStarted',
        sts.struct({
            eraIndex: sts.number(),
            validatorStash: v58.AccountId32,
        })
    ),
}

export const validatorPrefsSet =  {
    name: 'Staking.ValidatorPrefsSet',
    /**
     * A validator has set their preferences.
     */
    v39: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.tuple([v39.AccountId32, v39.ValidatorPrefs])
    ),
    /**
     * A validator has set their preferences.
     */
    v58: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.struct({
            stash: v58.AccountId32,
            prefs: v58.ValidatorPrefs,
        })
    ),
}

export const slashReported =  {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    v59: new EventType(
        'Staking.SlashReported',
        sts.struct({
            validator: v59.AccountId32,
            fraction: v59.Perbill,
            slashEra: sts.number(),
        })
    ),
}

export const forceEra =  {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    v59: new EventType(
        'Staking.ForceEra',
        sts.struct({
            mode: v59.Forcing,
        })
    ),
}

export const snapshotVotersSizeExceeded =  {
    name: 'Staking.SnapshotVotersSizeExceeded',
    /**
     * Voters size limit reached.
     */
    v73: new EventType(
        'Staking.SnapshotVotersSizeExceeded',
        sts.struct({
            size: sts.number(),
        })
    ),
}

export const snapshotTargetsSizeExceeded =  {
    name: 'Staking.SnapshotTargetsSizeExceeded',
    /**
     * Targets size limit reached.
     */
    v73: new EventType(
        'Staking.SnapshotTargetsSizeExceeded',
        sts.struct({
            size: sts.number(),
        })
    ),
}
