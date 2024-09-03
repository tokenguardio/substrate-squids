import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v160 from '../v160'
import * as v244 from '../v244'

export const sent =  {
    name: 'OrmlXcm.Sent',
    /**
     * XCM message sent. \[to, message\]
     */
    v108: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v108.V1MultiLocation,
            message: sts.array(() => v108.V2Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v160: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v160.V3MultiLocation,
            message: sts.array(() => v160.V3Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v244: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v244.V4Location,
            message: sts.array(() => v244.V4Instruction),
        })
    ),
}
