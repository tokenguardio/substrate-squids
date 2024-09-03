import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v244 from '../v244'

export const notePreimage =  {
    name: 'Preimage.note_preimage',
    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    v108: new CallType(
        'Preimage.note_preimage',
        sts.struct({
            bytes: sts.bytes(),
        })
    ),
}

export const unnotePreimage =  {
    name: 'Preimage.unnote_preimage',
    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    v108: new CallType(
        'Preimage.unnote_preimage',
        sts.struct({
            hash: v108.H256,
        })
    ),
}

export const requestPreimage =  {
    name: 'Preimage.request_preimage',
    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    v108: new CallType(
        'Preimage.request_preimage',
        sts.struct({
            hash: v108.H256,
        })
    ),
}

export const unrequestPreimage =  {
    name: 'Preimage.unrequest_preimage',
    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    v108: new CallType(
        'Preimage.unrequest_preimage',
        sts.struct({
            hash: v108.H256,
        })
    ),
}

export const ensureUpdated =  {
    name: 'Preimage.ensure_updated',
    /**
     * See [`Pallet::ensure_updated`].
     */
    v244: new CallType(
        'Preimage.ensure_updated',
        sts.struct({
            hashes: sts.array(() => v244.H256),
        })
    ),
}
