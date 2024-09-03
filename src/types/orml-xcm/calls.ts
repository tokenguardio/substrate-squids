import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v160 from '../v160'
import * as v244 from '../v244'

export const sendAsSovereign =  {
    name: 'OrmlXcm.send_as_sovereign',
    /**
     * Send an XCM message as parachain sovereign.
     */
    v108: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v108.VersionedMultiLocation,
            message: v108.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    v160: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v160.VersionedMultiLocation,
            message: v160.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send_as_sovereign`].
     */
    v244: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v244.VersionedLocation,
            message: v244.VersionedXcm,
        })
    ),
}
