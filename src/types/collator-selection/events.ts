import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v952 from '../v952'
import * as v990 from '../v990'
import * as v10000 from '../v10000'

export const newInvulnerables =  {
    name: 'CollatorSelection.NewInvulnerables',
    v932: new EventType(
        'CollatorSelection.NewInvulnerables',
        sts.array(() => v932.AccountId32)
    ),
    v952: new EventType(
        'CollatorSelection.NewInvulnerables',
        sts.struct({
            invulnerables: sts.array(() => v952.AccountId32),
        })
    ),
}

export const newDesiredCandidates =  {
    name: 'CollatorSelection.NewDesiredCandidates',
    v932: new EventType(
        'CollatorSelection.NewDesiredCandidates',
        sts.number()
    ),
    v952: new EventType(
        'CollatorSelection.NewDesiredCandidates',
        sts.struct({
            desiredCandidates: sts.number(),
        })
    ),
}

export const newCandidacyBond =  {
    name: 'CollatorSelection.NewCandidacyBond',
    v932: new EventType(
        'CollatorSelection.NewCandidacyBond',
        sts.bigint()
    ),
    v952: new EventType(
        'CollatorSelection.NewCandidacyBond',
        sts.struct({
            bondAmount: sts.bigint(),
        })
    ),
}

export const candidateAdded =  {
    name: 'CollatorSelection.CandidateAdded',
    v932: new EventType(
        'CollatorSelection.CandidateAdded',
        sts.tuple([v932.AccountId32, sts.bigint()])
    ),
    v952: new EventType(
        'CollatorSelection.CandidateAdded',
        sts.struct({
            accountId: v952.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateRemoved =  {
    name: 'CollatorSelection.CandidateRemoved',
    v932: new EventType(
        'CollatorSelection.CandidateRemoved',
        v932.AccountId32
    ),
    v952: new EventType(
        'CollatorSelection.CandidateRemoved',
        sts.struct({
            accountId: v952.AccountId32,
        })
    ),
}

export const invulnerableAdded =  {
    name: 'CollatorSelection.InvulnerableAdded',
    /**
     * A new Invulnerable was added.
     */
    v990: new EventType(
        'CollatorSelection.InvulnerableAdded',
        sts.struct({
            accountId: v990.AccountId32,
        })
    ),
}

export const invulnerableRemoved =  {
    name: 'CollatorSelection.InvulnerableRemoved',
    /**
     * An Invulnerable was removed.
     */
    v990: new EventType(
        'CollatorSelection.InvulnerableRemoved',
        sts.struct({
            accountId: v990.AccountId32,
        })
    ),
}

export const invalidInvulnerableSkipped =  {
    name: 'CollatorSelection.InvalidInvulnerableSkipped',
    /**
     * An account was unable to be added to the Invulnerables because they did not have keys
     * registered. Other Invulnerables may have been set.
     */
    v990: new EventType(
        'CollatorSelection.InvalidInvulnerableSkipped',
        sts.struct({
            accountId: v990.AccountId32,
        })
    ),
}

export const candidateBondUpdated =  {
    name: 'CollatorSelection.CandidateBondUpdated',
    /**
     * Bond of a candidate updated.
     */
    v10000: new EventType(
        'CollatorSelection.CandidateBondUpdated',
        sts.struct({
            accountId: v10000.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateReplaced =  {
    name: 'CollatorSelection.CandidateReplaced',
    /**
     * An account was replaced in the candidate list by another one.
     */
    v10000: new EventType(
        'CollatorSelection.CandidateReplaced',
        sts.struct({
            old: v10000.AccountId32,
            new: v10000.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
