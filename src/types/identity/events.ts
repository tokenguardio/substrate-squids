import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v10000 from '../v10000'

export const identitySet =  {
    name: 'Identity.IdentitySet',
    /**
     * A name was set or reset (which will remove all judgements).
     */
    v932: new EventType(
        'Identity.IdentitySet',
        sts.struct({
            who: v932.AccountId32,
        })
    ),
}

export const identityCleared =  {
    name: 'Identity.IdentityCleared',
    /**
     * A name was cleared, and the given balance returned.
     */
    v932: new EventType(
        'Identity.IdentityCleared',
        sts.struct({
            who: v932.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const identityKilled =  {
    name: 'Identity.IdentityKilled',
    /**
     * A name was removed and the given balance slashed.
     */
    v932: new EventType(
        'Identity.IdentityKilled',
        sts.struct({
            who: v932.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const judgementRequested =  {
    name: 'Identity.JudgementRequested',
    /**
     * A judgement was asked from a registrar.
     */
    v932: new EventType(
        'Identity.JudgementRequested',
        sts.struct({
            who: v932.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementUnrequested =  {
    name: 'Identity.JudgementUnrequested',
    /**
     * A judgement request was retracted.
     */
    v932: new EventType(
        'Identity.JudgementUnrequested',
        sts.struct({
            who: v932.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementGiven =  {
    name: 'Identity.JudgementGiven',
    /**
     * A judgement was given by a registrar.
     */
    v932: new EventType(
        'Identity.JudgementGiven',
        sts.struct({
            target: v932.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const registrarAdded =  {
    name: 'Identity.RegistrarAdded',
    /**
     * A registrar was added.
     */
    v932: new EventType(
        'Identity.RegistrarAdded',
        sts.struct({
            registrarIndex: sts.number(),
        })
    ),
}

export const subIdentityAdded =  {
    name: 'Identity.SubIdentityAdded',
    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    v932: new EventType(
        'Identity.SubIdentityAdded',
        sts.struct({
            sub: v932.AccountId32,
            main: v932.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRemoved =  {
    name: 'Identity.SubIdentityRemoved',
    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    v932: new EventType(
        'Identity.SubIdentityRemoved',
        sts.struct({
            sub: v932.AccountId32,
            main: v932.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRevoked =  {
    name: 'Identity.SubIdentityRevoked',
    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    v932: new EventType(
        'Identity.SubIdentityRevoked',
        sts.struct({
            sub: v932.AccountId32,
            main: v932.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const authorityAdded =  {
    name: 'Identity.AuthorityAdded',
    /**
     * A username authority was added.
     */
    v10000: new EventType(
        'Identity.AuthorityAdded',
        sts.struct({
            authority: v10000.AccountId32,
        })
    ),
}

export const authorityRemoved =  {
    name: 'Identity.AuthorityRemoved',
    /**
     * A username authority was removed.
     */
    v10000: new EventType(
        'Identity.AuthorityRemoved',
        sts.struct({
            authority: v10000.AccountId32,
        })
    ),
}

export const usernameSet =  {
    name: 'Identity.UsernameSet',
    /**
     * A username was set for `who`.
     */
    v10000: new EventType(
        'Identity.UsernameSet',
        sts.struct({
            who: v10000.AccountId32,
            username: sts.bytes(),
        })
    ),
}

export const usernameQueued =  {
    name: 'Identity.UsernameQueued',
    /**
     * A username was queued, but `who` must accept it prior to `expiration`.
     */
    v10000: new EventType(
        'Identity.UsernameQueued',
        sts.struct({
            who: v10000.AccountId32,
            username: sts.bytes(),
            expiration: sts.number(),
        })
    ),
}

export const preapprovalExpired =  {
    name: 'Identity.PreapprovalExpired',
    /**
     * A queued username passed its expiration without being claimed and was removed.
     */
    v10000: new EventType(
        'Identity.PreapprovalExpired',
        sts.struct({
            whose: v10000.AccountId32,
        })
    ),
}

export const primaryUsernameSet =  {
    name: 'Identity.PrimaryUsernameSet',
    /**
     * A username was set as a primary and can be looked up from `who`.
     */
    v10000: new EventType(
        'Identity.PrimaryUsernameSet',
        sts.struct({
            who: v10000.AccountId32,
            username: sts.bytes(),
        })
    ),
}

export const danglingUsernameRemoved =  {
    name: 'Identity.DanglingUsernameRemoved',
    /**
     * A dangling username (as in, a username corresponding to an account that has removed its
     * identity) has been removed.
     */
    v10000: new EventType(
        'Identity.DanglingUsernameRemoved',
        sts.struct({
            who: v10000.AccountId32,
            username: sts.bytes(),
        })
    ),
}
