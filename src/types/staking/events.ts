import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v28 from '../v28'
import * as v9090 from '../v9090'
import * as v9200 from '../v9200'
import * as v9300 from '../v9300'
import * as v9360 from '../v9360'
import * as v9370 from '../v9370'
import * as v1001002 from '../v1001002'

export const eraPayout =  {
    name: 'Staking.EraPayout',
    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     */
    v0: new EventType(
        'Staking.EraPayout',
        sts.tuple([v0.EraIndex, v0.Balance, v0.Balance])
    ),
}

export const reward =  {
    name: 'Staking.Reward',
    /**
     *  The staker has been rewarded by this amount. `AccountId` is the stash account.
     */
    v0: new EventType(
        'Staking.Reward',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
}

export const slash =  {
    name: 'Staking.Slash',
    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    v0: new EventType(
        'Staking.Slash',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
}

export const oldSlashingReportDiscarded =  {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed.
     */
    v0: new EventType(
        'Staking.OldSlashingReportDiscarded',
        v0.SessionIndex
    ),
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    v9300: new EventType(
        'Staking.OldSlashingReportDiscarded',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}

export const stakingElection =  {
    name: 'Staking.StakingElection',
    /**
     *  A new set of stakers was elected with the given computation method.
     */
    v0: new EventType(
        'Staking.StakingElection',
        v0.ElectionCompute
    ),
    /**
     *  A new set of stakers was elected.
     */
    v30: new EventType(
        'Staking.StakingElection',
        sts.unit()
    ),
}

export const solutionStored =  {
    name: 'Staking.SolutionStored',
    /**
     *  A new solution for the upcoming election has been stored.
     */
    v0: new EventType(
        'Staking.SolutionStored',
        v0.ElectionCompute
    ),
}

export const bonded =  {
    name: 'Staking.Bonded',
    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    v0: new EventType(
        'Staking.Bonded',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v9300: new EventType(
        'Staking.Bonded',
        sts.struct({
            stash: v9300.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unbonded =  {
    name: 'Staking.Unbonded',
    /**
     *  An account has unbonded this amount.
     */
    v0: new EventType(
        'Staking.Unbonded',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * An account has unbonded this amount.
     */
    v9300: new EventType(
        'Staking.Unbonded',
        sts.struct({
            stash: v9300.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Staking.Withdrawn',
    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    v0: new EventType(
        'Staking.Withdrawn',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    v9300: new EventType(
        'Staking.Withdrawn',
        sts.struct({
            stash: v9300.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const kicked =  {
    name: 'Staking.Kicked',
    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    v28: new EventType(
        'Staking.Kicked',
        sts.tuple([v28.AccountId, v28.AccountId])
    ),
    /**
     * A nominator has been kicked from a validator.
     */
    v9300: new EventType(
        'Staking.Kicked',
        sts.struct({
            nominator: v9300.AccountId32,
            stash: v9300.AccountId32,
        })
    ),
}

export const stakingElectionFailed =  {
    name: 'Staking.StakingElectionFailed',
    /**
     *  The election failed. No new era is planned.
     */
    v9050: new EventType(
        'Staking.StakingElectionFailed',
        sts.unit()
    ),
}

export const eraPaid =  {
    name: 'Staking.EraPaid',
    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    v9090: new EventType(
        'Staking.EraPaid',
        sts.tuple([v9090.EraIndex, v9090.Balance, v9090.Balance])
    ),
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    v9300: new EventType(
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
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    v9090: new EventType(
        'Staking.Rewarded',
        sts.tuple([v9090.AccountId, v9090.Balance])
    ),
    /**
     * The nominator has been rewarded by this amount.
     */
    v9300: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v9300.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    v1001002: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v1001002.AccountId32,
            dest: v1001002.RewardDestination,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Staking.Slashed',
    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    v9090: new EventType(
        'Staking.Slashed',
        sts.tuple([v9090.AccountId, v9090.Balance])
    ),
    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    v9300: new EventType(
        'Staking.Slashed',
        sts.struct({
            staker: v9300.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const stakersElected =  {
    name: 'Staking.StakersElected',
    /**
     *  A new set of stakers was elected.
     */
    v9090: new EventType(
        'Staking.StakersElected',
        sts.unit()
    ),
}

export const chilled =  {
    name: 'Staking.Chilled',
    /**
     *  An account has stopped participating as either a validator or nominator.
     *  \[stash\]
     */
    v9090: new EventType(
        'Staking.Chilled',
        v9090.AccountId
    ),
    /**
     * An account has stopped participating as either a validator or nominator.
     */
    v9300: new EventType(
        'Staking.Chilled',
        sts.struct({
            stash: v9300.AccountId32,
        })
    ),
}

export const payoutStarted =  {
    name: 'Staking.PayoutStarted',
    /**
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    v9090: new EventType(
        'Staking.PayoutStarted',
        sts.tuple([v9090.EraIndex, v9090.AccountId])
    ),
    /**
     * The stakers' rewards are getting paid.
     */
    v9300: new EventType(
        'Staking.PayoutStarted',
        sts.struct({
            eraIndex: sts.number(),
            validatorStash: v9300.AccountId32,
        })
    ),
}

export const validatorPrefsSet =  {
    name: 'Staking.ValidatorPrefsSet',
    /**
     * A validator has set their preferences.
     */
    v9200: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.tuple([v9200.AccountId32, v9200.ValidatorPrefs])
    ),
    /**
     * A validator has set their preferences.
     */
    v9300: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.struct({
            stash: v9300.AccountId32,
            prefs: v9300.ValidatorPrefs,
        })
    ),
}

export const slashReported =  {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    v9360: new EventType(
        'Staking.SlashReported',
        sts.struct({
            validator: v9360.AccountId32,
            fraction: v9360.Perbill,
            slashEra: sts.number(),
        })
    ),
}

export const forceEra =  {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    v9370: new EventType(
        'Staking.ForceEra',
        sts.struct({
            mode: v9370.Forcing,
        })
    ),
}

export const snapshotVotersSizeExceeded =  {
    name: 'Staking.SnapshotVotersSizeExceeded',
    /**
     * Voters size limit reached.
     */
    v1000001: new EventType(
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
    v1000001: new EventType(
        'Staking.SnapshotTargetsSizeExceeded',
        sts.struct({
            size: sts.number(),
        })
    ),
}

export const controllerBatchDeprecated =  {
    name: 'Staking.ControllerBatchDeprecated',
    /**
     * Report of a controller batch deprecation.
     */
    v1001003: new EventType(
        'Staking.ControllerBatchDeprecated',
        sts.struct({
            failures: sts.number(),
        })
    ),
}
