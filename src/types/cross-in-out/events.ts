import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const crossedOut =  {
    name: 'CrossInOut.CrossedOut',
    v970: new EventType(
        'CrossInOut.CrossedOut',
        sts.struct({
            currencyId: v970.CurrencyId,
            crosser: v970.AccountId32,
            location: v970.V1MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'CrossInOut.CrossedOut',
        sts.struct({
            currencyId: v980.CurrencyId,
            crosser: v980.AccountId32,
            location: v980.V2MultiLocation,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'CrossInOut.CrossedOut',
        sts.struct({
            currencyId: v990.CurrencyId,
            crosser: v990.AccountId32,
            location: v990.V2MultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const crossedIn =  {
    name: 'CrossInOut.CrossedIn',
    v970: new EventType(
        'CrossInOut.CrossedIn',
        sts.struct({
            currencyId: v970.CurrencyId,
            dest: v970.AccountId32,
            location: v970.V1MultiLocation,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        })
    ),
    v980: new EventType(
        'CrossInOut.CrossedIn',
        sts.struct({
            currencyId: v980.CurrencyId,
            dest: v980.AccountId32,
            location: v980.V2MultiLocation,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        })
    ),
    v990: new EventType(
        'CrossInOut.CrossedIn',
        sts.struct({
            currencyId: v990.CurrencyId,
            dest: v990.AccountId32,
            location: v990.V2MultiLocation,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        })
    ),
}

export const currencyRegistered =  {
    name: 'CrossInOut.CurrencyRegistered',
    v970: new EventType(
        'CrossInOut.CurrencyRegistered',
        sts.struct({
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'CrossInOut.CurrencyRegistered',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'CrossInOut.CurrencyRegistered',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const currencyDeregistered =  {
    name: 'CrossInOut.CurrencyDeregistered',
    v970: new EventType(
        'CrossInOut.CurrencyDeregistered',
        sts.struct({
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'CrossInOut.CurrencyDeregistered',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'CrossInOut.CurrencyDeregistered',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const addedToIssueList =  {
    name: 'CrossInOut.AddedToIssueList',
    v970: new EventType(
        'CrossInOut.AddedToIssueList',
        sts.struct({
            account: v970.AccountId32,
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'CrossInOut.AddedToIssueList',
        sts.struct({
            account: v980.AccountId32,
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'CrossInOut.AddedToIssueList',
        sts.struct({
            account: v990.AccountId32,
            currencyId: v990.CurrencyId,
        })
    ),
}

export const removedFromIssueList =  {
    name: 'CrossInOut.RemovedFromIssueList',
    v970: new EventType(
        'CrossInOut.RemovedFromIssueList',
        sts.struct({
            account: v970.AccountId32,
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'CrossInOut.RemovedFromIssueList',
        sts.struct({
            account: v980.AccountId32,
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'CrossInOut.RemovedFromIssueList',
        sts.struct({
            account: v990.AccountId32,
            currencyId: v990.CurrencyId,
        })
    ),
}

export const linkedAccountRegistered =  {
    name: 'CrossInOut.LinkedAccountRegistered',
    v970: new EventType(
        'CrossInOut.LinkedAccountRegistered',
        sts.struct({
            currencyId: v970.CurrencyId,
            who: v970.AccountId32,
            foreignLocation: v970.V1MultiLocation,
        })
    ),
    v980: new EventType(
        'CrossInOut.LinkedAccountRegistered',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            foreignLocation: v980.V2MultiLocation,
        })
    ),
    v990: new EventType(
        'CrossInOut.LinkedAccountRegistered',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            foreignLocation: v990.V2MultiLocation,
        })
    ),
}

export const addedToRegisterList =  {
    name: 'CrossInOut.AddedToRegisterList',
    v970: new EventType(
        'CrossInOut.AddedToRegisterList',
        sts.struct({
            account: v970.AccountId32,
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'CrossInOut.AddedToRegisterList',
        sts.struct({
            account: v980.AccountId32,
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'CrossInOut.AddedToRegisterList',
        sts.struct({
            account: v990.AccountId32,
            currencyId: v990.CurrencyId,
        })
    ),
}

export const removedFromRegisterList =  {
    name: 'CrossInOut.RemovedFromRegisterList',
    v970: new EventType(
        'CrossInOut.RemovedFromRegisterList',
        sts.struct({
            account: v970.AccountId32,
            currencyId: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'CrossInOut.RemovedFromRegisterList',
        sts.struct({
            account: v980.AccountId32,
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'CrossInOut.RemovedFromRegisterList',
        sts.struct({
            account: v990.AccountId32,
            currencyId: v990.CurrencyId,
        })
    ),
}

export const crossingMinimumAmountSet =  {
    name: 'CrossInOut.CrossingMinimumAmountSet',
    v970: new EventType(
        'CrossInOut.CrossingMinimumAmountSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        })
    ),
    v980: new EventType(
        'CrossInOut.CrossingMinimumAmountSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        })
    ),
    v990: new EventType(
        'CrossInOut.CrossingMinimumAmountSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        })
    ),
}
