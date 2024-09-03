import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const dummy =  {
    name: 'DummySlots.Dummy',
    v24: new EventType(
        'DummySlots.Dummy',
        v24.AccountId
    ),
}
