import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v104 from '../v104'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     * A sudo just took place. \[result\]
     */
    v100: new EventType(
        'Sudo.Sudid',
        sts.result(() => sts.unit(), () => v100.DispatchError)
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v104: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v104.DispatchError),
        })
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    v100: new EventType(
        'Sudo.KeyChanged',
        v100.AccountId32
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v104: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => v104.AccountId32),
        })
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     * A sudo just took place. \[result\]
     */
    v100: new EventType(
        'Sudo.SudoAsDone',
        sts.result(() => sts.unit(), () => v100.DispatchError)
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v104: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v104.DispatchError),
        })
    ),
}
