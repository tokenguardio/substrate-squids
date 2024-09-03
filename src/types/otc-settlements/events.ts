import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const executed =  {
    name: 'OtcSettlements.Executed',
    /**
     * A trade has been executed
     */
    v244: new EventType(
        'OtcSettlements.Executed',
        sts.struct({
            assetId: sts.number(),
            profit: sts.bigint(),
        })
    ),
}
