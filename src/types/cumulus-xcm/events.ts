import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v160 from '../v160'
import * as v244 from '../v244'

export const invalidFormat =  {
    name: 'CumulusXcm.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    v108: new EventType(
        'CumulusXcm.InvalidFormat',
        sts.bytes()
    ),
}

export const unsupportedVersion =  {
    name: 'CumulusXcm.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    v108: new EventType(
        'CumulusXcm.UnsupportedVersion',
        sts.bytes()
    ),
}

export const executedDownward =  {
    name: 'CumulusXcm.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v108: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), v108.V2Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v160: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), v160.V3Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v244: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), v244.V4Outcome])
    ),
}
