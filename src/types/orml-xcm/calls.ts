import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const sendAsSovereign =  {
    name: 'OrmlXcm.send_as_sovereign',
    /**
     * Send an XCM message as parachain sovereign.
     */
    v952: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v952.VersionedMultiLocation,
            message: v952.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    v970: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v970.VersionedMultiLocation,
            message: v970.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    v972: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v972.VersionedMultiLocation,
            message: v972.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send_as_sovereign`].
     */
    v10000: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            message: v10000.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send_as_sovereign`].
     */
    v11000: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v11000.VersionedLocation,
            message: v11000.VersionedXcm,
        })
    ),
}
