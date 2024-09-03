import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const dummy =  {
    name: 'DummyPurchase.Dummy',
    v24: new EventType(
        'DummyPurchase.Dummy',
        v24.AccountId
    ),
}
