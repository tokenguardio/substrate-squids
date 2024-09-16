import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v115 from '../v115'
import * as v205 from '../v205'
import * as v244 from '../v244'

export const newInvulnerables =  {
    name: 'CollatorSelection.NewInvulnerables',
    v100: new EventType(
        'CollatorSelection.NewInvulnerables',
        sts.array(() => v100.AccountId32)
    ),
    v115: new EventType(
        'CollatorSelection.NewInvulnerables',
        sts.struct({
            invulnerables: sts.array(() => v115.AccountId32),
        })
    ),
}

export const newDesiredCandidates =  {
    name: 'CollatorSelection.NewDesiredCandidates',
    v100: new EventType(
        'CollatorSelection.NewDesiredCandidates',
        sts.number()
    ),
    v115: new EventType(
        'CollatorSelection.NewDesiredCandidates',
        sts.struct({
            desiredCandidates: sts.number(),
        })
    ),
}

export const newCandidacyBond =  {
    name: 'CollatorSelection.NewCandidacyBond',
    v100: new EventType(
        'CollatorSelection.NewCandidacyBond',
        sts.bigint()
    ),
    v115: new EventType(
        'CollatorSelection.NewCandidacyBond',
        sts.struct({
            bondAmount: sts.bigint(),
        })
    ),
}

export const candidateAdded =  {
    name: 'CollatorSelection.CandidateAdded',
    v100: new EventType(
        'CollatorSelection.CandidateAdded',
        sts.tuple([v100.AccountId32, sts.bigint()])
    ),
    v115: new EventType(
        'CollatorSelection.CandidateAdded',
        sts.struct({
            accountId: v115.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateRemoved =  {
    name: 'CollatorSelection.CandidateRemoved',
    v100: new EventType(
        'CollatorSelection.CandidateRemoved',
        v100.AccountId32
    ),
    v115: new EventType(
        'CollatorSelection.CandidateRemoved',
        sts.struct({
            accountId: v115.AccountId32,
        })
    ),
}

export const invulnerableAdded =  {
    name: 'CollatorSelection.InvulnerableAdded',
    /**
     * A new Invulnerable was added.
     */
    v205: new EventType(
        'CollatorSelection.InvulnerableAdded',
        sts.struct({
            accountId: v205.AccountId32,
        })
    ),
}

export const invulnerableRemoved =  {
    name: 'CollatorSelection.InvulnerableRemoved',
    /**
     * An Invulnerable was removed.
     */
    v205: new EventType(
        'CollatorSelection.InvulnerableRemoved',
        sts.struct({
            accountId: v205.AccountId32,
        })
    ),
}

export const invalidInvulnerableSkipped =  {
    name: 'CollatorSelection.InvalidInvulnerableSkipped',
    /**
     * An account was unable to be added to the Invulnerables because they did not have keys
     * registered. Other Invulnerables may have been set.
     */
    v205: new EventType(
        'CollatorSelection.InvalidInvulnerableSkipped',
        sts.struct({
            accountId: v205.AccountId32,
        })
    ),
}

export const candidateBondUpdated =  {
    name: 'CollatorSelection.CandidateBondUpdated',
    /**
     * Bond of a candidate updated.
     */
    v244: new EventType(
        'CollatorSelection.CandidateBondUpdated',
        sts.struct({
            accountId: v244.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateReplaced =  {
    name: 'CollatorSelection.CandidateReplaced',
    /**
     * An account was replaced in the candidate list by another one.
     */
    v244: new EventType(
        'CollatorSelection.CandidateReplaced',
        sts.struct({
            old: v244.AccountId32,
            new: v244.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
