import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v990 from '../v990'

export const callWhitelisted =  {
    name: 'Whitelist.CallWhitelisted',
    v982: new EventType(
        'Whitelist.CallWhitelisted',
        sts.struct({
            callHash: v982.H256,
        })
    ),
}

export const whitelistedCallRemoved =  {
    name: 'Whitelist.WhitelistedCallRemoved',
    v982: new EventType(
        'Whitelist.WhitelistedCallRemoved',
        sts.struct({
            callHash: v982.H256,
        })
    ),
}

export const whitelistedCallDispatched =  {
    name: 'Whitelist.WhitelistedCallDispatched',
    v982: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v982.H256,
            result: sts.result(() => v982.PostDispatchInfo, () => v982.DispatchErrorWithPostInfo),
        })
    ),
    v990: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v990.H256,
            result: sts.result(() => v990.PostDispatchInfo, () => v990.DispatchErrorWithPostInfo),
        })
    ),
}
