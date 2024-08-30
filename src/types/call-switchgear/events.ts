import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const transactionSwitchedoff =  {
    name: 'CallSwitchgear.TransactionSwitchedoff',
    /**
     * Switch off transaction . \[pallet_name, function_name\]
     */
    v952: new EventType(
        'CallSwitchgear.TransactionSwitchedoff',
        sts.tuple([sts.bytes(), sts.bytes()])
    ),
}

export const transactionSwitchedOn =  {
    name: 'CallSwitchgear.TransactionSwitchedOn',
    /**
     * Switch on transaction . \[pallet_name, function_name\]
     */
    v952: new EventType(
        'CallSwitchgear.TransactionSwitchedOn',
        sts.tuple([sts.bytes(), sts.bytes()])
    ),
}

export const transferAccountDisabled =  {
    name: 'CallSwitchgear.TransferAccountDisabled',
    v952: new EventType(
        'CallSwitchgear.TransferAccountDisabled',
        v952.CurrencyId
    ),
    v956: new EventType(
        'CallSwitchgear.TransferAccountDisabled',
        v956.CurrencyId
    ),
    v962: new EventType(
        'CallSwitchgear.TransferAccountDisabled',
        v962.CurrencyId
    ),
    v980: new EventType(
        'CallSwitchgear.TransferAccountDisabled',
        v980.CurrencyId
    ),
    v990: new EventType(
        'CallSwitchgear.TransferAccountDisabled',
        v990.CurrencyId
    ),
}

export const transferAccountEnabled =  {
    name: 'CallSwitchgear.TransferAccountEnabled',
    v952: new EventType(
        'CallSwitchgear.TransferAccountEnabled',
        v952.CurrencyId
    ),
    v956: new EventType(
        'CallSwitchgear.TransferAccountEnabled',
        v956.CurrencyId
    ),
    v962: new EventType(
        'CallSwitchgear.TransferAccountEnabled',
        v962.CurrencyId
    ),
    v980: new EventType(
        'CallSwitchgear.TransferAccountEnabled',
        v980.CurrencyId
    ),
    v990: new EventType(
        'CallSwitchgear.TransferAccountEnabled',
        v990.CurrencyId
    ),
}
