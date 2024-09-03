import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1002006 from '../v1002006'

export const reapIdentity =  {
    name: 'IdentityMigrator.reap_identity',
    /**
     * See [`Pallet::reap_identity`].
     */
    v1002006: new CallType(
        'IdentityMigrator.reap_identity',
        sts.struct({
            who: v1002006.AccountId32,
        })
    ),
}

export const pokeDeposit =  {
    name: 'IdentityMigrator.poke_deposit',
    /**
     * See [`Pallet::poke_deposit`].
     */
    v1002006: new CallType(
        'IdentityMigrator.poke_deposit',
        sts.struct({
            who: v1002006.AccountId32,
        })
    ),
}
