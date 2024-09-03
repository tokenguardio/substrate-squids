import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9140 from '../v9140'

export const newAuthorities =  {
    name: 'Grandpa.NewAuthorities',
    /**
     *  New authority set has been applied.
     */
    v0: new EventType(
        'Grandpa.NewAuthorities',
        sts.array(() => v0.NextAuthority)
    ),
    /**
     * New authority set has been applied.
     */
    v9140: new EventType(
        'Grandpa.NewAuthorities',
        sts.struct({
            authoritySet: sts.array(() => sts.tuple(() => [v9140.Public, sts.bigint()])),
        })
    ),
}

export const paused =  {
    name: 'Grandpa.Paused',
    /**
     *  Current authority set has been paused.
     */
    v0: new EventType(
        'Grandpa.Paused',
        sts.unit()
    ),
}

export const resumed =  {
    name: 'Grandpa.Resumed',
    /**
     *  Current authority set has been resumed.
     */
    v0: new EventType(
        'Grandpa.Resumed',
        sts.unit()
    ),
}
