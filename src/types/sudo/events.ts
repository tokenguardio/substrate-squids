import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     *  A sudo just took place.
     */
    v0: new EventType(
        'Sudo.Sudid',
        v0.DispatchResult
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     *  The sudoer just switched identity; the old key is supplied.
     */
    v0: new EventType(
        'Sudo.KeyChanged',
        v0.AccountId
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     *  A sudo just took place.
     */
    v0: new EventType(
        'Sudo.SudoAsDone',
        sts.boolean()
    ),
}
