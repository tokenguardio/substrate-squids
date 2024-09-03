import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v1000001 from '../v1000001'

export const heartbeat =  {
    name: 'ImOnline.heartbeat',
    /**
     *  # <weight>
     *  - Complexity: `O(K + E)` where K is length of `Keys` and E is length of
     *    `Heartbeat.network_state.external_address`
     * 
     *    - `O(K)`: decoding of length `K`
     *    - `O(E)`: decoding/encoding of length `E`
     *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *    `ReceivedHeartbeats`
     *  - DbWrites: `ReceivedHeartbeats`
     *  # </weight>
     */
    v0: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v0.Heartbeat,
            signature: v0.Signature,
        })
    ),
    /**
     * See [`Pallet::heartbeat`].
     */
    v1000001: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v1000001.Heartbeat,
            signature: sts.bytes(),
        })
    ),
}
