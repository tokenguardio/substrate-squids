import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v9 from '../v9'
import * as v15 from '../v15'
import * as v49 from '../v49'
import * as v64 from '../v64'

export const executed =  {
    name: 'EthCall.Executed',
    /**
     * A call just executed. \[result\]
     */
    v1: new EventType(
        'EthCall.Executed',
        sts.tuple([v1.AccountId32, sts.result(() => sts.unit(), () => v1.DispatchError)])
    ),
    /**
     * A call just executed. \[result\]
     */
    v9: new EventType(
        'EthCall.Executed',
        sts.tuple([v9.AccountId32, sts.result(() => sts.unit(), () => v9.DispatchError)])
    ),
    /**
     * A call just executed. \[result\]
     */
    v15: new EventType(
        'EthCall.Executed',
        sts.tuple([v15.AccountId32, sts.result(() => sts.unit(), () => v15.DispatchError)])
    ),
    /**
     * A call just executed. \[result\]
     */
    v49: new EventType(
        'EthCall.Executed',
        sts.tuple([v49.AccountId32, sts.result(() => sts.unit(), () => v49.DispatchError)])
    ),
    /**
     * A call just executed. \[result\]
     */
    v64: new EventType(
        'EthCall.Executed',
        sts.tuple([v64.AccountId32, sts.result(() => sts.unit(), () => v64.DispatchError)])
    ),
}
