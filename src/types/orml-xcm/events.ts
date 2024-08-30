import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const sent =  {
    name: 'OrmlXcm.Sent',
    /**
     * XCM message sent. \[to, message\]
     */
    v952: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v952.V1MultiLocation,
            message: sts.array(() => v952.V2Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v970: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v970.V1MultiLocation,
            message: sts.array(() => v970.V2Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v972: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v972.V3MultiLocation,
            message: sts.array(() => v972.V3Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v10000: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v10000.V3MultiLocation,
            message: sts.array(() => v10000.V3Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v11000: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v11000.V4Location,
            message: sts.array(() => v11000.V4Instruction),
        })
    ),
}
